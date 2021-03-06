// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
//  function sum(n) { 
//  // TODO: your code here 
//  } 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15

function sum(n) {

var s = 0;

	while(n > 0) {

		s += n;

		n -= 1;

	}

return s;

}

// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
//  function factorial(n) { 
//  // TODO: your code here 
//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120

function factorial(n) {

var f = 1;

	while(n > 0) {

		f *= n;

		n -= 1;

	}

return f;

}


// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
//  function repeatString(str, count) { 
//  // TODO: your code here 
//  } 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.

function repeatString(str, count) {

var r = "";

	while(count > 0) {

		r += str;

		count -= 1;

	}

return r;

}


// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.

function StartEnd(startNum, endNum) {

var result = 0;

	while(startNum <= endNum) {

		result += startNum;

		startNum += 1;
	}

return result;

}

// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
//  function counting(n) { 
//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'

function counting(n) {

	var result = "1";

	var x = 2;

	while(x <= n) {

		result += ", " + x;

		x += 1;

	}

return result;

}


// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.

function meet(n) { // i have created this function to be used later in meetAndGreet function

	var m = "meet 1";

	var x = 3;

	while(x < n) {

		m += " ," + (x - 1);

		x += 1;

	}

return m;	

}

function meetAndGreet(n) {

	var result = "welcome 1\n";

	var x = 2;

	while(x <= n) {

		if(x === 2) {
	
		result += "welcome 2, meet 1\n";

		x += 1;

		} 

		result += "welcome " + x + "," + meet(x) + " and " + (x - 1) + "\n";

		x += 1;

	}

return result;

}



// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
  function reverseString(str) { 
        
  	var rev = "";

  	var i = str.length - 1;

  	while(i >= 0) {

  		rev += str[i];

  		i -= 1;

  	}

return rev;

  } 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.

function prime(n) {

	var result = "2";

	var i = 3;

	while(i <= n) {

		var j = 2;

		var count = 0;

		while(j < i) {

			if(i % j === 0) {

				count += 1;

			}

			j += 1;

		}

		if(count === 0) {

		result += ", " + i;

		}

	i += 1;

	}

return result;

}


// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'

function oddEven(n) {

	result = "";

	for(var i = 0; i <= n; i += 1) {

		if(i % 2 === 0) {

			result += i + " is even \n";

		} else {

			result += i + " is odd \n";

		}
		
	}

return result;	

}

// 7.Write a javascript program to enter any number and print all factors of the number.

function factor(n) {

		var f = "1";

		var i = 2;

		while(i <= n) {

			if(n % i === 0) {

				f += ", " + i;

			}

		i += 1;

		}

	return f;

	}

// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8

function firstAndLast(n) {

		var first;

		var last = n % 10;

		while(n > 10) {

		first = n ;

		n /= 10;

		}

	return (Math.floor(first / 10) + last);

	}

// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *


function drawStars() { // not yet completed

	var res = "";

	var space = "    ";

	var i = 1;

	while(i <= 9) {

		var j = 1;

		var line = "";

		while(j <= i) {

			line = line + "*";

			j = j + 1; 
		
		}

		res = res + line + "\n";

		i = i + 2;

		

	}

	return res;

}


// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.