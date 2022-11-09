const express = require('express');
const app = express();
const morgan = require ('morgan');
const nameValidator = (req,res,next)=>{
    const name=req.params.name;
    if(name.length >10){
        next();
    }else{
        res.send(`${name} is a valid one`)
    }
};
app.get('/name/:name',nameValidator);

const errorhandler =(err,req,res,next) => {
    console.error(err);
    res.send(res.send(err));
};
app.use(errorhandler);
const routeNotExist = err