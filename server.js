//Required modules
import express from 'express';
require ('console.table')

//Required files 
const db = require('./db')
const prompt = require('./prompts')


//Initializes express server
const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, err => {if(err) throw err; console.log(`hi ${PORT}`);});

//fn to run cli on launch