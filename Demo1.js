/*let k ="khushi"
console.log(k+2);                       
console.log("khushi")
console.log(k++)
console.log(++k)*/
  //  let a = prompt("age")
   // a = Number.parseInt(a)// convert atring to integer
/*const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your age: ", (a) => {
a = Number.parseInt(a);
if (a>0){
    console.log("valid age")
}
else{
    console.log("not valid age")
}
console.log("done")

// ternary operator

console.log("age is ", (a>18? "valid":"not valid"))
rl.close();
});
*/

//switch Statement 
/*const readline = require ("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question("Enter your name :",(n)=>
{
    switch (n) {
        case "khushi":
            console.log("yes")
            break;
        case "lavi":
            console.log("no")
            break;
        default:
            console.log("invalid")
            break;
    }
    rl.close()    
}
)*/

//PRACTISE SET
/*const readline = require ("readline");
const rl=readline.createInterface({
    input :process.stdin,
    output:process.stdout
});
rl.question("Enter your age:",(age)=>{
    age=Number.parseInt(age);
    if (age>10 && age<20)
        console.log("yes")
    else{
        console.log("no")
    }
    rl.question("Enter your age:",(n)=>{
    n=Number.parseInt(n);
    if (n%2==0 && n%3==0){
        console.log("yse")
    }
    rl.question("Enter your age:",(n1)=>{
    n1=Number.parseInt(n1);
    if (n1%2==0 || n1%3==0){
        console.log("eys")
    }
    rl.question("Enter your age:",(a)=>{
    a=Number.parseInt(a);
    console.log("you",(a>18?"can drive":"cannot drive"))
    rl.close()
})
})
})
});
*/


/*LOOPS{
for
for in 
for of 
while
do while
} */
//For loops 
/*
for (let i=0;i<5;i++){
    console.log(i)
}
//for in loops 
const obj ={
    khushi:23,
    lavi:2,
    rajat:15,
    kittu:10,
    vishu:19
}
for (let a in obj){  //prints the keys of object and for values=>obj[a]
    console.log(a)
}
//for (let b of obj){  // for of loop is used in arrays so this will error  
//   console.log(a)
//}
//while loop 
// do while loop same as java 
for (let c of "khushi"){  // in for of loop object should be iterable 
    console.log(c);
}
//NOTE : the scope of let is local and the scope of var is global 
//FUNCTIONS IN JS
function add (a,b){
    let c = a+b;
    console.log (c);
}
let x=2;
let y=5
add(x,y);

// ARROW FUNCTION
const hello=()=>{
    console.log("hello")
    return("hi")
}
const sum=(p,q)=>{
    return(p+q)
}
let a=5
let b=4
let c
c=sum(a,b)
console.log(c)
let d 
d=hello()
console.log(d)

// PRACTISE SET 3

const std={
    "harry":98,
    "sohan":70,
    "aakash":7
}
    */
   /*
//ARRAYS
let marks=[ 98,67,54,24,57,null]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
console.log("size of arrays"+marks.length)
marks[6]=34
marks[0]=98
console.log(marks)
for (let i=0;i<marks.length;i++){
    console.log(marks[i])
}
//METHODS OF ARRAYS
//To change array into the string 
let b = marks.toString()
console.log (b,typeof(b))
// To join the elements 
let c = marks.join("and")
console.log (c,typeof(c))
//to remove last eleement 
marks.pop()
console.log(marks)// it returs the poped elemtnt and it it the arrays remains the same 
//to add the last element
marks .push(45)
console.log (marks)
// to remove the first element 
marks.shift()
console.log (marks)
//to add first element
marks.unshift()
console.log(marks)
*/
/*
//DELETE METHOD
//delete is an operator not a method 
let n= [ 24,56,87,240,13,89,45]
console.log(n)
console.log(n.length)
delete n[0]
console.log(n.length)//length of array does not change even after the deletio
let n1=[1,2,3,4,5,6,7,8]
let num= n.concat(n1)
console.log(num)
// we can concat more tham two arrays also like n1.concat(n1,n2,n3)
//sorting of arrays
n.sort()// it sorts alphabetically ie.,string wise 
console.log(n)// it modifies the existing array
// if we want to sort in ascending order 
compare1=(a,b)=>{
    return b-a
}
// if we want to sort in descending order
compare2=(a,b)=>{
    return a-b
}
let q = [45,879,9,34,,326]
q.sort(compare1)
console.log(q)
//
*/
/*
// splice methods 
let x= [23,67,2,678,43,998,12,7]
let d=x.splice(3,2,6476,535,564,864,986,433,6754)
console.log(x)
console.log(typeof(d))//object
// slice methods
x.slice (2)
console.log(x)
x.slice (2,4)
console.log(x)
*/
/*
// FOR LOOP IN ARRAYS 
let n = [12,34,45,67,89,54,65]
// basic for loop 
for (let i=0;i<n.length;i++){
    console.log(n[i])
}
// for of loop 
for (let i of n){
    console.log(i)
}
for (let i in n ){
    console.log(n[i])
}
//array from 
let name="khushi"
let c = Array.from (name)
console.log(c)

// forEach loop
n.forEach(element=>{
    console.log(element*element)
})
    */
