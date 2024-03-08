const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
const seedDB = require('./utils/seed');


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


// DB Connect 
// Seed after connecting by running seeds.js in utils 
// Once DB Connected set port listener 
db.once('open', () => {
  // Check enviroment before seeding 
  if(process.env.NODE_ENV === 'development') {
    seedDB().then(()=>{
      console.log('Seeds.js executing')
    }).catch(err => {
      console.error('Error in Seeds', err);
    })
  }


  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
