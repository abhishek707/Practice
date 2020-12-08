// Promise - All and Race

let cleanRoom = () => {
    return new Promise((res,rej)=> {
        setTimeout((a)=> {
            console.log(a)
            res('Cleaned the Room ')
        }, 3000, 'Third param testing')        
    })
}

let removeGarbage = () => {
    return new Promise((res,rej) => {
        // setTimeout(()=> {
            res('Removed the Garbage ')
        // }, 2000)    
    })
}

let winIceCream = () => {
    return new Promise((res,rej) => {
        setTimeout(res,1000, 'Won Ice Cream')    // Check this out
    })
}

Promise.all([cleanRoom(),removeGarbage(),winIceCream()])
.then((a)=>{
    console.log('all', a)
    console.log('all finished')
})
.catch(e => console.log('Catch All', e))

// Promise.race([cleanRoom(),removeGarbage(),winIceCream()])
// .then((a)=>{
//     console.log('race',a)
//     console.log('Race finished')
// })
// .catch(e => console.log('Catch Race', e))





// NOT SUPPORTED ---->>>>>>>>>

// Promise.any([cleanRoom(),removeGarbage(),winIceCream()])
// .then((a)=>{
//     console.log('any',a)
//     console.log('Any finished')
// })
// .catch(e => console.log('Catch any', e))
