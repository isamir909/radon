const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route);


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://samirlohiya909:Lohiya@123@cluster0.bebqxbp.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// mongoose.connect("mongodb+srv://samirlohiya909:lohiya123@cluster0.ld7kv.mongodb.net/?retryWrites=true&w=majority",{
//     useNewUrlParser:true

// })


// .then( () => console.log("mongoDB is connected"))
// .catch(err => console.log(err))



mongoose.connect("mongodb+srv://samirlohiya909:lohiya123@cluster0.ld7kv.mongodb.net/samirlohiya909?retryWrites=true&w=majority",{
        useNewUrlParser:true
    
    })
    
    
.then( () => console.log("mongoDB is connected"))
.catch(err => console.log(err))




app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
