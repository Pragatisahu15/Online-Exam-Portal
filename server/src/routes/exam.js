const express = require("express");
const authMiddleware = require("../middleware/authMiddleware.js");
const examController = require("../controllers/examController");

const router = express.Router();

router.get("/", examController.getAllExams);
router.get("/:id", examController.getExamById);
router.post("/:id/start", authMiddleware, examController.startExam);
router.post("/:id/submit", authMiddleware, examController.submitExam);
router.get("/results/mine", authMiddleware, examController.getMyResults);

module.exports = router;
