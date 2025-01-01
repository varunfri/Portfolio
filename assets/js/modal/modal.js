// This is used for in-page modal view, while we click on image/more info button

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalDescription = document.getElementById("modal-description");
    const modalTechnologies = document.getElementById("modal-technologies");
    const modalLink = document.getElementById("modal-link");
    const closeModal = document.querySelector(".close");

    // Open modal on project click
    document.querySelectorAll(".project").forEach((project) => {
        project.addEventListener("click", () => {
            const projectData = JSON.parse(project.getAttribute("data-project"));
            
            // Populate modal with project data
            modalTitle.textContent = projectData.title;
            modalImage.src = projectData.image;
            modalDescription.textContent = projectData.description;
            modalTechnologies.textContent = projectData.technologies;
            modalLink.href = projectData.link;

            // Show modal
            modal.style.display = "flex";
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
