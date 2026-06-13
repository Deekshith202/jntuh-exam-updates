const darkBtn =
document.getElementById("darkBtn");

darkBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});

const topBtn =
document.getElementById("topBtn");

window.onscroll = function(){

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

};

topBtn.onclick = function(){

window.scrollTo({
top:0,
behavior:"smooth"
});

};

const searchInput =
document.getElementById("searchInput");

searchInput.addEventListener("keyup",function(){

let value =
this.value.toLowerCase();

let cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

if(card.innerText.toLowerCase().includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});
