const express   = require("express");
const connectDB = require("./config/db");
const moragan   = require("morgan");
const colors    = require('colors');
const doten     = require("dotenv");
// env config    
dotenv.config();
// mongodb connection
connectDB();
// rest object
const app = express();
// middlewares
app.use(express.json());
app.use(moragan('dev'));
//
app.use('api/v1/user', require('./routes/userRoutes'));  
// port  
port = 5000; 
// mode  
const mode = 'development';  
// port listen  
// app.listen(port, () => { 
// console.log(`Server is running on ${process.env.NODE_MODE} mode and on ${process.env.PORT} port`);
// }); 
// Start the server 
app.listen(port, () => { 
    console.log(`Server is running in ${mode} mode and  on port ${port}`.bgCyan.white); 
  }); 
