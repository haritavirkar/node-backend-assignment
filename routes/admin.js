const express = require('express');
const Item = require('../node-backend-assignment/models/Item');

const router = express.Router();

// Middleware to protect admin routes
const adminAuth = (req, res, next) => {
    // For simplicity, assuming a simple token check
    const token = req.headers.authorization.split(' ')[1];
    if (token === 'admin') {
        next();
    } else {
        res.status(401).send('Not authorized');
    }
};

router.get('/', adminAuth, async (req, res) => {
    const items = await Item.find();
    res.render('admin', { items });
});

module.exports = router;
