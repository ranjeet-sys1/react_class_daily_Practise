// let arr=["Angular","react Js","NodeJs","MongoDB"];
// arr.forEach((element,index)=>{
//     console.log(index,element);

// });
// console.log(
//     [100,200,300,400,500].map((element,index)=>{
//         return "$"+element;
//     })
// );
// console.log(
//     [10,20,40,60].filter((element,index)=>{
//         return element>30;
//     })
// );
// console.log(
//     [1,2,3,4,5].map((element,index)=>{
//         return element*100;
//     }).filter((element,index)=>{
//         return element>400;

//     })

// );
// console.log(
//     [1,2,3,4,5].filter((element,index)=>{
//         return element<=2;
//     }).map((element,index)=>{
//         return element*100;

//     })
// );

// console.log(
//     [1,2,3,4,5].reduce((firstElement,nextElement)=>{
//         return firstElement+nextElement;

//     })
// );
// console.log(
//     ["reactjs","to","welcome"].reduceRight((firstElement,nextElement)=>{
//         return firstElement+" "+nextElement;

//     })
// );
// console.log(
//     [10,20,30,50,60].some((element,index,array)=>{
//         return element>500;

//     })
// );
// console.log(
//     [10,20,30,50,60].every((element,index)=>{
//         return element<=60;

//     })
// );
let arr=[1,2,3,4,5,6];
//console.log(arr.fill(100));
//console.log(arr.fill(200,1));
//console.log(arr.fill(300,3));
console.log(arr.fill(400,3,4));
