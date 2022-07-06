const testArr = []

const testObj = {
  name: "limsohee",
  age: 21,
  color: "blue"
}

console.log(testObj.name);
testArr.unshift(testObj.age)
console.log(testArr[0]);
testArr.unshift(testObj.color);
console.log(testArr[0]);