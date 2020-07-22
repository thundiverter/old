// Default: box-shadow: 0px 3px 4px 0px rgba(0, 0, 0, .1)

let block = document.getElementById('box_example');
let res = document.getElementById('result');
let cr = document.getElementById('colorres');

let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');
let p9 = document.getElementById('p9');

block.style.borderRadius = p1.value;
res.innerText = 'box-shadow: ' + p2.value + ' ' + p3.value + ' ' + p4.value + ' ' + p5.value + ' rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ');';
block.style.boxShadow = p2.value + ' ' + p3.value + ' ' + p4.value + ' ' + p5.value + ' rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ')';
cr.style.backgroundColor = 'rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ')';

function param_onchange () {
    block.style.borderRadius = p1.value;
    block.style.boxShadow = p2.value + ' ' + p3.value + ' ' + p4.value + ' ' + p5.value + ' rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ')';
    res.innerText = 'box-shadow: ' + p2.value + ' ' + p3.value + ' ' + p4.value + ' ' + p5.value + ' rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ');';
    cr.style.backgroundColor = 'rgba(' + p6.value + ', ' + p7.value + ', ' + p8.value + ', ' + p9.value + ')';
}