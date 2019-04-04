const express = require('express');
const path = require('path');
const morgan = require('morgan');

var sequelize = require('sequelize');

const User = require('./data/models/users');
const Collection = require('./data/models/collections');
const CollectionRelation = require('./data/models/collection_relation');
const DraftList = require('./data/models/draft_lists');
const List = require('./data/models/lists');

const Timing = require('./data/models/timings');

// create our Express app
const app = express();
// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'public')));
//logger
app.use(morgan());

app.get('/hello', (req,res)=>{
	res.send({msg:'Hello World  Checking'})
});

app.get('/userAll', async (req,res) => {
	let users = await User.findAll()
	res.send({users: users})
})

module.exports = app;
