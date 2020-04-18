/*
Maximum Profit
Given an array of stock prices where the indices are days and the values are the highest price of the stock that day, write a program to determine the maximum profit you could have made by making a single purchase and a single sale of a single stock. You must buy before you sell.

Array: [1,2,3,4,5,6,7]
Result: 6

Array: [7,2,3,4,5,6,1]
Result: 4

*/
function maxProfit(stocks) {
  // const sortedPrices = stocks.sort();

  let max = undefined;

  for (var i = 0; i < stocks.length; i++) {
    console.log(stocks[i]);
  }

  // return stocks.reduce((acc, curr) => {
  //    return acc && curr < acc ? acc: curr;
  // }, undefined);
}

// maxProfit([7, 2, 3, 4, 5, 6, 1]);

// console.log(
//   "radar"
//     .split("")
//     .reverse()
//     .join("")
// );

const tasks = [
    { name: "1st", type: "NC" },
    { name: "2st", type: "CN" },
    { name: "3rd", type: "NC" },
];

const isTaskOfType = type => task => task.type === type;

const isCreateNewContent = task => isTaskOfType("CN")(task);

const filteredTasks = tasks.filter(isCreateNewContent);

console.dir(filteredTasks.length);
