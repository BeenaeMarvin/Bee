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
        function updateCountdown() {
            const launchDate = new Date('December 24, 2024 00:00:00').getTime();
            
            function update() {
                const now = new Date().getTime();
                const distance = launchDate - now;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

                if (distance < 0) {
                    clearInterval(countdownInterval);
                    document.getElementById('days').textContent = '00';
                    document.getElementById('hours').textContent = '00';
                    document.getElementById('minutes').textContent = '00';
                    document.getElementById('seconds').textContent = '00';
                }
            }

            update();
            const countdownInterval = setInterval(update, 1000);
        }

        updateCountdown();
