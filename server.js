const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

require("./config/passport");

const app = express();

connectDB();

app.set("trust proxy", true);
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running..." + req.user));

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/contact", require("./routes/api/contact"));

// app.use(express.static(__dirname + "/client/public"));

// app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "public", "index.html")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
