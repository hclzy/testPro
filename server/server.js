const express = require('express')

const app = express()
app.get('/',function (req,res) {
    res.send('<h1> hello word11</h1>')
})
app.get('/data',function (req,res) {
    res.json({name:'sb reacrt fsdf',type:'string'})
})
app.listen(9093,function () {
    console.log('node app start at port 9093')
})