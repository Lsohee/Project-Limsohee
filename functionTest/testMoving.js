class MovingValues {
  constructor(startLeft, finishLeft, startTop, finishTop, startScale, finishScale) {
    this.startLeft = startLeft;
    this.finishLeft = finishLeft;
    this.startTop = startTop;
    this.finishTop = finishTop;
    this.startScale = startScale;
    this.finishScale = finishScale;
  }
}

const testValues = new MovingValues(30,20,410,20,30,50)
console.log(testValues)