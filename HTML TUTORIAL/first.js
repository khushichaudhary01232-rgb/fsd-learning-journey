/*console.log("khushi");
names="tony stark";
x=null;
y=undefined;
console.log(x);
const product={
    name:"Parker Jotter Standard CT Ball Pen",
    rating:4,
    price:50,
    isdeal:true,
    offer:5,
}
console.log("product");
const profile ={
    userName:"khushichaudhary",
    isFollow:true,
    followers:50,
    following:45,
};
for (let key in profile){
    console.log(key,":",profile[key]);
}
console.log(typeof profile ["userName"]);
let num = prompt("enter a number:");
if (num%5==0)
    console.log("divisibe by 5");
else
    console.log("not divisible by 5");
let str="khushi";
let size=0;
for (let i of str){
    console.log(i);
    size++;
}
console.log("size of string is",size);
for (let i=0;i<=100;i++){
    if (i%2==0){
        console.log(i);
    }
}
let gameNum=34;
let guess=prompt("enter the number");
while (guess!=gameNum){
    guess=prompt("wrong ,enter again");
}
console.log("you win");
let item={
    name:"pen",
    price:10,
    color:Black,
};
console.log(`the item name is ${item.name}its price is ${item.price}and its color is ${item.color}`);

let userName=prompt("enter your name:");
output="@"+userName+userName.length;
console.log(output);
let marks=[54,76,98,33,06,56];
sum=0;
for (let i of marks){
    sum+=i;
}
let avg=sum/marks,length;
console.log("average is",avg);
const printHello=()=>{
    console.log("HELLO");
}
const sum =(a,b)=>{
    return a+b;
}
arr=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
arr.shift();
arr.splice(2,1,"ola");
arr.push("amazon");
console.log(arr);


function countvow(str){
    let v=0;
    for(const i of str){
        if (i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            v++;
    }
}
let str =prompt("enter a string");
console.log ("number of vowels are",v);
const countvow=(str)=>{
    letv=0;
    for (const i of str){
        id (i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
            v++;
        }
    }
}
function myFunc(num){
    console.log("hello");
}
arr =["khushi","lavi","rajat","kittu","vishu"];
arr.forEach(myFunc)=>{
    return(myFunc);
}
arr.forEach(function (val)){
    console.log(val);
}
arr.forEach((val)=>{
    console.log(val.toUpperCase());
})
arr=[1,3,4,5,6,7];
arr.forEach((val)=>{
    console.log(val*val);
});
arr=[87,93,64,99,86];
const marks=arr.filter((val)=>{
    return val>90;
});
console.log(marks);
let num=prompt("enter a number");
let arr1=[];
for (let i=0;i<num;i++){
    arr1[i]=i+1;
}
const sum=arr1.reduce((prev,curr)=>{
    return prev+curr;
});
console.log("sum is",sum);

let haeding =document.getElementById("heading");
console.dir(haeding);
let elements = document.querySelector("p");
console.dir(elements);
let all=document.querySelectorAll("p");
console.dir(all);
console.dir(document.body.firstChild);
let heading = document.querySelector("h2");
console.dir(heading);
h2.innerText=h2.innerText+"by khushi chaudhary";
let divs=document.querySelectorAll(".OK");
console.dir(divs[0]);
console.dir(divs[1]);
console.dir(divs[2]);
divs[0].innerText="new unique vale first";
let idx=1;
for (div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}
let box = document.querySelector("div");
console.log(box);
let value = box.getAttribute("id");
console.log(value);
let para1 =document.querySelector("#para");
console.log(para1);
para1.getAttribute("#para","newclass");

let el=document.createElement("button");
el.innerText="clickme";
console.log(el);
let fourth=document.querySelector("div");
fourth.after(el);
let pa = document.querySelector("p");
pa.remove();
let bt = document.createElement("button");
bt.innerText="clickme";
bt.stylebackgroundColor="red";
bt.style.color="white";
let add = document.querySelector("body");
add.prepend(bt);
let para = document.querySelector(".content");
console.dir(para);
para.getAttribute("class");
para.setAttribute("class","newclass");
let para=document.querySelector("p");
para.classList.add("newClass");
let btn1 = document.querySelector("#btn1");
btn1.onclick =()=>{
    console.log("btn1 was clicked");
    a=25;
    a++;
    console.log(a);
}*/
let div = document.querySelector("div");
div.onmouseover=()=>{
    console.log("you are inside div");
}
let btn1 = document.querySelector("#btn1");
btn1.onclick=(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX,e.clientY);
}


