const mongoose = require('mongoose');

const examSessionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exam: { type: mongoose.Schema.Types.ObjectId, ref: 'Exam', required: true },
  questionsOrder: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Exam.questions' } ], // store question _id order
  startedAt: { type: Date, default: Date.now },
  durationSeconds: { type: Number, required: true },
  submittedAt: Date,
}, { timestamps: true });

module.exports = mongoose.model('ExamSession', examSessionSchema);
