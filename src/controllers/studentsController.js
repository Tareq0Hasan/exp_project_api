const studentModel= require('../models/studentsmodel')

//insert data

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


exports.ReadStudent=(req,res)=>{

    const query={};
    const projection="name roll class";
    studentModel.find(query,projection,(error,data)=>{

        if (error){
            res.status(400).json({'status':'fail','data':'error'});
        }else{
            res.status(201).json({'status':'success','data':data});
        }

    })

}



// update data

exports.updateStudents=(req,res)=>{
    const id = req.params.id;
    const query ={_id:id};
    const update_data= req.body;
    
    studentModel.updateOne(query,update_data,(error,data)=>{
        if (error){
            res.status(400).json({'status':'fail','data':'error'});
        }else{
            res.status(201).json({'status':'success','data':data});
        }
    
    })
 }
    


 // delete data

exports.deleteStudents=(req,res)=>{

    const id = req.params.id;
    const query = {_id:id};
    
    studentModel.remove(query,(error,data)=>{
    
        if (error){
            res.status(400).json({'status':'fail','data':'error'});
        }else{
            res.status(201).json({'status':'success','data':data});
        }
    
    })
    
    
    }