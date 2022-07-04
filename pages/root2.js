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
  let movementIValues = {
    'startLeft':10,
    'finshLeft':-43,
    "startTop" :30,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":2
  }
  let movementMyValues = {
    'startLeft':-43,
    'finshLeft':-130,
    "startTop" :30,
    "finshTop" : 30,
    "startScale":2,
    "finshScale":4
  }
  if(currentPage === "zero"){
    return values
  } else if(currentPage === "I"){
    return movementIValues
  }else if (currentPage === "My"){
    return movementMyValues
  }
}
export {controlRoot2,textIntroMovementValues}