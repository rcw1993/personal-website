document.addEventListener('DOMContentLoaded', function() {
    const changingTextElement = document.getElementById('changing-text');

    let wordArray = ['Photographer', 'Landscape Photographer', 'MBA Student', 'Product Manager'];
    let colorClasses = ['blue-text', 'lightblue-text', 'lightorange-text', 'orange-text'];
    let currentWord = 0;

    function typeWord() {
        let word = wordArray[currentWord];
        let wordIndex = 0;

        changingTextElement.className = colorClasses[currentWord];

        let typingInterval = setInterval(() => {
            changingTextElement.textContent += word[wordIndex];
            wordIndex++;

            if (wordIndex >= word.length) {
                clearInterval(typingInterval);

                setTimeout(() => {
                    deleteWord(word);
                }, 1000);
            }
        }, 80);
    }

    function deleteWord(word) {
        let deleteInterval = setInterval(() => {
            word = word.substring(0, word.length - 1);
            changingTextElement.textContent = word;

            if (word.length === 0) {
                clearInterval(deleteInterval);
                currentWord = (currentWord + 1) % wordArray.length;
                typeWord();
            }
        }, 80);
    }

    typeWord();

    document.querySelectorAll(".portfolio-link, .portfolio-btn").forEach(element => {
        element.addEventListener("click", function(e) {
            e.preventDefault(); // Prevents the default action for the link, harmless for the button
            document.getElementById("portfolioSection").scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Check if the URL has the fragment "#portfolio"
    if (window.location.hash === '#portfolio') {
        // Wait for a short duration to ensure everything has loaded
        setTimeout(() => {
            document.getElementById("portfolioSection").scrollIntoView({
                behavior: 'smooth'
            });
        }, 100); // This delay is to ensure the page has fully rendered before we scroll
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const handEmojiElement = document.getElementById('hand-emoji');

    // Add the 'waving-hand' class to trigger the animation
    handEmojiElement.classList.add('waving-hand');

    // Remove the animation class after 5 seconds
    setTimeout(() => {
        handEmojiElement.classList.remove('waving-hand');
    }, 1500); // This is 1.5 seconds, adjust as needed
});
