document.querySelector("#buttons").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let sound = e.target.textContent;
        let audio = new Audio(`./sounds/${sound}.ogg`);

        audio.addEventListener('error', () => {
            console.error(`Error loading audio: sounds/${sound}.mp3`);
        });

        audio.play().catch((error) => {
            console.error('Error playing audio:', error);
        });
    }
});
