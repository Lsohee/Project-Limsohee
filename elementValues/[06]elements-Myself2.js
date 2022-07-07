import CreateDivValues from "../functions/createDivValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"
import percentCalculator from "../functions/createPercentValues.js"

const myself2TextArr = [
  new CreateDivValues("200px", "fit-contant", "absolute", percentCalculator.left(30), percentCalculator.top(20), "10px", "black", "none", "myself2Text", 0),
  new CreateMovingValues(45, 50, 45, 50, 0.3, 0.6, 0, 0.3), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(50, 65, 50, 60, 0.6, 1, 0.3, 1), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(65, 30, 60, 30, 1, 2) // pseudo page Meyself2 (나타남)
]

const bottomArr = [
  new CreateDivValues("1900px", "fit-contant", "absolute", percentCalculator.left(0), percentCalculator.top(0), "10px", "black", "img/대지 1 1.svg", "bottom", 0),
  new CreateMovingValues(0, 0, 0, 0, 1, 1.1, 0, 0.2), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(0, 0, 0, 3, 1, 1.2, 0.2, 1), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(0, -40, 3, -35, 1.2, 2) // pseudo page Meyself2 (나타남)
]

export {myself2TextArr,bottomArr}