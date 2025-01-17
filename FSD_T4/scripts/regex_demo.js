// https://www.programiz.com/javascript/regex

function isvalid() {
    a = document.getElementById("input").value;
    // const regex = /^abc.*z/;
    // const regex = /ab*c/ // b should occur 0 or more times
    // const regex = /ab+c/ // b should occur 1 or more times
    // const regex = /ab?c/ // b should occur 0 or 1 times
    // const regex = /[abc].z$/;
    // const regex = /^abc/; // needs to start with abc
    // const regex = /abc$/; // needs to end with abc
    // const regex = /[0-9]/ // only 0-9 should be present
    // const regex = /[^0-9]/ // only 0-9 should not be present. a letter is required
    // const regex = /[abc]/i // a,b or c should be present "i" for case insensitivity
    // const regex = /[0-9]{2,4}/;
    const regex = /^abc|z$/;

    if (a.length > 10 || !a) {
        alert("Name must be less than 10 characters");
    }
    else {
        if (!regex.test(a)) {
            alert("regex failed")
            return false;
        } else {
            return true;
        }
    }
}