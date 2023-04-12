function checkPassword(password) {
  let correctLength,
    hasCapital,
    hasNumber = false;

  if (password.length >= 8) {
    correctLength = true;
  }

  for (let i = 0; i < password.length; i++) {
    const e = password[i];
    if (e !== e.toLowerCase()) {
      hasCapital = true;
    }

    if (Number(e)) {
      hasNumber = true;
    }
  }

  if (correctLength && hasCapital && hasNumber) {
    return true;
  }
}

class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  getPassword() {
    let pass = "";
    for (let i = 0; i < this.#password.length; i++) {
      pass += "*";
    }
    return pass;
  }

  setPassword(newPassword) {
    if (checkPassword(newPassword)) {
      this.#password = newPassword;
    } else {
      console.log(
        "Error: Password must be atleast 8 characters long and have atleast one number and one uppercase letter"
      );
    }
  }
}

let mohit = new User("Mohit", "Password123");

mohit.setPassword("PAssword");//error
mohit.setPassword("password124");//error
mohit.setPassword("aditya");//error
mohit.setPassword("Indian787");//Correct password format
console.log(mohit.getPassword());