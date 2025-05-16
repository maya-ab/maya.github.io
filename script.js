document.addEventListener("DOMContentLoaded", () => {
  const projectBlocks = document.querySelectorAll(".project-block");
  const descriptionContainer = document.getElementById("description");
  let activeBlock = null;

  projectBlocks.forEach(block => {
      block.addEventListener("click", () => {
          const fileName = block.getAttribute("data-file");
          // Fetch the corresponding HTML file
          fetch(fileName)
              .then(response => response.text())
              .then(data => {
                  descriptionContainer.innerHTML = data;
                  descriptionContainer.scrollIntoView({ behavior: "smooth" });
                  descriptionContainer.style.display = "block";

                  // Remove active state from the previously active block
                  if (activeBlock && activeBlock !== block) {
                      activeBlock.classList.remove("active");
                  }
                  // Set the clicked block as active
                  block.classList.add("active");
                  activeBlock = block;
              })
              .catch(error => console.error("Error loading file:", error));
      });
  });
});
