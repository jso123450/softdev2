console.log("JABASUKURIPUTO");

var base = "this is in foo in global namespace";
var x = "x in the global namespace";

var f2 = function(){
    console.log("this is f2");
};

var f1 =  {
    x : "sumpn in the f1 namespace",
    f2 : f2,
    f : function(){
	console.log("this in f in foo namespace");
	console.log("x is " + x);
	console.log("f1.x is " + f1.x);
	console.log("better way: " + this.x);
    }
};

var makeIncrementer = function(){
    var i = 0;
    var increment = function(){
	i++;
	return i;
    }
    return increment;
};

// if var i = 0 were here, it would essentially be a static var in Java

var makeAdder = function(n){
    var increment = function(x){
	return x+n;
    }
    return increment;
};
