/*Back*/
const backBtn = document.querySelector(".back");

backBtn.addEventListener("click", () => {
    window.location.href="index.html";
})

/*FAQ accordion*/
const questions = document.querySelectorAll(".question");

questions.forEach(question => {
  question.addEventListener("pointerdown", e => {
    if (!e.target.closest(".question")) return;
    e.preventDefault();

    question.parentElement.classList.toggle("open");
  });
});

