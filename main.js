import _ from 'lodash' // From 'node_modules'
import {
  random,
  user as jjong
} from "./getRandom"
// import * as R from "./getRandom" // *는 와일드카드(wildcard character), 여러 내용을 한꺼번에 지정할 목적으로 사용하는 기호
// console.log(R)
import getType from './getType' // getType.js


// console.log('hello world') // hello world
// console.log(_.camelCase('hello world')) // helloWorld


// // 데이터 타입 확인

// console.log(typeof 'hello world') // string
// console.log(typeof 123) // number
// console.log(typeof true) // boolean
// console.log(typeof undefined) // undefined
// console.log(typeof null) // object
// console.log(typeof {}) // object
// console.log(typeof []) // object

// console.log(getType(123)) // Number
// console.log(getType(false)) // Boolean
// console.log(getType(null)) // Null
// console.log(getType({})) // Object
// console.log(getType([])) // Array


// // 산술 연산자(arithmetic operator)

// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)


// // 할당 연산자(assignment operator)

// let a = 2
// a += 1 // a = a + 1
// // a -= 1
// // a *= 1
// // a /= 1
// // a %= 1
// console.log(a)


// // 비교 연산자(comparison operator)

// const a = 1
// const b = 3

// console.log(a === b)
// console.log(a !== b)
// console.log(a < b)
// console.log(a > b)
// console.log(a >= b)
// console.log(a <= b)

// function isEqual(x, y) {
//   return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))


// // 논리 연산자(logical operator)

// const a = 1 === 1
// const b = 'AB' === 'AB'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a && b && c)
// console.log('&&:', a && b && c)
// console.log('||:', a || b || c)
// console.log('!:', !a)


// // 삼항 연산자(ternary operator)

// const a = 1 < 2

// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


// // 조건문 (if / switch statement)

