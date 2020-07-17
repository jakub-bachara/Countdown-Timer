function main(){
var date2=document.getElementById("date").value;
var countDownDate=new Date(date2+ 'T00:00').getTime();
var dni=document.getElementById("dni");
var godziny=document.getElementById("godziny");
var minuty=document.getElementById("minuty");
var sekundy=document.getElementById("sekundy");
var countDown=setInterval(() =>{
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
var minutes = Math.floor(distance % (1000*60*60)/(1000*60));
var seconds = Math.floor(distance % (1000*60)/(1000));
if(seconds>20){
    clearInterval(1);
    alert("DATA JUŻ MINĘŁA!");
}
else{
    console.log(countDown);
dni.innerHTML=days+" D";
godziny.innerHTML=hours+" H";
minuty.innerHTML=minutes+" M";
sekundy.innerHTML=seconds+" S";
}
},1000);
}
