// Creation of our data Schema to arrange our data in the way we want it o be arranged in the front end app
'use strict';
const mongoose = require("mongoose");


const BlogSchema =  mongoose.Schema({
  title: {
    type: String,
   
  },
  body: String,
  tag: {
    type: String,
    enum: ['POLITICS', 'ECONOMY', 'EDUCATION','STORY','TECH']
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
 photo: {
  type: String,
 
},
});

module.exports = mongoose.model("ArticleModel", BlogSchema);

