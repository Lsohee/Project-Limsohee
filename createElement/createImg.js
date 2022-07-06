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
  `
}

function createImg(textNode,attributeNodeImg){
  return `
  <img ${attributeNodeImg}>
  ${textNode}
  </img>
  `
}


export {createImg ,attributeNodeImg}