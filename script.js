const amount=document.getElementById('amount')
const guest=document.getElementById('guest')
const qualtiy=document.getElementById('quality')
const tipamount =document.getElementById('tip-amount')

calculate=()=>{
    const tip= ((amount.value*quality.value)/guest.value).toFixed(2)
    amount.value=''
    guest.value=''
    qualtiy.value=''

    if(tip=="NaN"){
        tipamount.innerHTML='you got 0$ tip!!'
    }
    else{
        tipamount.innerHTML='you got'+tip+"$ tip!!!"
    }
    showtipAmount();
}


 showtipAmount=()=>{
    var x=tipamount;
    x.className='show';
    setTimeout(function(){x.className=x.className.replace('show','')},3000)
}
