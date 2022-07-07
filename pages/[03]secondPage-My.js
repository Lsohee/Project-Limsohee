import CreateDivValues from "../functions/createDivValues.js"
import percentCalculator from "../functions/createPercentValues.js"
import CreateMovingValues from "../functions/createMovingValues.js"

// --> 페이지 My main bubble 값 배열
const mainBubbleArr = [
  new CreateDivValues("300px", "300px", "absolute", percentCalculator.left(20), percentCalculator.top(20), "0px", "black", "img/mainBubble220706.svg", "mainBubble", 0),
  new CreateMovingValues(55, 50, 20, 20, 0.3, 0.4, 0, 0.5),
  new CreateMovingValues(50, 55, 20, 30, 0.4, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(55, 120, 30, 30, 2, 5, 1, 0.2), // pseudo page Me (사라짐)
  new CreateMovingValues(120, 160, 30, 30, 5, 5.5, 0.2, 0)
]


// --> 페이지 My motto bubble 값 배열
const mottoBubbleArr = [
  new CreateDivValues("50px", "50px", "absolute", percentCalculator.left(20), percentCalculator.top(20), "0px", "black", "img/motto220706.svg", "mottoBubble", 0),
  new CreateMovingValues(45, 40, 20, 25, 1, 1, 0, 0.5),
  new CreateMovingValues(40, 30, 25, 20, 1, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(30, -10, 20, -20, 2, 5, 1, 0.3),
  new CreateMovingValues(-10, -40, -30, 30, 5, 5.5, 0.2, 0)
]


// --> 페이지 My prosAndCons bubble 값 배열
const prosAndConsBubbleArr = [
  new CreateDivValues("60px", "50px", "absolute", percentCalculator.left(20), percentCalculator.top(40), "0px", "black", "img/prosAndCons220706.svg", "prosAndConsBubble", 0),
  new CreateMovingValues(45, 40, 40, 50, 1, 1, 0, 0.5),
  new CreateMovingValues(40, 45, 50, 70, 1, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(45, -10, 70, 100, 2, 5, 1, 0.3),
  new CreateMovingValues(-10, -40, 100, 30, 5, 5.5, 0.2, 0)
]


// --> 페이지 My projects bubble 값 배열
const projectsBubbleArr = [
  new CreateDivValues("80px", "80px", "absolute", percentCalculator.left(20), percentCalculator.top(40), "0px", "black", "img/projects220706.svg", "projectsBubble", 0),
  new CreateMovingValues(40, 35, 30, 40, 1, 1, 0, 0.5),
  new CreateMovingValues(35, 23, 40, 37, 1, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(23, -30, 37, 40, 2, 5, 1, 0.3),
  new CreateMovingValues(-30, -40, 100, 30, 5, 5.5, 0.2, 0)
]



// --> 페이지 My interests bubble 값 배열
const interestsBubbleArr = [
  new CreateDivValues("80px", "90px", "absolute", percentCalculator.left(20), percentCalculator.top(40), "0px", "black", "img/interests220706.svg", "interestsBubble", 0),
  new CreateMovingValues(50, 45, 30, 40, 1, 1, 0, 0.5),
  new CreateMovingValues(45, 35, 40, 45, 1, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(35, 30, 45, -100, 2, 5, 1, 0.3),
  new CreateMovingValues(-100, -40, 35, 30, 5, 5.5, 0.2, 0)
]






// --> 페이지 My mainBubbleText 값 배열
const mainBubbleTextArr = [
  new CreateDivValues("300px", "fit-contant", "absolute", percentCalculator.left(20), percentCalculator.top(20), "10px", "black", "none", "mainBubbleText", 0),
  new CreateMovingValues(55, 50, 30, 30, 0.3, 0.4, 0, 0.5), // pseudo page I(나타남)
  new CreateMovingValues(50, 55, 30, 30, 1, 2, 0.5, 1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(55, 120, 30, 30, 2, 5, 1, 0.2), // pseudo page Me (사라짐)
  new CreateMovingValues(120, 140, 30, 30, 5, 5.5, 0.2, 0)
]


export {mainBubbleArr,mainBubbleTextArr,mottoBubbleArr,projectsBubbleArr,prosAndConsBubbleArr,interestsBubbleArr}