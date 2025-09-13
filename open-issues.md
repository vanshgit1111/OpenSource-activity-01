Project Issues & Tasks
This file lists all the open issues and tasks for this project. Pick one and start contributing! Issues are now labeled with the file(s) they apply to.

🟢 HTML: Content & Structure Issues
[ ] (All Pages): The <html> tag is missing the lang attribute.

[ ] (All Pages): Add a <meta name="description"> tag to the <head> of each page with unique content.

[ ] (All Pages): The navigation links are inconsistent. Some point to the wrong file paths. Make them all correct.

[ ] (All Pages): The main content of each page should be wrapped in a <main> element for semantic structure.

[ ] (All Pages): A shared copyright footer is missing. Add one to index.html, about.html, projects.html, and contact.html.

[ ] (index.html): Fix the typo in the main heading ("Portfolo").

[ ] (index.html): The page title in the <head> is generic. Change it to "Jane Doe - Home".

[ ] (about.html): Refactor the "My Skills" section from using <br> tags to a proper unordered list <ul>.

[ ] (about.html): The page title is generic. Change it to "About Me".

[ ] (projects.html): Refactor each project div to use semantic <figure> and <figcaption> tags instead.

[ ] (projects.html): The page title is generic. Change it to "My Projects".

[ ] (contact.html): The form is missing <label> tags for its inputs. Associate labels with inputs using the for attribute.

[ ] (contact.html): The email input incorrectly uses type="text". It should be type="email".

[ ] (contact.html): The form inputs are missing name attributes, which are necessary for submission.

[ ] (contact.html): The <textarea> should have a required attribute.

[ ] (contact.html): The submit button should have type="submit".

🔵 CSS: Styling & Layout Issues
[ ] (style.css): Change the default font for the entire site (e.g., import a font from Google Fonts).

[ ] (style.css): Change the page's background color.

[ ] (style.css): Remove the underline from all links sitewide.

[ ] (style.css): Style the navigation menu. Make it horizontal, add spacing, and remove bullet points.

[ ] (style.css): Add a style for the "active" navigation link, so the user knows which page they are on.

[ ] (style.css): Add a max-width and center the main page container (div.container) for better readability on wide screens.

[ ] (style.css): Add padding inside the main container so content isn't touching the edges.

[ ] (style.css): Make the entire layout responsive using media queries. The navigation should stack vertically or be replaced by a hamburger menu on mobile.

[ ] (style.css): Add a subtle box-shadow to the main container to make it "pop".

[ ] (style.css - projects.html): Style the project cards. Give them a border, padding, and rounded corners.

[ ] (style.css - projects.html): Arrange the project cards into a responsive grid (e.g., using Flexbox or CSS Grid).

[ ] (style.css - contact.html): Style the form inputs and textarea to be more visually appealing (e.g., consistent height, padding, borders).

[ ] (style.css - contact.html): Make the submit button larger and change its background color to make it stand out.

🟣 Accessibility (a11y) & Enhancements
[ ] (All Pages): Add a "skip to main content" link for keyboard users.

[ ] (All Pages): Ensure all text colors have sufficient contrast against the background (WCAG AA).

[ ] (All Pages): Add aria-current="page" to the active navigation link for screen reader users.

[ ] (index.html): Add missing alt text to the profile image.

[ ] (projects.html): Add descriptive alt text for each project image.

[ ] (contact.html): Ensure all form inputs have associated, visible <label> tags.

[ ] (style.css): Add a visible :focus style for all interactive elements (links, buttons, inputs) for keyboard navigation.

[ ] (style.css): Add smooth transition effects for all hover states on links and buttons.

🟡 JavaScript: Small Features & Fixes
[ ] (script.js): Create a mobile navigation menu (hamburger) that toggles the main nav's visibility on small screens.

[ ] (script.js): Make the copyright year in the footer update automatically using new Date().getFullYear().

[ ] (script.js): Add target="_blank" and rel="noopener" to any external links (like GitHub/LinkedIn).

[ ] (script.js): (contact.html) Implement real-time validation for the email input field, showing an error message if the format is incorrect.

[ ] (script.js): (contact.html) Add logic to the contact form to prevent the default submission and show a "Thank you for your message!" confirmation instead.

[ ] (script.js): Implement a Dark/Light mode toggle that saves the user's preference in localStorage.

[ ] (script.js): Add a "Back to Top" button that appears on scroll and smoothly scrolls to the top when clicked.