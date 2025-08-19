// contact.js
// Week 4: Real-time validation + confirmation modal

// Helper: basic sanitiser to avoid injecting HTML into the modal
function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Validators
function validateName(value) {
  if (!value.trim()) return "Name is required.";
  // Letters, spaces, apostrophes, hyphens
  const nameOK = /^[A-Za-z\s'-]+$/.test(value.trim());
  return nameOK ? "" : "Name can only contain letters, spaces, apostrophes, or hyphens.";
}

function validateEmail(value) {
  if (!value.trim()) return "Email is required.";
  // Simple email check
  const emailOK = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  return emailOK ? "" : "Please enter a valid email address.";
}

function validateMessage(value) {
  const text = value.trim();
  if (!text) return "Message is required.";
  if (text.length < 10) return "Message must be at least 10 characters.";
  return "";
}

// Show/clear errors
function showError(el, msg) {
  el.textContent = msg;
  if (msg) {
    el.previousElementSibling?.classList?.add("input-invalid");
  } else {
    el.previousElementSibling?.classList?.remove("input-invalid");
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Real-time validation
  nameInput.addEventListener("input", () => {
    showError(nameError, validateName(nameInput.value));
  });

  emailInput.addEventListener("input", () => {
    showError(emailError, validateEmail(emailInput.value));
  });

  messageInput.addEventListener("input", () => {
    showError(messageError, validateMessage(messageInput.value));
  });

  // Submit handling
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default submission

    const nameMsg = validateName(nameInput.value);
    const emailMsg = validateEmail(emailInput.value);
    const messageMsg = validateMessage(messageInput.value);

    showError(nameError, nameMsg);
    showError(emailError, emailMsg);
    showError(messageError, messageMsg);

    // If any error message exists, stop
    if (nameMsg || emailMsg || messageMsg) return;

    // Otherwise, show modal with details
    const modal = document.getElementById("confirmModal");
    const outName = document.getElementById("outName");
    const outEmail = document.getElementById("outEmail");
    const outMessage = document.getElementById("outMessage");
    const closeBtn = document.getElementById("closeModal");

    outName.textContent = escapeHTML(nameInput.value.trim());
    outEmail.textContent = escapeHTML(emailInput.value.trim());
    outMessage.textContent = escapeHTML(messageInput.value.trim());

    // Open modal
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("is-open");
    closeBtn.focus();

    // Optional: reset the form after showing modal
    form.reset();
    // Clear error states
    showError(nameError, "");
    showError(emailError, "");
    showError(messageError, "");

    // Close handlers
    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    }

    closeBtn.addEventListener("click", closeModal, { once: true });

    // Click outside modal-card closes
    modal.addEventListener("click", (evt) => {
      if (evt.target === modal) closeModal();
    }, { once: true });

    // ESC key closes
    function onEsc(evt) {
      if (evt.key === "Escape") {
        closeModal();
        document.removeEventListener("keydown", onEsc);
      }
    }
    document.addEventListener("keydown", onEsc);
  });
});
