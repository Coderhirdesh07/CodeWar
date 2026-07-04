// shared/models/Submission.js
const mongoose = require("mongoose");

const TestCaseResultSchema = new mongoose.Schema({
  testCaseId: { type: mongoose.Schema.Types.ObjectId, required: true },
  status: { 
    type: String, 
    enum: ['ACCEPTED', 'WRONG_ANSWER', 'TIME_LIMIT_EXCEEDED', 'MEMORY_LIMIT_EXCEEDED', 'RUNTIME_ERROR'],
    required: true 
  },
  runtime: { type: Number, default: 0 }, // in milliseconds
  memory: { type: Number, default: 0 },  // in kilobytes
  input: { type: String },               // Optional: input that caused the issue
  expectedOutput: { type: String },
  actualOutput: { type: String },
  errorLog: { type: String }             // Stack trace if it crashed
});

const SubmissionSchema = new mongoose.Schema({
  // ==========================================
  // BLOCK 1: Populated by PRIMARY SERVER
  // ==========================================
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true, index: true },
  language: { 
    type: String, 
    enum: ['javascript', 'python', 'cpp', 'java', 'go'], 
    required: true 
  },
  code: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['PENDING', 'PROCESSING', 'ACCEPTED', 'WRONG_ANSWER', 'TIME_LIMIT_EXCEEDED', 'MEMORY_LIMIT_EXCEEDED', 'RUNTIME_ERROR', 'COMPILE_ERROR'], 
    default: 'PENDING',
    index: true
  },

  // ==========================================
  // BLOCK 2: Populated by WORKER SERVER
  // ==========================================
  compileError: { type: String },       // Filled only if status is COMPILE_ERROR
  
  // Aggregated performance metrics across all passed test cases
  totalRuntime: { type: Number },       // Overall execution time (e.g., "ms")
  totalMemory: { type: Number },        // Peak memory usage (e.g., "KB")
  
  // Index of the first failing testcase (e.g., "Passed 43/50 test cases")
  passedCount: { type: Number, default: 0 },
  totalCount: { type: Number, default: 0 },

  // Granular details for debugging
  testCases: [TestCaseResultSchema]
  
}, { timestamps: true });

module.exports = mongoose.model('Submission', SubmissionSchema);