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
   
    const cvElement = document.getElementById("cv-preview");

    const opt = {
      margin:         0.5,
      filename:       'mi_cv.pdf',
      image:          {type: 'jpeg', quality: 0.98 },
      html2canvas:    {scale:2},
      jsPDF:          {unit: 'in', format: 'letter', orientation: 'portrait'}
    };

    html2pdf().set(opt).from(cvElement).save();
  });
});