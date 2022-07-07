import zoom from "../functions/createMovement.js"
import introTextArr from "../elementValues/[01]elements-root2.js"
import {
  pageITextArr,
  pageILeafArr
} from "../elementValues/[02]elements-I.js"
export default function pageIntroFunc(direction){
  zoom(introText, direction, introTextArr[1])
  zoom(pageIText, direction, pageITextArr[1])
  zoom(pageILeaf, direction, pageILeafArr[1])
}