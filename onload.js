import controlRoot2 from "./pages/root2.js"
import controlRoot1 from "./pages/root1.js"
import zoomSwitch from "./switch.js"
import watercolor from "./waterColor.js";

function leftPositionCalculator(leftValuePercent){
  let leftValue = window.innerWidth*leftValuePercent/100
  return leftValue
}

function topPostionCalculator(topValuePercent){
  let topValue = window.innerHeight*topValuePercent/100 
  return topValue
}


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

console.log(window.onresize(20,20,"top"))








window.onload = function(){
  var req = new XMLHttpRequest();
  var jsonObj
  
  req.addEventListener("load",function(){
    jsonObj = JSON.parse(req.responseText);
    console.log(jsonObj.intro)
    
    controlRoot1(true)
    
    /*
    pseudo controlRoot2 함수의 인자 : 
    *intro 소개의 left
    *intro 소개의 top
    *intro 소개의 contentTexts
    *root2의 innerHTML에 물배경 레이어 생성
    */
    controlRoot2([,jsonObj.intro,watercolor()])
    


      
      /* 
      pseudo 여기에 
      pseudo zoomSwitch(contantI,contantMy,contantMe,contantMyself1,contantMyself2)
      pseudo controlRoot1()
      */

      window.addEventListener("wheel", function () {
        let scrollHeight = this.window.scrollY;
        let windowHeight = this.window.innerHeight;
        let docTotalHeight = this.document.body.offsetHeight;
        if (scrollHeight + windowHeight > docTotalHeight) {
          controlRoot1(false)
          zoomSwitch()
        }
      })
      



    },false);
    req.open("GET","contents.JSON",true);
    req.send(null);
  }

