let introbutton = document.querySelector(".introbutton");
let timelinebutton = document.querySelector(".timelinebutton");
let edubutton = document.querySelector(".edubutton");
let expbutton = document.querySelector(".expbutton");
let skillbutton = document.querySelector(".skillbutton");
let certbutton = document.querySelector(".certbutton");
let it1but = document.querySelector(".it1but");
let it2but = document.querySelector(".it2but");
let it3but = document.querySelector(".it3but");
let it4but = document.querySelector(".it4but");
let it5but = document.querySelector(".it5but");
let it1 = document.querySelector("#it1");
let it2 = document.querySelector("#it2");
let it3 = document.querySelector("#it3");
let it4 = document.querySelector("#it4");
let it5 = document.querySelector("#it5");

let it21but = document.querySelector(".it21but");
let it22but = document.querySelector(".it22but");
let it23but = document.querySelector(".it23but");
let it24but = document.querySelector(".it24but");
let it25but = document.querySelector(".it25but");
let it26but = document.querySelector(".it26but");
let it21 = document.querySelector("#it21");
let it22 = document.querySelector("#it22");
let it23 = document.querySelector("#it23");
let it24 = document.querySelector("#it24");
let it25 = document.querySelector("#it25");
let it26 = document.querySelector("#it26");

let it31but = document.querySelector(".it31but");
let it33but = document.querySelector(".it33but");
let it34but = document.querySelector(".it34but");
let it35but = document.querySelector(".it35but");
let it31 = document.querySelector("#it31");
let it33 = document.querySelector("#it33");
let it34 = document.querySelector("#it34");
let it35 = document.querySelector("#it35");

let text = document.querySelector("h1");
let night = document.querySelector(".night");

let Intro = document.querySelector(".Intro");
let tl = document.querySelector(".tl");
let edu = document.querySelector(".edu");
let exp = document.querySelector(".Exp");
let skillss = document.querySelector(".skillss");
let cert = document.querySelector(".cert");

introbutton.addEventListener("click", function () {
  console.log("intro");
  Intro.classList.remove("hide");
  edu.classList.add("hide");
  cert.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.add("hide");
  tl.classList.add("hide");
});

timelinebutton.addEventListener("click", function () {
  console.log("tl");
  Intro.classList.add("hide");
  exp.classList.add("hide");
  edu.classList.add("hide");
  cert.classList.add("hide");
  skillss.classList.add("hide");
  tl.classList.remove("hide");
});

edubutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  cert.classList.add("hide");
  skillss.classList.add("hide");
  exp.classList.add("hide");
  edu.classList.remove("hide");
});

expbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  cert.classList.add("hide");
  edu.classList.add("hide");
  skillss.classList.add("hide");
  exp.classList.remove("hide");
});

skillbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  cert.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.remove("hide");
});

certbutton.addEventListener("click", function () {
  Intro.classList.add("hide");
  tl.classList.add("hide");
  edu.classList.add("hide");
  exp.classList.add("hide");
  skillss.classList.add("hide");
  cert.classList.remove("hide");
});






it1but.addEventListener('click',function()
{
  console.log('hi')
  it1.classList.toggle("hide")
})

it2but.addEventListener('click',function()
{
  console.log('hi')
  it2.classList.toggle("hide")
})

it3but.addEventListener('click',function()
{
  console.log('hi')
  it3.classList.toggle("hide")
})

it4but.addEventListener('click',function()
{
  console.log('hi')
  it4.classList.toggle("hide")
})

it5but.addEventListener('click',function()
{
  console.log('hi')
  it5.classList.toggle("hide")
})

it21but.addEventListener('click',function()
{
  console.log('hi')
  it21.classList.toggle("hide")
})



it23but.addEventListener('click',function()
{
  console.log('hi')
  it23.classList.toggle("hide")
})

it24but.addEventListener('click',function()
{
  console.log('hi')
  it24.classList.toggle("hide")
})

it25but.addEventListener('click',function()
{
  console.log('hi')
  it25.classList.toggle("hide")
})

it26but.addEventListener('click',function()
{
  console.log('hi')
  it26.classList.toggle("hide")
})

it31but.addEventListener('click',function()
{
  console.log('hi')
  it31.classList.toggle("hide")
})



it33but.addEventListener('click',function()
{
  console.log('hi')
  it33.classList.toggle("hide")
})

it34but.addEventListener('click',function()
{
  console.log('hi')
  it34.classList.toggle("hide")
})

it35but.addEventListener('click',function()
{
  console.log('hi')
  it35.classList.toggle("hide")
})

