let track = document.querySelector("audio")

let minusbutton = document.querySelector(".minus")
let plusbutton = document.querySelector(".plus")
let playbutton = document.querySelector(".play")

let audioPlayBool = false

function audiocontrol() {
    if (audioPlayBool) {
        track.pause()
        audioPlayBool = false
        playbutton.innerHTML = "|>"
    } else {
        track.play()
        audioPlayBool = true
        playbutton.innerHTML = "||"
    }


}

playbutton.addEventListener("click", audiocontrol)

plusbutton.addEventListener("click", plus)

function plus() {
    BPM++;
    track.playbackRate = BPM / BPMstart
    console.log(BPM)
    showBPM()
}

let BPMstart = 98
let BPM = BPMstart

minusbutton.addEventListener("click", minus)

function minus() {
    BPM--;
    track.playbackRate = BPM / BPMstart
    showBPM()
}

let BPMelement = document.querySelector(".BPM")

function showBPM() {
    BPMelement.innerHTML = BPM
}