const express = require("express")
const router = express.Router()

router.get("/sharedwatchlist", async(req, res) => {
    res.send("Watchlist that were shared with the user");
});

module.exports = router