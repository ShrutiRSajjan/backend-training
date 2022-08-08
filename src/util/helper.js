 const d = new Date();
const monthly = function printMonth(){
    console.log("current Month is: ", d.getMonth()+1)
}

const a = new Date();
const date = function printdate(){
    console.log("current date is: ", a.getDate())
}

const batch = function printBatchData(){
    console.log("plutonium, w3d5, the topic for today is :")
}


module.exports.output = monthly
module.exports.output1 = date
module.exports.batchInfo = batch
