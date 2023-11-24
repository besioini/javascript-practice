//Control Flow & Error Handling

// let x = 10;

// try {
// 	if (x < 0 || x == 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");
// let x = 10;
// try {
// 	if (x > 0) {
// 		let isEven = (x % 2 == 0) ? true : false;
// 	} else if (x <= 0) {
// 		throw "Error - Negative Number";
// 	}
// 	console.log(isEven);
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x
// }

// let x = 1
// {
// 	z = y + x 
// 	console.log(z)
// }

// let num = 0 
// if(num>0){
// 	if(num<100){
// 		console.log("Positive and less than 100")
// 	}else if(num <0 ){
// 		console.log("Num is negative")
// 	}
// }

// let grade = 102;
// try {
// 	if(grade>=90){
// 		console.log('A')
// 	}else if(grade>=80){
// 		console.log("B")
// 	}else if(grade>=70){
// 		console.log("C")
// 	}else if(grade>=55){
// 		console.log("D")
// 	}else{
// 		throw Error("Invalid Grade")
// 	}
// } catch (error) {
// 	console.log(error.message)
// }


// function determineGrade(score) {
// 	try {
// 		let grade;

// 		if (score >= 90 && score <101) {
// 			grade = 'A';
// 		} else if (score >= 80 && score<90) {
// 			grade = 'B';
// 		} else if (score >= 70 && score <80) {
// 			grade = 'C';
// 		} else if (score >= 60 && score <70) {
// 			grade = 'D';
// 		}else if (score >= 0 && score <60) {
// 			grade = 'F';
// 		} else{
// 			throw Error('invalid score!')
// 		}
// 		return grade;

// 	} catch (error) {
// 		console.log(error.message)
// 	}
    
// }

// let score = ;
// let grade = determineGrade(score);
// console.log(`Score: ${score}, Grade: ${grade}`);



const user = {
	email: 'jdoe@gmail.com',
	// name: 'John Doe'
}

try {
  if(!user.name) { 
    throw new SyntaxError('User has no name');
  }
} catch(e) {
  	console.log(`User Error: ${e.message}`);
   	// console.log(e);
   	console.log(e.message);
   	console.log(e.name);
  	console.log(e instanceof TypeError);
} finally {
  console.log('Finally runs reguardless of result...');
}
console.log('Program continues...');


