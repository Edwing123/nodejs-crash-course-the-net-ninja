const log = console.log.bind(console)

/**
 * NodeJS provides us a module to work with our operating system
 *
 * We can read files, create them, delete them and much more.
 *
 * NOTE: All of these can be found in official documentation.
 */

const fs = require("fs")

/**
 * NodeJS has an event loop.
 *
 * When making i/o operations, let's say reading a file:
 */

// file path and a callback function
fs.readFile("./assets/poem.txt", (err, poem) => {
  // check if some error happened during reading
  if (err) {
    log(err)
  }

  // I'm getting a buffer hahaha
  // log(poem)

  // this works, cool.
  // log(poem.toString())
})

/**
 * Why the callback function ?
 *
 * NodeJS docs/introduction tells us about "no blocking i/o vs blocking i/o",
 * i/o stands for input/output and it's basically doing things like file reading,
 * creation, etc. Also this can be when doing http request. The thing is that reading
 * from a file can take time, thus our code will be waiting to be executed until the
 * file reading finishes, that's what it's called blocking i/o, an operation that blocks
 * our program execution.
 *
 * The good thing is that NodeJS gives us a way to do i/o operations a in "asynchronous way",
 * and this is done through it's callback based approach. So that's why we did that above in the
 * example.
 *
 * event loop is doing some job with this.
 */

// file path, file content
// if it doesn't exist, it creates it
fs.writeFile("./assets/my-song.txt", "Hello Darkness my friend", (err) => {
  if (err) {
    log(err)
  }

  log("File was written")
})

/**
 * All these methods use a callback, but also there's a synchronous version of them,
 * meaning we don't need callbacks, well with the price of making our code wait until
 * the operation finishes.
 */

const imagesDirPath = "./assets/images"

if (!fs.existsSync(imagesDirPath)) {
  fs.mkdir("./assets/images", (err) => {
    if (err) {
      log(err)
    }

    log("directory created")
  })
}


// removing a file
let mySongFilePath = "./assets/my-song.txt" 
if (fs.existsSync(mySongFilePath)) {
  fs.unlink(mySongFilePath, (err) => {
    if (err) {
      log(err)
    }

    log("File removed")
  })
}
