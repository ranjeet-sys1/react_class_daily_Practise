// let arr=[10,20,30,40,50];
// console.log(arr.findIndex((element,index)=>{
//     return element===30;
// })
// );
// arr.splice(arr.findIndex((element,index)=>{
//     return element===30;
// }),1)
// console.log(arr);
// let arr1=[
//     {"p_id":111,"p_name":"p_one","p_cost":10000},
//     {"p_id":222,"p_name":"p_two","p_cost":20000},
//     {"p_id":333,"p_name":"p_three","p_cost":30000},
//     {"p_id":444,"p_name":"p_four","p_cost":40000},
//     {"p_id":555,"p_name":"p_five","p_cost":50000},
// ];
// // arr1.splice(arr1.findIndex((element,index)=>{
// //     return element.p_name===`p_two`;
// // }),1);
// // console.log(arr1);
// console.log(arr1.includes(arr1.findIndex((element,index)=>{
//     return element.p_cost===40000;
//     })
// ));
//let arr1=[10,20,30,40,50,60,70,80,90,100];
// arr1.copyWithin(9);
// console.log(arr1);
// arr1.copyWithin(3,6,9);
// console.log(arr1);
// let arr=[10,20,30,40,50];
// console.log(arr.find((element,index)=>{
//     return element===2;
// })
// );
//27 th september
// let arr1=[10,50,20,40,30];
// console.log(arr1.sort((arg1,arg2)=>{
//     return arg1-arg2;

// }));
// console.log(arr1.sort((arg1,arg2)=>{
//     return arg2-arg1;

// }));
// console.log(arr1.sort((arg1,arg2)=>{
//     return arg2-arg1;
// })[1]);
// console.log(arr1.sort((arg1,arg2)=>{
//     return arg1-arg2;
// })[1]);
 let arr=[10,20,30,10,20,10,40];
// arr.forEach((element,index)=>{
//     console.log(arr.indexOf(element));

// });
console.log(arr.filter((element,index)=>{
    return arr.indexOf(element)===index;
})
);

