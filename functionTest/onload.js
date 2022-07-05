// pseudo html 요소 geting 
const container = document.getElementById("container")
const root1 = document.getElementById("root1")
const root2 = document.getElementById("root2")









// pseudo 파일 import
import controlRoot1 from "./pages/[00]catchphrasePage-root1.js" // pseudo  
import {moveingValues} from "./pages/[01]introPage-root2.js"
import watercolor from "./pages/waterLayer.js";// pseudo 물느낌을 내는 물색 layerdiv 값 (object)
import {createDiv,attributeNode} from "./createElement/createDiv.js" //pseudo div을 생성하는 틀 
import CreateDivValues from "./createElement/createDivValues.js"
import {createImg,attributeNodeImg} from "./createElement/createImg.js" //pseudo img 태그를 생성하는 틀
import {leafIMoveingValues,textIMoveingValues} from "./pages/[02]firstPage-I.js"// pseudo I 소개 내용의 div을 생성한 값 (object)
import {mainBubbleMyMoveingValues, mottoBubbleMyFunc,prosAndConsBubbleMyFunc, interestsBubbleMyFunc,
  projectsBubbleMyFunc} from "./pages/[03]secondPage-My.js" //pseudo My 페이지 요소들 제어
import { needFishMefunc,happyFishMeFunc } from "./pages/[04]thirdPage-Me.js"
import { textMyself1Func } from "./pages/[05]fourthPage-Myself1.js";
import { textMyself2Func, bottomMyself2Func } from "./pages/[06]fifthPage-Myself2.js"




