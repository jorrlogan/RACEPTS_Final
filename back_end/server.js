
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

// setup express
const app = express();

// setup body parser middleware to conver to JSON and handle URL encoded forms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// connect to the mongodb database
mongoose.connect('mongodb://localhost:27017/races', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the users module and setup its API path
const users = require("./users.js");
app.use("/api/users", users.routes);

// const races = require("./races.js");
// app.use("/api/races", races.routes);

const raceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    date: String,
});

raceSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

raceSchema.set('toJSON',{virtuals: true});

const Race = mongoose.model('Race', raceSchema);

app.get('/api/races', async (req,res) => {
    try{
        let races = await Race.find();
        res.send({races: races});
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

app.post('/api/races', async (req, res) => {
  try{
    let race = new Race({
      name: req.body.name,
      price: req.body.price,
      date: req.body.date,
    });
    await race.save();
    res.send(race);
  }catch(error){
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3005, () => console.log('Server listening on port 3005!'));



