require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Routes
const authRoutes = require("./src/routes/auth");
const examRoutes = require("./src/routes/exam");

const app = express();

// Allowed origins: local + deployed frontend
const allowedOrigins = [
  "http://localhost:5173",                      // local dev
  "https://online-exam-portal-iota.vercel.app" // deployed frontend
];

// CORS middleware
app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true); // allow Postman / server requests
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error(`CORS policy does not allow access from ${origin}`), false);
    }
    return callback(null, true);
  },
  credentials: true, // only needed if using cookies
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]
}));

app.use(express.json());

// Health check
app.get("/", (req, res) => res.send("API running"));

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
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};
start();
