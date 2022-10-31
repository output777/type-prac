// subject: type annotations


/** string */
let movieTitle: string = "Amadeus";
// movieTitle = 9;

/** number */
let numCatLives: number = 9;
numCatLives += 1;
// numCatLives = "zero";

/** boolean */
let gameOver: boolean = false;
gameOver = true;
// gameOver = "true";


/** 실제로 변수를 작성할 때는 type inference를 사용하면 된다 
 * TypeScript은 할당된 변수를 토대로 타입을 추론할 수 있다.
 * 하지만 annotation으로 type을 직접 할당해야 하는 경우도 존재한다 (쓸일이 많이 없다)
*/
let color = "Olive";
color = "Yello";
// color = false;

let isFunny = false;
isFunny = true;
// isFunny = "true";


const colors = ['red', 'green', 'blue', 'yellow'];
let foundColor: string;

for (let color of colors) {
  if (color === 'red') {
    foundColor = color;
  }
}
// foundColor();
// foundColor = 1;