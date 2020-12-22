function outer(o){
    return function inner(i){
        return o + i
    }
}

let newVal = outer(3) 
console.dir(newVal)
console.log('Final Val', newVal(6)) 
