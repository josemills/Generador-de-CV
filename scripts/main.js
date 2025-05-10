document.addEventListener('DOMContentLoaded',() => {
  const inputs = document.querySelectorAll("[data-target]");

  inputs.forEach(input => {
    input.addEventListener("input", () => {
      const targetId = input.dataset.target;
      const targetElement = document.getElementById(targetId);
      
      
      if (targetElement) {
        targetElement.textContent = input.value;
      }
    });
  });

  const form = document.querySelector(".cv-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("CV listo para descargar");
  });
});