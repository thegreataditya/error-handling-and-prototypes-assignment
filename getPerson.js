let getPerson = (obj) => {
  try {
    if (typeof obj === "object" && obj.name && obj.age) {
      console.log(`Name: ${obj.name}, Age: ${obj.age}`);
    } else {
      throw new Error("Invalid Parameter");
    }
  } catch {
    console.log("Invalid Parameter type");
  }
};

getPerson({ name: "Aditya", age: 17 });//calling getPerson with correct params
getPerson({ type: null, age: 32 });//calling getPerson with incorrect params
getPerson({ isStudent: true });//calling getPerson with incorrect params
getPerson([1, 2, 3]);//calling getPerson with incorrect params