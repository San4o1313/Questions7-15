const questions = [
    {
        question: "What are the different data types present in javascript?",
        answer: "There are six basic data types in JavaScript which can be divided into three main categories: primitive (or primary), composite (or reference), and special data types. String, Number, and Boolean are primitive data types. Object, Array, and Function (which are all types of objects) are composite data types."
    },
    {
        question: "Explain Implicit Type Coercion in javascript",
        answer: "Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Type conversion is similar to type coercion because they both convert values from one data type to another with one key difference — type coercion is implicit whereas type conversion can be either implicit or explicit."
    },
    {
        question: "Explain Hoisting in javascript",
        answer: "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Inevitably, this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local."
    },
    {
        question: "What is recursion in a programming language?",
        answer: "Recursion is the process of repeating items in a self-similar way. In programming languages, if a program allows you to call a function inside the same function, then it is called a recursive call of the function."
    },
];

questions.forEach(elem =>{
    let div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML =
     `
        <div class="question">
            <h4>${elem.question}</h4>
            <button class="btn-info"><i class="fas fa-plus-circle"></i></button>
        </div>
        <div class="info hidden">
            <hr>
            <p>${elem.answer}</p>
        </div>
    `
    document.body.append(div);
})


const btnElts = document.querySelectorAll(".btn-info"); 

btnElts.forEach(btn => {
    btn.addEventListener("click",e => {
        [...document.querySelectorAll(".info:not(.hidden)")].
            filter(elem => !elem.closest(".card").contains(btn)).
            forEach(elem => {
                toggleElem(elem.closest(".card").
                querySelector(".btn-info"))
            });
        toggleElem(btn);
    });
    
})

function toggleElem(btn) {
    btn.closest(".card").querySelector(".info").classList.toggle("hidden");
    btn.querySelector("i").classList.toggle("fa-minus-circle");
    btn.querySelector("i").classList.toggle("fa-plus-circle");
}