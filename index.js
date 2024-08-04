// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterFlatTopPulse=t()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function o(r,t,e){var o=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=e?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var t,n,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!e(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(n=(-u).toString(t),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(t),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,c=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,v=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var t,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":f(o)<1e-4?((t=r.precision)>0&&(t-=1),n=o.toExponential(t)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,d,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,v,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):c.call(n)}function m(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var j=String.fromCharCode,A=Array.isArray;function E(r){return r!=r}function O(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function _(r){var t,e,n,i,a,f,c,l,s,p,d,y,v;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)f+=n;else{if(t=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(i=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=t?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,d=n.width,y=n.padRight,v=void 0,(v=d-p.length)<0?p:p=y?p+m(v):m(v)+p)),f+=n.arg||"",c+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function U(r){var t,e,n,o;for(e=[],o=0,n=T.exec(r);n;)(t=r.slice(o,T.lastIndex-n[0].length)).length&&e.push(t),e.push(S(n)),o=T.lastIndex,n=T.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function I(r){var t,e;if("string"!=typeof r)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[U(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return _.apply(null,t)}var x,F=Object.prototype,N=F.toString,P=F.__defineGetter__,k=F.__defineSetter__,V=F.__lookupGetter__,L=F.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===N.call(r))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===N.call(e))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(V.call(r,t)||L.call(r,t)?(n=r.__proto__,r.__proto__=F,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&P&&P.call(r,t,e.get),a&&k&&k.call(r,t,e.set),r};var C=x;function G(r,t,e){C(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var R=Object.prototype.hasOwnProperty;function $(r,t){return null!=r&&R.call(r,t)}var H="function"==typeof Symbol?Symbol:void 0;var J="function"==typeof H&&"symbol"==typeof H("foo")&&$(H,"iterator")&&"symbol"==typeof H.iterator?Symbol.iterator:null;function W(){var r,t=arguments,e="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function B(r){return r!=r}var M=Number.POSITIVE_INFINITY,Z=Number,X=Z.NEGATIVE_INFINITY;function Y(r){return r===M||r===X}function z(r){return Math.abs(r)}var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function K(){return D&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString;var Q="function"==typeof H?H.toStringTag:"";var rr=K()?function(r){var t,e,n;if(null==r)return q.call(r);e=r[Q],t=$(r,Q);try{r[Q]=void 0}catch(t){return q.call(r)}return n=q.call(r),t?r[Q]=e:delete r[Q],n}:function(r){return q.call(r)},tr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var nr,or="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,e;if("function"!=typeof er)return!1;try{t=new er(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(tr&&e instanceof Uint32Array||"[object Uint32Array]"===rr(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var fr,cr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,t,e;if("function"!=typeof ur)return!1;try{t=new ur([1,3.14,-3.14,NaN]),e=t,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===rr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var lr=fr,sr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var dr,yr="function"==typeof Uint8Array?Uint8Array:void 0;dr=function(){var r,t,e;if("function"!=typeof pr)return!1;try{t=new pr(t=[1,3.14,-3.14,256,257]),e=t,r=(sr&&e instanceof Uint8Array||"[object Uint8Array]"===rr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var vr=dr,gr="function"==typeof Uint16Array;var br="function"==typeof Uint16Array?Uint16Array:null;var hr,wr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,t,e;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,65536,65537]),e=t,r=(gr&&e instanceof Uint16Array||"[object Uint16Array]"===rr(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var mr,jr={uint16:hr,uint8:vr};(mr=new jr.uint16(1))[0]=4660;var Ar=52===new jr.uint8(mr.buffer)[0],Er=!0===Ar?1:0,Or=new lr(1),_r=new ir(Or.buffer);function Tr(r){return Or[0]=r,_r[Er]}function Sr(r,t){var e,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(e=.5*i))+(1-o-e+(i*n-r*t))}var Ur=-.16666666666666632,Ir=.00833333333332249,xr=-.0001984126982985795,Fr=27557313707070068e-22,Nr=-2.5050760253406863e-8,Pr=1.58969099521155e-10;function kr(r,t){var e,n,o;return e=Ir+(o=r*r)*(xr+o*Fr)+o*(o*o)*(Nr+o*Pr),n=o*r,0===t?r+n*(Ur+o*e):r-(o*(.5*t-n*e)-t-n*Ur)}var Vr,Lr,Cr=2147483647,Gr=2146435072,Rr=1048575,$r=!0===Ar?0:1,Hr=new lr(1),Jr=new ir(Hr.buffer);!0===Ar?(Vr=1,Lr=0):(Vr=0,Lr=1);var Wr={HIGH:Vr,LOW:Lr},Br=new lr(1),Mr=new ir(Br.buffer),Zr=Wr.HIGH,Xr=Wr.LOW;function Yr(r,t){return Mr[Zr]=r,Mr[Xr]=t,Br[0]}var zr,Dr,Kr=Math.floor,qr=1023,Qr=1023,rt=-1023,tt=-1074,et=2147483648;!0===Ar?(zr=1,Dr=0):(zr=0,Dr=1);var nt={HIGH:zr,LOW:Dr},ot=new lr(1),it=new ir(ot.buffer),at=nt.HIGH,ut=nt.LOW;function ft(r,t,e,n){return ot[0]=r,t[n]=it[at],t[n+e]=it[ut],t}function ct(r){return ft(r,[0,0],1,0)}G(ct,"assign",ft);var lt=[0,0];var st=22250738585072014e-324,pt=4503599627370496;function dt(r,t,e,n){return B(r)||Y(r)?(t[n]=r,t[n+e]=0,t):0!==r&&z(r)<st?(t[n]=r*pt,t[n+e]=-52,t):(t[n]=r,t[n+e]=0,t)}G((function(r){return dt(r,[0,0],1,0)}),"assign",dt);var yt=2220446049250313e-31,vt=2148532223,gt=[0,0],bt=[0,0];function ht(r,t){var e,n,o,i,a,u;return 0===t||0===r||B(r)||Y(r)?r:(dt(r,gt,1,0),r=gt[0],t+=gt[1],t+=function(r){var t=Tr(r);return(t=(t&Gr)>>>20)-qr|0}(r),t<tt?(o=0,i=r,ct.assign(o,lt,1,0),a=lt[0],a&=Cr,u=Tr(i),Yr(a|=u&=et,lt[1])):t>Qr?r<0?X:M:(t<=rt?(t+=52,n=yt):n=1,ct.assign(r,bt,1,0),e=bt[0],e&=vt,n*Yr(e|=t+qr<<20,bt[1])))}function wt(r){return function(r,t){var e,n;for(e=[],n=0;n<t;n++)e.push(r);return e}(0,r)}var mt=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],jt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],At=16777216,Et=5.960464477539063e-8,Ot=wt(20),_t=wt(20),Tt=wt(20),St=wt(20);function Ut(r,t,e,n,o,i,a,u,f){var c,l,s,p,d,y,v,g,b;for(p=i,b=n[e],g=e,d=0;g>0;d++)l=Et*b|0,St[d]=b-At*l|0,b=n[g-1]+l,g-=1;if(b=ht(b,o),b-=8*Kr(.125*b),b-=v=0|b,s=0,o>0?(v+=d=St[e-1]>>24-o,St[e-1]-=d<<24-o,s=St[e-1]>>23-o):0===o?s=St[e-1]>>23:b>=.5&&(s=2),s>0){for(v+=1,c=0,d=0;d<e;d++)g=St[d],0===c?0!==g&&(c=1,St[d]=16777216-g):St[d]=16777215-g;if(o>0)switch(o){case 1:St[e-1]&=8388607;break;case 2:St[e-1]&=4194303}2===s&&(b=1-b,0!==c&&(b-=ht(1,o)))}if(0===b){for(g=0,d=e-1;d>=i;d--)g|=St[d];if(0===g){for(y=1;0===St[i-y];y++);for(d=e+1;d<=e+y;d++){for(f[u+d]=mt[a+d],l=0,g=0;g<=u;g++)l+=r[g]*f[u+(d-g)];n[d]=l}return Ut(r,t,e+=y,n,o,i,a,u,f)}}if(0===b)for(e-=1,o-=24;0===St[e];)e-=1,o-=24;else(b=ht(b,-o))>=At?(l=Et*b|0,St[e]=b-At*l|0,o+=24,St[e+=1]=l):St[e]=0|b;for(l=ht(1,o),d=e;d>=0;d--)n[d]=l*St[d],l*=Et;for(d=e;d>=0;d--){for(l=0,y=0;y<=p&&y<=e-d;y++)l+=jt[y]*n[d+y];Tt[e-d]=l}for(l=0,d=e;d>=0;d--)l+=Tt[d];for(t[0]=0===s?l:-l,l=Tt[0]-l,d=1;d<=e;d++)l+=Tt[d];return t[1]=0===s?l:-l,7&v}function It(r,t,e,n){var o,i,a,u,f,c,l;for(4,(i=(e-3)/24|0)<0&&(i=0),u=e-24*(i+1),c=i-(a=n-1),l=a+4,f=0;f<=l;f++)Ot[f]=c<0?0:mt[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Ot[a+(f-c)];_t[f]=o}return 4,Ut(r,t,4,_t,u,4,i,a,Ot)}var xt=Math.round,Ft=.6366197723675814,Nt=1.5707963267341256,Pt=6077100506506192e-26,kt=6077100506303966e-26,Vt=20222662487959506e-37,Lt=20222662487111665e-37,Ct=84784276603689e-45,Gt=2047;function Rt(r,t,e){var n,o,i,a,u;return i=r-(n=xt(r*Ft))*Nt,a=n*Pt,u=t>>20|0,e[0]=i-a,u-(Tr(e[0])>>20&Gt)>16&&(a=n*Vt-((o=i)-(i=o-(a=n*kt))-a),e[0]=i-a,u-(Tr(e[0])>>20&Gt)>49&&(a=n*Ct-((o=i)-(i=o-(a=n*Lt))-a),e[0]=i-a)),e[1]=i-e[0]-a,n}var $t=0,Ht=16777216,Jt=1.5707963267341256,Wt=6077100506506192e-26,Bt=2*Wt,Mt=3*Wt,Zt=4*Wt,Xt=598523,Yt=1072243195,zt=1073928572,Dt=1074752122,Kt=1074977148,qt=1075183036,Qt=1075388923,re=1075594811,te=1094263291,ee=[0,0,0],ne=[0,0];function oe(r,t){var e,n,o,i,a,u,f;if((o=Tr(r)&Cr|0)<=Yt)return t[0]=r,t[1]=0,0;if(o<=Dt)return(o&Rr)===Xt?Rt(r,o,t):o<=zt?r>0?(f=r-Jt,t[0]=f-Wt,t[1]=f-t[0]-Wt,1):(f=r+Jt,t[0]=f+Wt,t[1]=f-t[0]+Wt,-1):r>0?(f=r-2*Jt,t[0]=f-Bt,t[1]=f-t[0]-Bt,2):(f=r+2*Jt,t[0]=f+Bt,t[1]=f-t[0]+Bt,-2);if(o<=re)return o<=qt?o===Kt?Rt(r,o,t):r>0?(f=r-3*Jt,t[0]=f-Mt,t[1]=f-t[0]-Mt,3):(f=r+3*Jt,t[0]=f+Mt,t[1]=f-t[0]+Mt,-3):o===Qt?Rt(r,o,t):r>0?(f=r-4*Jt,t[0]=f-Zt,t[1]=f-t[0]-Zt,4):(f=r+4*Jt,t[0]=f+Zt,t[1]=f-t[0]+Zt,-4);if(o<te)return Rt(r,o,t);if(o>=Gr)return t[0]=NaN,t[1]=NaN,0;for(e=function(r){return Hr[0]=r,Jr[$r]}(r),f=Yr(o-((n=(o>>20)-1046)<<20|0),e),a=0;a<2;a++)ee[a]=0|f,f=(f-ee[a])*Ht;for(ee[2]=f,i=3;ee[i-1]===$t;)i-=1;return u=It(ee,ne,n,i),r<0?(t[0]=-ne[0],t[1]=-ne[1],-u):(t[0]=ne[0],t[1]=ne[1],u)}var ie=[0,0],ae=1072243195,ue=1044381696;function fe(r){var t;if(t=Tr(r),(t&=Cr)<=ae)return t<ue?1:Sr(r,0);if(t>=Gr)return NaN;switch(3&oe(r,ie)){case 0:return Sr(ie[0],ie[1]);case 1:return-kr(ie[0],ie[1]);case 2:return-Sr(ie[0],ie[1]);default:return kr(ie[0],ie[1])}}var ce=1072243195,le=1045430272,se=[0,0];var pe=3.141592653589793,de=9007199254740992;function ye(r){var t,e,n,o;return B(r)||Y(r)?NaN:(t=z(r))>de?1:.5===(n=t-(e=Kr(t)))?0:(o=n<.25?fe(pe*n):n<.75?function(r){var t;if(t=Tr(r),(t&=Cr)<=ce)return t<le?r:kr(r,0);if(t>=Gr)return NaN;switch(3&oe(r,se)){case 0:return kr(se[0],se[1]);case 1:return Sr(se[0],se[1]);case 2:return-kr(se[0],se[1]);default:return-Sr(se[0],se[1])}}(pe*(n=.5-n)):-fe(pe*(n=1-n)),e%2==1?-o:o)}var ve=Array.isArray?Array.isArray:function(r){return"[object Array]"===rr(r)};var ge=/./;function be(r){return"boolean"==typeof r}var he=Boolean,we=Boolean.prototype.toString;var me=K();function je(r){return"object"==typeof r&&(r instanceof he||(me?function(r){try{return we.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===rr(r)))}function Ae(r){return be(r)||je(r)}G(Ae,"isPrimitive",be),G(Ae,"isObject",je);var Ee="object"==typeof self?self:null,Oe="object"==typeof window?window:null,_e="object"==typeof global?global:null,Te="object"==typeof globalThis?globalThis:null;var Se=function(r){if(arguments.length){if(!be(r))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Te)return Te;if(Ee)return Ee;if(Oe)return Oe;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),Ue=Se.document&&Se.document.childNodes,Ie=Int8Array;function xe(){return/^\s*function\s*([^(]*)/i}var Fe=/^\s*function\s*([^(]*)/i;function Ne(r){return null!==r&&"object"==typeof r}function Pe(r){var t,e,n,o;if(("Object"===(e=rr(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Fe.exec(n.toString()))return t[1]}return Ne(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}G(xe,"REGEXP",Fe),G(Ne,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!ve(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(Ne));var ke="function"==typeof ge||"object"==typeof Ie||"function"==typeof Ue?function(r){return Pe(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Pe(r).toLowerCase():t};function Ve(r){return"function"===ke(r)}var Le,Ce=Object,Ge=Object.getPrototypeOf;Le=Ve(Object.getPrototypeOf)?Ge:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===rr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Re=Le;var $e=Object.prototype;function He(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!ve(r)}(r)&&(t=function(r){return null==r?null:(r=Ce(r),Re(r))}(r),!t||!$(r,"constructor")&&$(t,"constructor")&&Ve(t.constructor)&&"[object Function]"===rr(t.constructor)&&$(t,"isPrototypeOf")&&Ve(t.isPrototypeOf)&&(t===$e||function(r){var t;for(t in r)if(!$(r,t))return!1;return!0}(r)))}function Je(r){return"number"==typeof r}var We=Z.prototype.toString;var Be=K();function Me(r){return"object"==typeof r&&(r instanceof Z||(Be?function(r){try{return We.call(r),!0}catch(r){return!1}}(r):"[object Number]"===rr(r)))}function Ze(r){return Je(r)||Me(r)}function Xe(r){return Je(r)&&r>0}function Ye(r){return Me(r)&&r.valueOf()>0}function ze(r){return Xe(r)||Ye(r)}function De(r){return r<M&&r>X&&Kr(t=r)===t;var t}function Ke(r){return Je(r)&&De(r)}function qe(r){return Me(r)&&De(r.valueOf())}function Qe(r){return Ke(r)||qe(r)}function rn(r){return Ke(r)&&r>0}function tn(r){return qe(r)&&r.valueOf()>0}function en(r){return rn(r)||tn(r)}function nn(r){return Ke(r)&&r>=0}function on(r){return qe(r)&&r.valueOf()>=0}function an(r){return nn(r)||on(r)}G(Ze,"isPrimitive",Je),G(Ze,"isObject",Me),G(ze,"isPrimitive",Xe),G(ze,"isObject",Ye),G(Qe,"isPrimitive",Ke),G(Qe,"isObject",qe),G(en,"isPrimitive",rn),G(en,"isObject",tn),G(an,"isPrimitive",nn),G(an,"isObject",on);var un=.21557895,fn=.41663158,cn=.277263158,ln=.083578947,sn=.006947368;function pn(r,t,e){var n=2/(e-1);return t*(un-fn*ye(n*r)+cn*ye(2*n*r)-ln*ye(3*n*r)+sn*ye(4*n*r))}return function r(t){var e,n,o,i,a,u;if(e={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(i=function(r,t){return He(t)?$(t,"duration")&&(r.duration=t.duration,!rn(t.duration))?new TypeError(W("0tJ3P","duration",t.duration)):$(t,"period")&&(r.period=t.period,!rn(t.period))?new TypeError(W("0tJ3P","period",t.period)):$(t,"amplitude")&&(r.amplitude=t.amplitude,!Xe(t.amplitude))?new TypeError(W("0tJ4D","amplitude",t.amplitude)):$(t,"offset")&&(r.offset=t.offset,!Ke(t.offset))?new TypeError(W("0tJ8M","offset",t.offset)):$(t,"iter")&&(r.iter=t.iter,!nn(t.iter))?new TypeError(W("0tJ2t","iter",t.iter)):null:new TypeError(W("0tJ2V",t))}(e,t)))throw i;if(-1===e.duration&&(e.duration=e.period),e.duration>e.period)throw new RangeError(W("0tJ8K","duration",e.duration));if(e.duration<=2)throw new RangeError(W("0tJ8L","duration",e.duration));return(a=(e.period-e.offset)%e.period)<0&&(a+=e.period),a-=1,u=0,G(n={},"next",(function(){if(u+=1,o||u>e.iter)return{done:!0};return{value:(a=(a+1)%e.period)<e.duration?pn(a,e.amplitude,e.duration):0,done:!1}})),G(n,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),J&&G(n,J,(function(){return r(e)})),n}}));
//# sourceMappingURL=index.js.map
