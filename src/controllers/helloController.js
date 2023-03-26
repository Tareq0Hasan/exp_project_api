

exports.hello_get=(req,res)=>{

    res.status(200).json({'status':'success','data':'This is get'});
}


exports.hello_post=(req,res)=>{

    res.status(201).json({'status':'success','data':'this is post'});
}


