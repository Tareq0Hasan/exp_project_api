const mongoose=require('mongoose');




const dataSchema= mongoose.Schema({

      name:{type:String},
    //  roll: {
    //      type:Number,required:true,unique:true,
    //      min:[2,'min value 2 and max value 3,but given value is= {VALUE}'],
    //      max:[3,'maxvalue should be 3']
    //  },
    // remarks:{type:String,default:"No remarks"}


//name:String,
roll:String,
class:String,

remarks:{type:String,default:"No remarks"}

},{versionKey:false})




const studentModel=mongoose.model('students',dataSchema);
module.exports=studentModel;