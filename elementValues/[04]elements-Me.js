import CreateDivValues from "../functions/createDivValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"
import percentCalculator from "../functions/createPercentValues.js"


const meMainTextArr = [
  new CreateDivValues("300px", "fit-contant", "absolute", percentCalculator.left(20), percentCalculator.top(20), "12px", "black", "none", "meMainText", 0),
  new CreateMovingValues(30, 20, 30, 30, 0.5, 1, 0, 0.3), // pseudo page My (나타남)
  new CreateMovingValues(20, 30, 30, 30, 1, 1.5, 0.3, 1), // pseudo page Me (주 컨텐츠)
  new CreateMovingValues(30, -30, 30, 35, 1.5, 5, 1, 0.4),
  new CreateMovingValues(-30, -80, 35, 35, 5, 5.5, 0.4, 0)
]


const fish1Arr = [
  new CreateDivValues("200px", "fit-contant", "absolute", percentCalculator.left(20), percentCalculator.top(20), "10px", "black", "./img/fish1.svg", "fish1", 0),
  new CreateMovingValues(100, 70, 30, 30, 0.5, 1, 0, 0.3), // pseudo page My (나타남)
  new CreateMovingValues(70, 60, 30, 30, 1, 2, 0.3, 1), // pseudo page Me (주 컨텐츠)
  new CreateMovingValues(60, -25, 30, 35, 2, 5, 1, 1),
  new CreateMovingValues(-25, -80, 35, 35, 5, 5.5, 1, 0)
]


const fish2Arr = [
  new CreateDivValues("120px", "fit-contant", "absolute", percentCalculator.left(20), percentCalculator.top(20), "10px", "black", "./img/fish2.svg", "fish2", 0),
  new CreateMovingValues(100, 80, 30, 70, 0.5, 1, 0, 0.3), // pseudo page My (나타남)
  new CreateMovingValues(80, 70, 70, 60, 1, 2, 0.3, 1), // pseudo page Me (주 컨텐츠)
  new CreateMovingValues(70, -25, 60, 35, 2, 5, 1, 1),
  new CreateMovingValues(-25, -80, 35, 35, 5, 5.5, 1, 0)
]

export {meMainTextArr,fish1Arr,fish2Arr}