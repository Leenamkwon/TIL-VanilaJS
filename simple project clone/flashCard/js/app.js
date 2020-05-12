// event listeners
function eventListeners() {
  const showBtn = document.getElementById('show-btn');
  const questionCard = document.querySelector('.question-card');
  const closeBtn = document.querySelector('.close-btn');
  const form = document.getElementById('question-form');
  const feedback = document.querySelector('.feedback');
  const questionInput = document.getElementById('question-input');
  const answerInput = document.getElementById('answer-input');
  const questionList = document.getElementById('questions-list');
  let data = [];
  let id = 1;

  // 1. new ui instance
  const ui = new UI();

  // 1.1 show question form
  showBtn.addEventListener('click', () => {
    ui.showQuestion(questionCard);
  });

  // 1.2 hide question form
  closeBtn.addEventListener('click', () => {
    ui.closeQuestion(questionCard);
  });

  // 1.3 input
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    if (questionValue === '' || answerValue === '') {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.textContent = '값이 비었습니다.';

      setTimeout(() => {
        feedback.classList.remove('alert-danger', 'showItem');
      }, 1000);
    } else {
      // 1.5 displayItems
      const question = new Question(id, questionValue, answerValue);
      data.push(question);
      id += 1;
      ui.addQuestion(questionList, question);
      ui.clearFiedls(questionValue, answerValue);
    }
  });
  // work with a question
  questionList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;
    const text = document.querySelector('.show-answer');

    if (target.classList.contains('delete-flashcard')) {
      const removeChild = e.target.parentElement.parentElement.parentElement;
      questionList.removeChild(removeChild);
    } else if (target.classList.contains('show-answer')) {
      e.target.nextElementSibling.classList.toggle('showItem');
    }
  });
}

// 2. question constructor
function UI() {}

// show form
UI.prototype.showQuestion = function (questionCard) {
  questionCard.style.display = 'block';
};

// hide form
UI.prototype.closeQuestion = function (questionCard) {
  questionCard.style.display = 'none';
};

// add question
UI.prototype.addQuestion = function (element, question) {
  const div = document.createElement('div');
  div.classList.add('col-md-4');
  div.innerHTML = `    <div class="card card-body flashcard my-3">
  <h4 class="text-capitalize">${question.title}</h4>
  <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
  <h5 class="answer mb-3">${question.answer}</h5>
  <div class="flashcard-btn d-flex justify-content-between">

   <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id=${question.id}>edit</a>
   <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
  </div>
 </div>`;
  element.appendChild(div);
};

// clear Fiedls
UI.prototype.clearFiedls = function (question, answer) {
  question.value = '';
  answer.value = '';
};

// 1.4 question constructor
function Question(id, title, answer) {
  this.id = id;
  this.title = title;
  this.answer = answer;
}

// 0. dom event listener
document.addEventListener('DOMContentLoaded', () => {
  eventListeners();
});