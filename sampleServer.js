var http = require('http')
var fs = require('fs')
var url = require('url')


http.createServer(function(req,res){

    var q = url.parse(req.url)
    console.log(q.pathname)

    if(req.url === '/'){
        fs.readFile('samplehtml.html',function (err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()
        })
    }else if(req.url === '/login'){
        res.write('login page')
        res.end()
    }else{
        res.write('error')
        res.end()
    }

}).listen(3000,function (){
    console.log('server started')
})
