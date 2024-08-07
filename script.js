let input = document.getElementById('displayBox');
let buttons = document.querySelectorAll('button');

let string =  "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'AC'){
            string = ""
            input.value = string;
        }
        else if (e.target.innerHTML == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string+= e.target.innerHTML;
        input.value= string;
        }
    })
})


var isSoundOn = true;

function toggleSound() {
    var sound = document.getElementById("tapSound");
    var soundIcon = document.getElementById("soundIcon");

    if (isSoundOn) {
        sound.pause();
        soundIcon.src = "sound-off.jpg";
        soundIcon.alt = "Sound Off";
    } else {
        sound.play();
        soundIcon.src = "sound-on.jpg";
        soundIcon.alt = "Sound On";
    }

    isSoundOn = !isSoundOn;
}