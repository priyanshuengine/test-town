function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function updateCountOnScroll(elementId) {
    var count = 0;
    var h1Element = document.getElementById(elementId);
    var interval;

    function scrollHandler() {
        if (isElementInViewport(h1Element)) {
            interval = setInterval(function() {
                count++;
                if (elementId === 'countup1' && count >= 11) {
                    h1Element.textContent = '11+';
                    clearInterval(interval);
                } else if (elementId === 'countup2' && count >= 50) {
                    h1Element.textContent = '50+';
                    clearInterval(interval);
                } else if (elementId === 'countup3' && count >= 150) {
                    h1Element.textContent = '150+';
                    clearInterval(interval);
                } else {
                    h1Element.textContent = count;
                }
            }, 20); // Update every 20 milliseconds
            window.removeEventListener('scroll', scrollHandler);
        }
    }

    window.addEventListener('scroll', scrollHandler);
}

window.onload = function() {
    updateCountOnScroll('countup1');
    updateCountOnScroll('countup2');
    updateCountOnScroll('countup3');
};

document.getElementById('animateButton').addEventListener('click', () => {
    const cards = document.querySelectorAll('.usecard');
    cards.forEach(card => card.classList.add('animate'));
});
