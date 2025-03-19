
const express = require("express");
const Review = require("../models/review");

const router = express.Router();

// CREATE a review
router.post("/", async (req, res) => {
    try {
        const { name, rating, comment } = req.body;
        const review = new Review({ name, rating, comment });
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ message: "Error creating review", error });
    }
});

// READ all reviews
router.get("/", async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: "Error fetching reviews", error });
    }
});

// UPDATE a review
router.put("/:id", async (req, res) => {
    try {
        const { name, rating, comment } = req.body;
        const review = await Review.findByIdAndUpdate(req.params.id, { name, rating, comment }, { new: true });
        res.json(review);
    } catch (error) {
        res.status(500).json({ message: "Error updating review", error });
    }
});

// DELETE a review
router.delete("/:id", async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.json({ message: "Review deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting review", error });
    }
});

module.exports = router;
