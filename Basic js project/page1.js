function calculator(operator){

    let num1 =parseFloat(document.getElementById('num1').value);
     let num2 =parseFloat(document.getElementById('num2').value);

     if(isNaN(num1)|| isNaN(num2)){
        return `Bhai Galat Data enter kar raha hai`;
     }else{
         switch(operator){
            case '+':
                result = num1 + num2 ;
                break;

                case '-':
                    result = num1 - num2 ;
                    break;

                    case '/':
                        result = num1 / num2 ;
                        break;

                        case '*':
                            result = num1 * num2 ;
                            break;
        }
     }
     document.getElementById('result').innerHTML= `RESULT: ${result}`
}






function table(n){
     let num3 =parseFloat(document.getElementById('num3').value);
     let result = "";
     if(isNaN(num3)){
        document.getElementById('output').innerHTML = "galat";
     }else{
        for(let i=1; i<= 10; i++){
            result = result + `${num3} x ${i} = ${num3 * i}<br>`;
        }
     }
    document.getElementById('output').innerHTML = ` ${result}`; 
}






function even_checker(){
let user = Number(document.getElementById('num4').value);

if(isNaN(user)){
    document.getElementById('evenoutput').innerHTML="Galat ja raha hai Bhai ";
}else if(user % 2== 0){
   document.getElementById('evenoutput').innerHTML="The Given Number is Even";
}else{
    document.getElementById('evenoutput').innerHTML="The Given Number is Odd";
}
}   
document.getElementById('evenoutput').innerHTML ;





function findmax(){
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    if(a >= b && a >= c){
        document.getElementById('maxoutput').innerHTML = a;
    } else if(b >= a && b >= c){
        document.getElementById('maxoutput').innerHTML= b;
    }else {
        document.getElementById('maxoutput').innerHTML= c;
    }
}





function grade(){
    let student = Number(document.getElementById('num5').value);

    if(isNaN(student)){
        document.getElementById('gradeoutput').innerHTML= 'galat hai';
    }else if(student >= 90 && student <= 100){
        document.getElementById('gradeoutput').innerHTML= 'your grade is A';
    }else if(student >= 70 && student <= 89){
        document.getElementById('gradeoutput').innerHTML= 'your grade is B';
    }else if(student >= 50 && student <= 69){
        document.getElementById('gradeoutput').innerHTML= 'your grade is C';
    }else if (student >= 35 && student <= 49){
         document.getElementById('gradeoutput').innerHTML= 'your grade is D'
    }else if (student >= 0 && student <= 34){
         document.getElementById('gradeoutput').innerHTML= 'Fail'
    }else{
        document.getElementById('gradeoutput').innerHTML= 'Marks Limit is 100 Only'
    }
}





function string_finder(){
    let str1 = document.getElementById('num6').value;
    let str2 = document.getElementById('num7').value;

    if(isNaN(str1) || isNaN(str2)){
        document.getElementById('stringout').innerHTML= (str1 + " " + str2).toUpperCase() ;
    }else{
         document.getElementById('stringout').innerHTML= 'Having Mistake to enter Data'
    }

}

