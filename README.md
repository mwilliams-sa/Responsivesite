**What the popup/interaction does**
The script builds a custom newsletter popup with JavaScript (not just a browser alert).

It creates a semi-transparent overlay and a small card with a heading, message, and a Close button.

When the user clicks Close, the popup is removed from the page (so it doesn’t block anything).

**What user action triggers it**
I used an event listener on window for the "load" event.

js
Copy
Edit
window.addEventListener('load', function () {
  setTimeout(showNewsletterPopup, 3000);
});
After the page finishes loading, a 3-second delay runs, then the function showNewsletterPopup() displays the popup.

Inside the popup, another event listener on the Close button removes the popup:

js
Copy
Edit
document.getElementById('close-popup').addEventListener('click', function () {
  popup.remove();
});

**Why I chose that interaction**
A custom popup looks more on-brand than alert() and lets me style it with CSS.

The 3-second delay feels less aggressive than showing it instantly—users see the page first, then the invite.

Using a close button gives control back to the user and keeps the experience friendly.

**Challenges and decisions**
Creating elements vs. innerHTML:
I used document.createElement('div') and innerHTML for the inner content to keep the code short. I had to be careful to append it before querying #close-popup (so the button exists in the DOM).

Cleanup:
I made sure to call popup.remove() so there isn’t any leftover overlay blocking clicks behind it.

Timing:
I chose setTimeout after "load" so images/styles are ready and the popup doesn’t feel jarring.
 
Future improvement idea:
Use localStorage or cookies to only show the popup once per visitor, so it’s less repetitive.

Overall, the script uses a function (showNewsletterPopup) to define the behavior and event listeners to trigger and control it, keeping the code small, readable, and easy to expand later.
