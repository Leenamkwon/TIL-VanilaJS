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

