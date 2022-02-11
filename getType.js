export default function getType(data) { // 이름 지정이 필요없는 기본 통로, getType을 지워도 됨
  return Object.prototype.toString.call(data).slice(8, -1)
}