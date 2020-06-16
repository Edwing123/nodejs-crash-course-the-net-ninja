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
 * which is just a computer with software to server files, and if we want
 * to access (let's say request, idk) to that computer we have to know its ip
 * address, example of ip is -> 127.169.0.1, 172.217.15.196 (goolge ip address),
 * this of course is not easy to remember and that's where domain names come into
 * play, they act as masks for the ip address, instead of writing the ips.
 *
 * This is just a part of the whole pictures, now that we use domains there's still work
 * made by the browser, for example, repraring the HTTP request to send it to that server,
 * also wait for the response and display it.
 */

// CREATING A SERVER
const http = require("http")


/**
 * The http module is used to create a server
 */

const server = http.createServer((request, response) => {
  log(`Request made`)
})

// make our server starts listening
// provide it a port & hostname
server.listen(3000, "localhost", () => {
  log("http://localhost:3000")
})

/**
 * So the localhost is a domain name, and a domain name
 * is just a mask for a ip address, the ip address for "localhost"
 * is 127.0.0.1, which is an ip address which leads to our own computer.
 * Right now if I type localhost, it leads me to a page "Apache2 Ubuntu Default Page",
 * If I type that, the default port for localhost is "80" -> localhost:80 and it seems
 * apache2 server is listening in that port :).
 */