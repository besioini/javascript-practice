// let date = new Date();
// let sales = getSalesData(date);
// let labor = getLaborCosts(date);
// let budget = getBudget(date);
// let report = generateReport(date, sales, labor, budget);
// sendReport(report);

// function getSalesData(forDate) {
//   let netSales = getNetSales(forDate);
//   let salesTax = computeSalesTax(netSales);
//   return {netSales, salesTax};
// }

// function getLaborCosts(forDate) {
//   let staffCosts = getStaffCosts(forDate);
//   let mgtCosts = getMgtCosts(forDate);
//   return {staffCosts, mgtCosts};
// }

// function getBudget(forDate) {
//   let salesBudget = getSalesBudget(forDate);
//   let laborBudget = getLaborBudget(forDate);
//   return {salesBudget, laborBudget};
// }

// console.log(getSalesData());

// function areBothEven(num1, num2){
//     return !(num1 % 2) && !(num2 % 2)
// }
// console.log(areBothEven(2, 3)) 

// function computeArea(width, height){
//     console.log(`The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`)
// }

// const planetHasWater = function(planet){
//     let lcplanet = planet.toLowerCase();
//     if(lcplanet == 'earth' || lcplanet == 'mars')
//         return true
//     else    
//         return false
// }
// computeArea(2, 3)
// let result1 = planetHasWater('Venus')
// let result2 = planetHasWater('MARS')
// let result3 = planetHasWater('mars')
// console.log(result1)
// console.log(result2)
// console.log(result3)

function getDevInfo(name, ...skills){
    return {
        DevName: name,
        DevSkils: skills
    }
}

let result = getDevInfo('brahim', 'css', 'js')
console.log(result)