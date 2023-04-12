let convertToNumber = (str) => {
  try {
    if (!Number(str)) {
      throw new Error("Not A Number");
    }
    str = Number(str);
    return str;
  } catch {
    console.log("Invalid Number");
  }
};

let c = convertToNumber("123");
console.log(typeof c);
convertToNumber("string");