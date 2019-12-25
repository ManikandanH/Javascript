/* hoisting */

var state = "global";

var hoistMe2 = function(){
	console.log(state);
	var state = "local";
	console.log(state)
}

hoistMe2();

var hoistMe = function(){
	return function(){
		console.log(state); //undefined (hoisiting)
		var state = "local";
		console.log(state) //local 

	}
}

hoistMe()();