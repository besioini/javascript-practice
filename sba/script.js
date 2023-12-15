
const { CourseInfo, AssignmentGroup, LearnerSubmissions } = require('./data.js');
const { processLearnerSubmissions } = require('./data-processing.js');
const { calculateAverage } = require ('./util.js') ;

function getLearnerData(course, ag, submissions) {
    const learnersData = processLearnerSubmissions(course, ag, submissions);

    return Object.entries(learnersData).map(([learnerId, data]) => ({
        id: parseInt(learnerId),
        avg: calculateAverage(data.scores),
        ...data.assignments
    }));
}

try {
    const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
    console.log(result);
} catch (error) {
    console.error(error.message);
}