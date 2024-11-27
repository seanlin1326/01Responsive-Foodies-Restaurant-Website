//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop >20)
    {
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
//nav hide
let navbar = document.querySelectorAll('.nav-link')
let navCollape = document.querySelector('.navbar-collapse.collapse')
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollape.classList.remove("show")
;    })
})
//counter design
document.addEventListener("DOMContentLoaded",()=>{
    function counter(id,start,end,duration){
      
        let obj = document.getElementById(id);
        current = start;
        range = end - start;
        increment = end > start?1 : -1;
        step = Math.abs(Math.floor(duration/range));
        let timer = setInterval(() => {
            current+=increment;
            obj.textContent=current
            if(current >= end){
                // alert(`stop ${current}`)

                clearInterval(timer)
            }
        }, step);
    }
    counter("counter1",0,436,3000);
    counter("counter2",100,333,2500);
    counter("counter3",0,850,3000);
    counter("counter4",0,1000,3000);
});
