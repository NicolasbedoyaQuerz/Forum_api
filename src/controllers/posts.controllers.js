const Posts = require('../models/posts.model');

const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        await Posts.create(newPost);
        res.status(201).send();
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    createPost,
};