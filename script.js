const questions = Array.from(document.getElementsByClassName('question'));

function toggleQuestion(question) {
  // close if any question alreaedy opened
  questions.forEach((q) => {
    let openedQuestion = q.nextElementSibling;
    let currentImg = q.querySelector('span img');
    if (openedQuestion.style.display === 'block' && q !== question) {
      console.log('clicked')
      openedQuestion.style.display = 'none';
      q.classList.remove('active');
      currentImg['src'] = '/assets/images/icon-plus.svg';
    }
  });

  // toggle questions
  let answer = question.nextElementSibling;
  let img = question.querySelector('span img');

  if (answer.style.display === 'block') {
    answer.style.display = 'none';
    img['src'] = '/assets/images/icon-plus.svg';
    question.classList.remove('active');
  } else {
    answer.style.display = 'block';
    img['src'] = '/assets/images/icon-minus.svg';
    question.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  questions.forEach((question) => {
    question.addEventListener('click', function () {
      toggleQuestion(this);
    });
  });
});

// function toggleAnswer(question) {
//   const answer = question.nextElementSibling;

//   if (answer.style.display === 'block') {
//     answer.style.display = 'none';
//   } else {
//     answer.style.display = 'block';
//   }
// }

// document.addEventListener('DOMContentLoaded', function () {
//   const questions = document.getElementsByClassName('question');

//   for (let i = 0; i < questions.length; i++) {
//     questions[i].addEventListener('click', function () {
//       toggleAnswer(this);
//     });
//   }
// });

// console.log(window);
