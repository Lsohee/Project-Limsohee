const testArr = []

const testObj = {
  name: "limsohee",
  age: 21,
  color: "blue"
}

// console.log(testObj.name);
// testArr.unshift(testObj.age)
// console.log(testArr[0]);
// testArr.unshift(testObj.color);
// console.log(testArr[0]);

function changeArr(arrName, pushValue) {
  arrName.pop()
  arrName.push(pushValue);
  return arrName[0]
}

changeArr(testArr, testObj.name);
console.log(testArr[0])
console.log(changeArr(testArr, testObj.age));