//#######Step 1 #######

//var movies = ["Toy Story", "Finding Nemo", "Finding Dory", "Inside Out", "Cars"];
//console.log(movies[1]);


//######Step 2 ######

//var movies = new Array();
//movies[0] = "Toy Story";
//movies[1] = "Finding Nemo";
//movies[2] = "Finding Dory";
//movies[3] = "Inside Out";
//movies[4] = "Cars";
//
//console.log(movies[0]);
//
//
//
////###### Step 3 ######
//
//movies[movies.length] = "Cars2";
//
//console.log(movies.length);


//######Step 4 ########

//var movies = new Array();
//movies[0] = "Toy Story";
//movies[1] = "Finding Nemo";
//movies[2] = "Finding Dory";
//movies[3] = "Inside Out";
//movies[4] = "Cars";
//
//delete movies[0];
//console.log(movies);


//#######Step 5 #######

//var movies = new Array();
//movies[0] = "Toy Story";
//movies[1] = "Finding Nemo";
//movies[2] = "Finding Dory";
//movies[3] = "Inside Out";
//movies[4] = "Cars";
//movies[5] = "Cars2";
//movies[6] = "Cars3";
//
//for (var i = 0; i < movies.length; i++){
//    console.log(movies[i]);
//}


//###### Step 6 ########


//var movies = new Array();
//movies[0] = "Toy Story";
//movies[1] = "Finding Nemo";
//movies[2] = "Finding Dory";
//movies[3] = "Inside Out";
//movies[4] = "Cars";
//movies[5] = "Cars2";
//movies[6] = "Cars3";
//for ( var i in movies){
//    console.log(movies[i]);
//}


//######Step 7 #######
//
//var movies = new Array();
//movies[0] = "Toy Story";
//movies[1] = "Finding Nemo";
//movies[2] = "Finding Dory";
//movies[3] = "Inside Out";
//movies[4] = "Cars";
//movies[5] = "Cars2";
//movies[6] = "Cars3";
//
//
//for ( var i in movies){
//    console.log(movies.sort());
//}
//console.log(movies.sort());



//######Step 8 #######


//var leastFavMovies = ["Inside Out", "Cars", "Cars2"];
//
//var movies = ["Toy Story", "Finding Nemo", "Finding Dory"];
//
//var y = "",j = "";
//
//for (var i = 0; i < movies.length; i++){
//    y += movies[i] + "\n";
//}
//
//
//for (var x = 0; x < leastFavMovies.length; x++){
//    j += leastFavMovies[j] + "\n";
//}
//
//console.log("Movies I like:\n\n" + y +"...\n\n\nMovies I regret watching:\n\n" + y);
//
//
//
////######Step 9 #######
//
//
//movies = movies.concat(leastFavMovies);
//console.log(movies.reverse());
//
//
////######Step 10 #######
//
////console.log(movies.pop());
//
//
////######Step 11 #######
//
////console.log(movies.shift());
//
//
////######Step 12 #######
//
//
//leastFavMovies = movies.slice(0, 3);
//
//leastFavMovies[0] = "Troy";
//leastFavMovies[1] = "Star Wars";
//leastFavMovies[2] = "Superman";
//
//console.log(leastFavMovies);


//######Step 13 #######


//var employee1 = [];
//employee1["id"] = 43278;
//employee1["name"] = "Mike Studer";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 45432;
//employee2["name"] = "Linda Jakson";
//employee2["title"] = "Software Engineer";
//employee2["department"] = "Engineering";
//employee2["isCurrent"] = true;
//
//
//var employees = [employee1, employee2];
//
////console.log(employees[1]["name"]);
//
////######Step 14 #######
//
//
//for (var i = 0;i < employees.length;i++){
//    console.log(employees[i]["name"]);
//}
//
//
////######Step 15 #######
//
//
//var employee3 = [];
//employee3["id"] = 46784;
//employee3["name"] = "Henna Said";
//employee3["title"] = "Hardware Engineer";
//employee3["department"] = "Engineering";
//employee3["isCurrent"] = false;
//
//employees[2] = employee3;
//
//for (var i = 0;i < employees.length;i++){
//    if(employees[i]["isCurrent"] == false){
//        continue;
//    }else{
//        console.log(employees[i]["name"]);
//        }
//}



//######Step 16 #######

//
//var movies = [["Toy Story", 4], ["Finding Nemo", 3], ["Finding Dory", 3], ["Inside Out", 5], ["Cars", 4]];
//var i;
//
//for (i = 0; i < movies.length; i++) {
//        
//    for (var j = 0; j < movies[i].length; j++){
//        
//        movies[i].filter(function (name) {
//            if(typeof name == "string"){
//            console.log(name);
//            }
//});
//    }
//}
//



//####### Practice with Functions #######


//######Step 1 #######



//var displayMessage = function (message) {
//    console.log(message);
//};
//
//displayMessage("Hello World");


//######Step 2 #######


//function calculate(x, y) {
//    return x % y;
//}
//
//console.log(calculate(5, 3));


//######Step 3 #######


var employees = ["Marvin", "Lubna", "Gina", "Nicole"];

var showEmployee = function (names) {
    for (var i = 0; i < names.length; i++){
        console.log(names[i]);
    }
}

showEmployee(employees);









