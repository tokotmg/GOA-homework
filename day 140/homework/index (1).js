function checkHomework(doneHomework) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (doneHomework) {
        resolve("გაკვეთილები მომზადებულია, შეგიძლია ითამაშო!");
      } else {
        reject("ჯერ დავალებები უნდა დაწერო");
      }
    }, 2000);
  });
}
console.log("Starting Test 1 (doneHomework = true)...");
checkHomework(true)
  .then((message) => {
    console.log("Success:", message);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
setTimeout(() => {
  console.log("\nStarting Test 2 (doneHomework = false)...");
  checkHomework(false)
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}, 2500);