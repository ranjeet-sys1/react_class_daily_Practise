function fun_two(arg1, arg2, arg3) {
    console.log(arg1, arg2, arg3);
}
;
fun_two();
fun_two(undefined, "Hello");
fun_two("react", "Deno", "MongoDB");
fun_two(null, null, null);
function fun_one(arg1, arg2, arg3) {
    return arg1 + "," + arg2 + "," + arg3;
}
console.log(fun_one());
console.log(fun_one("react js", "'Node js", "Larika"));
