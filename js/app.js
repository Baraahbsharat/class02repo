'use strict'
alert('Welcome to my page and let us see if you will know something about me');
alert('I will ask you 5 questions you can answer by yes/no let us start');

var country = prompt("I am from a country whose residents love Mansaf and they rarely laugh. Am I Jordanian?");

if(country .toLocaleLowerCase() === 'yes' || country .toLocaleLowerCase() === 'y' ){
    //console.log('You are correct but this was an easy one!!');
    alert('You are correct but this was an easy one!!');
}
else if(country .toLocaleLowerCase() === 'no' || country .toLocaleLowerCase() ==='n'){
   //console.log('OMG! I think you are not Arabic');
    alert('OMG! I think you are not Arabic');}
else {
    //console.log('Invalid response');
    alert('Invalid response')
}

var gender = prompt("I have the ability to laugh, cry, anger, be happy, love or hate you within 5 minutes Am I a male؟");
if(gender .toLocaleLowerCase() === 'yes' || gender .toLocaleLowerCase() === 'y'){
   //console.log('Wrong !!! I believe that you said that either because you are a female or female');
    alert('Wrong !!! I believe that you said that either because you are a female or female')
}
else if (gender .toLocaleLowerCase() === 'no' || gender .toLocaleLowerCase() ==='n'){ 
    //console.log('absolutely true');
    alert('absolutely true')
}
else {
  //console.log('Invalid response');
  alert('Invalid response')  
}
var socialstatus = prompt("I am very happy in my life and feel a lot of freedom and have a lot of free time, Am I single ?")
if (socialstatus .toLocaleLowerCase() === 'yes' || socialstatus .toLocaleLowerCase() === 'y'){
    //console.log('I am sorry it is wrong, you must try to be less optimistic');
    alert('I am sorry it is wrong, you must try to be less optimistic') 
}
else if (socialstatus .toLocaleLowerCase() === 'no' || socialstatus .toLocaleLowerCase() === 'n'){
    //console.log('You are correct, pray for me');
    alert('You are correct, pray for me')
}
else {
    //console.log('Invalid response');
  alert('Invalid response')  
}
var  university = prompt("I studied in the jewel of Jordanian universities with the kindest doctors and many cooperating students, and I never got tired, can you believe that?"); 
if (university .toLocaleLowerCase() === 'yes' || university .toLocaleLowerCase() === 'y'){ 
    //console.log('This is not true but dont be sad because you have a sweet mind');
    alert('This is not true but dont be sad because you have a sweet mind')
}
else if (university.toLocaleLowerCase() === 'no' || university.toLocaleLowerCase() ==='n') {
    //console.log('yes this is what I expect from you, great');
    alert('yes this is what I expect from you, great ')
}
else {
    //console.log('Invalid response');
  alert('Invalid response')  
}
var mansaf = prompt(" Do you think I mentioned my favourit dish within one of the previous question ? ")
if (mansaf .toLocaleLowerCase()=== 'yes' || mansaf .toLocaleLowerCase()==='y'){
    //console.log(' yes it is Mansaf as you think');
    alert(' yes it is Mansaf as you think')
}
else if (mansaf .toLocaleLowerCase() === 'no' || mansaf .toLocaleLowerCase() === 'n'){
    //console.log('sorry this is not correct, but if you remember it the next time, I will make a dish for you' );
    alert('sorry this is not correct, but if you remember it the next time, I will make a dish for you' )
}
else {
   //console.log('Invalid response');
  alert('Invalid response')   
}
var name = prompt("We hope to know you more,Enter your name: ");
alert( name + ' it is a nice name welcome to my page, I am Baraah bsharat');