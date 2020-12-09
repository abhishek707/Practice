async function f(){
    let p = new Promise((resolve) => {
        setTimeout(()=> resolve('done'), 1000)
    })

    let result = await p
    console.log('f', result)
    return result
}

f().then(a => console.log('from then', a))
console.log('Last console',f())
