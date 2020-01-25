
var a ='';
var as='';
var divide=0;
var multiply=0;
var plus=0;
var substraction=0;
function myAc(){
  console.log(document.getElementById("inp_id").value);
  document.getElementById("inp_id").value="";
  a='';
  as='';
  divide=0;
  multiply=0;
  plus=0;
  substraction=0;

  }

function msg_plms(){
var b=document.getElementById("inp_id").value;
document.getElementById("inp_id").value=-b;
    }

function msg_per(){
  var b=document.getElementById("inp_id").value;
  document.getElementById("inp_id").value=b/100;
      }

function msg_divide(){
  as=document.getElementById("inp_id").value;
  console.log('In Divide');
  console.log(as);
  document.getElementById("inp_id").value=as+'/';
  divide=1;
  a='';

}

function msg_seven(){
  /*var a=document.getElementById("inp_id").value;*/
  a=a.concat('7');
  document.getElementById("inp_id").value=a;
}

function msg_eight(){
  /*var a=document.getElementById("inp_id").value;*/
  a=a.concat('8');
  document.getElementById("inp_id").value=a;
  }

function msg_nine(){
  /*var a=document.getElementById("inp_id").value;*/
  a=a.concat('9');
  document.getElementById("inp_id").value=a;
    }

function msg_multiply(){
  as=document.getElementById("inp_id").value;
  document.getElementById("inp_id").value=as+'*';
  multiply=1;
  a='';
}

function msg_four(){
  /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('4');
  document.getElementById("inp_id").value=a;
  }

function msg_five(){
  /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('5');
  document.getElementById("inp_id").value=a;
    }

function msg_six(){
  /*var a=document.getElementById("inp_id").value;*/
  a=a.concat('6');
  document.getElementById("inp_id").value=a;
}

function msg_minus(){
  as=document.getElementById("inp_id").value;
  document.getElementById("inp_id").value=as+'-';
  substraction=1;
  a='';
}

function msg_one(){
 /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('1');
  document.getElementById("inp_id").value=a;
}

function msg_two(){
 /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('2');
  document.getElementById("inp_id").value=a;
}

function msg_three(){
 /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('3');
  document.getElementById("inp_id").value=a;
}

function msg_plus(){
  as=document.getElementById("inp_id").value;
  document.getElementById("inp_id").value=as+'+';
  a='';
  plus=1;
}

function msg_zero(){
 /* var a=document.getElementById("inp_id").value;*/
  a=a.concat('0');
  document.getElementById("inp_id").value=a;
}

function msg_final(){
  /*var a=document.getElementById("inp_id").value;*/

  console.log(as);
  console.log('In Final')
  console.log(a);
  if(divide==1){

    document.getElementById("inp_id").value=eval(as/a);
  }
  else if(multiply==1)
  {
    document.getElementById("inp_id").value=parseInt(as)*parseInt(a);
  }
  else if(plus==1)
  {
    document.getElementById("inp_id").value=parseInt(as)+parseInt(a);
  }
  else if(substraction==1)
  {
    document.getElementById("inp_id").value=parseInt(as)-parseInt(a);
  }
}
