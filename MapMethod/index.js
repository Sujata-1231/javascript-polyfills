const arr = [2, 3, 4, 1];

const mapResult = arr.map((item, index, array) => {
  return item * 2;
});

console.log(mapResult);

Array.prototype.myMap = function (callback) {
  if (!callback) {
    throw Error("my map: undefined is not a function");
  }

  let len = this.length;

  let result = [];
  for (let i = 0; i < len; i++) {
    const res = callback(this[i], i, this);
    result.push(res);
  }

  return result;
};

const myMapResults = arr.myMap((item) => {
  return item * 2;
});

console.log(myMapResults);
