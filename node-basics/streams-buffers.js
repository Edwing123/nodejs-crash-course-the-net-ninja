const log = console.log.bind(console)

/**
 * I don't have any experience with this.
 *
 * From the video:
 * there can be a time (pretty much often) when a file can be so big
 * and we cannot start using it until it is completely read/downloaded,
 * so with streams we can start using that file, before it has finished loading.
 *
 * For example, a youtube video, we start watching a video and it doesn't need
 * to be fully loaded.
 *
 * From The Net Ninja:
 *
 * Imagine we have a pool, it's empty, and in the other side we have some kind of
 * source of water, how do we fill the pool ?
 *
 * We have two options:
 *
 * - first we get some container and fill it with water from the
 * source of water, then we can take that container and fill the pool with the water
 * from the container and start using it.
 *
 * - second, we can create a stream from the source of water to the pool, then the water
 * will start going to the pool and we can use the pool right away with the water it's coming.
 *
 *
 * Data streaming works the same, we have:
 *
 * [browser] -------[|||||]---<--[||||||]---[||||  ]---[data]
 *
 * We send throughout a stream chunks of data a bit at a time.
 * These little packages of data are called buffers.
 */

const fs = require("fs")

// creating big file
// let bigPoemPath = "./assets/big-poem.txt"
// let poem = ""
// const names = ["いさやな", "ダニエラ", "レベッカ", "ミシェル"]
// let j = 0

// for (let i = 0; i < 2000; i++) {
//   if (j >= names.length) j = 0

//   let name = names[j]
//   poem += `I love you ${name}`.repeat(10) + "\n"

//   j++
// }

// fs.writeFile(bigPoemPath, poem, (err) => {
//   if (err) {
//     log(err)
//   }
// })

// read the big poem
const bigPoemReadStream = fs.createReadStream("./assets/big-poem.txt", {
  encoding: "utf-8"
})

// write stream
const secretPoemWriteStream = fs.createWriteStream("./assets/secret.txt")

// listen
// bigPoemReadStream.on("data", (poemChunk) => {
//   log("-----  POEM CHUNK -----")
//   log(poemChunk.toString())
//   log(poemChunk)

// write to write-stream
//   secretPoemWriteStream.write(poemChunk)
// })

// piping (from readStream to writeStream )
// bigPoemReadStream.pipe(secretPoemWriteStream)

// bigPoemReadStream.on("end", () => {
//   log("Read stream end")
// })


/**
 * This is just a simple demostration from the tutorial,
 * very interesting, I always wanted to know how Mega (cloud storage)
 * sends chunks of data and shows you a progress bar 0_0.
 * Of course this was a simple demostration, there's more to it and I'll read
 * about it, I hope sooooo.
 */