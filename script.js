const  quizDB = [
    {
        question: " Q1: Who invented javascript?",
        a: "Tim Berners-Lee",
        b: " Brandan Eich ",
        c: "Håkon Wium",
        d: "Charles Babbage",
        ans: "ans2"
    },

    {
        question: " Q2: Who was father of cricket?",
        a: "William Gilbert Grace",
        b: "Steve Smith",
        c: "Virat Kholi",
        d: "Chris Gayle",
        ans: "ans1"
    },

    {
        question: " Q3: Who was head of chipko movement",
        a: "Vimla Bahuguna",
        b: "Bachni Devi ",
        c: "Chandi Prasad Bhatt",
        d: "Sunderlal Bahuguna",
        ans: "ans4"
    },

    {
        question: " Q4: Who invented maths",
        a: "Karl Benz",
        b: "bill gates",
        c: "Sumerians",
        d: "Isaac Newton's",
        ans: "ans3"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0; 
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

   question.innerText = questionList.question;

   option1.innerText = questionList.a;
   option2.innerText = questionList.b;  
   option3.innerText = questionList.c;
   option4.innerText = questionList.d;
}



loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        };
    });
    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{

        showScore.innerHTML = `<h3>You Scored  ${score}/${quizDB.length}  </h3> <button class="btn" onclick="location.reload()">Play Agian</button>`;

        showScore.classList.remove('scoreArea');

    };

});