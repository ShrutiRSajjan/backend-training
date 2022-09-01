const jwt = require("jsonwebtoken")

const validateToken = function(req,res,next){
    let token = req.headers["x-Auth-token"];
    if(!token) token = req.headers["x-auth-token"];

    //if no token is present in the request header return error
    if(!token) return res.send({ status: false, msg: "token must be present"});

    console.log(token)

    //if token is present then decode the token with verify function
    //verify takes two inputs
    //input 1 is the token to be decoded
    //input 2 is the same secreat with which the tocken generated
    //check the value of the decoded token yourself

    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if(!decodedToken){
        return res.send({ status: false, msg: "token is invalid"});
    }
    req.loggedInUser = decodedToken.userId
    next()
}
    const checkIfAuthorized = function(req,res,next){
        let requestedUserId = req.params.userId
        if(requestedUserId != req.loggedInUser){
            return res.send({status: false, msg: "permission denied"})
        }
        next()
    }

 module.exports.validateToken=validateToken
 module.exports.checkIfAuthorized=checkIfAuthorized









// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }

// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }

