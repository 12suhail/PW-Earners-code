// // callback Function

// function product(a,b,c){
//     return a*b*c;
// }

// function fun(x,y){
//     let a = x(1,2,3)
//     return (a-y);
//     // return (x(1,2,3)-y);
// }

// let a = fun(product,7);
// console.log(a)

// let a = function greet(){
//     console.log("hello");
// }

let b = function meet(){
    console.log("meet me at 8pm!");
}

// setTimeout(function greet(){
//         console.log("hello");
// },3*1000);
setTimeout(function (){
        console.log("hello");
},3*1000);
setTimeout(b,2*1000);
// a();
// b();


// for(let i=1;i<=12;i++){
//     console.log(i);
// }