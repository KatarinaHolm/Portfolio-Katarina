// Easter egg 1
const footer = document.querySelector("footer");
const body = document.querySelector("body");


function changeBackgroundColor(){
    body.classList.toggle("easter-egg1");
}

footer.addEventListener("click", changeBackgroundColor);

// Easter egg 2

// !!!! lägg till remove/toggle när klickar på kryss

index = 0;
const secretWord = ".net";
const easterEggModal = document.querySelector(".easteregg2")

function findEgg(event){
   
    if(secretWord[index] === event.key){
        
        index++;

        if(index === secretWord.length){
                        
            easterEggModal.classList.toggle("easteregg2-show");
        
            index = 0;
        }
    }

    else{
        index = 0;
    }     
}

window.addEventListener("keydown", findEgg);


//close Easter egg popup

const easterEggClose = document.querySelector(".easteregg-close");

function closeEasterEgg(){
    easterEggModal.classList.remove("easteregg2-show");
}

easterEggClose.addEventListener("click", closeEasterEgg);



