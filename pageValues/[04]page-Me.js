import zoom from "../functions/createMovement.js"
import {
  mainBubbleArr,
  mainBubbleTextArr,
  mottoBubbleArr,
  projectsBubbleArr,
  prosAndConsBubbleArr,
  interestsBubbleArr
} from "../elementValues/[03]elements-My.js"
import {meMainTextArr,fish1Arr,fish2Arr} from "../elementValues/[04]elements-Me.js"
import myself1TextArr from "../elementValues/[05]elements-Myself1.js"
import {myself2TextArr,bottomArr} from "../elementValues/[06]elements-Myself2.js"

export default function pageMeFunc(direction){
          // --> page My elements 
          zoom(mainBubbleText, direction, mainBubbleTextArr[3])
          zoom(mainBubble, direction, mainBubbleArr[3])
          zoom(mottoBubble, direction, mottoBubbleArr[3])
          zoom(prosAndConsBubble, direction, prosAndConsBubbleArr[3])
          zoom(projectsBubble, direction, projectsBubbleArr[3])
          zoom(interestsBubble, direction, interestsBubbleArr[3])

          // --> page Me elements
          zoom(meMainText, direction, meMainTextArr[2])
          zoom(fish1,direction,fish1Arr[2])
          zoom(fish2,direction,fish2Arr[2])

          // --> page Myself elements
          zoom(myself1Text, direction, myself1TextArr[1])
          zoom(bottom, direction, bottomArr[1])
          zoom(myself2Text, direction, myself2TextArr[1])


}