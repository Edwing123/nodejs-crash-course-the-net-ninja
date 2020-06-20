const log = console.log.bind(console)

/**
 * What is Express ?
 * From express home page:
 * Fast, unopinionated, minimalist web framework for Node.js
 */

const express = require("express")

// create express App (instance)
const app = express()

// handlers for requests (routing)
app.get("/", (req, res) => {
  // res.write()
  // res.end()
  res.sendFile("./views/index.html", {
    root: __dirname
  })

  // infers content-type and status-code for us
  // res.send("<h1>Hello World</h1>")
})

app.get("/about", (req, res) => {
  // res.send("<h1>About page</h1>")
  res.sendFile("./views/about.html", {
    root: __dirname
  })
})

app.get("/about-me", (req, res) => {
  res.redirect("/about")
})

// app.get("*", (req, res) => {
//   res.sendFile("./views/404.html", {
//     root: __dirname
//   })
// })

app.use((req, res) => {
  // res.statusCode = 404
  // res.status(404)
  res.status(404).sendFile("./views/404.html", {
    root: __dirname
  })
})

// listen for requests
const port = 8080
app.listen(port, () => {
  const message = `listening on http://localhost:${port}`
  log(message)
})
