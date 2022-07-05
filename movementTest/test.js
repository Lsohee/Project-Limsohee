class test{
  constructor(width,height){
    this.width = width
    this.height = height
  }
  color(){
    color = "blue"
  }
}


function TestTwo(width,height = "100px"){
  this.width = width
  this.height = height
}



const newTest = new test("100px","100px")
const newTestTwo = new TestTwo(100)



console.log(newTest)
console.log(newTestTwo)