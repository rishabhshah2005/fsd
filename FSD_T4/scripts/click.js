var cnt = 0;
function clickMe() {
    var b = document.getElementById("a");
    cnt += 1;
    b.innerHTML = "Clicks: " + cnt;
}