// JavaScript can be used for interactivity, such as smooth scrolling, form validation, or animations.
// Currently, there's no interactivity needed, but you can add custom scripts here as needed.

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});
