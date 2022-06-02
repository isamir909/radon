let formatME = 'functionUp          '

const lowCase = function() {        //For lower Case
  let result = formatME.toLowerCase()
  console.log(result)

}


const upperCaseMe = function () {         //For upper Case
  let result = formatME.toUpperCase()
  console.log(result)
}



const trimText = function () {            //For trim
  let result = formatME.trim()
  console.log(result)
}



module.exports.trimText = trimText
module.exports.upperCaseMe = upperCaseMe
module.exports.lowCase = lowCase



