function controlRoot2(leftValue,topValue){
  let introValues = {
    "width" :"fit-contant",
    "height": "fit-contant",
    "backgroundColor":"none",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"black",
    "src": "none",
    "id":"textIntro",
  }
  return introValues
}



function textIntroMovementValues(currentPage){
  let values = {
    'startLeft':10,
    'finshLeft':10,
    "startTop" :100,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":1
  }
  let movementValues = {
    'startLeft':10,
    'finshLeft':-43,
    "startTop" :30,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":2
  }
  
  if(currentPage === "zero"){
    return values
  } else if(currentPage === "I"){
    return movementValues
  }
}
export {controlRoot2,textIntroMovementValues}