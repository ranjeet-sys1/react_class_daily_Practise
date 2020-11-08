// function class_one(){

// };
// class_one.prototype.sub_one= " Hello_1";
// function class_two(){

// };
// class_two.prototype=Object.create(class_one.prototype);
// class_two.prototype.sub_two="hello2";
// class_two.prototype.function_one=function(){
//     return "Welocome to React JS Class Room";

// }

// let obj1=new class_two();
// console.log(obj1.sub_one,obj1.sub_two,obj1.function_one());
function Parent(){

};
Parent.prototype.parent_function=function(){
    return 100;
}
function Child(){

};
Child.prototype=Object.create(Parent.prototype);
Child.prototype.parent_function=function(){
    return 200;
}
let obj2=new Child();
console.log(obj2.parent_function());