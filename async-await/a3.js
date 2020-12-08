async function f(){
    let p = new Promise((resolve) => {
        setTimeout(()=> resolve('done'), 1000)
    })

    let result = await p
    console.log(result)
}

f()
