// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";function a(e,t){return s(t)?n(t,"duration")&&(e.duration=t.duration,!p(t.duration))?new TypeError(r("0tJ3P,Fv","duration",t.duration)):n(t,"period")&&(e.period=t.period,!p(t.period))?new TypeError(r("0tJ3P,Fv","period",t.period)):n(t,"amplitude")&&(e.amplitude=t.amplitude,!o(t.amplitude))?new TypeError(r("0tJ4D,Gu","amplitude",t.amplitude)):n(t,"offset")&&(e.offset=t.offset,!d(t.offset))?new TypeError(r("0tJ8M,JG","offset",t.offset)):n(t,"iter")&&(e.iter=t.iter,!m(t.iter))?new TypeError(r("0tJ2t,G9","iter",t.iter)):null:new TypeError(r("0tJ2V,FD",t))}function u(e,t,r){var s=2/(r-1);return t*(.21557895-.41663158*i(s*e)+.277263158*i(2*s*e)-.083578947*i(3*s*e)+.006947368*i(4*s*e))}function l(i){var s,n,o,d,p,m;if(s={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(d=a(s,i)))throw d;if(-1===s.duration&&(s.duration=s.period),s.duration>s.period)throw new RangeError(r("0tJ8K,JE","duration",s.duration));if(s.duration<=2)throw new RangeError(r("0tJ8L,JF","duration",s.duration));return(p=(s.period-s.offset)%s.period)<0&&(p+=s.period),p-=1,m=0,e(n={},"next",f),e(n,"return",j),t&&e(n,t,v),n;function f(){return m+=1,o||m>s.iter?{done:!0}:{value:(p=(p+1)%s.period)<s.duration?u(p,s.amplitude,s.duration):0,done:!1}}function j(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function v(){return l(s)}}export{l as default};
//# sourceMappingURL=index.mjs.map
