const express = require("express");
const router = express.Router();
const Transaction = require("../models/Transaction");

// CREATE
router.post("/", async (req, res) => {
  const newTransaction = new Transaction(req.body);
  const saved = await newTransaction.save();
  res.json(saved);
});

// READ
router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Transaction.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;