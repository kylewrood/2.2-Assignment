function ddvv(){
let x=15;
let greeting;
    if (x%3==0 && x%5==0) {
        greeting="It's divisible <br> by both 3 and 5!";
     } else  {
        greeting="It's NOT divisible <br> by 3 and 5!";
    }
document.getElementById("demo1").innerHTML= greeting;
}  


function leapYear1999(){
year=1999;
if (year%400==0) {
document.getElementById("lp").innerHTML=(year + " is leap year!");
}else if (year%100==0) {
document.getElementById("lp").innerHTML=(year + " is not leap year!");
} else if (year%4==0) {
document.getElementById("lp").innerHTML=(year + " is leap year!");
}else{
document.getElementById("lp").innerHTML=(year + " is not leap year!");
}
}    



function leapYear2000(){
year=2000;
if (year%400==0) {
document.getElementById("lp2").innerHTML=(year + " is leap year!");
}else if (year%100==0) {
document.getElementById("lp2").innerHTML=(year + " is not leap year!");
} else if (year%4==0) {
document.getElementById("lp2").innerHTML=(year + " is leap year!");
}else{
document.getElementById("lp2").innerHTML=(year + " is not leap year!");
}
}

function leapYear1900(){
year=1900;
if (year%400==0) {
document.getElementById("lp3").innerHTML=(year + " is leap year!");
}else if (year%100==0) {
document.getElementById("lp3").innerHTML=(year + " is not leap year!");
} else if (year%4==0) {
document.getElementById("lp3").innerHTML=(year + " is leap year!");
}else{
document.getElementById("lp3").innerHTML=(year + " is not leap year!");
}
}

function leapYear2024(){
year=2024;
if (year%400==0) {
document.getElementById("lp4").innerHTML=(year + " is leap year!");
}else if (year%100==0) {
document.getElementById("lp4").innerHTML=(year + " is not leap year!");
} else if (year%4==0) {
document.getElementById("lp4").innerHTML=(year + " is leap year!");
}else{
document.getElementById("lp4").innerHTML=(year + " is not leap year!");
}
}
function zerohundred(){
let text=""
for (let i=1; i <= 100; i++)
{
if (i % 3 == 0 || i % 4 == 0)
text += i + "<br>";
document.getElementById("zero").innerHTML= text;
}
}