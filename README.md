**How I approached responsiveness:**
For this project, I used a mobile-first strategy, which we learned is a good way to make sure your website works well on small screens first. I started with simple styles for phones and then added media queries for tablets and desktops. I used breakpoints at 600px (for tablets) and 900px (for desktops) to change how the layout behaves as the screen gets bigger.

**Where and why I used layout tools (Flexbox & Grid):**
I used Flexbox for the navigation bar so the items could wrap and align nicely depending on the screen size. It made it easier to control how the links behaved when switching between mobile and desktop views.

I also used CSS Grid for the book section because it gave me more control over the columns. On small screens, each book takes up the full width, but on bigger screens, they appear in 2 or 3 columns. This makes the layout look clean and readable on all devices.

**Design decisions for navigation, structure, and interactivity:**
I made the navigation menu responsive with a hamburger icon on small screens. When clicked, it shows the links in a vertical stack. On larger screens, the links appear side-by-side. I chose this to make sure users on phones could still navigate easily.

I also added a hover animation to the book cards. When you hover over a book, it slightly grows using transform: scale(1.02);. This makes the site feel more interactive and modern, even without using JavaScript.

**Challenges I faced or ideas I tested:**
At first, I struggled with making the navigation menu show and hide using only HTML and CSS. It was tricky figuring out how to use a checkbox hack to toggle the menu, but I’m glad I figured it out!

I also tested using both Flexbox and Grid in the same project and learned they work well together when used in the right places. Trying to keep everything readable on mobile taught me how important spacing and text size are.

Overall, I’m really proud of how the site adjusts across devices. I feel like I understand responsive design better now and how to build a simple but professional-looking website.
