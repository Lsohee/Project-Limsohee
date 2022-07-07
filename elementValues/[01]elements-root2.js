import CreateDivValues from "../functions/createDivValues.js"
import percentCalculator from "../functions/createPercentValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"

// --> 페이지 intro text 값 배열
const introTextArr = [
  new CreateDivValues("fit-contant", "fit-contant", "absolute", percentCalculator.left(0), percentCalculator.top(100), "18px", "black", "none", "introText"),
  new CreateMovingValues(10, 10, 100, 25, 1, 1),
  new CreateMovingValues(10, -50, 25, 15, 1, 2),
  new CreateMovingValues(-50, -100, 15, 40, 2, 4)
]



export default introTextArr