document.addEventListener("DOMContentLoaded", function () {
  const dropzone = document.getElementById("dropzone");
  const fileInput = document.getElementById("fileInput");
  const fileList = document.getElementById("fileList");
  const MAX_IMAGES = 5;
  const MAX_SIZE = 1 * 1024 * 1024;

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
                alert(`You can only upload up to ${MAX_IMAGES} images.`);
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
      div.className = "file-name";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = file.name;
      img.className = "thumbnail";
      div.appendChild(img);
      fileList.appendChild(div);

      //Complete the function here
    };
    reader.readAsDataURL(file);
  }

  //Function to load the data from localStorage
  function loadFromLocalStorage() {
    const storedImagesData = JSON.parse(
      localStorage.getItem("storedImagesData") || "[]"
    );
    console.log("Loaded from localStorage:", storedImagesData);
    storedImagesData.forEach((data) => {
      const div = document.createElement("div");
      div.className = "file-name";

      const img = document.createElement("img");
      img.src = data.src;
      img.className = "thumbnail";
      div.appendChild(img);

      // Write rest of the code here
    });
  }


});
