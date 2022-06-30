import controlRoot1 from "./root1.js"
import zoomSwitch from "./switch.js"


  window.onload = function(){
    var req = new XMLHttpRequest();
    var jsonObj
    
    req.addEventListener("load",function(){
      jsonObj = JSON.parse(req.responseText);
      // console.log(jsonObj)
      console.log("loading complet")




      
      /* 
      pseudo 여기다 
      pseudo zoomSwitch(contantI,contantMy,contantMe,contantMyself1,contantMyself2)
      pseudo controlRoot1()
      */





      controlRoot1()
    },false);
    req.open("GET","contants.JSON",true);
    req.send(null);
  }

