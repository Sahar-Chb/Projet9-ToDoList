const express = require('express');
const router = express.Router();

const { create,getAll,update,del }=require('../controllers/todo')



router.post('/create', create);
router.get('/all', getAll);
router.delete('/delete/:id', del);
router.put('/update/:id', update);



module.exports = router;