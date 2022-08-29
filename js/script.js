let input = document.getElementById("input");
let button = document.getElementById("button");
let greet = document.getElementById("greet");

// function to greet user (homepage)
button.addEventListener("click", greetingUser);

function greetingUser() {
  greet.textContent = `Nice to meet you, ${input.value}!`
}
