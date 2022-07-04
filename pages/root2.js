

const moveingValues = {
  controlRoot2 : function(leftValue,topValue){
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
  },
  intro : {
    'startLeft':10,
    'finshLeft':10,
    "startTop" :100,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":1
  },
  
  I : {
    'startLeft':10,
    'finshLeft':-43,
    "startTop" :30,
    "finshTop" : 30,
    "startScale":1,
    "finshScale":2
  },
  My : {
    'startLeft':-43,
    'finshLeft':-130,
    "startTop" :30,
    "finshTop" : 30,
    "startScale":2,
    "finshScale":4
  }
}

export {moveingValues}