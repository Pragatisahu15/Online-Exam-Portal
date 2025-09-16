const Exam = require("../models/Exam");
const Result = require("../models/Result");
const ExamSession = require("../models/ExamSession");

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

//  error handler
function handleError(res, err, message = "Server error") {
  console.error(message, err);
  return res.status(500).json({ message });
}

exports.getAllExams = async (req, res) => {
  try {
    const exams = await Exam.find({}, "title duration");
    res.json(exams);
  } catch (err) {
    handleError(res, err, "Error fetching exams");
  }
};

exports.getExamById = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    res.json(exam);
  } catch (err) {
    handleError(res, err, "Error fetching exam");
  }
};

exports.startExam = async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    const durationSeconds =
      (exam.duration || Number(process.env.DEFAULT_EXAM_DURATION_SECONDS || 30)) * 60;

    const shuffledQuestions = shuffleArray(exam.questions);
    const safeQuestions = shuffledQuestions.map(q => ({
      _id: q._id,
      questionText: q.questionText,
      options: q.options,
    }));

    const session = await ExamSession.create({
      user: req.user.id,
      exam: exam._id,
      questionsOrder: shuffledQuestions.map(q => q._id),
      durationSeconds,
    });

    res.status(201).json({
      sessionId: session._id,
      examId: exam._id,
      durationSeconds,
      questions: safeQuestions,
      startedAt: session.startedAt,
    });
  } catch (err) {
    handleError(res, err, "Error starting exam");
  }
};

exports.submitExam = async (req, res) => {
  try {
    const { answers } = req.body;
    const exam = await Exam.findById(req.params.id);
    if (!exam) return res.status(404).json({ message: "Exam not found" });

    const detailedAnswers = exam.questions.map((q, idx) => {
      const studentAnswer = answers[idx];
      return {
        questionId: q._id,
        answer: studentAnswer,
        isCorrect: studentAnswer === q.correctAnswer,
      };
    });

    const score = detailedAnswers.filter(a => a.isCorrect).length;

    const result = await Result.findOneAndUpdate(
      { student: req.user.id, exam: exam._id },
      {
        student: req.user.id,
        exam: exam._id,
        score,
        totalQuestions: exam.questions.length,
        answers: detailedAnswers,
        takenAt: new Date(),
      },
      { new: true, upsert: true }
    );

    res.json({ message: "Exam submitted successfully", result });
  } catch (err) {
    handleError(res, err, "Error submitting exam");
  }
};

exports.getMyResults = async (req, res) => {
  try {
    const results = await Result.find({ student: req.user.id })
      .populate("exam", "title duration");

    res.json(results);
  } catch (err) {
    handleError(res, err, "Error fetching results");
  }
};
