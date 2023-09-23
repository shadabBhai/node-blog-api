const express = require("express");
require("dotenv").config();
const app = express();


const dbConnect = require("./config/dataBase.js");



const PORT = process.env.PORT || 4000;

app.use(express.json());


const blogRoutes = require("./routes/blog");
app.use('/api/v1' ,blogRoutes )





app.listen(PORT ,()=>{
    console.log(`sever is running on ${PORT}`)
});

dbConnect();


app.get("/",(req,res)=>{
    res.send(`<h1>BLOG POST API</h1>`);
})

