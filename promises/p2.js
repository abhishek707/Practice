const p = new Promise((res,rej) => {
    const a = 2
    if(a==1)
        res('Bullah')
        if(a != 1)
            rej('Hezbollah')
})

console.log('The pro', p)

p.then((a) => {
    console.log(p)
    console.log('The Result:-',a)
    return 'abhishek'
}).then(
    console.log('abc')
).then( _ => {
    console.log('zzz')
    return 'Hehehehe'
}).then(
    console.log('checking....')
).then((b)=> {
    console.log('From Return:-',b)
}).catch((e) => {
    console.log('The Error:-',e)
})
