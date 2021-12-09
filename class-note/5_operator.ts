const logMessage = (value: string) => {
    console.log(value)
}
logMessage('hello!')

// 유니온 타입
const logMessage2 = (value: string | number) => {
    console.log(value)
}

const logMessage3 = (value: string | number) => {
    if(typeof value === 'number') {
        value.toLocaleString();
    } 
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number')
}

logMessage2('string');
logMessage2(24);


interface Dev {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

const askSomeone = (someone: Dev | Person) => {
    someone.name
}

askSomeone({name: 'kyuung', skill: 'frontend'}) // Dev의 데이터
askSomeone({name: 'kyuung', age: 24}) // Person의 데이터


// 인터섹션 타입
const askSomeone2 = (someone: Dev & Person) => {
    someone.name;
    someone.skill;
    someone.name;
}

askSomeone2({name: 'kyuung', skill: 'frontend', age: 24}) // Dev와 Person 의 속성들이 무조건 전부 필요하다.


let cat: string & boolean & number;