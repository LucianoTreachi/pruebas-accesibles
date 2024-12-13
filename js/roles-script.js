// DOM ELEMENTS
// ------------

// role tablist + aria-selected
const tabs = document.querySelectorAll('[role="tab"]');
const tabContents = document.querySelectorAll('[role="tabpanel"]');

// role alert
const roleAlertButton = document.getElementById("role-alert-button");
const passwordInput = document.getElementById("input6");
const passwordAlert = document.getElementById("password-alert");

// role menu
const roleMenuButton = document.getElementById("role-menu-button");
const menu3 = document.getElementById("menu3");

// Modals
const openModalButton = document.querySelectorAll(".open-modal-button");
const modalOverlay = document.querySelectorAll(".modal-overlay");
const modal = document.querySelectorAll(".modal");
const modalTitle = document.querySelectorAll(".modal-title");
const modalParagraph = document.querySelectorAll(".modal-paragraph");
const cancelModalButton = document.querySelectorAll(".cancel-modal-button");
const confirmModalButton = document.querySelectorAll(".confirm-modal-button");


// role tablist + aria-selected
// ----------------------------
tabs.forEach((tab, index) => {
  function activateTab() {
    tabs.forEach(t => {
      t.setAttribute('aria-selected', 'false');
    });
    tabContents.forEach(content => content.setAttribute('aria-hidden', 'true'));

    tab.setAttribute('aria-selected', 'true');
    tabContents[index].setAttribute('aria-hidden', 'false');
  }

  tab.addEventListener('click', activateTab);
});


// role alert
// ----------
roleAlertButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (passwordInput.value != "2525" || passwordInput.value === "") {
    passwordAlert.style.display = "block";
  } else {
    window.location.href = "index";
  }
});


// role menu y role menuitem
// -------------------------
roleMenuButton.addEventListener("click", () => {
  menu3.hidden = !menu3.hidden;
});


// role dialog
// -----------
function openModalDialog() {
  modalOverlay[0].classList.add("show");
  modal[0].classList.add("show");
  confirmModalButton[0].focus();
}

function closeModalDialog() {
  modalOverlay[0].classList.remove("show");
  modal[0].classList.remove("show");
  openModalButton[0].focus();
}

openModalButton[0].addEventListener("click", openModalDialog);
cancelModalButton[0].addEventListener("click", closeModalDialog);
confirmModalButton[0].addEventListener("click", closeModalDialog);


// role alertdialog
// ----------------
function openModalAlertDialog() {
  modalOverlay[1].classList.add("show");
  modal[1].classList.add("show");
  cancelModalButton[1].focus();
}

function closeModalAlertDialog() {
  modalOverlay[1].classList.remove("show");
  modal[1].classList.remove("show");
  openModalButton[1].focus();
}

openModalButton[1].addEventListener("click", openModalAlertDialog);
cancelModalButton[1].addEventListener("click", closeModalAlertDialog);
confirmModalButton[1].addEventListener("click", closeModalAlertDialog);