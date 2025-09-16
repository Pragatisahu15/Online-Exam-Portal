require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const authRoutes = require("./src/routes/auth");
const examRoutes = require("./src/routes/exam");

const app = express();

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

// Health check
app.get("/", (req, res) => res.send(" API running"));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/exams", examRoutes);

// Start server
const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const port = process.env.PORT || 5000;
    app.listen(port, () =>
      console.log(`Server running on http://localhost:${port}`)
    );
  } catch (err) {
    console.error(" Failed to start server:", err.message);
    process.exit(1);
  }
};
start();
