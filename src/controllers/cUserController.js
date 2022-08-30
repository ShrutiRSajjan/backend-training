const cUserModel= require("../models/cUserModel")

const createUser= async function (req, res) {
    let data = req.body

    let savedData= await cUserModel.create(data)
    res.send({data: savedData})
}

module.exports.createUser= createUser
