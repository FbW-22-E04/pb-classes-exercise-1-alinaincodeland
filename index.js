class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`
		this.email = `${this.firstname}.${this.lastname}@company.com`.toLocaleUpperCase()
		
	}


}


const emp1 = new Employee("John", "Smith")
emp1.fullname // "John Smith"

const emp2 = new Employee("Mary",  "Sue")
emp2.email // "mary.sue@company.com"

const emp3 = new Employee("Antony", "Walker")
emp3.firstname // "Antony" 