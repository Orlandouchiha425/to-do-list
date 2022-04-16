
require('dotenv').config();
const express= require('express')
const app=express()
const PORT = process.env.PORT || 3000;

const path=require('path')
app.get('/',(req,res)=>{
    res.send('Connected')
})


app.listen(PORT,()=>{console.log(`i am connected to ${PORT}`)})