// pseudo root2 getting
const root2 = document.getElementById("root2")

//pseudo 배열을 바꿔주는 함수
function changeArr(arrName, element,text) {
  arrName.pop()
  arrName.push(element)
  let temp = `${arrName[0]}`
  return text.innerHTML = temp
}

// pseudo file import
import {
  createDiv,
  attributeNode
} from "./functions/createDiv.js"
import {
  createImg,
  attributeNodeImg
} from "./functions/createImg.js"
import CreateDivValues from "./functions/createDivValues.js"
import CreateMovingValues from "./functions/createMovingValues.js"
import percentCalculator from "./functions/createPercentValues.js"
import zoom from "./functions/createMovement.js"

// pseudo 인스턴스 값 import
import controlRoot1 from "./elementValues/[00]elements-root1.js"
import introTextArr from "./elementValues/[01]elements-root2.js"
import {
  pageITextArr,
  pageILeafArr
} from "./elementValues/[02]elements-I.js"
import {
  mainBubbleArr,
  mainBubbleTextArr,
  mottoBubbleArr,
  projectsBubbleArr,
  prosAndConsBubbleArr,
  interestsBubbleArr
} from "./elementValues/[03]elements-My.js"


import pageIntroFunc from "./pageValues/[01]page-Intro.js"
import pageIFunc from "./pageValues/[02]page-I.js"


// pseudo 만들고 있는 인스턴스 값
//  --> 페이지 Me meMainText 값 배열
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



const myself1TextArr = [
  new CreateDivValues("200px", "fit-contant", "absolute", percentCalculator.left(30), percentCalculator.top(20), "10px", "black", "none", "myself1Text", 0),
  new CreateMovingValues(30, 30, 30, 30, 0.5, 0.6, 0, 0.2), // pseudo page Me (나타남)
  new CreateMovingValues(30, 25, 30, 30, 0.6, 1.5, 0.2, 2), // pseudo page Meyself1 (주 컨텐츠)
  new CreateMovingValues(25, -40, 30, 5, 1.5, 3, 2, 0.4)
]

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


