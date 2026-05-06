// explore.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO

  const voiceSelect = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("#explore img");

  //TEMP
  /*
  console.log("voiceSelect:", voiceSelect);
  console.log("talkButton:", talkButton);
  console.log("textInput:", textInput);
  console.log("faceImage:", faceImage);
  */

  const synth = window.speechSynthesis;

  function loadVoices() {
    const voices = synth.getVoices();

    voiceSelect.innerHTML = "";

    voices.forEach(function (voice) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  synth.addEventListener("voiceschanged", loadVoices);

  loadVoices();

  talkButton.addEventListener("click", function () {
    if (!textInput.value) return;

    const utterance = new SpeechSynthesisUtterance(textInput.value);

    const voices = synth.getVoices();
    utterance.voice = voices.find((v) => v.name === voiceSelect.value);

    utterance.addEventListener("start", function () {
      faceImage.src = "assets/images/smiling-open.png";
    });

    utterance.addEventListener("end", function () {
      faceImage.src = "assets/images/smiling.png";
    });

    synth.speak(utterance);
  });
}
