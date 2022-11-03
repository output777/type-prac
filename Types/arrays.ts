/**
 * []는 항상 빈 배열임을 알려준다
 * 그래서 []앞에 type을 넣어줘야 한다
 */
const sampleActiveUsers: [] = [];
const activeUsers: string[] = [];
activeUsers.push("Tony");
// activeUsers.push(12);

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = "99";


/**
 * Array<type>
 * const bools: Array<boolean> = []
 * const bools: boolean[] = [];
 * 위 2개의 구문이 의미하는 바는 같다
 */
const bools: boolean[] = [];


type Point = {
  x: number;
  y: number;
}

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });


/**
 * 다차원 배열
 * type[][]
 */
const board: string[][] = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]];
