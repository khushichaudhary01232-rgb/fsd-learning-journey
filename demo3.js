/*window.onload = function() {
    let p= document.getElementById("first")
    let a =first.getAttribute("class")
    console.log(a)
    let b = first.hasAttribute("class")
    console.log(b)
    let c = first.hasAttribute("style")
    console.log(c)
    p.setAttribute("class","khushi true")
    first.removeAttribute("class")
    console.log (first.attributes)
    console.log(first.dataset)
    console.log(first.dataset.name)
    console.log(first.dataset.player)
}
    
let a= document.getElementsByTagName("div")[0]
//a.innerHTML=a.innerHTML+'<h1>hellow world !</h1>';
let div = document.createElement("div")
div.innerHTML= '<h1>hello world !</h1>'
//a.appendChild(div)
//a.append(div)
//a.prepend(div)
//a.after(div)
//a.before(div)
a.replaceWith(div)
*/
//first.insertAdjacentHTML("beforebegin" ,'<h3 class="test">beforeend</h3>')
//first.insertAdjacentHTML("beforeend" ,'<h3 class="test">beforeend</h3>')
//first.insertAdjacentHTML("afterbegin" ,'<h3 class="test">beforeend</h3>')
//first.insertAdjacentHTML("afterend" ,'<h3 class="test">beforeend</h3>')
//first.remove()
//first.className="yellow text-light"
//first.classList.remove("yellow")
//first.classList.add("red")
//first.classList.toggle("red")
//console.log(first.classList.contains("red"))
/*
document.write("hello")
alert("hello")
let b=setTimeout(function(){
    alert("i am inside settimeout")},3000)
let a=prompt("you want settimeout?")
if ("no"==a){
    clearTimeout(b)
}*/
/*const sum=(a,b,c)=>{
    console.log("i am running"+(a+b+c))
    a+b+c
}
setTimeout(sum,1000,1,2,3)

setInterval(function(){
    alert ("Set Interval")
},3000)

const mul=(a,b,c)=>{
    console.log("i am running"+(a*b*c))
    a*b*c
}
setInterval(mul,2000,1,2,3)

let a = document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b= document.getElementsByClassName("container")[0]
    b.innerHTML="hello world"
}
let a = document.querySelector(".container");

a.onclick = () => {
    a.innerHTML = "hello world";
}

let x = function(e){
    alert("Hello1")
}
let y= function(e){
    alert("hello2")
}
btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a= prompt("what is the number")

if (a=="2"){
    btn.removeEventListener('click',x)
}
let p= function(event){
    console.log(event.target)
    console.log(event)
    console.log(event.type)
    console.log(event.currentTarget)
    console.log(event.clientX)
    console.log(event.clientY)
    alert("hello khushi")
}
    
document.getElementById("google").addEventListener('click',function(){
    url =  "https://google.com"
    window.location ="https://google.com"
    win.focus()
})
    */
setInterval(async function () {
    document.querySelector("#bulb").classList.toggle("bulb")
   
},300)
