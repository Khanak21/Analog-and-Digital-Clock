var hour = document.querySelector(".hour-wrapper")
    var minute = document.querySelector(".minute-wrapper");
    var second = document.querySelector(".second-wrapper")

    

    function moveSec(){
        d=new Date();
        secondtime = d.getSeconds() * 6;
        minutetime = d.getMinutes() * 6;
        hourtime = d.getHours() * 30 + Math.round(minutetime / 12);
        second.style.transform=`rotate(${secondtime}deg)`
        minute.style.transform = `rotate(${minutetime}deg)`
        hour.style.transform = `rotate(${hourtime}deg)`
    }
    setInterval(moveSec,1000);
    moveSec();

let h=document.querySelector(".h");
let m=document.querySelector(".m");
let s=document.querySelector(".s");
let ampm= document.querySelector(".ampm");

setInterval(()=>{
    date = new Date();
    let ss = date.getSeconds();
    let mm = date.getMinutes();//get in number form
    let hh= date.getHours();

    if(hh>=12){
        hh=hh-12;
        ampm.innerHTML="PM";
    }
    else{
        ampm.innerHTML="AM";
    }

    s.innerHTML= ss>=10 ? ss : '0' + ss;

    m.innerHTML= mm>=10 ? mm : '0' + mm;
    
    h.innerHTML= hh>=10 ? hh : '0' + hh;

},1000)