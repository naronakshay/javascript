const person = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      
      console.log(this.firstName + " " + this.lastName);
    }
  }
  
  let display = person.display.bind(person);
  setTimeout(display, 3000);