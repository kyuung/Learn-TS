class Person {
    // 1. class의 최상단에 멤버 변수의 타입을 설정해주어야 한다. 
    // 3. 범수의 유효 범위 private, public, readonly
    public name: string;
    public age: number;

    // 2. 인자에서도 타입 설정
    constructor(name :string, age :number) {
        this.name = name;
        this.age = age;
    }
}
