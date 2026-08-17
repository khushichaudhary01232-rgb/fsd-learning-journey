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
    */
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
