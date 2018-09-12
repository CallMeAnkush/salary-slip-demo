console.log('SALARY income');

function getCTC(){
    var sal=document.getElementById('userCTC').value;
    sal=Number(sal);
    console.log(typeof(sal));
    generateSalarySlip(sal);
}

function generateSalarySlip(salary){
   monthly = salary/12;
   var basic,pf,epf,hra,gratuity,spa,totalDeduction,corpTax,totalEarn,netPay;
   corpTax = 200;
   basic = monthly*40/100;
   pf = basic*12/100;
   epf = pf;
   hra = basic*40/100;
   gratuity = basic*5/100;
   spa = monthly-(basic+pf+epf+hra+gratuity);
   totalDeduction = pf + epf+corpTax;
   totalEarn = basic+hra+gratuity+spa;
   netPay = totalEarn - totalDeduction;


   console.log('Basic Salary : '+basic.toFixed(2));
   console.log('PF Amount : '+pf.toFixed(2));
   console.log('EPF Amount : '+epf.toFixed(2));
   console.log('HRA Amount : '+hra.toFixed(2));
   console.log('Gratuity : '+gratuity.toFixed(2));
   console.log('Spa : '+spa.toFixed(2));
   console.log('Total Deduction:'+totalDeduction.toFixed(2));
   console.log('NET PAY:'+netPay.toFixed(2));
   document.getElementById('monGRATUITY').innerHTML=gratuity.toFixed(2);
   document.getElementById('yrGRATUITY').innerHTML=(gratuity*12).toFixed(2);
   document.getElementById('monBasic').innerHTML = basic.toFixed(2);
   document.getElementById('yrBasic').innerHTML=(basic*12).toFixed(2);
   document.getElementById('monHRA').innerHTML = hra.toFixed(2);
   document.getElementById('yrHRA').innerHTML=(hra*12).toFixed(2);
   document.getElementById('monSPA').innerHTML=spa.toFixed(2);
   document.getElementById('yrSPA').innerHTML=(spa*12).toFixed(2);
   document.getElementById('monCorpTAX').innerHTML = corpTax.toFixed(2);
   document.getElementById('yrCorpTAX').innerHTML = (corpTax*12).toFixed(2);
   document.getElementById('monPROV').innerHTML = pf.toFixed(2);
   document.getElementById('yrPROV').innerHTML = (pf*12).toFixed(2);
   document.getElementById('moEpf').innerHTML = epf.toFixed(2);
   document.getElementById('yrEpf').innerHTML = (epf*12).toFixed(2);
   document.getElementById('monEarn').innerHTML = totalEarn.toFixed(2);
   document.getElementById('yrEarn').innerHTML = (totalEarn*12).toFixed(2);
   document.getElementById('moDEDUCTION').innerHTML = totalDeduction.toFixed(2);
   document.getElementById('yrDEDUCTION').innerHTML = (totalDeduction*12).toFixed(2);
   document.getElementById('moNET').innerHTML = netPay.toFixed(2);
   document.getElementById('yrNET').innerHTML = (netPay*12).toFixed(2);


   var element = document.getElementById("salaryBlock");
   element.classList.remove("dispNone");


}


