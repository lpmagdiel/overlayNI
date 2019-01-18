/*  loadingOverlay 1.2.1  */
function loadingOverlay(color = "#fff"){
    let overlay = document.createElement('div');
    let deg = 0;
    overlay.style.width = window.innerWidth+'px';
    overlay.style.height = window.innerHeight+'px';
    overlay.style.background = "rgba(255,255,255,0.5)";
    overlay.style.position = "absolute";
    overlay.style.top = "0";
    overlay.style.zIndex = "10000";
    let load = document.createElement('div');
    load.style.width = "80px";
    load.style.height = "80px";
    load.style.border = "8px solid "+color;
    load.style.borderTop = "8px solid transparent";
    load.style.borderRadius = "50%";
    load.style.position = "absolute";
    load.style.top = "calc(50% - 40px)";
    load.style.left = "calc(50% - 40px)";
    load.style.transition='1s';
    overlay.appendChild(load);
    overlay.style.display = "none";
    document.body.appendChild(overlay);
    window.addEventListener('resize',e=>{
        console.log(e);
        overlay.style.width = e.target.innerWidth+'px';
        overlay.style.height = e.target.innerHeight+'px';
    });
    window.setInterval(()=>{
        load.style.transform = `rotate(${deg}deg)`;
        deg+=360;
    },800);
    return{
        hide    : ()=>{
            overlay.style.display = "none";
        },
        show    : ()=>{
            overlay.style.display = "block";
        }
    }
}