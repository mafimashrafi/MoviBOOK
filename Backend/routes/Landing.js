const express = require('express')
const router = express.Router()

router.get('/landing', async(req, res) =>{
    res.send("This is the laning page, user only can see some publicly available data")
});

module.exports=router;