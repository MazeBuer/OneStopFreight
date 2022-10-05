const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const methodOverride = require("method-override");
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments")
const bodyParser = require('body-parser')

//Use .env file in config folder
require('dotenv').config({path: './config/.env'});

//Passport Config
require('./config/passport')(passport);

//Connect to Database
connectDB();

//use cors
app.use(cors())

//Using EJS for views
app.set('view engine', 'ejs');

//Static Folder
app.use(express.static('public'));

//Body Parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.urlencoded( {extended: true}));

//Logging
app.use(logger('dev'));

//Use forms for put/delete
app.use(methodOverride('_method'));

//Setup Session - stored in MongoDB
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({mongooseConnection: mongoose.connection}),
    })
);

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Use Flash message for errors, info, etc...
app.use(flash());

//setup routes for which one the server is listening
app.use('/', mainRoutes);
app.use('/post', postRoutes);
app.use('/comment', commentRoutes);

//MongoDB database
// MongoClient.connect(connectionString)
//     .then(client => {
//         console.log('Connedted to Database')
//         const db = client.db('CBP') //name the alien-names collection is under. not the new Database
//         const infoCollection = db.collection('Port-Codes')
    
//         app.get('/', (request, response)=>{
//             response.sendFile(__dirname + '/.portCode.ejs')
//         })
        
//         app.get('/api/:portCodes', (request,response)=>{
//             const portCodes = request.params.portCodes.toLowerCase()
//                 infoCollection.find({name: portCodes}).toArray()  //turn into array to brin back object
//                 .then(results => {
//                     console.log(results)
//                     response.json(results[0])
//                 })
//                 .catch(error => console.error(error))
//         })        

//     })
//     .catch(error => console.error(error))

//Server Running
app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
});