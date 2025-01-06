var arr = [];
var num = 0;
while (num !== "") {
    num = prompt("Enter number");
    if (num === "") {
        break;
    }
    console.log(num)
    arr.push(num);
}
console.log(arr)
var sign = prompt("Enter operation");
var res;
if (sign === "*") {
    res = 1;
    arr.forEach(i => {
        res *= Number(i);
    });
}
else if (sign === "/") {
    res = Number(arr[1]) / Number(arr[0]);

}
else if (sign === "+") {
    res = 0;
    arr.forEach(i => {
        res += Number(i);
    });
}
else if (sign === "-") {
    res = 0;
    arr.forEach(i => {
        res -= Number(i);
    });


}

console.log(res)
document.write("result: " + res)