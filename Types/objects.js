/**
 * 파라미터로 객체를 허용함
 */
function printName(person) {
    console.log("".concat(person.first, " ").concat(person.last));
    // Property 'age' does not exist on type '{ first: string; last: string; }
    // console.log(person.age);
}
printName({ first: "Tomas", last: "JK" });
var coordinate = { x: 34, y: 2 };
function randomCoordinate() {
    return { x: Math.random(), y: Math.random() };
}
/**
 * 개체 리터럴은 알려진 속성만 지정할 수 있음
 * printName({ first: "Mick", last: "Jagger", age: 473 })
 * 하지만 변수에 집어 넣으면 에러가 발생하지 않음
 * 왜냐하면 변수에 집어넣으면 필요한 프로퍼티가 전달되는지 아닌지만 보고 지정된 프로퍼티 외에는 그냥 무시하게 됨
 * 그래서 에러는 발생하지 않음
*/
var singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);
var coordinateAlias = { x: 34, y: 2 };
var doublePoint = function (point) {
    return { x: point.x * 2, y: point.y * 2 };
};
var age = 24234;
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12873321,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North"
    }
};
function cacluatePayout(song) {
    return song.numStreams * 0.0033;
}
function printSong(song) {
    console.log("".concat(song.title, " - ").concat(song.artist));
}
var earnings = cacluatePayout(mySong);
console.log(earnings);
var mySongInfo = printSong(mySong);
console.log(mySongInfo);
