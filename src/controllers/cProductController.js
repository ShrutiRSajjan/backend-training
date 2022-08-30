const cProductModel= require("../models/cProductModel")
const authorModel = require ("../models/authorModel")

const createProduct= async function (req, res) {
    let data = req.body

    let savedData= await cProductModel.create(data)
    res.send({data: savedData})
}

module.exports.createProduct= createProduct
