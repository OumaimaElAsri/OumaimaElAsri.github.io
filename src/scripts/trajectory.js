// ── TRAJECTORY ──
const STEPS = [
  { num:1,
    name:{ fr:'Licence Mathématiques & Informatique', en:'Bachelor in Mathematics & Computer Science' },
    date:{ fr:'2019 – 2023 · Beni Mellal, Maroc', en:'2019 – 2023 · Beni Mellal, Morocco' },
    chips:['Python','POO Java/C++','SQL','Algorithmique','Linux','Réseaux'],
    col:[100,180,255] },
  { num:2,
    name:{ fr:'Stage Développeuse Data & ML — Daher', en:'Data & ML Developer Internship — Daher' },
    date:{ fr:'Jan. – Juin 2024 · Casablanca', en:'Jan. – Jun. 2024 · Casablanca' },
    chips:['Scikit-learn','Pandas','MySQL','Random Forest','Data Viz','SQL'],
    col:[167,139,250] },
  { num:3,
    name:{ fr:'Stage Administratrice Systèmes — Marsa Maroc', en:'Systems Admin & Data Analyst — Marsa Maroc' },
    date:{ fr:'Oct. 2024 – Mars 2025 · Casablanca', en:'Oct. 2024 – Mar. 2025 · Casablanca' },
    chips:['Power BI','Python','SQL','ETL','Excel avancé'],
    col:[80,210,160] },
  { num:4,
    name:{ fr:'M1 Expert Informatique & SI — EPSI Nantes', en:'M1 Expert Informatique & SI — EPSI Nantes' },
    date:{ fr:'Oct. 2025 – Présent · Nantes', en:'Oct. 2025 – Present · Nantes' },
    chips:['Apache Spark','Airflow','AWS','Power BI','ML','IA','RGPD'],
    col:[255,175,75] },
  { num:5,
    name:{ fr:'Stage Développeuse Full Stack Data — UGSEL', en:'Data Full Stack Developer — UGSEL' },
    date:{ fr:'Mars – Juil. 2026 · Nantes', en:'Mar. – Jul. 2026 · Nantes' },
    chips:['React','Python','SQLite','TypeScript','SheetJS','RGPD'],
    col:[255,110,140] },
  { num:6,
    name:{ fr:'Exploration IA & Agents LLM', en:'AI Agents & LLM Pipeline Exploration' },
    date:{ fr:'2025 – Présent', en:'2025 – Present' },
    chips:['LLMs','RAG','MLOps','Agents IA','Python'],
    col:[140,240,110] },
];

const tc = document.getElementById('traj-canvas');
const tx = tc.getContext('2d');
let TW=0, TH=0, tIdx=0, tAngle=0, tTarget=0, tParts=[];

function szTraj(){
  TW=tc.offsetWidth; TH=tc.offsetHeight;
  const dpr=Math.min(devicePixelRatio,2);
  tc.width=TW*dpr; tc.height=TH*dpr;
  tx.scale(dpr,dpr);
}
szTraj();
window.addEventListener('resize',()=>{ szTraj(); });

function mkParts(col){
  return Array.from({length:55},()=>({
    px:Math.random()*TW, py:Math.random()*TH,
    vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4,
    r:1.2+Math.random()*3.2, sq:Math.random()>.62, sz:3+Math.random()*7,
    a:.07+Math.random()*.38, ph:Math.random()*Math.PI*2, col
  }));
}
tParts = mkParts(STEPS[0].col);

function p3(x,y,z,cx,cy,sc,ang){
  const cos=Math.cos(ang), sin=Math.sin(ang);
  return{ px:cx+(x*cos-z*sin)*sc, py:cy+y*sc*.42+(x*sin+z*cos)*sc*.2 };
}

