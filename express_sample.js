const express = require('express')
const path = require('path')

const app = express()

app.use(function(req,res,next){
    console.log('request called')
    next()
})

app.get('/',function(req,res,next){
    res.sendFile(path.join(__dirname,'samplehtml.html'))
    next()
})

app.use(function(req,res){
    console.log('end')
})

app.get('/about',(req,res)=> res.send('about'))

app.listen(3000,function(){
    console.log('server started')
})