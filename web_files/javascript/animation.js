let stars = document.getElementById('clouds');
let sun = document.getElementById('sun');
let mountain_back = document.getElementById('mountain_back');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountain_front = document.getElementById('mountain_front');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    clouds.style.left = value * 0.40 + 'px';
    sun.style.top = value * 1.05 +'px';
    mountain_back.style.top = value * .5 +'px';
    text.style.marginRight = value * 3.5 + 'px';
    btn.style.marginTop = value * .8 + 'px';
})


const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) =>
item.addEventListener('click',activeLink))


function toggle() {
    var x = document.querySelector(".answer");

    if (x.style.display === "none") {
        x.style.display = "block";
    }

    else {
        x.style.display = "none";
    }
}

const questions = document.querySelectorAll(".questions");
const qnaContainer = document.querySelectorAll(".answers");
const chev = document.querySelectorAll(".rotate-down");

for (let i = 0, clicks = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        qnaContainer[i].classList.toggle("answers-show");
        questions[i].classList.toggle("questions-rem-border");
        chev[i].classList.toggle("rotate-up");
    });
}

window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a');

    setTimeout(() => {
        transition_el.classList.remove("is-active");
    }, 500);

}
