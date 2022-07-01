import controlRoot2 from "./pages/root2.js"
import controlRoot1 from "./pages/root1.js"
import zoomSwitch from "./switch.js"
// let controlValueRoot2Arr = 


window.onload = function(){
  var req = new XMLHttpRequest();
  var jsonObj
  
  req.addEventListener("load",function(){
    jsonObj = JSON.parse(req.responseText);
    console.log(jsonObj.intro)
    
    controlRoot1(true)
    controlRoot2([100,100,jsonObj.intro])
    


      
      /* 
      pseudo 여기다 
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

