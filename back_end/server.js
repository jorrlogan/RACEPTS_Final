const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/races', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

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

app.get('/api/races', async (req,res) => {
    try{
        let races = await Race.find();
        res.send({races: races});
    } catch(error){
        console.log(error);
        res.sendStatus(500);
    }
})

app.listen(3000, () => console.log('Server listening on port 3000!'));



