let imgInMy_MainBubble = {
  startPosition : function(leftValue,topValue){
    let values = {
      width :"0px",
      height: "0px",
      backgroundColor:"white",
      position:"absolute",
      left:leftValue,
      top:topValue,
      color:"none",
      src: "none",
      id:"mainBubbleMy",
    }
    return values
  },
  intro : {
    startLeft:100,
    finishLeft:70,
    startTop :40,
    finishTop :40,
    startScale:1,
    finishScale:1
  },
    I :{
    startLeft: 70,
    finishLeft: 60,
    startTop : 40,
    finishTop : 40,
    startScale:1,
    finishScale:2
  },
  My : {
    startLeft: 60,
    finishLeft: 150,
    startTop : 40,
    finishTop : 40,
    startScale:2,
    finishScale:4
  }
}










function mottoBubbleMyFunc(leftValue,topValue){
  let mottoBubbleMyValues = {
    "width" :"100px",
    "height": "100px",
    "backgroundColor":"white",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"none",
    "src": "none",
    "id":"mottoBubbleMy",
  }
  return mottoBubbleMyValues
}
function prosAndConsBubbleMyFunc(leftValue,topValue){
  let prosAndConsBubbleMyValues = {
    "width" :"100px",
    "height": "100px",
    "backgroundColor":"white",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"none",
    "src": "none",
    "id":"prosAndConsBubbleMy",
  }
  return prosAndConsBubbleMyValues
}
function interestsBubbleMyFunc(leftValue,topValue){
  let interestsBubbleMyValues = {
    "width" :"100px",
    "height": "100px",
    "backgroundColor":"white",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"none",
    "src": "none",
    "id":"interestBubbleMy",
  }
  return interestsBubbleMyValues
}
function projectsBubbleMyFunc(leftValue,topValue){
  let projectsBubbleMyValues = {
    "width" :"100px",
    "height": "100px",
    "backgroundColor":"white",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"none",
    "src": "none",
    "id":"projectsBubbleMy",
  }
  return projectsBubbleMyValues
}
export {imgInMy_MainBubble, mottoBubbleMyFunc,prosAndConsBubbleMyFunc, interestsBubbleMyFunc,
  projectsBubbleMyFunc}