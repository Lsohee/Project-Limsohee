export default function controlRoot1(exist) {
  const container = document.getElementById("container")
  const root1 = document.getElementById("root1")
  const root2 = document.getElementById("root2")

  if(exist ===true){
    return root1.innerHTML = "<div style='font-size:40px; background-color:red;'>hello</div>"
  } else if(exist === false){
    return root1.remove()
  }
}