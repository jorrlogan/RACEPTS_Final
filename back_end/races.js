const express = require('express');
const bodyParser = require("body-parser");

const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
// mongoose.connect('mongodb://localhost:27017/races', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// });

const raceSchema = new mongoose.Schema({
    name: String,
    price: String,
    date: String,
});

raceSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

raceSchema.set('toJSON',{virtuals: true});

const Race = mongoose.model('Race', raceSchema);

app.get('/races', async (req,res) => {
    try{
        let races = await Race.find();
        res.send({races: races});
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

module.exports = {
  routes: router,
  model: Race,
};

// import the users module and setup its API path
// const users = require("./users.js");
// app.use("/api/users", users.routes);

// app.listen(3001, () => console.log('Server listening on port 3001!'));