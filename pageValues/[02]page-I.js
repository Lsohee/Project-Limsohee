import zoom from "../functions/createMovement.js"
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



export default function pageIFunc(direction) {
  // --> page I elements
  zoom(introText, direction, introTextArr[2])
  zoom(pageIText, direction, pageITextArr[2])
  zoom(pageILeaf, direction, pageILeafArr[2])


  // --> page My elements 
  zoom(mainBubbleText, direction, mainBubbleTextArr[1])
  zoom(mainBubble, direction, mainBubbleArr[1])
  zoom(mottoBubble, direction, mottoBubbleArr[1])
  zoom(prosAndConsBubble, direction, prosAndConsBubbleArr[1])
  zoom(projectsBubble, direction, projectsBubbleArr[1])
  zoom(interestsBubble, direction, interestsBubbleArr[1])
}