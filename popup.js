var button = document.getElementsByClassName("emoji");
var amount = document.getElementById("smilies").childElementCount;
amount += 1;
let text = document.getElementById("text")
var array = [];
var j, i;
for (var j = 1; j < amount; j++) {
    array.push(j);
}
for (i = 0; i < array.length; i++) {
    let m = i;
    button[i].addEventListener("click", function() {
        copy(m);
    });

}

function copy(x) {
    text.value = button[x].textContent;
    text.select();
    document.execCommand("copy");
}