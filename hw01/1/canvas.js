/* -------------------------------- JAVASCRIPT ---------------------------------- */

console.log("JavaScript loaded!@@!");

/*---------------VARIABLES---------------*/

// Gets the element with the id of class
var clas = document.getElementById("class");
clas.innerHTML = "SoftDev2 Pd 6";

// Gets the element with the id of hw
var hw = document.getElementById("hw");
hw.innerHTML = "HW1 -- Stretch Out Your Canvas && Finding Your Path Around It";

// Gets the element with the id of date
var date = document.getElementById("date");
date.innerHTML = "2016-02-10";

// Gets the Canvas by the id of ftb2maga
var c = document.getElementById("ftb2maga");
// Gets the context of the canvas in variable c
var ctx = c.getContext("2d");

/*---------------CANVAS---------------*/
// Determines color for a filled in rectangle
ctx.fillStyle="#FF0000";
// Draws the filled in rectangle starting from (300,300) with dimensions 100x100
ctx.fillRect(300,300,100,100);

// Determines color for an outlined rectangle
ctx.strokeStyle="#000000";
// Draws the outlined rectangle starting from (200,200) with dimensions 100x100
ctx.strokeRect(300,200,100,100);

ctx.fillStyle="#00FF00";
ctx.fillRect(200,200,100,100);
ctx.strokeRect(200,300,100,100);

// Starts the drawing path
ctx.beginPath();
// Moves the position of the "pen" on the canvas to (x,y)
ctx.moveTo(150,150);
// Makes a line to (x,y), but it does NOT actually draw it yet
ctx.lineTo(20,200);
// Ends the "drawing" session
ctx.closePath();
// Colors the outline of stuff previously drawn according to color specified in strokeStyle
ctx.stroke();
// Fills in the stuff previously drawn according to color specified in fillStyle
ctx.fill();

// NOTE: stroke & fill have the same result if only drawing a line

// .arc(x,y,radius,starting degrees,ending degrees)
// Makes an arc centered at (x,y) with a specified radius and given starting and ending degrees
ctx.beginPath();
ctx.arc(100,100,50,0,360);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(50,50,10,0,360);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.arc(300,300,100,0,360);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.arc(300,300,142,0,360);
ctx.closePath();
ctx.stroke();

// Sets the font used in the canvas
ctx.font="30px arial";
// Makes text (whose characters are filled in) appear starting from (x,y) of (0,30)
ctx.fillText("Duherro you order a pizza 2dei?",0,30);
// Makes text (whose characters are only outlined) appear starting from (x,y) of (0,70)
ctx.strokeText("hi",0,70);