// const a = random()

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else {
//   console.log('rest...')
// }

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break
//   case 2:
//     console.log('a is 2')
//     break
//   case 4:
//     console.log('a is 4')
//     break
//   default:
//     console.log('rest...')
// }


// // 반복문 (for statement)
// // for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1) {
//   console.log(i)
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if ((i + 1) % 2 === 0) {
//   li.addEventListener('click', function () {
//     console.log(li.textContent)
//   })
// }
//   ulEl.appendChild(li)
// }


// // 변수 유효범위(variable scope)
// // var -> 함수레벨의 유효범위
// // let, const -> 블록레벨의 유효범위

// function scope1() {
//   if (true) {
//     console.log(a) // undefined
//     const a = 123
//     console.log(a) // 123
//   }
//   console.log(a) // Uncaught ReferenceError: a is not defined
// }
// scope1()

// function scope2() {
//   if (true) {
//     console.log(b) // undefined
//     var b = 123
//     console.log(b) // 123
//   }
//   console.log(b) // 123
// }
// scope2()


// // 형 변환(type conversion)

// const a = 1
// const b = '1'

// console.log(a == b) // true, 동등 연산자 -> 형 변화가 일어나서 비교

// // truthy(참 같은 값)
// // true, {}, [], 'false', -12, '3.14' ...

// // falsy(거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN(Not A Number, ex) 1 + undefined)


// // 함수 일반

// function sum1(x, y) { // x, y는 매개변수, 기명 함수
//   console.log(x + y)
// }

// sum1(1, 3) // 1, 3은 인수
// sum1(4, 12)

// function sum2(x, y) { // x, y는 매개변수
//   return x + y
// }

// const a = sum2(1, 3) // 함수의 결과값만 활용
// const b = sum2(4, 12)

// console.log(sum2(1, 3)) // 선언해 놓은 함수가 한 번 더 동작하는 셈
// console.log(b)
// console.log(a + b)

// const sum = function (x, y) { // 익명 함수
//   if (x < 2) { 
//     return // 값 없이 종료만 할 수도 있음
//   }
//   return x + y  // return 키워드에서 함수는 종료, 그 이후는 실행되지 않음, if문에 활용할 수 있음
// }

// console.log(sum(1, 3))
// console.log(sum(7, 3))

// function sum3() {
//   console.log(arguments) // 함수에 기본 포함되는 기능
//   return arguments[0] + arguments[1]
// }

// console.log(sum3(7, 3))


// // 화살표 함수
// // () => {} vs function () {}

// const double = function (x) {
//   return x * 2
// }
// console.log('double:', double(7))

// const doubleArrow = x => x * 2
// console.log('doubleArrow:', doubleArrow(7))


// // 즉시 실행 함수
// // IIFE, Immediately-Invoked Function Expression

// const a = 7

// function double() {
//   console.log(a * 2)
// }
// double();

// (function () {
//   console.log(a * 2)
// })(); // (x)(), 추천

// (function () {
//   console.log(a * 2)
// }()) // (x())


// // 호이스팅(Hoisting)
// // 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7

// // double1() // error
// double2() // hoisting 발동, 함수 이름 작성은 아랫부분에 모아두는 방식으로 작성 가능

// const double1 = function () {
//   console.log(a * 2)
// }

// function double2() {
//   console.log(a * 2)
// }


// // 타이머 함수
// // setTimeout(함수, 시간): 일정 시간 후 함수 실행
// // setInterval(함수, 시간): 시간 간격마다 함수 실행
// // clearTimeout(): 설정된 Timeout 함수 종료
// // clearInterval(): 설정된 Interval 함수 종료

// const timer = setTimeout(function () {
//   console.log('Jongseo')
// }, 3000) // 시간 단위는 ms

// setTimeout(() => {
//   console.log('Jongseo')
// }, 3000) // 시간 단위는 ms

// const interval = setInterval(function () {
//   console.log('Jongseo')
// }, 3000) // 시간 단위는 ms

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearTimeout(timer)
//   clearInterval(interval)
// })


// // 콜백(callback)
// // 함수의 인수로 사용되는 함수

// function timeout(callback) {
//   setTimeout(() => {
//     console.log('Jongseo')
//     callback()
//   }, 3000)
// }
// timeout(() => {
//   console.log('done')
// })


// // 생성자 함수(prototype)

// // const Jongseo = { // 속성과 메소드를 아우러서 '멤버'라고 부름
// //   firstName: 'Jongseo', // 속성 
// //   lastName: 'Park',
// //   getFullName: function () { // 메소드
// //     return `${this.firstName} ${this.lastName}` // 백틱(`)은 데이터 보간(${})에 사용
// //   }
// // }
// // console.log(Jongseo.getFullName())

// // const Amy = { 
// //   firstName: 'Amy',
// //   lastName: 'Clarke',
// //   getFullName: function () { 
// //     return `${this.firstName} ${this.lastName}`
// //   }
// // }
// // console.log(Amy.getFullName())

// // const Neo = { 
// //   firstName: 'Neo',
// //   lastName: 'Smith',
// //   getFullName: function () { 
// //     return `${this.firstName} ${this.lastName}`
// //   }
// // }
// // console.log(Neo.getFullName())

// function User(first, last) { // 생성자 함수로 사용되는 함수는 이름은 camelCase가 아닌 PascalCase로 작성하는 것이 관행
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//       return `${this.firstName} ${this.lastName}`
// }

// const Jongseo = new User('Jongseo', 'Park') // 생성자 함수, 생성자 함수의 인스턴스는 Jongseo
// const Amy = new User('Amy', 'Clarke')
// const Neo = new User('Neo', 'Smith')

// console.log(Jongseo.getFullName()) // 프로토타입 '참조'
// console.log(Amy.getFullName())
// console.log(Neo.getFullName()) 

// // cf) const Jongseo = {} // 리터럴 방식


// this
// 일반(normal) 함수는 호출 위치에 따라 this 정의
// 화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의 

// const Jongseo = {
//   name: 'Jongseo',
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// Jongseo.normal() // Jongseo, 이곳에서 호출되기 때문에 연결된 객체인 Jongseo의 값을 사용
// Jongseo.arrow() // undefined, 이곳에서 호출되는 것과 관계 없이 함수 범위에서 무엇의 name인지 모르기 때문에 표지 x

// const amy = {
//   name: 'Amy',
//   normal: Jongseo.normal, // 함수의 호출이 아니라 할당
//   arrow: Jongseo.arrow
// }
// amy.normal() // Amy
// amy.arrow() // undefined

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const Jongseo = new User('Jongseo')

// Jongseo.normal() // Jongseo
// Jongseo.arrow() // undefined

// const timer = {
//   name: 'Jongseo',
//   timeout: function () {
//     setTimeout(function () {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout() // undefined, 나는 왠지 모르게 빈 값이 나오는데 이유를 모르겠음

// const timer = {
//   name: 'Jongseo',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)
//   }
// }
// timer.timeout() // Jongseo, timeout 함수가 만들어진 객체에 name 값이 있기 때문에 화살표 함수가 사용됨


// ES6 classes

// const Jongseo = {
//   name: 'Jongseo', 
//   normal: function () {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// Jongseo.normal()
// Jongseo.arrow()

// const Jongseo2 = {
//   name: 'Jongseo2', 
//   normal() {
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// Jongseo2.normal()
// Jongseo2.arrow()

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) { // 내부 함수
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const Jongseo = new User('Jongseo', 'Park')
// const Amy = new User('Amy', 'Clarke')
// const Neo = new User('Neo', 'Smith')

// console.log(Jongseo)
// console.log(Amy.getFullName())
// console.log(Neo.getFullName())


// // 상속(확장)

// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel) // super = Vehicle
//   }
// }
// const myBicycle = new Bicycle('Giant', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)


// // 문자 string mdn

// const result = 'Hello world!'.indexOf('world') // String.prototype.indexOf()
// const result2 = 'Hello world!'.indexOf('jongseo')
// console.log(result) // 6
// console.log(result2) // -1

// const str = '0123'

// console.log(str.length) // 4
// console.log('01 23'.length) // 5

// const str2 = 'Hello world!'

// console.log(str2.indexOf('world')) // 6
// console.log(str2.indexOf('Jongseo') !== -1) // false
// console.log(str2.slice(0, 3)) // Hel
// console.log(str2.slice(6, 11)) // world
// console.log(str2.replace('world', 'Jongseo')) // Hello Jongseo!
// console.log(str2.replace(' world', '')) // Hello!

// const str3 = 'jjongjong2@naver.com'

// console.log(str3.match(/.+(?=@)/)[0]) // jjonjong2, 정규표현식(RegExp)

// const str4 = '     Hello world!   '

// console.log(str4.trim())


// 숫자와 수학 math mdn

// const pi = 3.14159265358979
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str) // 3.14
// console.log(typeof str) // string

// const integer = parseInt(str) // 전역함수
// const float = parseFloat(str)
// console.log(integer) // 3
// console.log(float) // 3.14
// console.log(typeof integer, typeof float) // number number

// console.log('abs:', Math.abs(-12)) // 12
// console.log('min:', Math.min(2, 8)) // 2
// console.log('max:', Math.max(2, 8)) // 8
// console.log('ceil:', Math.ceil(3.14)) // 4
// console.log('floor:', Math.floor(3.14)) // 3
// console.log('round:', Math.round(3.14)) // 3
// console.log('random:', Math.random()) // 0~1 사이의 수


// // 배열 api, array mdn

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry'] // element(item)

// console.log(numbers[1]) // 2, indexing
// console.log(fruits[2]) // Cherry

// // .length

// console.log(numbers.length) // 4
// console.log(fruits.length) // 3
// console.log([1, 2].length) // 2

// console.log([].length) // 0

// // .concat()

// console.log(numbers.concat(fruits)) // 두 배열 데이터 병합 but 원본 배열 수정x
// console.log(numbers)
// console.log(fruits)

// fruits.forEach(function (element, index, array) {
//   console.log(element, index, array)
// })
// fruits.forEach(function (fruit, i) {
//   console.log(fruit, i)
// })

// // .map()

// // const a = fruits.forEach(function (fruit, index) {
// //   console.log(`${fruit}-${index}`)
// // })
// const a = fruits.forEach((fruit, index) => {
//   console.log(`${fruit}-${index}`)
// })

// console.log(a) // undefined

// // const b = fruits.map(function (fruit, index) {
// //   return `${fruit}-${index}`
// // })
// const b = fruits.map((fruit, index) => `${fruit}-${index}`)

// console.log(b) // ['Apple-0', 'Banana-1', 'Cherry-2'], 새로운 배열 반환

// // const c = fruits.map(function (fruit, index) {
// //   return {
// //     id: index,
// //     name: fruit
// //   }
// // })
// const c = fruits.map((fruit, index) => ({
//   id: index,
//   name: fruit
// }))

// console.log(c) // 새로운 객체 데이터 배열 생성

// // .filter()

// const a = numbers.map(number => number < 3)
// console.log(a) // [true, true, false, false]

// const b = numbers.filter(number => number < 3)
// console.log(b) // [1, 2]
// console.log(numbers) // [1, 2, 3, 4], 원본 배열은 변화 없음

// // .find() .findIndex()

// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a) // Banana

// const b = fruits.findIndex(fruit => /^B/.test(fruit))
// console.log(b) // 1

// // .includes()

// const a = numbers.includes(3)
// console.log(a) // true

// const b = fruits.includes('Jongseo')
// console.log(b) // false

// // .push() .unshift()
// // 원본 수정됨 주의!

// numbers.push(5)
// console.log(numbers) // [1, 2, 3, 4, 5], 가장 뒤쪽에 삽입

// numbers.unshift(0)
// console.log(numbers) // [0, 1, 2, 3, 4, 5], 가장 앞쪽에 삽입

// // .reverse()
// // 원본 수정됨 주의!

// numbers.reverse()
// fruits.reverse()
// console.log(numbers) // [5, 4, 3, 2, 1, 0]
// console.log(fruits)

// // .splice()
// // 원본 수정됨 주의!

// numbers.splice(2, 1)
// console.log(numbers) // [1, 2, 4]

// numbers.splice(2, 0, 999)
// console.log(numbers) // [1, 2, 999, 4]


// // 객체 object mdn

// const userAge = {
//   // key: value
//   name: 'Jongseo',
//   age: 40
// }
// const userEmail = {
//   name: 'Jongseo',
//   email: 'jjongjong2@naver.com'
// }

// const target = Object.assign(userAge, userEmail)
// // const target = Object.assign({}, userAge, userEmail) // 새로운 객체 데이터 생성 방법
// // const target = Object.assign({}, userAge) // 같은 값이지만 다른 데이터로 새로 복사해서 만드는 방법
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // true

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b) // false, 생긴 것은 같지만 다른 메모리 주소를 갖고 있기 때문

