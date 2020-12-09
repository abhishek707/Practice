const async = require('async')

// The word “async” before a function means one simple thing: a function always returns a promise

async function f1(){                // 1
    return 1                        // returns a promise
}
console.log(f1())

async function f2(){                // 2
    return Promise.resolve(2)       // explicitly returning a promise
}
console.log(f2())

async function f3(){                // 3
    return 3
}
f3().then(a => console.log(a))
