import{c as _,s as d,R as s,_ as z,j as n,T as k,a as D}from"./styled-components.browser.esm-1bf82734.js";import{S as b}from"./SearchIcon-1757d27a.js";import{F as O}from"./FavIconIcon-6844105d.js";var P=_("arrow-bar-down","IconArrowBarDown",[["path",{d:"M12 20l0 -10",key:"svg-0"}],["path",{d:"M12 20l4 -4",key:"svg-1"}],["path",{d:"M12 20l-4 -4",key:"svg-2"}],["path",{d:"M4 4l16 0",key:"svg-3"}]]);const c=new URL(window.location.href);function T(e,o){return o-2>=0&&(e[o-2]=1.1),o-1>=0&&(e[o-1]=1.2),e[o]=1.3,o+1<e.length&&(e[o+1]=1.2),o+2<e.length&&(e[o+2]=1.1),e}const F=d.div`
    position: fixed;
    left: 20px;
    bottom: 50px;
    z-index: 99999;
`,N=d.ul`
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    height: ${e=>e.close?0:"auto"};
    transition: height 0.3s;
`,$=d.li`
    margin-top: 8px;
    cursor: pointer;
    width: calc(var(--jvmao-net-scale) * 28px);
    height: calc(var(--jvmao-net-scale) * 28px);
    overflow: hidden;
    transition: all 0.3s;
    svg,img {
        width: 100% !important;
        height: 100% !important;
    }
`,B=d.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: var(--fff);
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 1px solid #eee;
    cursor: pointer;
    svg {
        transform: ${e=>e.close?"rotate(180deg)":"rotate(0deg)"};
        transition: transform 0.3s;
    }
`,U=()=>{const e=s.useRef(),[o,h]=s.useState(!0),[i,p]=s.useState([]),[a,f]=s.useState(0),[L,S]=s.useState(!1),[v,C]=s.useState({}),[m,M]=s.useState(!1),x=s.useCallback(()=>c.searchParams.get(v[c.hostname]),[v,c]),A=s.useCallback(t=>{const r=new Array(a.length).fill(1);T(r,t),f(r)},[a]),E=s.useCallback(()=>{setTimeout(()=>{f(new Array(a.length).fill(1))},50)},[a]);return s.useEffect(()=>{chrome.runtime.sendMessage({type:"getOption"},t=>{if(console.log("%c [ res ]-136","font-size:13px; background:pink; color:#bf2c9f;",t),typeof t.soList<"u"&&t.soList.length>0){const r=[],l=[],R=t.customkey?.length?[...b,...t.customkey]:b,w=t.soList.map((u,j)=>(r[j]=1,z.find(R,function(g){return g.key===u})));w.forEach((u,j)=>{(u.host||[]).forEach(g=>{l[g]=u.searchParams})});const y=c.hostname,I=new URLSearchParams(window.location.search);l[y]&&I.has(l[y])&&(h(!1),p(w),C(l),f(r),t.soAOpen&&S(!0))}})},[]),o?null:n.jsxs(F,{children:[n.jsx(k,{placement:"right",title:"Ruby 的橘猫起始页",children:n.jsx(B,{onClick:()=>M(!m),close:m,children:n.jsx(P,{size:14})})}),n.jsx(N,{close:m,ref:e,onMouseLeave:()=>{E()},children:i.map((t,r)=>(t.host||[]).includes(c.host)?null:n.jsx($,{onMouseEnter:()=>{A(r)},onClick:()=>{console.log("click",t.url+x()),window.open(t.url+x(),L?"_blank":"_self")},style:{"--jvmao-net-scale":a[r]},children:n.jsx(k,{placement:"right",title:t.name,children:t.icon?t.icon:n.jsx("div",{children:n.jsx(O,{size:80,url:t.url,onlyDomain:!0})})})},t.name))})]})},H=()=>(s.useEffect(()=>{chrome.runtime.onMessage.addListener(function(e,o,h){switch(e.type){case"onTextMenuCS":var i=window.getSelection();if(i.rangeCount>0){var p=i.getRangeAt(0),a=document.createElement("div");a.appendChild(p.cloneContents()),h({html:a.innerHTML})}}return!0})},[]),null),W=()=>n.jsxs(n.Fragment,{children:[n.jsx(H,{}),n.jsx(U,{})]});function q(e){document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)}q(()=>{const e=document.createElement("div");e.id="jvmao_net_root",document.body.appendChild(e),D(e).render(n.jsx(W,{}))});
