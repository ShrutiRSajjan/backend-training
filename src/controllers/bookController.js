const BookModel= require("../models/bookModel")
const mongoose = require('mongoose');

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

// 2- return all the bookName and authorName only.
const allBooksList = async function (req, res) {
    let list = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}

//3- Return all those bookName which published in a inputed year
const yearDetails = async function (req, res) {
    let yearList= await BookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)
 }

  // Task 4- send the reponse after satisfying the any random condition
const particularBooks = async function (req, res) {
    
    let specificBooks = await BookModel.find(req.body)
    res.send({msg:specificBooks})
}

// Task 5- send bookName of those book only which have indianprice of 100 inr or 200 inr or 500 inr.
const priceDetails= async function(req,res){
    let list = await BookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })
}

//Send the details of those books which are in stock or having more than 500 pags.
const randomBooks= async function(req, res) {
    let allBooks = await BookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}


const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find(  { authorName : "SK" , isPublished: true }  )
    res.send({msg: allBooks})
}

module.exports.createBook= createBook
module.exports.allBooksList=allBooksList
module.exports.yearDetails=yearDetails
module.exports.particularBooks=particularBooks
module.exports.priceDetails=priceDetails
module.exports.randomBooks=randomBooks
module.exports.getBooksData= getBooksData