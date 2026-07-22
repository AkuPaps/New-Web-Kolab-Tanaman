/* ===========================================
   LOADING SCREEN
=========================================== */

window.addEventListener("load", function () {

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},500);

},2000);

});

/* ===========================================
   NAVBAR SCROLL
=========================================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

navbar.classList.add("scrolled");

}else{

navbar.classList.remove("scrolled");

}

});

/* ===========================================
   SECTION ANIMATION
=========================================== */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const top = section.getBoundingClientRect().top;

const trigger = window.innerHeight - 120;

if(top < trigger){

section.classList.add("show");

}

});

});

/* ===========================================
   HERO TYPING EFFECT
=========================================== */

const title = document.querySelector(".hero h1");

const originalText = title.innerHTML;

title.innerHTML="";

let i=0;

function typing(){

if(i<originalText.length){

title.innerHTML += originalText.charAt(i);

i++;

setTimeout(typing,30);

}

}

typing();

/* ===========================================
   BACK TO TOP
=========================================== */

const topButton=document.querySelector(".top");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.opacity="1";

topButton.style.pointerEvents="auto";

}else{

topButton.style.opacity="0";

topButton.style.pointerEvents="none";

}

});

/* ===========================================
   SMOOTH SCROLL
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

/* ===========================================
   PARALLAX HERO
=========================================== */

window.addEventListener("scroll",()=>{

let scroll=window.pageYOffset;

document.querySelector(".hero").style.backgroundPositionY=scroll*0.5+"px";

});

/* ===========================================
   IMAGE CLICK
=========================================== */

document.querySelectorAll(".foto img").forEach(img=>{

img.addEventListener("click",()=>{

const popup=document.createElement("div");

popup.className="popup";

popup.innerHTML=`

<img src="${img.src}">

`;

document.body.appendChild(popup);

popup.addEventListener("click",()=>{

popup.remove();

});

});

});

/* ===========================================
   PROGRESS BAR
=========================================== */

const progress = document.createElement("div");

progress.id = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

let scroll = document.documentElement.scrollTop;

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let percent = (scroll / height) * 100;

progress.style.width = percent + "%";

});

/* ===========================================
   CHART PERTUMBUHAN
=========================================== */

const ctx = document.getElementById("chartTanaman");

if(ctx){

new Chart(ctx,{

type:'line',

data:{

labels:['Hari 1','Hari 2','Hari 3','Hari 4'],

datasets:[{

label:'Tinggi Tanaman (cm)',

data:[0,0,0,0],

borderColor:'#2E7D32',

backgroundColor:'rgba(46,125,50,.2)',

fill:true,

tension:.4

}]

},

options:{

responsive:true,

plugins:{

legend:{

display:true

}

}

}

});

}

/* ===========================================
   COUNTER ANGKA
=========================================== */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});

/* ===========================================
   DAUN BERGUGURAN
=========================================== */

function createLeaf(){

const leaf=document.createElement("div");

leaf.innerHTML="🍃";

leaf.className="leaf";

leaf.style.left=Math.random()*100+"vw";

leaf.style.fontSize=(20+Math.random()*20)+"px";

leaf.style.animationDuration=(6+Math.random()*5)+"s";

document.body.appendChild(leaf);

setTimeout(()=>{

leaf.remove();

},12000);

}

setInterval(createLeaf,900);

/* ===========================================
   TOMBOL DARK MODE
=========================================== */

const darkBtn=document.createElement("button");

darkBtn.innerHTML="🌙";

darkBtn.className="darkBtn";

document.body.appendChild(darkBtn);

darkBtn.onclick=()=>{

document.body.classList.toggle("dark");

}

/* ===========================================
   EFEK HERO
=========================================== */

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

hero.style.backgroundPosition=

`${50+x*5}% ${50+y*5}%`;

});

/* ===========================================
   ANIMASI JUDUL
=========================================== */

const judul=document.querySelectorAll(".judul h2");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

judul.forEach(j=>{

j.style.opacity="0";

j.style.transform="translateY(50px)";

j.style.transition="1s";

observer.observe(j);

});