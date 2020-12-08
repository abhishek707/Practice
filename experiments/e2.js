const express = require('express')

app.get('/', (req,res) => {
    req.send('abc')
})

