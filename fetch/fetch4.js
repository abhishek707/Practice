// Now we will try to get the data for a single user.

const fetch = require('node-fetch')

fetch('https://reqres.in/api/users/23')   // Notice the User 23 in the URL. User 23 does not exist, 
                                          // We will get empty response
    .then(res => res.json())
    .then(data => console.log(data))     // This will return a 404 GET response in the browser
    .catch(err => console.log('error'))      // We will not get an Error text from catch even though we get a 
                                            // 404 response back because fetch succeeds no matter what,
                                            // the only time we will get a catch error when fetch fails
                                            // either because of a network error or browser connection problem
                                            // If API fails we will not get an error from Catch.
                                          