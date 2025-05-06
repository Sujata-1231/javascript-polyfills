// normal .at method

const arr = [1, 2, 3, 4, 5];

console.log(arr.at(0)); // 1
console.log(arr.at(-1)); // 5

// custom .at method
Array.prototype.myAt = function (index) {
  if (this == null)
    throw new TypeError("Array.prototype.myAt called on null or undefined");

  const len = this.length;
  const i = Math.trunc(index); // index should be an integer

  const realIndex = i >= 0 ? i : len + i;
  if (realIndex < 0 || realIndex >= len) return undefined;

  return this[realIndex];
};

console.log(arr.myAt(0)); // 1
console.log(arr.myAt(-1)); // 5
