let trim = function(){
    let a = "     Shruti   Sajjan  "

    console.log(a.trim())
}

let changeToLowerCase = function() {
    let a = "SHRUTI SAJJAN"
    console.log(a.toLowerCase())
}

let changeToUpperCase = function(){
    let a = "shruti sajjan"
    console.log(a.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase