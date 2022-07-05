const imgInI_leaf = {
  startPosition : function(leftValue,topValue){
    let values = {
      width :"300px",
      height: "300px",
      position:"absolute",
      left:leftValue,
      top:topValue,
      src: "./img/leaf.svg",
      id:"leafI",
    }
    return values
  },
  
    intro : {
    startLeft:100,
    finishLeft:70,
    startTop :30,
    finishTop :30,
    startScale:1,
    finishScale:1
   },
   I : {
    startLeft: 70,
    finishLeft: 60,
    startTop : 30,
    finishTop : 30,
    startScale:1,
    finishScale:2
   },
   My: {
    startLeft: 60,
    finishLeft: 150,
    startTop : 30,
    finishTop : 30,
    startScale:2,
    finishScale:4
   }
}
  // pseudo 처음 leafI 등장 값 

const textInI_introduceText = {
  startPosition : function(leftValue,topValue){
    let values = {
      width:"350px",
      height: "100px",
      backgroundColor:"none",
      position:"absolute",
      left:leftValue,
      top:topValue,
      color:"black",
      src: "none",
      id:"textI",
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

export {imgInI_leaf,textInI_introduceText}