let balance=0

function deposit(){
    let dp1=document.getElementById("dpamount").value
       dp1=Number(dp1)
    if ( dp1>0){
        balance +=dp1;
     
        
        document.getElementById("dpamount").value=""
    }else{
        
        document.getElementById("dpamount").value=""
    }
 
}
// ------------------------------------------------------------------------

function withdraw(){
    let wd1=document.getElementById("widrows").value
        wd1=Number(wd1)
    if ( wd1>0 && wd1<=balance){
        balance -= wd1
        document.getElementById("widrows").value=""
        

    }else{
        document.getElementById("widrows").value=""
    }
}

function CheckBalance(){
   console.log(balance)
   document.getElementById("message").innerHTML="Current Balance:"+balance
}