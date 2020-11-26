const keys = document.getElementsByClassName("key");

// ONE ELEMENT event
// document.getElementById("eEhm").onclick = function() {
//     document.getElementById("eEhm").style.backgroundColor = "yellow";
// }

// Event Handler function

const keyDown = event => {
    event.target.style.backgroundColor = "#ccc";
}
const keyUp = event => {
    event.target.style.backgroundColor = "";
}
const eventHandler = note => {
    note.onmousedown = function(event) {
        keyDown(event);
    }
    note.onmouseup = function(event) {
        keyUp(event);
    }
}

// Assigning handler function to keys array
for (let i = 0; i < keys.length; i++) {
    eventHandler(keys[i]);
}
