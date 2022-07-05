class CreateDivValues {
  constructor(width,height,left,top,position,src,id){
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.position = position;
    this.src = src;
    this.id = id;
  }
}

const testValues = new CreateDivValues("100px","20px","10px","30px","absolute","./page/page.js","text")

// pseudo class CreateDivValues가 제대로 작동하는 것을 console.log로 확인 

console.log(testValues)