const express= require('express');
const router = express.Router();
const helloController= require('../controllers/helloController');
const studentsController= require('../controllers/studentsController')
const jwtpractice= require('../controllers/jwttoken') 
const TokenVerifyMiddleware= require('../middleware/TokenVerifyMiddleware')
const TokenissueController= require('../controllers/TokenissueController')







router.get('/hello-get',helloController.hello_get);
router.post('/hello-post',helloController.hello_post);

//apply jwt auth
router.get('/tokenissue',TokenissueController.Tokenissue);
router.post('/insertdata',TokenVerifyMiddleware,studentsController.InsertStudents);
router.get('/readdata',TokenVerifyMiddleware,studentsController.ReadStudent);
router.post('/updatedata/:id',TokenVerifyMiddleware,studentsController.updateStudents);
router.post('/deletedata/:id',TokenVerifyMiddleware,studentsController.deleteStudents);

//practice jwt encode and decode

router.get('/tokencreate',jwtpractice.Createtoken);
router.get('/decodetoken',jwtpractice.Decodetoken);



module.exports=router;