// const user = {
//   name: 'Jongseo',
//   age: 40,
//   email: 'jjongjong2@naver.com'
// }

// const keys = Object.keys(user)
// console.log(keys) // ['name', 'age', 'email']

// console.log(user['email']) // jjongjong2@naver.com

// const values = keys.map(key => user[key])
// console.log(values) // ['Jongseo', 40, 'jjongjong2@naver.com']


// // 구조 분해 할당 (destructuring assignment)
// // 비구조화 할당

// const user = {
//   name: 'Jongseo',
//   age: 40,
//   email: 'jjongjong2@naver.com',
//   address: 'USA'
// }
// const { name: jongseo, age, email, address = 'Korea' } = user // 객체 데이터의 내용을 구조 분해해서 할당 후 사용
// // ex) user.address

// console.log(`사용자의 이름은 ${jongseo}입니다.`)
// console.log(`${jongseo}의 나이는 ${age}세입니다.`)
// console.log(`${jongseo}의 이메일 주소는 ${email}입니다.`)
// console.log(address) // USA

// const [a, b, c, d] = fruits // 순서대로 인덱싱
// console.log(a, b, c, d) // Apple Banana Cherry undefined
// const [, f] = fruits
// console.log(f) // Banana


// // 전개 연산자 (spread)

// console.log(fruits)
// console.log(...fruits) // Apple Banana Cherry

