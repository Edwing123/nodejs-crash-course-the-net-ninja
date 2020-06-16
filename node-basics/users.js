const users = [
  {
    id: 1,
    name: "Edwin",
    age: 19
  },
  {
    id: 2,
    name: "Joseph"
  },
  {
    id: 3,
    name: "Yader",
    age: 10
  }
]

function addUser(user) {
  let id = users.length + 1
  user.id = id
  users.push(user)
}

function getUserById(id) {
  return users.find((user) => user.id === id)
}


/**
 * module.exports
 * 
 * module is a global variable available into this file
 */

// whatever we export is what we will be getting when importing
// module.exports = users
module.exports = {
  addUser,
  getUserById
}
