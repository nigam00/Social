const express= require('express');
const mongoose=require('mongoose');
const bodyParserr=require('body-parser')

const users=require('./routes/api/users');
const profile=require('./routes/api/profile');
const posts=require('./routes/api/posts');


const app= express();

//body parser middleware
app.use(bodyParserr.urlencoded({extended:false}));
app.use(bodyParserr.json());

//DB config
const db=require('./config/key').mongoURI;

//connect to MongoDB
mongoose
	.connect(db)
	.then(()=>console.log("MongoDB Connected"))
	.catch(err=>console.log(err))

//use Routes
app.use('/api/users',users);
app.use('/api/profile',profile);
app.use('/api/posts',posts);


app.get('/',(req,res)=>res.send("hello world"));

const port=process.env.PORT || 5000;

app.listen(port, ()=>console.log(`Server running on port ${port}`));
