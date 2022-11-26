document.getElementById("cardnumber").addEventListener("keyup", function () { justnumber("cardnumber","card-number" )});
document.getElementById("cvc").addEventListener("keyup", function () { justnumber("cvc","card-cvc" )});
document.getElementById("exp-date").addEventListener("keyup", function () { justnumber("exp-date","card-month" )});
document.getElementById("exp-year").addEventListener("keyup", function () { justnumber("exp-year","card-year" )});

document.getElementById("name").addEventListener("keyup", function () { writecontent("card-name",document.getElementById("name").value )});
document.getElementById("confirm").addEventListener("click", cheking);

//1. source id 2.destination id, 
function justnumber(s_id,d_id) {
  var st = document.getElementById(s_id).value 
  if (!st.slice(-1).match(/[0-9," "]/))  
        {
          st = st.substring(0, st.length -1);
          document.getElementById(s_id).value =st;
        }
  writecontent (d_id, st)      
}

function writecontent(d_id, st) {
  document.getElementById(d_id).innerHTML =  st;
}

//check for errors
function cheking() {
  var  ok = true
  clearAllErrors();

  function cantblank (fieldId, errId){
    if ((document.getElementById(fieldId).value) == "") 
    { document.getElementById(errId).innerHTML ="Esse campo não pode estar vazio";
      document.getElementById(fieldId).style.borderColor=("var(--clr-Red)");
      ok = false;
    }  
    else {
      
      document.getElementById(fieldId).style.borderColor=("var(--clr-Dark-grayish-violet)");
    }
  }

  function numbers (fieldId, errId) {
    st = document.getElementById(fieldId).value;
    st = st.replace(/[" "]/gi,""); 
    if (isNaN(st)) {
      document.getElementById(errId).innerHTML= "Somente números";
      document.getElementById(fieldId).style.borderColor=("var(--clr-Red)");
      ok = false;
    }
  }

  cantblank ("name", "err-text");
  cantblank ("cardnumber", "err-number");
  cantblank ("exp-date", "err-date");
  cantblank ("exp-year", "err-date");
  cantblank ("cvc", "err-cvc");

  
  numbers ("cardnumber", "err-number");
  numbers ("exp-date", "err-date");
  numbers ("exp-year", "err-date");
  numbers ("cvc", "err-cvc");
   

  // checking for indiviual erros

  //card number long, not any error
  if (document.getElementById("err-number").innerHTML.length==0) {
    st =st = document.getElementById("cardnumber").value;
    st = st.replace(/[" "]/gi,""); 
    if( st.length != 16)
     {
      document.getElementById("err-number").innerHTML= "O número do cartão deve conter 16 caracteres";
      document.getElementById("cardnumber").style.borderColor=("var(--clr-Red)");
      ok = false;
     }
    }   
  
    if (document.getElementById("err-date").innerHTML.length==0) {
      if (Number(document.getElementById("exp-date").value) >12) {
        document.getElementById("err-date").innerHTML ="Mês inválido"
        document.getElementById("exp-date").style.borderColor=("var(--clr-Red)");
        ok = false;
      }
    }
 
   // if everything ok change form
    if (ok) // if there was no problem previously
    {
        document.getElementById("cardform").style.transform =("scale(1,0)")
        document.getElementById("cardform").style.height = 0 ;
        document.getElementById("thankform").style.transform =("scale(1,1)")
   }

        
}

function  clearAllErrors(){
   
   var er =Array.from( document.getElementsByClassName("error"));
   er.forEach(e => {
    e.innerHTML ="";
   })
  }