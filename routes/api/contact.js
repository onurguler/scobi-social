const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const nodemailer = require("nodemailer");

router.post(
  "/",
  [check("name", "Name is required").exists()],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const { name, surname, email, phone, message } = req.body;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: "scobimobile@gmail.com",
        pass: "scobi123@@"
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      to: "scobisocial@gmail.com", // list of receivers
      subject: "Contact ", // Subject line
      text:
        "Name: " +
        name +
        "\n" +
        "Surname: " +
        surname +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Message:\n" +
        message
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return res.json(req.body);
  }
);

module.exports = router;
