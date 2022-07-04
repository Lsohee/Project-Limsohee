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

let textIntroMovementValues = {
  'startLeft':10,
  'finshLeft':10,
  "startTop" :100,
  "finshTop" : 30,
  "startScale":1,
  "finshScale":1
}

export {controlRoot2,textIntroMovementValues}