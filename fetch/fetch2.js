// Since fetch returns a Promise, we can use .then().catch() or Async-await on it.

const fetch = require('node-fetch')

fetch('https://reqres.in/api/users')
    .then(result => console.log(result))

 // The above response is not properly readable, some of the fields are not formatted properly.
 // The body field in the response object is not properly accessible.   