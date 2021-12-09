enum Shoes {
    Nike = '나이키', 
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes) // '나이키'



enum Answer {
    Yes = 'Y',
    No = 'N'
}

// 이넘 활용 사례
const askQeustion = (answer: Answer) => {
    if(answer === Answer.Yes) {
        console.log("정답")
    }
    if(answer === Answer.No) {
        console.log("오답")
    }
}

//이넘에서 제공하는 값만 넘길 수 있다. 
askQeustion(Answer.Yes);

