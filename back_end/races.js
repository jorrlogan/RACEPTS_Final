// const express = require('express');
// const bodyParser = require("body-parser");

// const router = express.Router();

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: false
// }));

// const mongoose = require('mongoose');

// const users = require("./users.js");
// const User = users.model;
// const validUser = users.valid;

// const raceSchema = new mongoose.Schema({
//     user:{
//         type: mongoose.Schema.ObjectId,
//         ref: 'User'
//     },
//     name: String,
//     price: String,
//     date: String,
// });

// raceSchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });

// raceSchema.set('toJSON',{virtuals: true});

// const Race = mongoose.model('Race', raceSchema);

// app.get('api/', validUser, async (req,res) => {
//     try{
//         let races = await Race.find({
//             user: req.user,
//         });
//         res.send(races);
//     } catch(error){
//         console.log(error);
//         res.sendStatus(500);
//     }
// });

// module.exports = {
//   routes: router,
//   model: Race,
// };

// import the users module and setup its API path
// const users = require("./users.js");
// app.use("/api/users", users.routes);

// app.listen(3001, () => console.log('Server listening on port 3001!'));