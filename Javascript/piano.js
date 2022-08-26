
window.addEventListener('load', function () {

    const buttons = document.querySelectorAll('button');
    console.log(buttons)
    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {
            let butto = event.target;
            console.log(butto)
            let note = butto.dataset.note;
            console.log(note)


            const audio = document.getElementById(`audio${note}`);
            console.log(audio);
            audio.pause();
            audio.currentTime = 0;
            audio.play()
        })
        //Keyup
        //keydownd
        //keypress
        button.addEventListener('keydown', function (event) {
            const key = event.key;
            console.log(key)
            const button = document.querySelector(`button[data-key="${key}"]`)
            console.log(button)

            if (button)
                button.click();

        })

    })




});

// function sound(event) {
//     let note = event.getAttribute('data-note');
//     const audio = document.getElementById('audio' + note);
//     audio.pause();
//     audio.currentTime = 0;
//     audio.play()
// }
