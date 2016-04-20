var makeCounter = function(){
    // inst var
    var i = 0;

    // methods    
    var set = function(n){
	i = n;
    };

    var get = function(){
	return i;
    };

    var inc = function(){
	i++;
    };
    
    var dec = function(){
	i--;
    };

    var setx = function(s){
	this.x = s;
    };

    // means of accessing members
    return {
	x : 'something in the dictionary',
	set : set, 
	get : get,
	inc : inc,
	dec : dec,
	setx : setx
    };
};
