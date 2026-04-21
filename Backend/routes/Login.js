const express = require("express")
const router = express.Router()

router.get("/login", async(req, res) => {
    res.send("Log in page");
});

router.post("/login", async(req, res) => {

});

module.exports = router;