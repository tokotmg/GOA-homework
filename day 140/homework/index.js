let money = 20;
const purchaseTicket = new Promise((resolve, reject) => {
  if (money >= 20) {
    resolve("ბილეთი ნაყიდია!");
  } else {
    reject("თანხა არ გეყოფა");
  }
});
purchaseTicket
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
