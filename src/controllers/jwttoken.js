var jwt = require('jsonwebtoken');

exports.Createtoken=(req,res)=>{

    let payload={

        exp: Math.floor(Date.now()/1000)+(20),
        data:{name:"ovi",roll:"123"}
    }



    let token=jwt.sign(payload,"secretkey123");
    res.send(token);

}


exports.Decodetoken=(req,res)=>{

    let Token= req.headers['token-key']


    jwt.verify(Token,"secretkey123",function(err,docoded){

        if (err){
            res.status(401).json({'status':'fail','data':'error'});
        }else{
            res.status(201).json({'status':'success','data':docoded});
        }
    });

}
