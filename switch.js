import funcI from "./pages/pageI.js"
import funcMy from "./pages/pageMy,js"
import funcMe from "./pages/pageMe.js"
import funcMyself1 from "./pages/pageMyself1.js"
import funcMyself2 from "./pages/pageMyself2.js"

let currentPage = [true,false,false,false,false,false]

export default function zoomSwitch(contantI,contantMy,contantMe,contantMyself1,contantMyself2){
  root2.addEventListener("wheel", (event) => {

    console.log(event)
    
    if (event.wheelDelta > 0 && currentPage[0] === true) {
      console.log("움직이지 않습니다")
      



    } else if (event.wheelDelta < 0 && currentPage[0] === true) {
      console.log("zero에서 I로 이동합니다")
      currentPage.splice(0,2,false,true)

      
      
      
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




    } else if (event.wheelDelta > 0 && currentPage[1] === true) {
      console.log("I에서 zero로 이동합니다")
      currentPage.splice(0, 2,true,false)
    }
  })
    }