// let arr=[10,20,30,40,50,60,70,80,90,100];
// console.log(arr);
// console.log(arr.length);
// arr.length=5;
// console.log(arr.length);
// console.log(arr[0],arr[4],arr[9]);
// let arr=["Angular","React JS","Angular js","NodeJs","VueJs"];
// delete arr[2];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr.length);
// let arr=[20,30,40];
// console.log(arr);
// arr.push(50);
// console.log(arr);
// arr.unshift(10);
// console.log(arr);
// console.log("array after popup");
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log("array after shift from beginning");
// console.log(arr);
// let arr=[10,20,30,40,50,60,70,80,90,100];
// arr.splice(4,2);
// console.log(arr);//[10, 20, 30,  40,70, 80, 90, 10 ]
// arr.splice(4,1);
// console.log(arr);//[10, 20,  30, 40,80, 90, 100]
// arr.splice(arr.length-1);
// console.log(arr);//[ 10, 20, 30, 40, 80, 90 ]
// arr.splice(4);
// console.log(arr);//[ 10, 20, 30, 40 ]

// arr.splice(1,1);
// console.log(arr);//[ 10, 30, 40 ]
// arr.splice(1,0,20);
// console.log(arr);//[ 10, 20, 30, 40 ]
// arr.splice(3,1,40);
// console.log(arr);//[ 10, 20, 30, 40 ]
// arr.splice(4,0,50,60,70,80,90,100);
// console.log(arr);
// arr.splice(3,0,"Krishna");
// console.log(arr);

// let arr=[0,1,2,3,4,5,6,7,8,9,10];
// let arr1=arr.map((element,index)=>{
//     return element*10;
// });
// console.log(arr1);
// let arr2=arr1.slice(5,8);
// console.log(arr2);
// console.log(arr1.slice(9,10));
let arr1=["Angular","ReactJs","VueJs","NodeJs","MongoDB"];
console.log(arr1.findIndex((element,index)=>{
    return element==="Angular";

})
);
arr1.splice(arr1.findIndex((element,index)=>{
    return element==="NodeJs";
}),2);
console.log(arr1);

let arr2=[10,20,40];
console.log(arr2.findIndex((element)=>element===30));
arr2.splice(arr2.findIndex((element)=>element==30),3);
console.log(arr2);