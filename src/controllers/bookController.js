const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    const check_id=book.author
    console.log(check_id)
    
    const checkpublisher_id= book.publisher 
    const checkForAuthors=await authorModel.findOne({_id:check_id})
    if(!check_id)res.send({msg:"author is not present"})
    else if (!checkpublisher_id)res.send({msg:"publisher is not present"})
    else if (! await authorModel.findOne({_id:check_id}))res.send({msg:"the author is not present for this check_id"});
    else if (! await publisherModel.findOne({_id:checkpublisher_id}))res.send({msg:"the author is not present foir this checkpublisher_id"});

    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}





module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
