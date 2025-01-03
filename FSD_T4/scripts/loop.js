var arr = []
for (let index = 1; index <= 5; index++) {
    var mark = prompt("Enter marks "+index+":")
    arr.push(mark)
}

document.write(arr.toString())
console.log(arr)