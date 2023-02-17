let subtract=document.getElementById("btn-sub");
let count=document.getElementById("val-counter");
let add=document.getElementById("btn-add");
let reset=document.getElementById("btn-res");

let counter=0;


add.addEventListener('click',()=>{
    counter+=1;
    count.innerHTML=counter;
});

subtract.addEventListener('click',()=>{
    if(counter>0)
    {
        counter--;
        count.innerHTML=counter;
    }
});

reset.addEventListener('click',()=>{
    counter=0;
    count.innerHTML=counter;
});





