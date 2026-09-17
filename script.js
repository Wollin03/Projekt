document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.getElementById("hero-video");
    if (heroVideo) {
        heroVideo.playbackRate =0.60;
}
});

const farvePrikker = document.querySelectorAll('.farve-prik');
const farveHotspots = document.querySelectorAll('.farve-hotspot');

farvePrikker.forEach(prik => {
  prik.addEventListener('click', () => {
    const valgtFarve = prik.dataset.farve;

    farvePrikker.forEach(p => p.classList.remove('aktiv'));
    farveHotspots.forEach(h => h.classList.remove('aktiv'));

    prik.classList.add('aktiv');
    document.querySelector(`.farve-hotspot-${valgtFarve}`).classList.add('aktiv');
  });
});