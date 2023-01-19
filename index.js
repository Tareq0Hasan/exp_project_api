const app=require('./app');
const dotenv= require('dotenv');
/*path na dileo hoy*/

dotenv.config({path:'./.env'}); //for path

// const express= require('express');
// const app = express();

// const router= require('./src/routes/api');

// app.use(router);


app.listen(process.env.RUNNING_PORT,(req,res)=>{
    console.log('hi');
});