/* -------------- JAVASCRIPT -------------- */ 

// Just to check the source path of the script
console.log("Ready for some dotconn'ing!");

/*--------------- HEADING ---------------*/
var hw = document.getElementById("hw");
hw.innerHTML = "HW2 -- Animate!";

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

var clear = function(){
    ctx.clearRect(0,0,width,height);
};

var drawCircle = function(){
    clear;
    if (ballooning){
	radius = radius+1;
    }
    else {
	radius = radius-1;
    }
    window.requestAnimationFrame( drawCircle );
};

var button = document.getElementById("circle");
button.addEventListener( "click", drawCircle );
