const express = require("express")
const router = express.Router()

router.get("/register", async(req, res) => {
    res.send("Registration in site");
});

module.exports = router