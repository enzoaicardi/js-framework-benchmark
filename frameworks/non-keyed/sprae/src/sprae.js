function t(){throw new Error("Cycle detected")}var e=Symbol.for("preact-signals");function r(){if(l>1)l--;else{for(var t,e=!1;void 0!==a;){var r=a;for(a=void 0,u++;void 0!==r;){var i=r.o;if(r.o=void 0,r.f&=-3,!(8&r.f)&&p(r))try{r.c()}catch(r){e||(t=r,e=!0)}r=i}}if(u=0,l--,e)throw t}}function i(t){if(l>0)return t();l++;try{return t()}finally{r()}}var n=void 0,o=0;function s(t){if(o>0)return t();var e=n;n=void 0,o++;try{return t()}finally{o--,n=e}}var a=void 0,l=0,u=0,f=0;function c(t){if(void 0!==n){var e=t.n;if(void 0===e||e.t!==n)return e={i:0,S:t,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:e},void 0!==n.s&&(n.s.n=e),n.s=e,t.n=e,32&n.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=n.s,e.n=void 0,n.s.n=e,n.s=e),e}}function h(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function v(t){return new h(t)}function p(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function d(t){for(var e=t.s;void 0!==e;e=e.n){var r=e.S.n;if(void 0!==r&&(e.r=r),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function y(t){for(var e=t.s,r=void 0;void 0!==e;){var i=e.p;-1===e.i?(e.S.U(e),void 0!==i&&(i.n=e.n),void 0!==e.n&&(e.n.p=i)):r=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=i}t.s=r}function m(t){h.call(this,void 0),this.x=t,this.s=void 0,this.g=f-1,this.f=4}function b(t){var e=t.u;if(t.u=void 0,"function"==typeof e){l++;var i=n;n=void 0;try{e()}catch(e){throw t.f&=-2,t.f|=8,g(t),e}finally{n=i,r()}}}function g(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,b(t)}function A(t){if(n!==this)throw new Error("Out-of-order effect");y(this),n=t,this.f&=-2,8&this.f&&g(this),r()}function w(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function S(t){var e=new w(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}h.prototype.brand=e,h.prototype.h=function(){return!0},h.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},h.prototype.U=function(t){if(void 0!==this.t){var e=t.e,r=t.x;void 0!==e&&(e.x=r,t.e=void 0),void 0!==r&&(r.e=e,t.x=void 0),t===this.t&&(this.t=r)}},h.prototype.subscribe=function(t){var e=this;return S((function(){var r=e.value,i=32&this.f;this.f&=-33;try{t(r)}finally{this.f|=i}}))},h.prototype.valueOf=function(){return this.value},h.prototype.toString=function(){return this.value+""},h.prototype.toJSON=function(){return this.value},h.prototype.peek=function(){return this.v},Object.defineProperty(h.prototype,"value",{get:function(){var t=c(this);return void 0!==t&&(t.i=this.i),this.v},set:function(e){if(n instanceof m&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){u>100&&t(),this.v=e,this.i++,f++,l++;try{for(var i=this.t;void 0!==i;i=i.x)i.t.N()}finally{r()}}}}),(m.prototype=new h).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===f)return!0;if(this.g=f,this.f|=1,this.i>0&&!p(this))return this.f&=-2,!0;var t=n;try{d(this),n=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return n=t,y(this),this.f&=-2,!0},m.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}h.prototype.S.call(this,t)},m.prototype.U=function(t){if(void 0!==this.t&&(h.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},m.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},m.prototype.peek=function(){if(this.h()||t(),16&this.f)throw this.v;return this.v},Object.defineProperty(m.prototype,"value",{get:function(){1&this.f&&t();var e=c(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),w.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},w.prototype.S=function(){1&this.f&&t(),this.f|=1,this.f&=-9,b(this),d(this),l++;var e=n;return n=this,A.bind(this,e)},w.prototype.N=function(){2&this.f||(this.f|=2,this.o=a,a=this)},w.prototype.d=function(){this.f|=8,1&this.f||g(this)};var k,x=Symbol.dispose||=Symbol("dispose"),O=Symbol("signals"),N={Array:Array,Object:Object,Number:Number,String:String,Boolean:Boolean,Date:Date,console:console,window:window,document:document,history:history,navigator:navigator,location:location,screen:screen,localStorage:localStorage,sessionStorage:sessionStorage,alert:alert,prompt:prompt,confirm:confirm,fetch:fetch,performance:performance,setTimeout:setTimeout,setInterval:setInterval,requestAnimationFrame:requestAnimationFrame};function E(t,e){if(t?.constructor!==Object&&!Array.isArray(t))return t;if(t[O]&&!e)return t;const r=t[O],n=Array.isArray(t)&&v((r||t).length),o=e?Object.create((e=E(e))[O]):Array.isArray(t)?[]:{},a=o.constructor.prototype,l=new Proxy(t,{has:()=>!0,get(t,r){if(n){if("length"===r)return a[k]?n.peek():n.value;k=r}if(a[r])return a[r];if(r===O)return o;const i=o[r]||u(r);return i?i.value:e?e[r]:N[r]},set(t,e,r){if(n&&"length"===e)return i((()=>{for(let t=r,e=o.length;t<e;t++)delete l[t];n.value=o.length=t.length=r})),!0;const a=o[e]||u(e)||v(),f=a.peek();return r===f||(a._set?a._set(r):Array.isArray(r)&&Array.isArray(f)?s((()=>i((()=>{let i=0,n=r.length,o=t[e];for(;i<n;i++)f[i]=o[i]=r[i];f.length=n})))):a.value=E(t[e]=r)),n&&e>=n.peek()&&(n.value=o.length=t.length=Number(e)+1),!0},deleteProperty:(t,e)=>(o[e]?._del?.(),delete o[e],delete t[e],!0)});for(let e in t)o[e]=r?.[e]??u(e);function u(e){if(t.hasOwnProperty(e)){const i=Object.getOwnPropertyDescriptor(t,e);return i?.get?((o[e]=(r=i.get.bind(l),new m(r)))._set=i.set?.bind(l),o[e]):o[e]=i.value?.peek?i.value:v(E(i.value))}var r}return l}var j=Promise.prototype.then.bind(Promise.resolve()),_={},$={};_.if=(t,e,r)=>{let i=document.createTextNode(""),n=[I(t,e,":if")],o=[t],s=t;for(;(s=t.nextElementSibling)&&s.hasAttribute(":else");)s.removeAttribute(":else"),(e=s.getAttribute(":if"))?(s.removeAttribute(":if"),s.remove(),o.push(s),n.push(I(t,e,":else :if"))):(s.remove(),o.push(s),n.push((()=>1)));t.replaceWith(s=i);const a=S((()=>{let t=n.findIndex((t=>t(r)));o[t]!=s&&((s[P]||s).replaceWith(s=o[t]||i),M(s,r))}));return()=>{for(const t of o)t[x]?.();a()}};var P=Symbol(":each");_.each=(t,e,r)=>{let n=function(t){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,r=t.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!r)return;let i=r[2].trim(),n=r[1].replace(/^\s*\(|\)\s*$/g,"").trim(),o=n.match(e);return o?[n.replace(e,"").trim(),o[1].trim(),i]:[n,"",i]}(e);if(!n)return L(new Error,t,e,":each");const[o,a,l]=n,u=t[P]=document.createTextNode("");t.replaceWith(u);const f=I(t,l,":each");let c,h,v=0;return S((()=>{let n=f(r);return n?"number"==typeof n?n=Array.from({length:n},((t,e)=>e)):Array.isArray(n)||("object"==typeof n?(h=Object.keys(n),n=Object.values(n)):L(Error("Bad items value"),t,e,":each")):n=[],s((()=>i((()=>{if(c?.[O][0]?.peek){let t=n.length,e=0;for(;e<t;e++)c[e]=n[e];c.length=t}else{for(let t=0,e=c?.[O];t<v;t++)e[t]?._del();c=n,c[O]||={}}})))),S((()=>{let e=n.length;v!==e&&s((()=>i((()=>{const i=c[O];for(let n=v;n<e;n++){c[n];const e=t.cloneNode(!0),s=E({[o]:i[n]??c[n],[a]:h?.[n]??n},r);u.before(e),M(e,s);const{_del:l}=i[n]||={};i[n]._del=()=>{delete i[n],l?.(),e[x](),e.remove(),delete c[n]}}v=e}))))}))})),()=>i((()=>{for(let t of c[O])t?._del();c.length=0}))},_.with=(t,e,r)=>(M(t,E(I(t,e,":with")(r),r)),t[x]),_.ref=(t,e,r)=>{r[e]=t},$.render=(t,e,r)=>{let i=I(t,e,":render")(r);i||L(new Error("Template not found"),t,e,":render");let n=i.content.cloneNode(!0);return t.replaceChildren(n),M(t,r),t[x]},$.id=(t,e,r)=>{let i=I(t,e,":id");return S((()=>{return e=i(r),t.id=e||0===e?e:"";var e}))},$.class=(t,e,r)=>{let i=I(t,e,":class"),n=t.getAttribute("class");return S((()=>{let e=i(r),o=[n];e&&("string"==typeof e?o.push(e):Array.isArray(e)?o.push(...e):o.push(...Object.entries(e).map((([t,e])=>e?t:"")))),(o=o.filter(Boolean).join(" "))?t.setAttribute("class",o):t.removeAttribute("class")}))},$.style=(t,e,r)=>{let i=I(t,e,":style"),n=t.getAttribute("style")||"";return n.endsWith(";")||(n+="; "),S((()=>{let e=i(r);"string"==typeof e?t.setAttribute("style",n+e):s((()=>{t.setAttribute("style",n);for(let r in e)"symbol"!=typeof e[r]&&t.style.setProperty(r,e[r])}))}))},$.text=(t,e,r)=>{let i=I(t,e,":text");return S((()=>{let e=i(r);t.textContent=null==e?"":e}))},$[""]=(t,e,r)=>{let i=I(t,e,":");if(i)return S((()=>{let e=i(r);for(let r in e)K(t,r.replace(/[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,(t=>"-"+t.toLowerCase())),e[r])}))},$.value=(t,e,r)=>{let i,n,o=I(t,e,":value"),s="text"===t.type||""===t.type?e=>t.setAttribute("value",t.value=null==e?"":e):"TEXTAREA"===t.tagName||"text"===t.type||""===t.type?e=>(i=t.selectionStart,n=t.selectionEnd,t.setAttribute("value",t.value=null==e?"":e),i&&t.setSelectionRange(i,n)):"checkbox"===t.type?e=>(t.value=e?"on":"",K(t,"checked",e)):"select-one"===t.type?e=>{for(let e in t.options)e.removeAttribute("selected");t.value=e,t.selectedOptions[0]?.setAttribute("selected","")}:e=>t.value=e;return S((()=>{s(o(r))}))};var T=(t,e,r,i)=>{let n=i.startsWith("on")&&i.slice(2),o=I(t,e,":"+i);if(o){if(n){let e,i=S((()=>{e&&(e(),e=null);let i=o(r);i&&(e=C(t,n,i))}));return()=>(e?.(),i())}return S((()=>{K(t,i,o(r))}))}},C=(t,e,r)=>{if(!r)return;const i={evt:"",target:t,test:()=>!0};i.evt=(e.startsWith("on")?e.slice(2):e).replace(/\.(\w+)?-?([-\w]+)?/g,((t,e,r="")=>(i.test=W[e]?.(i,...r.split("-"))||i.test,"")));const{evt:n,target:o,test:s,defer:a,stop:l,prevent:u,...f}=i;a&&(r=a(r));const c=t=>s(t)&&(l&&t.stopPropagation(),u&&t.preventDefault(),r.call(o,t));return o.addEventListener(n,c,f),()=>o.removeEventListener(n,c,f)},W={prevent(t){t.prevent=!0},stop(t){t.stop=!0},once(t){t.once=!0},passive(t){t.passive=!0},capture(t){t.capture=!0},window(t){t.target=window},document(t){t.target=document},throttle(t,e){t.defer=t=>U(t,e?Number(e)||0:108)},debounce(t,e){t.defer=t=>B(t,e?Number(e)||0:108)},outside:t=>e=>{let r=t.target;return!(r.contains(e.target)||!1===e.target.isConnected||r.offsetWidth<1&&r.offsetHeight<1)},self:t=>e=>e.target===t.target,ctrl:(t,...e)=>t=>D.ctrl(t)&&e.every((e=>D[e]?D[e](t):t.key===e)),shift:(t,...e)=>t=>D.shift(t)&&e.every((e=>D[e]?D[e](t):t.key===e)),alt:(t,...e)=>t=>D.alt(t)&&e.every((e=>D[e]?D[e](t):t.key===e)),meta:(t,...e)=>t=>D.meta(t)&&e.every((e=>D[e]?D[e](t):t.key===e)),arrow:t=>D.arrow,enter:t=>D.enter,escape:t=>D.escape,tab:t=>D.tab,space:t=>D.space,backspace:t=>D.backspace,delete:t=>D.delete,digit:t=>D.digit,letter:t=>D.letter,character:t=>D.character},D={ctrl:t=>t.ctrlKey||"Control"===t.key||"Ctrl"===t.key,shift:t=>t.shiftKey||"Shift"===t.key,alt:t=>t.altKey||"Alt"===t.key,meta:t=>t.metaKey||"Meta"===t.key||"Command"===t.key,arrow:t=>t.key.startsWith("Arrow"),enter:t=>"Enter"===t.key,escape:t=>t.key.startsWith("Esc"),tab:t=>"Tab"===t.key,space:t=>" "===t.key||"Space"===t.key||" "===t.key,backspace:t=>"Backspace"===t.key,delete:t=>"Delete"===t.key,digit:t=>/^\d$/.test(t.key),letter:t=>/^[a-zA-Z]$/.test(t.key),character:t=>/^\S$/.test(t.key)},U=(t,e)=>{let r,i,n=o=>{r=!0,setTimeout((()=>{if(r=!1,i)return i=!1,n(o),t(o)}),e)};return e=>r?i=!0:(n(e),t(e))},B=(t,e)=>{let r;return i=>{clearTimeout(r),r=setTimeout((()=>{r=null,t(i)}),e)}},K=(t,e,r)=>{null==r||!1===r?t.removeAttribute(e):t.setAttribute(e,!0===r?"":"number"==typeof r||"string"==typeof r?r:"")},F={};function I(t,e,r){let i=F[e];if(!i)try{i=F[e]=new Function("__scope",`with (__scope) { let __; return ${e.trim()} };`)}catch(i){return L(i,t,e,r)}return n=>{let o;try{o=i.call(t,n)}catch(i){return L(i,t,e,r)}return o}}function L(t,e,r,i){Object.assign(t,{element:e,expression:r}),console.warn(`∴ ${t.message}\n\n${i}=${r?`"${r}"\n\n`:""}`,e),j((()=>{throw t}),0)}M.globals=N;var q=new WeakMap;function M(t,e){if(!t.children)return;if(q.has(t))return i((()=>Object.assign(q.get(t),e)));const r=E(e||{}),n=[],o=(t,e=t.parentNode)=>{for(let i in _){let o=":"+i;if(t.hasAttribute?.(o)){let s=t.getAttribute(o);if(t.removeAttribute(o),n.push(_[i](t,s,r,i)),q.has(t))return;if(t.parentNode!==e)return!1}}if(t.attributes)for(let e=0;e<t.attributes.length;){let i=t.attributes[e],o=i.name[0];if(":"===o||"@"===o){t.removeAttribute(i.name);let e="@"===o?`${i.value.includes("await")?"async":""} event=>{${i.value}}`:i.value,s=i.name.slice(1).split(o);for(let i of s){"@"===o&&(i="on"+i);let s=$[i]||T;n.push(s(t,e,r,i))}}else e++}for(let e,r=0;e=t.children[r];r++)!1===o(e,t)&&r--};return o(t),q.has(t)||(q.set(t,r),n.length&&Object.defineProperty(t,x,{value:()=>{for(;n.length;)n.shift()?.();q.delete(t)}})),r}var R=M;document.currentScript&&M(document.documentElement);export{R as default};