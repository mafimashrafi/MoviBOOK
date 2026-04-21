const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

const Landing = require("./routes/Landing");
const Home = require("./routes/Home");
const Login = require("./routes/Login");
const Register = require("./routes/Register");
const SharedWatchlist = require("./routes/SharedWatchlist");
const Watchlists = require("./routes/YourWatchlist");

app.use("/", Landing);
app.use("/", Home);
app.use("/", Login);
app.use("/", Register);
app.use("/", SharedWatchlist);
app.use("/", Watchlists);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});