// DOM ELEMENTS
// ------------

// aria-expanded y aria-controls 
const buttonAriaExpanded = document.getElementById("button-aria-expanded");
const menuAriaExpanded = document.getElementById("menu-aria-expanded");

// aria-haspopup
const buttonAriaHasPopup = document.getElementById("button-aria-haspopup");
const menuAriaHasPopup = document.getElementById("menu-aria-haspopup");

// aria-busy
const buttonAriaBusy = document.getElementById("button-aria-busy");

// aria-atomic
const statusContainer = document.getElementById("status-container");
const taskStatus = document.getElementById("task-status");
const toggleButton = document.getElementById("toggle-status");

// aria-live
const ariaLiveButton = document.getElementById("aria-live-button");

// aria-current
const navigationLinks = document.querySelectorAll(".navigation a");

// aria-pressed
const favoriteButton = document.getElementById('favorite-button');

// tabindex -1
const focusButton = document.getElementById("focus-button");
const tabindexParagraph = document.getElementById("tabindex-paragraph");


// aria-expanded y aria-controls 
// -----------------------------
buttonAriaExpanded.addEventListener("click", () => {
  const isExpanded = buttonAriaExpanded.getAttribute("aria-expanded") === "true";
  buttonAriaExpanded.setAttribute("aria-expanded", !isExpanded);
  if (isExpanded) {
    menuAriaExpanded.hidden = true;
  } else {
    menuAriaExpanded.hidden = false;
  }
});


// aria-haspopup
// -------------
buttonAriaHasPopup.addEventListener("click", () => {
  menuAriaHasPopup.hidden = !menuAriaHasPopup.hidden;
});


// aria-busy
// ---------
buttonAriaBusy.addEventListener("click", () => {
  buttonAriaBusy.textContent = "Cargando...";
  buttonAriaBusy.setAttribute("aria-busy", "true");

  setTimeout(() => {
    buttonAriaBusy.textContent = "Ingresar";
    buttonAriaBusy.setAttribute("aria-busy", "false");
  }, 3000);
});


// aria-atomic
// -----------
toggleButton.addEventListener("click", () => {
  if (taskStatus.textContent === "Pendiente") {
    taskStatus.textContent = "Completado";
    taskStatus.style.color = "#76e0a7";
  } else {
    taskStatus.textContent = "Pendiente";
    taskStatus.style.color = "#f8d76c";
  }
});


// aria-live
// -----------
function updateMessage() {
  const liveRegion = document.getElementById('liveRegion');
  liveRegion.innerHTML = `<p>Actualizando el contenido...</p>`;
  liveRegion.style.marginTop = "2rem";

  setTimeout(() => {
    liveRegion.innerHTML = `
    <p>¡Contenido actualizado!</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
    `;
  }, 3000);

  setTimeout(() => {
    liveRegion.innerHTML = '';
    liveRegion.style.marginTop = "0";
  }, 4000);
}
ariaLiveButton.addEventListener("click", updateMessage);


// aria-current
// -----------
navigationLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    navigationLinks.forEach((link) => {
      link.removeAttribute('aria-current');
    });

    link.setAttribute('aria-current', 'page');
  })
});


// aria-pressed
// -------------
favoriteButton.addEventListener('click', () => {
  const isPressed = favoriteButton.getAttribute('aria-pressed') === 'true';
  favoriteButton.setAttribute('aria-pressed', !isPressed);
  favoriteButton.textContent = !isPressed ? 'Favorito' : 'Marcar como favorito';
});


// tabindex -1 
// -----------
focusButton.addEventListener("click", () => {
  tabindexParagraph.setAttribute("tabindex", "-1");
  tabindexParagraph.focus();
});