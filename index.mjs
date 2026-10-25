// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.3-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.2.3-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";function e(e,i,o){var n;if(!t(e))throw new TypeError(s("2Of3L",e));if(!r(i))throw new TypeError(s("2Of2H",i));for(n in e)if(i.call(o,e[n],n,e))return!1;return!0}export{e as default};
//# sourceMappingURL=index.mjs.map
