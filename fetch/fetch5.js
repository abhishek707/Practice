//Another way to check if the response was a success

const fetch = require('node-fetch')

fetch('https://reqres.in/api/users')
    .then(res =>{
        if(res.ok){                         // Using res.ok
            console.log('SUCCESS')
            return res.json()
        } else {
            console.log("Not Successful")
            return 0                        // Just having fun with the zero
        }
    } )
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
