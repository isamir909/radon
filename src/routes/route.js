const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();
const lodash = require('lodash')
// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

router.get('/hello', function (req, res) {
    const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('en', { month: 'long' }))
    // months=['January','February','March','April','May','June','July','August','September','October','November','December']
    let a = lodash.chunk(months, 2);
    console.log(a)


    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19,]
    let tail = lodash.tail(odd);
    console.log(tail)


    let array1 = [1, 2, 5, 4, 1, 4, 2]
    let array2 = [1, 2, 5, 4, 1, 4, 7, 1, 7, 2]
    let array3 = [1, 2, 5, 4, 1, 4, 2, 5, 8, 5]
    let array4 = [1, 2, 5, 4, 1, 4, 2, 4, 7]
    let array5 = [1, 2, 5, 4, 1, 4, 2, 6, 7, 8, 4, 6]
    let combine = lodash.union(array1, array2, array3, array4, array5)
    console.log(combine);


let myFav=[["horror","The Shining"],["dramas","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

        let obj=lodash.fromPairs(myFav)
        console.log(obj)


    res.send('Hello there! here is the list of months')
});

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


module.exports = router;
// adding this comment for no reason