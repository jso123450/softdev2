/* -------------- JAVASCRIPT -------------- */ 

// Just to check the source path of the script
console.log("Ready for some dotconn'ing!");

/*--------------- HEADING ---------------*/
var hw = document.getElementById("hw");
hw.innerHTML = "HW02 -- Animate!";

var date = document.getElementById("date");
date.innerHTML = "2016-02-22";

/* ------------- DOT CONNECTION ------------- */
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
    window.requestAnimationFrame( drawCircle );
};

var button = document.getElementById("circle");
button.addEventListener( "click", drawCircle );
