// Add honeycomb background
const pattern = document.getElementById('honeycomb-pattern');
for (let i = 0; i < 20; i++) {
    const honeycomb = document.createElement('div');
    honeycomb.className = 'honeycomb';
    honeycomb.textContent = '⬡';
    honeycomb.style.top = `${Math.random() * 100}%`;
    honeycomb.style.left = `${Math.random() * 100}%`;
    pattern.appendChild(honeycomb);
}

// Copy address functionality
function copyAddress() {
    const address = document.getElementById('contract-address').textContent;
    navigator.clipboard.writeText(address);
    
    const copyIcon = document.getElementById('copy-icon');
    const originalPath = copyIcon.innerHTML;
    
    // Change to checkmark
    copyIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />';
    copyIcon.style.color = '#10B981'; // green
    
    // Revert after 2 seconds
    setTimeout(() => {
        copyIcon.innerHTML = originalPath;
        copyIcon.style.color = '';
    }, 2000);
}

// Countdown Timer
let countdownInterval;

function updateCountdown() {
    // Set target date to December 24, 2024
    const targetDate = new Date('2024-12-24T00:00:00').getTime();
    
    function update() {
        // Get current date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = targetDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Add leading zeros
        const displayDays = String(days).padStart(2, '0');
        const displayHours = String(hours).padStart(2, '0');
        const displayMinutes = String(minutes).padStart(2, '0');
        const displaySeconds = String(seconds).padStart(2, '0');
        
        // Display the result
        document.getElementById('days').textContent = displayDays;
        document.getElementById('hours').textContent = displayHours;
        document.getElementById('minutes').textContent = displayMinutes;
        document.getElementById('seconds').textContent = displaySeconds;
        
        // If the countdown is finished, display all zeros
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    // Update immediately and then every second
    update();
    countdownInterval = setInterval(update, 1000);
}

// Initialize countdown when the page loads
document.addEventListener('DOMContentLoaded', updateCountdown);
