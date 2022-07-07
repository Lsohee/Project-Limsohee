import zoom from "../functions/createMovement.js"
import {meMainTextArr,fish1Arr} from "../elementValues/[04]elements-Me.js"
import myself1TextArr from "../elementValues/[05]elements-Myself1.js"
import {myself2TextArr,bottomArr} from "../elementValues/[06]elements-Myself2.js"



export default function pageMyself2Func(direction){
  zoom(meMainText, direction, meMainTextArr[4])
  zoom(fish1,direction,fish1Arr[4])

  zoom(myself1Text, direction, myself1TextArr[3])
  zoom(myself2Text, direction, myself2TextArr[3])
  zoom(bottom, direction, bottomArr[3])
}