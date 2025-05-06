const arr = [1, 2, 3, 4, 5];

arr.forEach((item, index, array) => {
  console.log("item", item, "index", index, "array", array);
});

Array.prototype.myForEach = function (callback) {
  // if there is not callback function passed then it will throw an error
  if (!callback) {
    throw Error("my forEach: undefined is not a function ");
  }
  //   console.log(this); // this is referring to the array itself.
  const arr = this.length;
  for (let i = 0; i < arr; i++) {
    callback(this[i], i, this);
  }
};

arr.myForEach((item, index, array) => {
  console.log(item, index, array);
});
