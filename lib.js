var lib = lib || {};

(function(exports) {
	function Person(name) {
		this.name = name;
	}

	Person.prototype.eat = function() {
		console.log(this.name + " eating");
	}

	Person.prototype.go = function() {
		console.log(this.name + " going");
	}

	function Employee(name){ 
		Person.call(this, name);
	}

	/*Employee.prototype = Object.create(Person.prototype);
	Employee.prototype.constructor = Employee;*/

	function extend(Child, Parent) {
		var Temp = function() { };
		Temp.prototype = Parent.prototype;
		Child.prototype = new Temp();
		Child.prototype.constructor = Parent;
		Child.superclass = Parent.prototype;
	};

	extend(Employee, Person);

	Employee.prototype.work = function() {
		console.log(this.name + " working");
	}

	lib.createPerson = function(name) {
		return new Person(name);
	};	

	lib.createEmployee = function(name) {
		return new Employee(name);
	};
}(lib));