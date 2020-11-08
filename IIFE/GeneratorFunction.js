function *fun_one(){
    yield 10;
    yield 20;
    yield 30;

};
let cursor =fun_one();
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
console.log(cursor.next());
