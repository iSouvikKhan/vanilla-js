// document.addEventListener("DOMContentLoaded", function () {
//   const dropzone = document.getElementById("dropzone");
//   const fileInput = document.getElementById("fileInput");
//   const fileList = document.getElementById("fileList");
//   const MAX_IMAGES = 5;
//   const MAX_SIZE = 1 * 1024 * 1024;

//   // Load images from localStorage upon page load
//   loadFromLocalStorage();

//   dropzone.addEventListener("click", () => fileInput.click());

//   dropzone.addEventListener("dragover", (event) => {
//     event.preventDefault();
//     dropzone.classList.add("dragging");
//   });

//   dropzone.addEventListener("dragleave", () => {
//     dropzone.classList.remove("dragging");
//   });

//   dropzone.addEventListener("drop", (event) => {
//     event.preventDefault();
//     dropzone.classList.remove("dragging");
//     handleFiles(event.dataTransfer.files);
//   });

//   fileInput.addEventListener("change", (event) => {
//     handleFiles(event.target.files);
//   });

//   function handleFiles(files) {
//     for (let i = 0; i < files.length; i++) {
//       if (fileList.children.length >= MAX_IMAGES) {
//         alert(`Maximum images allowed is ${MAX_IMAGES}. ${asd} won't be added.`);
//         break;
//       }
//       validateAndPreviewFile(files[i]);
//     }
//   }

//   function validateAndPreviewFile(file) {
//     if (file.size > MAX_SIZE) {
//       alert('File size exceeds 1 MB.');
//       return;
//     }

//     displayFile(file);
//   }

//   function displayFile(file) {
//     const reader = new FileReader();
//     reader.onload = function (e) {
//       const div = document.createElement("div");
//       div.className = "file-entry";

//       const img = document.createElement("img");
//       img.src = e.target.result;
//       img.alt = file.name;
//       img.className = "thumbnail";

//       const input = document.createElement("input");
//       input.type = "text";
//       input.placeholder = "Enter description";
//       input.className = "description-input";

//       const saveButton = document.createElement("button");
//       saveButton.innerHTML = "&#x2714;"; // Checkmark icon
//       saveButton.className = "save-button";

//       const deleteButton = document.createElement("button");
//       deleteButton.innerHTML = "&#x2716;"; // Cross icon
//       deleteButton.className = "delete-button";

//       div.appendChild(img);
//       div.appendChild(input);
//       div.appendChild(saveButton);
//       div.appendChild(deleteButton);
//       fileList.appendChild(div);

//       saveButton.addEventListener("click", function () {
//         if (input.value.trim() === "") {
//           alert("Description cannot be empty.");
//           return;
//         }
//         input.disabled = true;
//         saveButton.disabled = true;
//         saveButton.style.cursor = "default";
//         alert("Description added.");

//         // Save to localStorage
//         saveToLocalStorage();
//       });

//       deleteButton.addEventListener("click", function () {
//         fileList.removeChild(div);
//         saveToLocalStorage(); // Update localStorage after deleting
//       });
//     };
//     reader.readAsDataURL(file);
//   }

//   // Save data to localStorage
//   function saveToLocalStorage() {
//     const storedImagesData = [];
//     const entries = document.querySelectorAll('.file-entry');
//     entries.forEach(entry => {
//       const img = entry.querySelector('img').src;
//       const description = entry.querySelector('input').value;
//       const isDisabled = entry.querySelector('input').disabled;
//       storedImagesData.push({ src: img, description: description, disabled: isDisabled });
//     });
//     localStorage.setItem("storedImagesData", JSON.stringify(storedImagesData));
//   }

//   // Load data from localStorage
//   function loadFromLocalStorage() {
//     const storedImagesData = JSON.parse(localStorage.getItem("storedImagesData") || "[]");
//     storedImagesData.forEach(data => {
//       const div = document.createElement("div");
//       div.className = "file-entry";

//       const img = document.createElement("img");
//       img.src = data.src;
//       img.alt = "stored image";
//       img.className = "thumbnail";

//       const input = document.createElement("input");
//       input.type = "text";
//       input.value = data.description;
//       input.className = "description-input";
//       input.disabled = data.disabled;

//       const saveButton = document.createElement("button");
//       saveButton.innerHTML = "&#x2714;"; // Checkmark icon
//       saveButton.className = "save-button";
//       saveButton.disabled = data.disabled;
//       saveButton.style.cursor = data.disabled ? "default" : "pointer";

//       const deleteButton = document.createElement("button");
//       deleteButton.innerHTML = "&#x2716;"; // Cross icon
//       deleteButton.className = "delete-button";

//       div.appendChild(img);
//       div.appendChild(input);
//       div.appendChild(saveButton);
//       div.appendChild(deleteButton);
//       fileList.appendChild(div);

