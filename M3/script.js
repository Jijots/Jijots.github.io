document.querySelectorAll('.day-button').forEach(button => {
    button.addEventListener('click', function() {
        let box = document.getElementById('animated-box');
        
        // Get button color
        let color = this.getAttribute('data-color');

        // Apply animation and color change
        box.style.opacity = '1';
        box.style.backgroundColor = color;
    });
});