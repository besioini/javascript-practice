
// Loops

// for(let i= 0; i<=10; i++){
//     // console.log(i);
//     if(i % 2 !== 0){
//        continue;
//     }
//     console.log(i)
// }

// for(let i= 0; i<=10; i++){
//     // console.log(i);
//     if(i % 2 == 0){
//        continue;
//     }
//     console.log(i)
// }


// for(let i= 0; i<=20; i++){
//     // console.log(i);
//     if(i % 2 == 0){
//        continue;
//     }
//     console.log(i)
// }

// for(let i=0; i<=7; i++){
//     output = '#'
//     for(let j= 0; j<=i; j++){
//         console.log(output)
//     }
// }

// for (let i = 1; i <= 7; i++) {
//     let poundString = '';
//     for (let j = 1; j <= i; j++) {
//         poundString += '#';
//     }
//     console.log(poundString);
// }


/*
Now, write a for loop that iterates from 1 to 20. The loop should:
Print “prime” for all prime numbers.
Print “even” for all even numbers.
Print “odd” for all odd numbers.
Treat 2 as an even number and 1 & 3 as odd, rather than prime.
*/

// for (let i = 1; i <= 20; i++) {
//     if (i === 2) {
//         console.log(i + ": even");
//     } else if (i === 1 || i === 3) {
//         console.log(i + ": odd");
//     } else if (i % 2 === 0) {
//         console.log(i + ": even");
//     } else {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(i); i++) {
//             if (i % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             console.log(i + ": prime");
//         } else {
//             console.log(i + ": odd");
//         }
//     }
// }

// while

// let str = 'Hello World'
// for(let i=0; i<str.length; i++){
//     console.log(str[i])
// }
// for(let i of str){
//     console.log(i)
// }


// let x = 30;
// while (x > 0) {
// 	x /= 2;
// 	x--;

// 	if (x % 1 != 0) {
// 		break;
// 	}
	
// 	console.log(x);
// }

// let c = 1;
// while(c<35){
//     if(c%3 == 0){
//         console.log(c)
//     }
//     c++
// }


// let num = 0;
// while(num < 100){
//     if(num % 5 == 0){
//         console.log(num)
//     }
//     num++;
// }


// let num2 = 0;
// while(num2 < 20){
//     if(num2 % 2 == 0){
//         console.log(num2*3)
//     }else if(num2 % num2 == 0 && num2 % 1 == 0 ){

//         console.log((num2 + " Is Prime"))
//     }
//     num2++
// }

// let num2 = 2; // Start from 2, as 0 and 1 are not prime
// while (num2 < 20) {
//     let isPrime = true;
//     let factor = 2;

//     while (factor <= Math.sqrt(num2)) {
//         if (num2 % factor === 0) {
//             isPrime = false;
//             break;
//         }
//         factor++;
//     }

//     if (isPrime) {
//         console.log(num2 + " is Prime");
//     }
//     num2++;
// }




