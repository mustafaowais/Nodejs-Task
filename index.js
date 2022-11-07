const { query } = require('express')
const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/',(req,res) => {
    res.send('hello world!')
})
app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
})