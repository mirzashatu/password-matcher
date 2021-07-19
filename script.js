
    
 
  function randomNumber(){
      
    var random =Math.random()*9000;
    var generate=Math.round(random);
    var m=Math.floor(1000+generate)
    
    
 document.getElementById('randomView').value=m
 document.getElementById('notifyWrong').style.display='none'
 document.getElementById('notifyRight').style.display='none'

}
  

function value(id){
  let inputValue=document.getElementById('inputPin').value;
  let key= document.getElementById(id).innerHTML
  
  document.getElementById('inputPin').value=inputValue+key;
  

}
  
function clean(){
  document.getElementById('inputPin').value="";
}
function minus(){
 var currentResult= document.getElementById('inputPin').value;
 var newResult=currentResult.slice(0,currentResult.length -1);
 document.getElementById('inputPin').value=newResult;

}


function submit(){
  
  var randomNumber=document.getElementById('randomView').value;
  var inputNumber=document.getElementById('inputPin').value;

  if (inputNumber!=randomNumber) {
    matched()
    }
  else{
    unmatched()
   }
}
    
  
   function matched(){
    document.getElementById('notifyWrong').style.display='block'

   }
   function unmatched(){
    document.getElementById('notifyRight').style.display='block'

   }

































