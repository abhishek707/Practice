// POST data using fetch

const fetch = require('node-fetch')

fetch('https://reqres.in/api/users', {
    method: 'POST',                             // METHOD name
    headers: {                                  // Mandatory    
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({                      // JSON.stringify is absolutely necessary
        name: 'User 1'
        })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log('ERROR'))