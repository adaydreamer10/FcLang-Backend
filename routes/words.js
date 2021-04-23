const express = require("express");
const sequelize = require('sequelize');

const models = require('../models');
const English = models.English;
const Spanish = models.Spanish;
const German = models.German;
const router = express.Router();


router.get("/random", (req, res, next) => {
  English.findOne({order: sequelize.literal('random()'),
  include: [models.Spanish,models.German]
})
    .then(word => {
      res.status(200).json(word);
    })
    .catch(next);
});


// shows specific user, still to be populated with requests and companies
router.get("/:id", (req, res, next) => {
    English.findByPk(req.params.id ,{ include: [models.Spanish,models.German] })
      .then(word => {
        English.count().then((countNumber)=>{
          res.status(200).json({data:word,numberOfwords:countNumber});
        });
       
      })
      .catch(next);
  });
 
  // getting random word from english table

  

  router.post("/add",async(req,res,next)=>{
      console.log(req.body,"hello")
      const englishWord = await English.create({word:req.body.englishWord})
      .then(item=>{
          const spanishWord= Spanish.create({word:req.body.spanishWord,englishId:item.id})
          return(item);
      })
      .then(item=>{
        const germanWord= German.create({word:req.body.germanWord,englishId:item.id})
        return(item);
    })
      res.status(200).json(englishWord)
  })
  module.exports = router;