// function toObject(a, b, c) {
//   return {
//     a, // a: a
//     b, // b: b
//     c // c: c
//   }
// }
// console.log(toObject(...fruits)) // {a: 'Apple', b: 'Banana', c: 'Cherry'}

// const toObject2 = (e, ...f) => // 나머지 매개변수 (rest parameter)
//   ({
//     e: e,
//     f: f,
//   })
// console.log(toObject2(...fruits)) // {e: 'Apple', f: Array(2)} e: "Apple" f: (2) ['Banana', 'Cherry']


// // 데이터 불변성 (immutability)
// // 원시 데이터: string, number, boolean, undefined, null
// // 참조형 데이터: object, array, function

// let a = 1
// let b = 4
// console.log(a, b, a === b) // 1 4 false
// b = a
// console.log(a, b, a === b) // 1 1 true
// a = 7
// console.log(a, b, a === b) // 7 1 false
// let c = 1
// console.log(b, c, b === c) // 1 1 true

// let d = { k: 1 }
// let e = { k: 1 }
// console.log(d, e, d === e) // {k: 1} {k: 1} false
// d.k = 7
// e = d
// console.log(d, e, d === e) // {k: 7} {k: 7} true
// d.k = 2
// console.log(d, e, d === e) // {k: 2} {k: 2} true, 같은 메모리 주소를 보고 있기 때문에 한 쪽 내용만 바꿔도 같이 바뀜
// let f = e
// console.log(d, e, f, d === f) // {k: 2} {k: 2} {k: 2} true
// d.k = 9
// console.log(d, e, f, d === f) // {k: 9} {k: 9} {k: 9} true


