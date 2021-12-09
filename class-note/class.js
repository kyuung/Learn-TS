function Person2(name, age) {
    this.name = name;
    this.age = age;
}
let paaa = new Person2('paaa', 24)

// 위의 함수가 syntax sugar로 나오게 된게 아래의 class, 바벨을 돌리면 위와 같은 모양으로 출력된다.

class Person {
    // class logic
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log(name, age)
    }
}

let kyuung = new Person('kyuung', 24);
console.log(kyuung) // kyuung 24     Person { name: 'kyuung', age: 24 }