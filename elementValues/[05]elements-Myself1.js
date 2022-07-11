import CreateDivValues from "../functions/createDivValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"
import percentCalculator from "../functions/createPercentValues.js"

const myself1TextArr = [
  new CreateDivValues("200px", "fit-contant", "absolute", percentCalculator.left(30), percentCalculator.top(20), "10px", "black", "none", "myself1Text", 0),
  new CreateMovingValues(30, 30, 30, 30, 0.5, 0.6, 0, 0.2), // pseudo page Me (나타남)
  new CreateMovingValues(30, 40, 30, 35, 0.6, 2, 0.2, 2), // pseudo page Meyself1 (주 컨텐츠)
  new CreateMovingValues(40, -40, 35, -10, 2, 3, 2, 0.4)
]

export default myself1TextArr