
function validateCourseId(assignmentGroup, courseInfo) {
    if (assignmentGroup.course_id !== courseInfo.id) {
        throw new Error("Invalid input, mismatching course ID");
    }
}

function validateAssignmentExists(assignmentId, assignments) {
    return assignments.find(item => item.id === assignmentId);
}

function calculateScore(submission, assignment) {
    const currentDate = new Date(Date.now());
    const due_date = new Date(assignment.due_at);
    const submission_date = new Date(submission.submitted_at);
    
    if (due_date > currentDate) return null;

    const latePenalty = submission_date > due_date ? 0.9 : 1;
    return (submission.score * latePenalty) / assignment.points_possible;
}

function calculateAverage(scores) {
    const totalScore = scores.reduce((acc, score) => acc + score, 0);
    return totalScore / scores.length;
}

module.exports = {validateCourseId, validateAssignmentExists, calculateScore, calculateAverage }