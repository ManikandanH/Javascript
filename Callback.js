/* callback pattern - pass a function as an argument which can be invoked after some logic*/

var findNodes = function(callback, callbackObj){
	var nodes = [
		'node1',
		'node2',
		'node3',
		'node4',
	]
	for(var i=0; i<nodes.length; i++){
		if(/*some complex logic*/ i === 3){
			if(typeof callback === 'function'){
				callback.call(callbackObj, nodes[i])
			}
		} 

	}
}

const myApp = {
	author: 'Manikandan',
	stack: 'Javascript'
}
findNodes(function(result){
 console.log(result);
 console.log(this)
}, myApp);

