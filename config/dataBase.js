const mongoose = require("mongoose");

require("dotenv").config();


const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{
        console.log("Db are connected");
    })
    .catch((err)=>{
        console.log("issue with connection ");
        console.error(err);
        process.exit(1);
    })
}

module.exports = dbConnect;