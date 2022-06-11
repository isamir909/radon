const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://samirlohiya909:Lohiya123@samirlohiya.nszppy8.mongodb.net/Book-Author-Publisher?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

let address=require(`address`)

let Assignment = function (req, res, next) {
    let currentdate = new Date();
    let datetime =
        currentdate.getDay() + "/"
        + currentdate.getMonth() + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();

  let  ip = address.ip();
   let url=req.originalUrl

    console.log(`${datetime}  ${ip} ${url}` )
    next();
};


app.use(Assignment)






app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
  


