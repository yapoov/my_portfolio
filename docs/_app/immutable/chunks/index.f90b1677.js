function w(){}function F(t,e){for(const n in e)t[n]=e[n];return t}function k(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(k)}function O(t){return typeof t=="function"}function ut(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let b;function st(t,e){return b||(b=document.createElement("a")),b.href=e,t===b.href}function G(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ot(t,e,n){t.$$.on_destroy.push(I(e,n))}function ft(t,e,n,i){if(t){const r=q(t,e,n,i);return t[0](r)}}function q(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function at(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],l=Math.max(e.dirty.length,r.length);for(let s=0;s<l;s+=1)o[s]=e.dirty[s]|r[s];return o}return e.dirty|r}return e.dirty}function dt(t,e,n,i,r,o){if(r){const l=q(e,n,i,o);t.p(l,r)}}function _t(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const ht=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let E=!1;function J(){E=!0}function K(){E=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,a=(r>0&&e[n[r]].claim_order<=u?r+1:Q(1,r,x=>e[n[x]].claim_order,u))-1;i[c]=n[a]+1;const f=a+1;n[f]=c,r=Math.max(f,r)}const o=[],l=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);s>=c;s--)l.push(e[s]);s--}for(;s>=0;s--)l.push(e[s]);o.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<o.length&&l[c].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(l[c],a)}}function W(t,e){if(E){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function mt(t,e,n){E&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function pt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function S(t){return document.createTextNode(t)}function yt(){return S(" ")}function gt(){return S("")}function xt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function X(t){return Array.from(t.childNodes)}function Y(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,i,r=!1){Y(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(e(s)){const c=n(s);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(e(s)){const c=n(s);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,e,n,i){return B(t,r=>r.nodeName===e,r=>{const o=[];for(let l=0;l<r.attributes.length;l++){const s=r.attributes[l];n[s.name]||o.push(s.name)}o.forEach(l=>r.removeAttribute(l))},()=>i(e))}function wt(t,e,n){return Z(t,e,n,V)}function tt(t,e){return B(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function Et(t){return tt(t," ")}function vt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Nt(t,e){t.value=e??""}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function jt(t,e){return new t(e)}let y;function p(t){y=t}function H(){if(!y)throw new Error("Function called outside component initialization");return y}function Tt(t){H().$$.on_mount.push(t)}function Ct(t){H().$$.after_update.push(t)}const h=[],D=[];let m=[];const M=[],L=Promise.resolve();let N=!1;function P(){N||(N=!0,L.then(z))}function Dt(){return P(),L}function A(t){m.push(t)}const v=new Set;let _=0;function z(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),et(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;D.length;)D.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;M.length;)M.pop()();N=!1,v.clear(),p(t)}function et(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}function nt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function Mt(){d={r:0,c:[],p:d}}function kt(){d.r||g(d.c),d=d.p}function it(t,e){t&&t.i&&($.delete(t),t.i(e))}function Ot(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function qt(t){t&&t.c()}function Bt(t,e){t&&t.l(e)}function rt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||A(()=>{const l=t.$$.on_mount.map(k).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...l):g(l),t.$$.on_mount=[]}),o.forEach(A)}function lt(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){t.$$.dirty[0]===-1&&(h.push(t),P(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,i,r,o,l,s=[-1]){const c=y;p(t);const u=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};l&&l(u.root);let a=!1;if(u.ctx=n?n(t,e.props||{},(f,x,...j)=>{const T=j.length?j[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=T)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](T),a&&ct(t,f)),x}):[],u.update(),a=!0,g(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){J();const f=X(e.target);u.fragment&&u.fragment.l(f),f.forEach(U)}else u.fragment&&u.fragment.c();e.intro&&it(t.$$.fragment),rt(t,e.target,e.anchor,e.customElement),K(),z()}p(c)}class Lt{$destroy(){lt(this,1),this.$destroy=w}$on(e,n){if(!O(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!G(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{gt as A,kt as B,Ct as C,At as D,Mt as E,D as F,jt as G,ft as H,dt as I,_t as J,at as K,Dt as L,Nt as M,xt as N,bt as O,g as P,pt as Q,Lt as S,yt as a,X as b,wt as c,tt as d,V as e,U as f,Et as g,mt as h,Ht as i,W as j,vt as k,ot as l,St as m,w as n,$t as o,st as p,qt as q,Bt as r,ut as s,S as t,rt as u,it as v,Ot as w,lt as x,Tt as y,ht as z};
