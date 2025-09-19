// 1) გაამრავლე თითოეული ელემენტი 3-ზე
let arr1 = [1, 2, 3];
let multipliedBy3 = arr1.map((num) => num * 3);
console.log(multipliedBy3);

// 2) გაფილტრე ისეთი რიცხვები რომლებიც იყოფა უნაშთოდ 3-ზე
let arr2 = [1, 2, 3, 4, 5, 6, 9];
let divisibleBy3 = arr2.filter((num) => num % 3 === 0);
console.log(divisibleBy3);

// 3) დააბრუნე ყველა დადებითი რიცხვის ჯამი
let arr3 = [-5, 10, -2, 15, -1, 20];
let sumPositive = arr3
  .filter((num) => num > 0)
  .reduce((acc, val) => acc + val, 0);
console.log(sumPositive); // 45

// 4) მოცემული სტრინგების მასივიდან წაშალე თითოეული სტრინგის ბოლო სიმბოლო
let namesArr = ["giorgi", "nika", "mariami"];
let cutLastChar = namesArr.map((name) => name.slice(0, -1));
console.log(cutLastChar);

// 5) გაამრავლე ყველა ელემენტი 2-ზე და შემდეგ ამოიღე რიცხვები, რომლებიც იყოფა 3-ზე
let arr5 = [1, 2, 3, 4, 5, 6];
let result5 = arr5.map((num) => num * 2).filter((num) => num % 3 === 0);
console.log(result5);

// 6) დააჯგუფე price-ის მიხედვით
let arr6 = [
  { category: "pizza", price: 20 },
  { category: "pizza", price: 20 },
  { category: "sushi", price: 30 },
  { category: "sushi", price: 30 },
];
let grouped = arr6.reduce((acc, item) => {
  (acc[item.price] = acc[item.price] || []).push(item);
  return acc;
}, {});
console.log(grouped);

// 7) დაალაგე რიცხვები ზრდადობით
let numsArr = [1, -1, -2, -10, 111, 3, 2, 5];
let sortedAsc = numsArr.sort((a, b) => a - b);
console.log(sortedAsc); // [-10, -2, -1, 1, 2, 3, 5, 111]

// 8) გაამრავლე ყველა ელემენტი 2-ზე და დატოვე მხოლოდ ისინი, რომლებიც 5-ზე მეტია
let arr8 = [1, 2, 3, 4, 5];
let result8 = arr8.map((num) => num * 2).filter((num) => num > 5);
console.log(result8);

// 9) ამოიღე უნიკალური ელემენტები
let arr9 = [1, 1, 1, 1, 2, 2, 3, 3, 3];
let unique = [...new Set(arr9)];
console.log(unique);

// 10) დააბრუნე ორი ყველაზე მცირე რიცხვის ჯამი
let arr10 = [-1, 20, 90, 4, 5, 111];
let sumTwoSmallest =
  arr10.sort((a, b) => a - b)[0] + arr10.sort((a, b) => a - b)[1];
console.log(sumTwoSmallest);
