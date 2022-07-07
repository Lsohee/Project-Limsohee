// pseudo 물의 느낌을 내기위한 layer (blur처리 색깔등 등등)

export default function watercolor(leftValue,topValue){
  let waterColor = {
    width :"100vw",
    height: "100vh",
    backgroundColor:"#89CCDB",
    position:"relative",
    left:leftValue,
    top:topValue,
    color:"black",
    src: "none"
  }
  return waterColor
  }