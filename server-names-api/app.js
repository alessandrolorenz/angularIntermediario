const mongoose = require('mongoose');
const Person = require('./person');
const bodyParser = require('body-parser');
const cors = require('cors')
const express = require('express')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

mongoose.connect('mongodb://localhost:27017/namesdb', 
   { useNewUrlParser: true ,
      useUnifiedTopology: true })

 //rotas
 app.get('/' , (req, res) => {
   Person.find({}).lean().exec((err, data)=> {
     if(err){ 
       return res.status(500).json({
         error: err,
         message: 'Internal error'
       });
     } 
     return res.status(200).json(data)
   });
 });

 app.get('/:text' , (req, res) => {

  let text = req.params.text;

  let query = {
    $or: [
      { firstname: {$regex: text, $options: 'i'}},
      { lastname: {$regex: text, $options: 'i'}},
      { email: {$regex: text, $options: 'i'}},
      { city: {$regex: text, $options: 'i'}},
      { country: {$regex: text, $options: 'i'}},
    ]
  }

  Person.find(query).lean().exec((err, data)=> {
    if(err){ 
      return res.status(500).json({
        error: err,
        message: 'Internal error'
      });
    } 
    return res.status(200).json(data)
  });
});


 app.use(function(req, res, next) {
   res.status(404).json('Route does not exist.')
 })

 app.listen(9000)