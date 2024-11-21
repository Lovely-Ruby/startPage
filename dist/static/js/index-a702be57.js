import{c as le,r as m,aw as Ze,a$ as Je,j as p,T as oe,R as M,s as A,b0 as Qe,n as L,a_ as Ve,b1 as et}from"./styled-components.browser.esm-1bf82734.js";import{_ as C,V as T,X as O,Y as we,Z as te,$ as De,a0 as ke,a1 as tt,a2 as rt,a3 as Be,u as Oe,S as k,a4 as nt,a5 as at,a as it,g as K,a6 as ae,a7 as ot,H as re,o as We,b as ze,R as st,a8 as Ie,a9 as Ce,I as ut}from"./src/newtab/index-25a29073.js";import{b as V,d as ct,e as lt,i as ft,f as dt,c as _e,I as pt}from"./index-88cb9ca7.js";import{d as Ye,T as ht,c as he}from"./LinkItem-9c55974f.js";import{i as Re,u as gt,I as vt,a as mt,N as bt,m as yt,b as xt,S as wt,L as kt,T as Tt,c as jt,E as It,h as qe,d as Ct,e as Rt}from"./Home-3006036d.js";import{m as Pt}from"./motion-78770865.js";import{a as St,I as Pe}from"./IconDeviceDesktop-2292f5b8.js";import{C as Se}from"./index-3629b773.js";import{R as Mt,C as Ue}from"./index-abbb261f.js";import"./Overflow-2c41ac00.js";import"./CheckOutlined-e912d693.js";import"./FavIconIcon-6844105d.js";import"./EllipsisOutlined-8a1cae9e.js";import"./index-415a9e9a.js";import"./SearchIcon-1fd420e7.js";import"./index-71972e6d.js";import"./index-85382f69.js";import"./index-4d558d9a.js";var At=le("arrow-back-up","IconArrowBackUp",[["path",{d:"M9 14l-4 -4l4 -4",key:"svg-0"}],["path",{d:"M5 10h11a4 4 0 1 1 0 8h-1",key:"svg-1"}]]),Et=le("arrow-forward-up","IconArrowForwardUp",[["path",{d:"M15 14l4 -4l-4 -4",key:"svg-0"}],["path",{d:"M19 10h-11a4 4 0 1 0 0 8h1",key:"svg-1"}]]),Ht=le("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]]),Ft=le("select","IconSelect",[["path",{d:"M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",key:"svg-0"}],["path",{d:"M9 11l3 3l3 -3",key:"svg-1"}]]),Xe=function(t,e){var r=e.manual,n=e.ready,a=n===void 0?!0:n,i=e.defaultParams,s=i===void 0?[]:i,u=e.refreshDeps,o=u===void 0?[]:u,c=e.refreshDepsAction,d=m.useRef(!1);return d.current=!1,V(function(){!r&&a&&(d.current=!0,t.run.apply(t,C([],T(s),!1)))},[a]),V(function(){d.current||r||(d.current=!0,c?c():t.refresh())},C([],T(o),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};Xe.onInit=function(t){var e=t.ready,r=e===void 0?!0:e,n=t.manual;return{loading:!n&&r}};const Lt=Xe;var se=new Map,$t=function(t,e,r){var n=se.get(t);n?.timer&&clearTimeout(n.timer);var a=void 0;e>-1&&(a=setTimeout(function(){se.delete(t)},e)),se.set(t,O(O({},r),{timer:a}))},Nt=function(t){return se.get(t)},ue=new Map,Dt=function(t){return ue.get(t)},Bt=function(t,e){ue.set(t,e),e.then(function(r){return ue.delete(t),r}).catch(function(){ue.delete(t)})},q={},Ot=function(t,e){q[t]&&q[t].forEach(function(r){return r(e)})},ge=function(t,e){return q[t]||(q[t]=[]),q[t].push(e),function(){var n=q[t].indexOf(e);q[t].splice(n,1)}},Wt=function(t,e){var r=e.cacheKey,n=e.cacheTime,a=n===void 0?5*60*1e3:n,i=e.staleTime,s=i===void 0?0:i,u=e.setCache,o=e.getCache,c=m.useRef(),d=m.useRef(),l=function(h,g){u?u(g):$t(h,a,g),Ot(h,g.data)},v=function(h,g){return g===void 0&&(g=[]),o?o(g):Nt(h)};return Ye(function(){if(r){var h=v(r);h&&Object.hasOwnProperty.call(h,"data")&&(t.state.data=h.data,t.state.params=h.params,(s===-1||new Date().getTime()-h.time<=s)&&(t.state.loading=!1)),c.current=ge(r,function(g){t.setState({data:g})})}},[]),we(function(){var h;(h=c.current)===null||h===void 0||h.call(c)}),r?{onBefore:function(h){var g=v(r,h);return!g||!Object.hasOwnProperty.call(g,"data")?{}:s===-1||new Date().getTime()-g.time<=s?{loading:!1,data:g?.data,error:void 0,returnNow:!0}:{data:g?.data,error:void 0}},onRequest:function(h,g){var b=Dt(r);return b&&b!==d.current?{servicePromise:b}:(b=h.apply(void 0,C([],T(g),!1)),d.current=b,Bt(r,b),{servicePromise:b})},onSuccess:function(h,g){var b;r&&((b=c.current)===null||b===void 0||b.call(c),l(r,{data:h,params:g,time:new Date().getTime()}),c.current=ge(r,function(R){t.setState({data:R})}))},onMutate:function(h){var g;r&&((g=c.current)===null||g===void 0||g.call(c),l(r,{data:h,params:t.state.params,time:new Date().getTime()}),c.current=ge(r,function(b){t.setState({data:b})}))}}:{}};const zt=Wt;var _t=function(t,e){var r=e.debounceWait,n=e.debounceLeading,a=e.debounceTrailing,i=e.debounceMaxWait,s=m.useRef(),u=m.useMemo(function(){var o={};return n!==void 0&&(o.leading=n),a!==void 0&&(o.trailing=a),i!==void 0&&(o.maxWait=i),o},[n,a,i]);return m.useEffect(function(){if(r){var o=t.runAsync.bind(t);return s.current=ct(function(c){c()},r,u),t.runAsync=function(){for(var c=[],d=0;d<arguments.length;d++)c[d]=arguments[d];return new Promise(function(l,v){var h;(h=s.current)===null||h===void 0||h.call(s,function(){o.apply(void 0,C([],T(c),!1)).then(l).catch(v)})})},function(){var c;(c=s.current)===null||c===void 0||c.cancel(),t.runAsync=o}}},[r,u]),r?{onCancel:function(){var o;(o=s.current)===null||o===void 0||o.cancel()}}:{}};const Yt=_t;var qt=function(t,e){var r=e.loadingDelay,n=e.ready,a=m.useRef();if(!r)return{};var i=function(){a.current&&clearTimeout(a.current)};return{onBefore:function(){return i(),n!==!1&&(a.current=setTimeout(function(){t.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){i()},onCancel:function(){i()}}};const Ut=qt;function Te(){return te?document.visibilityState!=="hidden":!0}var G=[];function Xt(t){return G.push(t),function(){var r=G.indexOf(t);G.splice(r,1)}}if(te){var Kt=function(){if(Te())for(var t=0;t<G.length;t++){var e=G[t];e()}};window.addEventListener("visibilitychange",Kt,!1)}var Gt=function(t,e){var r=e.pollingInterval,n=e.pollingWhenHidden,a=n===void 0?!0:n,i=e.pollingErrorRetryCount,s=i===void 0?-1:i,u=m.useRef(),o=m.useRef(),c=m.useRef(0),d=function(){var l;u.current&&clearTimeout(u.current),(l=o.current)===null||l===void 0||l.call(o)};return V(function(){r||d()},[r]),r?{onBefore:function(){d()},onError:function(){c.current+=1},onSuccess:function(){c.current=0},onFinally:function(){s===-1||s!==-1&&c.current<=s?u.current=setTimeout(function(){!a&&!Te()?o.current=Xt(function(){t.refresh()}):t.refresh()},r):c.current=0},onCancel:function(){d()}}:{}};const Zt=Gt;function Jt(t,e){var r=!1;return function(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];r||(r=!0,t.apply(void 0,C([],T(n),!1)),setTimeout(function(){r=!1},e))}}function Qt(){return te&&typeof navigator.onLine<"u"?navigator.onLine:!0}var Z=[];function Vt(t){return Z.push(t),function(){var r=Z.indexOf(t);r>-1&&Z.splice(r,1)}}if(te){var Me=function(){if(!(!Te()||!Qt()))for(var t=0;t<Z.length;t++){var e=Z[t];e()}};window.addEventListener("visibilitychange",Me,!1),window.addEventListener("focus",Me,!1)}var er=function(t,e){var r=e.refreshOnWindowFocus,n=e.focusTimespan,a=n===void 0?5e3:n,i=m.useRef(),s=function(){var u;(u=i.current)===null||u===void 0||u.call(i)};return m.useEffect(function(){if(r){var u=Jt(t.refresh.bind(t),a);i.current=Vt(function(){u()})}return function(){s()}},[r,a]),we(function(){s()}),{}};const tr=er;var rr=function(t,e){var r=e.retryInterval,n=e.retryCount,a=m.useRef(),i=m.useRef(0),s=m.useRef(!1);return n?{onBefore:function(){s.current||(i.current=0),s.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){i.current=0},onError:function(){if(i.current+=1,n===-1||i.current<=n){var u=r??Math.min(1e3*Math.pow(2,i.current),3e4);a.current=setTimeout(function(){s.current=!0,t.refresh()},u)}else i.current=0},onCancel:function(){i.current=0,a.current&&clearTimeout(a.current)}}:{}};const nr=rr;var ar=lt,ir=ft,or="Expected a function";function sr(t,e,r){var n=!0,a=!0;if(typeof t!="function")throw new TypeError(or);return ir(r)&&(n="leading"in r?!!r.leading:n,a="trailing"in r?!!r.trailing:a),ar(t,e,{leading:n,maxWait:e,trailing:a})}var ur=sr;const cr=Ze(ur);var lr=function(t,e){var r=e.throttleWait,n=e.throttleLeading,a=e.throttleTrailing,i=m.useRef(),s={};return n!==void 0&&(s.leading=n),a!==void 0&&(s.trailing=a),m.useEffect(function(){if(r){var u=t.runAsync.bind(t);return i.current=cr(function(o){o()},r,s),t.runAsync=function(){for(var o=[],c=0;c<arguments.length;c++)o[c]=arguments[c];return new Promise(function(d,l){var v;(v=i.current)===null||v===void 0||v.call(i,function(){u.apply(void 0,C([],T(o),!1)).then(d).catch(l)})})},function(){var o;t.runAsync=u,(o=i.current)===null||o===void 0||o.cancel()}}},[r,n,a]),r?{onCancel:function(){var u;(u=i.current)===null||u===void 0||u.cancel()}}:{}};const fr=lr;var dr=function(t){De&&(ke(t)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof t,'".'))),m.useEffect(function(){t?.()},[])};const pr=dr;var hr=function(){function t(e,r,n,a){a===void 0&&(a={}),this.serviceRef=e,this.options=r,this.subscribe=n,this.initState=a,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=O(O(O({},this.state),{loading:!r.manual}),a)}return t.prototype.setState=function(e){e===void 0&&(e={}),this.state=O(O({},this.state),e),this.subscribe()},t.prototype.runPluginHandler=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var a=this.pluginImpls.map(function(i){var s;return(s=i[e])===null||s===void 0?void 0:s.call.apply(s,C([i],T(r),!1))}).filter(Boolean);return Object.assign.apply(Object,C([{}],T(a),!1))},t.prototype.runAsync=function(){for(var e,r,n,a,i,s,u,o,c,d,l=[],v=0;v<arguments.length;v++)l[v]=arguments[v];return tt(this,void 0,void 0,function(){var h,g,b,R,j,P,$,H,S,f,y;return rt(this,function(w){switch(w.label){case 0:if(this.count+=1,h=this.count,g=this.runPluginHandler("onBefore",l),b=g.stopNow,R=b===void 0?!1:b,j=g.returnNow,P=j===void 0?!1:j,$=Be(g,["stopNow","returnNow"]),R)return[2,new Promise(function(){})];if(this.setState(O({loading:!0,params:l},$)),P)return[2,Promise.resolve($.data)];(r=(e=this.options).onBefore)===null||r===void 0||r.call(e,l),w.label=1;case 1:return w.trys.push([1,3,,4]),H=this.runPluginHandler("onRequest",this.serviceRef.current,l).servicePromise,H||(H=(y=this.serviceRef).current.apply(y,C([],T(l),!1))),[4,H];case 2:return S=w.sent(),h!==this.count?[2,new Promise(function(){})]:(this.setState({data:S,error:void 0,loading:!1}),(a=(n=this.options).onSuccess)===null||a===void 0||a.call(n,S,l),this.runPluginHandler("onSuccess",S,l),(s=(i=this.options).onFinally)===null||s===void 0||s.call(i,l,S,void 0),h===this.count&&this.runPluginHandler("onFinally",l,S,void 0),[2,S]);case 3:if(f=w.sent(),h!==this.count)return[2,new Promise(function(){})];throw this.setState({error:f,loading:!1}),(o=(u=this.options).onError)===null||o===void 0||o.call(u,f,l),this.runPluginHandler("onError",f,l),(d=(c=this.options).onFinally)===null||d===void 0||d.call(c,l,void 0,f),h===this.count&&this.runPluginHandler("onFinally",l,void 0,f),f;case 4:return[2]}})})},t.prototype.run=function(){for(var e=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];this.runAsync.apply(this,C([],T(r),!1)).catch(function(a){e.options.onError||console.error(a)})},t.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},t.prototype.refresh=function(){this.run.apply(this,C([],T(this.state.params||[]),!1))},t.prototype.refreshAsync=function(){return this.runAsync.apply(this,C([],T(this.state.params||[]),!1))},t.prototype.mutate=function(e){var r=ke(e)?e(this.state.data):e;this.runPluginHandler("onMutate",r),this.setState({data:r})},t}();const gr=hr;function vr(t,e,r){e===void 0&&(e={}),r===void 0&&(r=[]);var n=e.manual,a=n===void 0?!1:n,i=e.ready,s=i===void 0?!0:i,u=Be(e,["manual","ready"]);De&&e.defaultParams&&!Array.isArray(e.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof e.defaultParams));var o=O({manual:a,ready:s},u),c=Oe(t),d=dt(),l=Ye(function(){var v=r.map(function(h){var g;return(g=h?.onInit)===null||g===void 0?void 0:g.call(h,o)}).filter(Boolean);return new gr(c,o,d,Object.assign.apply(Object,C([{}],T(v),!1)))},[]);return l.options=o,l.pluginImpls=r.map(function(v){return v(l,o)}),pr(function(){if(!a&&s){var v=l.state.params||e.defaultParams||[];l.run.apply(l,C([],T(v),!1))}}),we(function(){l.cancel()}),{loading:l.state.loading,data:l.state.data,error:l.state.error,params:l.state.params||[],cancel:k(l.cancel.bind(l)),refresh:k(l.refresh.bind(l)),refreshAsync:k(l.refreshAsync.bind(l)),run:k(l.run.bind(l)),runAsync:k(l.runAsync.bind(l)),mutate:k(l.mutate.bind(l))}}function mr(t,e,r){return vr(t,e,C(C([],T(r||[]),!1),[Yt,Ut,Zt,tr,fr,Lt,zt,nr],!1))}function br(t,e){var r,n,a=[],i;Array.isArray(e)?a=e:Re(e)&&(a=(r=e?.defaultSelected)!==null&&r!==void 0?r:a,i=(n=e?.itemKey)!==null&&n!==void 0?n:i);var s=function(f){return ke(i)?i(f):nt(i)&&Re(f)?f[i]:f},u=T(m.useState(a),2),o=u[0],c=u[1],d=m.useMemo(function(){var f=new Map;return Array.isArray(o)&&o.forEach(function(y){f.set(s(y),y)}),f},[o]),l=function(f){return d.has(s(f))},v=function(f){d.set(s(f),f),c(Array.from(d.values()))},h=function(f){d.delete(s(f)),c(Array.from(d.values()))},g=function(f){l(f)?h(f):v(f)},b=function(){t.forEach(function(f){d.set(s(f),f)}),c(Array.from(d.values()))},R=function(){t.forEach(function(f){d.delete(s(f))}),c(Array.from(d.values()))},j=m.useMemo(function(){return t.every(function(f){return!d.has(s(f))})},[t,d]),P=m.useMemo(function(){return t.every(function(f){return d.has(s(f))})&&!j},[t,d,j]),$=m.useMemo(function(){return!j&&!P},[j,P]),H=function(){return P?R():b()},S=function(){d.clear(),c([])};return{selected:o,noneSelected:j,allSelected:P,partiallySelected:$,setSelected:c,isSelected:l,select:k(v),unSelect:k(h),toggle:k(g),selectAll:k(b),unSelectAll:k(R),clearAll:k(S),toggleAll:k(H)}}var yr=at(m.useLayoutEffect);const xr=yr;var wr=te?xr:it;const kr=wr;function Tr(t){var e=T(gt(function(){var a=K(t);return a?{width:a.clientWidth,height:a.clientHeight}:void 0}),2),r=e[0],n=e[1];return kr(function(){var a=K(t);if(a){var i=new Je(function(s){s.forEach(function(u){var o=u.target,c=o.clientWidth,d=o.clientHeight;n({width:c,height:d})})});return i.observe(a),function(){i.disconnect()}}},[],t),r}var jr=function(t,e){var r=e.containerTarget,n=e.wrapperTarget,a=e.itemHeight,i=e.overscan,s=i===void 0?5:i,u=Oe(a),o=Tr(r),c=m.useRef(!1),d=T(m.useState([]),2),l=d[0],v=d[1],h=T(m.useState({}),2),g=h[0],b=h[1],R=function(f,y){if(ae(u.current))return Math.ceil(f/u.current);for(var w=0,I=0,F=y;F<t.length;F++){var N=u.current(F,t[F]);if(w+=N,I=F,w>=f)break}return I-y},j=function(f){if(ae(u.current))return Math.floor(f/u.current);for(var y=0,w=0,I=0;I<t.length;I++){var F=u.current(I,t[I]);if(y+=F,y>=f){w=I;break}}return w+1},P=function(f){if(ae(u.current)){var y=f*u.current;return y}var w=t.slice(0,f).reduce(function(I,F,N){return I+u.current(N,t[N])},0);return w},$=m.useMemo(function(){return ae(u.current)?t.length*u.current:t.reduce(function(f,y,w){return f+u.current(w,t[w])},0)},[t]),H=function(){var f=K(r);if(f){var y=f.scrollTop,w=f.clientHeight,I=j(y),F=R(w,I),N=Math.max(0,I-s),de=Math.min(t.length,I+F+s),ne=P(N);b({height:$-ne+"px",marginTop:ne+"px"}),v(t.slice(N,de).map(function(x,B){return{data:x,index:B+N}}))}};V(function(){var f=K(n);f&&Object.keys(g).forEach(function(y){return f.style[y]=g[y]})},[g]),m.useEffect(function(){!o?.width||!o?.height||H()},[o?.width,o?.height,t]),ot("scroll",function(f){if(c.current){c.current=!1;return}f.preventDefault(),H()},{target:r});var S=function(f){var y=K(r);y&&(c.current=!0,y.scrollTop=P(f),H())};return[l,k(S)]};const Ir=jr;function Cr(t){const{editor:e}=t;if(!e)return null;const r=k(n=>{const{onClick:a,disabled:i,active:s,title:u,Icon:o}=n;return p.jsx(oe,{title:u,children:p.jsx(re,{onClick:a,disabled:i,type:s?"primary":"text",icon:p.jsx(o,{size:20,stroke:1.4})})})});return p.jsx("div",{className:"sn-editor-menuBar",children:p.jsxs("div",{children:[r({onClick:()=>e.chain().focus().toggleBold().run(),disabled:!e.can().chain().focus().toggleBold().run(),active:e.isActive("bold"),title:"加粗",Icon:vt}),r({onClick:()=>e.chain().focus().toggleBulletList().run(),disabled:!1,active:e.isActive("bulletList"),title:"无序列表",Icon:Ht}),r({onClick:()=>e.chain().focus().toggleTaskList().run(),disabled:!1,active:e.isActive("taskList"),title:"任务列表",Icon:mt}),r({onClick:()=>e.chain().focus().undo().run(),disabled:!e.can().chain().focus().undo().run(),active:!1,title:"撤销",Icon:At}),r({onClick:()=>e.chain().focus().redo().run(),disabled:!e.can().chain().focus().redo().run(),active:!1,title:"重做",Icon:Et})]})})}const Rr=bt.create({name:"image",addOptions(){return{inline:!1,allowBase64:!1,HTMLAttributes:{}}},inline(){return this.options.inline},group(){return this.options.inline?"inline":"block"},draggable:!0,addAttributes(){return{src:{default:null},alt:{default:null},title:{default:null},width:{default:null},height:{default:null},"data-id":{default:null},sizeSlug:{default:null}}},parseHTML(){return[{tag:this.options.allowBase64?"img[src]":'img[src]:not([src^="data:"])'}]},renderHTML({HTMLAttributes:t}){const e=a=>{const{naturalHeight:i}=a.target,u=`height: ${Math.ceil(i/50)*50+50}px;`;a.target.parentNode.setAttribute("style",u)},r=document.createElement("img");r.onload=e;const n=yt(this.options.HTMLAttributes,t);for(const a in n)if(Object.hasOwnProperty.call(n,a)){const i=n[a];r.setAttribute(a,i)}return["figure",{class:"sn-block-image",style:"height: auto;"},r]},addCommands(){return{setImage:t=>({commands:e})=>e.insertContent({type:this.name,attrs:t})}}});const Pr=t=>{const{event:e,content:r}=t,n=xt({extensions:[wt,kt.configure({protocols:["ftp","mailto"],autolink:!1}),Rr,Tt,jt.configure({nested:!0})],content:r,onUpdate:({editor:i})=>{a(i)}}),{run:a}=_e(i=>{e.emit(i)},{wait:50});return M.useEffect(()=>{n&&n.commands.setContent(r)},[r,n]),M.useEffect(()=>()=>{n&&n.destroy()},[n]),p.jsxs("div",{className:"sn-editor",children:[n&&p.jsx(Cr,{editor:n}),p.jsx(It,{editor:n})]})},Sr=A.div`
    height: 100%;
`,Mr=t=>{const{note:e,tools:r}=ze(),{refresh:n}=t,[a,i]=M.useState(""),s=st(),{run:u}=_e(()=>{n()},{wait:500});return s.useSubscription(o=>{try{if(o.isEmpty)e.openId>0&&e.delectNote(e.openId).then(()=>{n(),e.openId=0});else{const c=o.getHTML();e.openId>0?e.updateNote(e.openId,{content:c}).then(()=>{u()}):e.openId===0&&e.addNote({content:c}).then(d=>{e.open(d),n()})}}catch(c){console.log("%c [ error ]-52","font-size:13px; background:pink; color:#bf2c9f;",c)}}),M.useEffect(()=>{e.openId>0?e.findNote(e.openId).then(o=>{o&&i(o.content)}).catch(o=>{o.name==="DatabaseClosedError"&&window.location.reload(),r.error("获取便签失败"),console.error("findNote",o)}):e.openId===0&&i("")},[e.openId]),p.jsx(Sr,{children:p.jsx(Pr,{event:s,content:a})})},Ar=We(Mr);class Er extends M.Component{createMarkup(e){return{__html:e}}extractText(e){const r=document.createElement("div");return r.innerHTML=e,r.textContent||r.innerText||""}render(){const e=this.props.content,r=this.extractText(e);return p.jsx(p.Fragment,{children:r})}}function Hr(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,Qe(t,e)}var D=function(t){Hr(e,t);function e(r){var n;return n=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,Ve(n)}return e}(et(Error));function ve(t){return Math.round(t*255)}function Fr(t,e,r){return ve(t)+","+ve(e)+","+ve(r)}function ee(t,e,r,n){if(n===void 0&&(n=Fr),e===0)return n(r,r,r);var a=(t%360+360)%360/60,i=(1-Math.abs(2*r-1))*e,s=i*(1-Math.abs(a%2-1)),u=0,o=0,c=0;a>=0&&a<1?(u=i,o=s):a>=1&&a<2?(u=s,o=i):a>=2&&a<3?(o=i,c=s):a>=3&&a<4?(o=s,c=i):a>=4&&a<5?(u=s,c=i):a>=5&&a<6&&(u=i,c=s);var d=r-i/2,l=u+d,v=o+d,h=c+d;return n(l,v,h)}var Ae={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function Lr(t){if(typeof t!="string")return t;var e=t.toLowerCase();return Ae[e]?"#"+Ae[e]:t}var $r=/^#[a-fA-F0-9]{6}$/,Nr=/^#[a-fA-F0-9]{8}$/,Dr=/^#[a-fA-F0-9]{3}$/,Br=/^#[a-fA-F0-9]{4}$/,me=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,Or=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,Wr=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,zr=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function U(t){if(typeof t!="string")throw new D(3);var e=Lr(t);if(e.match($r))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(Nr)){var r=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:r}}if(e.match(Dr))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(Br)){var n=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:n}}var a=me.exec(e);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var i=Or.exec(e.substring(0,50));if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10),alpha:parseFloat(""+i[4])>1?parseFloat(""+i[4])/100:parseFloat(""+i[4])};var s=Wr.exec(e);if(s){var u=parseInt(""+s[1],10),o=parseInt(""+s[2],10)/100,c=parseInt(""+s[3],10)/100,d="rgb("+ee(u,o,c)+")",l=me.exec(d);if(!l)throw new D(4,e,d);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var v=zr.exec(e.substring(0,50));if(v){var h=parseInt(""+v[1],10),g=parseInt(""+v[2],10)/100,b=parseInt(""+v[3],10)/100,R="rgb("+ee(h,g,b)+")",j=me.exec(R);if(!j)throw new D(4,e,R);return{red:parseInt(""+j[1],10),green:parseInt(""+j[2],10),blue:parseInt(""+j[3],10),alpha:parseFloat(""+v[4])>1?parseFloat(""+v[4])/100:parseFloat(""+v[4])}}throw new D(5)}function _r(t){var e=t.red/255,r=t.green/255,n=t.blue/255,a=Math.max(e,r,n),i=Math.min(e,r,n),s=(a+i)/2;if(a===i)return t.alpha!==void 0?{hue:0,saturation:0,lightness:s,alpha:t.alpha}:{hue:0,saturation:0,lightness:s};var u,o=a-i,c=s>.5?o/(2-a-i):o/(a+i);switch(a){case e:u=(r-n)/o+(r<n?6:0);break;case r:u=(n-e)/o+2;break;default:u=(e-r)/o+4;break}return u*=60,t.alpha!==void 0?{hue:u,saturation:c,lightness:s,alpha:t.alpha}:{hue:u,saturation:c,lightness:s}}function W(t){return _r(U(t))}var Yr=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},ye=Yr;function Y(t){var e=t.toString(16);return e.length===1?"0"+e:e}function be(t){return Y(Math.round(t*255))}function qr(t,e,r){return ye("#"+be(t)+be(e)+be(r))}function ce(t,e,r){return ee(t,e,r,qr)}function Ur(t,e,r){if(typeof t=="number"&&typeof e=="number"&&typeof r=="number")return ce(t,e,r);if(typeof t=="object"&&e===void 0&&r===void 0)return ce(t.hue,t.saturation,t.lightness);throw new D(1)}function Xr(t,e,r,n){if(typeof t=="number"&&typeof e=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?ce(t,e,r):"rgba("+ee(t,e,r)+","+n+")";if(typeof t=="object"&&e===void 0&&r===void 0&&n===void 0)return t.alpha>=1?ce(t.hue,t.saturation,t.lightness):"rgba("+ee(t.hue,t.saturation,t.lightness)+","+t.alpha+")";throw new D(2)}function xe(t,e,r){if(typeof t=="number"&&typeof e=="number"&&typeof r=="number")return ye("#"+Y(t)+Y(e)+Y(r));if(typeof t=="object"&&e===void 0&&r===void 0)return ye("#"+Y(t.red)+Y(t.green)+Y(t.blue));throw new D(6)}function fe(t,e,r,n){if(typeof t=="string"&&typeof e=="number"){var a=U(t);return"rgba("+a.red+","+a.green+","+a.blue+","+e+")"}else{if(typeof t=="number"&&typeof e=="number"&&typeof r=="number"&&typeof n=="number")return n>=1?xe(t,e,r):"rgba("+t+","+e+","+r+","+n+")";if(typeof t=="object"&&e===void 0&&r===void 0&&n===void 0)return t.alpha>=1?xe(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new D(7)}var Kr=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Gr=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},Zr=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Jr=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function z(t){if(typeof t!="object")throw new D(8);if(Gr(t))return fe(t);if(Kr(t))return xe(t);if(Jr(t))return Xr(t);if(Zr(t))return Ur(t);throw new D(8)}function Ke(t,e,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=e?t.apply(this,a):Ke(t,e,a)}}function E(t){return Ke(t,t.length,[])}function Qr(t,e){if(e==="transparent")return e;var r=W(e);return z(L({},r,{hue:r.hue+parseFloat(t)}))}E(Qr);function X(t,e,r){return Math.max(t,Math.min(e,r))}function Vr(t,e){if(e==="transparent")return e;var r=W(e);return z(L({},r,{lightness:X(0,1,r.lightness-parseFloat(t))}))}E(Vr);function en(t,e){if(e==="transparent")return e;var r=W(e);return z(L({},r,{saturation:X(0,1,r.saturation-parseFloat(t))}))}E(en);function tn(t,e){if(e==="transparent")return e;var r=W(e);return z(L({},r,{lightness:X(0,1,r.lightness+parseFloat(t))}))}var rn=E(tn),ie=rn;function nn(t,e,r){if(e==="transparent")return r;if(r==="transparent")return e;if(t===0)return r;var n=U(e),a=L({},n,{alpha:typeof n.alpha=="number"?n.alpha:1}),i=U(r),s=L({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),u=a.alpha-s.alpha,o=parseFloat(t)*2-1,c=o*u===-1?o:o+u,d=1+o*u,l=(c/d+1)/2,v=1-l,h={red:Math.floor(a.red*l+s.red*v),green:Math.floor(a.green*l+s.green*v),blue:Math.floor(a.blue*l+s.blue*v),alpha:a.alpha*parseFloat(t)+s.alpha*(1-parseFloat(t))};return fe(h)}var an=E(nn),Ge=an;function on(t,e){if(e==="transparent")return e;var r=U(e),n=typeof r.alpha=="number"?r.alpha:1,a=L({},r,{alpha:X(0,1,(n*100+parseFloat(t)*100)/100)});return fe(a)}E(on);function sn(t,e){if(e==="transparent")return e;var r=W(e);return z(L({},r,{saturation:X(0,1,r.saturation+parseFloat(t))}))}E(sn);function un(t,e){return e==="transparent"?e:z(L({},W(e),{hue:parseFloat(t)}))}E(un);function cn(t,e){return e==="transparent"?e:z(L({},W(e),{lightness:parseFloat(t)}))}E(cn);function ln(t,e){return e==="transparent"?e:z(L({},W(e),{saturation:parseFloat(t)}))}E(ln);function fn(t,e){return e==="transparent"?e:Ge(parseFloat(t),"rgb(0, 0, 0)",e)}E(fn);function dn(t,e){return e==="transparent"?e:Ge(parseFloat(t),"rgb(255, 255, 255)",e)}E(dn);function pn(t,e){if(e==="transparent")return e;var r=U(e),n=typeof r.alpha=="number"?r.alpha:1,a=L({},r,{alpha:X(0,1,+(n*100-parseFloat(t)*100).toFixed(2)/100)});return fe(a)}E(pn);const{useToken:hn}=ut,gn=A(Mt)`
  min-height: calc(100vh - ${qe}px);
  background-color: var(--fff);
`,vn=A(Ue)`
    &:after{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);
        width: 20px;
        height: 100%;
        box-shadow: var(--notebrBoxShadow) 16px 0px 20px -10px inset;
        z-index: 10;
        border-right: 1px solid var(--notebrColor);
    }
