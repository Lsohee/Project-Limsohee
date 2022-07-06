// pseudo root2 getting
const root2 = document.getElementById("root2")


// pseudo 현재 브라우저 크기를 인식 --> 원하는 비율의 px값을 뱉어내는 함수
const percentCalculator = {
  left(leftValuePercent) {
    let leftValue = window.innerWidth * leftValuePercent / 100
    return leftValue
  },
  top(topValuePercent) {
    let topValue = window.innerHeight * topValuePercent / 100
    return topValue
  }
}





// pseudo 움직임 주는 함수
function zoom(element, direction, movementValues, resolve = () => {
  console.log(`${element.id}'s movement is over`)
}) {
  let make = element.animate([
    //여기의 left는 화면 비율
    {
      left: `${movementValues.startLeft}%`,
      top: `${movementValues.startTop}%`,
      opacity : `${movementValues.startOpacity}`,
      transform: `scale(${movementValues.startScale} )`
    },
    {
      left: `${movementValues.finishLeft}%`,
      top: `${movementValues.finishTop}%`,
      opacity : `${movementValues.finishOpacity}`,
      transform: `scale(${movementValues.finishScale})`
    }
  ], {
    duration: 2000,
    fill: 'forwards',
    direction: direction
  })
  make.finished.then(() => { //pseudo 애니메이션 동기처리를 위해 promise를 반환하는 finish 프로퍼티 안 함수를 매개변수로 추가
    resolve()
  })
}







// pseudo file import
import {createDiv,attributeNode} from "/createElement/createDiv.js"
import {createImg ,attributeNodeImg} from "./createElement/createImg.js"
import CreateDivValues from "./createElement/createDivValues.js"
import controlRoot1 from "./pages/[00]catchphrasePage-root1.js"
import CreateMovingValues from "./createElement/createMovingValues.js"






// pseudo 인스턴스 선언

// --> 페이지 intro text 값 배열
const introTextArr = [
  new CreateDivValues("fit-contant", "fit-contant", "absolute", percentCalculator.left(0), percentCalculator.top(100), "18px", "black", "none", "introText"),
  new CreateMovingValues(10, 10, 100, 25, 1, 1),
  new CreateMovingValues(10, -50, 25, 15, 1, 2),
  new CreateMovingValues(-50, -100, 15, 40, 2, 4)
]

// --> 페이지 I text 값 배열
const pageITextArr = [
  new CreateDivValues("266px", "100px", "absolute", percentCalculator.left(100), percentCalculator.top(40), `${percentCalculator.top(1)}px`, "black", "none", "pageIText"), 
  new CreateMovingValues(100, 50, 30, 30, 1, 1),
  new CreateMovingValues(50, 30, 30, 30, 1, 2),
  new CreateMovingValues(30, 170, 30, 30, 2, 4)
]

// --> 페이지 I leaf 값 배열
const pageILeafArr = [
  new CreateDivValues("300px","300px","absolute",percentCalculator.left(100),percentCalculator.top(30),"0px","black","img/leaf220706.svg","pageILeaf"),
  new CreateMovingValues(100,50,20,20,1,1),
  new CreateMovingValues(50,30,20,20,1,2),
  new CreateMovingValues(30, 170, 20, 20, 2, 4)
]



