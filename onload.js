// pseudo html 요소 geting 
const container = document.getElementById("container")
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2")


// pseudo 파일 import
import controlRoot1 from "./pages/root1.js" // pseudo  
import controlRoot2 from "./pages/root2.js"
import watercolor from "./waterColor.js";// pseudo 물느낌을 내는 물색 layerdiv 값 (object)
import {createDiv,attributeNode} from "./createDiv.js" //pseudo div을 생성하는 틀 
import {textIFunc, leafIFunc} from "./pages/pageI.js"// pseudo I 소개 내용의 div을 생성한 값 (object)
import {mainBubbleMyFunc, mottoBubbleMyFunc,prosAndConsBubbleMyFunc, interestsBubbleMyFunc,
  projectsBubbleMyFunc} from "./pages/pageMy.js" //pseudo My 페이지 요소들 제어
import { needFishMefunc,happyFishMeFunc } from "./pages/pageMe.js"
import { textMyself1Func } from "./pages/pageMyself1.js";
import { textMyself2Func, bottomMyself2Func } from "./pages/pageMyself2.js"



// pseudo 브라우저의 크기가 변할때마다 현재 크기를 찍어주는 이벤트 함수
/*
  pseudo 브라우저의 화면 크기가 변화하면 
  memo 이벤트 발생 함수
  
  pseudo 내가 원하는 top과 left 비율을 넣으면 
  memo 매개 변수 (input)

  pseudo 현재 화면의 비율에 맞는 px값을 계산해서
  memo 실행부  
  
  pseudo left와 top의 px 값을 각각 뱉어내는 함수
  memo return 값
*/ 
window.onresize = (leftValuePercent,topValuePercent,currentValue)=>{ // memo 이벤트 발생 함수, 매개 변수(input)

  let leftValue = window.innerWidth*leftValuePercent/100
  let topValue = window.innerHeight*topValuePercent/100 
  // memo 실행부
  
  if(currentValue === "left"){
    return leftValue
  }else if(currentValue ==="top"){
    return topValue
  }
  // memo return 값

  /*
  ? 질문
  pseudo 의도 : 
  브라우저 화면 크기가 바뀔때마다 바뀌는 innerWidth값과 innerHeight값을 이용해서 
  좌표가 위치하기 원하는 화면의 비율을 적으면
  원하는 비율에 해당하는 현재 화면의 px값을 계산해서 뱉어내는 기계를 만들어서 
  그 값들을 div들의 위치로 쓰려함

  pseudo 시도 1 : 
  window.onresize를 써서 브라우저 화면 크기가 변할때마다 innerWidth와  innerHeight를 콘솔에 찍어냄
  원하는 비율을 적으면 (예:left는 10%로 해줘)
  그 비율에 해당하는 화면의 px값을 계산해서 (예:innerWidth가 200px이면 10px) 
  뱉음 return leftValue = 10px

  pseudo 결과 1 : 
  원하는 값이 함수를 나오지 않음 (함수 밖에서 console.log(leftValue) ==> undefined)

  pseudo 원인 예상 :
  함수 안에서 console.log(leftValue)가 잘 찍히는 것을 보니 
  window.onresize 함수 안에서만 값이 실시간으로 변화함

  memo --> 브라우저의 화면 크기가 바뀔때 실시간으로 위치가 변하고 싶으면 onresize 함수 안에서 계산된 값을 사용해야함
  */ 
  
  
}

// pseudo 현재 화면크기의 비율을 계산해주는 계산함수 묶음
const percentCalculator = {
  left(leftValuePercent){
    let leftValue = window.innerWidth*leftValuePercent/100
    return leftValue
  },
  top(topValuePercent){
    let topValue = window.innerHeight*topValuePercent/100 
    return topValue
  }
}
  












// pseudo 움직임 주는 함수 묶음 객체
  function zoom(element,direction,startScale,finshScale,startLeft,finshLeft){
    element.animate([
      {left:`${startLeft}%`,transform :`scale(${startScale})`},
      {left:`${finshLeft}%`, transform :`scale(${finshScale})`}
    ],{
      duration: 3000,
      fill:'forwards',
      direction:direction
    })
  }



