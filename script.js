// Easter egg 1
const footer = document.querySelector("footer");
const body = document.querySelector("body");


function changeBackgroundColor(){
    body.classList.toggle("easter-egg1");
}

footer.addEventListener("click", changeBackgroundColor);

// Easter egg 2

index = 0;
let easterEgg = ".net";

function findEgg(event){
   
    if(easterEgg[index] === event.key){
        index++;

        if(index === easterEgg.length){
        alert("Why do Java developers wear glasses? Because they can’t C#.");
        index = 0;
        }
    }

    else{
        index = 0;
    }     
}

window.addEventListener("keydown", findEgg);

