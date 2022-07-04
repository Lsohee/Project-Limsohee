function textIFunc(leftValue,topValue){
  let textIvalues = {
    "width" :"350px",
    "height": "100px",
    "backgroundColor":"none",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"black",
    "src": "none",
    "id":"textI",
  }
  return textIvalues
}
function leafIFunc(leftValue,topValue){
  let leafIValues = {
    "width" :"100px",
    "height": "100px",
    "backgroundColor":"white",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "color":"none",
    "src": "none",
    "id":"leafI",
  }
  return leafIValues
}

// pseudo 처음 textI 등장 값 
let textIMovementValues = {
  'startLeft':100,
  'finshLeft':70,
  "startTop" :30,
  "finshTop" : 30,
  "startScale":1,
  "finshScale":1
}
export {textIFunc,leafIFunc,textIMovementValues}