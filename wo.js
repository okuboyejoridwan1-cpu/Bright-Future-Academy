// =================================
// BRIGHT FUTURE ACADEMY
// Main JavaScript
// =================================

// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

// AUTOMATIC COPYRIGHT YEAR

document.querySelector("#year").textContent = new Date().getFullYear();

// CONTACT FORM

const contactForm = document.querySelector("#contact-form");

const feedback = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", (event) => {
  // Prevent the browser from reloading the page.
  event.preventDefault();

  // Collect the form information.
  const formData = new FormData(contactForm);

  const name = String(formData.get("name") || "").trim();

  // Display a confirmation message.
  feedback.textContent =
    `Thanks, ${name}! Your message has been entered successfully. ` +
    `This demo form is not connected to an email service yet.`;

  // Clear the form fields.
  contactForm.reset();
});
