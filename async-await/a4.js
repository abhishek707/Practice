const { reject } = require("async")

function f1(loc){
    return new Promise((resolve,reject)=> {
        console.log(`Making request to ${loc}`)
        if(loc === 'Google')
            resolve('Google says Hi')
        else
            reject('We cannot talk to Google')
    })
}

function f2(response){
    return new Promise((resolve,reject) => {
        console.log('Processing Response')
        resolve(`Extra Information ${response}`)
    })
}

// Instead of then statement we are using Async statement

async function f3(){
    try {
        const r1 = await f1('Google')
        console.log('Response received')
        const r2 = await f2(r1)
        console.log(r2)
    }
    catch(e) {
        console.log(e)
    }
}

f3()