/**
 * annotation을 쓸 필요는 없지만 확실히 할 수 있기 때문에 씀
 */
function square(num: number): number {
  return num * num;
}

/** parameter default value 설정 */
function greet(person: string = "stranger"): string {
  // person * person;
  return `Hi there, ${person}!`;
}


const doSomething = (person: string, age: number, isFunny: boolean) => { };

square(3);
greet("oh");
greet();
doSomething("ChickenFace", 76, false);


function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const nums = ["one", "two", "three"];
nums.map((num: string) => {
  return num.toUpperCase();
})


/**
 * 아래 함수는 아무 것도 반환하지 않아서 void를 사용함
 */
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}


/**
 * 이 함수는 절대 반환되면 안 된다고 말하고 싶을 때 never를 사용함
 */
function makeError(msg: string): never {
  throw new Error(msg);
}

/**
 * never를 사용하는 다른 경우는 실행을 중단하지 않는 함수에서 사용한다
 * 결코 반환할 기회를 가져선 안된다
 */
function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!")
  }
}

/**
 * never와 void 차이
 * void는 엄밀히 말하면 값으로 void를 반환한 함수는 undefined 상태로 반환된다
 * never은 이 함수가 절대 반환할 기회를 가지면 안 된다고 한다
 */