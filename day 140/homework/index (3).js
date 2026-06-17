function washVegetables() {
  return new Promise((resolve) => {
    console.log("Starting to wash vegetables...");
    setTimeout(() => {
      console.log("Vegetables washed successfully.");
      resolve("clean vegetables");
    }, 1000);
  });
}
function cutVegetables(ingredients) {
  return new Promise((resolve, reject) => {
    console.log("Starting to cut vegetables...");
    setTimeout(() => {
      const isKnifeSharp = false; 

      if (isKnifeSharp) {
        console.log("Vegetables chopped successfully.");
        resolve("chopped vegetables");
      } else {
        reject("We couldn't cut the vegetables!");
      }
    }, 1000);
  });
}
function cookDinner(choppedIngredients) {
  return new Promise((resolve) => {
    console.log("Starting to cook dinner...");
    setTimeout(() => {
      resolve("Dinner is served! 🍲");
    }, 1000);
  });
}
washVegetables()
  .then((result) => {
    return cutVegetables(result);
  })
  .then((result) => {
    // This step will be skipped because the previous promise rejects
    return cookDinner(result);
  })
  .then((finalMessage) => {
    console.log(finalMessage);
  })
  .catch((error) => {
    // The program jumps directly here when cutVegetables rejects
    console.log("⚠️ Process Stopped Error:", error);
  });
