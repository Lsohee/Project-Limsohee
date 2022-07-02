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

export {textIFunc,leafIFunc}