const p = new Promise((res,rej) => {
    const a = 2
    if(a==1)
        res('Bullah')
        if(a != 1)
            rej('Hezbollah')
})

p
.then(a => console.log('From Then',a))
.catch(e => console.log('From Catch',e))
