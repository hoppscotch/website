export default async (request, context) => {
  // Get the page content.
  const response = await context.next()
  const page = await response.text()
  // Look for the OG image generator path.
  const search = "https://next.hoppscotch.com/.netlify/functions/generator"
  // Replace it with the path plus the querystring.
  const replace = `https://next.hoppscotch.com/.netlify/functions/generator?key=${
    request.url.split("/blog/")[1]
  }`

  return new Response(page.replaceAll(search, replace), response)
}
