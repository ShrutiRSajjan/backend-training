const AuthorModel= require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}

const getBooksWithAuthorDetails = async function(req,res){
    let books = await bookModel.find()
    res.send({data: books})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData
module.exports.getBooksWithAuthorDetails=getBooksWithAuthorDetails