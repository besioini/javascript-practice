
const { calculateScore, validateCourseId } = require('./util.js');


function processLearnerSubmissions(course, assignmentGroup, submissions) {
    validateCourseId(assignmentGroup, course);

    let learnersData = {};
    submissions.find(submission => {
        const assignment = assignmentGroup.assignments.find(item => item.id === submission.assignment_id);
        if (!assignment) {
            console.error(`Assignment ID ${submission.assignment_id} not found`);
            return;
        }

        const score = calculateScore(submission.submission, assignment, new Date());
        if (score === null) {
            console.error(`Assignment ID ${submission.assignment_id} for Learner ID ${submission.learner_id} is not due yet.`);
            return;
        }

        if (!learnersData[submission.learner_id]) {
            learnersData[submission.learner_id] = { scores: [], assignments: {} };
        }

        learnersData[submission.learner_id].scores.push(score * assignment.points_possible); 
        learnersData[submission.learner_id].assignments[submission.assignment_id] = score;
    });

    return learnersData;

}

module.exports = { processLearnerSubmissions }