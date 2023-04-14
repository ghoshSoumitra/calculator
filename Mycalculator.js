
var screen=document.querySelector('#screen');
 var b=document.querySelectorAll('.b');
var screenvalue='';
for(item of b){
    item.addEventListener('click',(e)=>{
        bText=e.target.innerText;
        console.log(bText)
        if(bText =='X'){
            bText='*';
            screenvalue += bText;
            screen.value=screenvalue; 
        }
       else if(bText=='C'){
            screenvalue='';
            screen.value=screenvalue;
        }
        else if(bText=='='){
            screen.value=eval(screenvalue);
        }
        else{
            screenvalue += bText;
            screen.value=screenvalue;
        }
    })
}
function sqrt(){
    screen.value=Math.sqrt(screen.value,0.5);
}
function square(){
    screen.value=Math.pow(screen.value,2);
}
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screen.value = f;
}
