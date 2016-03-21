/* -------------- CHECK --------------  */
console.log("Cats!");

/* -------------- HEADING -------------- */

var hwNum = d3.select("#hw")
    .text("HW#06");
var date = d3.select("#date")
    .text("03-21-2016");

/* -------------- HW05 -------------- */

var onDem = true;
var graphTitle = d3.select("#graphTitle");

// Hardcoded Data from NYT Primary Calendar and Results
// a list of states that have already voted

// Democrats

var demAlreadyVoted = ["Iowa", "New Hampshire", "Nevada", "South Carolina",
		     "Alabama", "Arkansas", "Colorado", "Georgia", 
		     "Massachusetts", "Minnesota", "Oklahoma", "Tennessee",
		     "Texas", "Vermont", "Virginia", "American Samoa", "Kansas",
		     "Louisiana", "Nebraska", "Maine", "Michigan",
		     "Mississippi", "Northern Marianas", "Florida", "Illinois",
		     "Missouri", "North Carolina", "Ohio"];

var stateOrder = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas",
		  "California", "Colorado", "Connecticut", "Delaware", "DC",
		  "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illiniois",
		  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine",
		  "Maryland", "Massachusetts", "Michigan", "Minnesota",
		  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
		  "New Hampshire", "New Jersey", "New Mexico", "New York",
		  "North Carolina", "North Dakota", "Northern Marianas", "Ohio",
		  "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico",
		  "Rhode Island","South Carolina", "South Dakota", "Tennessee",
		  "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia",
		  "Washington", "West Virginia", "Wisconsin", "Wyoming"];
//console.log(stateOrder.length);

var totalDemDelegs = [58,18,10,75,37,476,77,65,27,37,238,112,11,31,24,190,79,54,
		   37,53,61,30,105,121,152,94,41,88,22,31,39,32,126,38,277,120,
		   19,11,165,42,64,181,58,31,57,20,77,237,28,23,11,112,102,35,
		   89,17];
//console.log(totalDemDelegs.length);

var demStates = {};

for (i = 0; i < stateOrder.length; i++){
    demStates[stateOrder[i]] = totalDemDelegs[i];
}

// Making the Key

var keyData = {"Allocated": 100, "Not Yet Allocated": 100};

var scaleDem = d3.scale.linear()
    .domain([0,d3.max(totalDemDelegs)])
    .range([0,476]);

d3.select(".key")
    .selectAll("div")
    .data(d3.keys(keyData))
    .enter().append("div")
    .style("background-color", function(d){
	if (d == "Allocated")
	    return "steelblue"; })
    .style("width",function(d){
	return scaleDem(keyData[d]) + "px"; })
    .text(function(d) {return d;});

// Drawing the Graph

d3.select(".primaries")
    .selectAll("div")
    .data(stateOrder)
    .enter().append("div")
    .style("background-color", function(d){
	if (demAlreadyVoted.indexOf(d) != -1)
	    return "steelblue"; })
    .style("width",function(d){
	return scaleDem(demStates[d]) + "px"; })
    .text(function(d) {return (d+": " + demStates[d]);});


// Republicans

var repAlreadyVoted = ["Alabama", "Alaska", "American Samoa", "Arkansas",
			"Colorado", "DC", "Florida", "Georgia", "Guam", 
			"Hawaii", "Idaho", "Illiniois","Iowa", "Kansas",
			"Kentucky", "Louisiana", "Maine", "Massachusetts",
			"Michigan", "Minnesota", "Mississippi", "Missouri", 
			"Nevada","New Hampshire","North Carolina", 
			"North Dakota", "Northern Marianas", "Ohio",
			"Oklahoma","Puerto Rico","South Carolina", 
			"Tennessee","Texas", "Vermont", "Virgin Islands",
			"Virginia","Wyoming"];

var totalRepDelegs = [50,28,9,58,40,172,37,28,16,19,99,76,9,19,32,69,
		      57,30,40,45,46,23,38,42,59,38,39,52,27,36,30,23,
		      51,24,95,72,28,9,66,43,28,71,23,19,50,29,58,155,
		      40,16,9,49,44,34,42,29];
//console.log(totalRepDelegs.length);

var repStates = {};

for (i = 0; i < stateOrder.length; i++){
    repStates[stateOrder[i]] = totalRepDelegs[i];
}

var scaleRep = d3.scale.linear()
    .domain([0,d3.max(totalRepDelegs)])
    .range([0,476]);

var transition = function(){
    //console.log(onDem);
    if (onDem){
	//console.log("onDem is true");
	onDem = !onDem;
	graphTitle.text("Republican Delegates Per State");
	d3.select(".primaries")
	    .selectAll("div")
	    .transition()
	    .duration(750)
	    .style("background-color", function(d){
		if (repAlreadyVoted.indexOf(d) != -1)
		    return "steelblue"; })
	    .style("width", function(d){
		return scaleRep(repStates[d]) + "px"; })
	    .text(function(d) {return (d + ": " + repStates[d]);});
    }		
    else if (!onDem){
	//console.log("onDem is false");
	onDem = !onDem;
	graphTitle.text("Democratic Delegates Per State");
	d3.select(".primaries")
	    .selectAll("div")
	    .transition()
	    .duration(750)
	    .style("background-color", function(d){
		if (demAlreadyVoted.indexOf(d) != -1)
		    return "steelblue"; })
	    .style("width",function(d){
		return scaleDem(demStates[d]) + "px"; })
	    .text(function(d) {return (d+": " + demStates[d]);});
    };
};

d3.select(".primaries")
    .on("click", transition);
