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

// pseudo 인스턴스 값 import
import controlRoot1 from "./elementValues/[00]elements-root1.js"
import introTextArr from "./elementValues/[01]elements-root2.js"
import {pageITextArr,pageILeafArr} from "./elementValues/[02]elements-I.js"
import{mainBubbleArr,mainBubbleTextArr,mottoBubbleArr,projectsBubbleArr,prosAndConsBubbleArr,interestsBubbleArr} from "./elementValues/[03]elements-My.js" 
import {meMainTextArr,fish1Arr,fish2Arr} from "./elementValues/[04]elements-Me.js"
import myself1TextArr from "./elementValues/[05]elements-Myself1.js"
import {myself2TextArr,bottomArr} from './elementValues/[06]elements-Myself2.js';




import pageIntroFunc from "./pageValues/[01]page-Intro.js"
import pageIFunc from "./pageValues/[02]page-I.js"
import pageMyFunc from "./pageValues/[03]page-My.js"
import pageMeFunc from "./pageValues/[04]page-Me.js"
import pageMyself1Func from "./pageValues/[05]page-Myself.js"
import pageMyself2Func from "./pageValues/[06]page-Myself2.js"


// pseudo 만들고 있는 인스턴스 값
//  --> 페이지 Me meMainText 값 배열




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
    fish1.addEventListener("click",()=>{changeArr(meMainTextArrTemp, jsonObj.need,meMainText)})
    fish2.addEventListener("click",()=>{changeArr(meMainTextArrTemp, jsonObj.happy,meMainText)})
    
    
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
          pageMyFunc("normal")


        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          currentPage.splice(2, 2, false, true)
          console.log("My에서 Me로 이동합니다")

          pageMeFunc("normal")
          
          
          
          
          

        } else if (event.wheelDelta < 0 && currentPage[3] === true) {
          currentPage.splice(3, 2, false, true)
          console.log("Me에서 Myself1로 이동합니다")
          pageMyself1Func("normal")

    


        } else if (event.wheelDelta < 0 && currentPage[4] === true) {
          currentPage.splice(4, 2, false, true)
          console.log("Myself1에서 Myself2로 이동합니다")
          pageMyself2Func("normal")


        } else if (event.wheelDelta < 0 && currentPage[5] === true) {
          console.log("움직이지 않습니다")





        } else if (event.wheelDelta > 0 && currentPage[5] === true) {
          console.log("Myself2에서 Myself1로 이동합니다")
          currentPage.splice(4, 2, true, false)
          pageMyself2Func("reverse")



        } else if (event.wheelDelta > 0 && currentPage[4] === true) {
          console.log("Myself1에서 Me로 이동합니다")
          currentPage.splice(3, 2, true, false)
          pageMyself1Func("reverse")

        } else if (event.wheelDelta > 0 && currentPage[3] === true) {
          console.log("Me에서 My로 이동합니다")
          currentPage.splice(2, 2, true, false)
          pageMeFunc("reverse")

        } else if (event.wheelDelta > 0 && currentPage[2] === true) {
          console.log("My에서 I로 이동합니다")
          currentPage.splice(1, 2, true, false)
          pageMyFunc("reverse")

          
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