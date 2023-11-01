let backToTopButton = document.querySelector("#return")

backToTopButton.onclick = () => {
    let scrollStep = -window.scrollY / (0.02 * 1000);
    let scrollInterval = setInterval(function() {
    if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
    } else {
        clearInterval(scrollInterval);
    }
    }, 15);
};

window.onload = () => {
    backToTopButton.hidden = true;
};

window.onscroll =  () => {
    backToTopButton.hidden = !(document.documentElement.scrollTop > 250)
}