import zoom from "../functions/createMovement.js"
import {
  mainBubbleArr,
  mainBubbleTextArr,
  mottoBubbleArr
} from "../elementValues/[03]elements-My.js"
import {meMainTextArr,fish1Arr,fish2Arr} from "../elementValues/[04]elements-Me.js"
import myself1TextArr from "../elementValues/[05]elements-Myself1.js"
import {myself2TextArr,bottomArr} from "../elementValues/[06]elements-Myself2.js"



export default function pageMyself1Func(direction){
        // --> page My elements 
        zoom(mainBubbleText, direction, mainBubbleTextArr[4])
        zoom(mainBubble, direction, mainBubbleArr[4])
        zoom(mottoBubble, direction, mottoBubbleArr[4])




        zoom(meMainText, direction, meMainTextArr[3])
        zoom(fish1,direction,fish1Arr[3])
        zoom(fish2,direction,fish2Arr[3])
        
        
        
        zoom(bottom, direction, bottomArr[2])
        zoom(myself1Text, direction, myself1TextArr[2])
        zoom(myself2Text, direction, myself2TextArr[2])





}