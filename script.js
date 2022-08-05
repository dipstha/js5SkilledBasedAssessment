class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get age() {
    return this._age;
  }
  // set firstName (firstName){
  //   this._firstName = firstName
  // }
  // set lastName (lastName){
  //   this._lastName = lastName
  // }
  // set age(age) {
  //   this._age = age;

  description() {
    customerContact1.innerHTML = `Hello ${this._firstName} ${this._lastName} you are ${this._age} years old.`;
  }
}

function inputInfo() {
  const fName = document.getElementById("firstName").value;
  const lName = document.getElementById("lastName").value;
  const ageNumber = document.getElementById("age").value;
  const user = new Person(fName, lName, ageNumber);
  user.description();
}
const customerContact1 = document.getElementById("contactCustomer");
const btn = document.getElementById("button");

btn.addEventListener("click", inputInfo);
