const cvData = JSON.parse(localStorage.getItem("cvData"));

if (cvData) {
  document.getElementById("cv-name").textContent = `${cvData.nombre} ${cvData.apellidoPaterno} ${cvData.apellidoMaterno}`;
  document.getElementById("cv-email").textContent = cvData.email;
  document.getElementById("cv-phone").textContent = cvData.phone;
  document.getElementById("cv-summary").textContent = cvData.summary;
  document.getElementById("cv-experience").textContent = cvData.experience;
  document.getElementById("cv-education").textContent = cvData.education;
  document.getElementById("cv-skills").textContent = cvData.skills;
} else {
  document.body.innerHTML = "<p>❌ No se encontraron datos del formulario. Vuelve a completarlo en la página principal.</p>";
}
