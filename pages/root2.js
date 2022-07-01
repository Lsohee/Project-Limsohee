export default function controlRoot2(controlValueIntro){
  root2.innerHTML = `${controlValueIntro[3]}<div style='z-index:2; width:fit-content; height:fit-content; position:relative; top:${controlValueIntro[0]}px;left:${controlValueIntro[1]}px'>${controlValueIntro[2]}</div>`
}
/*
element.animate([
  *keyframes
  { transform: 'translateY(0px)' },
  { transform: 'translateY(-300px)' }
], {
  *timing options
  duration: 1000,
  iterations: Infinity
});
*/ 