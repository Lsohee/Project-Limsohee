export default class CreateMovingValues {
  constructor(startLeft, finishLeft, startTop, finishTop, startScale, finishScale,startOpacity = 1,finishOpacity=1) {
    this.startLeft = startLeft;
    this.finishLeft = finishLeft;
    this.startTop = startTop;
    this.finishTop = finishTop;
    this.startScale = startScale;
    this.finishScale = finishScale;
    this.startOpacity = startOpacity;
    this.finishOpacity = finishOpacity;
  }
}
