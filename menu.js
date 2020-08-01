(function() {
    const $app = $('#app');
    $app.addClass('has-loaded');
  });


/**
 * Asset pre-loader object. Loads all images
 */
// var assetLoader = (function() {
//     // images dictionary
//     this.imgs        = {
//       "kanye"            : "background: url(assets/SmileHead2.png)",
//       "kimk"           : "background: url(assets/KimKHead.png)",
     
//     };
//     var assetsLoaded = 0;                                // how many assets have been loaded
//     var numImgs      = Object.keys(this.imgs).length;    // total number of image assets
//     this.totalAssest = numImgs;                          // total number of assets
//     /**
//      * Ensure all assets are loaded before using them
//      * @param {number} dic  - Dictionary name ('imgs')
//      * @param {number} name - Asset name in the dictionary
//      */
//     function assetLoaded(dic, name) {
//       // don't count assets that have already loaded
//       if (this[dic][name].status !== "loading" ) {
//         return;
//       }
//       this[dic][name].status = "loaded";
//       assetsLoaded++;
//       // finished callback
//       if (assetsLoaded === this.totalAssest && typeof this.finished === "function") {
//         this.finished();
//       }
//     }
//     /**
//      * Create assets, set callback for asset loading, set asset source
//      */
//     this.downloadAll = function() {
//       var _this = this;
//       var src;
//       // load images
//       for (var img in this.imgs) {
//         if (this.imgs.hasOwnProperty(img)) {
//           src = this.imgs[img];
//           // create a closure for event binding
//           (function(_this, img) {
//             _this.imgs[img] = new Image();
//             _this.imgs[img].status = "loading";
//             _this.imgs[img].name = img;
//             _this.imgs[img].onload = function() { assetLoaded.call(_this, "imgs", img) };
//             _this.imgs[img].src = src;
//           })(_this, img);
//         }
//       }
//     }
//     return {
//       imgs: this.imgs,
//       totalAssest: this.totalAssest,
//       downloadAll: this.downloadAll
//     };
//   })();
//   assetLoader.finished = function() {
//     newgame();
//   }

//   function newgame() {
//     // setup the player
//     player.width  = 60;
//     player.height = 96;
//     player.speed  = 6;
//     player.sheet  = new SpriteSheet("imgs/normal_walk.png", player.width, player.height);
//     player.anim   = new Animation(player.sheet, 4, 0, 15);
//     // create the ground tiles
//     for (i = 0, length = Math.floor(canvas.width / platformWidth) + 1; i < length; i++) {
//       ground[i] = {"x": i * platformWidth, "y": platformHeight};
//     }
//     background.reset();
//     animate();
//   }
//   /**
//    * Game loop
//    */
//   function animate() {
//     requestAnimFrame( animate );
//     background.draw();
//     for (i = 0; i < ground.length; i++) {
//       ground[i].x -= player.speed;
//       ctx.drawImage(assetLoader.imgs.grass, ground[i].x, ground[i].y);
//     }
//     if (ground[0].x <= -platformWidth) {
//       ground.shift();
//       ground.push({"x": ground[ground.length-1].x + platformWidth, "y": platformHeight});
//     }
//     player.anim.update();
//     player.anim.draw(64, 260);
//   }
//   assetLoader.downloadAll();
// /**
//  * Load the main menu
//  */
// assetLoader.finished = function() {
//     mainMenu();
//   }
//   /**
//    * Show the main menu after loading all assets
//    */
//   function mainMenu() {
//     $('#main').show();
//   }
//   /**
//    * Click handlers for the different menu screens
//    */
//   $('.play').click(function() {
//     $('#menu').hide();
//     newgame();
//   });

// var main = document.getElementById('main');
// /**
// //  * Hide element
// //  */
// // function hide(el) {
// //   el.style.display = 'hide';
// // }
// // /**
// //  * Show element
// //  */
// // function show(el) {
// //   el.style.display = 'block';
// // } 
// // /**
// //  * Show the main menu after loading all assets
// //  */
// // function mainMenu() {
// //   show(main);
// // }
// // /**
// //  * Click handlers for the different menu screens
// //  */
// // document.querySelectorAll('.play')[0].addEventListener('click', function() {
// //   hide(main);
// //   newgame();
// // });

// // const shipImage = document.createElement('img');
// // shipImage.src = "assets/Gucci.png"; 

// // const bigImage = document.createElement('img');
// // bigImage.src = "assets/Connect4.png";

// // const logoImage = document.createElement('img');
// // logoImage.src = "assets/Connect4.png";

