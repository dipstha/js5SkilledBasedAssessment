

class Person {
    constructor(firstName, lastName, age, ) {
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
      set firstName (firstName){
        this._firstName = firstName
      }
      set lastName (lastName){
        this._lastName = lastName
      }
      set age(age) {
        this._age = age;
      }
     
    }



    const user = new Person ('Rahul', 'Shrestha', 'Ten'); 
   
    

      const fName = document.getElementById("firstName");
      const lName = document.getElementById("lastName");
      const ageNumber = document.getElementById("age"); 
 

     
      function inputInfo  () {
       fName.innerHTML = user.firstName();
       lName.innerHTML = user.lastName();
       ageNumber.innerHTML = user.age();
    }

    const btn = document.getElementById("button");

         btn.addEventListener('click', inputInfo);
    
