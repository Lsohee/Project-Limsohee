// pseudo 현재 브라우저 크기를 인식 --> 원하는 비율의 px값을 뱉어내는 함수
const percentCalculator = {
  left(leftValuePercent) {
    let leftValue = window.innerWidth * leftValuePercent / 100
    return leftValue
  },
  top(topValuePercent) {
    let topValue = window.innerHeight * topValuePercent / 100
    return topValue
  }
}

export default percentCalculator 
