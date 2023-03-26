
const jwt =require('jsonwebtoken')

module.exports=(req,res,next)=>{

    let Token= req.headers['token-key']


    jwt.verify(Token,"secretkey123",function(err,docoded){

        if (err){
            res.status(401).json({'status':'fail','data':'error'});
        }else{             next()    }
    });


}