function drawIsland(cx,cy,sc,ang,col){
  const P=(x,y,z)=>p3(x,y,z,cx,cy,sc,ang);
  const [r,g,b]=col;
  const C=(a)=>`rgba(${r},${g},${b},${a})`;

  // hex base
  const H=[[-1.8,0,0],[-.9,0,1.6],[.9,0,1.6],[1.8,0,0],[.9,0,-1.6],[-.9,0,-1.6]];
  const tp=H.map(([x,,z])=>P(x,0,z));
  const bt=H.map(([x,,z])=>P(x,.62,z));
  for(let i=0;i<H.length;i++){
    const ni=(i+1)%H.length;
    tx.beginPath();
    tx.moveTo(tp[i].px,tp[i].py); tx.lineTo(tp[ni].px,tp[ni].py);
    tx.lineTo(bt[ni].px,bt[ni].py); tx.lineTo(bt[i].px,bt[i].py);
    tx.closePath();
    tx.fillStyle=C(.09+.03*(i%2)); tx.strokeStyle=C(.13); tx.lineWidth=.5;
    tx.fill(); tx.stroke();
  }
  tx.beginPath(); tp.forEach((p,i)=>i?tx.lineTo(p.px,p.py):tx.moveTo(p.px,p.py));
  tx.closePath(); tx.fillStyle=C(.15); tx.strokeStyle=C(.25); tx.lineWidth=.9; tx.fill(); tx.stroke();

  // main building
  const bw=.42, bh=1.1, bd=.32;
  const B=[P(-bw,0,bd),P(bw,0,bd),P(bw,0,-bd),P(-bw,0,-bd),P(-bw,-bh,bd),P(bw,-bh,bd),P(bw,-bh,-bd),P(-bw,-bh,-bd)];
  [[4,5,1,0],[5,6,2,1],[4,5,6,7]].forEach((f,fi)=>{
    tx.beginPath(); f.forEach((i,j)=>j?tx.lineTo(B[i].px,B[i].py):tx.moveTo(B[i].px,B[i].py));
    tx.closePath(); tx.fillStyle=C(.14+fi*.07); tx.strokeStyle=C(.28); tx.lineWidth=.7; tx.fill(); tx.stroke();
  });

  // windows
  [[-0.24,-0.33,bd+.01],[0,-0.33,bd+.01],[0.24,-0.33,bd+.01],
   [-0.24,-0.72,bd+.01],[0,-0.72,bd+.01],[0.24,-0.72,bd+.01]].forEach(([x,y,z])=>{
    const w=P(x,y,z); const s=sc*.1;
    tx.fillStyle=C(.7); tx.fillRect(w.px-s*.55,w.py-s*.5,s*1.1,s*.9);
  });

  // side boxes
  [[-1.28,0,.52,.42],[1.28,0,-.52,.48],[-1.0,0,-.88,.32]].forEach(([bx,_,bz,bh2])=>{
    const S=[P(bx-.2,0,bz-.17),P(bx+.2,0,bz-.17),P(bx+.2,0,bz+.17),P(bx-.2,0,bz+.17),
             P(bx-.2,-bh2,bz-.17),P(bx+.2,-bh2,bz-.17),P(bx+.2,-bh2,bz+.17),P(bx-.2,-bh2,bz+.17)];
    [[4,5,1,0],[5,6,2,1],[4,5,6,7]].forEach((f,fi)=>{
      tx.beginPath(); f.forEach((i,j)=>j?tx.lineTo(S[i].px,S[i].py):tx.moveTo(S[i].px,S[i].py));
      tx.closePath(); tx.fillStyle=C(.09+fi*.05); tx.strokeStyle=C(.16); tx.lineWidth=.4; tx.fill(); tx.stroke();
    });
  });

  // antenna
  const a0=P(.5,-bh,bd), a1=P(.5,-bh-.48,bd);
  tx.beginPath(); tx.moveTo(a0.px,a0.py); tx.lineTo(a1.px,a1.py);
  tx.strokeStyle=C(.55); tx.lineWidth=1.5; tx.stroke();
  const ds=sc*.055;
  tx.beginPath(); tx.arc(a1.px,a1.py,ds,0,Math.PI*2); tx.fillStyle=C(.85); tx.fill();

  // glow
  const gp=P(0,-bh,0);
  const gd=tx.createRadialGradient(gp.px,gp.py,0,gp.px,gp.py,sc*.32);
  gd.addColorStop(0,C(.5)); gd.addColorStop(1,C(0));
  tx.beginPath(); tx.arc(gp.px,gp.py,sc*.32,0,Math.PI*2); tx.fillStyle=gd; tx.fill();
}

