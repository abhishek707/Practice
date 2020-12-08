const async = require('async')

async function f1(){           // 1
    return 1
}
f1()

async function f2(){            // 2 
    return Promise.resolve(2)
}
f2()

async function f3(){            // 3
    return 1
}
console.log(f3())

async function f4(){            // 4 
    return Promise.resolve(2)
}
console.log(f4())

function f5(){                  // 5
    return 3
}
f5()

function f6(){                  // 6
    return 3
}
console.log(f6())
