// Toggle visibility of the interview script
const toggleButton = document.getElementById('toggle-script');
const scriptText = document.getElementById('script-text');

// Ensure the script is hidden by default
scriptText.style.display = 'none';

toggleButton.addEventListener('click', () => {
    if (scriptText.style.display === 'none') {
        scriptText.style.display = 'block';
        toggleButton.textContent = 'Bye Bye, script :(';
    } else {
        scriptText.style.display = 'none';
        toggleButton.textContent = 'Click here to see the script :)';
    }
});