// // 얕은 복사(shallow copy)

// const user = {
//   name: 'Jongseo',
//   age: 40,
//   emails: ['jjongjong2@naver.com']
// }
// // const copyUser = user
// // console.log(copyUser === user) // true

// // user.age = 22
// // console.log('user', user) // user {name: 'Jongseo', age: 22, emails: Array(1)}
// // console.log('copyUser', copyUser) // copyUser  {name: 'Jongseo', age: 22, emails: Array(1)}

// // const copyUser2 = Object.assign({}, user) // const copyUser2 = {...user}, 얕은 복사
// // console.log(copyUser2 === user) // false 

// // user.age = 11
// // console.log('user', user) // user {name: 'Jongseo', age: 11, emails: Array(1)}
// // console.log('copyUser2', copyUser2) // copyUser  {name: 'Jongseo', age: 22, emails: Array(1)}

// // console.log('------')
// // console.log('------')

// // user.emails.push('jjongjong3@gmail.com')
// // console.log(user.emails === copyUser2.emails) // true, 여전히 같은 참조형 데이터를 보고 있기 때문에 한쪽에 이메일을 추가해도 다른쪽에 같이 생김
// // console.log('user', user)
// // console.log('copyUser2', copyUser2)


// // 깊은 복사(deep copy) lodash

// const copyUser = _.cloneDeep(user)
// console.log(copyUser === user) // false

// user.age = 22
// console.log('user', user) // user {name: 'Jongseo', age: 22, email
// console.log('copyUser', copyUser) // copyUser {name: 'Jongseo', age: 40, emails: Array(1)}

// console.log('------')
// console.log('------')

// user.emails.push('jjongjong3@gmail.com')
// console.log(user.emails === copyUser.emails) // false
// console.log('user', user) // 이메일 두 개
// console.log('copyUser', copyUser) // 이메일 한 개


// // 가져오기, 내보내기

// console.log(_.camelCase('the hello world'))
// console.log(getType([1, 2, 3]))
// console.log(random(), random())
// console.log(jjong)


// // lodash

// const usersA = [{
//     userId: '1',
//     name: 'Jongseo'
//   },
//   {
//     userId: '2',
//     name: 'Neo'
//   }
// ]
// const usersB = [{
//     userId: '1',
//     name: 'Jongseo'
//   },
//   {
//     userId: '3',
//     name: 'Amy'
//   }
// ]
// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC, 'userId'))

// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

// const users = [{
//     userId: '1',
//     name: 'Jongseo'
//   },
//   {
//     userId: '2',
//     name: 'Neo'
//   },
//   {
//     userId: '3',
//     name: 'Amy'
//   },
//   {
//     userId: '4',
//     name: 'Evan'
//   },
//   {
//     userId: '5',
//     name: 'Lewis'
//   }
// ]

