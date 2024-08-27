const btn1=document.querySelector('.btn1');
let btn2=document.querySelector('.btn2');
let log=document.querySelector('.logDiv');
let state=document.querySelector('.stateDiv');

btn1.addEventListener('click',()=>{
    document.addEventListener("keydown",handledown);
    document.addEventListener("keyup",handleup);

})
btn2.addEventListener('click',()=>{
    document.removeEventListener("keydown",handledown);
    document.removeEventListener("keyup",handleup);
    log.textContent=" ";
    state.textContent=" ";
})
function handledown(e){
log.textContent=`key ${e.key} is pressed down`;
state.textContent="key is down";

};
function handleup(e){
    log.textContent=`key ${e.key} is up`;
    state.textContent="key is up";
};



