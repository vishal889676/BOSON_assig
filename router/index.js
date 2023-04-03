const express =require('express');
const router=express.Router();

const UserContoler=require('../controler/index')
router.post('/login',UserContoler.login)
router.post('/addUser',UserContoler.addUser)
router.get('/editUser/:id',UserContoler.editUser)
router.get('/removeUser',UserContoler.removeUser)
router.get('/dashboard',UserContoler.dashboard)

router.get('/',UserContoler.create);

router.post('/update_user',UserContoler.update_user);

//router.get('/:id',productContoler.deleteProduct)
module.exports = router;