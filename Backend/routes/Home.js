const express = require("express")
const router = express.Router()

router.get("/home", async(req, res) => {
    res.send("User comes here after loging or register")
});

module.exports = router;