var allowedGuesses= 4;
var numGuesses = 1;
var number = 0; 
guessingGame();
function guessingGame() {
    if ( numGuesses <= allowedGuesses) {     
     
do {
    var possibleAge = prompt(' Can you guess my age ');
    possibleAge = parseInt(possibleAge);

    if (possibleAge < 24 ){
        //console.log('too low');
          alert('too low');
        possibleAge = prompt("Can you guess my age ?");
        numGuesses++; 
}

   

else if (possibleAge > 24 ){
    //consol.log('too high');
   alert('too high');
   possibleAge = prompt("Can you guess my age ?"); 
   numGuesses++;
 } 

 else if (possibleAge ==''){
    possibleAge = prompt("Can you guess my age ?");
    numGuesses++; 
} 
 
 else if (possibleAge == 24) {
    alert(' You are correct after' + numGuesses + 'attempts');  

 }}
  while(numGuesses <= allowedGuesses && possibleAge != 24);
    }
    

var cartoon = ['sally ',' Remi ',' the hunter ', ' me and my sisters', 'jody abot', ' power girls'];
var i = 0; 
do{ 
    //consol.log('my favourit cartoon is' + cartoon);
    var favCartoon = prompt("My favourite cartoon is "+ cartoon[i]);
    i++;
} while (i < cartoon.length);
}
 //console.log('My favourit cartoon is the hunter');

alert('My favourit cartoon is the hunter');

    

           
var name = prompt("We hope to know you more,Enter your name: ");
alert( name + ' it is a nice name welcome to my page, I am Baraah bsharat');
