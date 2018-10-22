/*  loadingOverlay 1.1  */
class loadingOverlay{
  constructor(dt){
    if(dt == undefined)dt = {};
    if(dt.background == undefined)dt.background='#fff';
    if(dt.text == undefined)dt.text='Loading...';
    if(dt.color == undefined)dt.color='#000';
    if(dt.time == undefined)dt.time=700;
    if(dt.border == undefined)dt.border = false;
    if(dt.icon == undefined)dt.icon = false;
    this.rotation=0;
    this.bg=dt.background;
    this.color=dt.color;
    this.text=dt.text;
    this.time=dt.time;
    this.icon=dt.icon;
    this.border=dt.border;
    this.overlay = document.createElement('div');
    if(!this.icon){
        this.h1 = document.createElement('h1');
        this.h1.innerText = this.text;
        this.h1.style.position = 'absolute';
        this.h1.style.top = (window.innerHeight/2)+'px';
        this.h1.style.left = ((window.innerWidth/2)-(this.h1.style.width/2))+'px';
        this.h1.style.zIndex = 1010;
        this.h1.style.color = this.color;
        if(this.border){
            this.h1.style.border='4px solid transparent';
            this.h1.style.outline='2px solid '+this.color;
        }
        this.h1.style.opacity='0';
        if(this.time < 1000) this.h1.style.transition='all 0.'+(this.time/100)+'s ease';
        else this.h1.style.transition='all 1.'+(this.time/20)+'s ease';
        this.overlay.appendChild(this.h1);
    }
    else{
        this.loadIcon = document.createElement('div');
        this.loadIcon.style.border = '4px solid transparent';
        this.loadIcon.style.borderTop = '4px solid '+this.color;
        this.loadIcon.style.borderBottom = '4px solid '+this.color;
        this.loadIcon.style.width = '100px';
        this.loadIcon.style.height = '100px';
        this.loadIcon.style.borderRadius = '50%';
        this.loadIcon.style.position = 'absolute';
        this.loadIcon.style.top = (window.innerHeight/2)-50+'px';
        this.loadIcon.style.left = (window.innerWidth/2)-50+'px';
        this.loadIcon.style.opacity='0';
        this.loadIcon.style.transition = '1s';
        this.overlay.appendChild(this.loadIcon);
        setInterval(()=>{
            this.rotation+=360;
            this.loadIcon.style.transform = `rotate(${this.rotation}deg)`;
        },1000);
    }
    
    this.overlay.style.color = this.color;
    this.overlay.style.width = window.innerWidth+'px';
    this.overlay.style.height = window.innerHeight+'px';
    this.overlay.style.position = "absolute";
    this.overlay.style.zIndex = 1000;
    this.overlay.style.background = this.bg;
    this.overlay.style.opacity = 0.7;
    document.body.appendChild(this.overlay);
    this.overlay.style.top = '0px';
    this.overlay.style.display = 'none';
  }
  get show(){
    this.overlay.style.display = 'block';
    setTimeout(()=>{
        if(this.icon){
             this.loadIcon.style.opacity='1';
        }
        else{
            this.h1.style.opacity='1';
        }
        
    },100);
    
  }
  get hide(){
    if(this.icon){
             this.loadIcon.style.opacity='0';
        }
        else{
            this.h1.style.opacity='0';
        }
    setTimeout(()=>{
        this.overlay.style.display = 'none';
    },this.time);
    
    
  }
}