import{j as l}from"./styled-components.browser.esm-1bf82734.js";const g=t=>{const{url:c,size:r=30,style:s={},onlyDomain:i=!1}=t,a=o=>{try{o||(o=window.location.href);const e=new URL(o),n=new URL(window.chrome.runtime.getURL("/_favicon/"));return n.searchParams.set("pageUrl",i?e.origin:o),n.searchParams.set("size",r*2),n.toString()}catch(e){console.log("%c [ error - u ]-9","font-size:13px; background:pink; color:#bf2c9f;",o),console.log("%c [ error ]-15","font-size:13px; background:pink; color:#bf2c9f;",e)}return"/"};return l.jsx("img",{src:a(c),alt:"",style:{width:r,height:r,...s}})};export{g as F};
