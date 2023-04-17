function loadImage(event) {
    const imagePreviewContainer = document.getElementById("image-preview-container");
    const file = event.target.files[0];
    const imageType = /^image\//;
    if (!imageType.test(file.type)) {
        showError("Please select an image file.");
        return;
    }
    const img = document.createElement("img");
    img.classList.add("image-preview");
    img.file = file;
    img.setAttribute("download", file.name); // Add download attribute
    imagePreviewContainer.innerHTML = "";
    imagePreviewContainer.appendChild(img);
    const reader = new FileReader();
    reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
    reader.readAsDataURL(file);
}


function showError(message) {
    const alertContainer = document.createElement("div");
    alertContainer.classList.add("alert");
    alertContainer.innerText = message;
    document.body.insertBefore(alertContainer, document.body.firstChild);
    setTimeout(function() { alertContainer.remove(); }, 5000);
}