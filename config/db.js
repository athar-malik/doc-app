const mongoose = require("mongoose");
const colors = require("colors");

const uri = 'mongodb+srv://doctorApp:Stem0001@cluster0.nwxpjsk.mongodb.net/doctorapp?retryWrites=true&w=majority';


// const connectDB = async() => {
//     try{
//         await mongoose.connect(process.env.MONGODB_URL || uri)
//         console.log(`mongodb connected ${mongoose.connection.host}`.bgGreen.white);
//     } catch(error){
//         console.log(`Mongodb Server Issue ${error}`.bgRed.white);
//     }
// };
const connectDB = () => {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to MongoDB');
      // Perform further operations
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });


}
module.exports = connectDB;