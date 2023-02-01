// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cospi@v0.0.7-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import{isPrimitive as d}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";function a(e,r){return s(r)?n(r,"duration")&&(e.duration=r.duration,!p(r.duration))?new TypeError(t("0RY3b","duration",r.duration)):n(r,"period")&&(e.period=r.period,!p(r.period))?new TypeError(t("0RY3b","period",r.period)):n(r,"amplitude")&&(e.amplitude=r.amplitude,!o(r.amplitude))?new TypeError(t("0RY4Q","amplitude",r.amplitude)):n(r,"offset")&&(e.offset=r.offset,!d(r.offset))?new TypeError(t("0RY8e","offset",r.offset)):n(r,"iter")&&(e.iter=r.iter,!m(r.iter))?new TypeError(t("0RY35","iter",r.iter)):null:new TypeError(t("0RY2h",r))}function u(e,r,t){var s=2/(t-1);return r*(.21557895-.41663158*i(s*e)+.277263158*i(2*s*e)-.083578947*i(3*s*e)+.006947368*i(4*s*e))}function l(i){var s,n,o,d,p,m;if(s={duration:-1,period:100,amplitude:1,offset:0,iter:1e308},arguments.length&&(d=a(s,i)))throw d;if(-1===s.duration&&(s.duration=s.period),s.duration>s.period)throw new RangeError(t("0RY8c","duration",s.duration));if(s.duration<=2)throw new RangeError(t("0RY8d","duration",s.duration));return(p=(s.period-s.offset)%s.period)<0&&(p+=s.period),p-=1,m=0,e(n={},"next",f),e(n,"return",j),r&&e(n,r,h),n;function f(){return m+=1,o||m>s.iter?{done:!0}:{value:(p=(p+1)%s.period)<s.duration?u(p,s.amplitude,s.duration):0,done:!1}}function j(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return l(s)}}export{l as default};
//# sourceMappingURL=index.mjs.map
