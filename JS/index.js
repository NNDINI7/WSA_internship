// document.write("hello world");
// console.log("hello world");

let char="rcoem's has bright future";
document.write(char); //strings

let isStudent=true;
document.write("<br>", +isStudent);//bolean

let x=10;
document.write("<br>", +x);//numbers

let a="abc";
let y=27;
document.write("<br>" , a - y); //not a number

//Arrays[]
let numbers=[1,2,3,4,5];
let fruits =["apple","orange","grapes"];
let mixedArray=[10,20,"shree",[1,2,3,4]];//mixed type array
document.write("<br>" ,numbers[1]); //always access using position 
document.write("<br>" ,fruits[0]);
document.write("<br>" ,mixedArray[2][3]);

//objects used to store key - value pair 
let person = {
    firstname:"shree",
    lastname:"giri",
    age:6,
};
document.write("<br>",person.firstname);

//conditional statements 
//if 
let age= prompt("enter age");
if(age>=18){
    document.write("<br>you are aligible for voting");
}
else{ //if-else 
    document.write("<br>you are not aligible for voting");
}

//if else if
let grade= prompt("enter your marks");
if(grade>90){
    document.write("<br>grade A");
}
else if(grade>=90)
{
    document.write("<br>grade B");
} 
else if(grade>=70)
{
    document.write("<br>grade C");
} else {
    document.write("grade D");
}
 //switch case
 let day=2;
 switch(day){
    case 1:
        document.write("<br>monday");
        break;
    case 2:
            document.write("<br>tuesday");
            break;
    case 3:
        document.write("<br>wednesday");
        break;
    
        default:
        break;
 }
 //loops
 //while loop
 let count=0;
 while(count<3){
    document.write("count is "+count);
    document.write('Count is : ${count}');
    count = count+1;
 }
 //do while
 do{
    document.write('count is : ${count}');
    count++;
 } while(count > 3);
//for loop
for(let i=0;i<3;i++){
    document.write('count is: ${i}');
    }

    //example 
    let arr=["sunday","monday",1,45,78,{name:"abc",sirname:"gautam"}];
    // document.write(arr.length);
    for(let i=0;i<arr.length;i++){
        // length would be 6 here 
     document.write(arr[i]);
    }
    document.write(arr[5].name); //anushka

    //functions 
    function greet(name){
        document.write('hello ${name}');
    }
    greet("rahul"); //function call

    function sum(a,b)
{
    return a + b;
}
document.write(sum(2,3));

// arrow function (ES6)
const subtract = (a,b) => {
    return a - b;
};
document.write(subtract(93,62));
document.write('this is the output : ${subtract(36,36)}');

//ternary operator 
if(10>5){
    document.write("10 is greater");
} else {
    document.write("5 is smaller");
}
document.write(10 > 5 ? "10 is greater" : "5 is smaller");














