import{s as u,R as f,j as i,_ as x}from"./styled-components.browser.esm-1bf82734.js";import{o as k,b,H as v}from"./src/newtab/index-25a29073.js";import{d as m}from"./index-85382f69.js";const I=(h,d)=>{const t=x.keyBy(h,"timeKey"),r=[];h.forEach(e=>{t[e.timeKey].children||(t[e.timeKey].children=[]),e.parentId===d?r.push(t[e.timeKey]):t[e.parentId]&&(t[e.parentId].children||(t[e.parentId].children=[]),t[e.parentId].children.push(t[e.timeKey]))});const o=e=>{e.children&&(e.children.sort((c,s)=>c.sort-s.sort),e.children.forEach(c=>o(c)))};r.forEach(o);const l=e=>({title:e.title,sort:e.sort,key:e.timeKey,id:e.linkId,children:e.children.map(c=>l(c))});return x.sortBy(r.map(e=>l(e)),"sort")},y=(h,d=null)=>{let t=[];return h.forEach((r,o)=>{const l={linkId:r.id,timeKey:r.key,parentId:d,sort:o};if(delete l.children,t.push(l),r.children&&r.children.length>0){const e=y(r.children,r.key);t=t.concat(e)}}),t},j=u.div`
    overflow: auto;
    padding: 10px 0;
`,w=u.div`
    display: flex;
    gap: 10px;
    overflow-x: auto;
    flex-wrap: nowrap;
`,K=u.div`
    border: 1px solid #eee;
    border-radius: 4px;
    background-color: var(--fff);
    padding: 5px;
    width: 100px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > span {
        display: flex;
        border-bottom: 1px solid #eee;
        cursor: move;
    }
    .scroll-container {
        flex: 1;
        overflow-y: auto;
        display: flex;
        flex-direction: column;
        gap: 5px;
        min-height: 180px;
    }
`,B=u.div`
    padding: 5px;
    background-color: var(--fff);
    border: 1px solid #eee;
    border-radius: 2px;
    font-size: 12px;
    line-height: 1.2;
    cursor: move;
    transition: all 0.3s ease;
    &:hover {
        background-color: #f5f5f5;
    }
`,E=u.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    align-items: center;
`,L=h=>{const{option:d,tools:t,link:r}=b(),[o,l]=f.useState([]),e=f.useCallback(()=>{d.getHomeId().then(s=>{const n=[];r.getLinkByParentId([s]).then(a=>{n.push(...a),r.getLinkByParentId(a.map(p=>p.timeKey)).then(p=>{n.push(...p),l(I(n,s))})})})},[]),c=f.useCallback(()=>{d.getHomeId().then(s=>{const n=y(o,s);console.log("%c [ updateList ]-152","font-size:13px; background:pink; color:#bf2c9f;",n),r.updateLink(n).then(a=>{r.restart(),t.closePublicModal()})})},[o]);return f.useEffect(()=>{e()},[]),i.jsxs(j,{children:[i.jsx(m.ReactSortable,{tag:w,className:"scroll-container",name:"grout-list",animation:150,group:"grout",ghostClass:["grout-list-ghost"],list:o,setList:s=>{l(s)},children:o.map((s,n)=>i.jsxs(K,{children:[i.jsx("span",{children:s.title}),i.jsx(m.ReactSortable,{className:"scroll-container",name:"grout-item",animation:150,group:"grout-item",ghostClass:["grout-list-ghost"],list:o[n].children,setList:a=>{l(p=>{const g=x.cloneDeep(p);return g[n].children=a,g})},children:o[n].children.map((a,p)=>i.jsx(B,{children:i.jsx("span",{children:a.title})},a.key))})]},s.key))}),i.jsx(E,{children:i.jsx(v,{type:"primary",onClick:c,children:"保存"})})]})},M=k(L);export{M as default};
