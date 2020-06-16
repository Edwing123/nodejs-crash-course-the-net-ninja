const log = console.log.bind(console)
// const greet = name => log(`Hello ${name}`)
// const roll = (min, max) => Math.floor(Math.random() * (max - min) + min)

// let name = "Edwin"
// greet(name)
// greet("Joseph")

// LEARNING THE BASICS OF NODEJS CONCEPTS AND MORE

/**
 * The Global Object
 *
 * When working with JavaScript in the browser (client-side), we have access
 * to something called the global object (window) and this global object is our like the
 * first scope of our program, by default the browser let us acess API from it, it acts
 * as the browser window, and we can acess things like the document object, window width
 * and height properties, the console object (the browser console), storages API and much more.
 *
 * NOTES:
 * We can do this:
 * console.log("Hello World")
 *
 * the console object is from the window object (the global object)
 * here we don't have to do:
 * window.console.log("Hello World")
 * window.document
 *
 * and this is because they are being preffix with the window object,
 * I think this is a special case of course.
 *
 * all that was about how the global object works on client-side (the browser)
 *
 * How this works in NodeJS ?
 * In NodeJS everything is a module, this means for example,
 * if we have a file, let's say utils.js, all the code inside this file
 * only belong to this file and if we wanna use it somewhere else, we would have
 * to import it in that place.
 *
 * Coming back to the client-side, we only have one global object,
 * we can have many scripts (through the <script> tag) and all these scripts's
 * global object (window) would be the same, all of that code in the same context.
 * This doesn't look like a problem at all, but since applications (websites) can become
 * very complex, things like names and global object sharing can be a mess.
 *
 * Of course there are ways to solve this, but that's for another day (actually I don't know how)
 *
 * NodeJS follows this model of a file should have its own space, thus all the code inside it only belongs to it.
 * and if we wanna used it, we have to explicily say which things we wanna expose to the outside world and when
 * importing only those things will be available.
 */

// What is this ?
// log(this) // === {}

/**
 * IF "this" is an empty object (excluding the methods inherented from the Object),
 * where is the console, setTimeout, setInterval ?
 *
 * Well, Things like setTimeout, setInterval, console, document, etc are not really part
 * of JavaScript, they are provided by the runtime, in the case of the client-side, the browser
 * provides these ones and many other APIs.
 *
 * What about NODEJS ? How can be use the console.log method ? Where are these coming from ?
 *
 * As things like console and setTimeout are implemented by the browser, also NODEJS gives us
 * some common object to work with, we can access to the console object, the setTimeout, setInterval
 * and some other that I'll be discovering. But we cannot access the document object,
 * neither navigator, storage APIs, fetch, since those ones are provided/implemented by the browser.
 *
 * All these APIs are located in the "global" object, which is different from "this"
 *
 * If we console.log global, let's see what we get.
 */

// the global global variable, yeah it's a global variable.
// log(global)

/**
 * After console.log-ing
 */


// SOME MORE available global variables 
// log(__dirname) // full directory path where this script is executed
// log(__filename) // full script path


// MODULES
/**
 * One nice thing with NodeJS is that we can make our code more clean by
 * splitting the functionality of our program into separate files, and then 
 * have just one main file and import that functionality (from other files). 
 * 
 * This thing of modules is more complex, not gonna, I don't know a lot about it,
 * but I see how they are useful. 
 * 
 * I'M JUST GONNA SAY THAT NODEJS USES/APPLIES SOMETHING CALLED COMMONJS
 * That thing of modules is a very big topic.
 * */

/**
 * CommonJS imports and exports
 * 
 * To import a module (another JavaScript file) we use the require function
 */

// this returns an empty {} (encluding inherited things) 
// log(require("./users"))

/**
 * And that's because if we want to make something available 
 * we have to export it, and since in the file "users.js" we are 
 * not doing anything of that, so we get that.
 * 
 * Let's remember that if we say:
 */

log(this) // get an empty object

/**
 * Well that's the same with the "users.js" file
 * 
 * So what we do ?
 * The way to export things is through the module.exports which by default is
 * an empty object and that's why we are getting that.
 */ 

// const users = require("./users")
// destructing an object
// const { getUserById } = require("./users")

// cool
// log(users)

// cool
// log(getUserById(1))


//BUILT-IN MODULES
/**
 * Also NodeJS provides us of a lot of built-in modules,
 */


// os stands for Operating System
// this modules gives us an API to see
// information about the operating system
const os = require("os")

// why platform are we ?
const platform = os.platform()
const homedir = os.homedir()

log(platform) // right now it's linux for me.
log(homedir)