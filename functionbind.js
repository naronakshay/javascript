const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  let f=person.fullName.bind(person1)
  console.log(f());