// pseudo JSON파일 통신 , load 됐을 때 작동하는 이벤트 함수 
window.onload = function(){
  let req = new XMLHttpRequest();
  let jsonObj
  
  req.addEventListener("load",function(){
    jsonObj = JSON.parse(req.responseText);
    console.dir(root2)
    controlRoot1(true); //pseudo root1 제어하는 함수
    // pseudo 동적으로 요소를 생성시킴 
    // ! 움직이지 말것 먼저 생성이 되어야 getting이 가능해짐


// pseudo wheel에 반응하는 switch 함수
let currentPage = [true,false,false,false,false,false] //pseudo 스위치 함수를 제어하기 위한 핸들러 배열




    function zoomSwitch(){
      root2.innerHTML = `
      ${createDiv("",attributeNode(watercolor(percentCalculator.left(0),percentCalculator.top(0))))}
      
      ${createDiv(jsonObj.intro,attributeNode(controlRoot2(percentCalculator.left(10),percentCalculator.top(20))))}
      
      ${createDiv(jsonObj.textI,attributeNode(textIFunc(percentCalculator.left(20),percentCalculator.top(10))))}
      
      ${createDiv("leaf",attributeNode(leafIFunc(percentCalculator.left(40),percentCalculator.top(20))))}
      

      `
      // ${createDiv("mainBubble",attributeNode(mainBubbleMyFunc(percentCalculator.left(50),percentCalculator.top(60))))}
      
      // ${createDiv("motto",attributeNode(mottoBubbleMyFunc(percentCalculator.left(60),percentCalculator.top(20))))}
      
      // ${createDiv("prosAndCons",attributeNode(prosAndConsBubbleMyFunc(percentCalculator.left(55),percentCalculator.top(70))))}
      
      // ${createDiv("interests",attributeNode(interestsBubbleMyFunc(percentCalculator.left(20),percentCalculator.top(80))))}
      
      // ${createDiv("projects",attributeNode(projectsBubbleMyFunc(percentCalculator.left(10),percentCalculator.top(80))))}
      
      // ${createDiv("needFish",attributeNode(needFishMefunc(percentCalculator.left(44),percentCalculator.top(39))))}
      
      // ${createDiv("haapyFish",attributeNode(happyFishMeFunc(percentCalculator.left(29),percentCalculator.top(74))))}
  
      // ${createDiv(jsonObj.textMyself1,attributeNode(textMyself1Func(percentCalculator.left(20),percentCalculator.top(66))))}
  
      // ${createDiv(jsonObj.textMyself2,attributeNode(textMyself2Func(percentCalculator.left(57),percentCalculator.top(17))))}
  
      // ${createDiv("bottom",attributeNode(bottomMyself2Func(percentCalculator.left(88),percentCalculator.top(20))))}
  
      root2.addEventListener("wheel", (event) => {
        const textIntro = document.getElementById("textIntro")
        const textI = document.getElementById("textI");
        const leafI = document.getElementById("leafI");
        const mainBubbleMy = document.getElementById("mainBubbleMy");
        const mottoBubbleMy = document.getElementById("mottoBubbleMy");
        const prosAndConsBubbleMy = document.getElementById("prosAndConsBubbleMy");
        const interestsBubbleMy = document.getElementById("interestsBubbleMy");
        const projectsBubbleMy = document.getElementById("projectsBubbleMy");
        const needFishMe = document.getElementById("needFishMe")
        const happyFishMe = document.getElementById("happyFishMe")
        const textMyself1 = document.getElementById("textMyself1")
        const textMyself2 = document.getElementById("textMyself2")
        const bottomMyself2 = document.getElementById("bottomMyself2")

        console.log(textI.outerHTML)
        
        
        
        
        if (event.wheelDelta > 0 && currentPage[0] === true) {
          console.log("움직이지 않습니다")
        } else if (event.wheelDelta < 0 && currentPage[0] === true) {
          console.log("zero에서 I로 이동합니다")
          currentPage.splice(0,2,false,true)
          console.dir(textI)
          console.log(leafI)
          zoom(textI,"normal",1,10,10,100)
          
          
        } else if (event.wheelDelta < 0 && currentPage[1] === true) {
          console.log("I에서 My로 이동합니다")
          currentPage.splice(1,2,false,true)
    
    
    
    
    
        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          console.log("My에서 Me로 이동합니다")
          currentPage.splice(2,2,false,true)
    
    
    
    
    
        } else if (event.wheelDelta < 0 && currentPage[3] === true) {
          console.log("Me에서 Myself로 이동합니다")
          currentPage.splice(3,2,false,true)
    
          
          
          
          
        } else if (event.wheelDelta < 0 && currentPage[4] === true) {
          console.log("최종입니다")
          currentPage.splice(4,2,false,true)
    
    
    
    
    
        } else if (event.wheelDelta < 0 && currentPage[5] === true) {
          console.log("움직이지 않습니다")
          
          
          
          
          
        } else if (event.wheelDelta > 0 && currentPage[5] === true) {
          console.log("Myself2에서 Me로 이동합니다")
          currentPage.splice(4, 2,true,false)
    
    
    
    
    
        } else if (event.wheelDelta > 0 && currentPage[4] === true) {
          console.log("Myself1에서 Me로 이동합니다")
          currentPage.splice(3, 2,true,false)
    
    
    
    
    
        } else if (event.wheelDelta > 0 && currentPage[3] === true) {
          console.log("Me에서 My로 이동합니다")
          currentPage.splice(2, 2,true,false)
    
    
    
    
        } else if (event.wheelDelta > 0 && currentPage[2] === true) {
          console.log("My에서 I로 이동합니다")
          currentPage.splice(1, 2,true,false)
          zoom(textI,"reverse",1,10,10,100)
    
    
    
        } else if (event.wheelDelta > 0 && currentPage[1] === true) {
          console.log("I에서 zero로 이동합니다")
          currentPage.splice(0, 2,true,false)
        }
      })
        } 

        
        
        
        
        

      window.addEventListener("wheel", function () {
        let scrollHeight = this.window.scrollY;
        let windowHeight = this.window.innerHeight;
        let docTotalHeight = this.document.body.offsetHeight;
        if (scrollHeight + windowHeight > docTotalHeight) {
          controlRoot1(false) //pseudo root1 제거
          zoomSwitch()
        }
      })
    },false);
    req.open("GET","contents.JSON",true);
    req.send(null);
  }