//######The Rock, Paper, Scissors Game #####

//
//var guess = prompt("Make a guess rock, paper or scissors?");
//
//var choice = Math.random();
//
//if (choice < 0.33) {
//    choice = "rock";
//} else if (choice < 0.66) {
//    choice = "paper";
//} else {
//    choice = "scissors";
//}
//
//
//if (choice == "rock" && guess == "paper") {
//    alert("The computer guessed rock and you guessed paper you win!!");
//    
//} else if (choice == "rock" && guess == "scissors") {
//    alert("The computer guessed rock and you guessed scissors you lose!!");
//    
//} else if (choice == "rock" && guess == "rock") {
//    alert("The computer guessed rock and you guessed rock, it's a tie let's try again");
//    
//} else if (choice == "paper" && guess == "rock") {
//    alert("The computer guessed paper and you guessed rock, you lose");
//    
//} else if (choice == "paper" && guess == "scissors") {
//    alert("The computer guessed paper and you guessed scissors, you win!!");
//    
//} else if (choice == "paper" && guess == "paper") {
//    alert("The computer guessed paper and you guessed paper, it's a tie let's try again");
//    
//} else if (choice == "scissors" && guess == "paper") {
//    alert("The computer guessed scissors and you guessed paper, you lose");
//    
//} else if (choice == "scissors" && guess == "rock") {
//    alert("The computer guessed scissors and you guessed rock, you win!!");
//    
//} else if (choice == "scissors" && guess == "scissors") {
//    alert("The computer guessed scissors and you guessed scissors, it's a tie let's try again");
//    
//}
//else {
//    alert("Please choose rock, paper or scissors.");
//}
//





//####### The Basic Calculator ########





//var num1 = prompt("Please enter a number.");
//var num2 = prompt("Please enter a second number.");
//var operation = prompt("What kind of operation you want to perform (add, subtract, multiply, divide)?");
//
//
//function calculat(x, y, z) {
//    switch (operation) {
//        case "add":
//            alert(num1 + num2);
//            break;
//        case "substract":
//            alert(num1 - num2);
//            break;
//        case "multiply":
//            alert(num1 * num2);
//            break;
//        case "divide":
//            alert(num1 / num2);
//            break;
//            
//        default:
//            alert("Please choose one of these operations (add, subtract, multiply, divide).");
//    }
//    
//}
//
//num1 = Number(num1);
//num2 = Number(num2);
//calculat(num1, num2, operation);






//####### Death by JavaScript  ########


//##### Step 1 ######


//function alpha(state) {
//    state = state.split('').sort().join('');
//    console.log(state);
//}
//
//
//alpha("web master");



//##### Step 2 ######


//
//function upper(state) {
//    state = state.split(" ");
//    
//    for (var i = 0;i < state.length; i++){
//        state[i] = state[i].split('');
//        state[i][0] = state[i][0].toUpperCase();
//        state[i] = state[i].join(''); 
//    }
//    
//    console.log(state.join(" "));
//}
//
//upper('the quick brown fox');




//##### Step 3 ######


//function vowels(state) {
//    var num = 0;
//    state = state.split('');
//    
//    for (var i = 0;i < state.length; i++){
//        if (state[i] == "e" || state[i] == "a" || state[i] == "i" || state[i] == "o" || state[i] == "u"){
//            num += 1;
//        }
//    }
//    console.log(num);
//}
//
//
//
//vowels('the quick brown fox')



//##### Step 4 ######



//function pass() {
//    var characters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0];
//    
//    var id = "";
//    for (var i = 0; id.length < 8; i++){
//        
//        var x = (Math.random() * 100);
//        x = Math.round(x);
//       
//        if (x < characters.length) {
//        
//        id += characters[x];
//            
//        }else{
//            continue;
//        }
//    }
//    console.log(id);
//}
//
//pass();






//##### Step 5 ######


function counrty(list) {
    var longest;
    var length = 0;
	
	for (var i = 0; i < list.length; i++){
		if (list[i].length > length){
			length = list[i].length;
			longest = list[i];
		}
	}
	console.log(longest);
    
}


counrty([ "Australia", "Germany", "United States Of America", "France"]);





















