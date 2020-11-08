// function fun_one(){
//     this.sub_one="reactJs";
//     this.sub_two="NodeJs";
//     this.sub_three="MongoDB";
// };
// let obj1=new fun_one();
// console.log(obj1.sub_one,obj1.sub_two,obj1.sub_three);

// function class_one(){
//     this.function_one=function(){
//         return "hello_1";
//     };
//     this.function_two=function(){
//         return "hello_2";
//     };
//     this.function_three=function(){
//         return "hello_3"
//     };
// };
// let obj1=new class_one();
// console.log(obj1.function_one(),obj1.function_two(),obj1.function_three());



// function class_one(arg1,arg2,arg3){
//     this.var_one=arg1;
//     this.var_two=arg2;
//     this.var_three=arg3;


// }
// let obj1=new class_one("react js","node js","MongoDB");
// console.log(obj1.var_one,obj1.var_two,obj1.var_three)


function class_one(arg1,arg2,arg3){
    this.sub_one=arg1;
    this.sub_two=arg2;
    this.sub_three=arg3;

};
function class_two(){
    this.sub_one=`ReactJs`;
};
function class_three(){
    this.sub_two=`Node JS`;
};
function class_four(){
    this.sub_three=`MongoDB`;
};
let obj1=new class_one(new class_two(),new class_three(),new class_four());
console.log(obj1.sub_one.sub_one,
    obj1.sub_two.sub_two,
    obj1.sub_three.sub_three);