function trajLoop(){
  tx.clearRect(0,0,TW,TH);
  tAngle += (tTarget-tAngle)*.07;

  for(const d of tParts){
    d.ph+=.009; d.px+=d.vx; d.py+=d.vy;
    if(d.px<0||d.px>TW) d.vx*=-1;
    if(d.py<0||d.py>TH) d.vy*=-1;
    const a=Math.max(0,d.a+Math.sin(d.ph)*.06);
    const [r,g,b]=d.col;
    tx.globalAlpha=a;
    if(d.sq){ tx.fillStyle=`rgb(${r},${g},${b})`; tx.fillRect(d.px,d.py,d.sz,d.sz); }
    else{ tx.beginPath(); tx.arc(d.px,d.py,d.r,0,Math.PI*2); tx.fillStyle=`rgb(${r},${g},${b})`; tx.fill(); }
  }
  tx.globalAlpha=1;
  const sc=Math.min(TW,TH)*.19;
  drawIsland(TW/2, TH*.5, sc, tAngle, STEPS[tIdx].col);
  requestAnimationFrame(trajLoop);
}
trajLoop();

function renderPanel(){
  const s=STEPS[tIdx];
  const l=window._lang||'fr';
  document.getElementById('t-num').textContent=s.num;
  document.getElementById('t-name').textContent=s.name[l];
  document.getElementById('t-badge').textContent=l==='fr'?'POINT DE TRAJECTOIRE':'TIMELINE POINT';
  document.getElementById('t-date').textContent=s.date[l];
  document.getElementById('t-chips').innerHTML=s.chips.map(c=>`<span class="chip">${c}</span>`).join('');
  document.getElementById('t-prev').style.opacity=tIdx===0?'0.25':'1';
  document.getElementById('t-next').style.opacity=tIdx===STEPS.length-1?'0.25':'1';
  document.getElementById('t-prev').disabled=tIdx===0;
  document.getElementById('t-next').disabled=tIdx===STEPS.length-1;
  document.getElementById('traj-dots').innerHTML=STEPS.map((_,i)=>`<span onclick="trajGo(${i})" style="width:${i===tIdx?22:7}px;height:7px;border-radius:4px;background:${i===tIdx?'#f5f5f5':'rgba(255,255,255,0.22)'};cursor:pointer;transition:all 0.3s;display:inline-block"></span>`).join('');
  const col=s.col;
  tParts.forEach(d=>{ d.col=col; });
}

window.trajNav = function(dir){
  const n=tIdx+dir;
  if(n<0||n>=STEPS.length) return;
  tTarget+=dir*(Math.PI/3.2);
  tIdx=n;
  renderPanel();
};

window.trajGo = function(idx){
  if(idx===tIdx) return;
  const dir=idx>tIdx?1:-1;
  tTarget+=dir*Math.abs(idx-tIdx)*(Math.PI/3.2);
  tIdx=idx;
  renderPanel();
};

renderPanel();

// keyboard
document.addEventListener('keydown', e=>{
  if(['ArrowRight','ArrowLeft'].includes(e.key)){
    e.preventDefault();
    window.trajNav(e.key==='ArrowRight'?1:-1);
  }
});

// swipe
let _ts=0;
const tsc=document.querySelector('.traj-scene');
tsc.addEventListener('touchstart',e=>{ _ts=e.touches[0].clientX; },{ passive:true });
tsc.addEventListener('touchend',e=>{
  const dx=e.changedTouches[0].clientX-_ts;
  if(Math.abs(dx)>40) window.trajNav(dx<0?1:-1);
});
