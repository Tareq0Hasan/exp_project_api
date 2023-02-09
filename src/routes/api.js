const express= require('express');
const router = express.Router();
const helloController= require('../controllers/helloController');
const studentsController= require('../controllers/studentsController')






router.get('/hello-get',helloController.hello_get);
router.post('/hello-post',helloController.hello_post);


//mongoose use

router.post('/insetdata',studentsController.InsertStudents);
router.get('/getData',studentsController.ReadStudent);

router.post('/updatevalue/:id',studentsController.updateStudents);
router.post('/deletevalue/:id',studentsController.deleteStudents);


module.exports=router;