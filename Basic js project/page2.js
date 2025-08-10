
function greet(){
    let user = prompt('enter your name')
    document.getElementById('demo').innerHTML="helllo" + " " + user;
}



function greater_checker_number(){
    let user = Number(prompt('enter your number'));

    if(user > 50){
        document.getElementById('demo2').innerHTML="your entered number is greater then 50 and your entered number is " + " " + user;
    }else{
         document.getElementById('demo2').innerHTML="your entered number is less then 50 and your entered number is " + " " + user;
    }
}


function float_number(){
    let user = Number(prompt('enter the number'));

    if(isNaN(user)){
        document.getElementById('demo3').innerHTML=`entering wrong data "${user}"`;
    }else {
        document.getElementById('demo3').innerHTML= user * 2;
    }
}



function valid(){
    let user = Number(prompt('enter the number'));

    if(isNaN(user)){
        document.getElementById('demo4').innerHTML=`entering wrong data "${user}"`;
    }else if(user >= 1 && user <= 100){
        document.getElementById('demo4').innerHTML=`valid and your entered number is ${user}`;
    }else{
        document.getElementById('demo4').innerHTML=`invalid and your entered number is ${user}`;
    } 
}



function grade(){
    let user = Number(prompt('enter number'));
    if(isNaN(user)){
        document.getElementById('demo5').innerHTML=`entering wrong data "${user}"`;
    }else if(user >=90 && user <= 100){
    document.getElementById('demo5').innerHTML=`your number is "${user}" so your Grade is A`  ;  
    }else if(user >=80 && user <= 89){
    document.getElementById('demo5').innerHTML=`your number is "${user}" so your Grade is B`  ;  
    }else if(user >=70 && user <= 79){
    document.getElementById('demo5').innerHTML=`your number is "${user}" so your Grade is C`    
    }else{
    document.getElementById('demo5').innerHTML=`your number is "${user}" and you are Fail `  
    }
}



function iseven(){
    let user = Number(prompt('enter number'));
    if(isNaN(user)){
        document.getElementById('demo6').innerHTML=`entering wrong data "${user}"`;
    }else if(user % 2 == 0){
        document.getElementById('demo6').innerHTML=`The given Number ${user} is Even `;
    }else{
        document.getElementById('demo6').innerHTML=`The given Number ${user} is Odd `;
    }
}


function Number_checker(){
  let user = Number(prompt('enter number'));
    if(isNaN(user)){
        document.getElementById('demo7').innerHTML=`The entered text is String "${user}"`;
    }else{
        document.getElementById('demo7').innerHTML= `The entered text  "${user}" is valid`;
    }  
}



function vowel(){
    let user = prompt('enter the word');

    if(user === 'a' || user === 'e' || user === 'i' || user === 'o' || user === 'u' ){
        document.getElementById('demo8').innerHTML="VOWEL";
    }else {
        document.getElementById('demo8').innerHTML="NOT VOWEL"
    }
}





function weekend_checker(){
    let user = prompt('enter hear');
    if(user === "monday" || user ==="tuesday" || user ==="wednesday" || user==="thursday" || user === "friday"){
        document.getElementById('demo9').innerHTML=`The "${user}" is weakday`;
    }else if (user === "saturday" || user === "sunday"){
        document.getElementById('demo9').innerHTML=`The "${user}" is weakend`;
    }else{
        document.getElementById('demo9').innerHTML=`enter a valid weak day`;
    }
}




function number_range(){
    let user =Number(prompt('enter number'));

    if (user > 100){
        document.getElementById('demo10').innerHTML=`${user} Number is High`;
    }else if (user >= 50 && user <=100){
        document.getElementById('demo10').innerHTML=`${user} Number is Medium`;
    }else{
       document.getElementById('demo10').innerHTML=`${user} Number is low`; 
    }
}



function season_checker(){
    let user = prompt('enter the month ');

    if (["december","january", "febuary"].includes(user)){
        document.getElementById('demo11').innerHTML= `${user} is Winter season`;
    }else if(["march","april", "may"].includes(user)){
        document.getElementById('demo11').innerHTML= `${user} is Springr season`;
    }else if(["june","july", "august"].includes(user)){
        document.getElementById('demo11').innerHTML= `${user} is summer season`;
    }else if(["september","october", "november"].includes(user)){
        document.getElementById('demo11').innerHTML= `${user} is Fall season`;
    }else{
        document.getElementById('demo11').innerHTML= `enter a valid month not ${user}`;
    }
}




function leap(){
    let user = Number(prompt('enter number'));
    if(isNaN(user)){
        document.getElementById('demo12').innerHTML=`entering wrong data "${user}"`;
    }else if(user % 4 == 0 && user % 100 !== 0 || (user % 400 == 0)){
        document.getElementById('demo12').innerHTML=`The given year ${user} is leap year `;
    }else{
        document.getElementById('demo12').innerHTML=`The given year ${user} is not leap year `;
    }
}


function Divisible(){
    let user = Number(prompt('enter number'));
    

    if(isNaN(user)){
         document.getElementById('demo13').innerHTML=`${user} invalid data`;
    }else if( user % 7 === 0 && user % 11 === 0){
        document.getElementById('demo13').innerHTML= `${user} yes Divisible of 7 or 11`;
    }else if(user % 11== 0){
        document.getElementById('demo13').innerHTML= `${user} yes Divisible of 11 but not with 7`;
    }else if(user % 7== 0) {
        document.getElementById('demo13').innerHTML= `${user}  yes Divisible of 7 but not with 11`;
    }else{
        document.getElementById('demo13').innerHTML=`${user} is not Divisible of 7 or 11`;
    }
}




