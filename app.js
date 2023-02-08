const express= require('express');
const router= require('./src/routes/api');
const app =  express();

//security middle ware
const expressrateLimit=   require('express-rate-limit')
const helmet=  equire('helmet')
const mongosanitize=    require('express-mongo-sanitize')
const xss=    require('xss-clean')
const hpp=    require('hpp')
const cors=    require('cors')



//security middleware implement

app.use(cors())
app.use(helmet())
app.use(hpp())
app.use(xss())
app.use(mongosanitize())


const limiter= expressrateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)

})





app.use('/api/v',router);


app.use('*',(req,res)=>{
    res.status(404).json({'status':'fail','data':'not found'});
});



module.exports=app;