const batchName = "plutonium"

let printName = function() {
    console.log('batch name is ', batchName)
}

module.exports.name = batchName
module.exports.printName = printName
