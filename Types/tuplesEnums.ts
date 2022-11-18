/**
 * Tuple
 * 고정된 길이를 갖는 배열이며 고정된 타입 세트로 순서가 정렬됩니다.
 * 즉, 튜플은 길이와 타입이 고정되어 있습니다. (타입의 순서도 검토합니다)
 */
const color: [number, number, number] = [255, 0, 45];
// const color: [number, number, number] = [255, 0, "aaa"];
// const color: [number, number, number] = [255, 0, 45, 6];

type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "ok"];







// goodRes[0] = "200";





/**
 * 튜플 생성 후에 추가 요소를 push, pop을 막지 않습니다.
 * 튜플을 사용할 일이 많지 않다.
 */
goodRes.push(123);
goodRes.pop();
goodRes.shift()
goodRes.unshift('aaa');

/**
 * 튜플을 배열로 만들기
 */
const responses: HTTPResponse[] = [[404, "Not Found"], [200, "OK"]];


/**
 * Enum
 * enum을 사용하면 명명된 상수 집합을 정의할 수 있습니다.
 * enum은 코드 전체에서 재사용할 수 있는 명명된 상수의 집합입니다.
 * 반복적으로 참조하는 값의 집합이 있을 경우 사용합니다.
 * 
 */
// enum OrderStatus {
//   PENDING,
//   SHIPPED,
//   DELIVERED,
//   RETURNED
// }

const enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED
}



const myStatus = OrderStatus.DELIVERED;





function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);


enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

