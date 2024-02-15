// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,b=/^(\d+)e/,g=/\.0$/,w=/\.0*e/,h=/(\..*[^0])0*e/;function m(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=p.call(n,h,"$1e"),n=p.call(n,w,"e"),n=p.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,d,"e+0$1"),n=p.call(n,y,"e-0$1"),r.alternate&&(n=p.call(n,v,"$1."),n=p.call(n,b,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function j(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function O(r,t,e){var n=t-r.length;return n<0?r:r=e?r+j(n):j(n)+r}var A=String.fromCharCode,E=isNaN,_=Array.isArray;function S(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function T(r){var t,e,n,i,a,f,s,l,p;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(t=void 0!==n.precision,!(n=S(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),e=n.flags,p=0;p<e.length;p++)switch(i=e.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):A(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=O(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function I(r){var t,e,n,o;for(e=[],o=0,n=U.exec(r);n;)(t=r.slice(o,U.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),o=U.lastIndex,n=U.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function x(r){return"string"==typeof r}function F(r){var t,e;if(!x(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[I(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return T.apply(null,t)}var P,k=Object.prototype,V=k.toString,G=k.__defineGetter__,L=k.__defineSetter__,$=k.__lookupGetter__,C=k.__lookupSetter__;P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&($.call(r,t)||C.call(r,t)?(n=r.__proto__,r.__proto__=k,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&L&&L.call(r,t,e.set),r};var R=P;function H(r,t,e){R(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var W=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0;var M,Z,X="function"==typeof B&&"symbol"==typeof B("foo")&&(Z="iterator",null!=(M=B)&&W.call(M,Z))&&"symbol"==typeof B.iterator?Symbol.iterator:null;function Y(r){return r!=r}var q=Number.POSITIVE_INFINITY,z=Number,D=z.NEGATIVE_INFINITY;function J(r){return r===q||r===D}function K(r){return Math.abs(r)}var Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function rr(){return Q&&"symbol"==typeof Symbol.toStringTag}var tr=Object.prototype.toString;var er=Object.prototype.hasOwnProperty;var nr,or="function"==typeof B?B.toStringTag:"";nr=rr()?function(r){var t,e,n;if(null==r)return tr.call(r);e=r[or],t=function(r,t){return null!=r&&er.call(r,t)}(r,or);try{r[or]=void 0}catch(t){return tr.call(r)}return n=tr.call(r),t?r[or]=e:delete r[or],n}:function(r){return tr.call(r)};var ir=nr,ar="function"==typeof Uint32Array;var ur="function"==typeof Uint32Array?Uint32Array:null;var cr,fr="function"==typeof Uint32Array?Uint32Array:void 0;cr=function(){var r,t;if("function"!=typeof ur)return!1;try{r=function(r){return ar&&r instanceof Uint32Array||"[object Uint32Array]"===ir(r)}(t=new ur(t=[1,3.14,-3.14,4294967296,4294967297]))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Float64Array;var pr="function"==typeof Float64Array?Float64Array:null;var dr,yr="function"==typeof Float64Array?Float64Array:void 0;dr=function(){var r,t;if("function"!=typeof pr)return!1;try{r=function(r){return lr&&r instanceof Float64Array||"[object Float64Array]"===ir(r)}(t=new pr([1,3.14,-3.14,NaN]))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=dr,br="function"==typeof Uint8Array;var gr="function"==typeof Uint8Array?Uint8Array:null;var wr,hr="function"==typeof Uint8Array?Uint8Array:void 0;wr=function(){var r,t;if("function"!=typeof gr)return!1;try{r=function(r){return br&&r instanceof Uint8Array||"[object Uint8Array]"===ir(r)}(t=new gr(t=[1,3.14,-3.14,256,257]))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var mr=wr,jr="function"==typeof Uint16Array;var Or="function"==typeof Uint16Array?Uint16Array:null;var Ar,Er="function"==typeof Uint16Array?Uint16Array:void 0;Ar=function(){var r,t;if("function"!=typeof Or)return!1;try{r=function(r){return jr&&r instanceof Uint16Array||"[object Uint16Array]"===ir(r)}(t=new Or(t=[1,3.14,-3.14,65536,65537]))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Er:function(){throw new Error("not implemented")};var _r,Sr={uint16:Ar,uint8:mr};(_r=new Sr.uint16(1))[0]=4660;var Tr=52===new Sr.uint8(_r.buffer)[0],Ur=!0===Tr?1:0,Nr=new vr(1),Ir=new sr(Nr.buffer);function xr(r){return Nr[0]=r,Ir[Ur]}function Fr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Pr=-.16666666666666632;function kr(r,t){var e,n,o;return e=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),n=o*r,0===t?r+n*(Pr+o*e):r-(o*(.5*t-n*e)-t-n*Pr)}var Vr,Gr,Lr=!0===Tr?0:1,$r=new vr(1),Cr=new sr($r.buffer);!0===Tr?(Vr=1,Gr=0):(Vr=0,Gr=1);var Rr={HIGH:Vr,LOW:Gr},Hr=new vr(1),Wr=new sr(Hr.buffer),Br=Rr.HIGH,Mr=Rr.LOW;function Zr(r,t){return Wr[Br]=r,Wr[Mr]=t,Hr[0]}var Xr,Yr,qr=Math.floor;!0===Tr?(Xr=1,Yr=0):(Xr=0,Yr=1);var zr={HIGH:Xr,LOW:Yr},Dr=new vr(1),Jr=new sr(Dr.buffer),Kr=zr.HIGH,Qr=zr.LOW;function rt(r,t,e,n){return Dr[0]=r,t[n]=Jr[Kr],t[n+e]=Jr[Qr],t}function tt(r){return rt(r,[0,0],1,0)}H(tt,"assign",rt);var et=[0,0];function nt(r,t,e,n){return Y(r)||J(r)?(t[n]=r,t[n+e]=0,t):0!==r&&K(r)<22250738585072014e-324?(t[n]=4503599627370496*r,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}H((function(r){return nt(r,[0,0],1,0)}),"assign",nt);var ot=[0,0],it=[0,0];function at(r,t){var e,n,o,i,a,u;return 0===t||0===r||Y(r)||J(r)?r:(nt(r,ot,1,0),t+=ot[1],t+=function(r){var t=xr(r);return(t=(2146435072&t)>>>20)-1023|0}(r=ot[0]),t<-1074?(o=0,i=r,tt.assign(o,et,1,0),a=et[0],a&=2147483647,u=xr(i),Zr(a|=u&=2147483648,et[1])):t>1023?r<0?D:q:(t<=-1023?(t+=52,n=2220446049250313e-31):n=1,tt.assign(r,it,1,0),e=it[0],e&=2148532223,n*Zr(e|=t+1023<<20,it[1])))}function ut(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var ct=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ft=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],st=5.960464477539063e-8,lt=ut(20),pt=ut(20),dt=ut(20),yt=ut(20);function vt(r,t,e,n,o,i,a,u,c){var f,s,l,p,d,y,v,b,g;for(p=i,g=n[e],b=e,d=0;b>0;d++)s=st*g|0,yt[d]=g-16777216*s|0,g=n[b-1]+s,b-=1;if(g=at(g,o),g-=8*qr(.125*g),g-=v=0|g,l=0,o>0?(v+=d=yt[e-1]>>24-o,yt[e-1]-=d<<24-o,l=yt[e-1]>>23-o):0===o?l=yt[e-1]>>23:g>=.5&&(l=2),l>0){for(v+=1,f=0,d=0;d<e;d++)b=yt[d],0===f?0!==b&&(f=1,yt[d]=16777216-b):yt[d]=16777215-b;if(o>0)switch(o){case 1:yt[e-1]&=8388607;break;case 2:yt[e-1]&=4194303}2===l&&(g=1-g,0!==f&&(g-=at(1,o)))}if(0===g){for(b=0,d=e-1;d>=i;d--)b|=yt[d];if(0===b){for(y=1;0===yt[i-y];y++);for(d=e+1;d<=e+y;d++){for(c[u+d]=ct[a+d],s=0,b=0;b<=u;b++)s+=r[b]*c[u+(d-b)];n[d]=s}return vt(r,t,e+=y,n,o,i,a,u,c)}}if(0===g)for(e-=1,o-=24;0===yt[e];)e-=1,o-=24;else(g=at(g,-o))>=16777216?(s=st*g|0,yt[e]=g-16777216*s|0,o+=24,yt[e+=1]=s):yt[e]=0|g;for(s=at(1,o),d=e;d>=0;d--)n[d]=s*yt[d],s*=st;for(d=e;d>=0;d--){for(s=0,y=0;y<=p&&y<=e-d;y++)s+=ft[y]*n[d+y];dt[e-d]=s}for(s=0,d=e;d>=0;d--)s+=dt[d];for(t[0]=0===l?s:-s,s=dt[0]-s,d=1;d<=e;d++)s+=dt[d];return t[1]=0===l?s:-s,7&v}function bt(r,t,e,n){var o,i,a,u,c,f,s;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),f=i-(a=n-1),s=a+4,c=0;c<=s;c++)lt[c]=f<0?0:ct[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*lt[a+(c-f)];pt[c]=o}return 4,vt(r,t,4,pt,u,4,i,a,lt)}var gt=Math.round;function wt(r,t,e){var n,o,i,a,u;return i=r-1.5707963267341256*(n=gt(.6366197723675814*r)),a=6077100506506192e-26*n,u=t>>20|0,e[0]=i-a,u-(xr(e[0])>>20&2047)>16&&(a=20222662487959506e-37*n-((o=i)-(i=o-(a=6077100506303966e-26*n))-a),e[0]=i-a,u-(xr(e[0])>>20&2047)>49&&(a=84784276603689e-45*n-((o=i)-(i=o-(a=20222662487111665e-37*n))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var ht=1.5707963267341256,mt=6077100506506192e-26,jt=2*mt,Ot=4*mt,At=[0,0,0],Et=[0,0];function _t(r,t){var e,n,o,i,a,u,c;if((o=2147483647&xr(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?wt(r,o,t):o<=1073928572?r>0?(c=r-ht,t[0]=c-mt,t[1]=c-t[0]-mt,1):(c=r+ht,t[0]=c+mt,t[1]=c-t[0]+mt,-1):r>0?(c=r-2*ht,t[0]=c-jt,t[1]=c-t[0]-jt,2):(c=r+2*ht,t[0]=c+jt,t[1]=c-t[0]+jt,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?wt(r,o,t):r>0?(c=r-3*ht,t[0]=c-1.8231301519518578e-10,t[1]=c-t[0]-1.8231301519518578e-10,3):(c=r+3*ht,t[0]=c+1.8231301519518578e-10,t[1]=c-t[0]+1.8231301519518578e-10,-3):1075388923===o?wt(r,o,t):r>0?(c=r-4*ht,t[0]=c-Ot,t[1]=c-t[0]-Ot,4):(c=r+4*ht,t[0]=c+Ot,t[1]=c-t[0]+Ot,-4);if(o<1094263291)return wt(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return $r[0]=r,Cr[Lr]}(r),c=Zr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)At[a]=0|c,c=16777216*(c-At[a]);for(At[2]=c,i=3;0===At[i-1];)i-=1;return u=bt(At,Et,n,i),r<0?(t[0]=-Et[0],t[1]=-Et[1],-u):(t[0]=Et[0],t[1]=Et[1],u)}var St=[0,0];function Tt(r){var t;if(t=xr(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Fr(r,0);if(t>=2146435072)return NaN;switch(3&_t(r,St)){case 0:return Fr(St[0],St[1]);case 1:return-kr(St[0],St[1]);case 2:return-Fr(St[0],St[1]);default:return kr(St[0],St[1])}}var Ut=[0,0];var Nt,It=3.141592653589793;function xt(r){var t,e,n,o;return Y(r)||J(r)?NaN:(t=K(r))>9007199254740992?1:.5===(n=t-(e=qr(t)))?0:(o=n<.25?Tt(It*n):n<.75?function(r){var t;if(t=xr(r),(t&=2147483647)<=1072243195)return t<1045430272?r:kr(r,0);if(t>=2146435072)return NaN;switch(3&_t(r,Ut)){case 0:return kr(Ut[0],Ut[1]);case 1:return Fr(Ut[0],Ut[1]);case 2:return-kr(Ut[0],Ut[1]);default:return-Fr(Ut[0],Ut[1])}}(It*(n=.5-n)):-Tt(It*(n=1-n)),e%2==1?-o:o)}Nt=Array.isArray?Array.isArray:function(r){return"[object Array]"===ir(r)};var Ft=Nt;var Pt=/./;function kt(r){return"boolean"==typeof r}var Vt=Boolean,Gt=Boolean.prototype.toString;var Lt=rr();function $t(r){return"object"==typeof r&&(r instanceof Vt||(Lt?function(r){try{return Gt.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===ir(r)))}function Ct(r){return kt(r)||$t(r)}function Rt(){return new Function("return this;")()}H(Ct,"isPrimitive",kt),H(Ct,"isObject",$t);var Ht="object"==typeof self?self:null,Wt="object"==typeof window?window:null,Bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Mt="object"==typeof Bt?Bt:null,Zt="object"==typeof globalThis?globalThis:null;var Xt=function(r){if(arguments.length){if(!kt(r))throw new TypeError(F("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Rt()}if(Zt)return Zt;if(Ht)return Ht;if(Wt)return Wt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Yt=Xt.document&&Xt.document.childNodes,qt=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var Dt=/^\s*function\s*([^(]*)/i;function Jt(r){return null!==r&&"object"==typeof r}H(zt,"REGEXP",Dt);var Kt=function(r){if("function"!=typeof r)throw new TypeError(F("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!Ft(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Jt);function Qt(r){var t,e,n;if(("Object"===(e=ir(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Dt.exec(n.toString()))return t[1]}return function(r){return Jt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}(r)?"Buffer":e}H(Jt,"isObjectLikeArray",Kt);var re="function"==typeof Pt||"object"==typeof qt||"function"==typeof Yt?function(r){return Qt(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Qt(r).toLowerCase():t};function te(r){return"function"===re(r)}var ee,ne=Object,oe=Object.getPrototypeOf;ee=te(Object.getPrototypeOf)?oe:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===ir(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ie=ee;var ae=Object.prototype.hasOwnProperty;function ue(r,t){return null!=r&&ae.call(r,t)}var ce=Object.prototype;function fe(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!Ft(r)}(r)&&(t=function(r){return null==r?null:(r=ne(r),ie(r))}(r),!t||!ue(r,"constructor")&&ue(t,"constructor")&&te(t.constructor)&&"[object Function]"===ir(t.constructor)&&ue(t,"isPrototypeOf")&&te(t.isPrototypeOf)&&(t===ce||function(r){var t;for(t in r)if(!ue(r,t))return!1;return!0}(r)))}var se=Object.prototype.hasOwnProperty;function le(r,t){return null!=r&&se.call(r,t)}function pe(r){return"number"==typeof r}var de=z.prototype.toString;var ye=rr();function ve(r){return"object"==typeof r&&(r instanceof z||(ye?function(r){try{return de.call(r),!0}catch(r){return!1}}(r):"[object Number]"===ir(r)))}function be(r){return pe(r)||ve(r)}function ge(r){return pe(r)&&r>0}function we(r){return ve(r)&&r.valueOf()>0}function he(r){return ge(r)||we(r)}function me(r){return r<q&&r>D&&qr(t=r)===t;var t}function je(r){return pe(r)&&me(r)}function Oe(r){return ve(r)&&me(r.valueOf())}function Ae(r){return je(r)||Oe(r)}function Ee(r){return je(r)&&r>0}function _e(r){return Oe(r)&&r.valueOf()>0}function Se(r){return Ee(r)||_e(r)}function Te(r){return je(r)&&r>=0}function Ue(r){return Oe(r)&&r.valueOf()>=0}function Ne(r){return Te(r)||Ue(r)}function Ie(r,t){return fe(t)?le(t,"duration")&&(r.duration=t.duration,!Ee(t.duration))?new TypeError(F("invalid option. `%s` option must be a positive integer. Option: `%s`.","duration",t.duration)):le(t,"period")&&(r.period=t.period,!Ee(t.period))?new TypeError(F("invalid option. `%s` option must be a positive integer. Option: `%s`.","period",t.period)):le(t,"amplitude")&&(r.amplitude=t.amplitude,!ge(t.amplitude))?new TypeError(F("invalid option. `%s` option must be a positive number. Option: `%s`.","amplitude",t.amplitude)):le(t,"offset")&&(r.offset=t.offset,!je(t.offset))?new TypeError(F("invalid option. `%s` option must be an integer. Option: `%s`.","offset",t.offset)):le(t,"iter")&&(r.iter=t.iter,!Te(t.iter))?new TypeError(F("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",t.iter)):null:new TypeError(F("invalid argument. Options argument must be an object. Value: `%s`.",t))}H(be,"isPrimitive",pe),H(be,"isObject",ve),H(he,"isPrimitive",ge),H(he,"isObject",we),H(Ae,"isPrimitive",je),H(Ae,"isObject",Oe),H(Se,"isPrimitive",Ee),H(Se,"isObject",_e),H(Ne,"isPrimitive",Te),H(Ne,"isObject",Ue);function xe(r,t,e){var n=2/(e-1);return t*(.21557895-.41663158*xt(n*r)+.277263158*xt(2*n*r)-.083578947*xt(3*n*r)+.006947368*xt(4*n*r))}function Fe(r){var t,e,n,o,i,a;if(t={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(o=Ie(t,r)))throw o;if(-1===t.duration&&(t.duration=t.period),t.duration>t.period)throw new RangeError(F("invalid option. `%s` option must be less than or equal to the period. Option: `%u`.","duration",t.duration));if(t.duration<=2)throw new RangeError(F("invalid option. `%s` option must be greater than 2. Option: `%s`.","duration",t.duration));return(i=(t.period-t.offset)%t.period)<0&&(i+=t.period),i-=1,a=0,H(e={},"next",u),H(e,"return",c),X&&H(e,X,f),e;function u(){return a+=1,n||a>t.iter?{done:!0}:{value:(i=(i+1)%t.period)<t.duration?xe(i,t.amplitude,t.duration):0,done:!1}}function c(r){return n=!0,arguments.length?{value:r,done:!0}:{done:!0}}function f(){return Fe(t)}}export{Fe as default};
//# sourceMappingURL=mod.js.map
