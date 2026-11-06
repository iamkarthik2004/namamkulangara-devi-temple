const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = [...document.querySelectorAll(".nav-link")];

const bookingModal = document.getElementById("bookingModal");
const bookingClose = bookingModal.querySelector(".modal-close");
const ekanikkaModal = document.getElementById("ekanikkaModal");
const ekanikkaClose = ekanikkaModal.querySelector(".ekanikka-close");
const openEkanikkaButton = document.getElementById("openEkanikka");
const copyUpiButton = document.getElementById("copyUpi");

document.getElementById("year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function openModal(modal) {
  // Close the other overlay first so only one dialog is active.
  [bookingModal, ekanikkaModal].forEach((item) => {
    item.classList.remove("open");
    item.setAttribute("aria-hidden", "true");
  });
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close")?.focus();
}

function closeModal(modal) {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  if (!bookingModal.classList.contains("open") && !ekanikkaModal.classList.contains("open")) {
    document.body.style.overflow = "";
  }
}

document.querySelectorAll(".js-open-booking").forEach((button) => {
  button.addEventListener("click", () => openModal(bookingModal));
});
bookingClose.addEventListener("click", () => closeModal(bookingModal));
openEkanikkaButton.addEventListener("click", () => openModal(ekanikkaModal));
ekanikkaClose.addEventListener("click", () => closeModal(ekanikkaModal));

[bookingModal, ekanikkaModal].forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal(modal);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal(bookingModal);
    closeModal(ekanikkaModal);
  }
});

copyUpiButton.addEventListener("click", async () => {
  const upiText = document.getElementById("upiValue").textContent.trim();
  const originalLabel = copyUpiButton.textContent;
  try {
    await navigator.clipboard.writeText(upiText);
    copyUpiButton.textContent = "Copied";
  } catch {
    copyUpiButton.textContent = "Select UPI";
  }
  window.setTimeout(() => { copyUpiButton.textContent = originalLabel; }, 1600);
});

// Reveal content as it enters the viewport.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

// Highlight the navigation item for the section currently in view.
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const activeId = entry.target.id;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${activeId}`);
      });
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
