const printDate=function(){
    console.log(01)
}
const printMonth=function(){
    console.log(06)
}
const getBatchInfo=function(){
    console.log("Roadon, W2D17, the topic for today is Nodejs module system")
}

module.exports.date=printDate()
module.exports.month=printMonth()
module.exports.bInfo=getBatchInfo()