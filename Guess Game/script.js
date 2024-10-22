/**
Diya Diya(000882035)
Date: 22 March 2023
Purpose: To perform the functioning of the game.
**/

const svgNS = "http://www.w3.org/2000/svg";
const canvas = document.querySelector( "#canvas" );
let no_of_clicks = 0;
let clicks = 0;


/**
 * If user clicks picture of milk then function will be executed telling user that his choice is right or wrong
 */
function milk(){
    if(no_of_clicks==0)
    {
    let food =["Milk", "Toast","Water"];
    var favorite_food= food[Math.round(Math.random()*2)];
        if(favorite_food=="Milk"){
            document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU WON!`;
            
        }

        else{
            
            document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU LOST!`;
            
            
        }
    no_of_clicks++;
   
}
   
}
/**
 * If user clicks picture of toast then function will be executed telling user that his choice is right or wrong
 */
function toast(){
    if(no_of_clicks==0)
    {
    let food =["Milk", "Toast","Water"];
    var favorite_food= food[Math.round(Math.random()*2)];
    if(favorite_food=="Toast"){
        document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU WON!`;
    }
    else{
        document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU LOST!`;
    }
}
    no_of_clicks++;
}

/**
 * If user clicks picture of water then function will be executed telling user that his choice is right or wrong
 */
function water(){
    if(no_of_clicks==0)
    {
    let food =["Milk", "Toast","Water"];
    var favorite_food= food[Math.round(Math.random()*2)];
    if(favorite_food=="water"){
        document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU WON!`;
    }
    else{
        document.getElementById("answer").innerHTML = `Favourite food is ${favorite_food}...YOU LOST!`;
    }
}
    no_of_clicks++;
}

/**
 * If user clicks picture of football then function will be executed telling user that his choice is right or wrong
 */
function football(){
    if(clicks==0)
    {
    let game =["Football", "Ludo","Carrom"];
    var favorite_game= game[Math.round(Math.random()*2)];
    if(favorite_game=="Football"){
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU WON!`;
    }
    else{
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU LOST!`;
        document.removeChild(image);
    }
}
    clicks++;
}

/**
 * If user clicks picture of ludo then function will be executed telling user that his choice is right or wrong
 */
function ludo(){
    if(clicks==0)
    {
    let game =["Football", "Ludo","Carrom"];
    var favorite_game= game[Math.round(Math.random()*2)];
    if(favorite_game=="Ludo"){
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU WON!`;
    }
    else{
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU LOST!`;
    }
}
    clicks++;
}

/**
 * If user clicks picture of carrom then function will be executed telling user that his choice is right or wrong
 */
function carrom(){
    if(clicks==0)
    {
    let game =["Football", "Ludo","Carrom"];
    var favorite_game= game[Math.round(Math.random()*2)];
    if(favorite_game=="Carrom"){
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU WON!`;
    }
    else{
        document.getElementById("answer1").innerHTML = `Favourite game is ${favorite_game}...YOU LOST!`;
    }
}
    clicks++;
}

/**
 * When user will click refresh button screen would come in default setup and game will restart
 */
function refresh(){
    document.getElementById("answer1").innerHTML = ``;
    document.getElementById("answer").innerHTML = ``;
    clicks = 0;
    no_of_clicks = 0;
}
            
