function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("You are an adult");
    } else {
      reject("You are a child");
    }
  });
}
checkAge(20)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.log("Error:", error);
  });