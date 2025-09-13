Project Issues & Tasks
This file lists all the open issues and tasks for this project. Pick one and start contributing! Issues are now labeled with the file(s) they apply to.

🟢 HTML: Content & Structure Issues
[ ] (All Pages) Issue: Add lang attribute to HTML tag.

Description: The <html> tag in every HTML file is missing the lang attribute. This attribute is crucial for accessibility as it tells screen readers which language and dialect to use when pronouncing the text. It also helps search engines understand the page's language.

Task: Add lang="en" to the <html> tag in index.html, about.html, projects.html, and contact.html.

[ ] (All Pages) Issue: Add unique meta descriptions.

Description: The <meta name="description"> tag is missing from all pages. This tag provides a brief summary of the page's content, which is often used by search engines for the snippet in search results. Each page should have a unique, concise description.

Task: Add a unique <meta name="description" content="..."> to the <head> of each HTML file.

[ ] (All Pages) Issue: Correct inconsistent navigation links.

Description: Some navigation links in the <header> of the HTML files have incorrect paths (e.g., /pages/about.html instead of pages/about.html). This causes broken navigation when moving between pages.

Task: Review all navigation <a> tags in every HTML file and ensure the href paths are correct relative to the file's location.

[ ] (All Pages) Issue: Wrap main content in <main> tag.

Description: The primary content of each page is currently inside a div.container. For better semantic structure and accessibility, this content should be wrapped in a <main> tag. The <main> tag helps assistive technologies identify the main content block of the page.

Task: In each HTML file, wrap the div.container element within a <main> element.

[ ] (All Pages) Issue: Add a shared copyright footer.

Description: The website currently has no footer. A consistent footer on every page is standard practice and should contain copyright information.

Task: Add a <footer> element to the bottom of the <body> in all HTML files. It should contain a copyright notice, like © 2024 Jane Doe. (This will be updated by JavaScript later).

[ ] (index.html) Issue: Fix typo in the main heading.

Description: The main heading on the homepage contains a spelling error: "Portfolo" instead of "Portfolio".

Task: Correct the typo in the <h1> tag on index.html.

[ ] (index.html) Issue: Update generic page title.

Description: The <title> tag on the homepage is generic ("My Page"). Page titles are important for SEO and user experience (they appear in the browser tab).

Task: Change the title of index.html to something more descriptive, like "Jane Doe - Home".

[ ] (about.html) Issue: Refactor skills list to use <ul>.

Description: The "My Skills" section on the about page uses <br> tags to separate items. This is not semantically correct. An unordered list (<ul> with <li> items) is the proper way to mark up a list of items.

Task: Change the div.skills to a <ul> and wrap each skill in an <li> tag in about.html.

[ ] (projects.html) Issue: Refactor project cards to use <figure>.

Description: The project cards are structured with div, img, h3, and p tags. A more semantic way to represent an image with a caption is to use the <figure> and <figcaption> elements.

Task: In projects.html, change each div.project-card to a <figure> and wrap the heading and description in a <figcaption>.

[ ] (contact.html) Issue: Add <label> tags to form inputs.

Description: The contact form inputs are missing associated <label> tags. Labels are essential for accessibility, as they tell screen reader users what each input is for. They also improve user experience by creating larger clickable targets.

Task: For each input and textarea in contact.html, add a corresponding <label>. Use the for attribute on the label and a matching id on the input to link them.

[ ] (contact.html) Issue: Use correct type for email input.

Description: The email field uses type="text". Changing this to type="email" provides better browser-level validation and often brings up a more convenient keyboard on mobile devices.

Task: Change the type attribute of the email input to email.

🔵 CSS: Styling & Layout Issues
[ ] (style.css) Issue: Implement a custom font.

Description: The site uses a generic serif font. Using a custom web font (like from Google Fonts) will greatly improve the site's visual appeal.

Task: Go to Google Fonts, choose a font (e.g., "Roboto" or "Lato"), and import it into style.css using the @import rule. Then, apply it to the body tag's font-family property.

[ ] (style.css) Issue: Style the navigation menu.

Description: The navigation is currently a vertical, bulleted list. It should be a horizontal bar at the top of the page.

