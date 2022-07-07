function attributeNodeImg(values){
  return `
  style = '
  width:${values.width};
  height:${values.height};
  position: ${values.position};
  left:${values.left}px;
  top:${values.top}px;
  opacity: ${values.opacity};
  '
  src = '${values.src}'
  alt = ${values.alt}
  id = '${values.id}'
  innerHTML = '${values.innerHTML}'
  `
}

function createImg(textNode,attributeNodeImg){
  return `
  <img ${attributeNodeImg} 
  ></img>
  `
}


export {createImg ,attributeNodeImg}