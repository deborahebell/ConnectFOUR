const shipImage = document.createElement('img');
shipImage.src = "assets/Gucci.png"; 

const bigImage = document.createElement('img');
bigImage.src = "assets/Connect4.png";

const logoImage = document.createElement('img');
logoImage.src = "assets/Connect4.png";

const playImage = document.createElement('img');
playImage.src = "assets/play.png";

const instructionsImage = document.createElement('img');
instructionsImage.src = "assets/instructions.png";

const settingsImage = document.createElement('img');
settingsImage.src = "assets/settings.png";

const creditsImage = document.createElement('img');
creditsImage.src = "assets/credits.png";

//Source Path For MAIN MENU IMAGES

// var frames = 30;
// var timerId = 0;
 
// timerId = setInterval(update, 1000/frames);

// function update() {
//     clear();
//     //used to clear the canvas 
//     move();
//     //is used for changing the variable values for images
//     draw();
//     //place the stickers
// };

// function clear(){
//     msContentScript.clearRect(0,0,width,height);
// };
// //this function clears the entire rectangle

// var backgroundY = 0;
// var speed = 1;

// function move(){
//     backgroundY -= speed;
//     if(backgroundY == -1 * height){
//         backgroundY = 0;
//     }
// };
//this says that the background will seem to continue to scroll with two
//images stacked on top of each other

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
// these are the canvas main menu variables

// var bigImage = new Image();
// var logoImage = new Image();
// var playImage = new Image();
// var instructionsImage = new Image();
// var settingsImage = new Image();
// var creditsImage = new Image();
// var shipImage = new Image();

var buttonX = [192,150,150,160];
var buttonY = [150,140,180,220];
var buttonWidth = [98,260,188,170];
var buttonHeight = [40,40,40,40];
//Mouse over function arrays for the main menu

context.drawImage(bigImage, 0, backgroundY);
context.drawImage(logoImage, 50,-10);
context.drawImage(playImage, buttonX[0], buttonY[0]);
context.drawImage(instructionsImage, buttonX[1], buttonY[1]);
context.drawImage(settingsImage, buttonX[2], buttonY[2]);
context.drawImage(creditsImage, buttonX[3], buttonY[3]);


bigImage.onload = function(){
    context.drawImage(bigImage, 0, 0);
};
logoImage.onload = function(){
    context.drawImage(logoImage, 50, -10);
}
playImage.onload = function(){
    context.drawImage(playImage, buttonX[0], buttonY[0]);
}
instructionsImage.onload = function(){
    context.drawImage(instructionsImage, buttonX[1], buttonY[1]);
}
settingsImage.onload = function(){
    context.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
creditsImage.onload = function(){
    context.drawImage(creditsImage, buttonX[3], buttonY[3]);
}
//Telling the images what to do using drawImage function


