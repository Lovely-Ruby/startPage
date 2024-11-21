import{c as _,s as d,R as s,_ as D,j as n,T as L,a as O}from"./styled-components.browser.esm-1bf82734.js";import{S}from"./SearchIcon-1fd420e7.js";import{F as P}from"./FavIconIcon-6844105d.js";var T=_("arrow-bar-down","IconArrowBarDown",[["path",{d:"M12 20l0 -10",key:"svg-0"}],["path",{d:"M12 20l4 -4",key:"svg-1"}],["path",{d:"M12 20l-4 -4",key:"svg-2"}],["path",{d:"M4 4l16 0",key:"svg-3"}]]);const c=new URL(window.location.href);function z(e,o){return o-2>=0&&(e[o-2]=1.1),o-1>=0&&(e[o-1]=1.2),e[o]=1.3,o+1<e.length&&(e[o+1]=1.2),o+2<e.length&&(e[o+2]=1.1),e}const F=d.div`
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
`,U=()=>{const e=s.useRef(),[o,h]=s.useState(!0),[i,p]=s.useState([]),[a,m]=s.useState(0),[k,b]=s.useState(!1),[v,C]=s.useState({}),[f,M]=s.useState(!1),w=s.useCallback(()=>c.searchParams.get(v[c.hostname]),[v,c]),A=s.useCallback(t=>{const r=new Array(a.length).fill(1);z(r,t),m(r)},[a]),E=s.useCallback(()=>{setTimeout(()=>{m(new Array(a.length).fill(1))},50)},[a]);return s.useEffect(()=>{chrome.runtime.sendMessage({type:"getOption"},t=>{if(typeof t.soList<"u"&&t.soList.length>0){const r=[],l=[],R=t.customkey?.length?[...S,...t.customkey]:S,x=t.soList.map((u,j)=>(r[j]=1,D.find(R,function(g){return g.key===u})));x.forEach((u,j)=>{(u.host||[]).forEach(g=>{l[g]=u.searchParams})});const y=c.hostname,I=new URLSearchParams(window.location.search);l[y]&&I.has(l[y])&&(h(!1),p(x),C(l),m(r),t.soAOpen&&b(!0))}})},[]),o?null:n.jsxs(F,{children:[n.jsx(L,{placement:"right",title:"Ruby 的橘猫起始页",children:n.jsx(B,{onClick:()=>M(!f),close:f,children:n.jsx(T,{size:14})})}),n.jsx(N,{close:f,ref:e,onMouseLeave:()=>{E()},children:i.map((t,r)=>(t.host||[]).includes(c.host)?null:n.jsx($,{onMouseEnter:()=>{A(r)},onClick:()=>{console.log("click",t.url+w()),window.open(t.url+w(),k?"_blank":"_self")},style:{"--jvmao-net-scale":a[r]},children:n.jsx(L,{placement:"right",title:t.name,children:t.icon?t.icon:n.jsx("div",{children:n.jsx(P,{size:80,url:t.url,onlyDomain:!0})})})},t.name))})]})},H=()=>(s.useEffect(()=>{chrome.runtime.onMessage.addListener(function(e,o,h){switch(e.type){case"onTextMenuCS":var i=window.getSelection();if(i.rangeCount>0){var p=i.getRangeAt(0),a=document.createElement("div");a.appendChild(p.cloneContents()),h({html:a.innerHTML})}}return!0})},[]),null),W=()=>n.jsxs(n.Fragment,{children:[n.jsx(H,{}),n.jsx(U,{})]});function q(e){document.readyState!=="loading"?e():document.addEventListener("DOMContentLoaded",e)}q(()=>{const e=document.createElement("div");e.id="jvmao_net_root",document.body.appendChild(e),O(e).render(n.jsx(W,{}))});
