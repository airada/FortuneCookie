var checkbox = document.getElementById('checkbox');
var checkbox_1 = document.getElementById('checkbox_1');
var checkbox_2 = document.getElementById('checkbox_2');
var img_1 = 'http://i.imgur.com/59fHyah.png';
var img_2 = 'http://i.imgur.com/zgwd1n1.png';

checkbox.onclick = function () {
    if (checkbox.src == img_1) {
        checkbox.src = img_2;
    } else if (checkbox.src == img_2) {
        checkbox.src = img_1;
    }
}