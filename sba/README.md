# README for JavaScript Course Processing System

## Overview
This little repository is designed to process and manage learner submissions for a JavaScript course. It validates course and assignment IDs, calculates scores, and generates learner data with averages.

## Files
- **data-processing.js**: Contains the main logic for processing learner submissions.
- **script.js**: Executes the processing of learner data.
- **util.js**: Provides utility functions like score calculation and validation.
- **data.js**: Contains sample data for the course, assignment groups, and learner submissions.

## Functions
1. **validateCourseId(assignmentGroup, courseInfo)**: Ensures the course IDs match.
2. **calculateScore(submission, assignment)**: Calculates the score for a submission.
3. **calculateAverage(scores)**: Computes the average score from a set of scores.
4. **processLearnerSubmissions(course, assignmentGroup, submissions)**: Processes submissions and returns learner data.
5. **getLearnerData(course, ag, submissions)**: Fetches processed learner data.

## Data
- **CourseInfo**: Object containing course details (e.g., id, name).
- **AssignmentGroup**: Object with assignment details and their association with the course.
- **LearnerSubmissions**: Array of submission objects by learners.

## How to Use
1. Ensure Node.js is installed.
2. Clone the repository to your local machine.
3. Run `script.js` using Node.js to process the learner data.
   #node script.js
