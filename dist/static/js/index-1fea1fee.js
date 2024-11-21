import{s as p,R as m,j as o}from"./styled-components.browser.esm-1bf82734.js";import{g as a,u as h,a as x,o as g,b as v}from"./src/newtab/index-25a29073.js";import{M as y}from"./index-71972e6d.js";import"./EllipsisOutlined-8a1cae9e.js";import"./Overflow-2c41ac00.js";var k=function(e){return e.every(function(r){var t=a(r);return t?t.getRootNode()instanceof ShadowRoot:!1})},E=function(e){return e?e.getRootNode():document},w=function(e){if(!e||!document.getRootNode)return document;var r=Array.isArray(e)?e:[e];return k(r)?E(a(r[0])):document};const A=w;function R(e,r,t){t===void 0&&(t="click");var i=h(e);x(function(){var s=function(n){var f=Array.isArray(r)?r:[r];f.some(function(d){var l=a(d);return!l||l.contains(n.target)})||i.current(n)},u=A(r),c=Array.isArray(t)?t:[t];return c.forEach(function(n){return u.addEventListener(n,s)}),function(){c.forEach(function(n){return u.removeEventListener(n,s)})}},Array.isArray(t)?t:[t],r)}const C=p.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  transition: all 0.3s;
  box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.16),
    0 1px 14px -5px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  > .ant-menu {
    border-radius: 8px;
    min-width: 160px;
  }
  > .ant-menu-vertical {
    > li:not(.ant-menu-item-divider) {
      height: 34px;
      line-height: 34px;
      margin-bottom: 4px !important;
      display: flex;
      align-items: center;
      > svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`,b=e=>{const{tools:r}=v(),t=m.useRef(null),i=s=>{r.setRightClickEvent(null)};return R(()=>{i()},t,["click","contextmenu","scroll"]),!r.rightClickOpen||!r.rightClickMenu?null:o.jsx(o.Fragment,{children:o.jsx(C,{ref:t,style:{top:r.rightClickEvent.mouseY+"px",left:r.rightClickEvent.mouseX+"px"},children:o.jsx(y,{onClick:i,mode:"vertical",items:r.rightClickMenu})})})},D=g(b);export{D as default};