//       saveButton.addEventListener("click", function () {
//         if (input.value.trim() === "") {
//           alert("Description cannot be empty.");
//           return;
//         }
//         input.disabled = true;
//         saveButton.disabled = true;
//         saveButton.style.cursor = "default";
//         alert("Description added");

//         // Save to localStorage
//         saveToLocalStorage();
//       });

//       deleteButton.addEventListener("click", function () {
//         fileList.removeChild(div);
//         saveToLocalStorage(); // Update localStorage after deleting
//       });
//     });
//   }


// });



document.addEventListener("DOMContentLoaded", function () {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("fileInput");
  const fileList = document.getElementById("fileList");
  const MAX_IMAGES = 5;
  const MAX_SIZE = 1 * 1024 * 1024;

  // Load images from localStorage upon page load
  loadFromLocalStorage();

  dropzone.addEventListener("click", () => fileInput.click());

  dropzone.addEventListener("dragover", (event) => {
    event.preventDefault();
    dropzone.classList.add("dragging");
  });

  dropzone.addEventListener("dragleave", () => {
    dropzone.classList.remove("dragging");
  });

  dropzone.addEventListener("drop", (event) => {
    event.preventDefault();
    dropzone.classList.remove("dragging");
    handleFiles(event.dataTransfer.files);
  });

  fileInput.addEventListener("change", (event) => {
    handleFiles(event.target.files);
  });

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      if (fileList.children.length >= MAX_IMAGES) {
        alert(`Maximum images allowed is ${MAX_IMAGES}. ${files[i].name} won't be added.`);
        break;
      }
      validateAndPreviewFile(files[i]);
    }
  }

  function validateAndPreviewFile(file) {
    if (file.size > MAX_SIZE) {
      alert('File size exceeds 1 MB.');
      return;
    }

    displayFile(file);
  }

  function displayFile(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const div = document.createElement("div");
      div.className = "file-entry";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = file.name;
      img.className = "thumbnail";

      const textarea = document.createElement("textarea");
      textarea.placeholder = "Enter description";
      textarea.className = "description-input";

      const saveButton = document.createElement("button");
      saveButton.innerHTML = "&#x2714;"; // Checkmark icon
      saveButton.className = "save-button";

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&#x2716;"; // Cross icon
      deleteButton.className = "delete-button";

      div.appendChild(img);
      div.appendChild(textarea);
      div.appendChild(saveButton);
      div.appendChild(deleteButton);
      fileList.appendChild(div);

      saveButton.addEventListener("click", function () {
        if (textarea.value.trim() === "") {
          alert("Description cannot be empty.");
          return;
        }
        textarea.disabled = true;
        saveButton.disabled = true;
        saveButton.style.cursor = "default";
        alert("Description added.");

        // Save to localStorage
        saveToLocalStorage();
      });

      deleteButton.addEventListener("click", function () {
        fileList.removeChild(div);
        saveToLocalStorage(); // Update localStorage after deleting
      });
    };
    reader.readAsDataURL(file);
  }

  // Save data to localStorage
  function saveToLocalStorage() {
    const storedImagesData = [];
    const entries = document.querySelectorAll('.file-entry');
    entries.forEach(entry => {
      const img = entry.querySelector('img').src;
      const description = entry.querySelector('textarea').value;
      const isDisabled = entry.querySelector('textarea').disabled;
      storedImagesData.push({ src: img, description: description, disabled: isDisabled });
    });
    localStorage.setItem("storedImagesData", JSON.stringify(storedImagesData));
  }

  // Load data from localStorage
  function loadFromLocalStorage() {
    const storedImagesData = JSON.parse(localStorage.getItem("storedImagesData") || "[]");
    storedImagesData.forEach(data => {
      const div = document.createElement("div");
      div.className = "file-entry";

      const img = document.createElement("img");
      img.src = data.src;
      img.alt = "stored image";
      img.className = "thumbnail";

      const textarea = document.createElement("textarea");
      textarea.value = data.description;
      textarea.className = "description-input";
      textarea.disabled = data.disabled;

      const saveButton = document.createElement("button");
      saveButton.innerHTML = "&#x2714;"; // Checkmark icon
      saveButton.className = "save-button";
      saveButton.disabled = data.disabled;
      saveButton.style.cursor = data.disabled ? "default" : "pointer";

      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "&#x2716;"; // Cross icon
      deleteButton.className = "delete-button";

      div.appendChild(img);
      div.appendChild(textarea);
      div.appendChild(saveButton);
      div.appendChild(deleteButton);
      fileList.appendChild(div);

      saveButton.addEventListener("click", function () {
        if (textarea.value.trim() === "") {
          alert("Description cannot be empty.");
          return;
        }
        textarea.disabled = true;
        saveButton.disabled = true;
        saveButton.style.cursor = "default";
        alert("Description added");

        // Save to localStorage
        saveToLocalStorage();
      });

      deleteButton.addEventListener("click", function () {
        fileList.removeChild(div);
        saveToLocalStorage(); // Update localStorage after deleting
      });
    });
  }
});