Task: Use Flexbox (display: flex) on the nav ul to make it horizontal. Remove bullet points with list-style-type: none and add spacing (padding/margin) between the links.

[ ] (style.css) Issue: Add a style for the active navigation link.

Description: It's unclear to the user which page they are currently on. A visual indicator (like an underline or different color) is needed for the active page's link in the navigation.

Task: Add a new CSS class named .active and apply a distinct style to it (e.g., font-weight: bold;). This class will need to be manually added to the correct link on each page.

[ ] (style.css) Issue: Make the layout responsive.

Description: The website does not look good on mobile devices. The content is too wide, and the navigation doesn't adapt.

Task: Add @media (max-width: 768px) media queries to adjust styles for smaller screens. For example, make the navigation stack vertically and reduce font sizes.

[ ] (style.css - projects.html) Issue: Arrange projects into a responsive grid.

Description: The project cards on the projects page are stacked in a single column. A grid layout would be more visually appealing and make better use of space.

Task: Use CSS Grid (display: grid) or Flexbox (display: flex; flex-wrap: wrap;) on the .project-gallery container to create a responsive grid of project cards.

[ ] (style.css - contact.html) Issue: Improve form styling.

Description: The inputs and button on the contact form are very basic. They need better styling to match a modern design aesthetic.

Task: Style the input, textarea, and button elements. Add padding, change the border, set a consistent font-size, and make the button more prominent with a background color and hover effect.

🟣 Accessibility (a11y) & Enhancements
[ ] (All Pages) Issue: Add a "skip to main content" link.

Description: Keyboard and screen reader users have to tab through the navigation on every page to get to the main content. A "skip link" allows them to bypass this repetition.

Task: Add an <a> tag as the very first element inside the <body> that links to the ID of the <main> content area (e.g., <a href="#main-content">...</a>). This link can be visually hidden until it is focused.

[ ] (index.html) Issue: Add descriptive alt text to profile image.

Description: The alt text for the profile image is missing. This text is read aloud by screen readers and displayed if the image fails to load. It should be descriptive.

Task: Add an alt attribute to the <img> tag on index.html that describes the image, e.g., alt="A headshot of Jane Doe".

[ ] (style.css) Issue: Add visible focus styles.

Description: It's difficult to tell which element is currently selected when navigating the site with a keyboard. All interactive elements (links, buttons, inputs) need a clear :focus state.

Task: Add a CSS rule for a:focus, button:focus, input:focus that adds a visible outline, e.g., outline: 2px solid blue;.

🟡 JavaScript: Small Features & Fixes
[ ] (script.js) Issue: Create a mobile navigation menu (hamburger).

Description: On small screens, the horizontal navigation will break. A common solution is to hide the menu and show a "hamburger" icon that toggles its visibility when clicked.

Task: Add a hamburger button to the HTML (hidden on desktop). Write JavaScript to add an event listener to this button. On click, it should toggle a class (e.g., .nav-visible) on the <nav> element, which you can then style with CSS to show/hide the menu.

[ ] (script.js) Issue: Update footer year automatically.

Description: The copyright year in the footer (once added) will be static. JavaScript can be used to ensure it's always the current year.

Task: Give the element containing the year an ID (e.g., <span id="current-year"></span>). Write JavaScript to get the current year using new Date().getFullYear() and set the textContent of that element.

[ ] (script.js) Issue: Handle contact form submission.

Description: Currently, submitting the contact form will try to reload the page. We should prevent this and instead show the user a confirmation message.

Task: Add an event listener for the form's submit event. Inside the handler, call event.preventDefault(). Then, hide the form and display a success message (e.g., "Thank you for your message!") in the div#form-message.

[ ] (script.js) Issue: Implement Dark/Light mode toggle with localStorage.

Description: A theme toggle would be a great feature. It should switch between a light and dark theme by toggling a class on the <body> and remember the user's preference for their next visit.

Task: Add a toggle button to the HTML. Write a JS function that toggles a .dark-mode class on the <body>. When the theme is changed, save the preference ('dark' or 'light') in localStorage. On page load, check localStorage for a saved preference and apply it.