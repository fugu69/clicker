const minus_btn = document.querySelector(".minus");
const plus_btn = document.querySelector(".plus");
const counter = document.querySelector(".count");
const reset = document.querySelector(".reset");

minus_btn.addEventListener("click", function(){
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
});

plus_btn.addEventListener("click", function(){
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
});

reset.addEventListener("click", function(){
    counter.innerHTML = "0";
});