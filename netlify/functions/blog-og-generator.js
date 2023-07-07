const chromium = require("@sparticuz/chromium")
const puppeteer = require("puppeteer-core")
const fs = require("fs")
const Mustache = require("mustache")
const blogs = require("../../src/data/blogList.json")

exports.handler = async function (event, context) {
  // Use local Chrome when testing.
  let localChrome =
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  let executable = fs.existsSync(localChrome)
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

  let page = await browser.newPage()

  // Read the template HTML off of disk.
  let slug = event.queryStringParameters?.slug
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
    body: (await page.screenshot()).toString("base64"),
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
