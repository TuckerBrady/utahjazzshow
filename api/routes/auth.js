const router = require("express").Router();
const bcrypt = require('bcryptjs');
const User = require("../models/User");

//Register
router.post("/register", async(req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            isAdmin: req.body.isAdmin
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json("Wrong Credentials");

        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Credentials");

        const { password, ...otherStuff } = user._doc;
        res.status(200).json(otherStuff);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;