function isDivisibleByBoth() {
            let user = Number(prompt("Enter a number:"));

            if (isNaN(user)) {
                document.getElementById("demo14").innerHTML = `"${user}" is not a valid number.`;
            } else if (user % 3 === 0 && user % 5 === 0) {
                document.getElementById("demo14").innerHTML = `${user} is divisible by both 3 and 5.`;
            } else {
                document.getElementById("demo14").innerHTML = `${user} is NOT divisible by both 3 and 5.`;
            }
        }




function getTimeInSeconds(){
    let user1 = Number(prompt('enter hour'));
    let user2 = Number(prompt('enter minut'));
    document.getElementById('demo15').innerHTML= user1 * 3600 + user2 * 60 ;
}


   
function ageInDays(){
    let user = Number(prompt('enter your age'));

    if(isNaN(user)){
        document.getElementById('demo16').innerHTML=`invalid data`
    }else {
        document.getElementById('demo16').innerHTML= user * 365;
    }
}



function factorial() {
    let n = Number(prompt("Enter a positive number"));

    if (isNaN(n) || n < 0) {
        document.getElementById('demo17').innerHTML = `Invalid input: ${n}`;
    } else {
        let fact = 1;
        for (let i = 1; i <= n; i++) {
            fact *= i;
        }
        document.getElementById('demo17').innerHTML = `Factorial of ${n} is ${fact}`;
    }
}




function sumOfOddNumbers() {
    let n = Number(prompt("Enter a number"));

    if (isNaN(n) || n < 1) {
        document.getElementById('demo18').innerHTML = `Invalid input: ${n}`;
    } else {
        let sum = 0;
        for (let i = 1; i <= n; i += 2) {
            sum += i;
        }
        document.getElementById('demo18').innerHTML = `Sum of odd numbers from 1 to ${n} is ${sum}`;
    }
}




function checkPerfectNumber() {
    let num = Number(prompt("Enter a positive number"));

    if (isNaN(num) || num <= 0) {
        document.getElementById("demo19").innerHTML = `${num} is invalid input.`;
    } else {
        let sum = 0;

        // Check for all divisors from 1 to num-1
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }

        if (sum === num) {
            document.getElementById("demo19").innerHTML = `${num} is a Perfect Number.`;
        } else {
            document.getElementById("demo19").innerHTML = `${num} is NOT a Perfect Number.`;
        }
    }
}




function checkArmstrong() {
    let num = Number(prompt("Enter a 3-digit number"));

    if (isNaN(num) || num < 100 || num > 999) {
        document.getElementById("demo20").innerHTML = `${num} is not a valid 3-digit number.`;
        return;
    }

    let original = num;
    let sum = 0;

    while (num > 0) {
        let digit = num % 10;
        sum += digit ** 3;
        num = Math.floor(num / 10);
    }

    if (sum === original) {
        document.getElementById("demo20").innerHTML = `${original} is an Armstrong number.`;
    } else {
        document.getElementById("demo20").innerHTML = `${original} is NOT an Armstrong number.`;
    }
}





function isPrime() {
    let user = Number(prompt("Enter a number"));

    if (isNaN(user) || user < 2) {
        document.getElementById('demo21').innerHTML = `${user} is not a prime number (invalid or less than 2)`;
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(user); i++) {
        if (user % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById('demo21').innerHTML = `${user} is a Prime Number`;
    } else {
        document.getElementById('demo21').innerHTML = `${user} is NOT a Prime Number`;
    }
}




function isPalindrome() {
    let user = prompt("Enter a number");

    if (isNaN(user)) {
        document.getElementById('demo22').innerHTML = `"${user}" is invalid input`;
        return;
    }

    let original = user;
    let reversed = user.split('').reverse().join('');

    if (original === reversed) {
        document.getElementById('demo22').innerHTML = `${original} is a Palindrome Number`;
    } else {
        document.getElementById('demo22').innerHTML = `${original} is NOT a Palindrome Number`;
    }
}









function digitalRoot() {
    let num = Number(prompt("Enter a number:"));

    if (isNaN(num) || num < 0) {
        document.getElementById("demo23").innerHTML = "Invalid input";
        return;
    }

    while (num >= 10) {
        let sum = 0;
        let temp = num;

        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }

        num = sum;
    }

    document.getElementById("demo23").innerHTML = `Digital Root is: ${num}`;
}








function printFibonacci() {
    let user = Number(prompt("Kitne Fibonacci numbers chahiye?"));
    let n1 = 0, n2 = 1;
    let output = "";

    for (let i = 1; i <= user; i++) {
        output += n1 + " ";
        let next = n1 + n2;
        n1 = n2;
        n2 = next;
    }

    document.getElementById("demo24").innerHTML = output;
}





function isPerfectNumber() {
    let num = Number(prompt("Enter a number:"));
    let sum = 0;

    // Check for invalid input
    if (isNaN(num) || num <= 0) {
        document.getElementById('demo25').innerHTML = `Invalid input. Enter a positive number.`;
        return;
    }

    // Loop from 1 to num-1 to find divisors
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    // Check if sum of divisors equals the number
    if (sum === num) {
        document.getElementById('demo25').innerHTML = `${num} is a Perfect Number.`;
    } else {
        document.getElementById('demo25').innerHTML = `${num} is NOT a Perfect Number.`;
    }
}




function goBack() {
  window.history.back(); // goes to previous page in history
}

function goForward() {
  window.history.forward(); // goes to next page in history
}