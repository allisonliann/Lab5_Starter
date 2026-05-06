// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const hornSelect = document.getElementById("horn-select");

  const hornImage = document.querySelector("#expose > img");

  const hornAudio = document.querySelector("audio");

  const volumeSlider = document.getElementById("volume");

  const volumeIcon = document.querySelector("#volume-controls img");

  const playButton = document.querySelector("button");

  //TEMP
  /*
  console.log("hornSelect:", hornSelect);
  console.log("hornImage:", hornImage);
  console.log("hornAudio:", hornAudio);
  console.log("volumeSlider:", volumeSlider);
  console.log("volumeIcon:", volumeIcon);
  console.log("playButton:", playButton);
  */

  hornSelect.addEventListener("change", function () {
    const selectedHorn = hornSelect.value;
    hornImage.src = `assets/images/${selectedHorn}.svg`;
    hornImage.alt = selectedHorn;
    hornAudio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  volumeSlider.addEventListener("input", function () {
    const volume = parseInt(volumeSlider.value);

    hornAudio.volume = volume / 100;

    if (volume == 0) volumeIcon.src = "assets/icons/volume-level-0.svg";
    else if (volume < 33) volumeIcon.src = "assets/icons/volume-level-1.svg";
    else if (volume < 67) volumeIcon.src = "assets/icons/volume-level-2.svg";
    else volumeIcon.src = "assets/icons/volume-level-3.svg";
  });

  playButton.addEventListener("click", function () {
    if (hornSelect.value === "select") return;

    hornAudio.currentTime = 0;
    hornAudio.play();

    if (hornSelect.value === "party-horn") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}
