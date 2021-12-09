interface User {
    age: number;
    name: string;
}


// 변수에 활용한 인터페이스
const kyuung: User = {
    age:24,
    name:'leekyuung'
}


// 함수에 활용한 인터페이스
function getUser(user: User) {
    console.log(user)
}

const pyuung = {
    name:"kyuung2",
    age:24
}
getUser(pyuung)


// 함수의 스펙(구조/규칙)에 인터페이스를 활용
interface SumFunction{
    (a: number, b:number): number;
}

let sum: SumFunction;

sum = function(a:number, b:number) {
    return a+b;
}


// 인덱싱
interface StringArray {
    [index: number]: string;
}
var arr: StringArray = ['a', 'b', 'c'];
arr[0] = 'g'


// 인터페이스 딕셔너리 패턴
interface StringRegexDictonary{
    [key: string]: RegExp;
}

var obj: StringRegexDictonary = {    
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    // name: string;
    // age: number;
    language: string;
}

const fyuung: Developer = {
    name: 'kyuung', 
    age: 24,
    language: 'JS'
}

