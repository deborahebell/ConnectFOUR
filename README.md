## Welcome to The Connect Four Games

This is a defensive AI program that gives a new spin to the normal boring Connect Four Games. Life's not fair but all is fair in Connect Four.
Originally it was designed to be a multilevel game but due to time constraints I have one single level. Enjoy. 



# Kim and Kanye Go Head To Head

# Luxury Level

# That Good Ol' Fashion Connect Four



[GAME LOGIC](https://codepen.io/osbulbul/pen/GdxEo) I decided to use existing game logic for this Connect Four in order to focus on aspects of the 
style.css and app.js in order to better incorporate visual lessons from class.

As a beginning coder, it is difficult to achieve sound logic in a short time span and I wanted to be sure that I could produce results, images and a playable game. 
Initially I was inspired by Connect Four becuase it is a simple thinking strategy game that allowed me more creative space to design an interactive game that would be both fun and suprising. 



Of course, because I did not originally design the coding logic it was difficult to change aspects of the visual processes without hacking the original code. So I replaced the code several times throughtout this project. The original menu was a moving animation inspired by Tyler Seitz author of "Animating Game Menus and Screen Transitions in HTML5: A Guide for Flash Developers."



1. This tutorial utilized HTML and Flash Development with the final result being a infinite scroll background with Star Trek like graphics.

2. However instead I settled on a different Main Menu that had a tutorial for the differences in coding using DOM versus CANVAS placed inside of the HTML.


3. Steven Lambert provided excellent coding examples and layouts for his inifinite running _Kandi Game_. 
URL: https://blog.sklambert.com/html5-game-tutorial-game-ui-canvas-vs-dom/

<img src= https://blog.sklambert.com/wp-content/uploads/2014/09/kandiRunnerTitle.png>


After intigrating the new main menu code into my Connect Four Game I realized that the code has multiple parts and levels that the author intended to be small parts of an entire game. After integrating the main menu coding and trying to manipulate the coding I realized immediately that it would not work with my existing code due to too many working parts and dots that needed to be connected.

```js var assetLoader = (function() {
  // images dictionary
  this.imgs        = {
  ```
 The above variable [assetLoader] was used in the main menu code to load the full menu and give access to the game. Existing code had multiple assets including sounds and my Connect Four lacked that number of assets and the mainMenu would not load on my html page. With additional time Im sure I could navigate the code to connect the variables to my existing logic. 
 
 ```js assetLoader.finished = function() {
  mainMenu();
} ```
 
In addition, I ran into another problem connecting the codes together when 

4. As a result I deleted the coding contributions from Mr.Lambert and decided to research a simple HTML/CSS coded main menu to add to the face of my game. :)

From this, we can say that a better solution would was made and all of the changes above were pushed to my github pages. 




## Credits Are Mentioned In Text Above

