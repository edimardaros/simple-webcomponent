let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),c=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),i=new WeakMap,u=e=>"sc-"+e.o,a=e=>"object"==(e=typeof e)||"function"===e,f=(e,t,...n)=>{let l=null,s=!1,o=!1;const r=[],c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!a(l))&&(l+=""),s&&o?r[r.length-1].i+=l:r.push(s?$(null,l):l),o=s)};c(n);const i=$(e,null);return i.u=t,r.length>0&&(i.$=r),i},$=(e,t)=>({t:0,h:e,i:t,m:null,$:null}),h={},y=(t,n,l)=>{const o=n.$[l];let r,c,i=0;if(null!==o.i)r=o.m=s.createTextNode(o.i);else if(r=o.m=s.createElement(o.h),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),o.$)for(i=0;i<o.$.length;++i)c=y(t,o,i),c&&r.appendChild(c);return r},d=(e,n,l,s,o,r)=>{let c,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=r;++o)s[o]&&(c=y(null,l,o),c&&(s[o].m=c,i.insertBefore(c,n)))},m=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.m.remove()},p=(e,t)=>e.h===t.h,w=(e,t)=>{const n=t.m=e.m,l=e.$,s=t.$,o=t.i;null===o?null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,r=0,c=t.length-1,i=t[0],u=t[c],a=l.length-1,f=l[0],$=l[a];for(;o<=c&&r<=a;)null==i?i=t[++o]:null==u?u=t[--c]:null==f?f=l[++r]:null==$?$=l[--a]:p(i,f)?(w(i,f),i=t[++o],f=l[++r]):p(u,$)?(w(u,$),u=t[--c],$=l[--a]):p(i,$)?(w(i,$),e.insertBefore(i.m,u.m.nextSibling),i=t[++o],$=l[--a]):p(u,f)?(w(u,f),e.insertBefore(u.m,i.m),u=t[--c],f=l[++r]):(s=y(t&&t[r],n,r),f=l[++r],s&&i.m.parentNode.insertBefore(s,i.m));o>c?d(e,null==l[a+1]?null:l[a+1].m,n,l,r,a):r>a&&m(t,o,c)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),d(n,null,t,s,0,s.length-1)):null!==l&&m(l,0,l.length-1):e.i!==o&&(n.data=o)},b=(e,t)=>{t&&!e.p&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.p=t)))},S=(e,t)=>{if(e.t|=16,!(4&e.t))return b(e,e.S),B((()=>g(e,t)));e.t|=512},g=(e,t)=>{const n=e.g;return C(void 0,(()=>M(e,n,t)))},M=async(e,t,n)=>{const l=e.M,o=l["s-rc"];n&&(e=>{const t=e.j,n=e.M,l=t.t,o=((e,t)=>{let n=u(t);const l=U.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(e);j(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>v(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},j=(n,l)=>{try{l=l.render(),n.t&=-17,n.t|=2,((n,l)=>{const s=n.M,o=n.v||$(null,null),r=(e=>e&&e.h===h)(l)?l:f(null,null,l);t=s.tagName,r.h=null,r.t|=4,n.v=r,r.m=o.m=s.shadowRoot||s,e=s["s-sc"],w(o,r)})(n,l)}catch(e){H(e,n.M)}return null},v=e=>{const t=e.M,n=e.S;64&e.t||(e.t|=64,O(t),e.k(t),n||k()),e.p&&(e.p(),e.p=void 0),512&e.t&&z((()=>S(e,!1))),e.t&=-517},k=()=>{O(s.documentElement),z((()=>(e=>{const t=o.ce("appload",{detail:{namespace:"stencil-tests"}});return e.dispatchEvent(t),t})(l)))},C=(e,t)=>e&&e.then?e.then(t):t(),O=e=>e.classList.add("hydrated"),P=(e,t,n)=>{if(t.C){const l=Object.entries(t.C),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>N(this).O.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=N(e),o=s.O.get(t),r=s.t,c=s.g;n=((e,t)=>null==e||a(e)?e:1&t?e+"":e)(n,l.C[t][0]),8&r&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.O.set(t,n),c&&2==(18&r)&&S(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){o.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},x=(e,t={})=>{const n=[],r=t.exclude||[],i=l.customElements,a=s.head,f=a.querySelector("meta[charset]"),$=s.createElement("style"),h=[];let y,d=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map((e=>{e[1].map((t=>{const l={t:t[0],o:t[1],C:t[2],P:t[3]};l.C=t[2];const s=l.o,a=class extends HTMLElement{constructor(e){super(e),A(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),d?h.push(this):o.jmp((()=>(e=>{if(0==(1&o.t)){const t=N(e),n=t.j,l=()=>{};if(!(1&t.t)){t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){b(t,t.S=n);break}}n.C&&Object.entries(n.C).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=R(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(P(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){H(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=u(n);if(!U.has(t)){const l=()=>{};((e,t,n)=>{let l=U.get(e);c&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,U.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.S,r=()=>S(t,!0);o&&o["s-rc"]?o["s-rc"].push(r):r()})(0,t,n)}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return N(this).N}};l.T=e[0],r.includes(s)||i.get(s)||(n.push(s),i.define(s,P(a,l,1)))}))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,f?f.nextSibling:a.firstChild),d=!1,h.length?h.map((e=>e.connectedCallback())):o.jmp((()=>y=setTimeout(k,30)))},E=new WeakMap,N=e=>E.get(e),T=(e,t)=>E.set(t.g=e,t),A=(e,t)=>{const n={t:0,M:e,j:t,O:new Map};return n.N=new Promise((e=>n.k=e)),e["s-p"]=[],e["s-rc"]=[],E.set(e,n)},H=(e,t)=>(0,console.error)(e,t),L=new Map,R=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=L.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(L.set(n,e),e[t])),H)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},U=new Map,W=[],q=[],F=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?z(_):o.raf(_))},V=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){H(e)}e.length=0},_=()=>{V(W),V(q),(n=W.length>0)&&o.raf(_)},z=e=>r().then(e),B=F(q,!0);export{h as H,x as b,f as h,r as p,T as r}