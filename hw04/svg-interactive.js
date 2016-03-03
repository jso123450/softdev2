console.log("Javascript loaded");

/* ---------------------- JAVASCRIPT ---------------------- */

// Heading
var hw = document.getElementById("hw");
hw.innerHTML = "HW04 -- SVG Interactive";

var date = document.getElementById("date");
date.innerHTML = "2016-02-29";


/* ---------------------- CODE ---------------------- */

// Getting from DOM
var pic = document.getElementById("vimage");
var growButton = document.getElementById("startGrow");
var DVDButton = document.getElementById("startDVD");
var stopButton = document.getElementById("stopButton");
var clearButton = document.getElementById("clearButton");

// SVG Namespace ID
var svgNSID = "http://www.w3.org/2000/svg";

// Clicking & Drawing Dots

var change = function(e){
    e.preventDefault();
    if (this.getAttribute("fill") == "yellow")
	this.setAttribute( "fill", "green" );
    else
	this.setAttribute("fill", "yellow");
};

var drawDot = function(x,y){
    var c = document.createElementNS( svgNSID, "circle" );
    c.setAttribute( "cx", x );
    c.setAttribute( "cy", y );
    c.setAttribute( "r", "30" );
    c.setAttribute( "fill", "yellow" );
    c.setAttribute( "stroke", "black" );
    c.addEventListener( "click", change );
    pic.appendChild(c);
};

var clicked = function(e){
    if (e.toElement == this)
	drawDot( e.offsetX, e.offsetY );
};

pic.addEventListener( "click" , clicked );

// Growing Dot

var intervalID;

var grow = function(){
    // init statements
    var c = document.createElementNS( svgNSID , "circle" );
    c.setAttribute( "cx" , 250 );
    c.setAttribute( "cy" , 250 );
    c.setAttribute( "fill", "blue" );
    c.setAttribute( "r" , 0);
    var growing = true;
    // animation
    var animateCode = function(){
	//c = document.getElementByTagName("circle")[0];
	var radius = parseInt(c.getAttribute("r"));
	if (radius >= 250)
	    growing = false;
	if (radius <= 0)
	    growing = true;
	if (growing)
	    radius = radius+1;
	else
	    radius = radius-1;
	c.setAttribute( "r", radius.toString() );
	pic.appendChild(c);
    };

    intervalID = window.setInterval( animateCode, 16 );
};

growButton.addEventListener( "click" , grow );

// DVD Animation

var movingDVD = function moveDVD(){

    // init
    var dvd = document.createElementNS( svgNSID, "circle" );
    var x = 250;
    var y = 250;
    dvd.setAttribute( "cx" , x );
    dvd.setAttribute( "cy" , y );
    dvd.setAttribute( "fill", "red" );
    dvd.setAttribute( "r" , 50);
    var v_x = 1;
    var v_y = -2;
    
    var animateCode = function(){
	if ((dvd.getAttribute("cx") >= 450) || (dvd.getAttribute("cx") <= 50))
	    v_x = v_x * -1;
	if ((dvd.getAttribute("cy") >= 450) || (dvd.getAttribute("cy") <= 50))
	    v_y = v_y * -1;
	x = x + v_x;
	y = y + v_y;
	dvd.setAttribute( "cx", x );
	dvd.setAttribute( "cy", y );
	pic.appendChild(dvd);
    }
    intervalID = window.setInterval( animateCode, 16 );
};

DVDButton.addEventListener( "click", movingDVD );

// Stop the current animation
var stop = function(){
    window.clearInterval(intervalID);
};

stopButton.addEventListener( "click" , stop );


// Clear the "canvas"
var clear = function(e){
    e.preventDefault();
    while (pic.lastChild)
	pic.removeChild(pic.lastChild);
};

clearButton.addEventListener( "click", clear );
