export default function controlRoot1(exist){
  if(exist ===true){
    return root1.innerHTML = "<div style='font-size:40px; background-color:red;'>hello</div>"
  } else if(exist === false){
    return root1.remove()
  }
}



// function removeRoot1(exist) {
  // console.dir(root2)
  // return removeRoot1()
// }