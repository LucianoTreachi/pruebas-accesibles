// DOM ELEMENTS
// ------------

// dialog
const openDialogButton = document.getElementById("open-dialog-button");
const closeDialogButton = document.getElementById("close-dialog-button");
const dialogModal = document.getElementById("dialog-modal");

// details
const details = document.querySelectorAll('.details');

// fieldset + legend
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById("submit-button");


// <dialog>
// --------
openDialogButton.addEventListener("click", () => {
  dialogModal.showModal();
})

closeDialogButton.addEventListener("click", () => {
  dialogModal.close();
})


// <details>
// --------
details.forEach(detail => {
  detail.addEventListener('keydown', function (event) {
    const summary = detail.querySelector('summary');

    // Agregar funcionalidad para tecla Escape
    if (event.key === "Escape" && detail.open) {
      detail.open = false;
      summary.focus();
    }
  });
});

// <fieldset> + <legend>
// --------------------
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
});