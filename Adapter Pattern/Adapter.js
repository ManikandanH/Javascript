/*Adapter Pattern:
	Convert the interface of the class into another interface(old interface) that client expects to
Adapter lets classes work together to acheive clients expected interface */

function OldNameGetter(firstName, secondName){
	this.firstName = firstName;
	this.secondName = secondName;
	this.operation = function(operation){
		switch(operation){
			case 'firstname':
				return this.firstName

			case 'secondname':
				return this.secondName

			default:
				return this.firstName + this.secondName;
		}
	}
}

//Adaptee for OldNameGetter
function NewNameGetter(firstName, secondName){
	this.firstName = firstName;
	this.secondName = secondName;
	this.getFirstName = function(){
		return this.firstName;
	}
	this.getSecondName = function(){
		return this.secondName;
	}
}


//Adapter that will be visible to client
function AdapterClass(firstName, secondName){
	this.firstName = firstName;
	this.secondName = secondName;
	const newNameGetter = new NewNameGetter(firstName, secondName);
	this.operation = function(operation){
		switch(operation){
			case 'firstname':
				return newNameGetter.getFirstName();
			case 'secondname':
				return newNameGetter.getSecondName();
			default: 
				return newNameGetter.getFirstName() + newNameGetter.getSecondName();
		}
	}
}


// const oldName = new OldNameGetter('Mani','Kandan')
// console.log(oldName.operation('firstname'));

// const newName = new NewNameGetter('Mani','Kandan')
// console.log(newName.getFirstName('firstname'));
// console.log(newName.getSecondName('secondname'));

const adapter = new AdapterClass('Mani','Kandan')
console.log(adapter.operation('firstname'))
