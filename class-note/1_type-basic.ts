// JS 문자열 선언 방식
var str = 'hello';

// TS 문자열 선언
var str: string = 'hello';

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3]; // 배열 리터럴로 선언하기
let something: Array<string> = ['ab', 'bc', 'cd'];

// TS 튜플 - 배열 순서의 타입까지 정의하는 것
let address: [string, number] = ['gangnam', 2];

// TS 객체
let obj: object = {};

let person: { name: string; age: number } = {
    name: 'kyuung',
    age: 24,
};

// TS 진위값
let show: boolean = true;
