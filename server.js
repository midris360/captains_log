const express = require("express");
const app = express();
// const mongoose = require("mongoose");     


app.use(express.urlencoded({extended:true}));



// route creation
app.get("/logs/new", (req, res) => {
    res.render("new.ejs");
});

app.post('/logs/', (req, res)=>{
    if(req.body.saveTheLogs === 'on'){
        req.body.saveTheLogs = true;
    }  else {
        req.body.saveTheLogs = false;
    }
    res.send(req.body);
});



app.listen(3000, () =>  {
    console.log("listening");
});