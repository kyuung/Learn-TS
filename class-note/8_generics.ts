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




// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown {
    value: string;
    selected: boolean;
}

interface Dropdown2<T> {
    value: T;
    selected: boolean;
}

// const obj: Dropdown = {
//     value: 10,
//     selected: false
// };

const obj2: Dropdown2<number> = {
    value: 10,
    selected: true
}


// NOTE : 제네릭에 타입 제한하기 1
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach((text)=>{
        console.log(text)
    })
    return text;
}

logTextLength<string>(['abc', 'hi'])


// NOTE : 제네릭에 타입 제한하기 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

// 제네릭으로 받은 타입은 LengthType에서 정의된 하위 타입이다.
function logTextLength2<T extends LengthType>(text: T):T {
    text.length;
    return text;
}

logTextLength2('abc');
logTextLength2([1,3,5])
// logTextLength2(10);
// logTextLength2({a: 123, b:2456});



// 제네릭 타입 제한 3 - keyof

// 쇼핑아이템에 있는 키들중에 한가지가 타입이 될 것이당
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShopingItemOption<T extends keyof ShoppingItem>(itemOption: T):T {
    return itemOption;
}
getShopingItemOption(10);
getShopingItemOption(false);

getShopingItemOption('name');
