const async = require('async')

async function f1(){
    return  Promise.resolve(1)
}

f1().then(a => console.log(a))