// pseudo 인스턴스
const introText = new CreateDivValues("fit-contant","fit-contant","absolute",percentCalculator.left(10),percentCalculator.top(100),"black","none","textIntro")












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
  function zoom(element,direction,movementValues,resolve){
    let make = element.animate([
      //여기의 left는 화면 비율
      {left:`${movementValues.startLeft}%`,top:`${movementValues.startTop}%`,transform :`scale(${movementValues.startScale})`},
      {left:`${movementValues.finishLeft}%`,top:`${movementValues.finishTop}%`,transform :`scale(${movementValues.finishScale})`}
    ],{
      duration: 2300,
      fill:'forwards',
      direction:direction
    })
    make.finished.then(()=>{ //pseudo 애니메이션 동기처리를 위해 promise를 반환하는 finish 프로퍼티 안 함수를 매배변수로 추가
      resolve()
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
    console.log(introText)
    
    
    
    //? load할때에 찍어봐도 안되는 것을 보면 무언가 잘못됨
    //pseudo console에 값이 잘 찍히는 것으로 보아 값에 접근은 잘함
    //pseudo 그냥 수정만 안되는 것임
    // console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
    // mainBubbleMyMoveingValues.mainBubbleMyFunc().width = "10px" 
    // console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
    //? 혹시 생성은 될까?




    console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
    mainBubbleMyMoveingValues.mainBubbleMyFunc().name = "limsohee" 
    console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().name)
    //pseudo 생성도 안된다 그냥 여기서는 객체 값을 변형하는게 안되나보다
    // ? 왜? 왜 안되는 데?

    
    
    //pseudo load와 관련이 있을 까? 
    //pseudo 처음에 load를 했을 때 가져온 객체들의 값을 load한 그대로 쓰고 있는거지
    //pseudo 이 모든 작동이 load함수 안에서 돌아가고 있으니까

    /*
    pseudo 추측
    : 1. 이 모든 작동이 window.load 이벤트 함수안에서 돌아가고 있음 
    : 2. 그렇다면 처음에 load로 불러온 값이 다시 load를 하지 않는 이상 값이 재할당이 되지 않는 것

    pseudo 반박
    : import는 load 밖에서 가져왔는데 왜 가져온 객체의 값이 load에 영향을 받나?
    */ 



    // pseudo 동적으로 요소를 생성시킴 
    // ! 움직이지 말것 먼저 생성이 되어야 getting이 가능해짐
    root2.innerHTML = `
      ${createDiv("",attributeNode(watercolor(percentCalculator.left(0),percentCalculator.top(0))))}
      
      ${createDiv(jsonObj.intro,attributeNode(introText))}
      
      ${createImg("leaf",attributeNodeImg(leafIMoveingValues.leafIFunc(percentCalculator.left(100),percentCalculator.top(30))))}
      
      ${createDiv(jsonObj.textI,attributeNode(textIMoveingValues.textIFunc(percentCalculator.left(100),percentCalculator.top(40))))}
      
      ${createDiv("fish1",attributeNode(mainBubbleMyMoveingValues.mainBubbleMyFunc(percentCalculator.left(20),percentCalculator.top(20))))}

      `

      
      




      // pseudo pageI의 주요 요소들 getting의 묶음
      const pageI = {
        textIntro : document.getElementById("textIntro"),
        textI : document.getElementById("textI"),
        leafI : document.getElementById("leafI")
      }
      
      // pseudo pageMy의 주요 요소들 getting의 묶음
      // memo 아직 요소들이 남음  
      const pageMy = {
        mainBubbleMy : document.getElementById("mainBubbleMy"),
        mottoBubbleMy : document.getElementById("mottoBubbleMy"),
        prosAndConsBubbleMy : document.getElementById("prosAndConsBubbleMy"),
        interestsBubbleMy : document.getElementById("interestsBubbleMy"),
        projectsBubbleMy : document.getElementById("projectsBubbleMy")
      }

      // pseudo pageMe의 주요 요소들 getting의 묶음 
      // memo 아직 요소들이 남음 
      const pageMe = {
        needFishMe : document.getElementById("needFishMe"),
        happyFishMe : document.getElementById("happyFishMe")
      }


    
    
    
    


// pseudo wheel에 반응하는 switch 함수
let currentPage = [true,false,false,false,false,false] //pseudo 스위치 함수를 제어하기 위한 핸들러 배열




    function zoomSwitch(){

      // ${createDiv("needFish",attributeNode(needFishMefunc(percentCalculator.left(44),percentCalculator.top(39))))}
      
      // ${createDiv("haapyFish",attributeNode(happyFishMeFunc(percentCalculator.left(29),percentCalculator.top(74))))}
  
      // ${createDiv(jsonObj.textMyself1,attributeNode(textMyself1Func(percentCalculator.left(20),percentCalculator.top(66))))}
  
      // ${createDiv(jsonObj.textMyself2,attributeNode(textMyself2Func(percentCalculator.left(57),percentCalculator.top(17))))}
  
      // ${createDiv("bottom",attributeNode(bottomMyself2Func(percentCalculator.left(88),percentCalculator.top(20))))}
  
      root2.addEventListener("wheel", (event) => {

        
       
        
    
        const textMyself1 = document.getElementById("textMyself1")
        const textMyself2 = document.getElementById("textMyself2")
        const bottomMyself2 = document.getElementById("bottomMyself2")

        
        if (event.wheelDelta > 0 && currentPage[0] === true) {
          console.log("움직이지 않습니다")
          
        } else if (event.wheelDelta < 0 && currentPage[0] === true) {
          zoom(pageI.textIntro,"normal",moveingValues.I)
          zoom(pageI.textI,"normal",textIMoveingValues.I)
          zoom(pageI.leafI,"normal",leafIMoveingValues.I)
          
          console.log("zero에서 I로 이동합니다")
          currentPage.splice(0,2,false,true)
          
          
        } else if (event.wheelDelta < 0 && currentPage[1] === true) {
          console.log("I에서 My로 이동합니다")
          currentPage.splice(1,2,false,true)
          
            zoom(pageI.textIntro,"normal",moveingValues.My)
            zoom(pageI.textI,"normal",textIMoveingValues.My)
            zoom(pageI.leafI,"normal",leafIMoveingValues.My)


            console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
            mainBubbleMyMoveingValues.mainBubbleMyFunc().width = "10px" //? 여기서 재할당을 해줬는데 왜 다음 console도 0px이 찍히는 것일까?
            console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
          
          
          
    
        } else if (event.wheelDelta < 0 && currentPage[2] === true) {
          console.log("My에서 Me로 이동합니다")
          currentPage.splice(2,2,false,true)
          console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width) //? 혹시 함수 if()문 밖에서는 재할당 될까? 
    
    
    
    
    
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
          // zoom(textI,"reverse",1,10,10,100)
    
    
    
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
        if (Math.ceil( scrollHeight + windowHeight) >= docTotalHeight) {
          controlRoot1(false) //pseudo root1 제거
          //? 왜......안되지? if()문 안이라서 안되는 것은 아님
        //   console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)
        // mainBubbleMyMoveingValues.mainBubbleMyFunc().width = "10px" 
        // console.log(mainBubbleMyMoveingValues.mainBubbleMyFunc().width)

          
          // pseudo 연잎과 인트로 등장
          zoom(pageI.textIntro,"normal",moveingValues.intro)
          zoom(pageI.textI,"normal",textIMoveingValues.intro)
          zoom(pageI.leafI,"normal",leafIMoveingValues.intro)

          
          zoomSwitch()
        }
      })
    },false);
    req.open("GET","contents.JSON",true);
    req.send(null);
  }