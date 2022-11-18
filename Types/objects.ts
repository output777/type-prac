/**
 * 파라미터로 객체를 허용함
 */
function printName(person: { first: string, last: string }): void {
  console.log(`${person.first} ${person.last}`);
  // Property 'age' does not exist on type '{ first: string; last: string; }
  // console.log(person.age);
}

printName({ first: "Tomas", last: "JK" });


let coordinate: { x: number, y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number, y: number } {
  return { x: Math.random(), y: Math.random() }
}

printName({ first: "Mick", last: "Jagger", age: 473 })



/**
 * 개체 리터럴은 알려진 속성만 지정할 수 있음
 * printName({ first: "Mick", last: "Jagger", age: 473 })
 * 하지만 변수에 집어 넣으면 에러가 발생하지 않음 
 * 왜냐하면 변수에 집어넣으면 필요한 프로퍼티가 전달되는지 아닌지만 보고 지정된 프로퍼티 외에는 그냥 무시하게 됨
 * 그래서 에러는 발생하지 않음
*/
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);


/**
 * Type Alias (타입 별칭)
 * 반드시 첫글자를 대문자로 쓸 필요는 없지만 대체로 그렇게 사용함
 * 재사용하기 좋음
 * 원시 타입도 만들 수 있음
 */

type Point = {
  x: number;
  y: number;
}

const coordinateAlias: Point = { x: 34, y: 2 };
const doublePoint = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 }
}

type MyNum = number;
let age: MyNum = 24234;

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: {
    producer: string;
    writer: string;
  }
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North"
  }
}

function cacluatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}


const earnings = cacluatePayout(mySong);
console.log(earnings);
const mySongInfo = printSong(mySong);
console.log(mySongInfo);


/**
 * 선택적 프로퍼티
 * ?를 사용하면 선택적 프로퍼티로 만들어서 사용유무을 선택할 수 있게해줌
 */

type SelectPoint = {
  x: number;
  y: number;
  z?: number;
}

const selectMyPoint1: SelectPoint = { x: 1, y: 2, z: 9 };
const selectMyPoint2: SelectPoint = { x: 1, y: 2 };


/**
 * readonly 제어자
 * readonly를 표시하면 변경할 때 경고를 줌
 * 이름처럼 읽기만 가능하고 쓰기는 할 수 없음
 */

type User = {
  readonly id: number;
  username: string;
}

const user: User = {
  id: 12837,
  username: 'oh'
}

console.log(user.id);

// user.id = 555;

/**
 * 교차 타입 
 * &을 사용
 */

type Circle = {
  radius: number;
}

type Colorful = {
  color: string;
}

type ColorfulCircle = Circle & Colorful 
  & {
    size: number;
  }

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
  size: 50,
}


type Cat = {
  numLives: number;
}

type Dog = {
  breed: string;
}

type CatDog = Cat & Dog
  & {  // 이렇게 새로운 타입을 추가할 수 있음
    age: number;
  }

const chris: CatDog = {
  numLives: 7,
  breed: "Hus",
  age: 5,
}