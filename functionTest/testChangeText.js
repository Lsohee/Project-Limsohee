// const testArr = []

// const testObj = {
//   name: "limsohee",
//   age: 21,
//   color: "blue"
// }

// console.log(testObj.name);
// testArr.unshift(testObj.age)
// console.log(testArr[0]);
// testArr.unshift(testObj.color);
// console.log(testArr[0]);

// function changeArr(arrName, pushValue) {
//   arrName.pop()
//   arrName.push(pushValue);
//   return arrName[0]
// }

// changeArr(testArr, testObj.name);
// console.log(testArr[0])
// console.log(changeArr(testArr, testObj.age));

// let temp;

const testArr = ["lim", "so", "hee", "is", "a", "girl"]
// console.log(testArr.indexOf("so"))

function testFuncTwo(testArrName, element) {
  let value 
  testArrName.push(testArrName[0])
  value = testArrName.indexOf(element)
  testArrName.copyWithin(0, testArrName.indexOf(element), testArrName.indexOf(element) + 1)
  testArrName.splice(value,1)
  // return console.log(testArrName)
}

testFuncTwo(testArr,"is")



// console.log(testFuncTwo(testArr, "a"))

// temp = testArr.indexOf("so")
// console.log(temp)






//  : 아니지 이거는 slide용 이고 내가 만들어야되는 거는 원하는 값을 원하는 위치에 놓는 함수지
function testFunc(testArrName) {
  const temp = testArrName[0]
  testArrName.copyWithin(0, 1, testArrName.length + 1)
  testArrName.splice(testArrName.length - 1, 1, temp)
  return testArrName
}



// testArr.reverse()
// console.log(testArr.length) //6
// testArr.push(testArr[0])
// console.log(testArr) // ['lim', 'so','hee', 'is','a', 'girl','lim']
// console.log(testArr)//['so', 'hee','is', 'a','girl', 'lim','lim']