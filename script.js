document.addEventListener("DOMContentLoaded", () => {
  const projectBlocks = document.querySelectorAll(".project-block");
  const descriptionContainer = document.getElementById("description");

  projectBlocks.forEach(block => {
    block.addEventListener("click", () => {
      const fileName = block.getAttribute("data-file");
      
      // Fetch the corresponding HTML file
      fetch(fileName)
        .then(response => response.text())
        .then(data => {
          descriptionContainer.innerHTML = data;
          descriptionContainer.scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => console.error("Error loading file:", error));
    });
  });
});
