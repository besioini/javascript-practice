// Part 1: 

let csv = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let cell = "";

for (let char of csv) {
    if (char === ',') {
        console.log(cell);
        cell = "";
    } else if (char === '\r\n') {
        console.log(cell);
        cell = "";
    } else {
        cell += char;
    }
}

// Part 2: Expanding Functionality

const csvData = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let rows = csvData.split('\r\n');
let result = rows.map(row => row.split(','));

console.log(result);

// Part 3: Transforming Data

const headers = result[0].map(header => header.toLowerCase());
const dataObjects = result.slice(1).map(row => {
    let obj = {};
    row.forEach((cell, index) => {
        obj[headers[index]] = cell;
    });
    return obj;
});

console.log(dataObjects);

// Part 4: Sorting and Manipulating Data

dataObjects.pop();
dataObjects.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
dataObjects.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

let totalAge = 0;
for (let obj of dataObjects) {
    totalAge += parseInt(obj.age);
}

let averageAge = totalAge / dataObjects.length;
console.log(averageAge);

// Part 5: Full Circle

const csvHeaders = Object.keys(dataObjects[0]).join(',');
const csvRows = dataObjects.map(obj => Object.values(obj).join(','));
const finalCsv = [csvHeaders, ...csvRows].join('\n');

console.log(finalCsv);
