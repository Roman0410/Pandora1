let index = 0;
const redirect = document.querySelectorAll(".redirect");
const questionsSlide = document.querySelectorAll(".question");
const nextBtn = document.querySelectorAll(".answer");
// console.log(questionsSlide);

const prepareQuestion = (n) => {
  for (interview of questionsSlide) {
    interview.classList.remove("active-question");
  }
  questionsSlide[n].classList.add("active-question");
};
function nextQuestion() {
  const block = this.previousElementSibling;
  let isChecked = false;
  $("html, body").animate(
    {
      scrollTop: parseInt($(".active-question").offset().top - 100),
    },
    0
  );

  index++;
  prepareQuestion(index);
}

nextBtn.forEach((element) => {
  element.addEventListener("click", nextQuestion.bind(element));
});

// function page() {
//   window.location.href = "http://stackoverflow.com";
// }
// redirect.forEach((button) => {
//   button.addEventListener("click", page());
// });
document.getElementById("redirect").onclick = function () {
  window.location.href = "vnm45rtghost.com";
};
document.getElementById("redirect1").onclick = function () {
  window.location.href = "vnm45rtghost.com";
};
