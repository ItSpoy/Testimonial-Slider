const testimonials = [
    {
        name:"Daniel Anderson",
        photourl:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"The quality is second to none. You can wear and wear this and it just stays gorgeous."
    },
    {
        name:"Austin Davis",
        photourl:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"Thanks so much! My can't was great and delivery was super fast too!"
    },
    {
        name:"Dominic Miller",
        photourl:"https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I can honestly say that there is not one company that I've ever worked with that has better service than"
    },
];

const imgEl=document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl=document.querySelector(".username");
let idx =0;
updatetestimonial();


function updatetestimonial(){
    const {name,photourl,text} = testimonials[idx];
    imgEl.src = photourl;
    textEl.innerText = text;
    usernameEl.innerText = name;
    idx++;
    if ( idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updatetestimonial();
    },3000)
}