import CreateDivValues from "../functions/createDivValues.js"
import percentCalculator from "../functions/createPercentValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"


// --> 페이지 I text 값 배열
const pageITextArr = [
  new CreateDivValues("266px", "100px", "absolute", percentCalculator.left(100), percentCalculator.top(40), `${percentCalculator.top(1)}px`, "black", "none", "pageIText"),
  new CreateMovingValues(100, 50, 30, 30, 1, 1),
  new CreateMovingValues(50, 30, 30, 30, 1, 2),
  new CreateMovingValues(30, 170, 30, 30, 2, 4)
]

// --> 페이지 I leaf 값 배열
const pageILeafArr = [
  new CreateDivValues("300px", "300px", "absolute", percentCalculator.left(100), percentCalculator.top(30), "0px", "black", "img/leaf220706.svg", "pageILeaf"),
  new CreateMovingValues(100, 50, 20, 20, 1, 1),
  new CreateMovingValues(50, 30, 20, 20, 1, 2),
  new CreateMovingValues(30, 170, 20, 20, 2, 4)
]

export {pageITextArr,pageILeafArr}