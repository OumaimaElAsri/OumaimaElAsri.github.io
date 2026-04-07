// ── BG PARTICLES ──
(function(){
  const c=document.getElementById('bg-canvas');
  const x=c.getContext('2d');
  function sz(){c.width=innerWidth;c.height=innerHeight;}
  sz();window.addEventListener('resize',sz);
  const D=Array.from({length:50},()=>({
    px:Math.random()*innerWidth,py:Math.random()*innerHeight,
    r:1.5+Math.random()*3,vx:(Math.random()-.5)*.28,vy:(Math.random()-.5)*.28,
    sq:Math.random()>.65,sz:3+Math.random()*6,
    a:.08+Math.random()*.38,ph:Math.random()*Math.PI*2,
    pu:Math.random()>.42
  }));
  function loop(){
    x.clearRect(0,0,c.width,c.height);
    for(const d of D){
      d.ph+=.007;d.px+=d.vx;d.py+=d.vy;
      if(d.px<0||d.px>c.width)d.vx*=-1;
      if(d.py<0||d.py>c.height)d.vy*=-1;
      const a=Math.max(0,d.a+Math.sin(d.ph)*.06);
      x.globalAlpha=a;
      const col=d.pu?'167,139,250':'220,220,220';
      if(d.sq){x.fillStyle=`rgb(${col})`;x.fillRect(d.px,d.py,d.sz,d.sz);}
      else{x.beginPath();x.arc(d.px,d.py,d.r,0,Math.PI*2);x.fillStyle=`rgb(${col})`;x.fill();}
    }
    x.globalAlpha=1;
    requestAnimationFrame(loop);
  }
  loop();
})();
