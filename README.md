**Contact Form Feature**

The project now includes a contact form (contact.html) where users can send us their name, email, and a message.

The form captures user input.

It checks the input in real time, so users see feedback as they type.

When everything is correct, it shows a confirmation modal instead of reloading the page.

**JavaScript Validation**

I added validation rules with contact.js:

Name: must not be empty and can only include letters, spaces, apostrophes, or hyphens.

Email: must not be empty and must follow a standard email format (e.g. example@mail.com).

Message: must not be empty and must have at least 10 characters.

If any of these rules fail, an error message appears instantly under the input field until the user fixes it.

**Modal Interaction**

When the form passes all validation checks, the script prevents the usual form submission.

Instead, it opens a styled modal window that shows the submitted details (name, email, and message).

Users can close the modal by:

Clicking the Close button

Clicking outside the modal card

Pressing the Esc key

This makes the form feel interactive and user-friendly.

**Decisions and Challenges**

Instant feedback: I decided to validate inputs as the user types, so they don’t wait until submission to see errors.

Custom modal vs. alert(): I built a custom modal instead of a simple alert() to keep the design consistent with the site and make it easier to style.

Accessibility: I added aria attributes and focus handling so the modal is more accessible.

Challenge: The hardest part was learning how to attach event listeners so that clicking “close,” clicking the background, or pressing “Esc” all worked correctly.

Next step idea: In a future version, I’d like to send the form data to an email service or backend, but for now, the modal confirmation was enough to practice DOM manipulation and validation.
