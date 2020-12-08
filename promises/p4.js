// Promise - All and Race

let cleanRoom = () => {
    return new Promise((res)=> {
        setTimeout(()=> {
            res('Cleaned the Room ')
        }, 3000)        
    })
}

let removeGarbage = () => {
    return new Promise((res) => {
        setTimeout(()=> {
            res('Removed the Garbage ')
        }, 2000)    
    })
}

let winIceCream = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res('Won Ice Cream ')
        }, 1000)
    })
}

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then((a)=>{
    console.log('all',a)
    console.log('all finished')
})

Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then((a)=>{
    console.log('race',a)
    console.log('One finished')
})


