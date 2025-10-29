const input = document.createElement("input");
input.type = "text";
input.placeholder = "Введіть запитання";
document.body.appendChild(input);
const ball = document.createElement("div");
ball.className = "ball";
document.body.appendChild(ball);
const answer = document.createElement("div");
answer.className = "answer";
answer.textContent = "?";
ball.appendChild(answer);
const button = document.createElement("button");
button.textContent = "Відповідь";
document.body.appendChild(button);
const answers = ["Так", "Ні", "Можливо", "Напевно", "Спробуй ще раз", "Сумнівно"];
button.addEventListener("click", () => {
  let question = input.value.trim();
  if (question === "") {
    alert("Введіть запитання!");
    return;
  }
  if (!question.endsWith("?")) {
    question += "?";
  }
  input.value = question; 
  const random = Math.floor(Math.random() * answers.length);
  answer.textContent = answers[random];
});
