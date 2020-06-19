const log = console.log.bind(console)

/**
 * Following the third video of the series.
 *
 * This time the tutorial is about clients and servers,
 * What's going on behind the process of a client requesting
 * some type of resource (html, css, js, images, etc) and the
 * server responding to it.
 *
 * IP addresses & domains
 *
 * When browsering the internet, every computer has a unique identifier,
 * this one is used to "identify" a particular computer.
 *
 * When you publish a website, your website will be hosted on a server,
 * which is just a computer with a software that servers files (Idk how), and if we want
 * to access (let's say request, idk) to that computer we have to know its ip
 * address, example of ip is -> 127.169.0.1, 172.217.15.196 (goolge ip address),
 * this of course is not easy to remember and that's where domain names come into
 * play, they act as masks for the ip address, instead of writing the ips.
 *
 * This is just a part of the whole picture, now that we use domains there's still work
 * made by the browser, for example, preparing the HTTP request to send it to that server,
 * also wait for the response and display it.
 *
 * NOTE: there's more, http is just a piece of the puzzle
 */

// CREATING A SERVER
const http = require("http")
const fs = require("fs")

const logger = ({ url, method }) => {
  log(`logger -> ${url} - ${method}`)
}

const htmlResponse = `
  <!doctype html>
  <html lang="en">
    <head>
      <title>&lt;Me.Blog /&gt;</title>
    </head>
    <body>
      <h1>Welcome to my website</h1>
    </body>
  </html>
`

/**
 * The http module is used to create a server
 */

const server = http.createServer((request, response) => {
  // log(request)
  // log(response)
  log(`Request made`)
  // logger(request)

  // response.write("Hello World")
  // response.end()

  // set headers
  // response.setHeader("Content-Type", "text/plain")
  response.setHeader("Content-Type", "text/html")

  // write a response
  // response.write("Hello World")
  // response.write(htmlResponse)

  // our routing system
  let url = request.url
  let view = "./views/"

  switch (url) {
    case "/": {
      view += "index.html"
      response.statusCode = 200
      break
    }
    case "/about": {
      view += "about.html"
      response.statusCode = 200
      break
    }
    // redirect
    case "/about-me": {
      response.statusCode = 301 // Moved permanently
      response.setHeader("Location", "/about")
      response.end()
      break
    }
    default: {
      view += "404.html"
      response.statusCode = 404
      break
    }
  }


  // read html file content and send it
  fs.readFile(
    view,
    {
      encoding: "utf-8"
    },
    (err, content) => {
      if (err) {
        log(err)
        response.end()
      } else {
        // response.write(content)
        response.end(content)
      }
    }
  )

  // end the response
  // response.end()
})

// make our server starts listening
// provide it a port & hostname
server.listen(3000, "localhost", () => {
  log("server listening on: http://localhost:3000")
})

/**
 * So the localhost is a domain name, and a domain name
 * is just a mask for an ip address, the ip address for "localhost"
 * is 127.0.0.1, which is an ip address which leads to our own computer.
 * Right now if I type localhost, it leads me to a page "Apache2 Ubuntu Default Page",
 * If I type that, the default port for localhost is "80" -> localhost:80 and it seems
 * apache2 server is listening in that port :).
 */

/**
 * The request is an object containing information about the request sent to our server,
 * it has the headers, url, method used and much more.
 *
 * The response represents the response which will be sent back to the client who made
 * the request.
 */
