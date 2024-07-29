const express = require('express');
const Item = require('../node-backend-assignment/models/Item');

const router = express.Router();

// Create Item
router.post('/', async (req, res) => {
    const { name, description, price } = req.body;
    const item = new Item({ name, description, price });
    await item.save();
    res.status(201).json(item);
});

// Read Items
router.get('/', async (req, res) => {
    const items = await Item.find();
    res.json(items);
});

// Read Single Item
router.get('/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
});

// Update Item
router.put('/:id', async (req, res) => {
    const { name, description, price } = req.body;
    const item = await Item.findByIdAndUpdate(req.params.id, { name, description, price }, { new: true });
    res.json(item);
});

// Delete Item
router.delete('/:id', async (req, res) => {
    await Item.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;
