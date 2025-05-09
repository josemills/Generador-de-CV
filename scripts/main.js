document.querySelector(".cv-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const cvData = {
    nombre: document.querySelectorAll(".name-input")[0].value,
    apellidoPaterno: document.querySelectorAll(".name-input")[1].value,
    apellidoMaterno: document.querySelectorAll(".name-input")[2].value,
    email: document.querySelector(".email-input").value,
    phone: document.querySelector(".phone-input").value,
    summary: document.querySelector(".summary-input").value,
    experience: document.querySelector(".experience-input").value,
    education: document.querySelector(".education-input").value,
    skills: document.querySelector(".skills-input").value,
  };

  localStorage.setItem("cvData", JSON.stringify(cvData));
  window.open("preview.html", "_blank");
});
