
const PI = 3.1415;
const initRadius = 5; 
const plantSpace = 0.8; 
const initPlants = 20; 

// Total area of the garden
const gardenArea = PI * initRadius * initRadius;
// Maximum capacity of the garden
const maxCapacity = gardenArea / plantSpace;

// Part 1
// Week 1
let plantCountWeek1 = initPlants * Math.pow(2, 1); 
// Plants after 1 week
let percentageWeek1 = plantCountWeek1 / maxCapacity;
// Decision for Week 1
if (percentageWeek1 > 0.8) {
    console.log("Week 1: Prune");
} else if (percentageWeek1 >= 0.5) {
    console.log("Week 1: Monitor");
} else {
    console.log("Week 1: Plant");
}

// Week 2
let plantCountWeek2 = initPlants * Math.pow(2, 2);
let percentWeek2 = plantCountWeek2 / maxCapacity;
// Decision for Week 2
if (percentWeek2 > 0.8) {
    console.log("Week 2: Prune");
} else if (percentWeek2 >= 0.5) {
    console.log("Week 2: Monitor");
} else {
    console.log("Week 2: Plant");
}

// Week 3
let plantCountWeek3 = initPlants * Math.pow(2, 3);
let percentWeek3 = plantCountWeek3 / maxCapacity;
// Decision for Week 3
if (percentWeek3 > 0.8) {
    console.log("Week 3: Prune");
} else if (percentWeek3 >= 0.5) {
    console.log("Week 3: Monitor");
} else {
    console.log("Week 3: Plant");
}

