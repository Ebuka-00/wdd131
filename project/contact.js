const form = document.getElementById("contactForm");
const success = document.getElementById("success");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  success.textContent =
    `Thank you ${name}. Your message has been sent.`;

  form.reset();
});