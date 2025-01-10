var old_text = "This is new text!!"
var last_alignment = "center"

function func1() {
    let cur = document.getElementById("abc").innerHTML;
    document.getElementById("abc").innerHTML = old_text;
    old_text = cur;
}

function func2() {
    let s = ""
    let divs = document.getElementsByTagName("div");
    for (const element of divs) {
        s += element.innerHTML + "\n";
    }
    alert(s)
}

function func3() {
    let divs = document.getElementsByTagName("div");
    let old_alignment = divs[0].getAttribute("align")
    for (const element of divs) {
        if (old_alignment == "center") {
            element.setAttribute("align", last_alignment);
        } else {
            element.setAttribute("align", "center");
        }
    }
    last_alignment = old_alignment;
}
function func4() {
    let divs = document.getElementsByTagName("div");
    let old_alignment = divs[0].getAttribute("align");
    if (old_alignment == "right") {
        return
    }
    for (const element of divs) {
        element.setAttribute("align", "right");
    }
    last_alignment = old_alignment;
}
function func5() {
    let divs = document.getElementsByTagName("div");
    let old_alignment = divs[0].getAttribute("align");
    if (old_alignment == "left") {
        return
    }
    for (const element of divs) {
        element.setAttribute("align", "left");
    }
    last_alignment = old_alignment;
}

function func6() {
    col = document.querySelector("#col").value;
    let divs = document.getElementsByClassName("myclass");
    for (const element of divs) {
        // element.setAttribute("background-color", col);
        // document.write(element.style)
        element.style.backgroundColor = col;
    }
}
function func7() {
    document.getElementById("b").className = "rishabh";
}