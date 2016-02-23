/* -------------- JAVASCRIPT -------------- */ 

// Just to check the source path of the script
console.log("Ready for some dotconn'ing!");

/*--------------- HEADING ---------------*/
var hw = document.getElementById("hw");
hw.innerHTML = "HW03 -- Animate!";

var date = document.getElementById("date");
date.innerHTML = "2016-02-23";

/* ------------- CIRCLE ------------- */
// Gets the element with an id of playground and assigns to canvas
var canvas = document.getElementById("playground");
// Using 2d context
var ctx = canvas.getContext("2d");
// Sets canvas fill color to green
ctx.fillStyle = "#00FF00";

var height = 538;
var width = 538;
var radius = 0;
var ballooning = true;
var requestID;

var drawCircle = function(){
    ctx.clearRect(0,0,width,height);
    if (radius == 0)
	ballooning = true;
    else if (radius == width/2)
	ballooning = false;
    if (ballooning)
	radius = radius+1;
    else
	radius = radius-1;
    ctx.beginPath();
    ctx.arc(width/2,height/2,radius,0,6.28);
    ctx.closePath();
    ctx.fill();
    requestID = window.requestAnimationFrame( drawCircle );
};

var stopCircle = function(){
    window.cancelAnimationFrame(requestID);
};


/* ------------------ DVD ------------------ */
var logo = new Image();
logo.src = "logo_dvd.jpg";

var x = 100;
var y = 237;
var down = true;
var right = false;

var startDVD = function(){
    ctx.clearRect(0,0,width,height);
    ctx.drawImage(logo,x,y,100,100);
    if (x == 0 || x + 100 == width)
	right = !right;
    if (y == 0 || y + 100 == height)
	down = !down;
    if (right)
	x = x+1;
    else
	x = x-1;
    if (down)
	y = y+1;
    else
	y = y-1;
    requestID = window.requestAnimationFrame(startDVD);
};

/* ------------------ BUTTONS ------------------ */
var circleButton = document.getElementById("circle");
circleButton.addEventListener( "click", drawCircle );

var stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopCircle );

var dvdButton = document.getElementById("dvd");
dvdButton.addEventListener("click", startDVD );
