const express= require('express');
const router = express.Router();
const helloController= require('../controllers/helloController');






router.get('/hello-get',helloController.hello_get);
router.post('/hello-post',helloController.hello_post);


module.exports=router;