// // const playImage = document.createElement('img');
// // playImage.src = "assets/play.png";

// // const instructionsImage = document.createElement('img');
// instructionsImage.src = "assets/instructions.png";

// const settingsImage = document.createElement('img');
// settingsImage.src = "assets/settings.png";

// const creditsImage = document.createElement('img');
// creditsImage.src = "assets/credits.png";

// // Source Path For MAIN MENU IMAGES

// const frames = 30;
// let timerId = 0

// function update() {
//     clear();
//     //used to clear the canvas 
//     move();
//     //is used for changing the variable values for images
//     draw();
//     //place the stickers
// };


// timerId = setInterval(update, 1000/frames);


// function clear() {
//     context.clearRect(0,0,width,height);
// };

// //this function clears the entire rectangle

// var backgroundY = 0;
// var speed = 1;
// function draw() {
//     if(shipVisible == true){
//         context.drawImage(shipImage, shipX[0] - (shipSize/2), shipY[0], shipSize, shipHeight);
//         context.drawImage(shipImage, shipX[1] - (shipSize/2), shipY[1], shipSize, shipHeight);
//     }
// }
// function move(){
//     backgroundY -= speed;
//     if(backgroundY == -1 * height){
//         backgroundY = 0;
//         if(shipSize == shipWidth){
//             shipRotate = -1;
//         }
//         if(shipSize == 0){
//             shipRotate = 1;
//         }
//         shipSize += shipRotate;
//     }
// };
// // this says that the background will seem to continue to scroll with two
// // images stacked on top of each other

// const canvas = document.getElementById("myCanvas");
// const context = canvas.getContext("2d");
// const width = canvas.getAttribute('width');
// const height = canvas.getAttribute('height');
// // these are the canvas main menu variables

// const buttonX = [192,150,150,160];
// const buttonY = [150,140,180,220];
// const buttonWidth = [98,260,188,170];
// const buttonHeight = [40,40,40,40];
// //Mouse over function arrays for the main menu

// context.drawImage(bigImage, 0, backgroundY);
// context.drawImage(logoImage, 50,-10);
// context.drawImage(playImage, buttonX[0], buttonY[0]);
// context.drawImage(instructionsImage, buttonX[1], buttonY[1]);
// context.drawImage(settingsImage, buttonX[2], buttonY[2]);
// context.drawImage(creditsImage, buttonX[3], buttonY[3]);


// bigImage.onload = function(){
//     context.drawImage(bigImage, 0, 0);
// };
// logoImage.onload = function(){
//     context.drawImage(logoImage, 50, -10);
// }
// playImage.onload = function(){
//     context.drawImage(playImage, buttonX[0], buttonY[0]);
// }
// instructionsImage.onload = function(){
//     context.drawImage(instructionsImage, buttonX[1], buttonY[1]);
// }
// settingsImage.onload = function(){
//     context.drawImage(settingsImage, buttonX[2], buttonY[2]);
// }
// creditsImage.onload = function(){
//     context.drawImage(creditsImage, buttonX[3], buttonY[3]);
// }
//Telling the images what to do using drawImage function

// var mouseX;
// var mouseY;
 
// canvas.addEventListener("mousemove", checkPos);

// function checkPos(mouseEvent){
//     mouseX = mouseEvent.pageX - this.offsetLeft;
//     mouseY = mouseEvent.pageY - this.offsetTop;
// }

// if(mouseEvent.pageX || mouseEvent.pageY == 0){
//     mouseX = mouseEvent.pageX - this.offsetLeft;
//     mouseY = mouseEvent.pageY - this.offsetTop;
// }else if(mouseEvent.offsetX || mouseEvent.offsetY == 0){
//     mouseX = mouseEvent.offsetX;
//     mouseY = mouseEvent.offsetY;
// }

// var shipX = [0,0];
// var shipY = [0,0];
// var shipWidth = 35;
// var shipHeight = 40;
 
// var shipVisible = false;
// var shipSize = shipWidth;
// var shipRotate = 0;
// for(i = 0; i < buttonX.length; i++){
//     if(mouseX > buttonX[i] && mouseX < buttonX[i] + buttonWidth[i]){
//         if(mouseY > buttonY[i] && mouseY < buttonY[i] + buttonHeight[i]){
             
//         }
//     }else{
         
//     }
// }
// shipVisible = true;

// shipX[0] = buttonX[i] - (shipWidth/2) - 2;
// shipY[0] = buttonY[i] + 2;
// shipX[1] = buttonX[i] + buttonWidth[i] + (shipWidth/2); 
// shipY[1] = buttonY[i] + 2;
