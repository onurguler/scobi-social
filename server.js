const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const cors = require("cors");

require("./config/passport");

const app = express();

connectDB();

app.set("trust proxy", true);
app.use(express.json({ extended: false }));
app.use(cors());

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/scobs", require("./routes/api/scobs"));
app.use("/api/contact", require("./routes/api/contact"));
app.use("/api/settings", require("./routes/api/settings"));
app.use("/api/notifications", require("./routes/api/notifications"));

// app.use(express.static(__dirname + "/client/public"));

// app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "public", "index.html")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
