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
    "width" :"300px",
    "height": "300px",
    "position":"absolute",
    "left":leftValue,
    "top":topValue,
    "src": "./img/leaf.svg",
    "id":"leafI",
  }
  return leafIValues
}

function leafIMovementValues(currentPage) {
  // pseudo 처음 leafI 등장 값 
  let values = {
    'startLeft':100,
    'finshLeft':70,
    "startTop" :30,
    "finshTop" :30,
    "startScale":1,
    "finshScale":1
   }
   let movementValues = {
    'startLeft': 70,
    'finshLeft': 60,
    "startTop" : 30,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":2
   }
   let movementMyValues = {
    'startLeft': 60,
    'finshLeft': 150,
    "startTop" : 30,
    "finshTop" : 30,
    "startScale":2,
    "finshScale":4
   }
  if(currentPage === "I"){
    return movementValues
  } else if (currentPage === "zero"){
    return values
  } else if(currentPage === "My"){
    return movementMyValues
  }
}

function textIMovementValues(currentPage) {
  let values = {
    'startLeft':100,
    'finshLeft':70,
    "startTop" :40,
    "finshTop" :40,
    "startScale":1,
    "finshScale":1
   }
   let movementIValues = {
    'startLeft': 70,
    'finshLeft': 60,
    "startTop" : 40,
    "finshTop" : 40,
    "startScale":1,
    "finshScale":2
   }
   let movementMyValues = {
    'startLeft': 60,
    'finshLeft': 150,
    "startTop" : 40,
    "finshTop" : 40,
    "startScale":2,
    "finshScale":4
   }
  if(currentPage === "I"){
    return movementIValues
  } else if (currentPage === "zero"){
    return values
  } else if(currentPage === "My"){
    return movementMyValues
  }
}
export {textIFunc,leafIFunc,leafIMovementValues,textIMovementValues}