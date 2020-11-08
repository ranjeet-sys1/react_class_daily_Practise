// function fun_one(arg1){
//     console.log(arg1());

// }
// fun_one(()=>{
//     return "hello";

// });
// function fun_one(arg1){
//     console.log(arg1());

// }
// fun_one(function fun_two(){
//     return "hello";
// });
// function fun_one(callback1,callback2,callback3){
//     console.log(callback1(),callback2(),callback3());

// }
// fun_one(()=>{return "successfully........"},
// ()=>{return "error...!"},
// ()=>{return "pending.......!"}
// );


// function fun_one(arg1){
//     return arg1(10,20);
    

// };
// fun_one((num1,num2)=>{
//     console.log(num1+num2);

// });

function mern(uifn,serverfn,backendfn){
    return `${uifn("react")}
            ${serverfn("Deno")}
            ${backendfn("MongoDB")}`;
};
mern((sub1)=>{
    console.log(sub1);
},
(sub2)=>{
    console.log(sub2);

},
(sub3)=>{
    console.log(sub3);  

})
