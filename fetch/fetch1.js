const fetch = require('node-fetch')

// The url passed in fetch is a sample url
// console.log fetch --->>> We find that it returns a Promise

console.log(fetch('https://reqres.in/api/users'))

