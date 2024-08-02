document.addEventListener("DOMContentLoaded", function() {
    const typedContainer = document.getElementById("typed-container");
    const items = typedContainer.getAttribute("data-typed-items").split(", ");
    let index = 0;
    let charIndex = 0;
    let currentText = '';
    
    function type() {
        if (charIndex < items[index].length) {
            currentText += items[index][charIndex];
            typedContainer.textContent = currentText;
            charIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(deleteText, 1000); // Pause before deleting
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            currentText = currentText.slice(0, -1);
            typedContainer.textContent = currentText;
            charIndex--;
            setTimeout(deleteText, 50); // Adjust deleting speed here
        } else {
            index = (index + 1) % items.length;
            setTimeout(type, 500); // Pause before starting the next text
        }
    }

    type();
});
