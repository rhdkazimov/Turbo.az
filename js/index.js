const barter = document.querySelector("#barterCheck"); 
const kredit = document.querySelector("#creditCheck");
const barterLabel = document.querySelector("#barter");
const kreditLabel = document.querySelector("#credit");


barter.addEventListener("click",()=>{
    if(barterLabel.style.background==="red")
    {
        barterLabel.style.background = "white";
    }
    else{barterLabel.style.background = "red";}
});

kredit.addEventListener("click",()=>{
    if(kreditLabel.style.background==="red")
    {
        kreditLabel.style.background = "white";
    }
    else{kreditLabel.style.background = "red";}
});