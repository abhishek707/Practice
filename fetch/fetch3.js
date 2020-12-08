// We need to call a method on the fetch response to convert it into a properly readable JSON.

const fetch = require('node-fetch')

fetch('https://reqres.in/api/users')
    .then(result => result.json())     // Use .JSON method, This will return another Promise
    .then(data => console.log(data))   // Here we will get the proper Response
    