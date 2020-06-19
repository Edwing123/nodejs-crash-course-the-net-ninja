/**
 * NodeJS comes with useful modules to work with the operating system,
 * create a server and much more.
 *
 * In JavaScript we can use third-party packages, let's say VueJS or Lodash.
 * In client-side we add all these packages with the <script> tag, we dont't have
 * that in NodeJS, but we can import things :). there's something called npm
 * which stands for node package manager, npm is a tool to manager third-party packages,
 * these ones come from npm the ecosystem of packages.
 * used to
 */
const createHTMLPage = (title, headline) => {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>${title}</title>
        <style>
          * { box-sizing: border-box; }
          h1 { margin: 2rem 0; text-align: center; }
        </style>
      </head>
      <body>
        <h1>${headline}</h1>
      </body>
    </html>
  `
}

// creating a little server
const http = require("http")
const url = require("url")
const _ = require("lodash")


const server = http.createServer()

server.on("request", (request, response) => {
  const url = request.url
  const parsedURL = new URL(url, "http:localhost:8080")
  const params = parsedURL.searchParams

  // headers
  response.setHeader("Content-Type", "text/html")

  // routing system
  let responsePage
  let statusCode = 200

  const page = params.get("page")
  // console.log(page)

  switch (page) {
    case null:
      responsePage = createHTMLPage("Home", "Welcome to the home page")
      break
    case "":
      // responsePage = createHTMLPage("Home", "Welcome to the home page")
      response.setHeader("Location", "/")
      response.statusCode = 301
      response.end()
      break
    case "about":
      responsePage = createHTMLPage("About", "Welcome to about page")
      break
    default:
      responsePage = createHTMLPage("Not found", "Page not found")
      statusCode = 404
  }

  response.statusCode = statusCode
  response.end(responsePage)
})

const port = 8080
server.listen(port, () => {
  console.log(`listening on http:localhost:${port}`)
})

/**
 * The package.json
 * 
 * This file contains information about our project,
 * name, version, dependecies, devDependecies
 * 
 * dependecies are as they say: things our project depends on,
 * for example, nodemon is a dependecy, but at the same is a devDependecy,
 * devDependency means a dependency which is only used in development.
 * 
 * {
    "name": "npm",
    "version": "1.0.0",
    "description": "Working with third-party packages",
    "main": "app.js",
    "author": "Edwing123 <egarciavalle2014@gmail.com>",
    "license": "MIT",
    "devDependencies": {
      "nodemon": "^2.0.4"
    },
    // also dependencies, these ones are used in development and production
    "dependencies": {}
  }
 */
