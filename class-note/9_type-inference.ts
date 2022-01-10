// type 추론 1
var a = 'abc';

function getB(b = 10) {
    var c = 'hi';
    return b + c;
}

// type 추론 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     // 이 경우, Dropdonw interface의 value 는 string이 된다.
//     value: '2000',
//     title: 'coffee',
// };

// type 추론 3
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'abbab',
};

// best common type
var arr = [1, 2, true, true, 'striiing'];
