const publisherModel= require("../models/publisherModel")
const bookModel = require("../models/bookModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await publisherModel.create( publisher)
    res.send({data: publisherCreated})
}

const getPublisherData= async function (req, res) {
    let publishers = await publisherModel.find()
    res.send({data: publishers})
}



module.exports.getPublisherData= getPublisherData
module.exports.createPublisher= createPublisher
