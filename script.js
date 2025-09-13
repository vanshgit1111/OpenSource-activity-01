// This file is for all the JavaScript-based issues.

document.addEventListener('DOMContentLoaded', () => {

    // 🟡 ISSUE (All Pages): Create a mobile navigation menu (hamburger)
    // You'll need to add a hamburger button to the HTML.
    // This script should toggle a class on the nav element to show/hide it.


    // 🟡 ISSUE (All Pages): Make the copyright year in the footer update automatically
    // A footer with an element for the year needs to be added to the HTML files first.
    // e.g., <footer id="footer">© <span id="current-year"></span> Jane Doe</footer>


    // 🟡 ISSUE (contact.html): Form submission handling
    // Find the form, prevent its default submission, and show a success message.
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Add your logic here
        });
    }


    // 🟡 ISSUE (contact.html): Real-time email validation
    // Find the email input field and check its value on the 'input' event.
    // Show/hide an error message based on whether the format is valid.


    // 🟡 ISSUE (All pages): Dark Mode Toggle
    // Add a button to the HTML.
    // This script should toggle a 'dark-mode' class on the body.
    // Bonus: Use localStorage to remember the user's choice.


    // 🟡 ISSUE (All pages): "Back to Top" Button
    // This button should appear on scroll and smoothly scroll the user to the top.


});
