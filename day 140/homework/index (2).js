function washVegetables() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isWashed = true;
      console.log("ბოსტნეული გარეცხილია.");
      resolve(isWashed);
    }, 1000);
  });
}
function cutVegetables() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isCut = true;
      console.log("ბოსტნეული დაჭრილია.");
      resolve(isCut);
    }, 2000);
  });
}
function cookSoup() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isCooked = true;
      console.log("სადილი მზად არის.");
      resolve(isCooked);
    }, 1500);
  });
}
washVegetables()
  .then(() => cutVegetables())
  .then(() => cookSoup())
  .then((finalResult) => {
    console.log("Dinner is ready."); 
  });
