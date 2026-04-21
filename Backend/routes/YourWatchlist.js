const express = require("express")
const router = express.Router()

router.get("/watchlist", async(req, res) => {
    res.send("personal watchlists");
});

module.exports = router