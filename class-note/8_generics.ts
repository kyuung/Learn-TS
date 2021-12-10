// const logText = (text) => {
//     console.log(text);
//     return text;
// }

// generic.ver
function logTextGeneric<T>(text: T):T {
    console.log(text);
    return text
}

logTextGeneric<string>('문자열')

// ************************************************************

// const logText = (text: string | number) => {
//     console.log(text);
//     return text;
// }

// logText(3);
// logText("a")

// ************************************************************

// <T> : 타입은 들어오는 파라미터의 타입으로 쓰겠다 + 제네릭을 사용하겠다는 뜻
// :T : 리턴할때도 그 타입을 쓰겠다.

function logText<T>(text: T):T {
    console.log(text);
    return text
}

// string 이라는 타입을 받아서 쓰겠다고 호출할 때 정의
logText<string>('abc')

const str = logText<string>('abc');
str.split('')

// boolean 이라는 타입을 받아서 쓰겠다고 호출할 때 정의
const bool = logText<boolean>(true)
