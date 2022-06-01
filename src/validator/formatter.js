let formatME='functionUp       '

const lowCase= function lowercase(formatME){        //For lower Case
  let result= formatME.toLowerCase()
console.log(result)

}
lowCase(formatME);

const upperCaseMe =function upercase(formatME){         //For upper Case
    let result=formatME.toUpperCase()
    console.log(result)
}
upperCaseMe(formatME);


const trimText =function trimtext(formatME){            //For trim
    let result=formatME.trim()
    console.log(result)
}
 trimText(formatME);


module.exports.trim=trimText
module.exports.uppercase=upperCaseMe
module.exports.lowercase=lowCase



