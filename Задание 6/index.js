const user = {};

user.name = 'Muslim';
user.surname = 'Musiev';
user.age = 18;

user.sayHello = function() {
	return `Hello ${this.name} ${this.surname}`
};

delete user.age

console.log(user.sayHello())