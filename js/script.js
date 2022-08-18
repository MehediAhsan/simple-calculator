function calcButton (id,count){
document.getElementById(id).addEventListener('click', function(){
    const oldValue = document.getElementById('display-text').innerText;
    const newValue = oldValue + count;
    document.getElementById('display-text').innerText = newValue;
});
}

calcButton('btn-one',1);
calcButton('btn-two',2);
calcButton('btn-three',3);
calcButton('btn-four',4);
calcButton('btn-five',5);
calcButton('btn-six',6);
calcButton('btn-seven',7);
calcButton('btn-eight',8);
calcButton('btn-nine',9);
calcButton('btn-zero',0);
calcButton('btn-doublezero','00');
calcButton('btn-point','.');
calcButton('btn-plus','+');
calcButton('btn-minus','-');
calcButton('btn-multiplication','*');
calcButton('btn-division','/');
calcButton('btn-modulus','%');

document.getElementById('btn-equal').addEventListener('click',function() {
    const value = eval(document.getElementById('display-text').innerText);
    document.getElementById('display-text').innerText = value;
});

document.getElementById('btn-allclear').addEventListener('click', function(){
    const number = document.getElementById('display-text').innerText;
    document.getElementById('display-text').innerText ='';
})

document.getElementById('btn-clear').addEventListener('click', function(){
    const numbers = document.getElementById('display-text').innerText;
    document.getElementById('display-text').innerText = numbers.slice(0,-1);
})