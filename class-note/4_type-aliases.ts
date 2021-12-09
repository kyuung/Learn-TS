// string 타입을 사용할 때
var str:string = 'kyuung'

// 타입 별칭을 사용할 때
type myStr = string;
var str: myStr = 'kyuung'

type Todo = { id: string; title: string; done:boolean }
function getTodo(todo: Todo){}

// --------------------------------------------

type Dev = {
    name: string;
    age: number;
}

interface Person {
    name: string;
    age: number;
}

const kyaa : Person={
    name:'kyaa',
    age:24
}




const kyee: Dev = {
    name:'kyaa',
    age:24
}