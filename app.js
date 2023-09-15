// var x =+prompt("write");
// console.log(typeof x)

// * CHAPTER NO 12 TO 13 //-----------

// !! Q NO 1 //
// var userData = prompt("enter value");
// var exp = /[A-Z]/;
// var exp1 = /[a-z]/;
// var exp3 = /[0-9]/;
// var exp4 =/[A-Za-z 0-9]/;
// var result = exp.test(userData);
// var result2 =exp1.test(userData);
// var result3 =exp3.test(userData);
// var result4 =exp4.test(userData);

// if(result){
//     console.log(userData , " is Capital letter ")
// }
// else if(result2){
//     console.log(userData," is small letter")
// }
// else if (result3){
//     console.log(userData,"is number")
// }
// else if(result4){
//  console.log(userData ,"contain  ")
// }





//! Q NO 2 // 

// var first = +prompt("Enter first value");
// var second = +prompt("Enter second value");

// if(first < second){
//     console.log(first ," is less then ", second)
// }
// else if(first > second){
//     console.log(first ," is greater then ", second)
// }
// else if(first == second){
//     console.log(first ," is equal to ", second)
// }
// else{
//     console.log(" please write number")
// }
// ! Q NO 3 // 

// program that checks if the number is positive, negative or zero
// input from the user
// const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
// if (number > 0) {
//     console.log("The number is positive");
// }

// check if number is 0
// else if (number == 0) {
//   console.log("The number is zero");
// }

// if number is less than 0
// else {
//      console.log("The number is negative");
// }




//! Q NO 4 //

// var data =prompt("Enter value");
// var vowel =['a','e','i','o','u','A','E','I','O','U']

// if( data=== "a" || data==="e" || data==="i" || data ==="o" || data==="u" || data==="A" || data==="E" || data==="I" || data==="O" || data==="U"){
//     console.log(data, " is vowel ")
// }
// else{
//     console.log( data , " is not a vowel")
// }


// ! Q NO 5 //


// var pass ="admin";
// var confirmPass =prompt("Enter password");

// if(confirmPass === ""){
//     // console.log("Please enter password")
//    alert("enter password please")
// }
// else if(confirmPass ==="admin"){
//     alert("Correct!")
// }
// else{
//     alert("Incorrect password!")
// }

// ! Q NO 6 // 

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


//! Q NO 7 //

// var time = +prompt("Type your current time format like:1900 = 7pm");


// if(time>= 0 && time < 1200){
// alert("Good morning")
// }
// else if(time>=1200 && time< 1700){
//     alert("Good afternoon")
// }
// else if(time>=1700 && time>2100){
// alert("Good evening")
// }
// else if(time>=2100 && time>2359){
//     alert("Good night")
// }





// * CHAPTER NO 14 TO 16 //-----------



//! Q NO 1 //

// var students =[];

//! Q NO 2 //

// var students = new Array();

//! Q NO 3 //

// var students =["Ahmed","farhan","Samad"];

// ! Q NO 4 //

// var num =[1,2,3,4,5,6,7];

//! Q NO 5 //
// var bool =[true,false];

//! Q NO 6 //
// var mixed = ['ahmed',2,true];

//! Q NO 7 //
// var order = document.querySelector('ol');
// var head =document.querySelector('h1').innerHTML="Qualification"


// var Qualification =['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];



// for(i=0;i<Qualification.length ;i++){
//     var list = document.createElement('li');
//   list.innerHTML=Qualification[i];
//   order.appendChild(list)
// }



//! Q NO 8 //
// var students =['Ahmed',"Ahad","ijaz"];
// var score = ["64%",  "46%" ,"96%",];
// var marks =["320","230","480"];




// document.write(`Score of ${students[0]} is  ${marks[0]}  Percentage is " ${score[0]}.`)
// document.write('Score of ',students[1]," is ", marks[1] , " , Percentage is " ,score[1] , )




//! Q NO 9 //

// var color = ["Blue","red","Black","green"];
// var order = document.querySelector('ol');
// var head =document.querySelector('h1').innerHTML="Qualification"

// color.unshift("yellow")

// for(i=0;i<color.length ;i++){
//     var list = document.createElement('li');
//   list.innerHTML=color[i];
//   order.appendChild(list)
// }


// color.unshift("yellow")

//! 9 b //
// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.push("brown", "purple")

// ! 9 c //\

// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.push("brown", "pink")


// ! 9 d //
// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.shift()
// console.log(color)


// ! 9 e //

// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.pop()
// console.log(color)

// ! 9 f //
// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.splice(2,0,"yellow","purple")
// console.log(color)
//! 9 g //
// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.splice(2,1,)
// console.log(color)


// ! Q NO 10 //

// var color = ["Blue","red","Black","green"];
// console.log(color)
// color.splice(2,0,"yellow","purple")
// console.log(color)


// ! Q no 11 /

// var cities = ["karachi",'lahore','Multan','Islamabad'];
// document.write("Cites List :")
// for(i=0;i<cities.length; i++){
   
//     document.write(` ${cities[i]}`)
// }

// document.write("Selected Cities : ")
// document.write(cities[1],  cities[3])


//! Q no 12 // 

// var string = ["This","is","my","cat"];
// string.join(" ")
// for(i=0;i<string.length; i++){
   
//       document.write(string[i] , " ")
//     }

// console.log(string)
//! Q NO 13 //
// var devices =['keyboard','mouse','printer','moniter']
// for(i=0;i<devices.length; i++){
   
//       document.write( devices[i] ," ," )
//     }
// document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[0]);
//     document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[1])
//     document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[2])
//     document.write("<br>")
//     document.write("out :")
//     document.write("<br>")
//     document.write(devices[3])


// ! Q NO 14 //
// var devices =['keyboard','mouse','printer','moniter']
// for(i=0;i<devices.length; i++){
   
//       document.write( devices[i] ," ," )
//     }
// document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[0]);
//     document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[1])
//     document.write("<br>")
//     document.write("out : ");
//     document.write("<br>")
//     document.write(devices[2])
//     document.write("<br>")
//     document.write("out :")
//     document.write("<br>")
//     document.write(devices[3])
// ! Q NO 15 //

// var phoneManu = ['Apple','Samsung','Nokia','Sony','Haier'];
// for(i=0;i<phoneManu.length; i++){
   
//     document.write(phoneManu[i], )
//     }


