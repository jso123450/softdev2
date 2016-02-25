/* -------------- JAVASCRIPT -------------- */ 

/*--------------- HEADING ---------------*/
var hw = document.getElementById("hw");
hw.innerHTML = "HW03 -- Animate2!";

var date = document.getElementById("date");
date.innerHTML = "2016-02-24";

/* ------------- GETTING STUFF FROM DOM ------------- */
// Gets the canvas and buttons
var canvas = document.getElementById("playground");
var circleButton = document.getElementById("circle");
var stopButton = document.getElementById("stop");
var dvdButton = document.getElementById("dvd");

// Interacting in 2D
var ctx = canvas.getContext("2d");

// Sets canvas fill color to green
ctx.fillStyle = "#00FF00";

// Canvas attribute globals
var height = 538;
var width = 538;


/* ------------- FUNCTIONS ------------- */

var requestID;

// used to clear the canvas
var clear = function(e){
    e.preventDefault();
    ctx.clearRect(0,0,width,height);
};

// to make the growing/shrinking circle
var radius = 0;
var ballooning = true;

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

// stops the last requestID
var stop = function(){
    window.cancelAnimationFrame(requestID);
};

// DVD
// - setting it up this way does NOT only spawn ONE dvd logo and SPEED (increase
//   the fps) when continously clicking the DVD button
// - INSTEAD it spawns MULTIPLE occurrences of dvd logos, each with their OWN
//   variables (x,y,down,right) and STOP correctly stops the right dvd
var dvdLogoSetup = function(e){
    stop;
    
    // setting up the logo
    var logo = new Image();
    logo.src = "logo_dvd.jpg";
    
    // variables
    var x = 100;
    var y = 237;
    var down = true;
    var right = false;
    
    // making the dvd move; not used anywhere else
    var dvdLogo = function(){
	clear;
	ctx.drawImage(logo,x,y,100,100);
	
	// propulsion
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
	
	// this is here so that requestID matches with the correct dvd logo mvmt
	requestID = window.requestAnimationFrame(dvdLogo);
    };
    
    // start it moving
    dvdLogo();
};


/* ------------------ EVENT LISTENERS ------------------ */
circleButton.addEventListener( "click", drawCircle );
stopButton.addEventListener("click", stop );
dvdButton.addEventListener("click", dvdLogoSetup );
