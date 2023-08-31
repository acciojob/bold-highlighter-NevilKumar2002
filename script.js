// const strongwords=document.getElementsByTagName("strong");
const link=document.getElementTagName("a");
const strongwords=document.getElementsByTagName("strong");
function highlight() {
    //Write your code here
	for(const words of strongwords){
        words.style.color='blue';
    }

}


function return_normal() {
    //Write your code here
	for(const words of strongwords)
		{
			strongwords.style.color='black';
		}

    
}
// link.addEventListener('onMouseOver',highlight);
// link.addEventListener('onMouseOut',return_normal)
