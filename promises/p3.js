let cleanRoom = () => {
    return new Promise((res) => {
        res('Cleaned the Room ')
    })
}

let removeGarbage = (r) => {
    return new Promise((res) => {
        res(r + 'Removed the Garbage ')
    })
}

let winIceCream = (w) => {
    return new Promise((res,rej) => {
        // res(w + 'Won Ice Cream ')
        rej('Error Found')
    })
}

cleanRoom().then((a)=> {
    // console.log(cleanRoom())
    //  console.log(removeGarbage(a))
    //  console.log(winIceCream(a))
     return removeGarbage(a)
}).then((b) => {
    // console.log(winIceCream(b))
    return winIceCream(b)
}).then((c) => {
    console.log(c + 'Finished ')
}).catch((e)=> {
    console.log(e)
        throw e
})
