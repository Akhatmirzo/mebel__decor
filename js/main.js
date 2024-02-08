//todo Contact form group selectors
const visitorsForm = document.getElementById("visitors__form");
const participantsForm = document.getElementById("participants__form");
// BTn
const visitorBtn = document.getElementById("visitorBtn");
const participantsBtn = document.getElementById("participantsBtn");
// All btn
const allBtn = document.querySelectorAll(".contact__form-group-btn button");

// Contact form element replace
visitorBtn.addEventListener("click", function () {
  allBtn.forEach((btn) => {
    btn.classList.remove("form-group-active");
  });
  visitorBtn.classList.add("form-group-active");

  participantsForm.style.display = "none";
  visitorsForm.style.display = "block";
});

participantsBtn.addEventListener("click", function () {
  allBtn.forEach((btn) => {
    btn.classList.remove("form-group-active");
  });
  participantsBtn.classList.add("form-group-active");

  participantsForm.style.display = "block";
  visitorsForm.style.display = "none";
});

// Observer click text replace
const observerRegister = document.querySelector(".observer__register");
const observerparticipant = document.querySelector(".observer__participants");
const observerUseful = document.querySelector(".observer__useful");

//observerBtn
const observerBtn = document.querySelector(".observerBtn");

const textContent = [observerRegister, observerparticipant, observerUseful];
for (let i = 0; i < observerBtn.children.length; i++) {
  observerBtn.children[i].addEventListener("click", function () {
    for (const btn of observerBtn.children) {
      btn.classList.remove("observerBtnActive");
    }

    for (const text of textContent) {
      text.style.display = "none";
    }

    textContent[i].style.display = "block";

    observerBtn.children[i].classList.add("observerBtnActive");
  });
}

// Navbar
const navbarList = document.querySelector(".nav_list");
const menuBars = document.getElementById("menu_bars");
const hamburgerBtn = document.getElementById("hamburgerBtn");

hamburgerBtn.addEventListener("click", () => {
  navbarList.classList.toggle("navbar__active");

  if (navbarList.classList.contains("navbar__active")) {
    hamburgerBtn.innerHTML = `
            <i id="menu_bars" class="fa-solid fa-xmark"></i>
        `;
  } else {
    hamburgerBtn.innerHTML = `
            <i id="menu_bars" class="fa-solid fa-bars"></i>
        `;
  }
});

function closeModModal() {
  navbarList.classList.remove("navbar__active");
  hamburgerBtn.innerHTML = `
        <i id="menu_bars" class="fa-solid fa-bars"></i>
  `;
}
document.onscroll = closeModModal;

// language
// Function to set input placeholders based on selected language
function setPlaceholderText(language) {
  const languagePlaceholders = placeholders[language];
  if (languagePlaceholders) {
    // Set placeholders for each input element
    Object.keys(languagePlaceholders).forEach((key) => {
      const inputElements = document.querySelectorAll(`#${key}`);
      if (inputElements.length > 0) {
        inputElements.forEach((input) => {
          input.placeholder = languagePlaceholders[key];
        });
      }
    });
  }
}

// language
// Function to set input placeholders based on selected language
function setPlaceholderText(language) {
  const languagePlaceholders = placeholders[language];
  if (languagePlaceholders) {
    // Set placeholders for each input element
    Object.keys(languagePlaceholders).forEach((key) => {
      const inputElements = document.querySelectorAll(`#${key}`);
      if (inputElements.length > 0) {
        inputElements.forEach((input) => {
          input.placeholder = languagePlaceholders[key];
        });
      }
    });
  }
}

const changeLang = function () {
  let language = this.value || localStorage.getItem("lang");
  if (!this.value && !localStorage.getItem("lang")) return;

  document.querySelectorAll("[data-lang]").forEach((element) => {
    if (lang[language][element.getAttribute("data-lang")]) {
      element.innerHTML = lang[language][element.getAttribute("data-lang")];
    }
  });

  setPlaceholderText(language);
  closeModModal();

  localStorage.setItem("lang", language);
};

const langSelectEl = document.querySelector("#lang");
langSelectEl.addEventListener("change", changeLang);

changeLang();
langSelectEl.value = localStorage.getItem("lang") || "ru";

// bus_stop_point__list
const busStopPointList = document.querySelector(".busstop__point-content ul");
for (const pointlist of busStopPointList.children) {
  pointlist.addEventListener("click", function () {
    for (const list of busStopPointList.children) {
      list.classList.remove("bus_stop_list-active");
    }

    pointlist.classList.add("bus_stop_list-active");
  });
}

// AOS Animation
AOS.init();

// You can also pass an optional settings object
// below listed default settings

let aosCloseOffset = 120;
if (window.innerWidth < 768) {
  aosCloseOffset = 50;
}

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 100, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 50, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: aosCloseOffset, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});