//STRINGS 
/*
let name = "khushi"
console.log(name)
console.log(name.length)
let friend = 'lavi'
//template literals 
let b1 = "nikhil"
let b2 = "rohan"
let s =`${b1} is a friend of${b2}`
console.log(s)
//escape sequence character
let fruit ='bana\'na'
let f="bana\"na"
console.log(fruit)
console.log(f)
*/
/*
//METHODS OF STRINGS 
let name = "khushi"
console.log(name.length)
let n= "khush\"hi"//  \"is considered as of length 1 
console.log(n)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,5))
console.log(name.replace("khu","anu"))
let f1="naman"
console.log(name.concat("is a friend of ",f1," okk"))
let f2= "     dheeraj" 
console.log(f2.trim())
let fr = "shivika"
console.log(fr[3])
let fr1="shiv"+"ram"
*/
/*
// PRACTISE SET OF STRINGS 
const q =" my name is khushi"
const c = 'is'
console.log (q.includes(c))
const s ="my"
console.log(q.startsWith(s))
const p='khushi'
console.log(q.endsWith(p))
let a = "KHUSHi"
console.log (a.toLowerCase())
let w="he earns monthly rs 40000"
let f= (w.slice("he earns monthly rs ".length))
console.log (typeof(f))
console.log(typeof(parseInt(f)))


// strings are immmutable we cannot change the original once it is created 
*/
/*
//MAP, FILTER , REDUCE FUNCTION
let arr =[23,67,56]
let newarr=arr.map((value ,index, arr)=>{  // map function is used to build a new arr where for each modifies the existing array
    console.log (value,index,arr)
    return value+1
})

let newarr1=arr.filter((a)=>{
    return a>30
})
console.log(arr)
console.log(newarr1)

let newarr2=arr.reduce((a,b)=>{
    return a+b
})
console.log(newarr2)
*/

//PRACTISE  SET ON ARRAYS
//ques1 
/*let arr= [23,67,45]

const readline = require ("readline");
const rl=readline.createInterface({
    input :process.stdin,
    output:process.stdout
});
rl.question("Enter your number:",(n)=>{
    n=Number.parseInt(n);
    arr[3]=n
    rl.question("Enter your number2:",(n)=>{
        n=Number.parseInt(n);
        arr[4]=n
        rl.question("Enter your number3:",(n)=>{
           n1=Number.parseInt(n);
           arr[5]=n
           console.log("final array is " ,arr)
           rl.close()
        })
    })
})
    */
   /*
//ques 2 
let arr =[56,78,43]
const readline = require ("readline");
const rl=readline.createInterface({
    input :process.stdin,
    output:process.stdout
});
function ask(i){
    rl.question("Enter your number:",(n)=>{
        n=Number.parseInt(n);
        if (n>0){
            arr[i]=n
            ask(i+1)
        }
        else{
        console.log(arr)
        rl.close()
        }
    })
}
ask(3)
*/
//ques 3 
let arr = [10,37,56,40,36,60]
let newarr= arr.filter((a)=>{
    return a%10==0
})
console.log(newarr)
// ques 4
 let newarr1= arr.map((value, index,arr )=>{
    let ans =  value *value
    console.log(ans)
    return value
}
)
// ques 5 
let n=5
let a1 =[]
for (let i=0;i<n;i++){
    a1[i]=i+1
}
let fact=a1.reduce((a,b)=>
    a*b,1)
console.log (fact)

//guess the number 

