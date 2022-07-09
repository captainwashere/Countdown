const dy=document.getElementById('days');
const hr=document.getElementById('hours');
const min=document.getElementById('minutes');
const sec=document.getElementById('seconds');


//current year
const currentYear = new Date().getFullYear;
//newyear
const newYear = new Date(`january 1, 2023 00:00`);
//update countdown time
function updateCountdown() {
    const currentdate = new Date();
    const diff = newYear - currentdate;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    dy.innerHTML = d < 10 ? '0' + d : d;
    hr.innerHTML = h < 10 ? '0' + h : h;
    min.innerHTML = m < 10 ? '0' + m : m;
    sec.innerHTML = s < 10 ? '0' + s : s;
    if(d==0&&h==0&&m==0&&s==0){
        
        clearInterval(runInterval);
       
        return;
        
    }

   
}
var runInterval=setInterval(updateCountdown, 1000);


