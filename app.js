const express= require('express');
const router= require('./src/routes/api');
const app =  express();


//security middle ware
const mongosanitize=    require('express-mongo-sanitize')
//const xss=    require('xss-clean')
const hpp=    require('hpp')
const cors=    require('cors')
const mongoose= require('mongoose')
const bodyparser= require('body-parser')


app.use(cors())
//app.use(helmet())
app.use(hpp())
//app.use(xss())
app.use(mongosanitize())
app.use(bodyparser.json())



let uri="mongodb://127.0.0.1:27017/schools";
let options= {user:"",pass:""};

mongoose.connect(uri,options,(error)=>{
if (error){
    console.log('connection fail');

}else{ 
    console.log('conection success');
}
})



//console.log(2);//gfhgfhgfh

app.use('/api/v',router);


app.use('*',(req,res)=>{
    res.status(404).json({
        'status':'fail',
        'data':'not found'
    });
});


//console.log(3);
module.exports=app;