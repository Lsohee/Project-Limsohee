function attributeNode(values){
  return `
  style = '
  width:${values.width};
  height:${values.height};
  position: ${values.position};
  left:${values.left}px;
  top:${values.top}px;
  color:${values.color};
  '
  src = '${values.src}'
  id = '${values.id}'
  `
}
// scale = ${values.scale};

function createDiv(textNode,attributeNode){
  return `
  <div ${attributeNode}>
  ${textNode}
  </div>
  `
}


export {createDiv ,attributeNode}