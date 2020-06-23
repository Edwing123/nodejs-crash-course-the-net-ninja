const log = console.log.bind(console)

/**
 * What is Express ?
 * From express home page:
 * Fast, unopinionated, minimalist web framework for Node.js
 */

const express = require("express")
const blogs = require("./blogs.json")

// create express App (instance)
const app = express()

// register view engine
app.set("view engine", "ejs")
// app.set("views", "./views")

// handlers for requests (routing system)
app.get("/", (_, res) => {
  res.render("index", {
    title: "Home",
    blogs: blogs,
    year: new Date().getFullYear(),
    activeLink: "home"
  })
})

app.get("/about", (_, res) => {
  res.render("about", {
    title: "About",
    year: new Date().getFullYear(),
    activeLink: "about"
  })
})

app.get("/blogs/creator", (_, res) => {
  res.render("blog-creator", {
    title: "Creator",
    year: new Date().getFullYear(),
    activeLink: "blog-creator"
  })
})

app.use((_, res) => {
  res.status(404).render("404", {
    title: "Not found",
    year: new Date().getFullYear(),
    activeLink: ""
  })
})

// listen for requests
const port = 8080
app.listen(port, () => {
  const message = `listening on http://localhost:${port}`
  log(message)
})
