// pseudo 움직임 주는 함수
export default function zoom(element, direction, movementValues, resolve = () => {
  console.log(`${element.id}'s movement is over`)
}) {
  let make = element.animate([
    //여기의 left는 화면 비율
    {
      left: `${movementValues.startLeft}%`,
      top: `${movementValues.startTop}%`,
      opacity: `${movementValues.startOpacity}`,
      transform: `scale(${movementValues.startScale} )`
    },
    {
      left: `${movementValues.finishLeft}%`,
      top: `${movementValues.finishTop}%`,
      opacity: `${movementValues.finishOpacity}`,
      transform: `scale(${movementValues.finishScale})`
    }
  ], {
    duration: 2000,
    fill: 'forwards',
    direction: direction
  })
  make.finished.then(() => { //pseudo 애니메이션 동기처리를 위해 promise를 반환하는 finish 프로퍼티 안 함수를 매개변수로 추가
    resolve()
  })
}