// const foundUser = _.find(users, {
//   name: 'Amy'
// })
// const foundUserIndex = _.findIndex(users, {
//   name: 'Amy'
// })
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {
//   name: 'Jongseo'
// })
// console.log(users)


// // JSON (JavaScript Object Notation)
// // 자바스크립트의 객체 표기법

// import myData from './myData.json' // json 파일은 기본적으로 문자 데이터, import를 통해 가져오면 json 포맷의 규칙을 통해 자동으로 변환해서 출력

// console.log(myData)

// const user = {
//   name: 'Jongseo',
//   age: 40,
//   emails: [
//     'jjongjong2@naver.com',
//     'jjongjong3@gmail.com'
//   ]
// }
// console.log('user', user)

// const str = JSON.stringify(user) // 전역객체, 자바스크립트의 데이터를 문자데이터화 시켜주는 메소드 
// console.log('str', str)
// console.log(typeof str) // string

// const obj = JSON.parse(str) // 자바스크립트 데이터로 재조립
// console.log('obj', obj)


// // Storage, local strage mdn

// localStorage.setItem('user', JSON.stringify(user))
// console.log(localStorage.getItem('user'))
// console.log(JSON.parse(localStorage.getItem('user')))
// // localStorage.removeItem('user')

// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))

// // lowdb, lodash 기반 로컬스토리지 활용하는 패키지


// // OMDb API
// // qurey string => 주소?속성=값&속성=값&속성=값
// // axios

// import axios from 'axios'

// function fetchMovies() {
//   axios
//   .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
//   .then((res) => {
//     console.log(res)
//     const h1El = document.querySelector('h1')
//     const imgEl = document.querySelector('img')
//     h1El.textContent = res.data.Search[0].Title
//     imgEl.src = res.data.Search[0].Poster
//   })
// }
// fetchMovies()


// 정규표현식

let str = `
010-1234-1234
thejjongjong2@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
aabbxcxdd
http://localhost:1234
동해물과_백두산이 마르고 닳도록
` // ''(작은 따옴표)는 문자 데이터를 줄바꿈하여 작성할 수 없음

// // const regexp = new RegExp('the', 'gi') // g(전체)와 i(대소문자 구분 안 함)는 플래그
// const regexp = /the/gi
// console.log(str.match(regexp)) // ['the', 'The', 'the']

// const regexp2 = /fox/gi
// console.log(regexp2.test(str)) // true

// const regexp3 = /fox/gi
// console.log(str.replace(regexp3, 'AAA'))
// console.log(str) // 바뀌지 않음

// str = str.replace(regexp3, 'AAA')
// console.log(str)

// console.log(str.match(/\./gi)) // \는 이스케이프 문자(excape character), 본래의 기능에서 벗어나 상태가 바뀌는 문자
// console.log(str.match(/\./gi)) // ['.', '.', '.', '.']
// console.log(str.match(/\.$/gi)) // null
// console.log(str.match(/\.$/gim)) // ['.'], m은 각각의 줄을 데이터의 시작과 끝으로 봄 => 4번째 문장의 .만 출력되는 것
  
// console.log(
//   str.match(/d$/g) // null
// )
// console.log(
//   str.match(/d$/gm) // ['d']
// )
// console.log(
//   str.match(/^t/g) // null
// )
// console.log(
//   str.match(/^t/gm) // ['t']
// )

console.log(
  str.match(/./g)
)
console.log(
  str.match(/h..p/g) // ['http']
)
console.log(
  str.match(/fox|dog/g)
)
console.log(
  str.match(/https?/g) // ['https', 'http']
)
console.log(
  str.match(/d{2}/g) // ['dd']
)
console.log(
  str.match(/\b\w{2,3}\b/g) // \w => 숫자를 포함한 영어 알파벳, \b => 경계 형성 ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']
)

console.log(
  str.match(/[fox]/g)
)
console.log(
  str.match(/[0-9]{1,}/g)
)
console.log(
  str.match(/[가-힣]{1,}/g)
)

console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g) // 소문자 f로 시작하는 영단어를 모두 찾는 패턴
)
console.log(
  str.match(/\d{1,}/g)
)

const h = `  the hello  world   !

`

console.log(
  h.match(/\s/g)
)
console.log(
  h.replace(/\s/g, '') // thehelloworld!
)

console.log(
  str.match(/.{1,}(?=@)/g) // ['thejjongjong2']
)
console.log(
  str.match(/(?<=@).{1,}/g) // ['naver.com']
)