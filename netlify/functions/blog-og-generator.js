import * as fs from "node:fs"
import puppeteer from "puppeteer-core"
import chromium from "@sparticuz/chromium"
import Mustache from "mustache"
import blogs from "../../src/data/blogList"

export async function handler(event) {
  // Use local Chrome when testing.
  const localChrome =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  const executable = fs.existsSync(localChrome)
    ? localChrome
    : chromium.executablePath()

  // Launch Chrome.
  const browser = await puppeteer.launch({
    args: fs.existsSync(localChrome) ? puppeteer.defaultArgs() : chromium.args,
    executablePath: await executable,
    headless: true,
    // The optimum size for OG images.
    defaultViewport: { height: 900, width: 1600 },
  })

  const page = await browser.newPage()

  // Read the template HTML off of disk.
  const slug = event.queryStringParameters.slug
  let content = fs
    .readFileSync("./netlify/functions/templates/blog-og-image.html")
    .toString()

  // Populate the template based on the user's vote data from the database.
  content = populateTemplate(
    content,
    // Get the title out of the querystring.
    await getBlogData(slug)
  )

  await page.setContent(content, {
    timeout: 0,
    waitUntil: ["domcontentloaded", "networkidle0"],
  })

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "s-maxage=86400",
    },
    body: (
      await page.screenshot({
        optimizeForSpeed: true,
      })
    ).toString("base64"),
    isBase64Encoded: true,
  }
}

function populateTemplate(content, data) {
  // Replace all instances of e.g. `{{ title }}` with the title.
  content = Mustache.render(content, data)
  return content
}

function getBlogData(slug) {
  return blogs.find((item) => item.slug === slug)
}
