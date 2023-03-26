var jwt = require('jsonwebtoken');

exports.Tokenissue=(req,res)=>{

    let payload={

        exp: Math.floor(Date.now()/1000)+(60*60),
        data:{name:"ovi",roll:"123"}
    }



    let token=jwt.sign(payload,"secretkey123");
    res.send(token);

}