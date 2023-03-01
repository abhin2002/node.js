var read=require('readline-sync')

var value=read.question('Enter a number : ')
console.log(value)

function sample(){
    console.log('hello')
    return 10
}

val=sample()
console.log(val)





//callback used to pass a function as argument as asynchronyse type