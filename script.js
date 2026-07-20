
```javascript
/* ==========================================
   DARWIN DIGITAL MUSEUM
   Interactive Exhibit Scripts
========================================== */



// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================


const revealElements = document.querySelectorAll(
".museum-card, .artifact, .claim-card, .event"
);



const revealOnScroll = () => {


    revealElements.forEach(element => {


        const position =
        element.getBoundingClientRect().top;


        const screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            element.style.opacity = "1";

            element.style.transform =
            "translateY(0)";


        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);





// ==========================================
// INITIAL HIDDEN STATE
// ==========================================


revealElements.forEach(element => {


    element.style.opacity="0";


    element.style.transform=
    "translateY(50px)";


    element.style.transition=
    "all 1s ease";


});





// ==========================================
// MUSEUM DUST PARTICLE EFFECT
// ==========================================


function createDust(){


    const dust =
    document.createElement("div");


    dust.className="dust";


    dust.style.left =
    Math.random()*100+"vw";


    dust.style.animationDuration =
    (5+Math.random()*10)+"s";


    document.body.appendChild(dust);



    setTimeout(()=>{


        dust.remove();


    },15000);


}



setInterval(createDust,400);








// ==========================================
// ARTIFACT CLICK EFFECT
// ==========================================


const artifacts =
document.querySelectorAll(".artifact");



artifacts.forEach(card=>{


    card.addEventListener(
    "click",
    ()=>{


        card.style.background =
        "#d4af37";


        card.style.color =
        "white";


        setTimeout(()=>{


            card.style.background =
            "#fff5d6";


            card.style.color =
            "#3b2a1a";


        },800);


    });


});







// ==========================================
// ENTER EXHIBIT BUTTON EFFECT
// ==========================================


const buttons =
document.querySelectorAll("button");



buttons.forEach(button=>{


button.addEventListener(
"click",
()=>{


button.innerHTML =
"Entering Exhibit...";


button.style.background =
"#8b6425";



});



});






// ==========================================
// ADD MUSEUM DUST STYLE
// ==========================================


const style =
document.createElement("style");


style.innerHTML = `


.dust {


position:fixed;


top:-10px;


width:5px;


height:5px;


background:#f5d27a;


border-radius:50%;


opacity:.5;


pointer-events:none;


animation:
fall linear forwards;


z-index:999;


}



@keyframes fall {


from{

transform:
translateY(0);

opacity:.7;

}


to{


transform:
translateY(100vh);

opacity:0;


}


}


`;



document.head.appendChild(style);
```
