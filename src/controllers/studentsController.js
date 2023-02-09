
const studentModel= require('../models/studentmodel')

exports.InsertStudents=(req,res)=>{

const reqBody= req.body;
studentModel.create(reqBody,(error,data)=>{

    if (error){
        res.status(400).json({'status':'fail','data':'error'});
    }else{
        res.status(201).json({'status':'success','data':data});
    }
})

}