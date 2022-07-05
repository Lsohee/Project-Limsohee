function attributeNodeImg(values){
  return `
  style = '
  width:${values.width};
  height:${values.height};
  position: ${values.position};
  left:${values.left}px;
  top:${values.top}px;
  '
  src = '${values.src}'
  id = '${values.id}'
  `
}

function createImg(textNode,attributeNode){
  return `
  <img ${attributeNode}>
  ${textNode}
  </img>
  `
}


export {createImg ,attributeNodeImg}