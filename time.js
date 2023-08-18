
function getTime(){
const d = new Date();
let text = d.toLocaleTimeString();
document.getElementById("hour").innerHTML = addZero(d.getHours());
document.getElementById("minute").innerHTML = addZero(d.getMinutes());
document.getElementById("seconds").innerHTML = addZero(d.getSeconds());
document.getElementById("mer").innerHTML = text[9]+text[10];
setInterval("getTime()",1000)
}
getTime()
function addZero(i) {
    if (i < 10) {
        i="0"+i;
    
    }
    return i;
}
function changetext(){
    document.getElementById("changetext").innerHTML="Party Time";
}
function changetextout(){
    document.getElementById("changetext").innerHTML="Set Alarm";
}
const t = new Date();
let hours=t.getHours();
let greet=document.getElementById("greetings");
if(hours>=12 && hours<16){
    greet.innerHTML="GOOD AFTERNOON";
}

else if(hours>=16 && hours<17){
    greet.innerHTML="GOOD EVENING";
}
else if(hours>=17 && hours<22){
    greet.innerHTML="GOOD NIGHT";
}
else{
    greet.innerHTML="GOOD MORNING";
}
var button=document.getElementById("changetext");
button.addEventListener("click",function(){
    let date=new Date();
    let hour=date.getHours();
    let wakeup=document.getElementById('wake');
    let lunch=document.getElementById('lunch');
    let nap=document.getElementById('nap');
    let night=document.getElementById('night');
    if(wakeup.value==hour){
        document.getElementById("messages").innerHTML="GRAB SOME BREAKFAST";
        document.getElementById("image").src="morning_image.jpg";
    }
    if(lunch.value==hour){
        document.getElementById("messages").innerHTML="LET'S HAVE SOME LUNCH !!";
        document.getElementById("image").src="lunch_image.jpg";
    }
    if(nap.value==hour){
        document.getElementById("messages").innerHTML="STOP YAWNING, GET SOME TEA..<br>ITS JUST EVENING!";
        document.getElementById("image").src="evening_image.jpg";
    }
    if(night.value==hour){
        document.getElementById("messages").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("image").src="night_image.jpg";
    }
    
    var w=wake.options[wake.selectedIndex].text;
    document.getElementById("wakes").innerHTML=w;
    var l=lunch.options[lunch.selectedIndex].text;
    document.getElementById("lunchs").innerHTML=l;
    var n=nap.options[nap.selectedIndex].text;
    document.getElementById("naps").innerHTML=n;
    var ni=night.options[night.selectedIndex].text;
    document.getElementById("nights").innerHTML=ni;

})