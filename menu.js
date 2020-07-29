var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
// these are the canvas main menu variables

var buttonX = [192,150,150,160];
var buttonY = [150,140,180,220];
var buttonWidth = [98,260,188,170];
var buttonHeight = [40,40,40,40];
//Mouse over function arrays for the main menu

shipImage.src = "Downloads/Gucci.png";  
bgImage.src = "Downloads/multi-trans.png";
logoImage.src = "Desktop/Connect4.png";
playImage.src = "Desktop/play.png";
instructImage.src = "Desktop/instructions.png";
settingsImage.src = "Desktop.settings.png";
creditsImage.src = "Desktop/credits.png";
//Source Path For MAIN MENU IMAGES

bgImage.onload = function(){
    context.drawImage(bgImage, 0, 0);
};
logoImage.onload = function(){
    context.drawImage(logoImage, 50, -10);
}
playImage.onload = function(){
    context.drawImage(playImage, buttonX[0], buttonY[0]);
}
instructImage.onload = function(){
    context.drawImage(instructImage, buttonX[1], buttonY[1]);
}
settingsImage.onload = function(){
    context.drawImage(settingsImage, buttonX[2], buttonY[2]);
}
creditsImage.onload = function(){
    context.drawImage(creditsImage, buttonX[3], buttonY[3]);
}
//Telling the images what to do using drawImage function