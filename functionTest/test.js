function MakeValues(startLeft,finishLeft,startTop,finishTop,startScale,finishScale){
  this.startLeft=startLeft ;
  this.finishLeft = finishLeft ;
  this.startTop = startTop ; 
  this.finishTop = finishTop ;
  this.startScale =startScale ;
  this.finishScale = finishScale;
}
const leafIntro = new MakeValues(100,100,20,40,30,20)
console.log(leafIntro)