`,mn=A(Ue)`
    transition: all 0.3s;
    border-left: 1px solid var(--borderColor);
`,bn=A.div`
    height: 50px;
    border-bottom: 1px solid var(--notebrColor);
    box-sizing: border-box;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`,yn=A.div`
 height: calc(100vh - ${qe+50}px);
 overflow-y: auto;
`,Ee=A(Pt.div)`
    cursor: pointer;
    height: 50px;
    box-sizing: border-box;
    border-bottom: 1px solid var(--notebrColor);
    padding: 0 20px;
    display: flex;
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        .ant-checkbox {
            margin-right: 10px;
        }
    }
    .right {
        flex: 1;
        width: 0;
        position: relative;
        .sticky {
            position: absolute;
            top: 50%;
            right: 4px;
            transform: translateY(-50%);
            color: var(--fff);
            background-color: ${t=>ie(.2,t.colorPrimary)};
            width: 24px;
            height: 24px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%; 
        }
    }
    &.active {
        background-color: ${t=>t.colorPrimaryBg};
        .ant-typography {
            color: ${t=>ie(.2,t.colorPrimary)};
        }
        time {
            color: ${t=>ie(.3,t.colorPrimary)};
        }
        .right {
            .sticky {
                color: ${t=>ie(.2,t.colorPrimary)};
                background-color: var(--fff);
            }
        }
    }
