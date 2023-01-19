const express= require('express');
const router= require('./src/routes/api');
const app =  express();


console.log(1);



console.log(2);//gfhgfhgfh

app.use('/api/v',router);


app.use('*',(req,res)=>{
    res.status(404).json({'status':'fail','data':'not found'});
});


console.log(3);
module.exports=app;