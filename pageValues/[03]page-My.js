import zoom from "../functions/createMovement.js"
import {meMainTextArr,fish1Arr,fish2Arr} from "../elementValues/[04]elements-Me.js"
import introTextArr from "../elementValues/[01]elements-root2.js"
import {
  pageITextArr,
  pageILeafArr
} from "../elementValues/[02]elements-I.js"
import {
  mainBubbleArr,
  mainBubbleTextArr,
  mottoBubbleArr,
  projectsBubbleArr,
  prosAndConsBubbleArr,
  interestsBubbleArr
} from "../elementValues/[03]elements-My.js"




export default function pageMyFunc(direction){
          // --> page I elements
          zoom(pageIText, direction, pageITextArr[3])
          zoom(introText, direction, introTextArr[3])
          zoom(pageILeaf, direction, pageILeafArr[3])
          // --> page My elements 
          zoom(mainBubbleText, direction, mainBubbleTextArr[2])
          zoom(mainBubble, direction, mainBubbleArr[2])
          zoom(mottoBubble, direction, mottoBubbleArr[2])
          zoom(prosAndConsBubble, direction, prosAndConsBubbleArr[2])
          zoom(projectsBubble, direction, projectsBubbleArr[2])
          zoom(interestsBubble, direction, interestsBubbleArr[2])
          // --> page Me elements
          zoom(meMainText, direction, meMainTextArr[1])
          zoom(fish1,direction,fish1Arr[1])
          zoom(fish2,direction,fish2Arr[1])
}