`,He=A.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 0 0;
    time {
        font-size: 12px;
        color: #666;
    }
`,Fe=A(ht.Text)`
    font-size: 14px;
    color: #444;
`,xn=A.div`
    display: flex;
    height: 50px;
    align-items: center;
    position: absolute;
    top: 0;
    right: 20px;
`,wn=A(re)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #666;
`,Le=A(re)`
    display: flex;
    justify-content: center;
    align-items: center;
`,kn=A(re)`
    display: flex;
    justify-content: center;
    align-items: center;
`,Tn=A(re)`
    display: flex;
    justify-content: center;
    align-items: center;
`,$e=window.innerWidth,Ne=window.innerHeight,J=240,Q=240;function jn(t,e,r){return r.some(n=>t<n.left+J&&t+J>n.left&&e<n.top+Q&&e+Q>n.top)}function In(t,e=70,r=70){let n=e,a=r;for(;;){if(!jn(n,a,t)&&n+J<=$e&&a+Q<=Ne)return{left:n,top:a};if(n+=J,n+J>$e&&(n=e,a+=Q),a+Q>Ne)throw new Error("没有足够的空间放置新的div")}}const Cn=t=>{const{tools:e,note:r,option:n,home:a}=ze(),{token:i}=hn(),[s,u]=M.useState(!1),[o,c]=M.useState([]),d=M.useRef(null),l=M.useRef(null),v=k(()=>r.getNote(1,9999).then(x=>x.list)),{data:h,error:g,refresh:b,run:R}=mr(v,{manual:!0}),j=k(x=>{r.open(x)}),P=k(x=>{r.delectNote(x).then(()=>{b(),r.openId=-1,s&&u(!1)})}),$=k(()=>{const{homeNoteData:x}=n.item,B=x?.map(_=>_.id)||[];c(B)}),H=M.useMemo(()=>(typeof h<"u"&&!h?.length&&!g&&r.openId!=0&&setTimeout(()=>{r.open(0)},50),Array.from(h||[])),[h]),S=M.useMemo(()=>(h||[]).map(x=>x.id),[h]),[f]=Ir(H,{containerTarget:d,wrapperTarget:l,itemHeight:50,overscan:10}),{selected:y,allSelected:w,isSelected:I,toggle:F,toggleAll:N,partiallySelected:de}=br(S),ne=M.useCallback((x,B)=>{x.stopPropagation(),x.preventDefault();const _=o?.includes(B);e.setRightClickEvent(x,[{label:_?"从首屏移除":"贴在首屏",icon:_?p.jsx(St,{}):p.jsx(Pe,{}),key:"top",onClick:()=>{if(_)r.removeSticky(B,!0);else try{const{homeNoteData:pe}=n.item,je=In(pe);r.addSticky({id:B,left:je.left,top:je.top})}catch(pe){console.error(pe.message)}setTimeout(()=>{$()},200)}},{label:"删除便签",icon:p.jsx(he,{}),key:"del-group",onClick:()=>{P([B])}}])},[o]);return M.useEffect(()=>{R(),$()},[]),M.useEffect(()=>{r.openId==-1&&f?.length&&r.open(f[0]?.data?.id)},[f]),V(()=>{setTimeout(()=>{r.open(-1),b(),$()},300)},[e.timeKey]),p.jsxs(gn,{className:"sn-bg-wrap",children:[p.jsxs(vn,{span:7,children:[p.jsxs(bn,{children:[p.jsx("div",{className:"left",children:s?p.jsxs(Ct,{children:[p.jsx(Se,{checked:w,onClick:N,indeterminate:de,children:"全选"}),p.jsx(Ie,{placement:"bottomRight",title:"确认删除该便签吗?",onConfirm:()=>P(y),okText:"确定",cancelText:"取消",disabled:y.length===0,children:p.jsx(Le,{danger:!0,disabled:y.length===0,size:"small",icon:p.jsx(he,{size:16,stroke:1.4}),children:"删除"})}),p.jsx(Le,{size:"small",icon:p.jsx(pt,{size:16,stroke:1.4}),onClick:()=>u(!1),children:"取消"})]}):p.jsx(oe,{placement:"top",title:"批量删除",children:p.jsx(wn,{type:"link",disabled:S.length===0,icon:p.jsx(Ft,{size:18,stroke:1.4}),onClick:()=>u(!0)})})}),p.jsx("div",{className:"right",children:p.jsx(oe,{placement:"top",title:"新增便签",children:p.jsx(kn,{icon:p.jsx(Rt,{size:18,stroke:1.4}),onClick:()=>{r.open(0)}})})})]}),p.jsx(yn,{ref:d,className:"scroll-container",children:p.jsxs("div",{ref:l,children:[r.openId===0?p.jsx(Ee,{className:"active",colorPrimaryBg:i.colorPrimaryBg,colorPrimary:i.colorPrimary,children:p.jsxs("div",{className:"right",children:[p.jsx(He,{children:p.jsx("time",{children:Ce().format("YYYY年MM月DD日 HH:mm")})}),p.jsx(Fe,{ellipsis:!0,children:"新建便签"})]})}):null,(f||[]).map((x,B)=>p.jsxs(Ee,{onClick:()=>j(x.data?.id),className:x.data?.id===r.openId?"active":"",colorPrimaryBg:i.colorPrimaryBg,colorPrimary:i.colorPrimary,onContextMenu:_=>ne(_,x.data?.id),children:[p.jsx("div",{className:"left",children:s?p.jsx(Se,{checked:I(x.data?.id),onClick:()=>F(x.data?.id)}):null}),p.jsxs("div",{className:"right",children:[p.jsx(He,{children:p.jsx("time",{children:Ce(x.data?.updateTime).format("YYYY年MM月DD日 HH:mm")})}),p.jsx(Fe,{ellipsis:!0,children:p.jsx(Er,{content:x.data?.content})}),o.includes(x.data?.id)?p.jsx("div",{className:"sticky",children:p.jsx(Pe,{size:14,stroke:1.8})}):null]})]},x.data?.id))]})})]}),p.jsxs(mn,{span:17,children:[p.jsx(xn,{children:r.openId>0?p.jsx(Ie,{placement:"bottomRight",title:"确认删除该便签吗?",onConfirm:()=>P([r.openId]),okText:"确定",cancelText:"取消",children:p.jsx(oe,{placement:"top",title:"删除便签",children:p.jsx(Tn,{danger:!0,type:"text",icon:p.jsx(he,{size:20,stroke:1.4})})})}):null}),p.jsx(Ar,{refresh:b})]})]})},qn=We(Cn);export{qn as default};
