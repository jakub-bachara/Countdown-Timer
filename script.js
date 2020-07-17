function main(){
var countDownDate=new Date("Jan 11, 2020 09:00:00").getTime();
var dni=document.getElementById("dni");
var godziny=document.getElementById("godziny");
var minuty=document.getElementById("minuty");
var sekundy=document.getElementById("sekundy");

var countDown=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days=Math.floor(distance/(1000*60*60*24));
var hours = Math.floor(distance % (1000*60*60*24)/(1000*60*60));
var minutes = Math.floor(distance % (1000*60*60)/(1000*60));
var seconds = Math.floor(distance % (1000*60)/(1000));
if(distance<0){
    clearInterval(countDown);
    alert("DATA JUŻ MINĘŁA!");
}
else{
dni.innerHTML=days+" D";
godziny.innerHTML=hours+" H";
minuty.innerHTML=minutes+" M";
sekundy.innerHTML=seconds+" S";
}
},1000);
}
