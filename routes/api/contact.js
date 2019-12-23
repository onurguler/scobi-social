const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post("/", [check("name", "Name is required").exists()], (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ erros: errors.array() });
  }

  const { name, surname, email, phone, message } = req.body;

  // email gönder

  return res.json(req.body);
});

module.exports = router;
