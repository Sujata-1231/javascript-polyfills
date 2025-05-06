const arr = [1, 2, 3, 4, 5];

const filterResult = arr.filter((item) => {
  return item > 2;
});
console.log(filterResult);

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    throw new TypeError("my filter: callback must be a function");
  }

  const resultArray = [];

  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);

    if (result) {
      resultArray.push(this[i]);
    }
  }

  return resultArray;
};

const myFilterResults1 = arr.myFilter((item) => {
  return item > 2;
});
console.log(myFilterResults1);
