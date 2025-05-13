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

    // ========================
  // Educación y certificados
  // ========================

  const educationContainer = document.getElementById("education-container");
  const educationList = document.getElementById("cv-education-list");
  const addEducationBtn = document.querySelector(".add-education-btn");

  function updateEducationList() {
    educationList.innerHTML = "";
    const educationInputs = educationContainer.querySelectorAll(".education-input");
    educationInputs.forEach(input => {
      if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value.trim();
        educationList.appendChild(li);
      }
    });
  }

  function createEducationItem() {
    const item = document.createElement("div");
    item.classList.add("education-item");

    const input = document.createElement("input");
    input.type = "text";
    input.className = "education-input";
    input.placeholder = "Ej: Diplomado en Data Science - Universidad X, 2023";
    input.addEventListener("input", updateEducationList);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "remove-education-btn";
    removeBtn.innerHTML = `<img src="components/icons/trash-off.svg" alt="Eliminar" width="16" height="16" />`;
    removeBtn.addEventListener("click", () => {
      item.remove();
      updateEducationList();
    });

    item.appendChild(input);
    item.appendChild(removeBtn);

    return item;
  }

  // Agregar campo al hacer clic en +
  addEducationBtn.addEventListener("click", () => {
    const newItem = createEducationItem();
    educationContainer.appendChild(newItem);
  });

  // Inicializar inputs existentes
  educationContainer.querySelectorAll(".education-input").forEach(input => {
    input.addEventListener("input", updateEducationList);
  });

  educationContainer.querySelectorAll(".remove-education-btn").forEach(button => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      updateEducationList();
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