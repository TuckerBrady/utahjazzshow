const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//Create a new Post
router.post("/", async(req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

//Update Post

//Delete Post
router.delete("/:id", async(req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deleted");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(401).json("You do not have permission to delete this user");
    }
});

//Get Post
router.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...otherStuff } = user._doc;
        res.status(200).json(otherStuff);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;