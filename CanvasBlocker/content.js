function hideStuff() {
    const targetDivs = document.querySelectorAll('#ek-modal, #ek-overlay'); //Select the divs with the id
    targetDivs.forEach(targetDiv => {
        targetDiv.remove();
    });
}
const observer = new MutationObserver(() => {
    const targetDivs = document.querySelectorAll('#ek-modal, #ek-overlay');
    if (targetDivs.length > 0) {
        hideStuff();
        observer.disconnect();
    }
});

//Start observing the document body for changes in the DOM
observer.observe(document.body, { childList: true, subtree: true });
