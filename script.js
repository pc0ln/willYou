const yesButton = document.getElementById("yes")
const noButton = document.getElementById("no")

let times = 0

noButton.onclick = incrementCount

function incrementCount() {
    ++times
    //alert(times)
    yesButton.style.width = `${250 + times * 175}px`
    yesButton.style.height = `${100 + times * 150}px`
    yesButton.style.fontSize = `${500 + times * 100}%`
}