/* -------------- JAVASCRIPT -------------- */ 

// Just to check the source path of the script
console.log("Ready for some dotconn'ing!");

/*--------------- HEADING ---------------*/
var hw = document.getElementById("hw");
hw.innerHTML = "HW2 -- Dot, Dot, Dot";

var date = document.getElementById("date");
date.innerHTML = "2016-02-11";

/* ------------- DOT CONNECTION ------------- */
// Gets the element with an id of playground and assigns to canvas
var canvas = document.getElementById("playground");
// Using 2d context
var ctx = canvas.getContext("2d");
// Sets canvas fill color to green
ctx.fillStyle = "#00FF00";
// Initial coordinates are outside the range just to facilitate ease of conditionals later
var x1 = -1;
var x2 = -1;
var y1 = -1;
var y2 = -1;

// NOTE: (x1,y1) will be used as the "previous" coordinate pair from which to draw the line
//       (x2,y2) will be the new spot where the user clicks on canvas

var onClick = function(e){
    e.preventDefault();
    console.log("onClick");
    // Starts the path
    ctx.beginPath();
    // If the canvas is reset or new, then here should be no line drawn
    if (x1 == -1 && y1 == -1){
	// Assigns the mouse coordinates relative to the canvas
	x1 = e.offsetX;
	y1 = e.offsetY;
	// Draws the circle around where it is clicked
	ctx.arc(x1,y1,10,0,6.28);
    }
    else {
	// Assigns the mouse coordinates relative to the canvas
	x2 = e.offsetX;
	y2 = e.offsetY;
	// Moves the "pen" to the previous spot clicked
	ctx.moveTo(x1,y1);
	// Makes a line to the new spot clicked
	ctx.lineTo(x2,y2);
	// Ends the drawing session
	ctx.closePath();
	// Fills the line previously made
	ctx.stroke();
	// Makes the circle around where it is clicked
	ctx.beginPath();
	ctx.moveTo(x2,y2);
	ctx.arc(x2,y2,10,0,6.28);
	// Set the "previous" coordinates to where it was just clicked
	x1 = x2;
	y1 = y2;
    }
    ctx.closePath();
    // Colors in the circle drawn above, in either of the conditionals
    ctx.fill(); 
}

// Adds the function onClick to execute every time the canvas is clicked
canvas.addEventListener("click",onClick);

var button = document.getElementById("clear");

// Clears the canvas and resets the coordinates
var clear = function(e){
    e.preventDefault();
    x1 = -1;
    y1 = -1;
    x2 = -1;
    y2 = -1;
    ctx.clearRect(0,0,538,538);
}

// Adds the function clear to execute every time the button is clicked
button.addEventListener("click",clear);
