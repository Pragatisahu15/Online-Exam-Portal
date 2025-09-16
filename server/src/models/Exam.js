const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: Number // index of the correct option
    }
  ],
  duration: Number, 
});

module.exports = mongoose.model("Exam", examSchema);
