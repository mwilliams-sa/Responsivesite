// Function to show the subscription popup
function showNewsletterPopup() {
  // Create the popup message
  const popup = document.createElement('div');
  popup.classList.add('popup-box');
  popup.innerHTML = `
    <div class="popup-content">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get monthly updates on new arrivals, events, and book recommendations!</p>
      <button id="close-popup">Close</button>
    </div>
  `;

  // Add popup to the body
  document.body.appendChild(popup);

  // Event listener to close the popup
  document.getElementById('close-popup').addEventListener('click', function() {
    popup.remove();
  });
}

// Trigger the popup after 3 seconds
window.addEventListener('load', function() {
  setTimeout(showNewsletterPopup, 3000);
});
