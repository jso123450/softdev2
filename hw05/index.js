/* -------------- CHECK --------------  */
console.log("Cats!");

/* -------------- HEADING -------------- */

var hwNum = d3.select("#hw")
    .text("HW#05");
var date = d3.select("#date")
    .text("03-20-2016");

/* -------------- HW05 -------------- */

// Hardcoded Data from NYT Primary Calendar and Results
// a list of states that have already voted
var categoryOrder = ["Iowa", "New Hampshire", "Nevada", "South Carolina",
		     "Alabama", "Arkansas", "Colorado", "Georgia", 
		     "Massachusetts", "Minnesota", "Oklahoma", "Tennessee",
		     "Texas", "Vermont", "Virginia", "American Samoa", "Kansas",
		     "Louisiana", "Nebraska", "Maine", "Michigan",
		     "Mississippi", "Northern Marianas", "Florida", "Illinois",
		     "Missouri", "North Carolina", "Ohio"];
//console.log(categoryOrder.length);

/* This is here in case I would want to expand on the hw later or smth to show
   the current Dem. race between Clinton and Bernie and how their votes stack
   up against one another.
var clintonDeleg = [23,9,20,39,44,22,28,73,46,31,17,44,147,0,62,4,9,37,10,9,60,
		    30,4,133,68,32,59,79,467];
console.log(clintonDeleg.length);
var bernieDeleg = [21,15,15,14,9,10,38,29,45,46,21,23,75,16,33,2,24,14,15,16,67,
		   4,2,65,67,32,45,62,26];
console.log(bernieDeleg.length);
var totalDelegsPerState = new Array(29);
var length = categoryOrder.length; // should be 29
for (i = 0; i < categoryOrder.length; i++){
    totalDelegsPerState[i] = clintonDeleg[i] + bernieDeleg[i];
}
console.log(totalDelegsPerState);
*/

// Hardcoded Data found online
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
		  "Washington", "West Virginia", "Wisconsin", "Wyoming",
		  "Democrats Abroad", "Unassigned"];
var totalDelegs = [58,18,10,75,37,476,77,65,27,37,238,112,11,31,24,190,79,54,
		   37,53,61,30,105,121,152,94,41,88,22,31,39,32,126,38,277,120,
		   19,11,165,42,64,181,58,31,57,20,77,237,28,23,11,112,102,35,
		   89,17,17,1];
var states = {};
for (i = 0; i < stateOrder.length; i++){
    states[stateOrder[i]] = totalDelegs[i];
}
console.log(states);
var scale = d3.scale.linear()
    .domain([0,d3.max(totalDelegs)])
    .range([0,600]);
d3.select(".primaries")
    .selectAll("div")
    .data(stateOrder)
    .enter().append("div")
    .style("background-color", function(d){
	if (categoryOrder.indexOf(d) != -1)
	    return "steelblue"; })
    .style("width",function(d){
	return scale(states[d]) + "px"; })
    .text(function(d) {return (d+": " + states[d]);});

// Making the Key

var keyData = {"Allocated": 100, "Not Yet Allocated": 100};

d3.select(".key")
    .selectAll("div")
    .data(d3.keys(keyData))
    .enter().append("div")
    .style("background-color", function(d){
	if (d == "Allocated")
	    return "steelblue"; })
    .style("width",function(d){
	return scale(keyData[d]) + "px"; })
    .text(function(d) {return d;});
