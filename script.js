let isPlaying = false;

window.playsound = function (soundfile) {
    const audioElement = document.getElementById("audio");

    if (isPlaying) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    while (audioElement.firstChild) {
        audioElement.removeChild(audioElement.firstChild);
    }

    const audioSource = document.createElement('source');
    audioSource.src = `sound/${soundfile}`;
    audioElement.appendChild(audioSource);
    audioElement.load();

    audioElement.play().then(() => {
        isPlaying = true;
    }).catch(error => {
        console.error("Error playing audio:", error);
    });

    audioElement.onended = () => {
        isPlaying = false;
    };
};

window.stopsound = function () {
    const audioElement = document.getElementById("audio");
    audioElement.pause();
    audioElement.currentTime = 0;
    isPlaying = false;
};
