/**
 * |을 사용해서 유니온타입을 만들 수 있다
 * 유니온 타입을 이용하면 여러 타입의 값을 가질 수 있다
 */
let unionAge: number | string = 21;
unionAge = 23;
unionAge = "24";


type UnionPoint = {
  x: number;
  y: number;
}

type UnionLoc = {
  lat: number;
  long: number;
}

let unionCoordinates: UnionPoint | UnionLoc = { x: 1, y: 34 };
unionCoordinates = { lat: 321.213, long: 23.334 };


function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge('aaa');

/**
 * Type Narrowing
 * if같은 조건문 사용
 */
function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") {
    price = parseFloat(price.replace('$', ""));
  }
  return price * tax;
}

/**
 * 여러 가지 타입을 갖는 배열 만들기
 * (type | type)[]
 */
const stuff: (number | string)[] = [1, 2, 3, "aaa"];

const unionCoords: (UnionPoint | UnionLoc)[] = [];
unionCoords.push({ lat: 321.213, long: 23.334 });
unionCoords.push({ x: 1, y: 34 });


/**
 * 리터럴 타입
 * 유니온 타입에 리터럴 타입을 활용하는 방법이 유용함
 * 변수가 작성한 리터럴 값 중 하나를 갖도록 할 수 있음
 */

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = "angry";

type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

// let today: DayOfWeek = "weds";