// pseudo JSON파일 통신 , load 됐을 때 작동하는 이벤트 함수 
window.onload = function () {
  let req = new XMLHttpRequest();
  let jsonObj

  // pseudo req가 load됐을 때 이벤트 함수
  req.addEventListener("load", function () {
    jsonObj = JSON.parse(req.responseText);

    //pseudo 내용을 담을 배열 그릇
    const myMainTextArr = [jsonObj.projects]
    const meMainTextArrTemp = [jsonObj.happy]

    // pseudo 클릭했을 때 배열을 변형하면 되지 않을까?
    // --> 그러면 원형을 건들여야되나?
    
    root2.innerHTML = `
    ${createDiv(jsonObj.intro,attributeNode(introTextArr[0]))}
    ${createImg("",attributeNodeImg(bottomArr[0]))}
    ${createDiv(jsonObj.textMyself2, attributeNode(myself2TextArr[0]))}
    ${createDiv(jsonObj.textMyself1,attributeNode(myself1TextArr[0]))}

    
    ${createImg("",attributeNodeImg(fish1Arr[0]))}
    ${createImg("",attributeNodeImg(fish2Arr[0]))}
    ${createDiv(meMainTextArrTemp[0],attributeNode(meMainTextArr[0]))}
    
    
    ${createImg("",attributeNodeImg(interestsBubbleArr[0]))}
    ${createImg("",attributeNodeImg(projectsBubbleArr[0]))}
    ${createImg("",attributeNodeImg(mainBubbleArr[0]))}
    ${createImg("",attributeNodeImg(prosAndConsBubbleArr[0]))}
    ${createImg("",attributeNodeImg(mottoBubbleArr[0]))}
    ${createDiv(myMainTextArr[0],attributeNode(mainBubbleTextArr[0]))}
    
    ${createImg("",attributeNodeImg(pageILeafArr[0]))}
    ${createDiv(jsonObj.textI,attributeNode(pageITextArr[0]))}
    `
    // pseudo element getting (여기도 객체로 묶어서 정리할까?)
    const introText = document.getElementById("introText")
    const pageIText = document.getElementById("pageIText")
    const pageILeaf = document.getElementById("pageILeaf")

    const mainBubble = document.getElementById("mainBubble")
    const mainBubbleText = document.getElementById("mainBubbleText")
    const mottoBubble = document.getElementById("mottoBubble")
    const prosAndConsBubble = document.getElementById("prosAndConsBubble")
    const projectsBubble = document.getElementById("projectsBubble")
    const interestsBubble = document.getElementById("interestsBubble")


    const meMainText = document.getElementById("meMainText")
    const fish1 = document.getElementById("fish1")
    const fish2 = document.getElementById("fish2")
    
    const bottom = document.getElementById("bottom")
    const myself1Text = document.getElementById("myself1Text")
    const myself2Text = document.getElementById("myself2Text")


    // pseudo bubbles click event
    projectsBubble.addEventListener("click",()=>{changeArr(myMainTextArr, jsonObj.projects,mainBubbleText)})
    mottoBubble.addEventListener("click",()=>{changeArr(myMainTextArr, jsonObj.motto,mainBubbleText)})
    prosAndConsBubble.addEventListener("click",()=>{changeArr(myMainTextArr, jsonObj.prosAndCons,mainBubbleText)})
    interestsBubble.addEventListener("click",()=>{changeArr(myMainTextArr, jsonObj.interests,mainBubbleText)})


    // pseudo fishes click event
    fish1.addEventListener("click",()=>{changeArr(meMainTextArrTemp, jsonObj.happy,meMainText)})
    fish2.addEventListener("click",()=>{changeArr(meMainTextArrTemp, jsonObj.need,meMainText)})
    
    
    let currentPage = [true, false, false, false, false, false]

    function zoomSwitch() {

      root2.addEventListener("wheel", (event) => {
        if (event.wheelDelta > 0 && currentPage[0] === true) {
          console.log("움직이지 않습니다")

        } else if (event.wheelDelta < 0 && currentPage[0] === true) {
          currentPage.splice(0, 2, false, true)
          console.log("zero에서 I로 이동합니다")
          pageIFunc("normal")
 
        } else if (event.wheelDelta < 0 && currentPage[1] === true) {
          currentPage.splice(1, 2, false, true)
          console.log("I에서 My로 이동합니다")

          // --> page I elements
          zoom(pageIText, "normal", pageITextArr[3])
          zoom(introText, "normal", introTextArr[3])
          zoom(pageILeaf, "normal", pageILeafArr[3])



          // --> page My elements 
          zoom(mainBubbleText, "normal", mainBubbleTextArr[2])
          zoom(mainBubble, "normal", mainBubbleArr[2])
          zoom(mottoBubble, "normal", mottoBubbleArr[2])
          zoom(prosAndConsBubble, "normal", prosAndConsBubbleArr[2])
          zoom(projectsBubble, "normal", projectsBubbleArr[2])
          zoom(interestsBubble, "normal", interestsBubbleArr[2])


          // --> page Me elements
          zoom(meMainText, "normal", meMainTextArr[1])
          zoom(fish1,"normal",fish1Arr[1])
          zoom(fish2,"normal",fish2Arr[1])


        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          currentPage.splice(2, 2, false, true)
          console.log("My에서 Me로 이동합니다")

          // --> page My elements 
          zoom(mainBubbleText, "normal", mainBubbleTextArr[3])
          zoom(mainBubble, "normal", mainBubbleArr[3])
          zoom(mottoBubble, "normal", mottoBubbleArr[3])
          zoom(prosAndConsBubble, "normal", prosAndConsBubbleArr[3])
          zoom(projectsBubble, "normal", projectsBubbleArr[3])
          zoom(interestsBubble, "normal", interestsBubbleArr[3])




          // --> page Me elements
          zoom(meMainText, "normal", meMainTextArr[2])
          zoom(fish1,"normal",fish1Arr[2])
          zoom(fish2,"normal",fish2Arr[2])


          // --> page Myself elements
          zoom(myself1Text, "normal", myself1TextArr[1])
          zoom(bottom, "normal", bottomArr[1])
          zoom(myself2Text, "normal", myself2TextArr[1])


        } else if (event.wheelDelta < 0 && currentPage[3] === true) {
          currentPage.splice(3, 2, false, true)
          console.log("Me에서 Myself1로 이동합니다")


          // --> page My elements 
          zoom(mainBubbleText, "normal", mainBubbleTextArr[4])
          zoom(mainBubble, "normal", mainBubbleArr[4])
          zoom(mottoBubble, "normal", mottoBubbleArr[4])




          zoom(meMainText, "normal", meMainTextArr[3])
          zoom(fish1,"normal",fish1Arr[3])
          zoom(fish2,"normal",fish2Arr[3])
          
          
          
          zoom(bottom, "normal", bottomArr[2])
          zoom(myself1Text, "normal", myself1TextArr[2])
          zoom(myself2Text, "normal", myself2TextArr[2])







        } else if (event.wheelDelta < 0 && currentPage[4] === true) {
          currentPage.splice(4, 2, false, true)
          console.log("Myself1에서 Myself2로 이동합니다")


          zoom(meMainText, "normal", meMainTextArr[4])
          zoom(fish1,"normal",fish1Arr[4])

          zoom(myself1Text, "normal", myself1TextArr[3])
          zoom(myself2Text, "normal", myself2TextArr[3])
          zoom(bottom, "normal", bottomArr[3])





        } else if (event.wheelDelta < 0 && currentPage[5] === true) {
          console.log("움직이지 않습니다")





        } else if (event.wheelDelta > 0 && currentPage[5] === true) {
          console.log("Myself2에서 Myself1로 이동합니다")
          currentPage.splice(4, 2, true, false)
          zoom(myself1Text, "reverse", myself1TextArr[3])
          zoom(meMainText, "reverse", meMainTextArr[4])
          zoom(myself2Text, "reverse", myself2TextArr[3])




        } else if (event.wheelDelta > 0 && currentPage[4] === true) {
          console.log("Myself1에서 Me로 이동합니다")
          currentPage.splice(3, 2, true, false)



          // --> page My elements 
          zoom(mainBubbleText, "reverse", mainBubbleTextArr[4])
          zoom(mainBubble, "reverse", mainBubbleArr[4])
          zoom(mottoBubble, "reverse", mottoBubbleArr[4])


          zoom(meMainText, "reverse", meMainTextArr[3])
          zoom(myself1Text, "reverse", myself1TextArr[2])
          zoom(myself2Text, "reverse", myself2TextArr[2])



        } else if (event.wheelDelta > 0 && currentPage[3] === true) {
          console.log("Me에서 My로 이동합니다")
          currentPage.splice(2, 2, true, false)
          // --> page My elements 
          zoom(mainBubbleText, "reverse", mainBubbleTextArr[3])
          zoom(mainBubble, "reverse", mainBubbleArr[3])
          zoom(mottoBubble, "reverse", mottoBubbleArr[3])
          zoom(prosAndConsBubble, "reverse", prosAndConsBubbleArr[3])
          zoom(projectsBubble, "reverse", projectsBubbleArr[3])
          zoom(interestsBubble, "reverse", interestsBubbleArr[3])



          zoom(meMainText, "reverse", meMainTextArr[2])
          zoom(myself1Text, "reverse", myself1TextArr[1])
          zoom(myself2Text, "reverse", myself2TextArr[1])




        } else if (event.wheelDelta > 0 && currentPage[2] === true) {
          console.log("My에서 I로 이동합니다")
          currentPage.splice(1, 2, true, false)
          // --> page I elements
          zoom(pageIText, "reverse", pageITextArr[3])
          zoom(introText, "reverse", introTextArr[3])
          zoom(pageILeaf, "reverse", pageILeafArr[3])



          // --> page My elements 
          zoom(mainBubbleText, "reverse", mainBubbleTextArr[2])
          zoom(mainBubble, "reverse", mainBubbleArr[2])
          zoom(mottoBubble, "reverse", mottoBubbleArr[2])
          zoom(prosAndConsBubble, "reverse", prosAndConsBubbleArr[2])
          zoom(projectsBubble, "reverse", projectsBubbleArr[2])
          zoom(interestsBubble, "reverse", interestsBubbleArr[2])

          // --> page Me elements
          zoom(meMainText, "reverse", meMainTextArr[1])






        } else if (event.wheelDelta > 0 && currentPage[1] === true) {
          pageIFunc("reverse")
        
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
        // --> root1.remove()로 바꾸지 않는 이유
        // memo controlRoot1이 계속 작동하면 root1을 이미 없앴기 때문에 root1이 안 잡힌다고 error가 뜬다
        // memo 그런데 이 error를 없애면 밑의 intro페이지를 움직이는 함수들이 계속 작동해서 스크롤 할때마다 계속 intro요소들이 등장하게된다
        // memo 그래서 여기 error는 내비둘거다
        // pseudo 연잎과 인트로 등장
        zoomSwitch()
        pageIntroFunc("normal")
      }
    })

  }, false);
  req.open("GET", "textContents.JSON", true);
  req.send(null);
}