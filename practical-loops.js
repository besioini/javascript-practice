

// Part 1: Fizz Buzz

for(let num=0; num<100; num++){
    if(num % 3 === 0){
       console.log('Fizz');
    }else if(num % 5 === 0){
        console.log('Buzz');
    }else if(num % 3 == 0 && num % 5 == 0 ){
        console.log('Fizz Buzz');
    }else
         console.log(num)
}

// Part 2: Prime Time
let num2 = 2; // Start from 2, as 0 and 1 are not prime
while (num2 < 20) {
    let isPrime = true;
    let factor = 2;

    while (factor <= Math.sqrt(num2)) {
        if (num2 % factor === 0) {
            isPrime = false;
            break;
        }
        factor++;
    }

    if (isPrime) {
        console.log(num2 + " is Prime");
    }
    num2++;
}

// Part 3: Feeling Loopy

let csvData = "ID,Name,Occupation,Age\r\n42,Bruce,Knight,41\r\n57,Bob,Fry Cook,19\r\n63,Blaine,Quiz Master,58\r\n98,Bill,Doctor’s Assistant,26";
let cell = "";
let row = [];

for (let i = 0; i <csvData.length; i++) {
    let char = csvData[i];

    if (char === '\r' && csvData[i + 1] === '\n') {
        row.push(cell);
        console.log(...row);

        cell = "";
        row = [];
        i++; 
    } else if (char === ',') {
        row.push(cell);
        cell = "";
    } else {
        cell += char;
    }
}

if (cell) {
    row.push(cell);
}
if (row.length > 0) {
    console.log(...row);
}