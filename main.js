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
function zoom(element,direction,movementValues,resolve=()=>{console.log("movement is over")}){
  let make = element.animate([
    //여기의 left는 화면 비율
    {left:`${movementValues.startLeft}%`,top:`${movementValues.startTop}%`,transform :`scale(${movementValues.startScale})`},
    {left:`${movementValues.finishLeft}%`,top:`${movementValues.finishTop}%`,transform :`scale(${movementValues.finishScale})`}
  ],{
    duration: 2300,
    fill:'forwards',
    direction:direction
  })
  make.finished.then(()=>{ //pseudo 애니메이션 동기처리를 위해 promise를 반환하는 finish 프로퍼티 안 함수를 매개변수로 추가
    resolve()
  })
} 







// pseudo file import
import {
  createDiv,
  attributeNode
} from "/createElement/createDiv.js"
import CreateDivValues from "./createElement/createDivValues.js"
import controlRoot1 from "./pages/[00]catchphrasePage-root1.js" 
import CreateMovingValues from "./createElement/createMovingValues.js"





// pseudo 인스턴스 선언

// --> intro text 값 배열
const introTextArr = [
  new CreateDivValues("fit-contant", "fit-contant", "absolute", percentCalculator.left(0), percentCalculator.top(100), "black", "none", "introText"),
  new CreateMovingValues(10,10,100,30,1,1)
]

// --> 페이지 I text 값 배열
const pageIText = [
  new CreateDivValues("350px", "100px", "absolute", percentCalculator.left(100), percentCalculator.top(40), "black", "none", "pageIText")
]

// --> 페이지 I leaf 값 배열
const pageILeaf = [
  new CreateDivValues("300px","300px","absolute",percentCalculator.left(20),percentCalculator.top(20),"black","none","leaf")
]











// pseudo JSON파일 통신 , load 됐을 때 작동하는 이벤트 함수 
window.onload = function () {
  let req = new XMLHttpRequest();
  let jsonObj


  // pseudo req가 load됐을 때 이벤트 함수
  req.addEventListener("load", function () {
    jsonObj = JSON.parse(req.responseText);
    console.log(jsonObj.intro)

    console.log(root2)
    console.log(introTextArr)




    root2.innerHTML = `
    ${createDiv(jsonObj.intro,attributeNode(introTextArr[0]))}
    ${createDiv(jsonObj.textI,attributeNode(pageIText[0]))}
    ${createDiv("leaf",attributeNode(pageILeaf[0]))}
    `







    
    
    let currentPage = [true, false, false, false, false, false]
    
    function zoomSwitch() {
      // pseudo element getting
      const introText = document.getElementById("introText")













      root2.addEventListener("wheel", (event) => {

        
        if (event.wheelDelta > 0 && currentPage[0] === true) {
          console.log("움직이지 않습니다")
          
          console.log(introText)


        } else if (event.wheelDelta < 0 && currentPage[0] === true) {
          console.log("zero에서 I로 이동합니다")
          currentPage.splice(0, 2, false, true)




        } else if (event.wheelDelta < 0 && currentPage[1] === true) {
          console.log("I에서 My로 이동합니다")
          currentPage.splice(1, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          console.log("My에서 Me로 이동합니다")
          currentPage.splice(2, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[3] === true) {
          console.log("Me에서 Myself로 이동합니다")
          currentPage.splice(3, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[4] === true) {
          console.log("최종입니다")
          currentPage.splice(4, 2, false, true)





        } else if (event.wheelDelta < 0 && currentPage[5] === true) {
          console.log("움직이지 않습니다")





        } else if (event.wheelDelta > 0 && currentPage[5] === true) {
          console.log("Myself2에서 Me로 이동합니다")
          currentPage.splice(4, 2, true, false)





        } else if (event.wheelDelta > 0 && currentPage[4] === true) {
          console.log("Myself1에서 Me로 이동합니다")
          currentPage.splice(3, 2, true, false)





        } else if (event.wheelDelta > 0 && currentPage[3] === true) {
          console.log("Me에서 My로 이동합니다")
          currentPage.splice(2, 2, true, false)




        } else if (event.wheelDelta > 0 && currentPage[2] === true) {
          console.log("My에서 I로 이동합니다")
          currentPage.splice(1, 2, true, false)




        } else if (event.wheelDelta > 0 && currentPage[1] === true) {
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
        zoom(introText,"normal",introTextArr[1])
        zoomSwitch()
      }
    })

  }, false);
  req.open("GET", "textContents.JSON", true);
  req.send(null);
}