// --> 페이지 My main bubble 값 배열
const mainBubbleArr = [
  new CreateDivValues("300px","300px","absolute",percentCalculator.left(20),percentCalculator.top(20),"0px","black","img/mainBubble220706.svg","mainBubble",0),
  new CreateMovingValues(55,50,20,20,1,1,0,0.5),
  new CreateMovingValues(50,55,20,30,1,2,0.5,1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(55,120,30,30,2,5,1,0.2), // pseudo page Me (사라짐)
  new CreateMovingValues(120,160,30,30,5,5.5,0.2,0)
]




const mottoBubbleArr = [
  new CreateDivValues("50px","50px","absolute",percentCalculator.left(20),percentCalculator.top(20),"0px","black","img/motto220706.svg","mottoBubble",0),
  new CreateMovingValues(45,40,20,25,1,1,0,0.5),
  new CreateMovingValues(40,30,25,25,1,2,0.5,1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(30,3,25,20,2,5,1,0.3), 
  new CreateMovingValues(3,-40,30,30,5,5.5,0.2,0)
]









// --> 페이지 My mainBubbleText 값 배열
const mainBubbleTextArr = [
  new CreateDivValues("300px","fit-contant","absolute",percentCalculator.left(20),percentCalculator.top(20),"10px","black","none","mainBubbleText",0),
  new CreateMovingValues(55,50,30,30,1,1,0,0.5), // pseudo page I(나타남)
  new CreateMovingValues(50,55,30,30,1,2,0.5,1), // pseudo page My (주 컨텐츠)
  new CreateMovingValues(55,120,30,30,2,5,1,0.2), // pseudo page Me (사라짐)
  new CreateMovingValues(120,140,30,30,5,5.5,0.2,0)
]


//  --> 페이지 Me makeMeHappyText 값 배열
const makeMeHappyTextArr = [
  new CreateDivValues("300px","fit-contant","absolute",percentCalculator.left(20),percentCalculator.top(20),"10px","black","none","makeMeHappyText",0),
  new CreateMovingValues(30,30,30,30,0.5,1,0,0.3), // pseudo page My (나타남)
  new CreateMovingValues(30,45,30,30,1,2,0.3,1), // pseudo page Me (주 컨텐츠)
  new CreateMovingValues(45,-25,30,35,2,5,1,0.4),
  new CreateMovingValues(-25,-80,35,35,5,5.5,0.4,0)
]

const myself1TextArr = [
  new CreateDivValues("200px","fit-contant","absolute",percentCalculator.left(30),percentCalculator.top(20),"10px","black","none","myself1Text",0),
  new CreateMovingValues(30,30,30,30,0.5,1,0,0.3), // pseudo page Me (나타남)
  new CreateMovingValues(30,40,30,30,1,2,0.3,1), // pseudo page Meyself1 (주 컨텐츠)
  new CreateMovingValues(40,-10,30,5,2,4,1,0.4)
]

const myself2TextArr = [
  new CreateDivValues("200px","fit-contant","absolute",percentCalculator.left(30),percentCalculator.top(20),"10px","black","none","myself2Text",0),
  new CreateMovingValues(45,50,45,50,0.3,1,0,0.3), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(50,65,50,60,1,1.5,0.3,1), // pseudo page Meyself1 (나타남)
  new CreateMovingValues(65,45,60,45,1.5,2) // pseudo page Meyself2 (나타남)
]

// pseudo JSON파일 통신 , load 됐을 때 작동하는 이벤트 함수 
window.onload = function () {
  let req = new XMLHttpRequest();
  let jsonObj


  // pseudo req가 load됐을 때 이벤트 함수
  req.addEventListener("load", function () {
    jsonObj = JSON.parse(req.responseText);

    
const myMainTextArr = [
  jsonObj.motto
]


    root2.innerHTML = `
    ${createDiv(jsonObj.intro,attributeNode(introTextArr[0]))}
    ${createDiv(jsonObj.happy,attributeNode(makeMeHappyTextArr[0]))}
    ${createDiv(jsonObj.textMyself1,attributeNode(myself1TextArr[0]))}
    ${createDiv(jsonObj.textMyself2, attributeNode(myself2TextArr[0]))}
    ${createImg("",attributeNodeImg(mainBubbleArr[0]))}
    ${createImg("",attributeNodeImg(mottoBubbleArr[0]))}
    ${createDiv(myMainTextArr[0],attributeNode(mainBubbleTextArr[0]))}
    ${createImg("",attributeNodeImg(pageILeafArr[0]))}
    ${createDiv(jsonObj.textI,attributeNode(pageITextArr[0]))}
    `









    let currentPage = [true, false, false, false, false, false]

    function zoomSwitch() {
      // pseudo element getting
      const introText = document.getElementById("introText")
      const pageIText = document.getElementById("pageIText")
      const pageILeaf = document.getElementById("pageILeaf")

      const mainBubble = document.getElementById("mainBubble")
      const mainBubbleText = document.getElementById("mainBubbleText")
      const mottoBubble = document.getElementById("mottoBubble")

      const makeMeHappyText = document.getElementById("makeMeHappyText")
      const myself1Text = document.getElementById("myself1Text")
      const myself2Text = document.getElementById("myself2Text")
      
      
      
      
      
      
      
      
      
      
      
      root2.addEventListener("wheel", (event) => {
        
        
        if (event.wheelDelta > 0 && currentPage[0] === true) {
          console.log("움직이지 않습니다")



        } else if (event.wheelDelta < 0 && currentPage[0] === true) {
          console.log("zero에서 I로 이동합니다")
          zoom(introText, "normal", introTextArr[2])
          zoom(pageIText, "normal", pageITextArr[2])
          zoom(pageILeaf,"normal",pageILeafArr[2])


          zoom(mainBubbleText,"normal",mainBubbleTextArr[1])
          zoom(mainBubble,"normal",mainBubbleArr[1])
          zoom(mottoBubble,"normal",mottoBubbleArr[1])
          
          
          
          
          currentPage.splice(0, 2, false, true)

        } else if (event.wheelDelta < 0 && currentPage[1] === true) {

          
          // --> page I elements
          zoom(pageIText, "normal", pageITextArr[3])
          zoom(introText, "normal", introTextArr[3])
          zoom(pageILeaf,"normal",pageILeafArr[3])

          
          
          // --> page My elements 
          zoom(mainBubbleText,"normal",mainBubbleTextArr[2])
          zoom(mainBubble,"normal",mainBubbleArr[2])
          zoom(mottoBubble,"normal",mottoBubbleArr[2])

          
          // --> page Me elements
          zoom(makeMeHappyText,"normal",makeMeHappyTextArr[1])




          console.log("I에서 My로 이동합니다")
          currentPage.splice(1, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          console.log("My에서 Me로 이동합니다")
          currentPage.splice(2, 2, false, true)
          
          // --> page My elements 
          zoom(mainBubbleText,"normal",mainBubbleTextArr[3])
          zoom(mainBubble,"normal",mainBubbleArr[3])
          zoom(mottoBubble,"normal",mottoBubbleArr[3])



          
          // --> page Me elements
          zoom(makeMeHappyText,"normal",makeMeHappyTextArr[2])


          // --> page Myself elements
          zoom(myself1Text,"normal",myself1TextArr[1])
          zoom(myself2Text,"normal",myself2TextArr[1])


        } else if (event.wheelDelta < 0 && currentPage[3] === true) {

          
          
          // --> page My elements 
          zoom(mainBubbleText,"normal",mainBubbleTextArr[4])
          zoom(mainBubble,"normal",mainBubbleArr[4])
          zoom(mottoBubble,"normal",mottoBubbleArr[4])
          
          
          
          
          zoom(makeMeHappyText,"normal",makeMeHappyTextArr[3])
          zoom(myself1Text,"normal",myself1TextArr[2])
          zoom(myself2Text,"normal",myself2TextArr[2])
          
          console.log("Me에서 Myself1로 이동합니다")
          currentPage.splice(3, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[4] === true) {
          zoom(myself1Text,"normal",myself1TextArr[3])
          zoom(makeMeHappyText,"normal",makeMeHappyTextArr[4])
          zoom(myself2Text,"normal",myself2TextArr[3])
          console.log("Myself1에서 Myself2로 이동합니다")
          currentPage.splice(4, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[5] === true) {
          console.log("움직이지 않습니다")





        } else if (event.wheelDelta > 0 && currentPage[5] === true) {
          console.log("Myself2에서 Myself1로 이동합니다")
          currentPage.splice(4, 2, true, false)
          zoom(myself1Text,"reverse",myself1TextArr[3])
          zoom(makeMeHappyText,"reverse",makeMeHappyTextArr[4])
          zoom(myself2Text,"reverse",myself2TextArr[3])




        } else if (event.wheelDelta > 0 && currentPage[4] === true) {
          console.log("Myself1에서 Me로 이동합니다")
          currentPage.splice(3, 2, true, false)
          zoom(mainBubbleText,"reverse",mainBubbleTextArr[4])
          zoom(makeMeHappyText,"reverse",makeMeHappyTextArr[3])
          zoom(myself1Text,"reverse",myself1TextArr[2])
          zoom(myself2Text,"reverse",myself2TextArr[2])
          
          
          
        } else if (event.wheelDelta > 0 && currentPage[3] === true) {
          console.log("Me에서 My로 이동합니다")
          currentPage.splice(2, 2, true, false)
          zoom(mainBubbleText,"reverse",mainBubbleTextArr[3])
          zoom(makeMeHappyText,"reverse",makeMeHappyTextArr[2])
          zoom(myself1Text,"reverse",myself1TextArr[1])
          zoom(myself2Text,"reverse",myself2TextArr[1])




        } else if (event.wheelDelta > 0 && currentPage[2] === true) {
          console.log("My에서 I로 이동합니다")
          currentPage.splice(1, 2, true, false)
          // --> page I elements
          zoom(pageIText, "reverse", pageITextArr[3])
          zoom(introText, "reverse", introTextArr[3])

          
          
          // --> page My elements 
          zoom(mainBubbleText,"reverse",mainBubbleTextArr[2])

          
          // --> page Me elements
          zoom(makeMeHappyText,"reverse",makeMeHappyTextArr[1])






        } else if (event.wheelDelta > 0 && currentPage[1] === true) {
          zoom(introText, "reverse", introTextArr[2])
          zoom(pageIText, "reverse", pageITextArr[2])
          zoom(mainBubbleText,"reverse",mainBubbleTextArr[1])
          
          console.log("I에서 zero로 이동합니다")
          currentPage.splice(0, 2, true, false)
        }
      })
    }





    // pseudo wheel이 page 끝에 닿았을 때 이벤트 발생
    window.addEventListener("wheel", function () {
      let scrollHeight = this.window.scrollY;
      let windowHeight = this.window.innerHeight;
      let docTotalHeight = this.document.body.offsetHeight;
      if (Math.ceil(scrollHeight + windowHeight) >= docTotalHeight) {

        controlRoot1(false) //pseudo root1 제거

        // pseudo 연잎과 인트로 등장
        zoom(introText, "normal", introTextArr[1])
        zoom(pageIText, "normal", pageITextArr[1])
        zoom(pageILeaf,"normal", pageILeafArr[1])
        zoomSwitch()
      }
    })

  }, false);
  req.open("GET", "textContents.JSON", true);
  req.send(null);
}