const link = document.getElementsByTagName("a")[0]; // assuming there is only one link
const strongwords = document.getElementsByTagName("strong");

function highlight() {
    for(const word of strongwords){
       word.style.color = 'green';
    }
}

function return_normal() {
    for(const word of strongwords){
       word.style.color = 'black';
    }
}

link.addEventListener('mouseenter', highlight);