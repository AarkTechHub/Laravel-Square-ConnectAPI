/*! For license information please see square.js.LICENSE.txt */
(() => {
    "use strict";
    var e = {
            844: (e, t, n) => {
                n.d(t, {
                    Rf: () => o,
                    DM: () => s,
                    en: () => a,
                    jH: () => c,
                    Cf: () => l,
                    Db: () => u,
                    EG: () => d,
                    l4: () => h,
                    JY: () => p
                });
                var r = n(422),
                    i = {};

                function o() {
                    return (0, r.KV)() ? n.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : i
                }

                function s() {
                    var e = o(),
                        t = e.crypto || e.msCrypto;
                    if (void 0 !== t && t.getRandomValues) {
                        var n = new Uint16Array(8);
                        t.getRandomValues(n), n[3] = 4095 & n[3] | 16384, n[4] = 16383 & n[4] | 32768;
                        var r = function (e) {
                            for (var t = e.toString(16); t.length < 4;) t = "0" + t;
                            return t
                        };
                        return r(n[0]) + r(n[1]) + r(n[2]) + r(n[3]) + r(n[4]) + r(n[5]) + r(n[6]) + r(n[7])
                    }
                    return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, (function (e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    }))
                }

                function a(e) {
                    if (!e) return {};
                    var t = e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
                    if (!t) return {};
                    var n = t[6] || "",
                        r = t[8] || "";
                    return {
                        host: t[4],
                        path: t[5],
                        protocol: t[2],
                        relative: t[5] + n + r
                    }
                }

                function c(e) {
                    if (e.message) return e.message;
                    if (e.exception && e.exception.values && e.exception.values[0]) {
                        var t = e.exception.values[0];
                        return t.type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>"
                    }
                    return e.event_id || "<unknown>"
                }

                function l(e) {
                    var t = o();
                    if (!("console" in t)) return e();
                    var n = t.console,
                        r = {};
                    ["debug", "info", "warn", "error", "log", "assert"].forEach((function (e) {
                        e in t.console && n[e].__sentry_original__ && (r[e] = n[e], n[e] = n[e].__sentry_original__)
                    }));
                    var i = e();
                    return Object.keys(r).forEach((function (e) {
                        n[e] = r[e]
                    })), i
                }

                function u(e, t, n) {
                    e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].value = e.exception.values[0].value || t || "", e.exception.values[0].type = e.exception.values[0].type || n || "Error"
                }

                function d(e, t) {
                    void 0 === t && (t = {});
                    try {
                        e.exception.values[0].mechanism = e.exception.values[0].mechanism || {}, Object.keys(t).forEach((function (n) {
                            e.exception.values[0].mechanism[n] = t[n]
                        }))
                    } catch (e) {}
                }

                function h() {
                    try {
                        return document.location.href
                    } catch (e) {
                        return ""
                    }
                }

                function p(e, t) {
                    if (!t) return 6e4;
                    var n = parseInt("" + t, 10);
                    if (!isNaN(n)) return 1e3 * n;
                    var r = Date.parse("" + t);
                    return isNaN(r) ? 6e4 : r - e
                }
            },
            422: (e, t, n) => {
                function r() {
                    return "[object process]" === Object.prototype.toString.call("undefined" != typeof process ? process : 0)
                }

                function i(e, t) {
                    return e.require(t)
                }
                n.d(t, {
                    KV: () => r,
                    l$: () => i
                }), e = n.hmd(e)
            },
            170: (e, t, n) => {
                n.d(t, {
                    yW: () => l
                });
                var r = n(844),
                    i = n(422);
                e = n.hmd(e);
                var o, s = {
                        nowSeconds: function () {
                            return Date.now() / 1e3
                        }
                    },
                    a = (0, i.KV)() ? function () {
                        try {
                            return (0, i.l$)(e, "perf_hooks").performance
                        } catch (e) {
                            return
                        }
                    }() : function () {
                        var e = (0, r.Rf)().performance;
                        if (e && e.now) return {
                            now: function () {
                                return e.now()
                            },
                            timeOrigin: Date.now() - e.now()
                        }
                    }(),
                    c = void 0 === a ? s : {
                        nowSeconds: function () {
                            return (a.timeOrigin + a.now()) / 1e3
                        }
                    },
                    l = s.nowSeconds.bind(s);
                c.nowSeconds.bind(c), (o = (0, r.Rf)().performance) && (o.timeOrigin ? o.timeOrigin : o.timing && o.timing.navigationStart || Date.now())
            }
        },
        t = {};

    function n(r) {
        var i = t[r];
        if (void 0 !== i) return i.exports;
        var o = t[r] = {
            id: r,
            loaded: !1,
            exports: {}
        };
        return e[r](o, o.exports, n), o.loaded = !0, o.exports
    }
    n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e = {};
        n.r(e), n.d(e, {
            FunctionToString: () => R,
            InboundFilters: () => De
        });
        var t = {};
        n.r(t), n.d(t, {
            Breadcrumbs: () => Nt,
            GlobalHandlers: () => Pt,
            LinkedErrors: () => Lt,
            TryCatch: () => wt,
            UserAgent: () => Dt
        });
        var r = new Set(["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"]),
            i = /android/i;

        function o() {
            var e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent;
            return !!e && Boolean((e.match(/Safari/) && (e.match(/iPhone/) || e.match(/iPad/)) && !e.match(/Trident/) || e.match(/AppleWebKit/) && !(e.match(/Android/) || e.match(/Linux/) || e.match(/Trident/)) && (e.match(/Mobile/) || e.match(/iPhone/) || e.match(/iPad/)) && !e.match(/Macintosh/) && !e.match(/Windows/)) && !(e.match(/Chrome/) || e.match(/CriOS/) || e.match(/Edg/)))
        }

        function s() {
            var e = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent;
            return !!e && Boolean((e.match(/Safari/) || e.match(/AppleWebKit/)) && (e.match(/Macintosh/) || e.match(/Windows/)) && !e.match(/iPhone/) && !e.match(/iPad/) && !e.match(/Chrome/) && !e.match(/Edg/) && !e.match(/Firefox/))
        }
        var a, c, l, u, d, h, p, f, g, m = {
            get documentBody() {
                return window.document.body
            },
            get documentReferrer() {
                return window.document.referrer
            },
            getQueryParams: function (e, t) {
                var n = new URL(e),
                    r = {};
                return t.forEach((e => {
                    var t = n.searchParams.get(e);
                    t && (r[e] = t)
                })), r
            },
            isAndroid: function () {
                return i.test(window.navigator.userAgent)
            },
            isDesktopSafari: s,
            isIOS: function () {
                return r.has(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend" in document
            },
            isMobileSafari: o,
            isSafari: function () {
                return o() || s()
            },
            isSupported: function () {
                return void 0 !== window.postMessage && void 0 !== window.fetch && void 0 !== document.createElement("a").classList
            },
            redirectTo: function (e) {
                window.location.href = e
            },
            replaceWindowState: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.title;
                window.history.replaceState(null, t, e)
            },
            submitForm: function (e) {
                e.submit()
            },
            get windowHash() {
                return window.location.hash
            },
            get windowInnerHeight() {
                return window.innerHeight
            },
            get windowInnerWidth() {
                return window.innerWidth
            },
            get windowLocation() {
                return window.location
            },
            get windowNavigationLanguage() {
                var e = window.navigator.language;
                return !e && window.navigator.languages.length > 0 && (e = window.navigator.languages[0]), e
            },
            get windowParentLocation() {
                return window.parent.location
            },
            get windowPerformance() {
                return window.performance
            }
        };

        function v(e) {
            return t = e, n = g.JAVASCRIPT, r = new Blob([t], {
                type: n
            }), URL.createObjectURL(r);
            var t, n, r
        }! function (e) {
            e.Final = "FINAL", e.Estimated = "ESTIMATED", e.Unknown = "NOT_CURRENTLY_KNOWN"
        }(a || (a = {})),
        function (e) {
            e.INITIALIZE = "INITIALIZE", e.PAYMENT_AUTHORIZATION = "PAYMENT_AUTHORIZATION", e.SHIPPING_ADDRESS = "SHIPPING_ADDRESS", e.SHIPPING_OPTION = "SHIPPING_OPTION"
        }(c || (c = {})),
        function (e) {
            e.FULL = "FULL", e.MIN = "MIN"
        }(l || (l = {})),
        function (e) {
            e.CARD = "CARD"
        }(u || (u = {})),
        function (e) {
            e.PAYMENT_GATEWAY = "PAYMENT_GATEWAY"
        }(d || (d = {})),
        function (e) {
            e.SUCCESS = "SUCCESS"
        }(h || (h = {})),
        function (e) {
            e.TEST = "TEST", e.PRODUCTION = "PRODUCTION"
        }(p || (p = {})),
        function (e) {
            e.development = "development", e.sandbox = "sandbox", e.production = "production", e.staging = "staging", e.test = "test"
        }(f || (f = {})),
        function (e) {
            e.JAVASCRIPT = "text/javascript", e.HTML = "text/html"
        }(g || (g = {}));
        var E = null !== "sandbox" ? "sandbox" : "development",
            _ = "".length > 0 ? "-".concat("") : "",
            y = {
                get ALIPAY_PAY_ENDPOINT() {
                    return "".concat(this.API_URL, "/digital-wallets/alipay/pay")
                },
                get ANALYTICS_PUBLIC_ENDPOINT() {
                    switch (E) {
                        case f.test:
                            return v("window.Square = { Analytics: {} };");
                        default:
                            return "".concat(this.API_PROTOCOL, "js.").concat(this.API_PUBLIC_HOST, "/payments/data.js")
                    }
                },
                get API_HOST() {
                    switch (E) {
                        case f.production:
                            return "pci-connect.squareup.com";
                        case f.sandbox:
                            return "pci-connect.squareupsandbox.com";
                        default:
                            return "pci-connect.squareupstaging.com"
                    }
                },
                get API_PROTOCOL() {
                    return "https://"
                },
                get API_PUBLIC_HOST() {
                    switch (E) {
                        case f.production:
                            return "squareup.com";
                        case f.sandbox:
                            return "squareupsandbox.com";
                        default:
                            return "squareupstaging.com"
                    }
                },
                get API_URL() {
                    return "".concat(this.API_PROTOCOL).concat(this.API_HOST)
                },
                get APPENDED_FILE_NAME() {
                    return _
                },
                get APPLEPAY_VALIDATE_MERCHANT_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/apple-pay/validate-merchant")
                },
                get ASSET_BASE_URL() {
                    return function (e) {
                        switch (e) {
                            case f.production:
                                return "https://web.squarecdn.com";
                            case f.sandbox:
                                return "https://sandbox.web.squarecdn.com";
                            case f.development:
                                return "https://localhost:1779";
                            default:
                                return "https://staging.web.squarecdn.com"
                        }
                    }(f[E])
                },
                get ASSET_URL() {
                    return "local" === this.VERSION ? this.ASSET_BASE_URL : "".concat(this.ASSET_BASE_URL, "/").concat(this.VERSION)
                },
                get BANK_NONCE_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/bank-nonce")
                },
                get CARD_NONCE_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/card-nonce")
                },
                get CASH_APP_API() {
                    switch (E) {
                        case f.production:
                            return "https://api.cash.app";
                        default:
                            return "https://api.cashstaging.app"
                    }
                },
                get CASH_APP_API_CUSTOMER() {
                    return "".concat(this.CASH_APP_API, "/customer")
                },
                get CASH_APP_AUTH_ENDPOINT() {
                    return "".concat(this.API_URL, "/digital-wallets/cash-app/auth")
                },
                get CASH_APP_STYLES() {
                    return "".concat(this.ASSET_URL, "/cash.css")
                },
                get CREATE_PLAID_LINK_SESSION_ENDPOINT() {
                    return "".concat(this.API_URL, "/digital-wallets/plaid/link-session")
                },
                get ENABLE_ERROR_LOGGING() {
                    return E !== f.development
                },
                get GET_PRODUCT_INFORMATION_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/tokenization/product-information")
                },
                get GIFT_CARD_IFRAME() {
                    return "".concat(this.ASSET_URL, "/gift-card-element-iframe").concat(_, ".html")
                },
                get GOOGLE_PAY_ENV() {
                    switch (E) {
                        case f.production:
                            return p.PRODUCTION;
                        default:
                            return p.TEST
                    }
                },
                get GOOGLE_PAY_GENERATE_TOKEN_ENDPOINT() {
                    return "".concat(this.API_URL, "/digital-wallets/google-pay/token")
                },
                get GOOGLE_PAY_MERCHANT_ID() {
                    return "05498866192997955200"
                },
                get GOOGLE_PAY_SCRIPT_URL() {
                    switch (E) {
                        case f.test:
                            return v("window.google = {};");
                        default:
                            return "https://pay.google.com/gp/p/js/pay.js"
                    }
                },
                get HYDRATION_ENDPOINT() {
                    return "".concat(this.API_URL, "/payments/hydrate")
                },
                get IFRAME_SRC() {
                    return "".concat(this.ASSET_URL, "/main-iframe").concat(_, ".html")
                },
                get MASTERPASS_CALLBACK_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/masterpass/callback")
                },
                get MASTERPASS_LIBRARY_URL() {
                    return "".concat(this.API_URL, "/v2/masterpass/frame")
                },
                get METRICS_URL() {
                    return "".concat(this.API_URL, "/payments/mtx")
                },
                get PLAID_LINK_ENV() {
                    switch (E) {
                        case f.production:
                            return "production";
                        default:
                            return "sandbox"
                    }
                },
                get PLAID_LINK_SCRIPT_URL() {
                    switch (E) {
                        case f.test:
                            return v("window.Plaid = {};");
                        default:
                            return "https://cdn.plaid.com/link/v2/stable/link-initialize.js"
                    }
                },
                get SENTRY_DSN() {
                    switch (E) {
                        case f.test:
                        case f.development:
                            return "https://acacaeaccacacacabcaacdacdacadaca@sentry.io/000001";
                        default:
                            return "".concat(this.API_PROTOCOL).concat(this.SENTRY_PUBLIC_KEY, "@").concat(this.API_HOST, "/payments/error/").concat(this.SENTRY_PROJECT_ID)
                    }
                },
                get SENTRY_PROJECT_ID() {
                    return "3478832"
                },
                get SENTRY_PUBLIC_KEY() {
                    return "565ee38bb5ff45dabc25ab6d7b8bebe3"
                },
                get SINGLE_CARD_IFRAME() {
                    return "".concat(this.ASSET_URL, "/single-card-element-iframe").concat(_, ".html")
                },
                get SINGLE_CARD_WRAPPER_STYLES() {
                    return "".concat(this.ASSET_URL, "/card-wrapper.css")
                },
                get VERSION() {
                    return "1.5.0"
                },
                get WALLET_NONCE_ENDPOINT() {
                    return "".concat(this.API_URL, "/v2/wallet-nonce")
                },
                env: E
            },
            C = function (e, t) {
                return (C = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            };

        function I(e, t) {
            function n() {
                this.constructor = e
            }
            C(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }
        var A, S = function () {
            return (S = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function O(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function () {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function T(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function P() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(T(arguments[t]));
            return e
        }
        var R = function () {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function () {
                    A = Function.prototype.toString, Function.prototype.toString = function () {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        var n = this.__sentry_original__ || this;
                        return A.apply(n, e)
                    }
                }, e.id = "FunctionToString", e
            }(),
            w = function () {
                return (w = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

        function N(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function L() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(N(arguments[t]));
            return e
        }
        var b = function () {
            return (b = Object.assign || function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e
            }).apply(this, arguments)
        };

        function D(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function x() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(D(arguments[t]));
            return e
        }

        function M(e) {
            switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return j(e, Error)
            }
        }

        function U(e) {
            return "[object ErrorEvent]" === Object.prototype.toString.call(e)
        }

        function k(e) {
            return "[object DOMError]" === Object.prototype.toString.call(e)
        }

        function H(e) {
            return "[object String]" === Object.prototype.toString.call(e)
        }

        function F(e) {
            return null === e || "object" != typeof e && "function" != typeof e
        }

        function G(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }

        function V(e) {
            return "undefined" != typeof Event && j(e, Event)
        }

        function B(e) {
            return "undefined" != typeof Element && j(e, Element)
        }

        function q(e) {
            return Boolean(e && e.then && "function" == typeof e.then)
        }

        function j(e, t) {
            try {
                return e instanceof t
            } catch (e) {
                return !1
            }
        }
        var Y, K = n(170);
        ! function (e) {
            e.PENDING = "PENDING", e.RESOLVED = "RESOLVED", e.REJECTED = "REJECTED"
        }(Y || (Y = {}));
        var W = function () {
                function e(e) {
                    var t = this;
                    this._state = Y.PENDING, this._handlers = [], this._resolve = function (e) {
                        t._setResult(Y.RESOLVED, e)
                    }, this._reject = function (e) {
                        t._setResult(Y.REJECTED, e)
                    }, this._setResult = function (e, n) {
                        t._state === Y.PENDING && (q(n) ? n.then(t._resolve, t._reject) : (t._state = e, t._value = n, t._executeHandlers()))
                    }, this._attachHandler = function (e) {
                        t._handlers = t._handlers.concat(e), t._executeHandlers()
                    }, this._executeHandlers = function () {
                        if (t._state !== Y.PENDING) {
                            var e = t._handlers.slice();
                            t._handlers = [], e.forEach((function (e) {
                                e.done || (t._state === Y.RESOLVED && e.onfulfilled && e.onfulfilled(t._value), t._state === Y.REJECTED && e.onrejected && e.onrejected(t._value), e.done = !0)
                            }))
                        }
                    };
                    try {
                        e(this._resolve, this._reject)
                    } catch (e) {
                        this._reject(e)
                    }
                }
                return e.resolve = function (t) {
                    return new e((function (e) {
                        e(t)
                    }))
                }, e.reject = function (t) {
                    return new e((function (e, n) {
                        n(t)
                    }))
                }, e.all = function (t) {
                    return new e((function (n, r) {
                        if (Array.isArray(t))
                            if (0 !== t.length) {
                                var i = t.length,
                                    o = [];
                                t.forEach((function (t, s) {
                                    e.resolve(t).then((function (e) {
                                        o[s] = e, 0 == (i -= 1) && n(o)
                                    })).then(null, r)
                                }))
                            } else n([]);
                        else r(new TypeError("Promise.all requires an array as input."))
                    }))
                }, e.prototype.then = function (t, n) {
                    var r = this;
                    return new e((function (e, i) {
                        r._attachHandler({
                            done: !1,
                            onfulfilled: function (n) {
                                if (t) try {
                                    return void e(t(n))
                                } catch (e) {
                                    return void i(e)
                                } else e(n)
                            },
                            onrejected: function (t) {
                                if (n) try {
                                    return void e(n(t))
                                } catch (e) {
                                    return void i(e)
                                } else i(t)
                            }
                        })
                    }))
                }, e.prototype.catch = function (e) {
                    return this.then((function (e) {
                        return e
                    }), e)
                }, e.prototype.finally = function (t) {
                    var n = this;
                    return new e((function (e, r) {
                        var i, o;
                        return n.then((function (e) {
                            o = !1, i = e, t && t()
                        }), (function (e) {
                            o = !0, i = e, t && t()
                        })).then((function () {
                            o ? r(i) : e(i)
                        }))
                    }))
                }, e.prototype.toString = function () {
                    return "[object SyncPromise]"
                }, e
            }(),
            z = n(844),
            Z = function () {
                function e() {
                    this._notifyingListeners = !1, this._scopeListeners = [], this._eventProcessors = [], this._breadcrumbs = [], this._user = {}, this._tags = {}, this._extra = {}, this._contexts = {}
                }
                return e.clone = function (t) {
                    var n = new e;
                    return t && (n._breadcrumbs = x(t._breadcrumbs), n._tags = b({}, t._tags), n._extra = b({}, t._extra), n._contexts = b({}, t._contexts), n._user = t._user, n._level = t._level, n._span = t._span, n._session = t._session, n._transactionName = t._transactionName, n._fingerprint = t._fingerprint, n._eventProcessors = x(t._eventProcessors)), n
                }, e.prototype.addScopeListener = function (e) {
                    this._scopeListeners.push(e)
                }, e.prototype.addEventProcessor = function (e) {
                    return this._eventProcessors.push(e), this
                }, e.prototype.setUser = function (e) {
                    return this._user = e || {}, this._session && this._session.update({
                        user: e
                    }), this._notifyScopeListeners(), this
                }, e.prototype.getUser = function () {
                    return this._user
                }, e.prototype.setTags = function (e) {
                    return this._tags = b(b({}, this._tags), e), this._notifyScopeListeners(), this
                }, e.prototype.setTag = function (e, t) {
                    var n;
                    return this._tags = b(b({}, this._tags), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setExtras = function (e) {
                    return this._extra = b(b({}, this._extra), e), this._notifyScopeListeners(), this
                }, e.prototype.setExtra = function (e, t) {
                    var n;
                    return this._extra = b(b({}, this._extra), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setFingerprint = function (e) {
                    return this._fingerprint = e, this._notifyScopeListeners(), this
                }, e.prototype.setLevel = function (e) {
                    return this._level = e, this._notifyScopeListeners(), this
                }, e.prototype.setTransactionName = function (e) {
                    return this._transactionName = e, this._notifyScopeListeners(), this
                }, e.prototype.setTransaction = function (e) {
                    return this.setTransactionName(e)
                }, e.prototype.setContext = function (e, t) {
                    var n;
                    return null === t ? delete this._contexts[e] : this._contexts = b(b({}, this._contexts), ((n = {})[e] = t, n)), this._notifyScopeListeners(), this
                }, e.prototype.setSpan = function (e) {
                    return this._span = e, this._notifyScopeListeners(), this
                }, e.prototype.getSpan = function () {
                    return this._span
                }, e.prototype.getTransaction = function () {
                    var e, t, n, r, i = this.getSpan();
                    return (null === (e = i) || void 0 === e ? void 0 : e.transaction) ? null === (t = i) || void 0 === t ? void 0 : t.transaction : (null === (r = null === (n = i) || void 0 === n ? void 0 : n.spanRecorder) || void 0 === r ? void 0 : r.spans[0]) ? i.spanRecorder.spans[0] : void 0
                }, e.prototype.setSession = function (e) {
                    return e ? this._session = e : delete this._session, this._notifyScopeListeners(), this
                }, e.prototype.getSession = function () {
                    return this._session
                }, e.prototype.update = function (t) {
                    if (!t) return this;
                    if ("function" == typeof t) {
                        var n = t(this);
                        return n instanceof e ? n : this
                    }
                    return t instanceof e ? (this._tags = b(b({}, this._tags), t._tags), this._extra = b(b({}, this._extra), t._extra), this._contexts = b(b({}, this._contexts), t._contexts), t._user && Object.keys(t._user).length && (this._user = t._user), t._level && (this._level = t._level), t._fingerprint && (this._fingerprint = t._fingerprint)) : G(t) && (t = t, this._tags = b(b({}, this._tags), t.tags), this._extra = b(b({}, this._extra), t.extra), this._contexts = b(b({}, this._contexts), t.contexts), t.user && (this._user = t.user), t.level && (this._level = t.level), t.fingerprint && (this._fingerprint = t.fingerprint)), this
                }, e.prototype.clear = function () {
                    return this._breadcrumbs = [], this._tags = {}, this._extra = {}, this._user = {}, this._contexts = {}, this._level = void 0, this._transactionName = void 0, this._fingerprint = void 0, this._span = void 0, this._session = void 0, this._notifyScopeListeners(), this
                }, e.prototype.addBreadcrumb = function (e, t) {
                    var n = b({
                        timestamp: (0, K.yW)()
                    }, e);
                    return this._breadcrumbs = void 0 !== t && t >= 0 ? x(this._breadcrumbs, [n]).slice(-t) : x(this._breadcrumbs, [n]), this._notifyScopeListeners(), this
                }, e.prototype.clearBreadcrumbs = function () {
                    return this._breadcrumbs = [], this._notifyScopeListeners(), this
                }, e.prototype.applyToEvent = function (e, t) {
                    var n;
                    if (this._extra && Object.keys(this._extra).length && (e.extra = b(b({}, this._extra), e.extra)), this._tags && Object.keys(this._tags).length && (e.tags = b(b({}, this._tags), e.tags)), this._user && Object.keys(this._user).length && (e.user = b(b({}, this._user), e.user)), this._contexts && Object.keys(this._contexts).length && (e.contexts = b(b({}, this._contexts), e.contexts)), this._level && (e.level = this._level), this._transactionName && (e.transaction = this._transactionName), this._span) {
                        e.contexts = b({
                            trace: this._span.getTraceContext()
                        }, e.contexts);
                        var r = null === (n = this._span.transaction) || void 0 === n ? void 0 : n.name;
                        r && (e.tags = b({
                            transaction: r
                        }, e.tags))
                    }
                    return this._applyFingerprint(e), e.breadcrumbs = x(e.breadcrumbs || [], this._breadcrumbs), e.breadcrumbs = e.breadcrumbs.length > 0 ? e.breadcrumbs : void 0, this._notifyEventProcessors(x(Q(), this._eventProcessors), e, t)
                }, e.prototype._notifyEventProcessors = function (e, t, n, r) {
                    var i = this;
                    return void 0 === r && (r = 0), new W((function (o, s) {
                        var a = e[r];
                        if (null === t || "function" != typeof a) o(t);
                        else {
                            var c = a(b({}, t), n);
                            q(c) ? c.then((function (t) {
                                return i._notifyEventProcessors(e, t, n, r + 1).then(o)
                            })).then(null, s) : i._notifyEventProcessors(e, c, n, r + 1).then(o).then(null, s)
                        }
                    }))
                }, e.prototype._notifyScopeListeners = function () {
                    var e = this;
                    this._notifyingListeners || (this._notifyingListeners = !0, this._scopeListeners.forEach((function (t) {
                        t(e)
                    })), this._notifyingListeners = !1)
                }, e.prototype._applyFingerprint = function (e) {
                    e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [], this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)), e.fingerprint && !e.fingerprint.length && delete e.fingerprint
                }, e
            }();

        function Q() {
            var e = (0, z.Rf)();
            return e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [], e.__SENTRY__.globalEventProcessors
        }

        function J(e) {
            Q().push(e)
        }
        var X = (0, z.Rf)(),
            $ = "Sentry Logger ",
            ee = function () {
                function e() {
                    this._enabled = !1
                }
                return e.prototype.disable = function () {
                    this._enabled = !1
                }, e.prototype.enable = function () {
                    this._enabled = !0
                }, e.prototype.log = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._enabled && (0, z.Cf)((function () {
                        X.console.log($ + "[Log]: " + e.join(" "))
                    }))
                }, e.prototype.warn = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._enabled && (0, z.Cf)((function () {
                        X.console.warn($ + "[Warn]: " + e.join(" "))
                    }))
                }, e.prototype.error = function () {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    this._enabled && (0, z.Cf)((function () {
                        X.console.error($ + "[Error]: " + e.join(" "))
                    }))
                }, e
            }();
        X.__SENTRY__ = X.__SENTRY__ || {};
        var te, ne = X.__SENTRY__.logger || (X.__SENTRY__.logger = new ee),
            re = n(422);
        ! function (e) {
            e.Ok = "ok", e.Exited = "exited", e.Crashed = "crashed", e.Abnormal = "abnormal"
        }(te || (te = {}));
        var ie = function (e, t) {
                return (ie = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function (e, t) {
                        e.__proto__ = t
                    } || function (e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            },
            oe = function () {
                return (oe = Object.assign || function (e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

        function se(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function () {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function ae(e) {
            try {
                for (var t = e, n = [], r = 0, i = 0, o = " > ".length, s = void 0; t && r++ < 5 && !("html" === (s = ce(t)) || r > 1 && i + n.length * o + s.length >= 80);) n.push(s), i += s.length, t = t.parentNode;
                return n.reverse().join(" > ")
            } catch (e) {
                return "<unknown>"
            }
        }

        function ce(e) {
            var t, n, r, i, o, s = e,
                a = [];
            if (!s || !s.tagName) return "";
            if (a.push(s.tagName.toLowerCase()), s.id && a.push("#" + s.id), (t = s.className) && H(t))
                for (n = t.split(/\s+/), o = 0; o < n.length; o++) a.push("." + n[o]);
            var c = ["type", "name", "title", "alt"];
            for (o = 0; o < c.length; o++) r = c[o], (i = s.getAttribute(r)) && a.push("[" + r + '="' + i + '"]');
            return a.join("")
        }
        var le = function () {
                function e() {
                    this._hasWeakSet = "function" == typeof WeakSet, this._inner = this._hasWeakSet ? new WeakSet : []
                }
                return e.prototype.memoize = function (e) {
                    if (this._hasWeakSet) return !!this._inner.has(e) || (this._inner.add(e), !1);
                    for (var t = 0; t < this._inner.length; t++)
                        if (this._inner[t] === e) return !0;
                    return this._inner.push(e), !1
                }, e.prototype.unmemoize = function (e) {
                    if (this._hasWeakSet) this._inner.delete(e);
                    else
                        for (var t = 0; t < this._inner.length; t++)
                            if (this._inner[t] === e) {
                                this._inner.splice(t, 1);
                                break
                            }
                }, e
            }(),
            ue = "<anonymous>";

        function de(e) {
            try {
                return e && "function" == typeof e && e.name || ue
            } catch (e) {
                return ue
            }
        }

        function he(e, t) {
            return void 0 === t && (t = 0), "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
        }

        function pe(e, t) {
            if (!Array.isArray(e)) return "";
            for (var n = [], r = 0; r < e.length; r++) {
                var i = e[r];
                try {
                    n.push(String(i))
                } catch (e) {
                    n.push("[value cannot be serialized]")
                }
            }
            return n.join(t)
        }

        function fe(e, t) {
            return !!H(e) && (n = t, "[object RegExp]" === Object.prototype.toString.call(n) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t));
            var n
        }

        function ge(e, t, n) {
            if (t in e) {
                var r = e[t],
                    i = n(r);
                if ("function" == typeof i) try {
                    i.prototype = i.prototype || {}, Object.defineProperties(i, {
                        __sentry_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })
                } catch (e) {}
                e[t] = i
            }
        }

        function me(e) {
            if (M(e)) {
                var t = e,
                    n = {
                        message: t.message,
                        name: t.name,
                        stack: t.stack
                    };
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
                return n
            }
            if (V(e)) {
                var i = e,
                    o = {};
                o.type = i.type;
                try {
                    o.target = B(i.target) ? ae(i.target) : Object.prototype.toString.call(i.target)
                } catch (e) {
                    o.target = "<unknown>"
                }
                try {
                    o.currentTarget = B(i.currentTarget) ? ae(i.currentTarget) : Object.prototype.toString.call(i.currentTarget)
                } catch (e) {
                    o.currentTarget = "<unknown>"
                }
                for (var r in "undefined" != typeof CustomEvent && j(e, CustomEvent) && (o.detail = i.detail), i) Object.prototype.hasOwnProperty.call(i, r) && (o[r] = i);
                return o
            }
            return e
        }

        function ve(e, t, n) {
            void 0 === t && (t = 3), void 0 === n && (n = 102400);
            var r, i = ye(e, t);
            return r = i,
                function (e) {
                    return ~-encodeURI(e).split(/%..|./).length
                }(JSON.stringify(r)) > n ? ve(e, t - 1, n) : i
        }

        function Ee(e, t) {
            return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n.g && e === n.g ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : G(r = e) && "nativeEvent" in r && "preventDefault" in r && "stopPropagation" in r ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + de(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e;
            var r
        }

        function _e(e, t, n, r) {
            if (void 0 === n && (n = 1 / 0), void 0 === r && (r = new le), 0 === n) return function (e) {
                var t = Object.prototype.toString.call(e);
                if ("string" == typeof e) return e;
                if ("[object Object]" === t) return "[Object]";
                if ("[object Array]" === t) return "[Array]";
                var n = Ee(e);
                return F(n) ? n : t
            }(t);
            if (null != t && "function" == typeof t.toJSON) return t.toJSON();
            var i = Ee(t, e);
            if (F(i)) return i;
            var o = me(t),
                s = Array.isArray(t) ? [] : {};
            if (r.memoize(t)) return "[Circular ~]";
            for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (s[a] = _e(a, o[a], n - 1, r));
            return r.unmemoize(t), s
        }

        function ye(e, t) {
            try {
                return JSON.parse(JSON.stringify(e, (function (e, n) {
                    return _e(e, n, t)
                })))
            } catch (e) {
                return "**non-serializable**"
            }
        }

        function Ce(e, t) {
            void 0 === t && (t = 40);
            var n = Object.keys(me(e));
            if (n.sort(), !n.length) return "[object has no keys]";
            if (n[0].length >= t) return he(n[0], t);
            for (var r = n.length; r > 0; r--) {
                var i = n.slice(0, r).join(", ");
                if (!(i.length > t)) return r === n.length ? i : he(i, t)
            }
            return ""
        }

        function Ie(e) {
            var t, n;
            if (G(e)) {
                var r = e,
                    i = {};
                try {
                    for (var o = se(Object.keys(r)), s = o.next(); !s.done; s = o.next()) {
                        var a = s.value;
                        void 0 !== r[a] && (i[a] = Ie(r[a]))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (n = o.return) && n.call(o)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return i
            }
            return Array.isArray(e) ? e.map(Ie) : e
        }
        var Ae = function () {
                function e(e) {
                    this.errors = 0, this.sid = (0, z.DM)(), this.timestamp = Date.now(), this.started = Date.now(), this.duration = 0, this.status = te.Ok, e && this.update(e)
                }
                return e.prototype.update = function (e) {
                    void 0 === e && (e = {}), e.user && (e.user.ip_address && (this.ipAddress = e.user.ip_address), e.did || (this.did = e.user.id || e.user.email || e.user.username)), this.timestamp = e.timestamp || Date.now(), e.sid && (this.sid = 32 === e.sid.length ? e.sid : (0, z.DM)()), e.did && (this.did = "" + e.did), "number" == typeof e.started && (this.started = e.started), "number" == typeof e.duration ? this.duration = e.duration : this.duration = this.timestamp - this.started, e.release && (this.release = e.release), e.environment && (this.environment = e.environment), e.ipAddress && (this.ipAddress = e.ipAddress), e.userAgent && (this.userAgent = e.userAgent), "number" == typeof e.errors && (this.errors = e.errors), e.status && (this.status = e.status)
                }, e.prototype.close = function (e) {
                    e ? this.update({
                        status: e
                    }) : this.status === te.Ok ? this.update({
                        status: te.Exited
                    }) : this.update()
                }, e.prototype.toJSON = function () {
                    return Ie({
                        sid: "" + this.sid,
                        init: !0,
                        started: new Date(this.started).toISOString(),
                        timestamp: new Date(this.timestamp).toISOString(),
                        status: this.status,
                        errors: this.errors,
                        did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
                        duration: this.duration,
                        attrs: Ie({
                            release: this.release,
                            environment: this.environment,
                            ip_address: this.ipAddress,
                            user_agent: this.userAgent
                        })
                    })
                }, e
            }(),
            Se = function () {
                function e(e, t, n) {
                    void 0 === t && (t = new Z), void 0 === n && (n = 3), this._version = n, this._stack = [{}], this.getStackTop().scope = t, this.bindClient(e)
                }
                return e.prototype.isOlderThan = function (e) {
                    return this._version < e
                }, e.prototype.bindClient = function (e) {
                    this.getStackTop().client = e, e && e.setupIntegrations && e.setupIntegrations()
                }, e.prototype.pushScope = function () {
                    var e = Z.clone(this.getScope());
                    return this.getStack().push({
                        client: this.getClient(),
                        scope: e
                    }), e
                }, e.prototype.popScope = function () {
                    return !(this.getStack().length <= 1 || !this.getStack().pop())
                }, e.prototype.withScope = function (e) {
                    var t = this.pushScope();
                    try {
                        e(t)
                    } finally {
                        this.popScope()
                    }
                }, e.prototype.getClient = function () {
                    return this.getStackTop().client
                }, e.prototype.getScope = function () {
                    return this.getStackTop().scope
                }, e.prototype.getStack = function () {
                    return this._stack
                }, e.prototype.getStackTop = function () {
                    return this._stack[this._stack.length - 1]
                }, e.prototype.captureException = function (e, t) {
                    var n = this._lastEventId = (0, z.DM)(),
                        r = t;
                    if (!t) {
                        var i = void 0;
                        try {
                            throw new Error("Sentry syntheticException")
                        } catch (e) {
                            i = e
                        }
                        r = {
                            originalException: e,
                            syntheticException: i
                        }
                    }
                    return this._invokeClient("captureException", e, b(b({}, r), {
                        event_id: n
                    })), n
                }, e.prototype.captureMessage = function (e, t, n) {
                    var r = this._lastEventId = (0, z.DM)(),
                        i = n;
                    if (!n) {
                        var o = void 0;
                        try {
                            throw new Error(e)
                        } catch (e) {
                            o = e
                        }
                        i = {
                            originalException: e,
                            syntheticException: o
                        }
                    }
                    return this._invokeClient("captureMessage", e, t, b(b({}, i), {
                        event_id: r
                    })), r
                }, e.prototype.captureEvent = function (e, t) {
                    var n = this._lastEventId = (0, z.DM)();
                    return this._invokeClient("captureEvent", e, b(b({}, t), {
                        event_id: n
                    })), n
                }, e.prototype.lastEventId = function () {
                    return this._lastEventId
                }, e.prototype.addBreadcrumb = function (e, t) {
                    var n = this.getStackTop(),
                        r = n.scope,
                        i = n.client;
                    if (r && i) {
                        var o = i.getOptions && i.getOptions() || {},
                            s = o.beforeBreadcrumb,
                            a = void 0 === s ? null : s,
                            c = o.maxBreadcrumbs,
                            l = void 0 === c ? 100 : c;
                        if (!(l <= 0)) {
                            var u = (0, K.yW)(),
                                d = b({
                                    timestamp: u
                                }, e),
                                h = a ? (0, z.Cf)((function () {
                                    return a(d, t)
                                })) : d;
                            null !== h && r.addBreadcrumb(h, Math.min(l, 100))
                        }
                    }
                }, e.prototype.setUser = function (e) {
                    var t = this.getScope();
                    t && t.setUser(e)
                }, e.prototype.setTags = function (e) {
                    var t = this.getScope();
                    t && t.setTags(e)
                }, e.prototype.setExtras = function (e) {
                    var t = this.getScope();
                    t && t.setExtras(e)
                }, e.prototype.setTag = function (e, t) {
                    var n = this.getScope();
                    n && n.setTag(e, t)
                }, e.prototype.setExtra = function (e, t) {
                    var n = this.getScope();
                    n && n.setExtra(e, t)
                }, e.prototype.setContext = function (e, t) {
                    var n = this.getScope();
                    n && n.setContext(e, t)
                }, e.prototype.configureScope = function (e) {
                    var t = this.getStackTop(),
                        n = t.scope,
                        r = t.client;
                    n && r && e(n)
                }, e.prototype.run = function (e) {
                    var t = Te(this);
                    try {
                        e(this)
                    } finally {
                        Te(t)
                    }
                }, e.prototype.getIntegration = function (e) {
                    var t = this.getClient();
                    if (!t) return null;
                    try {
                        return t.getIntegration(e)
                    } catch (t) {
                        return ne.warn("Cannot retrieve integration " + e.id + " from the current Hub"), null
                    }
                }, e.prototype.startSpan = function (e) {
                    return this._callExtensionMethod("startSpan", e)
                }, e.prototype.startTransaction = function (e, t) {
                    return this._callExtensionMethod("startTransaction", e, t)
                }, e.prototype.traceHeaders = function () {
                    return this._callExtensionMethod("traceHeaders")
                }, e.prototype.startSession = function (e) {
                    this.endSession();
                    var t = this.getStackTop(),
                        n = t.scope,
                        r = t.client,
                        i = r && r.getOptions() || {},
                        o = i.release,
                        s = i.environment,
                        a = new Ae(b(b({
                            release: o,
                            environment: s
                        }, n && {
                            user: n.getUser()
                        }), e));
                    return n && n.setSession(a), a
                }, e.prototype.endSession = function () {
                    var e = this.getStackTop(),
                        t = e.scope,
                        n = e.client;
                    if (t) {
                        var r = t.getSession && t.getSession();
                        r && (r.close(), n && n.captureSession && n.captureSession(r), t.setSession())
                    }
                }, e.prototype._invokeClient = function (e) {
                    for (var t, n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                    var i = this.getStackTop(),
                        o = i.scope,
                        s = i.client;
                    s && s[e] && (t = s)[e].apply(t, x(n, [o]))
                }, e.prototype._callExtensionMethod = function (e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    var r = Oe(),
                        i = r.__SENTRY__;
                    if (i && i.extensions && "function" == typeof i.extensions[e]) return i.extensions[e].apply(this, t);
                    ne.warn("Extension method " + e + " couldn't be found, doing nothing.")
                }, e
            }();

        function Oe() {
            var e = (0, z.Rf)();
            return e.__SENTRY__ = e.__SENTRY__ || {
                extensions: {},
                hub: void 0
            }, e
        }

        function Te(e) {
            var t = Oe(),
                n = we(t);
            return Ne(t, e), n
        }

        function Pe() {
            var e = Oe();
            return Re(e) && !we(e).isOlderThan(3) || Ne(e, new Se), (0, re.KV)() ? function (e) {
                try {
                    var t = (r = Oe().__SENTRY__) && r.extensions && r.extensions.domain && r.extensions.domain.active;
                    if (!t) return we(e);
                    if (!Re(t) || we(t).isOlderThan(3)) {
                        var n = we(e).getStackTop();
                        Ne(t, new Se(n.client, Z.clone(n.scope)))
                    }
                    return we(t)
                } catch (t) {
                    return we(e)
                }
                var r
            }(e) : we(e)
        }

        function Re(e) {
            return !!(e && e.__SENTRY__ && e.__SENTRY__.hub)
        }

        function we(e) {
            return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = new Se), e.__SENTRY__.hub
        }

        function Ne(e, t) {
            return !!e && (e.__SENTRY__ = e.__SENTRY__ || {}, e.__SENTRY__.hub = t, !0)
        }
        var Le, be = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/],
            De = function () {
                function e(t) {
                    void 0 === t && (t = {}), this._options = t, this.name = e.id
                }
                return e.prototype.setupOnce = function () {
                    J((function (t) {
                        var n = Pe();
                        if (!n) return t;
                        var r = n.getIntegration(e);
                        if (r) {
                            var i = n.getClient(),
                                o = i ? i.getOptions() : {},
                                s = r._mergeOptions(o);
                            if (r._shouldDropEvent(t, s)) return null
                        }
                        return t
                    }))
                }, e.prototype._shouldDropEvent = function (e, t) {
                    return this._isSentryError(e, t) ? (ne.warn("Event dropped due to being internal Sentry Error.\nEvent: " + (0, z.jH)(e)), !0) : this._isIgnoredError(e, t) ? (ne.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + (0, z.jH)(e)), !0) : this._isDeniedUrl(e, t) ? (ne.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + (0, z.jH)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0) : !this._isAllowedUrl(e, t) && (ne.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + (0, z.jH)(e) + ".\nUrl: " + this._getEventFilterUrl(e)), !0)
                }, e.prototype._isSentryError = function (e, t) {
                    if (!t.ignoreInternal) return !1;
                    try {
                        return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
                    } catch (e) {
                        return !1
                    }
                }, e.prototype._isIgnoredError = function (e, t) {
                    return !(!t.ignoreErrors || !t.ignoreErrors.length) && this._getPossibleEventMessages(e).some((function (e) {
                        return t.ignoreErrors.some((function (t) {
                            return fe(e, t)
                        }))
                    }))
                }, e.prototype._isDeniedUrl = function (e, t) {
                    if (!t.denyUrls || !t.denyUrls.length) return !1;
                    var n = this._getEventFilterUrl(e);
                    return !!n && t.denyUrls.some((function (e) {
                        return fe(n, e)
                    }))
                }, e.prototype._isAllowedUrl = function (e, t) {
                    if (!t.allowUrls || !t.allowUrls.length) return !0;
                    var n = this._getEventFilterUrl(e);
                    return !n || t.allowUrls.some((function (e) {
                        return fe(n, e)
                    }))
                }, e.prototype._mergeOptions = function (e) {
                    return void 0 === e && (e = {}), {
                        allowUrls: L(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
                        denyUrls: L(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
                        ignoreErrors: L(this._options.ignoreErrors || [], e.ignoreErrors || [], be),
                        ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
                    }
                }, e.prototype._getPossibleEventMessages = function (e) {
                    if (e.message) return [e.message];
                    if (e.exception) try {
                        var t = e.exception.values && e.exception.values[0] || {},
                            n = t.type,
                            r = void 0 === n ? "" : n,
                            i = t.value,
                            o = void 0 === i ? "" : i;
                        return ["" + o, r + ": " + o]
                    } catch (t) {
                        return ne.error("Cannot extract message for event " + (0, z.jH)(e)), []
                    }
                    return []
                }, e.prototype._getEventFilterUrl = function (e) {
                    try {
                        if (e.stacktrace) {
                            var t = e.stacktrace.frames;
                            return t && t[t.length - 1].filename || null
                        }
                        if (e.exception) {
                            var n = e.exception.values && e.exception.values[0].stacktrace && e.exception.values[0].stacktrace.frames;
                            return n && n[n.length - 1].filename || null
                        }
                        return null
                    } catch (t) {
                        return ne.error("Cannot extract url for event " + (0, z.jH)(e)), null
                    }
                }, e.id = "InboundFilters", e
            }();

        function xe() {
            if (!("fetch" in (0, z.Rf)())) return !1;
            try {
                return new Headers, new Request(""), new Response, !0
            } catch (e) {
                return !1
            }
        }

        function Me(e) {
            return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
        }

        function Ue() {
            if (!xe()) return !1;
            try {
                return new Request("_", {
                    referrerPolicy: "origin"
                }), !0
            } catch (e) {
                return !1
            }
        }! function (e) {
            e.Fatal = "fatal", e.Error = "error", e.Warning = "warning", e.Log = "log", e.Info = "info", e.Debug = "debug", e.Critical = "critical"
        }(Le || (Le = {})),
        function (e) {
            e.fromString = function (t) {
                switch (t) {
                    case "debug":
                        return e.Debug;
                    case "info":
                        return e.Info;
                    case "warn":
                    case "warning":
                        return e.Warning;
                    case "error":
                        return e.Error;
                    case "fatal":
                        return e.Fatal;
                    case "critical":
                        return e.Critical;
                    case "log":
                    default:
                        return e.Log
                }
            }
        }(Le || (Le = {}));
        var ke, He = (0, z.Rf)(),
            Fe = {},
            Ge = {};

        function Ve(e) {
            e && "string" == typeof e.type && "function" == typeof e.callback && (Fe[e.type] = Fe[e.type] || [], Fe[e.type].push(e.callback), function (e) {
                if (!Ge[e]) switch (Ge[e] = !0, e) {
                    case "console":
                        "console" in He && ["debug", "info", "warn", "error", "log", "assert"].forEach((function (e) {
                            e in He.console && ge(He.console, e, (function (t) {
                                return function () {
                                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                                    Be("console", {
                                        args: n,
                                        level: e
                                    }), t && Function.prototype.apply.call(t, He.console, n)
                                }
                            }))
                        }));
                        break;
                    case "dom":
                        "document" in He && (He.document.addEventListener("click", ze("click", Be.bind(null, "dom")), !1), He.document.addEventListener("keypress", Ze(Be.bind(null, "dom")), !1), ["EventTarget", "Node"].forEach((function (e) {
                            var t = He[e] && He[e].prototype;
                            t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (ge(t, "addEventListener", (function (e) {
                                return function (t, n, r) {
                                    return n && n.handleEvent ? ("click" === t && ge(n, "handleEvent", (function (e) {
                                        return function (t) {
                                            return ze("click", Be.bind(null, "dom"))(t), e.call(this, t)
                                        }
                                    })), "keypress" === t && ge(n, "handleEvent", (function (e) {
                                        return function (t) {
                                            return Ze(Be.bind(null, "dom"))(t), e.call(this, t)
                                        }
                                    }))) : ("click" === t && ze("click", Be.bind(null, "dom"), !0)(this), "keypress" === t && Ze(Be.bind(null, "dom"))(this)), e.call(this, t, n, r)
                                }
                            })), ge(t, "removeEventListener", (function (e) {
                                return function (t, n, r) {
                                    try {
                                        e.call(this, t, n.__sentry_wrapped__, r)
                                    } catch (e) {}
                                    return e.call(this, t, n, r)
                                }
                            })))
                        })));
                        break;
                    case "xhr":
                        ! function () {
                            if ("XMLHttpRequest" in He) {
                                var e = [],
                                    t = [],
                                    n = XMLHttpRequest.prototype;
                                ge(n, "open", (function (n) {
                                    return function () {
                                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                        var o = this,
                                            s = r[1];
                                        o.__sentry_xhr__ = {
                                            method: H(r[0]) ? r[0].toUpperCase() : r[0],
                                            url: r[1]
                                        }, H(s) && "POST" === o.__sentry_xhr__.method && s.match(/sentry_key/) && (o.__sentry_own_request__ = !0);
                                        var a = function () {
                                            if (4 === o.readyState) {
                                                try {
                                                    o.__sentry_xhr__ && (o.__sentry_xhr__.status_code = o.status)
                                                } catch (e) {}
                                                try {
                                                    var n = e.indexOf(o);
                                                    if (-1 !== n) {
                                                        e.splice(n);
                                                        var i = t.splice(n)[0];
                                                        o.__sentry_xhr__ && void 0 !== i[0] && (o.__sentry_xhr__.body = i[0])
                                                    }
                                                } catch (e) {}
                                                Be("xhr", {
                                                    args: r,
                                                    endTimestamp: Date.now(),
                                                    startTimestamp: Date.now(),
                                                    xhr: o
                                                })
                                            }
                                        };
                                        return "onreadystatechange" in o && "function" == typeof o.onreadystatechange ? ge(o, "onreadystatechange", (function (e) {
                                            return function () {
                                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                                return a(), e.apply(o, t)
                                            }
                                        })) : o.addEventListener("readystatechange", a), n.apply(o, r)
                                    }
                                })), ge(n, "send", (function (n) {
                                    return function () {
                                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                                        return e.push(this), t.push(r), Be("xhr", {
                                            args: r,
                                            startTimestamp: Date.now(),
                                            xhr: this
                                        }), n.apply(this, r)
                                    }
                                }))
                            }
                        }();
                        break;
                    case "fetch":
                        (function () {
                            if (!xe()) return !1;
                            var e = (0, z.Rf)();
                            if (Me(e.fetch)) return !0;
                            var t = !1,
                                n = e.document;
                            if (n && "function" == typeof n.createElement) try {
                                var r = n.createElement("iframe");
                                r.hidden = !0, n.head.appendChild(r), r.contentWindow && r.contentWindow.fetch && (t = Me(r.contentWindow.fetch)), n.head.removeChild(r)
                            } catch (e) {
                                ne.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
                            }
                            return t
                        })() && ge(He, "fetch", (function (e) {
                            return function () {
                                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                var r = {
                                    args: t,
                                    fetchData: {
                                        method: qe(t),
                                        url: je(t)
                                    },
                                    startTimestamp: Date.now()
                                };
                                return Be("fetch", oe({}, r)), e.apply(He, t).then((function (e) {
                                    return Be("fetch", oe(oe({}, r), {
                                        endTimestamp: Date.now(),
                                        response: e
                                    })), e
                                }), (function (e) {
                                    throw Be("fetch", oe(oe({}, r), {
                                        endTimestamp: Date.now(),
                                        error: e
                                    })), e
                                }))
                            }
                        }));
                        break;
                    case "history":
                        ! function () {
                            if (function () {
                                    var e = (0, z.Rf)(),
                                        t = e.chrome,
                                        n = t && t.app && t.app.runtime,
                                        r = "history" in e && !!e.history.pushState && !!e.history.replaceState;
                                    return !n && r
                                }()) {
                                var e = He.onpopstate;
                                He.onpopstate = function () {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var r = He.location.href,
                                        i = ke;
                                    if (ke = r, Be("history", {
                                            from: i,
                                            to: r
                                        }), e) return e.apply(this, t)
                                }, ge(He.history, "pushState", t), ge(He.history, "replaceState", t)
                            }

                            function t(e) {
                                return function () {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    var r = t.length > 2 ? t[2] : void 0;
                                    if (r) {
                                        var i = ke,
                                            o = String(r);
                                        ke = o, Be("history", {
                                            from: i,
                                            to: o
                                        })
                                    }
                                    return e.apply(this, t)
                                }
                            }
                        }();
                        break;
                    case "error":
                        Qe = He.onerror, He.onerror = function (e, t, n, r, i) {
                            return Be("error", {
                                column: r,
                                error: i,
                                line: n,
                                msg: e,
                                url: t
                            }), !!Qe && Qe.apply(this, arguments)
                        };
                        break;
                    case "unhandledrejection":
                        Je = He.onunhandledrejection, He.onunhandledrejection = function (e) {
                            return Be("unhandledrejection", e), !Je || Je.apply(this, arguments)
                        };
                        break;
                    default:
                        ne.warn("unknown instrumentation type:", e)
                }
            }(e.type))
        }

        function Be(e, t) {
            var n, r;
            if (e && Fe[e]) try {
                for (var i = se(Fe[e] || []), o = i.next(); !o.done; o = i.next()) {
                    var s = o.value;
                    try {
                        s(t)
                    } catch (t) {
                        ne.error("Error while triggering instrumentation handler.\nType: " + e + "\nName: " + de(s) + "\nError: " + t)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (r = i.return) && r.call(i)
                } finally {
                    if (n) throw n.error
                }
            }
        }

        function qe(e) {
            return void 0 === e && (e = []), "Request" in He && j(e[0], Request) && e[0].method ? String(e[0].method).toUpperCase() : e[1] && e[1].method ? String(e[1].method).toUpperCase() : "GET"
        }

        function je(e) {
            return void 0 === e && (e = []), "string" == typeof e[0] ? e[0] : "Request" in He && j(e[0], Request) ? e[0].url : String(e[0])
        }
        var Ye, Ke, We = 0;

        function ze(e, t, n) {
            return void 0 === n && (n = !1),
                function (r) {
                    Ye = void 0, r && Ke !== r && (Ke = r, We && clearTimeout(We), n ? We = setTimeout((function () {
                        t({
                            event: r,
                            name: e
                        })
                    })) : t({
                        event: r,
                        name: e
                    }))
                }
        }

        function Ze(e) {
            return function (t) {
                var n;
                try {
                    n = t.target
                } catch (e) {
                    return
                }
                var r = n && n.tagName;
                r && ("INPUT" === r || "TEXTAREA" === r || n.isContentEditable) && (Ye || ze("input", e)(t), clearTimeout(Ye), Ye = setTimeout((function () {
                    Ye = void 0
                }), 1e3))
            }
        }
        var Qe = null,
            Je = null,
            Xe = "?",
            $e = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            et = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
            tt = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            nt = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            rt = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            it = /Minified React error #\d+;/i;

        function ot(e) {
            var t = null,
                n = 0;
            e && ("number" == typeof e.framesToPop ? n = e.framesToPop : it.test(e.message) && (n = 1));
            try {
                if (t = function (e) {
                        if (!e || !e.stacktrace) return null;
                        for (var t, n = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, i = e.stacktrace.split("\n"), o = [], s = 0; s < i.length; s += 2) {
                            var a = null;
                            (t = n.exec(i[s])) ? a = {
                                url: t[2],
                                func: t[3],
                                args: [],
                                line: +t[1],
                                column: null
                            }: (t = r.exec(i[s])) && (a = {
                                url: t[6],
                                func: t[3] || t[4],
                                args: t[5] ? t[5].split(",") : [],
                                line: +t[1],
                                column: +t[2]
                            }), a && (!a.func && a.line && (a.func = Xe), o.push(a))
                        }
                        return o.length ? {
                            message: at(e),
                            name: e.name,
                            stack: o
                        } : null
                    }(e)) return st(t, n)
            } catch (e) {}
            try {
                if (t = function (e) {
                        if (!e || !e.stack) return null;
                        for (var t, n, r, i = [], o = e.stack.split("\n"), s = 0; s < o.length; ++s) {
                            if (n = $e.exec(o[s])) {
                                var a = n[2] && 0 === n[2].indexOf("native");
                                n[2] && 0 === n[2].indexOf("eval") && (t = rt.exec(n[2])) && (n[2] = t[1], n[3] = t[2], n[4] = t[3]), r = {
                                    url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                                    func: n[1] || Xe,
                                    args: a ? [n[2]] : [],
                                    line: n[3] ? +n[3] : null,
                                    column: n[4] ? +n[4] : null
                                }
                            } else if (n = tt.exec(o[s])) r = {
                                url: n[2],
                                func: n[1] || Xe,
                                args: [],
                                line: +n[3],
                                column: n[4] ? +n[4] : null
                            };
                            else {
                                if (!(n = et.exec(o[s]))) continue;
                                n[3] && n[3].indexOf(" > eval") > -1 && (t = nt.exec(n[3])) ? (n[1] = n[1] || "eval", n[3] = t[1], n[4] = t[2], n[5] = "") : 0 !== s || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1), r = {
                                    url: n[3],
                                    func: n[1] || Xe,
                                    args: n[2] ? n[2].split(",") : [],
                                    line: n[4] ? +n[4] : null,
                                    column: n[5] ? +n[5] : null
                                }
                            }!r.func && r.line && (r.func = Xe), i.push(r)
                        }
                        return i.length ? {
                            message: at(e),
                            name: e.name,
                            stack: i
                        } : null
                    }(e)) return st(t, n)
            } catch (e) {}
            return {
                message: at(e),
                name: e && e.name,
                stack: [],
                failed: !0
            }
        }

        function st(e, t) {
            try {
                return S(S({}, e), {
                    stack: e.stack.slice(t)
                })
            } catch (t) {
                return e
            }
        }

        function at(e) {
            var t = e && e.message;
            return t ? t.error && "string" == typeof t.error.message ? t.error.message : t : "No error message"
        }

        function ct(e) {
            var t = ut(e.stack),
                n = {
                    type: e.name,
                    value: e.message
                };
            return t && t.length && (n.stacktrace = {
                frames: t
            }), void 0 === n.type && "" === n.value && (n.value = "Unrecoverable error caught"), n
        }

        function lt(e) {
            return {
                exception: {
                    values: [ct(e)]
                }
            }
        }

        function ut(e) {
            if (!e || !e.length) return [];
            var t = e,
                n = t[0].func || "",
                r = t[t.length - 1].func || "";
            return -1 === n.indexOf("captureMessage") && -1 === n.indexOf("captureException") || (t = t.slice(1)), -1 !== r.indexOf("sentryWrapped") && (t = t.slice(0, -1)), t.slice(0, 50).map((function (e) {
                return {
                    colno: null === e.column ? void 0 : e.column,
                    filename: e.url || t[0].url,
                    function: e.func || "?",
                    in_app: !0,
                    lineno: null === e.line ? void 0 : e.line
                }
            })).reverse()
        }

        function dt(e, t, n) {
            var r, i;
            if (void 0 === n && (n = {}), U(e) && e.error) return lt(ot(e = e.error));
            if (k(e) || (i = e, "[object DOMException]" === Object.prototype.toString.call(i))) {
                var o = e,
                    s = o.name || (k(o) ? "DOMError" : "DOMException"),
                    a = o.message ? s + ": " + o.message : s;
                return r = ht(a, t, n), (0, z.Db)(r, a), "code" in o && (r.tags = S(S({}, r.tags), {
                    "DOMException.code": "" + o.code
                })), r
            }
            return M(e) ? r = lt(ot(e)) : G(e) || V(e) ? (r = function (e, t, n) {
                var r = {
                    exception: {
                        values: [{
                            type: V(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                            value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Ce(e)
                        }]
                    },
                    extra: {
                        __serialized__: ve(e)
                    }
                };
                if (t) {
                    var i = ut(ot(t).stack);
                    r.stacktrace = {
                        frames: i
                    }
                }
                return r
            }(e, t, n.rejection), (0, z.EG)(r, {
                synthetic: !0
            }), r) : (r = ht(e, t, n), (0, z.Db)(r, "" + e, void 0), (0, z.EG)(r, {
                synthetic: !0
            }), r)
        }

        function ht(e, t, n) {
            void 0 === n && (n = {});
            var r = {
                message: e
            };
            if (n.attachStacktrace && t) {
                var i = ut(ot(t).stack);
                r.stacktrace = {
                    frames: i
                }
            }
            return r
        }

        function pt(e, t) {
            var n = "function" == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r, i, o = n.call(e),
                s = [];
            try {
                for (;
                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
            } catch (e) {
                i = {
                    error: e
                }
            } finally {
                try {
                    r && !r.done && (n = o.return) && n.call(o)
                } finally {
                    if (i) throw i.error
                }
            }
            return s
        }

        function ft() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(pt(arguments[t]));
            return e
        }

        function gt(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            var r = Pe();
            if (r && r[e]) return r[e].apply(r, ft(t));
            throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
        }

        function mt(e, t) {
            var n;
            try {
                throw new Error("Sentry syntheticException")
            } catch (e) {
                n = e
            }
            return gt("captureException", e, {
                captureContext: t,
                originalException: e,
                syntheticException: n
            })
        }

        function vt(e) {
            gt("withScope", e)
        }
        var Et = Object.setPrototypeOf || ({
                    __proto__: []
                }
                instanceof Array ? function (e, t) {
                    return e.__proto__ = t, e
                } : function (e, t) {
                    for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
                    return e
                }),
            _t = function (e) {
                function t(t) {
                    var n = this.constructor,
                        r = e.call(this, t) || this;
                    return r.message = t, r.name = n.prototype.constructor.name, Et(r, n.prototype), r
                }
                return function (e, t) {
                    function n() {
                        this.constructor = e
                    }
                    ie(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }(t, e), t
            }(Error),
            yt = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/,
            Ct = function () {
                function e(e) {
                    "string" == typeof e ? this._fromString(e) : this._fromComponents(e), this._validate()
                }
                return e.prototype.toString = function (e) {
                    void 0 === e && (e = !1);
                    var t = this,
                        n = t.host,
                        r = t.path,
                        i = t.pass,
                        o = t.port,
                        s = t.projectId;
                    return t.protocol + "://" + t.user + (e && i ? ":" + i : "") + "@" + n + (o ? ":" + o : "") + "/" + (r ? r + "/" : r) + s
                }, e.prototype._fromString = function (e) {
                    var t = yt.exec(e);
                    if (!t) throw new _t("Invalid Dsn");
                    var n = function (e, t) {
                            var n = "function" == typeof Symbol && e[Symbol.iterator];
                            if (!n) return e;
                            var r, i, o = n.call(e),
                                s = [];
                            try {
                                for (;
                                    (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                            } catch (e) {
                                i = {
                                    error: e
                                }
                            } finally {
                                try {
                                    r && !r.done && (n = o.return) && n.call(o)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                            return s
                        }(t.slice(1), 6),
                        r = n[0],
                        i = n[1],
                        o = n[2],
                        s = void 0 === o ? "" : o,
                        a = n[3],
                        c = n[4],
                        l = void 0 === c ? "" : c,
                        u = "",
                        d = n[5],
                        h = d.split("/");
                    if (h.length > 1 && (u = h.slice(0, -1).join("/"), d = h.pop()), d) {
                        var p = d.match(/^\d+/);
                        p && (d = p[0])
                    }
                    this._fromComponents({
                        host: a,
                        pass: s,
                        path: u,
                        projectId: d,
                        port: l,
                        protocol: r,
                        user: i
                    })
                }, e.prototype._fromComponents = function (e) {
                    this.protocol = e.protocol, this.user = e.user, this.pass = e.pass || "", this.host = e.host, this.port = e.port || "", this.path = e.path || "", this.projectId = e.projectId
                }, e.prototype._validate = function () {
                    var e = this;
                    if (["protocol", "user", "host", "projectId"].forEach((function (t) {
                            if (!e[t]) throw new _t("Invalid Dsn: " + t + " missing")
                        })), !this.projectId.match(/^\d+$/)) throw new _t("Invalid Dsn: Invalid projectId " + this.projectId);
                    if ("http" !== this.protocol && "https" !== this.protocol) throw new _t("Invalid Dsn: Invalid protocol " + this.protocol);
                    if (this.port && isNaN(parseInt(this.port, 10))) throw new _t("Invalid Dsn: Invalid port " + this.port)
                }, e
            }(),
            It = function () {
                function e(e) {
                    this.dsn = e, this._dsnObject = new Ct(e)
                }
                return e.prototype.getDsn = function () {
                    return this._dsnObject
                }, e.prototype.getBaseApiEndpoint = function () {
                    var e = this._dsnObject,
                        t = e.protocol ? e.protocol + ":" : "",
                        n = e.port ? ":" + e.port : "";
                    return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
                }, e.prototype.getStoreEndpoint = function () {
                    return this._getIngestEndpoint("store")
                }, e.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
                    return this.getStoreEndpoint() + "?" + this._encodedAuth()
                }, e.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function () {
                    return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
                }, e.prototype.getStoreEndpointPath = function () {
                    var e = this._dsnObject;
                    return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
                }, e.prototype.getRequestHeaders = function (e, t) {
                    var n = this._dsnObject,
                        r = ["Sentry sentry_version=7"];
                    return r.push("sentry_client=" + e + "/" + t), r.push("sentry_key=" + n.user), n.pass && r.push("sentry_secret=" + n.pass), {
                        "Content-Type": "application/json",
                        "X-Sentry-Auth": r.join(", ")
                    }
                }, e.prototype.getReportDialogEndpoint = function (e) {
                    void 0 === e && (e = {});
                    var t = this._dsnObject,
                        n = this.getBaseApiEndpoint() + "embed/error-page/",
                        r = [];
                    for (var i in r.push("dsn=" + t.toString()), e)
                        if ("dsn" !== i)
                            if ("user" === i) {
                                if (!e.user) continue;
                                e.user.name && r.push("name=" + encodeURIComponent(e.user.name)), e.user.email && r.push("email=" + encodeURIComponent(e.user.email))
                            } else r.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
                    return r.length ? n + "?" + r.join("&") : n
                }, e.prototype._getEnvelopeEndpoint = function () {
                    return this._getIngestEndpoint("envelope")
                }, e.prototype._getIngestEndpoint = function (e) {
                    return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/"
                }, e.prototype._encodedAuth = function () {
                    var e, t = {
                        sentry_key: this._dsnObject.user,
                        sentry_version: "7"
                    };
                    return e = t, Object.keys(e).map((function (t) {
                        return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                    })).join("&")
                }, e
            }(),
            At = 0;

        function St() {
            return At > 0
        }

        function Ot() {
            At += 1, setTimeout((function () {
                At -= 1
            }))
        }

        function Tt(e, t, n) {
            if (void 0 === t && (t = {}), "function" != typeof e) return e;
            try {
                if (e.__sentry__) return e;
                if (e.__sentry_wrapped__) return e.__sentry_wrapped__
            } catch (t) {
                return e
            }
            var r = function () {
                var r = Array.prototype.slice.call(arguments);
                try {
                    n && "function" == typeof n && n.apply(this, arguments);
                    var i = r.map((function (e) {
                        return Tt(e, t)
                    }));
                    return e.handleEvent ? e.handleEvent.apply(this, i) : e.apply(this, i)
                } catch (e) {
                    throw Ot(), vt((function (n) {
                        n.addEventProcessor((function (e) {
                            var n = S({}, e);
                            return t.mechanism && ((0, z.Db)(n, void 0, void 0), (0, z.EG)(n, t.mechanism)), n.extra = S(S({}, n.extra), {
                                arguments: r
                            }), n
                        })), mt(e)
                    })), e
                }
            };
            try {
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i])
            } catch (e) {}
            e.prototype = e.prototype || {}, r.prototype = e.prototype, Object.defineProperty(e, "__sentry_wrapped__", {
                enumerable: !1,
                value: r
            }), Object.defineProperties(r, {
                __sentry__: {
                    enumerable: !1,
                    value: !0
                },
                __sentry_original__: {
                    enumerable: !1,
                    value: e
                }
            });
            try {
                Object.getOwnPropertyDescriptor(r, "name").configurable && Object.defineProperty(r, "name", {
                    get: function () {
                        return e.name
                    }
                })
            } catch (e) {}
            return r
        }
        var Pt = function () {
                function e(t) {
                    this.name = e.id, this._onErrorHandlerInstalled = !1, this._onUnhandledRejectionHandlerInstalled = !1, this._options = S({
                        onerror: !0,
                        onunhandledrejection: !0
                    }, t)
                }
                return e.prototype.setupOnce = function () {
                    Error.stackTraceLimit = 50, this._options.onerror && (ne.log("Global Handler attached: onerror"), this._installGlobalOnErrorHandler()), this._options.onunhandledrejection && (ne.log("Global Handler attached: onunhandledrejection"), this._installGlobalOnUnhandledRejectionHandler())
                }, e.prototype._installGlobalOnErrorHandler = function () {
                    var t = this;
                    this._onErrorHandlerInstalled || (Ve({
                        callback: function (n) {
                            var r = n.error,
                                i = Pe(),
                                o = i.getIntegration(e),
                                s = r && !0 === r.__sentry_own_request__;
                            if (o && !St() && !s) {
                                var a = i.getClient(),
                                    c = F(r) ? t._eventFromIncompleteOnError(n.msg, n.url, n.line, n.column) : t._enhanceEventWithInitialFrame(dt(r, void 0, {
                                        attachStacktrace: a && a.getOptions().attachStacktrace,
                                        rejection: !1
                                    }), n.url, n.line, n.column);
                                (0, z.EG)(c, {
                                    handled: !1,
                                    type: "onerror"
                                }), i.captureEvent(c, {
                                    originalException: r
                                })
                            }
                        },
                        type: "error"
                    }), this._onErrorHandlerInstalled = !0)
                }, e.prototype._installGlobalOnUnhandledRejectionHandler = function () {
                    var t = this;
                    this._onUnhandledRejectionHandlerInstalled || (Ve({
                        callback: function (n) {
                            var r = n;
                            try {
                                "reason" in n ? r = n.reason : "detail" in n && "reason" in n.detail && (r = n.detail.reason)
                            } catch (e) {}
                            var i = Pe(),
                                o = i.getIntegration(e),
                                s = r && !0 === r.__sentry_own_request__;
                            if (!o || St() || s) return !0;
                            var a = i.getClient(),
                                c = F(r) ? t._eventFromRejectionWithPrimitive(r) : dt(r, void 0, {
                                    attachStacktrace: a && a.getOptions().attachStacktrace,
                                    rejection: !0
                                });
                            c.level = Le.Error, (0, z.EG)(c, {
                                handled: !1,
                                type: "onunhandledrejection"
                            }), i.captureEvent(c, {
                                originalException: r
                            })
                        },
                        type: "unhandledrejection"
                    }), this._onUnhandledRejectionHandlerInstalled = !0)
                }, e.prototype._eventFromIncompleteOnError = function (e, t, n, r) {
                    var i, o = U(e) ? e.message : e;
                    if (H(o)) {
                        var s = o.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
                        s && (i = s[1], o = s[2])
                    }
                    var a = {
                        exception: {
                            values: [{
                                type: i || "Error",
                                value: o
                            }]
                        }
                    };
                    return this._enhanceEventWithInitialFrame(a, t, n, r)
                }, e.prototype._eventFromRejectionWithPrimitive = function (e) {
                    return {
                        exception: {
                            values: [{
                                type: "UnhandledRejection",
                                value: "Non-Error promise rejection captured with value: " + String(e)
                            }]
                        }
                    }
                }, e.prototype._enhanceEventWithInitialFrame = function (e, t, n, r) {
                    e.exception = e.exception || {}, e.exception.values = e.exception.values || [], e.exception.values[0] = e.exception.values[0] || {}, e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {}, e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
                    var i = isNaN(parseInt(r, 10)) ? void 0 : r,
                        o = isNaN(parseInt(n, 10)) ? void 0 : n,
                        s = H(t) && t.length > 0 ? t : (0, z.l4)();
                    return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
                        colno: i,
                        filename: s,
                        function: "?",
                        in_app: !0,
                        lineno: o
                    }), e
                }, e.id = "GlobalHandlers", e
            }(),
            Rt = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"],
            wt = function () {
                function e(t) {
                    this.name = e.id, this._options = S({
                        XMLHttpRequest: !0,
                        eventTarget: !0,
                        requestAnimationFrame: !0,
                        setInterval: !0,
                        setTimeout: !0
                    }, t)
                }
                return e.prototype.setupOnce = function () {
                    var e = (0, z.Rf)();
                    this._options.setTimeout && ge(e, "setTimeout", this._wrapTimeFunction.bind(this)), this._options.setInterval && ge(e, "setInterval", this._wrapTimeFunction.bind(this)), this._options.requestAnimationFrame && ge(e, "requestAnimationFrame", this._wrapRAF.bind(this)), this._options.XMLHttpRequest && "XMLHttpRequest" in e && ge(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)), this._options.eventTarget && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : Rt).forEach(this._wrapEventTarget.bind(this))
                }, e.prototype._wrapTimeFunction = function (e) {
                    return function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = t[0];
                        return t[0] = Tt(r, {
                            mechanism: {
                                data: {
                                    function: de(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }), e.apply(this, t)
                    }
                }, e.prototype._wrapRAF = function (e) {
                    return function (t) {
                        return e.call(this, Tt(t, {
                            mechanism: {
                                data: {
                                    function: "requestAnimationFrame",
                                    handler: de(e)
                                },
                                handled: !0,
                                type: "instrument"
                            }
                        }))
                    }
                }, e.prototype._wrapEventTarget = function (e) {
                    var t = (0, z.Rf)(),
                        n = t[e] && t[e].prototype;
                    n && n.hasOwnProperty && n.hasOwnProperty("addEventListener") && (ge(n, "addEventListener", (function (t) {
                        return function (n, r, i) {
                            try {
                                "function" == typeof r.handleEvent && (r.handleEvent = Tt(r.handleEvent.bind(r), {
                                    mechanism: {
                                        data: {
                                            function: "handleEvent",
                                            handler: de(r),
                                            target: e
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                }))
                            } catch (e) {}
                            return t.call(this, n, Tt(r, {
                                mechanism: {
                                    data: {
                                        function: "addEventListener",
                                        handler: de(r),
                                        target: e
                                    },
                                    handled: !0,
                                    type: "instrument"
                                }
                            }), i)
                        }
                    })), ge(n, "removeEventListener", (function (e) {
                        return function (t, n, r) {
                            var i, o = n;
                            try {
                                var s = null === (i = o) || void 0 === i ? void 0 : i.__sentry_wrapped__;
                                s && e.call(this, t, s, r)
                            } catch (e) {}
                            return e.call(this, t, o, r)
                        }
                    })))
                }, e.prototype._wrapXHR = function (e) {
                    return function () {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = this,
                            i = ["onload", "onerror", "onprogress", "onreadystatechange"];
                        return i.forEach((function (e) {
                            e in r && "function" == typeof r[e] && ge(r, e, (function (t) {
                                var n = {
                                    mechanism: {
                                        data: {
                                            function: e,
                                            handler: de(t)
                                        },
                                        handled: !0,
                                        type: "instrument"
                                    }
                                };
                                return t.__sentry_original__ && (n.mechanism.data.handler = de(t.__sentry_original__)), Tt(t, n)
                            }))
                        })), e.apply(this, t)
                    }
                }, e.id = "TryCatch", e
            }(),
            Nt = function () {
                function e(t) {
                    this.name = e.id, this._options = S({
                        console: !0,
                        dom: !0,
                        fetch: !0,
                        history: !0,
                        sentry: !0,
                        xhr: !0
                    }, t)
                }
                return e.prototype.addSentryBreadcrumb = function (e) {
                    this._options.sentry && Pe().addBreadcrumb({
                        category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
                        event_id: e.event_id,
                        level: e.level,
                        message: (0, z.jH)(e)
                    }, {
                        event: e
                    })
                }, e.prototype.setupOnce = function () {
                    var e = this;
                    this._options.console && Ve({
                        callback: function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            e._consoleBreadcrumb.apply(e, P(t))
                        },
                        type: "console"
                    }), this._options.dom && Ve({
                        callback: function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            e._domBreadcrumb.apply(e, P(t))
                        },
                        type: "dom"
                    }), this._options.xhr && Ve({
                        callback: function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            e._xhrBreadcrumb.apply(e, P(t))
                        },
                        type: "xhr"
                    }), this._options.fetch && Ve({
                        callback: function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            e._fetchBreadcrumb.apply(e, P(t))
                        },
                        type: "fetch"
                    }), this._options.history && Ve({
                        callback: function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            e._historyBreadcrumb.apply(e, P(t))
                        },
                        type: "history"
                    })
                }, e.prototype._consoleBreadcrumb = function (e) {
                    var t = {
                        category: "console",
                        data: {
                            arguments: e.args,
                            logger: "console"
                        },
                        level: Le.fromString(e.level),
                        message: pe(e.args, " ")
                    };
                    if ("assert" === e.level) {
                        if (!1 !== e.args[0]) return;
                        t.message = "Assertion failed: " + (pe(e.args.slice(1), " ") || "console.assert"), t.data.arguments = e.args.slice(1)
                    }
                    Pe().addBreadcrumb(t, {
                        input: e.args,
                        level: e.level
                    })
                }, e.prototype._domBreadcrumb = function (e) {
                    var t;
                    try {
                        t = e.event.target ? ae(e.event.target) : ae(e.event)
                    } catch (e) {
                        t = "<unknown>"
                    }
                    0 !== t.length && Pe().addBreadcrumb({
                        category: "ui." + e.name,
                        message: t
                    }, {
                        event: e.event,
                        name: e.name
                    })
                }, e.prototype._xhrBreadcrumb = function (e) {
                    if (e.endTimestamp) {
                        if (e.xhr.__sentry_own_request__) return;
                        var t = e.xhr.__sentry_xhr__ || {},
                            n = t.method,
                            r = t.url,
                            i = t.status_code,
                            o = t.body;
                        Pe().addBreadcrumb({
                            category: "xhr",
                            data: {
                                method: n,
                                url: r,
                                status_code: i
                            },
                            type: "http"
                        }, {
                            xhr: e.xhr,
                            input: o
                        })
                    }
                }, e.prototype._fetchBreadcrumb = function (e) {
                    e.endTimestamp && (e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Pe().addBreadcrumb({
                        category: "fetch",
                        data: e.fetchData,
                        level: Le.Error,
                        type: "http"
                    }, {
                        data: e.error,
                        input: e.args
                    }) : Pe().addBreadcrumb({
                        category: "fetch",
                        data: S(S({}, e.fetchData), {
                            status_code: e.response.status
                        }),
                        type: "http"
                    }, {
                        input: e.args,
                        response: e.response
                    })))
                }, e.prototype._historyBreadcrumb = function (e) {
                    var t = (0, z.Rf)(),
                        n = e.from,
                        r = e.to,
                        i = (0, z.en)(t.location.href),
                        o = (0, z.en)(n),
                        s = (0, z.en)(r);
                    o.path || (o = i), i.protocol === s.protocol && i.host === s.host && (r = s.relative), i.protocol === o.protocol && i.host === o.host && (n = o.relative), Pe().addBreadcrumb({
                        category: "navigation",
                        data: {
                            from: n,
                            to: r
                        }
                    })
                }, e.id = "Breadcrumbs", e
            }(),
            Lt = function () {
                function e(t) {
                    void 0 === t && (t = {}), this.name = e.id, this._key = t.key || "cause", this._limit = t.limit || 5
                }
                return e.prototype.setupOnce = function () {
                    J((function (t, n) {
                        var r = Pe().getIntegration(e);
                        return r ? r._handler(t, n) : t
                    }))
                }, e.prototype._handler = function (e, t) {
                    if (!(e.exception && e.exception.values && t && j(t.originalException, Error))) return e;
                    var n = this._walkErrorTree(t.originalException, this._key);
                    return e.exception.values = P(n, e.exception.values), e
                }, e.prototype._walkErrorTree = function (e, t, n) {
                    if (void 0 === n && (n = []), !j(e[t], Error) || n.length + 1 >= this._limit) return n;
                    var r = ct(ot(e[t]));
                    return this._walkErrorTree(e[t], t, P([r], n))
                }, e.id = "LinkedErrors", e
            }(),
            bt = (0, z.Rf)(),
            Dt = function () {
                function e() {
                    this.name = e.id
                }
                return e.prototype.setupOnce = function () {
                    J((function (t) {
                        var n, r, i;
                        if (Pe().getIntegration(e)) {
                            if (!bt.navigator && !bt.location && !bt.document) return t;
                            var o = (null === (n = t.request) || void 0 === n ? void 0 : n.url) || (null === (r = bt.location) || void 0 === r ? void 0 : r.href),
                                s = (bt.document || {}).referrer,
                                a = (bt.navigator || {}).userAgent,
                                c = S(S(S({}, null === (i = t.request) || void 0 === i ? void 0 : i.headers), s && {
                                    Referer: s
                                }), a && {
                                    "User-Agent": a
                                }),
                                l = S(S({}, o && {
                                    url: o
                                }), {
                                    headers: c
                                });
                            return S(S({}, t), {
                                request: l
                            })
                        }
                        return t
                    }))
                }, e.id = "UserAgent", e
            }(),
            xt = {},
            Mt = (0, z.Rf)();
        Mt.Sentry && Mt.Sentry.Integrations && (xt = Mt.Sentry.Integrations);
        var Ut = S(S(S({}, xt), e), t),
            kt = [];
        var Ht, Ft = function () {
            function e(e, t) {
                this._integrations = {}, this._processing = 0, this._backend = new e(t), this._options = t, t.dsn && (this._dsn = new Ct(t.dsn))
            }
            return e.prototype.captureException = function (e, t, n) {
                var r = this,
                    i = t && t.event_id;
                return this._process(this._getBackend().eventFromException(e, t).then((function (e) {
                    return r._captureEvent(e, t, n)
                })).then((function (e) {
                    i = e
                }))), i
            }, e.prototype.captureMessage = function (e, t, n, r) {
                var i = this,
                    o = n && n.event_id,
                    s = F(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
                return this._process(s.then((function (e) {
                    return i._captureEvent(e, n, r)
                })).then((function (e) {
                    o = e
                }))), o
            }, e.prototype.captureEvent = function (e, t, n) {
                var r = t && t.event_id;
                return this._process(this._captureEvent(e, t, n).then((function (e) {
                    r = e
                }))), r
            }, e.prototype.captureSession = function (e) {
                e.release ? this._sendSession(e) : ne.warn("Discarded session because of missing release")
            }, e.prototype.getDsn = function () {
                return this._dsn
            }, e.prototype.getOptions = function () {
                return this._options
            }, e.prototype.flush = function (e) {
                var t = this;
                return this._isClientProcessing(e).then((function (n) {
                    return t._getBackend().getTransport().close(e).then((function (e) {
                        return n && e
                    }))
                }))
            }, e.prototype.close = function (e) {
                var t = this;
                return this.flush(e).then((function (e) {
                    return t.getOptions().enabled = !1, e
                }))
            }, e.prototype.setupIntegrations = function () {
                var e, t;
                this._isEnabled() && (this._integrations = (e = this._options, t = {}, function (e) {
                    var t = e.defaultIntegrations && L(e.defaultIntegrations) || [],
                        n = e.integrations,
                        r = [];
                    if (Array.isArray(n)) {
                        var i = n.map((function (e) {
                                return e.name
                            })),
                            o = [];
                        t.forEach((function (e) {
                            -1 === i.indexOf(e.name) && -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                        })), n.forEach((function (e) {
                            -1 === o.indexOf(e.name) && (r.push(e), o.push(e.name))
                        }))
                    } else "function" == typeof n ? (r = n(t), r = Array.isArray(r) ? r : [r]) : r = L(t);
                    var s = r.map((function (e) {
                            return e.name
                        })),
                        a = "Debug";
                    return -1 !== s.indexOf(a) && r.push.apply(r, L(r.splice(s.indexOf(a), 1))), r
                }(e).forEach((function (e) {
                    t[e.name] = e,
                        function (e) {
                            -1 === kt.indexOf(e.name) && (e.setupOnce(J, Pe), kt.push(e.name), ne.log("Integration installed: " + e.name))
                        }(e)
                })), t))
            }, e.prototype.getIntegration = function (e) {
                try {
                    return this._integrations[e.id] || null
                } catch (t) {
                    return ne.warn("Cannot retrieve integration " + e.id + " from the current Client"), null
                }
            }, e.prototype._updateSessionFromEvent = function (e, t) {
                var n, r, i, o = !1,
                    s = !1,
                    a = t.exception && t.exception.values;
                if (a) {
                    s = !0;
                    try {
                        for (var c = function (e) {
                                var t = "function" == typeof Symbol && Symbol.iterator,
                                    n = t && e[t],
                                    r = 0;
                                if (n) return n.call(e);
                                if (e && "number" == typeof e.length) return {
                                    next: function () {
                                        return e && r >= e.length && (e = void 0), {
                                            value: e && e[r++],
                                            done: !e
                                        }
                                    }
                                };
                                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
                            }(a), l = c.next(); !l.done; l = c.next()) {
                            var u = l.value.mechanism;
                            if (u && !1 === u.handled) {
                                o = !0;
                                break
                            }
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            l && !l.done && (r = c.return) && r.call(c)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                }
                var d = t.user;
                if (!e.userAgent) {
                    var h = t.request ? t.request.headers : {};
                    for (var p in h)
                        if ("user-agent" === p.toLowerCase()) {
                            i = h[p];
                            break
                        }
                }
                e.update(w(w({}, o && {
                    status: te.Crashed
                }), {
                    user: d,
                    userAgent: i,
                    errors: e.errors + Number(s || o)
                }))
            }, e.prototype._sendSession = function (e) {
                this._getBackend().sendSession(e)
            }, e.prototype._isClientProcessing = function (e) {
                var t = this;
                return new W((function (n) {
                    var r = 0,
                        i = setInterval((function () {
                            0 == t._processing ? (clearInterval(i), n(!0)) : (r += 1, e && r >= e && (clearInterval(i), n(!1)))
                        }), 1)
                }))
            }, e.prototype._getBackend = function () {
                return this._backend
            }, e.prototype._isEnabled = function () {
                return !1 !== this.getOptions().enabled && void 0 !== this._dsn
            }, e.prototype._prepareEvent = function (e, t, n) {
                var r = this,
                    i = this.getOptions().normalizeDepth,
                    o = void 0 === i ? 3 : i,
                    s = w(w({}, e), {
                        event_id: e.event_id || (n && n.event_id ? n.event_id : (0, z.DM)()),
                        timestamp: e.timestamp || (0, K.yW)()
                    });
                this._applyClientOptions(s), this._applyIntegrationsMetadata(s);
                var a = t;
                n && n.captureContext && (a = Z.clone(a).update(n.captureContext));
                var c = W.resolve(s);
                return a && (c = a.applyToEvent(s, n)), c.then((function (e) {
                    return "number" == typeof o && o > 0 ? r._normalizeEvent(e, o) : e
                }))
            }, e.prototype._normalizeEvent = function (e, t) {
                if (!e) return null;
                var n = w(w(w(w(w({}, e), e.breadcrumbs && {
                    breadcrumbs: e.breadcrumbs.map((function (e) {
                        return w(w({}, e), e.data && {
                            data: ye(e.data, t)
                        })
                    }))
                }), e.user && {
                    user: ye(e.user, t)
                }), e.contexts && {
                    contexts: ye(e.contexts, t)
                }), e.extra && {
                    extra: ye(e.extra, t)
                });
                return e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace), n
            }, e.prototype._applyClientOptions = function (e) {
                var t = this.getOptions(),
                    n = t.environment,
                    r = t.release,
                    i = t.dist,
                    o = t.maxValueLength,
                    s = void 0 === o ? 250 : o;
                "environment" in e || (e.environment = "environment" in t ? n : "production"), void 0 === e.release && void 0 !== r && (e.release = r), void 0 === e.dist && void 0 !== i && (e.dist = i), e.message && (e.message = he(e.message, s));
                var a = e.exception && e.exception.values && e.exception.values[0];
                a && a.value && (a.value = he(a.value, s));
                var c = e.request;
                c && c.url && (c.url = he(c.url, s))
            }, e.prototype._applyIntegrationsMetadata = function (e) {
                var t = e.sdk,
                    n = Object.keys(this._integrations);
                t && n.length > 0 && (t.integrations = n)
            }, e.prototype._sendEvent = function (e) {
                this._getBackend().sendEvent(e)
            }, e.prototype._captureEvent = function (e, t, n) {
                return this._processEvent(e, t, n).then((function (e) {
                    return e.event_id
                }), (function (e) {
                    ne.error(e)
                }))
            }, e.prototype._processEvent = function (e, t, n) {
                var r = this,
                    i = this.getOptions(),
                    o = i.beforeSend,
                    s = i.sampleRate;
                if (!this._isEnabled()) return W.reject(new _t("SDK not enabled, will not send event."));
                var a = "transaction" === e.type;
                return !a && "number" == typeof s && Math.random() > s ? W.reject(new _t("Discarding event because it's not included in the random sample (sampling rate = " + s + ")")) : this._prepareEvent(e, n, t).then((function (e) {
                    if (null === e) throw new _t("An event processor returned null, will not send event.");
                    if (t && t.data && !0 === t.data.__sentry__ || a || !o) return e;
                    var n = o(e, t);
                    if (void 0 === n) throw new _t("`beforeSend` method has to return `null` or a valid event.");
                    return q(n) ? n.then((function (e) {
                        return e
                    }), (function (e) {
                        throw new _t("beforeSend rejected with " + e)
                    })) : n
                })).then((function (e) {
                    if (null === e) throw new _t("`beforeSend` returned `null`, will not send event.");
                    var t = n && n.getSession && n.getSession();
                    return !a && t && r._updateSessionFromEvent(t, e), r._sendEvent(e), e
                })).then(null, (function (e) {
                    if (e instanceof _t) throw e;
                    throw r.captureException(e, {
                        data: {
                            __sentry__: !0
                        },
                        originalException: e
                    }), new _t("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
                }))
            }, e.prototype._process = function (e) {
                var t = this;
                this._processing += 1, e.then((function (e) {
                    return t._processing -= 1, e
                }), (function (e) {
                    return t._processing -= 1, e
                }))
            }, e
        }();
        ! function (e) {
            e.Unknown = "unknown", e.Skipped = "skipped", e.Success = "success", e.RateLimit = "rate_limit", e.Invalid = "invalid", e.Failed = "failed"
        }(Ht || (Ht = {})),
        function (e) {
            e.fromHttpCode = function (t) {
                return t >= 200 && t < 300 ? e.Success : 429 === t ? e.RateLimit : t >= 400 && t < 500 ? e.Invalid : t >= 500 ? e.Failed : e.Unknown
            }
        }(Ht || (Ht = {}));
        var Gt = function () {
                function e() {}
                return e.prototype.sendEvent = function (e) {
                    return W.resolve({
                        reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                        status: Ht.Skipped
                    })
                }, e.prototype.close = function (e) {
                    return W.resolve(!0)
                }, e
            }(),
            Vt = function () {
                function e(e) {
                    this._options = e, this._options.dsn || ne.warn("No DSN provided, backend will not do anything."), this._transport = this._setupTransport()
                }
                return e.prototype.eventFromException = function (e, t) {
                    throw new _t("Backend has to implement `eventFromException` method")
                }, e.prototype.eventFromMessage = function (e, t, n) {
                    throw new _t("Backend has to implement `eventFromMessage` method")
                }, e.prototype.sendEvent = function (e) {
                    this._transport.sendEvent(e).then(null, (function (e) {
                        ne.error("Error while sending event: " + e)
                    }))
                }, e.prototype.sendSession = function (e) {
                    this._transport.sendSession ? this._transport.sendSession(e).then(null, (function (e) {
                        ne.error("Error while sending session: " + e)
                    })) : ne.warn("Dropping session because custom transport doesn't implement sendSession")
                }, e.prototype.getTransport = function () {
                    return this._transport
                }, e.prototype._setupTransport = function () {
                    return new Gt
                }, e
            }();

        function Bt(e, t) {
            return {
                body: JSON.stringify({
                    sent_at: (new Date).toISOString()
                }) + "\n" + JSON.stringify({
                    type: "session"
                }) + "\n" + JSON.stringify(e),
                type: "session",
                url: t.getEnvelopeEndpointWithUrlEncodedAuth()
            }
        }

        function qt(e, t) {
            var n = e.tags || {},
                r = n.__sentry_samplingMethod,
                i = n.__sentry_sampleRate,
                o = function (e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                }(n, ["__sentry_samplingMethod", "__sentry_sampleRate"]);
            e.tags = o;
            var s = "transaction" === e.type,
                a = {
                    body: JSON.stringify(e),
                    type: e.type || "event",
                    url: s ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
                };
            if (s) {
                var c = JSON.stringify({
                    event_id: e.event_id,
                    sent_at: (new Date).toISOString()
                }) + "\n" + JSON.stringify({
                    type: e.type,
                    sample_rates: [{
                        id: r,
                        rate: i
                    }]
                }) + "\n" + a.body;
                a.body = c
            }
            return a
        }
        var jt, Yt = function () {
                function e(e) {
                    this._limit = e, this._buffer = []
                }
                return e.prototype.isReady = function () {
                    return void 0 === this._limit || this.length() < this._limit
                }, e.prototype.add = function (e) {
                    var t = this;
                    return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e), e.then((function () {
                        return t.remove(e)
                    })).then(null, (function () {
                        return t.remove(e).then(null, (function () {}))
                    })), e) : W.reject(new _t("Not adding Promise due to buffer limit reached."))
                }, e.prototype.remove = function (e) {
                    return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
                }, e.prototype.length = function () {
                    return this._buffer.length
                }, e.prototype.drain = function (e) {
                    var t = this;
                    return new W((function (n) {
                        var r = setTimeout((function () {
                            e && e > 0 && n(!1)
                        }), e);
                        W.all(t._buffer).then((function () {
                            clearTimeout(r), n(!0)
                        })).then(null, (function () {
                            n(!0)
                        }))
                    }))
                }, e
            }(),
            Kt = function () {
                function e(e) {
                    this.options = e, this._buffer = new Yt(30), this._rateLimits = {}, this._api = new It(this.options.dsn), this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
                }
                return e.prototype.sendEvent = function (e) {
                    throw new _t("Transport Class has to implement `sendEvent` method")
                }, e.prototype.close = function (e) {
                    return this._buffer.drain(e)
                }, e.prototype._handleResponse = function (e) {
                    var t = e.requestType,
                        n = e.response,
                        r = e.headers,
                        i = e.resolve,
                        o = e.reject,
                        s = Ht.fromHttpCode(n.status);
                    this._handleRateLimit(r) && ne.warn("Too many requests, backing off until: " + this._disabledUntil(t)), s !== Ht.Success ? o(n) : i({
                        status: s
                    })
                }, e.prototype._disabledUntil = function (e) {
                    return this._rateLimits[e] || this._rateLimits.all
                }, e.prototype._isRateLimited = function (e) {
                    return this._disabledUntil(e) > new Date(Date.now())
                }, e.prototype._handleRateLimit = function (e) {
                    var t, n, r, i, o = Date.now(),
                        s = e["x-sentry-rate-limits"],
                        a = e["retry-after"];
                    if (s) {
                        try {
                            for (var c = O(s.trim().split(",")), l = c.next(); !l.done; l = c.next()) {
                                var u = l.value.split(":", 2),
                                    d = parseInt(u[0], 10),
                                    h = 1e3 * (isNaN(d) ? 60 : d);
                                try {
                                    for (var p = (r = void 0, O(u[1].split(";"))), f = p.next(); !f.done; f = p.next()) {
                                        var g = f.value;
                                        this._rateLimits[g || "all"] = new Date(o + h)
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        f && !f.done && (i = p.return) && i.call(p)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (n = c.return) && n.call(c)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return !0
                    }
                    return !!a && (this._rateLimits.all = new Date(o + (0, z.JY)(o, a)), !0)
                }, e
            }(),
            Wt = (0, z.Rf)(),
            zt = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return I(t, e), t.prototype.sendEvent = function (e) {
                    return this._sendRequest(qt(e, this._api), e)
                }, t.prototype.sendSession = function (e) {
                    return this._sendRequest(Bt(e, this._api), e)
                }, t.prototype._sendRequest = function (e, t) {
                    var n = this;
                    if (this._isRateLimited(e.type)) return Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    });
                    var r = {
                        body: e.body,
                        method: "POST",
                        referrerPolicy: Ue() ? "origin" : ""
                    };
                    return void 0 !== this.options.fetchParameters && Object.assign(r, this.options.fetchParameters), void 0 !== this.options.headers && (r.headers = this.options.headers), this._buffer.add(new W((function (t, i) {
                        Wt.fetch(e.url, r).then((function (r) {
                            var o = {
                                "x-sentry-rate-limits": r.headers.get("X-Sentry-Rate-Limits"),
                                "retry-after": r.headers.get("Retry-After")
                            };
                            n._handleResponse({
                                requestType: e.type,
                                response: r,
                                headers: o,
                                resolve: t,
                                reject: i
                            })
                        })).catch(i)
                    })))
                }, t
            }(Kt),
            Zt = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return I(t, e), t.prototype.sendEvent = function (e) {
                    return this._sendRequest(qt(e, this._api), e)
                }, t.prototype.sendSession = function (e) {
                    return this._sendRequest(Bt(e, this._api), e)
                }, t.prototype._sendRequest = function (e, t) {
                    var n = this;
                    return this._isRateLimited(e.type) ? Promise.reject({
                        event: t,
                        type: e.type,
                        reason: "Transport locked till " + this._disabledUntil(e.type) + " due to too many requests.",
                        status: 429
                    }) : this._buffer.add(new W((function (t, r) {
                        var i = new XMLHttpRequest;
                        for (var o in i.onreadystatechange = function () {
                                if (4 === i.readyState) {
                                    var o = {
                                        "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                                        "retry-after": i.getResponseHeader("Retry-After")
                                    };
                                    n._handleResponse({
                                        requestType: e.type,
                                        response: i,
                                        headers: o,
                                        resolve: t,
                                        reject: r
                                    })
                                }
                            }, i.open("POST", e.url), n.options.headers) n.options.headers.hasOwnProperty(o) && i.setRequestHeader(o, n.options.headers[o]);
                        i.send(e.body)
                    })))
                }, t
            }(Kt),
            Qt = function (e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return I(t, e), t.prototype.eventFromException = function (e, t) {
                    return function (e, t, n) {
                        var r = dt(t, n && n.syntheticException || void 0, {
                            attachStacktrace: e.attachStacktrace
                        });
                        return (0, z.EG)(r, {
                            handled: !0,
                            type: "generic"
                        }), r.level = Le.Error, n && n.event_id && (r.event_id = n.event_id), W.resolve(r)
                    }(this._options, e, t)
                }, t.prototype.eventFromMessage = function (e, t, n) {
                    return void 0 === t && (t = Le.Info),
                        function (e, t, n, r) {
                            void 0 === n && (n = Le.Info);
                            var i = ht(t, r && r.syntheticException || void 0, {
                                attachStacktrace: e.attachStacktrace
                            });
                            return i.level = n, r && r.event_id && (i.event_id = r.event_id), W.resolve(i)
                        }(this._options, e, t, n)
                }, t.prototype._setupTransport = function () {
                    if (!this._options.dsn) return e.prototype._setupTransport.call(this);
                    var t = S(S({}, this._options.transportOptions), {
                        dsn: this._options.dsn
                    });
                    return this._options.transport ? new this._options.transport(t) : xe() ? new zt(t) : new Zt(t)
                }, t
            }(Vt),
            Jt = "5.30.0",
            Xt = function (e) {
                function t(t) {
                    return void 0 === t && (t = {}), e.call(this, Qt, t) || this
                }
                return I(t, e), t.prototype.showReportDialog = function (e) {
                    void 0 === e && (e = {}), (0, z.Rf)().document && (this._isEnabled() ? function (e) {
                        if (void 0 === e && (e = {}), e.eventId)
                            if (e.dsn) {
                                var t = document.createElement("script");
                                t.async = !0, t.src = new It(e.dsn).getReportDialogEndpoint(e), e.onLoad && (t.onload = e.onLoad), (document.head || document.body).appendChild(t)
                            } else ne.error("Missing dsn option in showReportDialog call");
                        else ne.error("Missing eventId option in showReportDialog call")
                    }(S(S({}, e), {
                        dsn: e.dsn || this.getDsn()
                    })) : ne.error("Trying to call showReportDialog with Sentry Client disabled"))
                }, t.prototype._prepareEvent = function (t, n, r) {
                    return t.platform = t.platform || "javascript", t.sdk = S(S({}, t.sdk), {
                        name: "sentry.javascript.browser",
                        packages: P(t.sdk && t.sdk.packages || [], [{
                            name: "npm:@sentry/browser",
                            version: Jt
                        }]),
                        version: Jt
                    }), e.prototype._prepareEvent.call(this, t, n, r)
                }, t.prototype._sendEvent = function (t) {
                    var n = this.getIntegration(Nt);
                    n && n.addSentryBreadcrumb(t), e.prototype._sendEvent.call(this, t)
                }, t
            }(Ft);
        ! function (e) {
            e.API_ERROR = "API_ERROR", e.AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR", e.INVALID_REQUEST_ERROR = "INVALID_REQUEST_ERROR", e.RATE_LIMIT_ERROR = "RATE_LIMIT_ERROR", e.PAYMENT_METHOD_ERROR = "PAYMENT_METHOD_ERROR", e.REFUND_ERROR = "REFUND_ERROR"
        }(jt || (jt = {}));
        class $t extends Error {
            constructor() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Unknown Error",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = e;
                t.length > 0 && (n = function (e, t) {
                    return "".concat(e, "\n  ").concat(t.map((e => {
                        switch (!0) {
                            case "message" in e:
                                return e.message;
                            case "detail" in e:
                                return e.detail;
                            default:
                                return "[Unspecified Error]"
                        }
                    })).join("\n  "))
                }(e, t)), super(n), this.errors = t, this.name = "SqError", Object.setPrototypeOf(this, $t.prototype)
            }
            fromSerializedError(e) {
                this.name = e.name, this.message = e.message, e.errors && (this.errors = e.errors)
            }
        }
        var en = y.SENTRY_DSN;
        class tn {
            constructor(e) {
                var t, n = {
                    beforeSend: (t, n) => {
                        if (!e.enableErrorLogging) return console.error(t.exception), null;
                        if (!n) return t;
                        var r = n.originalException;
                        return r instanceof $t ? Object.assign(Object.assign({}, t), {
                            fingerprint: [r.name]
                        }) : t
                    },
                    dsn: en,
                    environment: e.environment,
                    release: "web-payments-sdk@".concat(y.VERSION),
                    transport: e.transport
                };
                t = e.useGlobalHandlers ? new Ut.GlobalHandlers : new Ut.GlobalHandlers({
                    onerror: !1,
                    onunhandledrejection: !1
                });
                var r = [new De, new R, new Ut.TryCatch, new Ut.Breadcrumbs, t, new Ut.LinkedErrors, new Ut.UserAgent];
                n.integrations = r;
                var i = new Xt(n);
                this.hub = new Se(i), this.hub.configureScope((t => {
                    t.setTag("applicationId", e.applicationId), t.setTag("applicationUrl", e.applicationUrl), t.setTag("source", e.sourceName), t.setTag("version", e.version), e.sessionId && t.setTag("sessionId", e.sessionId)
                })), e.useGlobalHandlers && Te(this.hub)
            }
            setAvt(e) {
                this.hub.setUser({
                    id: e
                }), this.hub.configureScope((t => {
                    t.setTag("avt", e)
                }))
            }
            setSessionId(e) {
                this.hub.configureScope((t => {
                    t.setTag("sessionId", e)
                }))
            }
            setInstanceId(e) {
                this.hub.configureScope((t => {
                    t.setTag("instanceId", e)
                }))
            }
            captureException(e, t, n, r) {
                this.hub.withScope((i => {
                    n && i.setTag("sessionId", n), t && i.setTag("instanceId", t), r && Object.entries(r).forEach((e => {
                        var [t, n] = e;
                        i.setTag(t, n)
                    })), this.hub.captureException(e)
                }))
            }
            wrap(e) {
                if (Object.prototype.hasOwnProperty.call(e, "__inner__")) return e;
                var t = this.captureException.bind(this);

                function n(n) {
                    try {
                        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                        return e.apply(n, i)
                    } catch (e) {
                        throw t(e), e
                    }
                }
                return n.__inner__ = e, n
            }
        }
        class nn extends $t {
            constructor() {
                super("Web Payments SDK is not enabled for this application"), this.name = "WebSdkDisabledError", Object.setPrototypeOf(this, nn.prototype)
            }
        }
        class rn extends $t {
            constructor() {
                super("The Payment 'applicationId' option is not in the correct format."), this.name = "InvalidApplicationIdError", Object.setPrototypeOf(this, rn.prototype)
            }
        }
        class on extends $t {
            constructor(e, t) {
                super("Web Payments SDK was initialized with an application ID created in ".concat(e, " however you are currently using ").concat(t, ".")), this.name = "ApplicationIdEnvironmentMismatchError ", Object.setPrototypeOf(this, on.prototype)
            }
        }

        function sn(e) {
            return e.hostname.endsWith("localhost") || "https:" === e.protocol
        }
        var an = new RegExp(/^[\w.-]+$/i),
            cn = new RegExp(/sq0at/i);

        function ln(e) {
            return y.env === e
        }

        function un(e) {
            if (! function (e) {
                    return !(e.length < 22 || e.length > 37) && an.test(e) && !cn.test(e)
                }(e)) throw new rn;
            var t = e.match(/^[\w-]{22}$/),
                n = e.startsWith("sq0idp-"),
                r = e.startsWith("sandbox-sq0idb"),
                i = e.startsWith("sq0ids-");
            if (!(t || n || r || i)) throw new rn;
            if (n && !ln(f.production)) throw new on(f.production, y.env);
            if (r && !ln(f.sandbox)) throw new on(f.sandbox, y.env)
        }
        var dn = pn(60),
            hn = fn(60);

        function pn(e) {
            return 1e3 * e
        }

        function fn(e) {
            return e * dn
        }
        var gn, mn, vn = {
                hoursToMs: function (e) {
                    return e * hn
                },
                minutesToMs: fn,
                msToSeconds: function (e) {
                    return e / 1e3
                },
                secondsToMs: pn
            },
            En = /^_/g,
            _n = /(?!^)([A-Z])/g,
            yn = /[\s_]+(?=[A-Za-z])/g,
            Cn = function (e) {
                return e.replace(En, "-").replace(_n, " $1").replace(yn, "-").toLowerCase()
            },
            In = function (e, t) {
                return "".concat(e, ": ").concat(t, ";")
            },
            An = function (e) {
                return e.reduce(((e, t) => {
                    var [n, r] = t;
                    return Object.assign({}, e, {
                        [n]: r
                    })
                }), {})
            },
            Sn = function (e, t) {
                return t.some((function (t) {
                    return e instanceof t
                }))
            },
            On = function (e) {
                try {
                    return new URL(e), !0
                } catch (e) {
                    return !1
                }
            };
        ! function (e) {
            e.INVALID_APPLICATION_ID = "INVALID_APPLICATION_ID", e.INVALID_CARD_NUMBER = "INVALID_CARD_NUMBER", e.INVALID_CVV = "INVALID_CVV", e.INVALID_EXPIRATION_DATE = "INVALID_EXPIRATION_DATE", e.INVALID_POSTAL_CODE = "INVALID_POSTAL_CODE", e.INVALID_SANDBOX_CARD_NUMBER = "INVALID_SANDBOX_CARD_NUMBER", e.INVALID_STAGING_CARD_NUMBER = "INVALID_STAGING_CARD_NUMBER", e.MISSING_APPLICATION_ID = "MISSING_APPLICATION_ID", e.MISSING_CARD_DATA = "MISSING_CARD_DATA", e.UNKNOWN = "UNKNOWN", e.UNSUPPORTED_CARD_BRAND = "UNSUPPORTED_CARD_BRAND"
        }(gn || (gn = {})),
        function (e) {
            e.EXPIRED_PLAID_SESSION = "EXPIRED_PLAID_SESSION", e.INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID = "INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID", e.UNKNOWN = "UNKNOWN"
        }(mn || (mn = {}));
        var Tn, Pn, Rn, wn, Nn, Ln, bn, Dn, xn, Mn, Un, kn, Hn, Fn, Gn, Vn = {
                EXPIRED_PLAID_SESSION: {
                    message: "The plaid session was expired. Please try again.",
                    type: "EXPIRED_PLAID_SESSION"
                },
                INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID: {
                    message: "Invalid plaid bank account id selected",
                    type: "INVALID_SELECTED_PLAID_BANK_ACCOUNT_ID"
                },
                UNKNOWN: {
                    message: "An unknown error has occurred",
                    type: "UNKNOWN"
                }
            },
            Bn = {
                INVALID_APPLICATION_ID: {
                    message: "Invalid applicationId",
                    type: "INVALID_APPLICATION_ID"
                },
                INVALID_CARD_NUMBER: {
                    field: "cardNumber",
                    message: "Credit card number is not valid",
                    type: "VALIDATION_ERROR"
                },
                INVALID_CVV: {
                    field: "cvv",
                    message: "CVV is not valid",
                    type: "VALIDATION_ERROR"
                },
                INVALID_EXPIRATION_DATE: {
                    field: "expirationDate",
                    message: "Expiration date is not valid",
                    type: "VALIDATION_ERROR"
                },
                INVALID_POSTAL_CODE: {
                    field: "postalCode",
                    message: "Postal code is not valid",
                    type: "VALIDATION_ERROR"
                },
                INVALID_SANDBOX_CARD_NUMBER: {
                    field: "cardNumber",
                    message: "Credit card number is not valid for sandbox use. Please use one of the test numbers documented at https://developer.squareup.com/docs/testing/test-values.",
                    type: "VALIDATION_ERROR"
                },
                INVALID_STAGING_CARD_NUMBER: {
                    field: "cardNumber",
                    message: "Card number is not allowed in Staging. See: https://go/panfake-ui",
                    type: "VALIDATION_ERROR"
                },
                MISSING_APPLICATION_ID: {
                    message: "Missing applicationId",
                    type: "MISSING_APPLICATION_ID"
                },
                MISSING_CARD_DATA: {
                    message: "Missing card data",
                    type: "MISSING_CARD_DATA"
                },
                UNKNOWN: {
                    message: "An unknown error has occurred",
                    type: "UNKNOWN"
                },
                UNSUPPORTED_CARD_BRAND: {
                    field: "cardNumber",
                    message: "Card not supported",
                    type: "UNSUPPORTED_CARD_BRAND"
                }
            };
        ! function (e) {
            e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_LOCATION_ID_OR_NAME = "MISSING_LOCATION_ID_OR_NAME", e.NOT_FOUND = "NOT_FOUND", e.UNKNOWN = "UNKNOWN"
        }(Tn || (Tn = {}));
        class qn extends $t {
            constructor(e) {
                var t = e instanceof HTMLElement ? e.nodeName : e;
                super("The element ".concat(t, " was not found")), this.name = "ElementNotFoundError", Object.setPrototypeOf(this, qn.prototype)
            }
        }
        class jn extends $t {
            constructor() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
                    var [t, n] = e;
                    return 'expected property: "'.concat(t, '" of type "').concat(n, '"')
                })).join("\n");
                super("\n".concat(e)), this.name = "InvalidPaymentRequestError", Object.setPrototypeOf(this, jn.prototype)
            }
        }
        class Yn extends $t {
            constructor() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).map((e => {
                    var [t, n] = e;
                    return 'expected property: "'.concat(t, '" of type "').concat(n, '"')
                })).join("\n");
                super("\n".concat(e)), this.name = "InvalidPaymentRequestUpdateError", Object.setPrototypeOf(this, Yn.prototype)
            }
        }
        class Kn extends $t {
            constructor(e, t) {
                super("The callback provided to the event listener ".concat(e, " threw an error with message: ").concat(t)), this.name = "InvalidEventListenerCallbackError", Object.setPrototypeOf(this, Kn.prototype)
            }
        }
        class Wn extends $t {
            constructor(e) {
                super("option: '".concat(e, "'")), this.name = "InvalidOptionError", Object.setPrototypeOf(this, Wn.prototype)
            }
        }
        class zn extends $t {
            constructor() {
                super("Tokenization has failed. `accountHolderName` is a required option when calling ach.tokenize()"), this.name = "PlaidMissingNameError", Object.setPrototypeOf(this, zn.prototype)
            }
        }
        class Zn extends $t {
            constructor() {
                super("Something went wrong and Plaid was not properly initialized"), this.name = "PlaidUninitializedError", Object.setPrototypeOf(this, Zn.prototype)
            }
        }
        class Qn extends $t {
            constructor(e) {
                super("An issue occurred while verifying the buyer", [e]), this.name = "VerifyBuyerError", Object.setPrototypeOf(this, Qn.prototype)
            }
        }(Fn = Pn || (Pn = {})).FOCUS_CLASS_ADDED = "focusClassAdded", Fn.FOCUS_CLASS_REMOVED = "focusClassRemoved", Fn.ERROR_CLASS_ADDED = "errorClassAdded", Fn.ERROR_CLASS_REMOVED = "errorClassRemoved", Fn.CARD_BRAND_CHANGED = "cardBrandChanged", Fn.POSTAL_CODE_CHANGED = "postalCodeChanged", Fn.ESCAPE = "escape", Fn.SUBMIT = "submit", (Hn = Rn || (Rn = {})).CARD_NUMBER = "cardNumber", Hn.CVV = "cvv", Hn.EXPIRATION_DATE = "expirationDate", Hn.POSTAL_CODE = "postalCode", (kn = wn || (wn = {})).CARD_INPUT = "input", kn.CARD_INPUT_FOCUS = "input.is-focus", kn.CARD_INPUT_PLACEHOLDER = "input::placeholder", kn.CARD_INPUT_FOCUS_PLACEHOLDER = "input.is-focus::placeholder", kn.CARD_INPUT_ERROR = "input.is-error", kn.CARD_INPUT_ERROR_PLACEHOLDER = "input.is-error::placeholder", kn.CARD_COMPONENT = ".input-container", kn.CARD_COMPONENT_FOCUS = ".input-container.is-focus", kn.CARD_COMPONENT_ERROR = ".input-container.is-error", kn.CARD_INPUT_HELPER_TEXT = ".message-text", kn.CARD_INPUT_HELPER_ICON = ".message-icon", kn.CARD_INPUT_ERROR_TEXT = ".message-text.is-error", kn.CARD_INPUT_ERROR_ICON = ".message-icon.is-error", (Nn || (Nn = {})).GIFT_CARD_NUMBER = "giftCardNumber",
            function (e) {
                e.UNKNOWN = "Unknown"
            }(Ln || (Ln = {})),
            function (e) {
                e.GIFT = "Gift"
            }(bn || (bn = {}));
        class Jn extends $t {
            constructor(e) {
                super("".concat(e, " is not a valid field name. Valid field names are ").concat([...Object.values(Rn), ...Object.values(Nn)].join(", "))), this.name = "InvalidFieldNameError", Object.setPrototypeOf(this, Jn.prototype)
            }
        }
        class Xn extends $t {
            constructor(e) {
                super("Configuration property '".concat(e, "' does not exist")), this.name = "InvalidConfigurationPropertyError", Object.setPrototypeOf(this, Xn.prototype)
            }
        }
        class $n extends $t {
            constructor(e, t) {
                super("Configuration property '".concat(e, "' has an invalid value '").concat(t, "'")), this.name = "InvalidConfigurationValueError", Object.setPrototypeOf(this, $n.prototype)
            }
        }
        class er extends $t {
            constructor() {
                super("Web Payments SDK does not support this browser"), this.name = "BrowserNotSupportedError", Object.setPrototypeOf(this, er.prototype)
            }
        }
        class tr extends $t {
            constructor() {
                super("Web Payments SDK can only be embedded on sites that use HTTPS"), this.name = "WebSdkEmbedError", Object.setPrototypeOf(this, tr.prototype)
            }
        }
        class nr extends $t {
            constructor(e) {
                super("This instance of ".concat(e, " has already been attached to the page.")), this.name = "PaymentMethodAlreadyAttachedError", Object.setPrototypeOf(this, nr.prototype)
            }
        }
        class rr extends $t {
            constructor(e) {
                super("".concat(e, " has not been attached to the page. It must be attached before a payment method can be tokenized")), this.name = "PaymentMethodNotAttachedError", Object.setPrototypeOf(this, rr.prototype)
            }
        }
        class ir extends $t {
            constructor(e) {
                super("This instance of ".concat(e, " has already been destroyed.")), this.name = "PaymentMethodAlreadyDestroyedError", Object.setPrototypeOf(this, ir.prototype)
            }
        }
        class or extends $t {
            constructor(e, t) {
                var n = e instanceof HTMLElement ? e.nodeName : e;
                super("The value ".concat(n, " is not a valid element type or selector. Only valid elements or selectors referring to ").concat([...t].join(", "), " elements are allowed.")), this.name = "InvalidElementTypeError", Object.setPrototypeOf(this, or.prototype)
            }
        }
        class sr extends $t {
            constructor(e, t) {
                super("An element with one of the following conflicting IDs was found on the page: ".concat(t, ". You must change those elements' ID before you can use ").concat(e)), this.name = "InvalidElementPresentError", Object.setPrototypeOf(this, sr.prototype)
            }
        }
        class ar extends $t {
            constructor(e, t) {
                var n = t || (null == e ? void 0 : e.field);
                super("Method unsupported: ".concat(null == e ? void 0 : e.message).concat(n ? " (field=".concat(n, ")") : "")), this.name = "PaymentMethodUnsupportedError", Object.setPrototypeOf(this, ar.prototype)
            }
        }
        class cr extends $t {
            constructor(e, t) {
                super("".concat(e, " is undefined after loading script ").concat(t, ")")), this.name = "ScriptLoaderError", Object.setPrototypeOf(this, cr.prototype)
            }
        }
        class lr extends $t {
            constructor(e) {
                super("Invalid style property '".concat(e, "'.")), this.name = "InvalidInputStylePropertyError", Object.setPrototypeOf(this, lr.prototype)
            }
        }
        class ur extends $t {
            constructor(e, t) {
                super("Invalid style value '".concat(t, "' for property '").concat(e, "'.")), this.name = "InvalidInputStyleValueError", Object.setPrototypeOf(this, ur.prototype)
            }
        }
        class dr extends $t {
            constructor(e) {
                super("Invalid style selector '".concat(e, "'.")), this.name = "InvalidInputStyleSelectorError", Object.setPrototypeOf(this, dr.prototype)
            }
        }
        class hr extends $t {
            constructor(e) {
                super("One or more style selectors and/or CSS properties are invalid", e), this.errors = e, this.name = "InvalidStylesError", Object.setPrototypeOf(this, hr.prototype)
            }
        }
        class pr extends $t {
            constructor() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                super("Tokenization has failed", e), this.errors = e, this.name = "TokenizationError", Object.setPrototypeOf(this, pr.prototype)
            }
        }
        class fr extends $t {
            constructor(e) {
                var t = "An unexpected error occurred";
                e && (t += " while ".concat(e)), super("".concat(t, ".")), this.name = "UnexpectedError", Object.setPrototypeOf(this, fr.prototype)
            }
        }(Gn = Dn || (Dn = {})).APPLE_PAY = "Apple Pay", Gn.CARD = "Card", Gn.CASH_APP = "Cash App", Gn.GOOGLE_PAY = "Google Pay", Gn.GIFT_CARD = "Gift Card", Gn.ACH = "ACH",
            function (e) {
                e.SHIPPING_CONTACT_CHANGED = "shippingcontactchanged", e.SHIPPING_OPTION_CHANGED = "shippingoptionchanged"
            }(xn || (xn = {}));
        class gr {
            constructor(e, t) {
                this.type = e, this.detail = t, this.type = e, this.detail = t
            }
        }! function (e) {
            e.UNKNOWN = "Unknown", e.OK = "OK", e.ERROR = "Error", e.INVALID = "Invalid", e.ABORT = "Abort", e.CANCEL = "Cancel"
        }(Mn || (Mn = {})),
        function (e) {
            e.CLOSE_OAUTH = "CLOSE_OAUTH", e.ERROR = "ERROR", e.EXIT = "EXIT", e.FAIL_OAUTH = "FAIL_OAUTH", e.HANDOFF = "HANDOFF", e.MATCHED_SELECT_INSTITUTION = "MATCHED_SELECT_INSTITUTION", e.MATCHED_SELECT_VERIFY_METHOD = "MATCHED_SELECT_VERIFY_METHOD", e.OPEN = "OPEN", e.OPEN_MY_PLAID = "OPEN_MY_PLAID", e.OPEN_OAUTH = "OPEN_OAUTH", e.SEARCH_INSTITUTION = "SEARCH_INSTITUTION", e.SELECT_BRAND = "SELECT_BRAND", e.SELECT_INSTITUTION = "SELECT_INSTITUTION", e.SUBMIT_CREDENTIALS = "SUBMIT_CREDENTIALS", e.SUBMIT_MFA = "SUBMIT_MFA", e.TRANSITION_VIEW = "TRANSITION_VIEW"
        }(Un || (Un = {}));
        var mr, vr, Er, _r, yr, Cr, Ir, Ar, Sr, Or = ["borderColor", "borderRadius", "borderWidth"],
            Tr = ["borderColor", "borderWidth"],
            Pr = ["color"],
            Rr = ["color"];
        ! function (e) {
            e.UNKNOWN = "Unknown", e.AMERICAN_EXPRESS = "American Express", e.DINERS_CLUB = "Diners Club", e.DISCOVER = "Discover", e.JCB = "JCB", e.MASTERCARD = "Mastercard", e.UNION_PAY = "UnionPay", e.VISA = "Visa"
        }(mr || (mr = {})),
        function (e) {
            e.UNKNOWN_CARD_TYPE = "UNKNOWN_CARD_TYPE", e.CREDIT = "CREDIT", e.DEBIT = "DEBIT"
        }(vr || (vr = {})),
        function (e) {
            e.UNKNOWN_PAYMENT_TYPE = "UNKNOWN_PREPAID_TYPE", e.NOT_PREPAID = "NOT_PREPAID", e.PREPAID = "PREPAID"
        }(Er || (Er = {})),
        function (e) {
            e.DEFAULT = "default", e.BLACK = "black", e.WHITE = "white"
        }(_r || (_r = {})),
        function (e) {
            e.STATIC = "static", e.FILL = "fill"
        }(yr || (yr = {})),
        function (e) {
            e.LONG = "long", e.SHORT = "short"
        }(Cr || (Cr = {})),
        function (e) {
            e.PAYMENT_METHOD_DESTROYED = "PAYMENT_METHOD_DESTROYED", e.SHIPPING_ADDRESS_UNSERVICEABLE = "SHIPPING_ADDRESS_UNSERVICEABLE", e.SHIPPING_ADDRESS_INVALID = "SHIPPING_ADDRESS_INVALID"
        }(Ir || (Ir = {})),
        function (e) {
            e.GBP = "GBP", e.USD = "USD"
        }(Ar || (Ar = {}));
        class wr extends $t {
            constructor() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                super("Internal Validation Error", e), this.errors = e, this.name = "InternalValidationError", Object.setPrototypeOf(this, wr.prototype)
            }
        }

        function Nr() {
            return new pr([Bn.UNKNOWN])
        }! function (e) {
            e[e.BAD_REQUEST = 400] = "BAD_REQUEST", e[e.OK = 200] = "OK", e[e.NO_CONTENT = 204] = "NO_CONTENT", e[e.NOT_FOUND = 404] = "NOT_FOUND", e[e.INTERNAL_SERVER_ERROR = 500] = "INTERNAL_SERVER_ERROR", e[e.SERVICE_UNAVAILABLE = 503] = "SERVICE_UNAVAILABLE", e[e.TOO_MANY_REQUESTS = 429] = "TOO_MANY_REQUESTS", e[e.UNAUTHORIZED = 401] = "UNAUTHORIZED"
        }(Sr || (Sr = {}));
        var Lr, br = {
            get BACKOFF_FACTOR() {
                return 1.66
            },
            get REQUEST_DURATION_MAX_MS() {
                return 6e4
            },
            get REQUEST_TIMEOUT_MS() {
                return [1e4, 2e4, 3e4]
            },
            get RETRY_DELAY_MS() {
                return 200
            },
            STATUS_CODE: Sr
        };
        ! function (e) {
            e.INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR", e.NOT_FOUND = "NOT_FOUND", e.SERVICE_UNAVAILABLE = "SERVICE_UNAVAILABLE", e.TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS", e.UNAUTHORIZED = "UNAUTHORIZED", e.UNKNOWN = "UNKNOWN"
        }(Lr || (Lr = {}));
        var Dr = {
                message: "An internal error has occurred. Unable to complete the request.",
                type: "INTERNAL_SERVER_ERROR"
            },
            xr = {
                message: "The requested resource was not found.",
                type: "NOT_FOUND"
            },
            Mr = {
                message: "The endpoint is currently unavailable.",
                type: "SERVICE_UNAVAILABLE"
            },
            Ur = {
                message: "Too many requests in progress.",
                type: "TOO_MANY_REQUESTS"
            },
            kr = {
                message: "Request not authorized.",
                type: "UNAUTHORIZED"
            },
            Hr = {
                message: "An unknown error has occurred",
                type: "UNKNOWN"
            };
        class Fr extends $t {
            constructor(e, t) {
                var n = e;
                void 0 !== t && (n += " (payment_method=".concat(t, ")")), super(n), this.name = "InternalError", Object.setPrototypeOf(this, Fr.prototype)
            }
        }
        class Gr extends $t {
            constructor(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    i = function (e) {
                        var {
                            STATUS_CODE: t
                        } = br;
                        switch (e) {
                            case t.UNAUTHORIZED:
                                return kr;
                            case t.NOT_FOUND:
                                return xr;
                            case t.TOO_MANY_REQUESTS:
                                return Ur;
                            case t.INTERNAL_SERVER_ERROR:
                                return Dr;
                            case t.SERVICE_UNAVAILABLE:
                                return Mr;
                            default:
                                return Hr
                        }
                    }(t);
                super("".concat(i.message, " (message=").concat(n, "; url=").concat(e, ")"), r), this.name = "InternalHttpError", Object.setPrototypeOf(this, Gr.prototype)
            }
        }
        class Vr extends $t {
            constructor(e, t, n) {
                if (n) {
                    var r = document.getElementById(n);
                    super("Messenger has not received an acknowledgement of message ".concat(e, " with id ").concat(t, " from iframe id=").concat(n, " which ").concat(void 0 !== (null == r ? void 0 : r.src) ? "exists" : "does not exist"))
                } else super("Messenger has not received an acknowledgement of message ".concat(e, " with id ").concat(t, ", no iframeID was set"));
                this.name = "InternalMessengerTimeoutError", Object.setPrototypeOf(this, Vr.prototype)
            }
        }
        class Br extends $t {
            constructor(e, t, n) {
                super("Request timeout exceeded (attempts=".concat(e, "; duration=").concat(t, "ms; url=").concat(n, ")")), this.name = "InternalTimeoutError", Object.setPrototypeOf(this, Br.prototype)
            }
        }
        class qr extends $t {
            constructor(e, t) {
                super("Invalid JSON received (status=".concat(t, "; url=").concat(e, ")")), this.name = "InternalInvalidJsonError", Object.setPrototypeOf(this, qr.prototype)
            }
        }
        class jr extends $t {
            constructor(e, t, n) {
                super("Network error during request (attempts=".concat(e, "; duration=").concat(t, "ms; url=").concat(n, ")")), this.name = "InternalNetworkError", Object.setPrototypeOf(this, jr.prototype)
            }
        }
        var Yr, Kr, Wr, zr, Zr, Qr, Jr, Xr, $r, ei = {
                InternalError: Fr,
                InternalHttpError: Gr,
                InternalInvalidJsonError: qr,
                InternalMessengerTimeoutError: Vr,
                InternalNetworkError: jr,
                InternalTimeoutError: Br,
                InternalValidationError: wr
            },
            ti = Object.assign({
                BrowserNotSupportedError: er,
                ElementNotFoundError: qn,
                InvalidApplicationIdError: rn,
                InvalidEventListenerCallbackError: Kn,
                InvalidInputStylePropertyError: lr,
                InvalidInputStyleValueError: ur,
                InvalidOptionError: Wn,
                InvalidPaymentRequestError: jn,
                InvalidPaymentRequestUpdateError: Yn,
                InvalidStylesError: hr,
                PaymentMethodAlreadyAttachedError: nr,
                PaymentMethodAlreadyDestroyedError: ir,
                PaymentMethodNotAttachedError: rr,
                PaymentMethodUnsupportedError: ar,
                PlaidMissingNameError: zn,
                PlaidUninitializedError: Zn,
                ScriptLoaderError: cr,
                SqError: $t,
                TokenizationError: pr,
                UnexpectedError: fr,
                VerifyBuyerError: Qn,
                WebSdkDisabledError: nn,
                WebSdkEmbedError: tr
            }, ei),
            ni = {
                BrowserNotSupportedError: er,
                ElementNotFoundError: qn,
                InvalidElementTypeError: or,
                InvalidEventListenerCallbackError: Kn,
                InvalidOptionError: Wn,
                InvalidPaymentRequestError: jn,
                InvalidPaymentRequestUpdateError: Yn,
                PaymentMethodUnsupportedError: ar,
                PlaidMissingNameError: zn,
                PlaidUninitializedError: Zn,
                ScriptLoaderError: cr,
                TokenizationError: pr,
                UnexpectedError: fr,
                VerifyBuyerError: Qn,
                WebSdkEmbedError: tr
            };
        ($r = Yr || (Yr = {})).AlipayPayStart = "ALIPAY_PAY:START", $r.AlipayPayOK = "ALIPAY_PAY:OK", $r.AlipayPayError = "ALIPAY_PAY:ERROR", $r.AttachStart = "ATTACH:START", $r.AttachOK = "ATTACH:OK", $r.AttachError = "ATTACH:ERROR", $r.BuildStart = "BUILD:START", $r.BuildOK = "BUILD:OK", $r.BuildError = "BUILD:ERROR", $r.CashAppAPICustomerStart = "CASH_APP_API_CUSTOMER:START", $r.CashAppAPICustomerOK = "CASH_APP_API_CUSTOMER:OK", $r.CashAppAPICustomerError = "CASH_APP_API_CUSTOMER:ERROR", $r.CashAppAuthStart = "CASH_APP_AUTH:START", $r.CashAppAuthOK = "CASH_APP_AUTH:OK", $r.CashAppAuthError = "CASH_APP_AUTH:ERROR", $r.FirstInteraction = "FIRST_INTERACTION:OK", $r.GetProductInformationStart = "GET_PRODUCT_INFORMATION:START", $r.GetProductInformationOK = "GET_PRODUCT_INFORMATION:OK", $r.GetProductInformationError = "GET_PRODUCT_INFORMATION:ERROR", $r.InitializeStart = "INITIALIZATION:START", $r.InitializeOK = "INITIALIZATION:OK", $r.InitializeError = "INITIALIZATION:ERROR", $r.LoadOK = "LOAD:OK", $r.MainIframeOK = "MAIN_IFRAME:OK", $r.NonceStart = "NONCE:START", $r.NonceOK = "NONCE:OK", $r.NonceError = "NONCE:ERROR", $r.VerificationStart = "VERIFICATION:START", $r.VerificationOK = "VERIFICATION:OK", $r.VerificationError = "VERIFICATION:ERROR",
            function (e) {
                e.ExternalSessionStart = "EXTERNAL_SESSION:START", e.ExternalSessionOK = "EXTERNAL_SESSION:OK", e.ExternalSessionError = "EXTERNAL_SESSION:ERROR", e.ExternalSessionCancel = "EXTERNAL_SESSION:CANCEL", e.ShippingAddressChangeOK = "SHIPPING_ADDRESS_CHANGE:OK", e.ShippingOptionChangeOK = "SHIPPING_OPTION_CHANGE:OK"
            }(Kr || (Kr = {})),
            function (e) {
                e.Configured = "CONFIGURED", e.ConfigUpdated = "CONFIG_UPDATED", e.Destroyed = "DESTROYED", e.EventListenerAdded = "EVENT_LISTENER_ADDED", e.Focused = "FOCUSED", e.RecalculatedSize = "RECALCULATED_SIZE", e.SetLocale = "SET_LOCALE"
            }(Wr || (Wr = {})),
            function (e) {
                e.CASH_APP_API_CUSTOMER = "CASH_APP_API_CUSTOMER", e.CASH_APP_AUTH = "CASH_APP_AUTH", e.GET_PRODUCT_INFORMATION = "GET_PRODUCT_INFORMATION", e.LOAD = "LOAD", e.MAIN_IFRAME = "MAIN_IFRAME", e.NONCE = "NONCE"
            }(zr || (zr = {})),
            function (e) {
                e.ATTACH = "ATTACH", e.BUILD = "BUILD", e.INITIALIZATION = "INITIALIZATION"
            }(Zr || (Zr = {})),
            function (e) {
                e.START = "START", e.OK = "OK", e.ERROR = "ERROR"
            }(Qr || (Qr = {})), (Xr = Jr || (Jr = {})).Ach = "ACH", Xr.Alipay = "Alipay", Xr.App = "WebSDK", Xr.ApplePay = "Apple Pay", Xr.Card = "Card", Xr.CashApp = "Cash App", Xr.GooglePay = "Google Pay", Xr.Masterpass = "Masterpass", Xr.GiftCard = "Gift Card", Xr.Fields = "Fields", Xr.PaymentRequest = "Payment Request";
        var ri, ii = {
            CARD_NONCE_ENDPOINT: new RegExp(y.CARD_NONCE_ENDPOINT),
            CASH_APP_API_CUSTOMER: new RegExp(y.CASH_APP_API_CUSTOMER),
            CASH_APP_AUTH_ENDPOINT: new RegExp(y.CASH_APP_AUTH_ENDPOINT),
            GET_PRODUCT_INFORMATION_ENDPOINT: new RegExp(y.GET_PRODUCT_INFORMATION_ENDPOINT),
            LIBRARY_RESOURCE: new RegExp("".concat(y.ASSET_BASE_URL, "/([\\w\\d.-]*/)?square").concat(y.APPENDED_FILE_NAME, "\\.js")),
            MAIN_IFRAME_RESOURCE: new RegExp("".concat(y.ASSET_URL, "/main-iframe").concat(y.APPENDED_FILE_NAME))
        };
        ! function (e) {
            e.navigation = "navigation", e.fetch = "fetch", e.iframe = "iframe", e.script = "script"
        }(ri || (ri = {}));
        var oi, si = new Set(Object.values(Wr)),
            ai = new Set([Yr.InitializeOK]),
            ci = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            li = {
                timeout: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Fr("Promise timeout exceeded");
                    return ci(this, void 0, void 0, (function* () {
                        var r = -1,
                            i = new Promise(((e, i) => {
                                r = window.setTimeout((() => {
                                    i(n)
                                }), t)
                            })),
                            o = yield Promise.race([i, e()]);
                        return window.clearTimeout(r), o
                    }))
                }
            },
            ui = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            };
        ! function (e) {
            e.POST = "POST", e.GET = "GET"
        }(oi || (oi = {}));
        var di = "include",
            hi = "cors";

        function pi(e, t) {
            var n = function (e, t) {
                    return Math.floor(e * Math.pow(br.BACKOFF_FACTOR, t))
                }(br.RETRY_DELAY_MS, e - 1),
                r = Date.now() - t,
                i = br.REQUEST_DURATION_MAX_MS - r,
                o = br.REQUEST_TIMEOUT_MS[e - 1];
            return i <= n ? i - o : n
        }

        function fi(e, t) {
            return {
                body: e,
                status: t.status,
                statusText: t.statusText
            }
        }

        function gi(e) {
            var t = new Headers([
                ["Accept", "application/json"],
                ["Content-Type", "application/json; charset=utf-8"]
            ]);
            if (e)
                for (var n in e) e[n] && t.append(n, e[n]);
            return t
        }

        function mi(e, t, n, r) {
            return ui(this, void 0, void 0, (function* () {
                if (!(e.status < br.STATUS_CODE.INTERNAL_SERVER_ERROR)) return fi({}, e);
                try {
                    var t = {};
                    return e.status !== br.STATUS_CODE.NO_CONTENT && (t = yield e.json()), fi(t, e)
                } catch (t) {
                    throw new qr(r, e.status)
                }
            }))
        }

        function vi(e, t) {
            var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Date.now();
            return ui(this, void 0, void 0, (function* () {
                var o = Date.now() - i,
                    s = br.REQUEST_DURATION_MAX_MS - o,
                    a = Math.min(br.REQUEST_TIMEOUT_MS[r - 1], s),
                    c = null;
                void 0 !== window.AbortController && null !== window.AbortController && (c = new window.AbortController);
                var l = Object.assign(Object.assign({
                    credentials: di
                }, t), {
                    mode: hi,
                    signal: c ? c.signal : null
                });
                try {
                    var u = yield li.timeout(window.fetch.bind(null, e, l), a, new Br(r, o, e));
                    return yield mi(u, 0, 0, e)
                } catch (s) {
                    var d = 0;
                    if (s instanceof Br) c && c.abort();
                    else {
                        if (s instanceof qr) throw s;
                        if (d = pi(r, i), !n || d <= 0) throw new jr(r, o, e)
                    }
                    if (!n || r === br.REQUEST_TIMEOUT_MS.length) throw s;
                    return new Promise((o => {
                        setTimeout((() => {
                            o(vi(e, t, n, r + 1, i))
                        }), d)
                    }))
                }
            }))
        }
        var Ei, _i, yi, Ci, Ii, Ai = function (e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = t && t.headers,
                    i = gi(r);
                return vi(e, {
                    body: JSON.stringify(t.body),
                    headers: i,
                    method: oi.POST
                }, n)
            },
            Si = {
                hash: "",
                host: "",
                hostname: "",
                href: "",
                origin: "",
                pathname: "",
                port: "",
                protocol: "",
                search: "",
                toString: () => ""
            };

        function Oi() {
            if (m.windowLocation === m.windowParentLocation) return m.windowLocation;
            var e = m.documentReferrer;
            return e && 0 !== e.length ? (Ei || (Ei = document.createElement("a")), Ei.href = "".concat(e), {
                hash: Ei.hash,
                host: Ei.host,
                hostname: Ei.hostname,
                href: Ei.href,
                origin: Ei.origin,
                pathname: Ei.pathname,
                port: Ei.port,
                protocol: Ei.protocol,
                search: Ei.search,
                toString() {
                    return this.href
                }
            }) : Si
        }(Ii = _i || (_i = {})).CA = "CA", Ii.GB = "GB", Ii.US = "US",
            function (e) {
                e.en = "en", e.ja = "ja"
            }(yi || (yi = {})),
            function (e) {
                e.enUS = "en-US", e.jaJP = "ja-JP"
            }(Ci || (Ci = {}));
        var Ti = {
                [yi.en]: Ci.enUS,
                [yi.ja]: Ci.jaJP
            },
            Pi = {
                en: {
                    paymentMethods: {
                        cards: {
                            errors: {
                                cardNumberError: "Enter a valid card number.",
                                cvvError: "Enter a valid security code.",
                                expirationDateError: "Enter a valid expiration date.",
                                multipleErrors: "Fix the highlighted errors.",
                                postalCodeErrors: {
                                    CA: "Enter a valid postal code.",
                                    GB: "Enter a valid postcode.",
                                    US: "Enter a valid zip code."
                                }
                            },
                            helperText: {
                                cardNumber: "Enter your card number",
                                cvv: "Enter the security code",
                                expirationDate: "Enter the expiration date",
                                postalCodes: {
                                    CA: "Enter the postal code",
                                    GB: "Enter the postcode",
                                    US: "Enter the zip code"
                                }
                            },
                            placeholderText: {
                                cardNumber: "Card number",
                                cvv: "CVV",
                                expirationDate: "MM/YY",
                                postalCodes: {
                                    CA: "Postal Code",
                                    GB: "Postcode",
                                    US: "ZIP"
                                }
                            }
                        },
                        giftCards: {
                            errors: {
                                giftCardNumberError: "Enter a valid gift card number."
                            },
                            helperText: {
                                giftCardNumber: "Enter your gift card number"
                            },
                            placeholderText: {
                                giftCardNumber: "Gift card"
                            }
                        },
                        wallets: {
                            callbackErrors: {
                                contactError: "There was an error processing your selected shipping contact. Please try again.",
                                optionsError: "There was an error processing your selected shipping option. Please try again."
                            }
                        }
                    }
                },
                ja: {
                    paymentMethods: {
                        cards: {
                            errors: {
                                cardNumberError: "正しいカード番号を入力してください。",
                                cvvError: "有効なセキュリティコードを入力してください。",
                                expirationDateError: "正しい有効期限を入力してください。",
                                multipleErrors: "強調表示されたエラーを修正してください。",
                                postalCodeErrors: {
                                    CA: "正しい郵便番号を入力してください。",
                                    GB: "有効な郵便番号を入力してください。",
                                    US: "正しいZIPコードを入力してください。"
                                }
                            },
                            helperText: {
                                cardNumber: "カード番号を入力してください",
                                cvv: "セキュリティコードを入力してください",
                                expirationDate: "有効期限を入力してください",
                                postalCodes: {
                                    CA: "郵便番号を入力してください",
                                    GB: "郵便番号を入力してください",
                                    US: "ZIPコードを入力してください"
                                }
                            },
                            placeholderText: {
                                cardNumber: "カード番号",
                                cvv: "CVV",
                                expirationDate: "MM/YY",
                                postalCodes: {
                                    CA: "郵便番号",
                                    GB: "郵便番号",
                                    US: "ZIP"
                                }
                            }
                        },
                        giftCards: {
                            errors: {
                                giftCardNumberError: "有効なギフトカード番号を入力してください。"
                            },
                            helperText: {
                                giftCardNumber: "ギフトカード番号を入力してください"
                            },
                            placeholderText: {
                                giftCardNumber: "ギフトカード"
                            }
                        },
                        wallets: {
                            callbackErrors: {
                                contactError: "選択された配送住所を処理する際にエラーが発生しました。もう一度やり直してください。",
                                optionsError: "選択された配送方法を処理する際にエラーが発生しました。もう一度やり直してください。"
                            }
                        }
                    }
                }
            },
            Ri = "en-US";
        class wi {
            constructor(e) {
                this.currentLocale = Ri;
                var t = this.getLanguageFromLocale(Ri);
                this.currentTranslations = Pi[t], this.setLocale(e)
            }
            setLocale(e) {
                var t = this.getLanguageFromLocale(e),
                    n = this.getRegionFromLocale(e),
                    r = this.currentLocale;
                if (!yi[t]) return {
                    message: "Locale ".concat(e, " is not supported. Language ").concat(t, " and region ").concat(n, " are both unsupported."),
                    newLocale: this.currentLocale,
                    previousLocale: r
                };
                var i = Ti[t];
                this.currentLocale = i, this.currentTranslations = Pi[t];
                var o = this.getRegionFromLocale(this.currentLocale);
                return o && n && o.toLowerCase() !== n.toLowerCase() ? {
                    message: "Locale ".concat(e, " is not supported. Language ").concat(t, " is supported, but region ").concat(n, " is not. Falling back to ").concat(this.currentLocale, "."),
                    newLocale: this.currentLocale,
                    previousLocale: r
                } : {
                    newLocale: this.currentLocale,
                    previousLocale: r
                }
            }
            getCurrentLocale() {
                return this.currentLocale
            }
            getLocaleString() {
                return this.currentTranslations
            }
            getLanguageFromLocale(e) {
                return e.split("-")[0]
            }
            getRegionFromLocale(e) {
                return e.split("-")[1]
            }
        }
        var Ni = "INVALID_VALUE",
            Li = "SANITIZED",
            bi = new Set(["countryCode", "currencyCode", "requestBillingContact", "requestShippingContact", "lineItems", "total", "shippingOptions", "shippingContact"]),
            Di = new Set(["includeInputLabels", "postalCode", "style"]),
            xi = new Set(["includeInputLabels", "style"]),
            Mi = new Set(["lineItems", "total", "shippingOptions", "shippingContact"]),
            Ui = new Set(["buttonColor", "buttonSizeMode", "buttonType"]),
            ki = Wi(Un),
            Hi = Wi(Pn),
            Fi = Wi(xn),
            Gi = Wi(Rn),
            Vi = Wi(Nn),
            Bi = Wi(Ci),
            qi = Wi(_r),
            ji = Wi(yr),
            Yi = Wi(Cr),
            Ki = Wi(Ar);

        function Wi(e) {
            return new Set(Object.values(e))
        }

        function zi(e) {
            return JSON.stringify({
                value: e
            })
        }

        function Zi(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Set,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                i = {};
            return Object.entries(e).forEach((e => {
                var [o, s] = e;
                if (t.has(o)) {
                    var a = s;
                    n.has(o) ? a = Li : r[o] && (a = r[o].has(s) ? s : Ni), i[o] = a
                }
            })), JSON.stringify(i)
        }
        var Qi = function (e, t, n) {
            switch (e) {
                case Wr.Configured:
                case Wr.ConfigUpdated:
                    return function (e, t) {
                        switch (e) {
                            case Jr.Card:
                            case Jr.GiftCard:
                                return function (e, t) {
                                    return Zi(t, e === Jr.Card ? Di : xi)
                                }(e, t);
                            case Jr.GooglePay:
                                return function (e) {
                                    return Zi(e, Ui, void 0, {
                                        buttonColor: qi,
                                        buttonSizeMode: ji,
                                        buttonType: Yi
                                    })
                                }(t);
                            case Jr.PaymentRequest:
                                return function (e) {
                                    return Zi(e, bi, Mi, {
                                        currencyCode: Ki
                                    })
                                }(t)
                        }
                        return Ni
                    }(t, n);
                case Wr.Focused:
                    return zi(function (e, t) {
                        if ("string" != typeof t) return Ni;
                        switch (e) {
                            case Jr.Card:
                                if (Gi.has(t)) return t;
                                break;
                            case Jr.GiftCard:
                                if (Vi.has(t)) return t
                        }
                        return Ni
                    }(t, n));
                case Wr.SetLocale:
                    return zi(function (e) {
                        return "string" != typeof e ? Ni : Bi.has(e) ? e : Ni
                    }(n));
                case Wr.EventListenerAdded:
                    return zi(function (e, t) {
                        if ("string" != typeof t) return Ni;
                        switch (e) {
                            case Jr.Ach:
                                if (ki.has(t)) return t;
                                break;
                            case Jr.Card:
                            case Jr.GiftCard:
                                if (Hi.has(t)) return t;
                                break;
                            case Jr.PaymentRequest:
                                if (Fi.has(t)) return t
                        }
                        return Ni
                    }(t, n));
                case Wr.Destroyed:
                case Wr.RecalculatedSize:
                default:
                    return ""
            }
        };

        function Ji(e, t) {
            return null !== e.document.body && void 0 !== e.document.body && null !== e.document.createNodeIterator(e.document.body, NodeFilter.SHOW_ELEMENT, {
                acceptNode: t
            }).nextNode()
        }

        function Xi(e, t) {
            return Boolean(e.querySelector(t))
        }

        function $i(e, t) {
            return void 0 !== e[t]
        }
        var eo = function (e) {
            var t, n = $i(e, "angular"),
                r = Xi(e.document, "[ng-version]") || $i(e, "getAllAngularRootElements") || $i(e, "getAngularVersion"),
                i = $i(e, "bootstrap"),
                o = $i(e, "Ember"),
                s = $i(e, "jQuery"),
                a = Xi(e.document, 'form[action*="paypal.com"]'),
                c = function (e) {
                    return Ji(e, (function (e) {
                        return e.__k || e._component || e.__c ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                    }))
                }(e),
                l = function (e) {
                    var t = Xi(e.document, "*[data-reactroot]");
                    if (t) return t;
                    return Ji(e, (function (e) {
                        return e._reactRootContainer ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                    }))
                }(e),
                u = function (e) {
                    var t = $i(e, "__NUXT__") || $i(e, "$nuxt"),
                        n = $i(e, "__VUE__");
                    if (n || t) return n || t;
                    return Ji(e, (function (e) {
                        return e.__vue__ ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                    }))
                }(e),
                d = {
                    angular: r,
                    angularJS: n,
                    bootstrap: i,
                    ember: o,
                    jquery: s,
                    nextJS: $i(e, "__NEXT_DATA__") && void 0 !== (null === (t = e.__NEXT_DATA__) || void 0 === t ? void 0 : t.buildId),
                    paypalBuyNow: a,
                    preact: c,
                    react: l,
                    vue: u
                };
            return An(Object.entries(d).filter((e => {
                var [t, n] = e;
                return !0 === n
            })))
        };

        function to(e, t) {
            var n = m.windowPerformance;
            if (!n || "function" != typeof n.getEntriesByType) return null;
            var r = n.getEntriesByType("resource"),
                i = n.getEntriesByType("navigation"),
                o = function (e, t, n) {
                    var r = e.filter((e => e.initiatorType === t && n.test(e.name)));
                    return r[r.length - 1]
                }(r.concat(i), e, t);
            return o ? Math.round(function (e) {
                return e.duration > 0 ? e.duration : Math.max(Math.trunc(e.responseEnd - e.startTime), 0)
            }(o)) : null
        }
        var no, ro = function (e) {
                switch (e) {
                    case zr.CASH_APP_AUTH:
                        return to(ri.fetch, ii.CASH_APP_AUTH_ENDPOINT);
                    case zr.CASH_APP_API_CUSTOMER:
                        return to(ri.fetch, ii.CASH_APP_API_CUSTOMER);
                    case zr.GET_PRODUCT_INFORMATION:
                        return to(ri.fetch, ii.GET_PRODUCT_INFORMATION_ENDPOINT);
                    case zr.MAIN_IFRAME:
                        return to(ri.navigation, ii.MAIN_IFRAME_RESOURCE);
                    case zr.LOAD:
                        return to(ri.script, ii.LIBRARY_RESOURCE);
                    case zr.NONCE:
                        return to(ri.fetch, ii.CARD_NONCE_ENDPOINT);
                    default:
                        return null
                }
            },
            io = y.METRICS_URL;
        class oo {
            constructor(e) {
                this.sdkVersion = y.VERSION, this.jsFramework = "", this.applicationData = e, this.manualTelemetryStarts = {}
            }
            setAvt(e) {
                this.avt = e
            }
            logEvent(e, t, n, r) {
                var i, o = {
                        origin: Oi().origin
                    },
                    s = {
                        innerHeight: m.windowInnerHeight,
                        innerWidth: m.windowInnerWidth,
                        language: m.windowNavigationLanguage
                    },
                    a = this.eventDuration(e, r),
                    {
                        event: c,
                        eventSource: l,
                        eventConfigurationValues: u,
                        internalConfigurationValues: d
                    } = e,
                    h = this.sdkVersion,
                    p = this.metricsSession(t, n),
                    f = {
                        appLocation: o,
                        avt: this.avt,
                        browserData: s,
                        event: c,
                        eventSource: l,
                        paymentMethodTrackingId: r,
                        sdkVersion: h,
                        session: p
                    };
                void 0 !== u && (i = c, si.has(i)) && (f.eventConfigurationValues = Qi(c, l, u)), void 0 !== d && function (e) {
                    return ai.has(e)
                }(c) && (f.internalConfigurationValues = JSON.stringify(d)), a && (f.duration = a), c === Yr.InitializeOK && (f.jsFramework = this.getJSFrameworkValue()), Ai(io, {
                    body: f
                }).catch((e => {
                    console.debug("logEvent error", e)
                }))
            }
            getJSFrameworkValue() {
                return 0 === this.jsFramework.length && (this.jsFramework = JSON.stringify(eo(window))), this.jsFramework
            }
            eventDuration(e, t) {
                var [n, r] = e.event.split(":");
                if (n in Zr) {
                    var i;
                    if (n === Zr.INITIALIZATION ? i = n : t && (i = "".concat(n, ":").concat(t)), !i) return null;
                    if (r === Qr.START) {
                        var o = Date.now();
                        return this.manualTelemetryStarts[i] = o, null
                    }
                    if (r === Qr.OK || r === Qr.ERROR) {
                        var s = this.manualTelemetryStarts[i];
                        return void 0 === s ? null : (delete this.manualTelemetryStarts[i], Date.now() - s)
                    }
                }
                return r !== Qr.START && n in zr ? ro(n) : null
            }
            metricsSession(e, t) {
                return Object.assign(Object.assign({}, this.applicationData), {
                    instanceId: e,
                    sessionId: t
                })
            }
        }! function (e) {
            e.ACH = "ACH", e.ALIPAY = "ALIPAY", e.APPLE_PAY = "APPLE_PAY", e.CASH_APP = "CASH_APP", e.GOOGLE_PAY = "GOOGLE_PAY"
        }(no || (no = {})), y.HYDRATION_ENDPOINT;
        var so, ao, co = "UPDATE_SESSION";
        ! function (e) {
            e.CanUseWebSDK = "can_use_websdk", e.CanUseInterac = "can_use_interac"
        }(so || (so = {})),
        function (e) {
            e[e.Control = 0] = "Control", e[e.TreatmentA = 1] = "TreatmentA"
        }(ao || (ao = {}));
        var lo = {
            [so.CanUseWebSDK]: {
                false: ao.Control,
                true: ao.TreatmentA
            },
            [so.CanUseInterac]: {
                false: ao.Control,
                true: ao.TreatmentA
            }
        };
        class uo {
            constructor(e) {
                this.featureFlagValues = e
            }
            isActive(e) {
                return this.experimentGroup(e) !== ao.Control
            }
            experimentGroup(e) {
                return this.featureFlagValueExperimentGroup(e)
            }
            featureFlagValueExperimentGroup(e) {
                var t = this.featureFlagValues[e];
                return lo[e][t] || ao.Control
            }
        }
        var ho, po = "LOCALE_CHANGED_EVENT";
        class fo extends class {
            constructor(e, t) {
                this.errorLogger = e, this.messenger = t
            }
        } {
            constructor(e, t, n, r, i, o, s, a) {
                super(e, t), this.session = r, this.localeStrings = o, this.paymentMethodSupportDetail = i, this.metricsHandler = n, this.eventTarget = s, this.featureFlagHandler = new uo(a)
            }
            addLocaleChangedListener(e) {
                this.eventTarget.addEventListener(po, e)
            }
            removeLocaleChangedListener(e) {
                this.eventTarget.removeEventListener(po, e)
            }
            getSession() {
                return this.session.serialize()
            }
            getLocaleString() {
                return this.localeStrings.getLocaleString()
            }
            setLocale(e) {
                if (!this.messenger) throw new Fr("Expected messenger to exist for the client context");
                var t = this.localeStrings.setLocale(e);
                if (t.previousLocale === t.newLocale) return t;
                var n = this.localeStrings.getCurrentLocale();
                return this.session.setLocale(n), this.eventTarget.dispatchEvent(po, n), this.messenger.sendOneWayMessage(co, {
                    options: {
                        session: this.session.serialize()
                    }
                }), t
            }
            setSessionId(e) {
                if (!this.messenger) throw new Fr("Expected messenger to exist for the client context");
                this.session.setSessionId(e), this.messenger.sendOneWayMessage(co, {
                    options: {
                        session: this.session.serialize()
                    }
                })
            }
            setPaymentMethodTrackingId(e) {
                this.metricsHandler.setPaymentMethodTrackingId(e)
            }
            getPaymentMethodTrackingId() {
                return this.metricsHandler.getPaymentMethodTrackingId()
            }
        }

        function go() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return "https://developer.squareup.com/docs/api/paymentform".concat(e)
        }! function (e) {
            e.APPLE_PAY_BROWSER_NOT_SUPPORTED = "APPLE_PAY_BROWSER_NOT_SUPPORTED", e.APPLE_PAY_DEVICE_NOT_SUPPORTED = "APPLE_PAY_DEVICE_NOT_SUPPORTED", e.APPLE_PAY_NOT_REGISTERED = "APPLE_PAY_NOT_REGISTERED", e.GOOGLE_PAY_BROWSER_NOT_SUPPORTED = "GOOGLE_PAY_BROWSER_NOT_SUPPORTED", e.INVALID_CONFIG = "INVALID_CONFIG", e.UNKNOWN = "UNKNOWN", e.WALLET_NOT_REQUESTED = "WALLET_NOT_REQUESTED"
        }(ho || (ho = {}));
        var mo, vo = {
            APPLE_PAY_BROWSER_NOT_SUPPORTED: {
                message: "Apple Pay is only available on Safari.",
                type: "BROWSER_NOT_SUPPORTED"
            },
            APPLE_PAY_DEVICE_NOT_SUPPORTED: {
                message: "Device does not support Apple Pay.\nSee:".concat(function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "https://developer.squareup.com/docs/payment-form/add-digital-wallets/apple-pay".concat(e)
                }("#prerequisites-and-assumptions"), "."),
                type: "DEVICE_NOT_SUPPORTED"
            },
            APPLE_PAY_NOT_REGISTERED: {
                message: "No active card available in the Apple Wallet or domain not registered.",
                type: "NOT_REGISTERED"
            },
            GOOGLE_PAY_BROWSER_NOT_SUPPORTED: {
                message: "Browser does not support Google Pay. \nSee: ".concat(function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return "https://developer.squareup.com/docs/payment-form/add-digital-wallets/google-pay".concat(e)
                }("#prerequsites-and-assumptions")),
                type: "BROWSER_NOT_SUPPORTED"
            },
            INVALID_CONFIG: {
                message: "Configuration is invalid.",
                type: "INVALID_CONFIG"
            },
            UNKNOWN: {
                message: "An unknown error has occurred.",
                type: "UNKNOWN"
            },
            WALLET_NOT_REQUESTED: {
                message: "Wallet is not specified in the payment request config.\nSee:".concat(go("#paymentform-configurationfields")),
                type: "WALLET_NOT_REQUESTED"
            }
        };
        ! function (e) {
            e.COUNTRY_NOT_SUPPORTED = "COUNTRY_NOT_SUPPORTED", e.APPLICATION_DISABLED = "APPLICATION_DISABLED", e.INACTIVE_PLATFORM_ACCOUNT = "INACTIVE_PLATFORM_ACCOUNT", e.MISSING_LOCATION_ID = "MISSING_LOCATION_ID", e.UNVERIFIED_DOMAIN = "UNVERIFIED_DOMAIN", e.US_AND_UK_MERCHANT_ONLY = "US_AND_UK_MERCHANT_ONLY", e.US_MERCHANT_ONLY = "US_MERCHANT_ONLY"
        }(mo || (mo = {}));
        var Eo = {
            APPLICATION_DISABLED: {
                message: "Wallet is disabled for your application.",
                type: "APPLICATION_DISABLED"
            },
            COUNTRY_NOT_SUPPORTED: {
                message: "Wallet is not available in this merchant country.",
                type: "COUNTRY_NOT_SUPPORTED"
            },
            INACTIVE_PLATFORM_ACCOUNT: {
                field: "accountId",
                message: "The platform account associated with provided accountId is inactive.",
                type: "INACTIVE_PLATFORM_ACCOUNT"
            },
            MISSING_LOCATION_ID: {
                field: "locationId",
                message: "Missing locationId in the payment request configuration.\nSee: ".concat(go("#paymentform-configurationfields")),
                type: "MISSING_LOCATION_ID"
            },
            UNVERIFIED_DOMAIN: {
                message: "Your website's domain is not verified for use with Apple Pay. Please visit the Square Developer Dashboard at https://developer.squareup.com/ to register your domain for use with Apple Pay",
                type: "UNVERIFIED_DOMAIN"
            },
            US_AND_UK_MERCHANT_ONLY: {
                message: "Wallet is available for US and UK merchants only.",
                type: "US_AND_UK_MERCHANT_ONLY"
            },
            US_MERCHANT_ONLY: {
                message: "Wallet is available for US merchants only.",
                type: "US_MERCHANT_ONLY"
            }
        };
        class _o extends $t {
            constructor(e, t, n) {
                var r = "".concat(e, " was called with a missing or invalid parameter. '").concat(t, "' is required");
                n && (r += " and must be a(n) ".concat(n)), super("".concat(r, ".")), this.name = "InvalidFunctionArgumentError", Object.setPrototypeOf(this, _o.prototype)
            }
        }
        class yo extends $t {
            constructor(e) {
                super("One or more of the arguments needed are missing or invalid."), this.argumentErrors = e, this.name = "InvalidArgumentsError", Object.setPrototypeOf(this, yo.prototype)
            }
        }
        class Co {
            constructor() {
                this.listeners = {}
            }
            addEventListener(e, t) {
                e in this.listeners || (this.listeners[e] = []), this.listeners[e].push(t)
            }
            removeEventListener(e, t) {
                if (e in this.listeners)
                    for (var n = this.listeners[e], r = 0; r < n.length; r++) n[r] === t && (n.splice(r, 1), r--)
            }
            dispatchEvent(e, t) {
                if (e in this.listeners)
                    for (var n = new gr(e, t), r = this.listeners[e].slice(), i = 0, o = r.length; i < o; i++) r[i](n)
            }
            hasEventListener(e) {
                return e in this.listeners && this.listeners[e].length > 0
            }
        }
        var Io, Ao = function () {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).slice(1)
            }
            return "".concat(e() + e(), "-").concat(e(), "-").concat(e(), "-").concat(e(), "-").concat(e()).concat(e()).concat(e())
        };
        ! function (e) {
            e.REQUEST_GOOGLE_PAY_CARD_NONCE = "REQUEST_GOOGLE_PAY_CARD_NONCE", e.GENERATE_GOOGLE_PAY_AUTH_TOKEN = "GENERATE_GOOGLE_PAY_AUTH_TOKEN"
        }(Io || (Io = {}));
        var So, Oo;
        ! function (e) {
            e.PLAID = "window.Plaid", e.ANALYTICS = "window.Square.Analytics", e.GOOGLE = "window.google.payments"
        }(So || (So = {})),
        function (e) {
            e.ANALYTICS = "square-payments-analytics-link-script", e.GOOGLE = "square-payments-google-link-script", e.PLAID = "square-payments-plaid-link-script"
        }(Oo || (Oo = {}));
        var To = {};

        function Po(e, t, n, r) {
            var i = r();
            if (i) return Promise.resolve(i);
            if (To[t]) return To[t];
            var o = document.createElement("script");
            return o.id = e, o.src = n, To[t] = new Promise(((e, i) => {
                o.onload = () => {
                    var o = r();
                    o ? e(o) : i(new cr(t, n))
                }, o.onerror = () => {
                    i(new cr(t, n))
                }
            })), document.body.appendChild(o), To[t]
        }
        var Ro, wo = function () {
                return Po(Oo.ANALYTICS, So.ANALYTICS, y.ANALYTICS_PUBLIC_ENDPOINT, (() => {
                    var e;
                    return null === (e = null === window || void 0 === window ? void 0 : window.Square) || void 0 === e ? void 0 : e.Analytics
                }))
            },
            No = function () {
                return Po(Oo.GOOGLE, So.GOOGLE, y.GOOGLE_PAY_SCRIPT_URL, (() => {
                    var e;
                    return null === (e = null === window || void 0 === window ? void 0 : window.google) || void 0 === e ? void 0 : e.payments
                }))
            },
            Lo = function () {
                return Po(Oo.PLAID, So.PLAID, y.PLAID_LINK_SCRIPT_URL, (() => null === window || void 0 === window ? void 0 : window.Plaid))
            },
            bo = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Do = vn.hoursToMs(2);

        function xo(e) {
            var {
                applicationId: t,
                locationId: n
            } = e;
            return Ro || (Ro = wo().then((e => new e(t, {
                locationId: n
            }))))
        }
        var Mo = {
            getToken: function (e) {
                return bo(this, void 0, void 0, (function* () {
                    var t = yield xo(e);
                    return new Promise((e => {
                        t.getToken(e)
                    }))
                }))
            },
            resetLibraryCache: function () {
                Ro = void 0
            },
            verifyBuyer: function (e, t, n) {
                return bo(this, void 0, void 0, (function* () {
                    var r = yield xo(e);
                    return new Promise(((e, i) => {
                        r.verifyBuyer(t, n, ((t, n) => {
                            t ? i(t) : e(n)
                        }))
                    }))
                }))
            }
        };
        class Uo {
            constructor(e) {
                this.eventTarget = new Co, this.context = e
            }
            get session() {
                return this.context.getSession()
            }
            get messenger() {
                return this.context.messenger
            }
            get metricsHandler() {
                return this.context.metricsHandler
            }
            get errorLogger() {
                return this.context.errorLogger
            }
            addEventListener(e, t) {
                this.eventTarget.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                this.eventTarget.removeEventListener(e, t)
            }
            dispatchEvent(e, t) {
                this.eventTarget.dispatchEvent(e, t)
            }
            destroy() {
                return Promise.resolve()
            }
            detach() {
                return Promise.resolve()
            }
        }
        var ko, Ho, Fo = {
            message: "the tokenization request is already in process",
            type: "TOKENIZATION_IN_PROCESS"
        };
        ! function (e) {
            e.CREATE_PLAID_LINK_SESSION = "CREATE_PLAID_LINK_SESSION", e.REQUEST_ACH_BANK_NONCE = "REQUEST_ACH_BANK_NONCE"
        }(ko || (ko = {})),
        function (e) {
            e.SUCCESS = "SUCCESS", e.CANCEL = "CANCEL"
        }(Ho || (Ho = {}));
        var Go, Vo = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Bo = ["US"],
            qo = ["auth"],
            jo = new Set(["en", "es"]),
            Yo = new Set(["ITEM_ERROR"]);
        class Ko extends Uo {
            constructor(e, t) {
                if (super(t), this.tokenizeInProgress = !1, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.Plaid = e, !this.session.locationId) throw new ar(vo.INVALID_CONFIG, "locationId")
            }
            openPlaidLink(e) {
                var t = this.errorLogger,
                    n = this.session,
                    r = this.metricsHandler;
                this.handleFirstInteraction();
                var i = new Promise(((i, o) => {
                    var s = m.windowNavigationLanguage.split("-")[0];
                    jo.has(s) || (s = "en"), this.plaidHandler = this.Plaid.create({
                        clientName: "Square, Inc.",
                        countryCodes: Bo,
                        env: y.PLAID_LINK_ENV,
                        language: s,
                        onEvent: (e, r) => {
                            e !== Un.ERROR || Yo.has(r.error_type) || t.captureException(new Fr("PlaidErrorEvent: ".concat(JSON.stringify(r)), Dn.ACH), n.instanceId, n.sessionId), super.dispatchEvent(e, r)
                        },
                        onExit: (e, o) => {
                            e && (r.logEvent(Kr.ExternalSessionError), Yo.has(e.error_type) || t.captureException(new Fr("PlaidErrorOnExit: ".concat(JSON.stringify(e), ", Metadata: ").concat(o)), n.instanceId, n.sessionId)), this.tokenizeInProgress = !1, this.deleteHandler(), i({
                                status: Ho.CANCEL
                            })
                        },
                        onSuccess(e, s) {
                            if (!s || !s.accounts || !s.accounts[0]) {
                                r.logEvent(Kr.ExternalSessionError);
                                var a = new Error("No account selected but expected account, metadata: ".concat(JSON.stringify(s)));
                                return t.captureException(a, n.instanceId, n.sessionId), void o(a)
                            }
                            r.logEvent(Kr.ExternalSessionOK), i({
                                publicToken: e,
                                selectedBankAccountId: s.accounts[0].id,
                                status: Ho.SUCCESS
                            })
                        },
                        product: qo,
                        token: e
                    })
                }));
                return r.logEvent(Kr.ExternalSessionStart), this.plaidHandler.open(), i
            }
            tokenize(e) {
                return Vo(this, void 0, void 0, (function* () {
                    if (this.isDestroyed) throw new ir(Dn.ACH);
                    if (this.tokenizeInProgress) throw new pr([Fo]);
                    if (!e || !e.accountHolderName) throw new zn;
                    this.tokenizeInProgress = !0;
                    var t = yield this.createPlaidLinkSession(), n = yield this.openPlaidLink(t.plaidLinkToken);
                    return n.status === Ho.SUCCESS && n.publicToken && n.selectedBankAccountId ? this.requestAchBankNonce(e.accountHolderName, n.publicToken, n.selectedBankAccountId, t.gringottsSessionToken) : {
                        status: Mn.CANCEL
                    }
                }))
            }
            destroy() {
                return this.isDestroyed = !0, this.metricsHandler.logEvent(Wr.Destroyed), this.handler && (this.handler.exit({
                    force: !0
                }), this.handler.destroy(), this.deleteHandler()), Promise.resolve()
            }
            addEventListener(e, t) {
                this.metricsHandler.logEvent(Wr.EventListenerAdded, e), super.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                super.removeEventListener(e, t)
            }
            createPlaidLinkSession() {
                return Vo(this, void 0, void 0, (function* () {
                    var e = this.session,
                        t = {
                            createPlaidLinkSessionRequest: {
                                clientId: e.applicationId
                            }
                        };
                    try {
                        return yield this.messenger.request(ko.CREATE_PLAID_LINK_SESSION, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: e
                            },
                            payload: t
                        })
                    } catch (e) {
                        throw this.tokenizeInProgress = !1, e
                    }
                }))
            }
            requestAchBankNonce(e, t, n, r) {
                return Vo(this, void 0, void 0, (function* () {
                    var i = {
                            accountHolderName: e,
                            gringottsSessionToken: r,
                            plaidPublicToken: t,
                            selectedPlaidBankAccountId: n
                        },
                        o = this.session,
                        s = {
                            bankNonceRequest: {
                                clientId: o.applicationId,
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                plaidLinkData: i,
                                sessionId: o.sessionId,
                                websdkVersion: y.VERSION,
                                websiteUrl: o.sourceUrl
                            }
                        };
                    try {
                        var a = yield this.messenger.request(ko.REQUEST_ACH_BANK_NONCE, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: o
                            },
                            payload: s
                        });
                        return this.deleteHandler(), this.tokenizeInProgress = !1, this.context.setSessionId(a.sessionId), this.context.setPaymentMethodTrackingId(a.paymentMethodTrackingId), this.wasFirstInteractionCalled = !1, {
                            details: {
                                bankAccount: a.accountDetails,
                                method: Dn.ACH
                            },
                            status: Mn.OK,
                            token: a.bankNonce
                        }
                    } catch (e) {
                        throw this.deleteHandler(), this.tokenizeInProgress = !1, e instanceof pr ? e : new pr([Vn.UNKNOWN])
                    }
                }))
            }
            get plaidHandler() {
                if (!this.handler) {
                    var e = new Fr("The plaid handler was not properly created.", Dn.ACH);
                    throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new Zn
                }
                return this.handler
            }
            set plaidHandler(e) {
                this.handler = e
            }
            deleteHandler() {
                delete this.handler
            }
            handleFirstInteraction() {
                this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(Yr.FirstInteraction))
            }
        }

        function Wo(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!e.redirectURI) throw new Wn("redirectURI missing");
            if (!e.transactionId) throw new Wn("transactionId missing");
            if (t) {
                if (!e.totalTransactionAmount) throw new Wn("totalTransactionAmount required");
                if (!Number.isInteger(e.totalTransactionAmount.amount) || e.totalTransactionAmount.amount <= 0) throw new Wn("totalTransactionAmount.amount must be a positive integer")
            }
        }

        function zo(e, t) {
            var n = e;
            return e instanceof $t || (n = new $t, t.captureException(e)), {
                errors: [n],
                status: Mn.ERROR
            }
        }! function (e) {
            e.REQUEST_ALIPAY_PAY = "REQUEST_ALIPAY_PAY"
        }(Go || (Go = {}));
        var Zo, Qo, Jo, Xo, $o, es, ts;
        class ns extends Uo {
            constructor(e, t) {
                if (super(e), !this.session.locationId) throw new Wn("locationId must be provided for Alipay");
                if (this.locationId = this.session.locationId, Wo(t, !0), this.redirectUri = t.redirectURI, this.totalTransactionAmount = t.totalTransactionAmount, t.transactionId.length > 64) throw new Wn("transactionId too long. Should be less than ".concat(64, " characters."));
                this.transactionId = t.transactionId
            }
            tokenize() {
                return e = this, t = void 0, r = function* () {
                    try {
                        var e = yield this.fetchRedirectActionForm();
                        return this.redirect(e), new Promise((() => {}))
                    } catch (e) {
                        return zo(e, this.context.errorLogger)
                    }
                }, new((n = void 0) || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }));
                var e, t, n, r
            }
            fetchRedirectActionForm() {
                return this.messenger.request(Go.REQUEST_ALIPAY_PAY, {
                    options: {
                        session: this.session
                    },
                    payload: {
                        client_id: this.session.applicationId,
                        location_id: this.locationId,
                        redirect_uri: this.redirectUri,
                        total_transaction_amount: {
                            amount: this.totalTransactionAmount.amount,
                            currency_code: this.totalTransactionAmount.currencyCode
                        },
                        transaction_id: this.transactionId
                    }
                })
            }
            redirect(e) {
                var t = "alipay_".concat(this.transactionId),
                    n = document.createElement("form");
                if (n.setAttribute("id", t), n.setAttribute("action", e.redirect_url), n.setAttribute("method", e.method), n.setAttribute("style", "display:none"), e.parameters.length > 0) {
                    var r = JSON.parse(e.parameters);
                    Object.keys(r).forEach((e => {
                        var t = document.createElement("input");
                        t.setAttribute("type", "hidden"), t.setAttribute("name", e), t.setAttribute("value", r[e]), n.appendChild(t)
                    }))
                }
                m.documentBody.appendChild(n), m.submitForm(n)
            }
        }(Qo = Zo || (Zo = {})).UNKNOWN = "unknown", Qo.AMERICAN_EXPRESS = "americanExpress", Qo.DISCOVER = "discover", Qo.DISCOVER_DINERS = "discoverDiners", Qo.JCB = "JCB", Qo.MASTER_CARD = "masterCard", Qo.UNION_PAY = "unionPay", Qo.VISA = "visa", Qo.SQUARE_GIFT_CARD_V2 = "squareGiftCardV2", Qo.INTERAC = "interac", Qo.SQUARE_CAPITAL_CARD = "squareCapitalCard", Qo.EFTPOS = "eftpos", Rn.CARD_NUMBER, Rn.CVV, Rn.EXPIRATION_DATE, Rn.POSTAL_CODE, (es = Jo || (Jo = {})).CARD_BRAND_CHANGED = "cardBrandChanged", es.ERROR_CLASS_ADDED = "errorClassAdded", es.ERROR_CLASS_REMOVED = "errorClassRemoved", es.FOCUS_CLASS_ADDED = "focusClassAdded", es.FOCUS_CLASS_REMOVED = "focusClassRemoved", es.POSTAL_CODE_CHANGED = "postalCodeChanged", es.SET_POSTAL_COUNTRY = "setPostalCountry", es.ESCAPE = "escape", es.SUBMIT = "submit", ($o = Xo || (Xo = {})).ERROR = "error", $o.FOCUS = "focus", $o.UNKNOWN = "unknown", (ts || (ts = {})).THIRD_PARTY_GIFT_CARD = "thirdPartyGiftCard";
        class rs {
            constructor(e) {
                this.options = e
            }
            format(e) {
                for (var t = e.split(""), n = "", r = 0; t.length > 0;) n += this.options.delimiterPositions.includes(r) ? this.options.delimiter : t.shift(), r += 1;
                return n
            }
        }
        class is {
            constructor(e) {
                this.options = e
            }
            format(e) {
                var t = e;
                return void 0 !== this.options.regexp && void 0 !== this.options.replacement && (this.options.replacement, t = e.replace(this.options.regexp, this.options.replacement)), t.slice(0, this.options.maxLength)
            }
        }
        class os {
            getName() {
                return "LuhnValdator"
            }
            isValid(e) {
                var t = String(e).replace(/\D/g, "");
                if (!t) return !1;
                for (var n = 0, r = !1, i = t.length - 1; i >= 0; i--) {
                    var o = Number.parseInt(t.charAt(i), 10);
                    n += r ? os.luhnDigits[o] : o, r = !r
                }
                return n % 10 == 0
            }
        }
        os.luhnDigits = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
        var ss = new RegExp(/\D/g);
        new is({
            maxLength: 15,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 19,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 14,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 16,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 16,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 16,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 16,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 19,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 16,
            regexp: ss,
            replacement: ""
        }), new is({
            maxLength: 255,
            regexp: new RegExp(/[^\dA-Za-z]/g),
            replacement: ""
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 11]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 11]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), new rs({
            delimiter: " ",
            delimiterPositions: [4, 9, 14]
        }), y.GET_PRODUCT_INFORMATION_ENDPOINT;
        var as = "sq-focus",
            cs = "sq-error",
            ls = ".".concat(as),
            us = ".".concat(cs),
            ds = "::placeholder";
        new Fr("IFrame does not exist");
        var hs = ["top", "right", "bottom", "left"],
            ps = /^\d+\/\d+$/,
            fs = /^#([\dA-Fa-f]{3}|[\dA-Fa-f]{6})$/,
            gs = /^-\d*\.?\d+em$/,
            ms = /^-\d*\.?\d+pt$/,
            vs = /^-\d*\.?\d+px$/,
            Es = /^\d*\.?\d+em$/,
            _s = /^\d*\.?\d+%$/,
            ys = /^\d*\.?\d+pt$/,
            Cs = /^\d*\.?\d+px$/,
            Is = /^\d*\.?\d+(?:dpi|dpcm|dppx|x)$/,
            As = /^rgb\((\s*\d{1,3},){2}\s*\d{1,3}\)$/,
            Ss = /^rgba\((\s*\d{1,3},){3}\s*(1|0*.\d*)\)$/,
            Os = /\s(?![^(]*\))/,
            Ts = new Set(["screen", "all", "print", "speech"]),
            Ps = new Set(["and"]),
            Rs = new Set(["not", "only"]),
            ws = new Set(["portrait", "landscape"]),
            Ns = new Set(["xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"]),
            Ls = new Set(["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgrey", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkslategrey", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dimgrey", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgrey", "lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightslategrey", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "slategrey", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"]),
            bs = new Set([100, 200, 300, 400, 500, 600, 700, 800, 900]),
            Ds = new Set(["100", "200", "300", "400", "500", "600", "700", "800", "900", "normal", "bold", "bolder", "lighter"]),
            xs = new Set(["normal"]),
            Ms = new Set(["smaller", "larger"]),
            Us = new Set(["andale mono", "arial", "arial black", "arial narrow", "arial rounded mt bold", "avant garde", "baskerville", "big caslon", "bodoni mt", "book antiqua", "brush script mt", "calibri", "calisto mt", "cambria", "candara", "century gothic", "charcoal", "comic sans ms", "consolas", "copperplate", "copperplate gothic light", "courier", "courier new", "cursive", "didot", "fantasy", "franklin gothic medium", "futura", "garamond", "geneva", "georgia", "gill sans", "goudy old style", "helvetica", "helvetica neue", "hoefler text", "impact", "lucida bright", "lucida console", "lucida grande", "lucida sans unicode", "lucida sans typewriter", "monaco", "monospace", "optima", "palatino", "palatino linotype", "papyrus", "perpetua", "rockwell", "rockwell extra bold", "sans-serif", "segoe ui", "serif", "square market", "tahoma", "times", "times new roman", "trebuchet ms", "verdana"]),
            ks = new Set(["none", "antialiased", "subpixel-antialiased"]),
            Hs = new Set(["grayscale", "auto"]),
            Fs = new Set(["none"]);

        function Gs(e) {
            return null != e && e.split(/, ?(?![^(]*\))/).every((e => function (e) {
                if (null == e) return !1;
                if ("none" === e) return !0;
                var t = e.split(/ (?![^(]*\))/),
                    n = 0;
                if ("inset" === t[0] && (t.shift(), n++), "inset" === t[t.length - 1]) {
                    if (n > 0) return !1;
                    t.pop()
                }
                for (var r = 0; r < 2; r++) {
                    var i = t.shift();
                    if (void 0 === i || !Ks(i)) return !1
                }
                switch (t.length) {
                    case 0:
                        return !0;
                    case 1:
                        return Zs(t[0]) || zs(t[0]);
                    case 2:
                        return zs(t[0]) && (Zs(t[1]) || Ws(t[1]));
                    case 3:
                        return zs(t[0]) && Ws(t[1]) && Zs(t[2]);
                    default:
                        return !1
                }
            }(e)))
        }

        function Vs(e) {
            return ["border-box", "content-box"].includes(e)
        }

        function Bs(e) {
            return e.split(" ").every((e => function (e) {
                return 0 === Number(e) || aa(e) || ua(e)
            }(e)))
        }

        function qs(e) {
            var t = e.split(" ");
            return !(0 === t.length || t.length > 4) && t.every(js)
        }

        function js(e) {
            return 0 === Number(e) || aa(e) || ua(e)
        }

        function Ys(e) {
            return 0 === Number(e) || aa(e) || ua(e) || ca(e) || da(e)
        }

        function Ks(e) {
            return 0 === Number(e) || sa(e) || la(e)
        }

        function Ws(e) {
            return 0 === Number(e) || sa(e) || la(e)
        }

        function zs(e) {
            return 0 === Number(e) || aa(e) || ua(e)
        }

        function Zs(e) {
            return null != e && (function (e) {
                return Ls.has(e.toLowerCase())
            }(e) || function (e) {
                return fs.test(e)
            }(e) || function (e) {
                return As.test(e)
            }(e) || function (e) {
                return Ss.test(e)
            }(e))
        }

        function Qs(e) {
            return null != e && (function (e) {
                return Ns.has(e.toLowerCase())
            }(e) || function (e) {
                return Ms.has(e.toLowerCase())
            }(e) || aa(e) || ha(e) || ua(e) || pa(e))
        }

        function Js(e) {
            return null !== e && e.split(", ").every((e => {
                return t = e.toLowerCase().trim().replace(/["']+/g, ""), Us.has(t);
                var t
            }))
        }

        function Xs(e) {
            var t = Number(e);
            return Number.isNaN(t) ? Ds.has(e.toLowerCase()) : bs.has(t)
        }

        function $s(e) {
            return "normal" === e || la(e) || function (e) {
                return ha(e) || function (e) {
                    return ms.test(e)
                }(e)
            }(e) || sa(e)
        }

        function ea(e) {
            var t = Number(e);
            return !Number.isNaN(t) && t >= 0 || xs.has(e) || ua(e) || aa(e) || ha(e) || pa(e)
        }

        function ta(e) {
            return ks.has(e)
        }

        function na(e) {
            return Hs.has(e)
        }

        function ra(e) {
            return Fs.has(e)
        }

        function ia(e) {
            if (null === e) return !1;
            var t = e.toString().split(" ");
            return !(t.length > 4) && t.every((e => function (e) {
                return aa(e) || ua(e) || pa(e) || 0 === Number(e)
            }(e)))
        }

        function oa(e) {
            if (!e.startsWith("(") || !e.endsWith(")")) return !1;
            var t = e.slice(1, -1),
                [n, r] = t.split(/: */);
            switch (n) {
                case "width":
                case "min-width":
                case "max-width":
                case "height":
                case "min-height":
                case "max-height":
                case "device-width":
                case "min-device-width":
                case "max-device-width":
                case "device-height":
                case "min-device-height":
                case "max-device-height":
                    return aa(r) || ua(r) || pa(r);
                case "resolution":
                case "min-resolution":
                case "max-resolution":
                    return function (e) {
                        return Is.test(e)
                    }(r);
                case "aspect-ratio":
                case "min-aspect-ratio":
                case "max-aspect-ratio":
                case "device-aspect-ratio":
                case "min-device-aspect-ratio":
                case "max-device-aspect-ratio":
                    return function (e) {
                        return ps.test(e)
                    }(r);
                case "color":
                case "color-index":
                case "monochrome":
                    return void 0 === r;
                case "min-color":
                case "max-color":
                case "min-color-index":
                case "max-color-index":
                case "min-monochrome":
                case "max-monochrome":
                    return function (e) {
                        return Number(e) >= 0
                    }(r);
                case "orientation":
                    return function (e) {
                        return ws.has(e)
                    }(r);
                default:
                    return !1
            }
        }

        function sa(e) {
            return aa(e) || ca(e)
        }

        function aa(e) {
            return Cs.test(e)
        }

        function ca(e) {
            return vs.test(e)
        }

        function la(e) {
            return ua(e) || da(e)
        }

        function ua(e) {
            return Es.test(e)
        }

        function da(e) {
            return gs.test(e)
        }

        function ha(e) {
            return ys.test(e)
        }

        function pa(e) {
            return _s.test(e)
        }
        var fa = function (e, t) {
                var n = (e => {
                    switch (e) {
                        case "border-color":
                        case "background-color":
                        case "color":
                        case "-webkit-text-fill-color":
                            return Zs;
                        case "-webkit-box-shadow":
                        case "box-shadow":
                            return Gs;
                        case "box-sizing":
                            return Vs;
                        case "font-family":
                            return Js;
                        case "font-size":
                            return Qs;
                        case "font-weight":
                            return Xs;
                        case "letter-spacing":
                            return $s;
                        case "line-height":
                            return ea;
                        case "padding":
                            return ia;
                        case "-webkit-font-smoothing":
                            return ta;
                        case "-moz-osx-font-smoothing":
                            return na;
                        case "display":
                            return ra;
                        case "border-radius":
                            return Bs;
                        case "border-width":
                            return qs;
                        case "top":
                        case "bottom":
                        case "left":
                        case "right":
                            return Ys;
                        case "width":
                            return function (e) {
                                return e
                            };
                        default:
                            return
                    }
                })(e);
                return n && n(t) || function (e) {
                    return ["unset", "inherit", "revert", "initial"].includes(e)
                }(t) ? t : ""
            },
            ga = function (e) {
                return !!(t = e).startsWith("@media") && t.slice("@media".length + 1, t.length).split(/, */).every((e => {
                    var t = e.split(Os);
                    if (0 === t.length) return !1;
                    var n = 0;
                    if (!t[0].startsWith("(")) {
                        var r = 0;
                        if (Rs.has(t[0]) && (r = 1), t.length === r + 1) return Ts.has(t[r]);
                        if (!Ts.has(t[r]) || !Ps.has(t[r + 1])) return !1;
                        n = 2 + r
                    }
                    if ((t.length - n) % 2 == 0) return !1;
                    for (var [i, o] of Object.entries(t.slice(n)))
                        if (!(Number(i) % 2 == 0 ? oa(o) : Ps.has(o))) return !1;
                    return !0
                }));
                var t
            };

        function ma(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            if (n.length > 0) {
                var i = n.includes(e);
                if (!i) throw new lr(e)
            }
            var o = Cn(e),
                s = fa(o, t);
            if (0 === s.length) throw new ur(e, t);
            return r && (s += " !important"), In(o, s)
        }

        function va(e, t, n) {
            var r = [],
                i = [],
                o = new Set(e.excludeProperties || []);
            for (var [s, a] of Object.entries(t))
                if (!o.has(s)) {
                    var c = a || "";
                    try {
                        r.push(ma(s, c, n))
                    } catch (e) {
                        i.push(e)
                    }
                } if (i.length > 0) throw new hr(i);
            return e.toSelectors.reduce((function (e, t) {
                return Object.assign({}, e, {
                    [t]: r
                })
            }), {})
        }

        function Ea(e, t, n) {
            var r = {},
                i = [];
            if (e.forEach((function (e) {
                    var {
                        property: o,
                        setAsImportant: s,
                        toProperty: a,
                        toSelectors: c,
                        transformPropertyValue: l
                    } = e, u = t[o];
                    if (u) {
                        var d = l ? l(u) : u;
                        try {
                            var h = ma(a || o, d, a ? n.concat(a) : n, s);
                            c.forEach((e => {
                                r[e] || (r[e] = []), r[e].push(h)
                            }))
                        } catch (e) {
                            i.push(e)
                        }
                    }
                })), i.length > 0) throw new hr(i);
            return r
        }

        function _a(e) {
            var t = [];
            for (var [n, r] of Object.entries(e)) r && r.length > 0 && t.push("\n      ".concat(n, " { ").concat(r.join(" "), " }\n      "));
            return t.join("")
        }

        function ya(e, t) {
            return !t && ga(e)
        }
        var Ca = function (e, t) {
                var n = t.split(" ");
                switch (n.length) {
                    case 1:
                        return n[0];
                    case 2:
                        switch (e) {
                            case "top":
                            case "bottom":
                                return n[0];
                            default:
                                return n[1]
                        }
                        case 3:
                            switch (e) {
                                case "top":
                                    return n[0];
                                case "bottom":
                                    return n[2];
                                default:
                                    return n[1]
                            }
                            case 4:
                                switch (e) {
                                    case "top":
                                        return n[0];
                                    case "right":
                                        return n[1];
                                    case "bottom":
                                        return n[2];
                                    case "left":
                                        return n[3];
                                    default:
                                        return ""
                                }
                                default:
                                    return ""
                }
            },
            Ia = function e(t, n, r) {
                var i, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = [],
                    a = [...Object.keys(n.selectorMappings), ...Object.keys(n.selectorPropertyMappings || {})],
                    c = new Set(a),
                    l = new Set(Object.values(r));
                Object.keys(t).forEach((e => {
                    l.has(e) || ya(e, o) || s.push(new dr(e))
                }));
                var u = {};

                function d(e) {
                    for (var [t, n] of Object.entries(e)) u[t] || (u[t] = []), u[t].push(...n)
                }
                for (var h of [...c]) {
                    var p = t[h],
                        f = n.allowedAttributes[h] || [],
                        g = n.selectorMappings[h] || [],
                        m = (null === (i = null == n ? void 0 : n.selectorPropertyMappings) || void 0 === i ? void 0 : i[h]) || [];
                    if (p) {
                        try {
                            var v = va(g, p, f);
                            d(v)
                        } catch (e) {
                            e instanceof hr && s.push(...e.errors)
                        }
                        try {
                            var E = Ea(m, p, f);
                            d(E)
                        } catch (e) {
                            e instanceof hr && s.push(...e.errors)
                        }
                    }
                }
                var _ = Object.keys(t).filter((e => !c.has(e) && ga(e)));
                if (_.forEach((i => {
                        try {
                            var o = e(t[i], n, r, !0);
                            u[i] = [o]
                        } catch (e) {
                            s.push(...e.errors)
                        }
                    })), s.length > 0) throw new hr(s);
                return _a(u)
            },
            Aa = "sq-card-iframe-container",
            Sa = "sq-card-wrapper",
            Oa = "sq-card-component",
            Ta = "sq-card-message",
            Pa = "sq-card-message-error",
            Ra = "sq-card-message-no-error",
            wa = "sq-visible",
            Na = ".".concat(Sa),
            La = ".".concat(Oa),
            ba = ".".concat(Aa),
            Da = "".concat(Na).concat(ls),
            xa = "".concat(Na).concat(us),
            Ma = "".concat(Na, " ").concat(La),
            Ua = "".concat(Na, " ").concat(ba),
            ka = "".concat(Da, " ").concat(ba),
            Ha = "".concat(xa, " ").concat(ba),
            Fa = "input",
            Ga = "form",
            Va = "label",
            Ba = ".sq-background-text",
            qa = ".sq-visible-background-text",
            ja = ".sq-card-message-error::before",
            Ya = ".sq-card-message-no-error::before",
            Ka = "".concat(ba).concat("::before"),
            Wa = "".concat(Ga).concat(ls),
            za = "".concat(Ga).concat(us),
            Za = ("".concat(Wa, " ").concat(Fa), "".concat(Fa).concat(us), "".concat(Wa, " ").concat(Fa).concat(ds), "".concat(za, " ").concat(Fa).concat(us).concat(ds), "".concat(Ga, " ").concat(Fa).concat(ds), "".concat(Ga, " ").concat(Ba)),
            Qa = ("".concat(Za, " ").concat(qa), "".concat(Wa, " ").concat(Va), "".concat(za, " ").concat(Fa).concat(us, " ~ ").concat(Va), "".concat(Wa, " ").concat(Ba, " ").concat(qa), "".concat(za, " ").concat(Fa).concat(us, " ~ ").concat(Ba, " ").concat(qa), "".concat(Ga, " ").concat("#card-number-wrapper"), ["borderWidth"]);

        function Ja(e) {
            var t = ["".concat(e).concat(us, " ").concat(Ka), "".concat(e).concat(ls, " ").concat(Ka)];
            return hs.map((e => {
                return {
                    property: "borderWidth",
                    toProperty: e,
                    toSelectors: t,
                    transformPropertyValue: (n = e, function (e) {
                        var t = Ca(n, e);
                        return "0" === t[0] ? t : "-".concat(t)
                    })
                };
                var n
            }))
        }

        function Xa(e, t) {
            return Ia(e, function (e) {
                var t = "#".concat(e);
                return {
                    allowedAttributes: {
                        [wn.CARD_COMPONENT]: Or,
                        [wn.CARD_COMPONENT_FOCUS]: Tr,
                        [wn.CARD_COMPONENT_ERROR]: Tr,
                        [wn.CARD_INPUT_HELPER_TEXT]: Pr,
                        [wn.CARD_INPUT_HELPER_ICON]: Rr,
                        [wn.CARD_INPUT_ERROR_TEXT]: Pr,
                        [wn.CARD_INPUT_ERROR_ICON]: Rr
                    },
                    selectorMappings: {
                        [wn.CARD_COMPONENT]: {
                            toSelectors: ["".concat(t).concat(Ua)]
                        },
                        [wn.CARD_COMPONENT_FOCUS]: {
                            excludeProperties: Qa,
                            toSelectors: ["".concat(t).concat(ka)]
                        },
                        [wn.CARD_COMPONENT_ERROR]: {
                            excludeProperties: Qa,
                            toSelectors: ["".concat(t).concat(Ha)]
                        },
                        [wn.CARD_INPUT_HELPER_TEXT]: {
                            toSelectors: ["".concat(t, " ").concat(".sq-card-message-no-error")]
                        },
                        [wn.CARD_INPUT_HELPER_ICON]: {
                            toSelectors: ["".concat(t, " ").concat(Ya)]
                        },
                        [wn.CARD_INPUT_ERROR_TEXT]: {
                            toSelectors: ["".concat(t, " ").concat(".sq-card-message-error")]
                        },
                        [wn.CARD_INPUT_ERROR_ICON]: {
                            toSelectors: ["".concat(t, " ").concat(ja)]
                        }
                    },
                    selectorPropertyMappings: {
                        [wn.CARD_INPUT]: [{
                            property: "backgroundColor",
                            toSelectors: ["".concat(t).concat(Ua)]
                        }],
                        [wn.CARD_COMPONENT]: [{
                            property: "borderRadius",
                            toSelectors: ["".concat(t, " ").concat(Ka), "".concat(t).concat(Ma)]
                        }, {
                            property: "borderWidth",
                            toProperty: "width",
                            toSelectors: ["".concat(t).concat(Ua)],
                            transformPropertyValue: e => function (e) {
                                var t = ["left", "right"].map((t => {
                                    var n = Ca(t, e);
                                    return "0" === n && (n = "0px"), n
                                })).join(" + ");
                                return "calc(100% - (".concat(t, "))")
                            }(e)
                        }, ...Ja(t)],
                        [wn.CARD_COMPONENT_ERROR]: [{
                            property: "borderColor",
                            toSelectors: ["".concat(t).concat(us, " ").concat(Ka)]
                        }, {
                            property: "borderWidth",
                            toSelectors: ["".concat(t).concat(us, " ").concat(Ka)]
                        }],
                        [wn.CARD_COMPONENT_FOCUS]: [{
                            property: "borderColor",
                            toSelectors: ["".concat(t).concat(ls, " ").concat(Ka)]
                        }, {
                            property: "borderWidth",
                            toSelectors: ["".concat(t).concat(ls, " ").concat(Ka)]
                        }],
                        [wn.CARD_INPUT_ERROR_ICON]: [{
                            property: "color",
                            toProperty: "backgroundColor",
                            toSelectors: ["".concat(t, " ").concat(ja)]
                        }],
                        [wn.CARD_INPUT_HELPER_ICON]: [{
                            property: "color",
                            toProperty: "backgroundColor",
                            toSelectors: ["".concat(t, " ").concat(Ya)]
                        }]
                    }
                }
            }(t), wn)
        }
        wn.CARD_INPUT, wn.CARD_INPUT_FOCUS, wn.CARD_INPUT_ERROR, wn.CARD_INPUT_PLACEHOLDER, wn.CARD_INPUT_FOCUS_PLACEHOLDER, wn.CARD_INPUT_ERROR_PLACEHOLDER, wn.CARD_INPUT, wn.CARD_INPUT_FOCUS, wn.CARD_INPUT_ERROR, wn.CARD_INPUT_FOCUS_PLACEHOLDER, wn.CARD_INPUT_ERROR_PLACEHOLDER, wn.CARD_INPUT_PLACEHOLDER, wn.CARD_COMPONENT, wn.CARD_INPUT, wn.CARD_INPUT_PLACEHOLDER, wn.CARD_INPUT_FOCUS_PLACEHOLDER, wn.CARD_INPUT_ERROR_PLACEHOLDER;
        var $a = "background-text";
        "sq-".concat($a), "sq-hidden-".concat($a), "sq-visible-".concat($a), Rn.CARD_NUMBER, "0".repeat(24), Rn.EXPIRATION_DATE, "0".repeat(4), Rn.CVV, "0".repeat(4), Rn.POSTAL_CODE;
        var ec, tc = [lr, ur, dr, hr, nr, fr],
            nc = [rr, dr, lr, ur, hr];
        ! function (e) {
            e.ANALYTICS_TOKEN = "_analyticsToken", e.LOCALE = "_locale", e.SESSION_ID = "_sessionId"
        }(ec || (ec = {}));
        class rc {
            constructor(e) {
                var {
                    applePayMerchantIdentifier: t,
                    applicationId: n,
                    avt: r,
                    hostname: i,
                    locationId: o,
                    instanceId: s,
                    sessionId: a,
                    sourceUrl: c,
                    locale: l
                } = e;
                this.applicationId = n, this.locationId = o, this._sessionId = a, this.instanceId = s, this.applePayMerchantIdentifier = t, this.hostname = i, this.sourceUrl = c, this._locale = l, this.avt = r
            }
            setSessionId(e) {
                this.setAttribute(ec.SESSION_ID, e)
            }
            setLocale(e) {
                this.setAttribute(ec.LOCALE, e)
            }
            get sessionId() {
                return this._sessionId
            }
            setAnalyticsToken(e) {
                this.setAttribute(ec.ANALYTICS_TOKEN, e)
            }
            get analyticsToken() {
                return this._analyticsToken
            }
            serialize() {
                return this.serialized || (this.serialized = {
                    applePayMerchantIdentifier: this.applePayMerchantIdentifier || "",
                    applicationId: this.applicationId,
                    avt: this.avt,
                    hostname: this.hostname,
                    instanceId: this.instanceId,
                    locale: this._locale,
                    locationId: this.locationId,
                    sessionId: this._sessionId,
                    sourceUrl: this.sourceUrl
                }, this._analyticsToken && (this.serialized.analyticsToken = this._analyticsToken)), this.serialized
            }
            setAttribute(e, t) {
                this[e] = t, this.serialized = void 0
            }
        }
        y.CARD_NONCE_ENDPOINT;
        var ic, oc = [pr, rr],
            sc = function (e, t) {
                var n = document.createElement("iframe");
                return new Promise(((r, i) => {
                    n.onerror = e => {
                        i(e)
                    }, n.onload = () => {
                        r(n)
                    }, Object.entries(e).forEach((e => {
                        var [t, r] = e;
                        n.setAttribute(t, r)
                    })), t ? t.appendChild(n) : document.body.appendChild(n)
                }))
            },
            ac = function (e) {
                for (; e.firstChild;) e.removeChild(e.firstChild)
            };
        ! function (e) {
            e.CONFIGURE = "configure", e.DESTROY = "destroy", e.LOAD_CARDS_FORM = "loadCardsForm", e.REQUEST_CARD_NONCE_IF_VALID_FORM = "requestCardNonceIfValidForm", e.SET_FOCUS = "setFocus"
        }(ic || (ic = {}));
        var cc = new Set(["DIV", "SPAN"]),
            lc = new Set(["DIV", "SPAN", "BUTTON"]);

        function uc(e, t) {
            var n;
            if (function (e) {
                    return "string" == typeof e
                }(e)) {
                var r = document.querySelector(e);
                if (!r) throw new qn(e);
                n = r
            } else {
                if (!(e instanceof HTMLElement)) throw new or(e, t);
                if (n = e, !document.contains(n)) throw new qn(n)
            }
            if (!t.has(n.nodeName)) throw new or(n, t);
            return n
        }

        function dc(e) {
            return uc(e, cc)
        }
        class hc {
            constructor(e) {
                this.id = Ao(), this.context = e
            }
            request(e, t) {
                var n = {
                    paymentMethodInstanceId: this.id,
                    paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                    session: this.context.getSession()
                };
                return this.context.messenger.request(e, {
                    options: n,
                    payload: t
                })
            }
            initializeMessageBus(e) {
                var t = this,
                    n = function (e, n) {
                        t.context.messenger.onMessage({
                            listener(e) {
                                n(e)
                            },
                            messageType: "".concat(e, ":").concat(t.id)
                        })
                    };
                for (var [r, i] of Object.entries(e)) n(r, i)
            }
        }
        var pc = {
                addStyleElement: function (e, t, n, r) {
                    if (pc.hasExistingStyleElement(t)) n && n();
                    else {
                        var i = document.createElement("link");
                        n && (i.onload = n), r && (i.onerror = t => {
                            r(new Error("Failed to load stylesheet at ".concat(e, ". The onerror callback was invoked.")))
                        }), i.href = e, i.rel = "stylesheet", i.type = "text/css", i.id = t, document.head.appendChild(i)
                    }
                },
                hasExistingStyleElement: function (e) {
                    return Boolean(document.getElementById(e))
                }
            },
            fc = pc,
            gc = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            mc = "emptyMessage",
            vc = [Rn.CARD_NUMBER, Rn.EXPIRATION_DATE, Rn.CVV, Rn.POSTAL_CODE];

        function Ec(e) {
            return "".concat("single-card-wrapper", "-").concat(e)
        }

        function _c(e, t) {
            var n = function (e) {
                    return "".concat("sq-single-card-custom-styles", "-").concat(e)
                }(t),
                r = document.getElementById(n);
            null === r && ((r = document.createElement("style")).id = n, document.head.appendChild(r)), r.innerHTML = Xa(e, Ec(t))
        }
        var yc = class extends Uo {
            constructor(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e), this.postalCountry = _i.US, this.attached = !1, this.id = Ao(), this.iframeName = "".concat("single-card", "-").concat(this.id), this.paymentMessenger = new hc(this.context), this.tokenizeInProcess = !1, this.inputLabelsIncluded = Boolean(t.includeInputLabels), this.initializeMessageBus(), this.errorList = new Set, this.updateCardDetailText = this.updateCardDetailText.bind(this), this.context.addLocaleChangedListener(this.updateCardDetailText), this.validateOptions(t), this.initialOptions = t, this.stylesLoadedPromise = new Promise(((e, t) => {
                    this.resolveStylePromise = e, this.rejectStylePromise = t
                }))
            }
            configure() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return gc(this, void 0, void 0, (function* () {
                    this.validateOptions(e), this.metricsHandler.logEvent(Wr.ConfigUpdated, e), void 0 !== e.includeInputLabels && (this.inputLabelsIncluded = Boolean(e.includeInputLabels), this.onResize()), void 0 !== e.style && _c(e.style, this.id);
                    try {
                        return yield this.paymentMessenger.request(ic.CONFIGURE, {
                            includeInputLabels: this.inputLabelsIncluded,
                            postalCode: e.postalCode,
                            style: e.style,
                            type: Dn.CARD
                        }), Promise.resolve()
                    } catch (e) {
                        if (Sn(e, nc)) throw e;
                        throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new fr("configuring the Card Element")
                    }
                }))
            }
            validateOptions(e) {
                var t = {
                    includeInputLabels: e => "boolean" == typeof e,
                    postalCode: e => "string" == typeof e,
                    style: e => "object" == typeof e
                };
                Object.entries(e).forEach((e => {
                    var [n, r] = e;
                    if (void 0 === t[n]) throw new Xn(n);
                    if (t[n] && !t[n](r)) throw new $n(n, r)
                }))
            }
            destroy() {
                return gc(this, void 0, void 0, (function* () {
                    this.context.removeLocaleChangedListener(this.updateCardDetailText), this.metricsHandler.logEvent(Wr.Destroyed);
                    var e = yield this.paymentMessenger.request(ic.DESTROY);
                    return this.element && (ac(this.element), window.removeEventListener("resize", this.onResize.bind(this))), this.attached = !1, e
                }))
            }
            attach(e) {
                return gc(this, void 0, void 0, (function* () {
                    if (this.attached) throw new nr(Dn.CARD);
                    var t;
                    this.attached = !0, this.metricsHandler.logEvent(Yr.AttachStart), this.metricsHandler.logEvent(Wr.Configured, this.initialOptions);
                    try {
                        t = dc(e)
                    } catch (e) {
                        throw this.metricsHandler.logEvent(Yr.AttachError), e
                    }
                    try {
                        return yield this.buildCardElement(t), yield this.paymentMessenger.request(ic.LOAD_CARDS_FORM, {
                            configuration: Object.assign(Object.assign({}, this.initialOptions), {
                                type: Dn.CARD
                            }),
                            iframeName: this.iframeName
                        }), yield this.stylesLoadedPromise, this.element = t, window.addEventListener("resize", this.onResize.bind(this)), this.showCardElement(), this.onResize(), this.metricsHandler.logEvent(Yr.AttachOK), Promise.resolve()
                    } catch (e) {
                        if (this.attached = !1, this.metricsHandler.logEvent(Yr.AttachError), Sn(e, tc)) throw e;
                        throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new fr("attaching the Card Element")
                    }
                }))
            }
            recalculateSize() {
                if (!this.attached) throw new rr(Dn.CARD);
                this.metricsHandler.logEvent(Wr.RecalculatedSize), this.onResize()
            }
            buildErrorMessage(e) {
                switch (e) {
                    case Rn.CARD_NUMBER:
                        return this.context.getLocaleString().paymentMethods.cards.errors.cardNumberError;
                    case Rn.CVV:
                        return this.context.getLocaleString().paymentMethods.cards.errors.cvvError;
                    case Rn.EXPIRATION_DATE:
                        return this.context.getLocaleString().paymentMethods.cards.errors.expirationDateError;
                    case Rn.POSTAL_CODE:
                        return this.context.getLocaleString().paymentMethods.cards.errors.postalCodeErrors[this.postalCountry];
                    case mc:
                    default:
                        return ""
                }
            }
            buildHelperMessage(e) {
                switch (e) {
                    case Rn.CARD_NUMBER:
                        return this.context.getLocaleString().paymentMethods.cards.helperText.cardNumber;
                    case Rn.CVV:
                        return this.context.getLocaleString().paymentMethods.cards.helperText.cvv;
                    case Rn.EXPIRATION_DATE:
                        return this.context.getLocaleString().paymentMethods.cards.helperText.expirationDate;
                    case Rn.POSTAL_CODE:
                        return this.context.getLocaleString().paymentMethods.cards.helperText.postalCodes[this.postalCountry];
                    case mc:
                    default:
                        return ""
                }
            }
            focus(e) {
                return gc(this, void 0, void 0, (function* () {
                    if (!Object.values(Rn).includes(e)) throw new Jn(e);
                    this.metricsHandler.logEvent(Wr.Focused, e);
                    try {
                        return yield this.paymentMessenger.request(ic.SET_FOCUS, {
                            field: e
                        })
                    } catch (e) {
                        this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId)
                    }
                    return !1
                }))
            }
            addEventListener(e, t) {
                this.metricsHandler.logEvent(Wr.EventListenerAdded, e), super.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                super.removeEventListener(e, t)
            }
            tokenize() {
                return gc(this, void 0, void 0, (function* () {
                    if (this.tokenizeInProcess) throw new pr([Fo]);
                    this.tokenizeInProcess = !0;
                    try {
                        var e = yield this.paymentMessenger.request(ic.REQUEST_CARD_NONCE_IF_VALID_FORM, {
                            type: Dn.CARD
                        });
                        return this.tokenizeInProcess = !1, this.context.setPaymentMethodTrackingId(e.paymentMethodTrackingId), this.context.setSessionId(e.sessionId),
                            function (e) {
                                var {
                                    card: t,
                                    cardNonce: n
                                } = e;
                                return {
                                    details: {
                                        card: t,
                                        method: Dn.CARD
                                    },
                                    status: Mn.OK,
                                    token: n
                                }
                            }(e)
                    } catch (e) {
                        if (this.tokenizeInProcess = !1, e instanceof wr) return {
                            errors: e.errors,
                            status: Mn.INVALID
                        };
                        throw Sn(e, oc) ? e : (this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), Nr())
                    }
                }))
            }
            updateCardDetailText() {
                var e, t, n;
                this.cardDetail && (0 === this.errorList.size ? (t = null !== (e = this.focusedInput) && void 0 !== e ? e : mc, n = this.buildHelperMessage(t), this.cardDetail.classList.remove(Pa), this.cardDetail.classList.add(Ra)) : (t = vc.find((e => this.errorList.has(e))) || mc, n = this.buildErrorMessage(t), this.cardDetail.classList.add(Pa), this.cardDetail.classList.remove(Ra)), this.cardDetail.textContent !== n && (this.cardDetail.textContent = n), n.length > 0 ? this.cardDetail.classList.add(wa) : this.cardDetail.classList.remove(wa))
            }
            addErrorMessage(e) {
                this.errorList.add(e), this.updateCardDetailText()
            }
            removeErrorMessage(e) {
                this.errorList.has(e) && (this.errorList.delete(e), this.updateCardDetailText())
            }
            addFocusMessage(e) {
                this.focusedInput = e, this.updateCardDetailText()
            }
            removeFocusMessage(e) {
                this.focusedInput === e && (this.focusedInput = null), setTimeout((() => {
                    null === this.focusedInput && this.updateCardDetailText()
                }), 50)
            }
            removeFocusClass() {
                setTimeout((() => {
                    var e;
                    this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(as)
                }), 50)
            }
            removeErrorClass() {
                var e;
                0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(cs))
            }
            handleInputEvent(e) {
                var t, n, {
                        data: r
                    } = e,
                    i = r.payload;
                switch (i.eventType) {
                    case Pn.ERROR_CLASS_ADDED:
                        this.addErrorMessage(i.field), null === (t = this.wrapperElement) || void 0 === t || t.classList.add(cs);
                        break;
                    case Pn.ERROR_CLASS_REMOVED:
                        this.removeErrorMessage(i.field), this.removeErrorClass();
                        break;
                    case Pn.FOCUS_CLASS_ADDED:
                        this.addFocusMessage(i.field), null === (n = this.wrapperElement) || void 0 === n || n.classList.add(as);
                        break;
                    case Pn.FOCUS_CLASS_REMOVED:
                        this.removeFocusMessage(i.field), this.removeFocusClass()
                }
                super.dispatchEvent(i.eventType, i)
            }
            handleSetPostalCountry(e) {
                var {
                    data: t
                } = e;
                this.postalCountry = t.payload.postalCountry
            }
            initializeMessageBus() {
                var e = this.handleInputEvent.bind(this),
                    t = this.handleSetPostalCountry.bind(this),
                    n = {
                        [Jo.SET_POSTAL_COUNTRY]: t,
                        [Jo.FOCUS_CLASS_ADDED]: e,
                        [Jo.FOCUS_CLASS_REMOVED]: e,
                        [Jo.ERROR_CLASS_ADDED]: e,
                        [Jo.ERROR_CLASS_REMOVED]: e,
                        [Jo.CARD_BRAND_CHANGED]: e,
                        [Jo.POSTAL_CODE_CHANGED]: e,
                        [Jo.SUBMIT]: e,
                        [Jo.ESCAPE]: e
                    };
                this.paymentMessenger.initializeMessageBus(n)
            }
            buildCardIframe(e) {
                return sc({
                    frameborder: "0",
                    height: "0px",
                    name: this.iframeName,
                    scrolling: "no",
                    src: y.SINGLE_CARD_IFRAME,
                    width: "100%"
                }, e)
            }
            hideCardElement() {
                this.wrapperElement && this.wrapperElement.setAttribute("style", "display: none;")
            }
            showCardElement() {
                this.wrapperElement && this.wrapperElement.removeAttribute("style")
            }
            buildCardElement(e) {
                var t;
                return gc(this, void 0, void 0, (function* () {
                    this.wrapperElement = document.createElement("div"), this.wrapperElement.id = Ec(this.id), this.wrapperElement.classList.add(Sa), this.hideCardElement(), this.cardDetail = document.createElement("span"), this.cardDetail.classList.add(Ta), e.appendChild(this.wrapperElement), this.iframeContainer = document.createElement("div"), this.iframeContainer.classList.add(Aa), this.wrapperElement.appendChild(this.iframeContainer), this.iframe = yield this.buildCardIframe(this.iframeContainer), this.iframe.classList.add(Oa), this.wrapperElement.appendChild(this.cardDetail), fc.addStyleElement(y.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", this.resolveStylePromise, this.rejectStylePromise), (null === (t = this.initialOptions) || void 0 === t ? void 0 : t.style) && _c(this.initialOptions.style, this.id)
                }))
            }
            onResize(e) {
                if (this.iframe && this.wrapperElement && this.iframeContainer && (this.lastResizeWidth = this.iframe.clientWidth, !this.currentResizeTimeout)) {
                    var t = e => {
                        if (this.wrapperElement && this.iframe && this.iframeContainer) {
                            var t = this.inputLabelsIncluded ? 62 : 48;
                            e <= 482 && (t = 2 * t + 1), this.iframeContainer.style.height = "".concat(Math.round(t), "px"), this.iframe.height = "".concat(Math.round(t), "px")
                        }
                    };
                    t(this.lastResizeWidth || 0), this.currentResizeTimeout = window.setTimeout((() => {
                        t(this.lastResizeWidth || 0), this.currentResizeTimeout = void 0
                    }), 100)
                }
            }
        };

        function Cc(e) {
            return {
                detail: "Received an error in redirectURI coming back from Cash App",
                message: "Received an error in redirect from Cash App: ".concat(e),
                type: "UNKNOWN"
            }
        }
        var Ic, Ac = function (e) {
                window.localStorage && window.localStorage.removeItem(e)
            },
            Sc = function (e) {
                if (window.localStorage) {
                    var t, n = window.localStorage.getItem(e);
                    if (!n) return null;
                    try {
                        t = JSON.parse(n)
                    } catch (e) {
                        return null
                    }
                    return {
                        key: e,
                        value: t
                    }
                }
                return null
            },
            Oc = function (e) {
                window.localStorage && window.localStorage.setItem(e.key, JSON.stringify(e.value))
            };
        ! function (e) {
            e.REQUEST_CASH_APP_AUTH = "REQUEST_CASH_APP_AUTH", e.REQUEST_CASH_APP_CUSTOMER = "REQUEST_CASH_APP_CUSTOMER", e.REQUEST_CASH_APP_CREATE_WALLET_TOKEN = "REQUEST_CASH_APP_CREATE_WALLET_TOKEN"
        }(Ic || (Ic = {}));
        var Tc = ["state", "code", "access_token"],
            Pc = {
                CASH_APP_OAUTH_PARAMS: Tc,
                extractCashAppParamsFromURI: function (e, t) {
                    var n = new URL(e),
                        r = 0,
                        i = [];
                    Tc.forEach((e => {
                        n.searchParams.get(e) && (r++, i.push(e), n.searchParams.delete(e))
                    }));
                    var o = n.searchParams.get("error");
                    return o && n.searchParams.delete("error"), !o && r > 0 && r !== Tc.length && t.captureException(new Fr("redirectURI: removed [".concat(i.toString(), "] but not all of Cash App OAuth params [").concat(Tc.toString(), "]"))), n.toString()
                },
                findAndRemoveQueryParams: function (e, t) {
                    var n = {};
                    if (!window.URLSearchParams) return n;
                    var r = new URLSearchParams(e),
                        i = t.length,
                        o = 0;
                    if (t.forEach((e => {
                            n[e] = r.get(e), n[e] && o++
                        })), i === o) {
                        var s = new URLSearchParams(e);
                        t.forEach((e => {
                            s.delete(e)
                        }));
                        var a = "?".concat(s.toString()),
                            c = m.windowHash;
                        c && (a += "".concat(c)), m.replaceWindowState(a)
                    }
                    return n
                }
            };
        class Rc extends $t {
            constructor() {
                super("Cash Client: QR Code Image URL is not valid"), this.name = "InvalidQrCodeUrlError", Object.setPrototypeOf(this, Rc.prototype)
            }
        }
        var wc, Nc, Lc = function (e, t, n, r) {
            return new(n || (n = Promise))((function (i, o) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(s, a)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
        ! function (e) {
            e.LIGHT = "light", e.DARK = "dark"
        }(wc || (wc = {})),
        function (e) {
            e.SQUARED = "Squared", e.SEMIROUNDED = "Semirounded", e.ROUNDED = "Rounded"
        }(Nc || (Nc = {}));
        class bc {
            constructor() {
                this.stylesLoadedPromise = new Promise(((e, t) => {
                    this.resolveStylePromise = e, this.rejectStylePromise = t
                })), fc.addStyleElement(y.CASH_APP_STYLES, "sq-cash-app-styles", this.resolveStylePromise, this.rejectStylePromise)
            }
            createCashAppButton(e) {
                return Lc(this, void 0, void 0, (function* () {
                    yield this.stylesLoadedPromise;
                    var t = document.createElement("button"),
                        n = document.createElement("img");
                    return n.setAttribute("src", function (e) {
                        switch (e) {
                            case wc.DARK:
                                return "data:image/svg+xml,%3Csvg width='88' height='23' viewBox='0 0 88 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.4218 4C12.028 4 12.8309 4 13.6956 4.27333C14.6396 4.61689 15.3831 5.36044 15.7267 6.30444C16 7.16889 16 7.97222 16 9.57844V14.4216C16 16.028 16 16.8309 15.7267 17.6956C15.3831 18.6396 14.6396 19.3831 13.6956 19.7267C12.8309 20 12.028 20 10.4218 20H5.57844C3.972 20 3.16889 20 2.30444 19.7267C1.36044 19.3831 0.616889 18.6396 0.273333 17.6956C0 16.8309 0 16.028 0 14.4216L0 9.57844C0 7.97222 0 7.16889 0.273333 6.30444C0.616889 5.36044 1.36044 4.61689 2.30444 4.27333C3.16889 4 3.972 4 5.57844 4H10.4218Z' fill='%2300D64F'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.32819 9.40498C9.10173 9.40498 9.84315 9.71821 10.3276 10.1482C10.4501 10.2569 10.6335 10.2563 10.7485 10.1398L11.3249 9.55517C11.4465 9.43178 11.4421 9.22976 11.3107 9.11701C10.9239 8.78451 10.4047 8.45755 9.76562 8.24821L9.94638 7.38739C9.98559 7.19977 9.84271 7.02344 9.65087 7.02344H8.53708C8.39464 7.02344 8.27148 7.12312 8.2418 7.26246L8.07898 8.02802C6.59835 8.10201 5.34345 8.84077 5.34345 10.3566C5.34345 11.6689 6.38171 12.2313 7.47756 12.6205C8.51582 13.0097 9.06363 13.1542 9.06363 13.702C9.06363 14.2644 8.51582 14.596 7.70816 14.596C6.97183 14.596 6.20051 14.353 5.60197 13.7629C5.48456 13.6471 5.29671 13.6462 5.17931 13.762L4.55994 14.373C4.43877 14.4924 4.43988 14.6886 4.56194 14.8069C5.04485 15.2757 5.65624 15.615 6.35402 15.8051L6.18411 16.6026C6.14446 16.7895 6.28601 16.9658 6.47741 16.9674L7.59297 16.9758C7.73651 16.9769 7.86123 16.8766 7.89047 16.7359L8.05151 15.9692C9.82432 15.8598 10.9093 14.8962 10.9093 13.4858C10.9093 12.1881 9.82809 11.6401 8.51582 11.1931C7.76598 10.9188 7.11693 10.7317 7.11693 10.1694C7.11693 9.62162 7.72278 9.40498 8.32819 9.40498Z' fill='white'/%3E%3Cpath d='M30.288 9.762L31.044 9.286C31.282 9.132 31.338 8.936 31.17 8.712C30.232 7.438 28.874 6.822 27.334 6.822C24.464 6.822 22.49 8.936 22.49 11.988C22.49 15.068 24.464 17.182 27.376 17.182C29.056 17.182 30.33 16.468 31.226 15.208C31.38 14.97 31.324 14.774 31.086 14.634L30.316 14.186C30.092 14.06 29.896 14.102 29.742 14.312C29.21 15.054 28.454 15.516 27.39 15.516C25.556 15.516 24.422 14.074 24.422 11.988C24.422 9.93 25.542 8.488 27.362 8.488C28.328 8.488 29.126 8.866 29.7 9.636C29.868 9.846 30.064 9.902 30.288 9.762ZM37.4454 17H38.2854C38.5514 17 38.7054 16.846 38.7054 16.58V11.876C38.7054 10.154 37.4874 9.44 35.7514 9.44C34.7434 9.44 33.7634 9.706 33.0074 10.112C32.7694 10.238 32.7274 10.448 32.8394 10.686L33.1054 11.232C33.2314 11.484 33.4274 11.526 33.6794 11.4C34.2954 11.092 35.0234 10.924 35.6114 10.924C36.2134 10.924 36.9274 11.092 36.9274 11.708C36.9274 12.408 36.0174 12.478 34.9534 12.632C33.9594 12.772 32.3494 13.08 32.3494 14.886C32.3494 16.342 33.3994 17.168 34.9114 17.168C35.9334 17.168 36.5774 16.804 37.0254 16.216V16.608C37.0254 16.86 37.1794 17 37.4454 17ZM36.9274 13.346V14.186C36.9274 15.292 36.1294 15.768 35.2754 15.768C34.5894 15.768 34.1134 15.46 34.1134 14.802C34.1134 14.088 34.6734 13.92 35.3174 13.794C35.9754 13.682 36.5914 13.598 36.9274 13.346ZM40.6643 15.152L40.2583 15.628C40.0903 15.838 40.0903 16.048 40.3003 16.23C41.0423 16.832 42.0503 17.168 43.2263 17.168C45.1723 17.168 46.4043 16.216 46.4043 14.676C46.4043 13.22 45.2843 12.716 43.5203 12.408C42.6943 12.268 41.8683 12.156 41.8683 11.568C41.8683 11.036 42.4563 10.84 43.1283 10.84C43.8563 10.84 44.5283 11.078 45.0043 11.414C45.2143 11.582 45.4243 11.582 45.5923 11.372L45.9843 10.91C46.1663 10.7 46.1663 10.49 45.9423 10.322C45.3123 9.846 44.3883 9.44 43.1983 9.44C41.6023 9.44 40.2023 10.126 40.2023 11.75C40.2023 13.304 41.5183 13.752 42.8763 13.99C44.1643 14.214 44.6963 14.326 44.6963 14.886C44.6963 15.502 44.1083 15.754 43.3243 15.754C42.6243 15.754 41.8683 15.572 41.2663 15.11C41.0423 14.942 40.8323 14.942 40.6643 15.152ZM48.318 17H49.256C49.522 17 49.676 16.846 49.676 16.58V12.828C49.676 11.708 50.404 11.036 51.356 11.036C52.364 11.036 52.616 11.75 52.616 12.534V16.58C52.616 16.846 52.77 17 53.036 17H53.974C54.24 17 54.394 16.846 54.394 16.58V12.128C54.394 10.546 53.484 9.44 51.93 9.44C50.95 9.44 50.152 9.874 49.676 10.532V7.424C49.676 7.158 49.522 7.004 49.256 7.004H48.318C48.052 7.004 47.898 7.158 47.898 7.424V16.58C47.898 16.846 48.052 17 48.318 17ZM67.2239 17H68.4279C68.7359 17 68.8759 16.804 68.7639 16.51L65.3759 7.34C65.2919 7.102 65.1379 7.004 64.8999 7.004H63.4019C63.1639 7.004 63.0099 7.102 62.9259 7.34L59.5239 16.51C59.4119 16.804 59.5519 17 59.8599 17H60.9939C61.2319 17 61.3999 16.888 61.4699 16.664L62.1979 14.522H66.0199L66.7479 16.664C66.8179 16.888 66.9859 17 67.2239 17ZM64.1299 8.628L65.5439 12.968H62.6599L64.1299 8.628ZM71.4006 9.608H70.4626C70.1966 9.608 70.0426 9.762 70.0426 10.028V19.016C70.0426 19.282 70.1966 19.436 70.4626 19.436H71.4006C71.6666 19.436 71.8206 19.282 71.8206 19.016V16.048C72.3386 16.804 73.1786 17.168 74.1026 17.168C76.1186 17.168 77.4206 15.488 77.4206 13.29C77.4206 11.106 76.1186 9.44 74.1026 9.44C73.1926 9.44 72.3386 9.79 71.8206 10.546V10.028C71.8206 9.762 71.6666 9.608 71.4006 9.608ZM71.8206 13.29C71.8206 12.016 72.4646 10.994 73.7246 10.994C74.9566 10.994 75.5586 12.03 75.5586 13.29C75.5586 14.564 74.9566 15.614 73.7246 15.614C72.4786 15.614 71.8206 14.578 71.8206 13.29ZM80.2906 9.608H79.3526C79.0866 9.608 78.9326 9.762 78.9326 10.028V19.016C78.9326 19.282 79.0866 19.436 79.3526 19.436H80.2906C80.5566 19.436 80.7106 19.282 80.7106 19.016V16.048C81.2286 16.804 82.0686 17.168 82.9926 17.168C85.0086 17.168 86.3106 15.488 86.3106 13.29C86.3106 11.106 85.0086 9.44 82.9926 9.44C82.0826 9.44 81.2286 9.79 80.7106 10.546V10.028C80.7106 9.762 80.5566 9.608 80.2906 9.608ZM80.7106 13.29C80.7106 12.016 81.3546 10.994 82.6146 10.994C83.8466 10.994 84.4486 12.03 84.4486 13.29C84.4486 14.564 83.8466 15.614 82.6146 15.614C81.3686 15.614 80.7106 14.578 80.7106 13.29Z' fill='white'/%3E%3C/svg%3E%0A";
                            default:
                                return "data:image/svg+xml,%3Csvg width='88' height='23' viewBox='0 0 108 23' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M13.0272 2C15.035 2 16.0386 2 17.1194 2.34167C18.2994 2.77111 19.2289 3.70056 19.6583 4.88056C20 5.96111 20 6.96528 20 8.97305V15.0269C20 17.035 20 18.0386 19.6583 19.1194C19.2289 20.2994 18.2994 21.2289 17.1194 21.6583C16.0386 22 15.035 22 13.0272 22H6.97305C4.965 22 3.96111 22 2.88056 21.6583C1.70056 21.2289 0.771111 20.2994 0.341667 19.1194C0 18.0386 0 17.035 0 15.0269L0 8.97305C0 6.96528 0 5.96111 0.341667 4.88056C0.771111 3.70056 1.70056 2.77111 2.88056 2.34167C3.96111 2 4.965 2 6.97305 2L13.0272 2Z' fill='%2300D64F'/%3E%3Cg clip-path='url(%23clip0)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10.411 8.75671C11.3779 8.75671 12.3047 9.14825 12.9102 9.68571C13.0634 9.82166 13.2926 9.82083 13.4364 9.67518L14.1568 8.94445C14.3089 8.79022 14.3033 8.53769 14.1391 8.39675C13.6557 7.98112 13.0066 7.57242 12.2078 7.31075L12.4337 6.23473C12.4827 6.0002 12.3041 5.77979 12.0643 5.77979H10.6721C10.494 5.77979 10.3401 5.90439 10.303 6.07856L10.0995 7.03552C8.24868 7.128 6.68005 8.05145 6.68005 9.94627C6.68005 11.5866 7.97787 12.2897 9.34768 12.7762C10.6455 13.2627 11.3303 13.4432 11.3303 14.128C11.3303 14.831 10.6455 15.2455 9.63593 15.2455C8.71552 15.2455 7.75137 14.9418 7.00319 14.2041C6.85643 14.0593 6.62162 14.0582 6.47487 14.203L5.70066 14.9667C5.5492 15.1159 5.55058 15.3613 5.70315 15.5091C6.30679 16.0951 7.07103 16.5193 7.94326 16.7568L7.73088 17.7537C7.68131 17.9874 7.85825 18.2078 8.09749 18.2097L9.49195 18.2202C9.67138 18.2216 9.82727 18.0962 9.86382 17.9204L10.0651 16.962C12.2811 16.8252 13.6374 15.6207 13.6374 13.8577C13.6374 12.2357 12.2858 11.5506 10.6455 10.9918C9.7082 10.649 8.89689 10.4151 8.89689 9.71229C8.89689 9.02752 9.65421 8.75671 10.411 8.75671Z' fill='white'/%3E%3C/g%3E%3Cpath d='M37.2804 8.99046L38.2214 8.39795C38.5177 8.20626 38.5874 7.96229 38.3783 7.68346C37.2107 6.09765 35.5203 5.33088 33.6034 5.33088C30.0309 5.33088 27.5738 7.96229 27.5738 11.7613C27.5738 15.5951 30.0309 18.2265 33.6557 18.2265C35.7469 18.2265 37.3327 17.3378 38.448 15.7694C38.6397 15.4731 38.57 15.2292 38.2737 15.0549L37.3153 14.4973C37.0364 14.3404 36.7925 14.3927 36.6008 14.6541C35.9386 15.5777 34.9975 16.1528 33.6731 16.1528C31.3902 16.1528 29.9787 14.3578 29.9787 11.7613C29.9787 9.19958 31.3728 7.40464 33.6382 7.40464C34.8407 7.40464 35.834 7.87516 36.5485 8.83362C36.7576 9.09502 37.0016 9.16472 37.2804 8.99046ZM46.1896 18H47.2352C47.5663 18 47.758 17.8083 47.758 17.4772V11.6219C47.758 9.4784 46.2419 8.58965 44.081 8.58965C42.8263 8.58965 41.6064 8.92075 40.6654 9.42612C40.3691 9.58296 40.3168 9.84436 40.4563 10.1406L40.7874 10.8202C40.9442 11.1339 41.1882 11.1862 41.5019 11.0294C42.2686 10.646 43.1748 10.4369 43.9067 10.4369C44.6561 10.4369 45.5448 10.646 45.5448 11.4128C45.5448 12.2841 44.4121 12.3712 43.0877 12.5629C41.8504 12.7372 39.8463 13.1206 39.8463 15.3686C39.8463 17.181 41.1533 18.2091 43.0354 18.2091C44.3075 18.2091 45.1092 17.756 45.6668 17.0241V17.5121C45.6668 17.8257 45.8585 18 46.1896 18ZM45.5448 13.4517V14.4973C45.5448 15.874 44.5515 16.4665 43.4885 16.4665C42.6346 16.4665 42.0421 16.0831 42.0421 15.264C42.0421 14.3753 42.7391 14.1662 43.5408 14.0093C44.3598 13.8699 45.1266 13.7653 45.5448 13.4517ZM50.1964 15.6997L49.691 16.2922C49.4819 16.5536 49.4819 16.815 49.7433 17.0415C50.6669 17.7909 51.9216 18.2091 53.3854 18.2091C55.8077 18.2091 57.3413 17.0241 57.3413 15.1072C57.3413 13.2948 55.9471 12.6675 53.7514 12.2841C52.7232 12.1098 51.695 11.9704 51.695 11.2385C51.695 10.5763 52.427 10.3323 53.2634 10.3323C54.1696 10.3323 55.0061 10.6286 55.5986 11.0468C55.86 11.2559 56.1214 11.2559 56.3305 10.9945L56.8185 10.4194C57.045 10.158 57.045 9.89664 56.7662 9.68752C55.982 9.09502 54.8318 8.58965 53.3506 8.58965C51.3639 8.58965 49.6213 9.44355 49.6213 11.465C49.6213 13.3994 51.2594 13.957 52.9498 14.2533C54.553 14.5321 55.2152 14.6715 55.2152 15.3686C55.2152 16.1354 54.4833 16.449 53.5074 16.449C52.6361 16.449 51.695 16.2225 50.9457 15.6474C50.6669 15.4383 50.4055 15.4383 50.1964 15.6997ZM59.7234 18H60.891C61.2221 18 61.4138 17.8083 61.4138 17.4772V12.8069C61.4138 11.4128 62.3199 10.5763 63.505 10.5763C64.7597 10.5763 65.0733 11.465 65.0733 12.4409V17.4772C65.0733 17.8083 65.265 18 65.5961 18H66.7637C67.0948 18 67.2865 17.8083 67.2865 17.4772V11.9355C67.2865 9.96635 66.1538 8.58965 64.2194 8.58965C62.9996 8.58965 62.0063 9.12987 61.4138 9.94892V6.08022C61.4138 5.74911 61.2221 5.55742 60.891 5.55742H59.7234C59.3923 5.55742 59.2006 5.74911 59.2006 6.08022V17.4772C59.2006 17.8083 59.3923 18 59.7234 18ZM83.2566 18H84.7553C85.1387 18 85.313 17.756 85.1735 17.3901L80.9563 5.97566C80.8518 5.67941 80.6601 5.55742 80.3638 5.55742H78.4992C78.2029 5.55742 78.0112 5.67941 77.9067 5.97566L73.672 17.3901C73.5326 17.756 73.7069 18 74.0902 18H75.5018C75.798 18 76.0072 17.8606 76.0943 17.5818L77.0005 14.9155H81.7579L82.6641 17.5818C82.7513 17.8606 82.9604 18 83.2566 18ZM79.4053 7.5789L81.1654 12.9811H77.5756L79.4053 7.5789ZM88.4556 8.79877H87.288C86.9569 8.79877 86.7652 8.99046 86.7652 9.32156V20.5094C86.7652 20.8405 86.9569 21.0322 87.288 21.0322H88.4556C88.7867 21.0322 88.9784 20.8405 88.9784 20.5094V16.815C89.6232 17.756 90.6688 18.2091 91.8189 18.2091C94.3284 18.2091 95.949 16.1179 95.949 13.382C95.949 10.6634 94.3284 8.58965 91.8189 8.58965C90.6862 8.58965 89.6232 9.02531 88.9784 9.96635V9.32156C88.9784 8.99046 88.7867 8.79877 88.4556 8.79877ZM88.9784 13.382C88.9784 11.7961 89.78 10.524 91.3484 10.524C92.882 10.524 93.6313 11.8136 93.6313 13.382C93.6313 14.9678 92.882 16.2748 91.3484 16.2748C89.7974 16.2748 88.9784 14.9852 88.9784 13.382ZM99.5215 8.79877H98.3539C98.0228 8.79877 97.8311 8.99046 97.8311 9.32156V20.5094C97.8311 20.8405 98.0228 21.0322 98.3539 21.0322H99.5215C99.8526 21.0322 100.044 20.8405 100.044 20.5094V16.815C100.689 17.756 101.735 18.2091 102.885 18.2091C105.394 18.2091 107.015 16.1179 107.015 13.382C107.015 10.6634 105.394 8.58965 102.885 8.58965C101.752 8.58965 100.689 9.02531 100.044 9.96635V9.32156C100.044 8.99046 99.8526 8.79877 99.5215 8.79877ZM100.044 13.382C100.044 11.7961 100.846 10.524 102.414 10.524C103.948 10.524 104.697 11.8136 104.697 13.382C104.697 14.9678 103.948 16.2748 102.414 16.2748C100.863 16.2748 100.044 14.9852 100.044 13.382Z' fill='black'/%3E%3Cdefs%3E%3CclipPath id='clip0'%3E%3Crect width='13.5714' height='13.5714' fill='white' transform='translate(3.21484 5.21436)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
                        }
                    }(e.theme)), n.classList.add("sq-cash-button-logo"), t.classList.add("sq-cash-button", function (e) {
                        switch (e) {
                            case Nc.ROUNDED:
                                return "sq-cash-button-rounded";
                            case Nc.SEMIROUNDED:
                                return "sq-cash-button-semi-rounded";
                            default:
                                return "sq-cash-button-squared"
                        }
                    }(e.shape), function (e) {
                        switch (e) {
                            case wc.DARK:
                                return "sq-cash-button-dark";
                            default:
                                return "sq-cash-button-light"
                        }
                    }(e.theme)), t.appendChild(n), t
                }))
            }
            createQrCodeContainer(e) {
                return Lc(this, void 0, void 0, (function* () {
                    if (yield this.stylesLoadedPromise, !On(e)) throw new Rc;
                    var t = document.createElement("div");
                    t.classList.add("sq-cash-qr-container");
                    var n = document.createElement("div");
                    n.classList.add("col-left");
                    var r = document.createElement("div");
                    r.classList.add("col-right");
                    var i = document.createElement("div");
                    i.classList.add("sq-cash-qr-instruction"), i.innerHTML = "<div><h3>Pay with Cash App</h3><span>Scan the QR Code to link your account</span></div>";
                    var o = document.createElement("div"),
                        s = document.createElement("img");
                    o.classList.add("sq-cash-qr-guide"), s.setAttribute("src", "data:image/svg+xml,%3Csvg width='133' height='109' viewBox='0 0 133 109' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect x='6.51207' y='2.51207' width='122.976' height='125.976' rx='14.9276' fill='%2300B843' stroke='black' stroke-width='4.97585'/%3E%3Cg clip-path='url(%23clip1)'%3E%3Cpath d='M59.7669 79.5683C60.3043 79.5683 60.6028 79.2399 60.6028 78.6727V78.1054C64.7527 77.8069 67.1112 75.0602 67.1112 71.7164C67.1112 67.5964 63.5883 66.1037 60.6028 65.3275V59.5953C61.7373 59.8341 62.633 60.3118 63.4391 61.1179C63.8272 61.506 64.2451 61.5956 64.693 61.297L65.8872 60.5506C66.3947 60.2521 66.5141 59.7744 66.126 59.3266C64.693 57.595 62.6927 56.6695 60.6028 56.4306V55.6843C60.6028 55.2066 60.3043 54.9677 59.7669 54.9677C59.2295 54.9677 58.9011 55.2961 58.9011 55.8634V56.3709C55.1692 56.5202 52.4524 58.7892 52.4524 62.4315C52.4524 66.7008 56.244 68.104 58.9011 68.7309V75.0005C57.5277 74.8512 56.1544 74.284 55.1095 72.8509C54.7512 72.3434 54.393 72.224 53.8854 72.5524L52.4822 73.4182C51.9747 73.7466 51.8553 74.1646 52.1837 74.6423C53.6764 76.6724 56.0051 77.9263 58.9011 78.1353V78.8518C58.9011 79.2996 59.2295 79.5683 59.7669 79.5683ZM56.035 62.133C56.035 60.4312 57.3486 59.5953 58.9011 59.4759V64.9095C57.2889 64.4617 56.035 63.775 56.035 62.133ZM63.6182 72.0449C63.6182 73.7167 62.5434 74.8811 60.6028 75.0602V69.1489C62.4837 69.6863 63.6182 70.3431 63.6182 72.0449Z' fill='white'/%3E%3Cpath d='M84.4025 67.1785C84.4025 61.4761 82.4619 56.1022 76.8491 56.1022C71.2065 56.1022 69.2958 61.4761 69.2958 67.1785C69.2958 72.8509 71.2065 78.195 76.8491 78.195C82.4619 78.195 84.4025 72.8509 84.4025 67.1785ZM80.372 67.1486C80.372 71.5672 79.5361 74.9408 76.8491 74.9408C74.1025 74.9408 73.2964 71.5672 73.2964 67.1486C73.2964 62.7301 74.1025 59.3863 76.8491 59.3863C79.5361 59.3863 80.372 62.7301 80.372 67.1486Z' fill='white'/%3E%3C/g%3E%3Cg filter='url(%23filter0_d)'%3E%3Ccircle cx='21.7048' cy='28.7714' r='21.7048' fill='%2300D64F'/%3E%3C/g%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.6143 24.2473C15.5832 24.6287 15.5824 25.1239 15.5824 25.8616V26.8927H13.6492V25.8616V25.8224C13.6492 25.134 13.6492 24.5594 13.6875 24.0899C13.7275 23.6003 13.814 23.1407 14.0355 22.706C14.3753 22.0391 14.9175 21.4969 15.5844 21.1571C16.0191 20.9356 16.4787 20.8491 16.9683 20.8091C17.4378 20.7708 18.0123 20.7708 18.7007 20.7708L18.7008 20.7708L18.74 20.7708H19.7711V22.704H18.74C18.0023 22.704 17.5071 22.7048 17.1258 22.7359C16.7557 22.7662 16.5788 22.8201 16.4621 22.8796C16.1589 23.0341 15.9125 23.2805 15.758 23.5836C15.6985 23.7004 15.6446 23.8773 15.6143 24.2473ZM24.239 22.704C24.9768 22.704 25.472 22.7048 25.8533 22.7359C26.2233 22.7662 26.4003 22.8201 26.517 22.8796C26.8201 23.0341 27.0666 23.2805 27.221 23.5836C27.2805 23.7004 27.3345 23.8773 27.3647 24.2473C27.3959 24.6287 27.3966 25.1239 27.3966 25.8616V26.8927H29.3299V25.8616L29.3299 25.8224V25.8223V25.8223V25.8223C29.3299 25.1339 29.3299 24.5593 29.2915 24.0899C29.2515 23.6003 29.165 23.1407 28.9436 22.706C28.6038 22.0391 28.0616 21.4969 27.3947 21.1571C26.96 20.9356 26.5003 20.8491 26.0107 20.8091C25.5413 20.7708 24.9667 20.7708 24.2782 20.7708H24.239H23.208V22.704H24.239ZM27.3966 31.3606C27.3966 32.0984 27.3959 32.5935 27.3647 32.9749C27.3345 33.3449 27.2805 33.5219 27.221 33.6386C27.0666 33.9417 26.8201 34.1882 26.517 34.3426C26.4003 34.4021 26.2233 34.4561 25.8533 34.4863C25.472 34.5175 24.9768 34.5182 24.239 34.5182H23.208V36.4514H24.239L24.2782 36.4514H24.2784H24.2784H24.2784C24.9667 36.4515 25.5413 36.4515 26.0107 36.4131C26.5003 36.3731 26.96 36.2866 27.3947 36.0651C28.0616 35.7253 28.6038 35.1831 28.9436 34.5162C29.165 34.0816 29.2515 33.6219 29.2915 33.1323C29.3299 32.6629 29.3299 32.0883 29.3299 31.3999V31.3999V31.3998V31.3998L29.3299 31.3606V30.3295H27.3966V31.3606ZM18.74 34.5182C18.0023 34.5182 17.5071 34.5175 17.1258 34.4863C16.7557 34.4561 16.5788 34.4021 16.4621 34.3426C16.1589 34.1882 15.9125 33.9417 15.758 33.6386C15.6986 33.5219 15.6446 33.3449 15.6143 32.9749C15.5832 32.5935 15.5824 32.0984 15.5824 31.3606L15.5824 30.3295H13.6492V31.3606V31.3998V31.3999C13.6492 32.0883 13.6492 32.6629 13.6875 33.1323C13.7275 33.6219 13.814 34.0816 14.0355 34.5162C14.3753 35.1831 14.9175 35.7253 15.5844 36.0651C16.0191 36.2866 16.4787 36.3731 16.9683 36.4131C17.4378 36.4515 18.0124 36.4515 18.7008 36.4514H18.7008L18.74 36.4514H19.7711V34.5182L18.74 34.5182Z' fill='white'/%3E%3Cpath d='M35.4841 2.48792C56.4982 2.48792 83.1989 2.48792 104.213 2.48792V4.97658C103.975 4.97854 103.824 4.98566 103.693 5.0117C102.953 5.15894 102.375 5.73757 102.227 6.47776C102.192 6.65801 102.192 6.87476 102.192 7.30828C102.192 7.36349 102.192 7.41522 102.192 7.46377C102.191 7.84292 102.188 8.06738 102.173 8.26281C101.932 11.4847 99.3708 14.0459 96.1488 14.2873C95.9051 14.3056 95.6164 14.3056 95.0388 14.3056H44.6583C44.0807 14.3056 43.7919 14.3056 43.5483 14.2873C40.3263 14.0459 37.7652 11.4847 37.5238 8.26281C37.5091 8.06738 37.5062 7.84292 37.5054 7.46377L37.5055 7.30828C37.5055 6.87476 37.5055 6.65801 37.4697 6.47776C37.3224 5.73757 36.7438 5.15894 36.0036 5.0117C35.8727 4.98566 35.7225 4.97854 35.4841 4.97658V2.48792Z' fill='black'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='-2.01905' y='6.05713' width='47.4476' height='47.4476' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='1.00952'/%3E%3CfeGaussianBlur stdDeviation='1.00952'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'/%3E%3CfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3CclipPath id='clip0'%3E%3Crect width='133' height='109' fill='white'/%3E%3C/clipPath%3E%3CclipPath id='clip1'%3E%3Crect x='11.5378' y='4.97597' width='116.622' height='252.524' rx='12.4396' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E"), o.appendChild(s), n.appendChild(i), n.appendChild(o);
                    var a = document.createElement("div");
                    a.classList.add("sq-cash-qr-code");
                    var c = document.createElement("img");
                    return c.setAttribute("src", e), a.appendChild(c), r.appendChild(a), t.appendChild(n), t.appendChild(r), t
                }))
            }
        }

        function Dc(e, t, n) {
            return {
                details: {
                    cashApp: {
                        cashtag: e,
                        transactionId: t
                    },
                    method: Dn.CASH_APP
                },
                status: Mn.OK,
                token: n
            }
        }
        var xc = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Mc = "sq-cash-app-redirect-payment-method-tracking-id";
        class Uc extends Uo {
            constructor(e, t) {
                if (super(e), this.preloadedQRImage = new Image, this.authTimeoutId = -1, this.elements = {
                        button: null,
                        qrCode: null
                    }, this.isCashAppNativePlatform = m.isAndroid() || m.isIOS(), this.wasFirstInteractionCalled = !1, this.cashAppClient = new bc, !this.session.locationId) throw new Wn("locationId must be provided for Cash App");
                if (this.locationId = this.session.locationId, Wo(t), t.transactionId.length > 190) throw new Wn("transactionId too long. Should be less than 100 characters.");
                var n = Pc.extractCashAppParamsFromURI(t.redirectURI, e.errorLogger);
                this.fetchAuthURLs(this.locationId, n, t.transactionId, t.totalTransactionAmount)
            }
            get willRedirect() {
                return this.isCashAppNativePlatform
            }
            fetchAuthURLs(e, t, n, r) {
                this.fetchAuthURLsPromise = (() => xc(this, void 0, void 0, (function* () {
                    var i, o = {
                            expiresIn: -1,
                            qrURL: "",
                            redirectURL: ""
                        },
                        s = 1e3,
                        a = this.willRedirect ? t : void 0,
                        c = r ? {
                            amount: r.amount,
                            currency_code: r.currencyCode
                        } : void 0,
                        l = {
                            client_id: this.session.applicationId,
                            location_id: e,
                            redirect_uri: a,
                            total_transaction_amount: c,
                            transaction_id: n
                        };
                    try {
                        var {
                            expires_in: u,
                            qr_url: d,
                            redirect_url: h,
                            transaction_id: p
                        } = yield this.messenger.request(Ic.REQUEST_CASH_APP_AUTH, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: this.session
                            },
                            payload: l
                        });
                        this.transactionId = p, o.expiresIn = u, o.qrURL = d, o.redirectURL = h, i = u, s = Math.max(vn.secondsToMs(i) - vn.minutesToMs(1), vn.minutesToMs(1)), this.willRedirect || (this.preloadedQRImage.src = d), o.expiresIn < 2147483647 ? this.authTimeoutId = window.setTimeout((() => {
                            this.errorLogger.captureException(new Fr("Cash App Auth URLS expired unexpectedly with expiry of ".concat(s, "ms")), this.session.instanceId, this.session.sessionId)
                        }), s) : this.errorLogger.captureException(new Fr("Cash App Auth URLS expires_in larger than 32 bit integer ".concat(o.expiresIn, "ms")), this.session.instanceId, this.session.sessionId)
                    } catch (e) {
                        o.error = e
                    }
                    return o
                })))()
            }
            destroy() {
                return this.metricsHandler.logEvent(Wr.Destroyed), window.clearTimeout(this.authTimeoutId), Promise.resolve()
            }
            validateAndQuerySelector(e) {
                if ("string" != typeof e) throw new TypeError("selector should be a string: ".concat(e));
                var t = document.querySelector(e);
                if (null === t) throw new qn(e);
                return t
            }
            attachAll(e, t) {
                return xc(this, void 0, void 0, (function* () {
                    this.metricsHandler.logEvent(Yr.AttachStart);
                    try {
                        if (e.button) {
                            var n = yield this.cashAppClient.createCashAppButton(Object.assign({
                                shape: Nc.SEMIROUNDED,
                                theme: wc.LIGHT
                            }, null == t ? void 0 : t.button));
                            this.elements.button = this.validateAndQuerySelector(e.button), this.elements.button.appendChild(n)
                        }
                        return this.elements.qrCode = this.validateAndQuerySelector(e.qrCode), this.metricsHandler.logEvent(Yr.AttachOK), Promise.resolve()
                    } catch (e) {
                        throw this.metricsHandler.logEvent(Yr.AttachError), e
                    }
                }))
            }
            tokenize() {
                var e;
                return xc(this, void 0, void 0, (function* () {
                    this.handleFirstInteraction();
                    var {
                        qrCode: t
                    } = this.elements;
                    if (!t) throw new rr(Dn.CASH_APP);
                    try {
                        var n = yield li.timeout((() => this.fetchAuthURLsPromise), vn.minutesToMs(1), new Fr("Precondition failed", Dn.CASH_APP));
                        if (n.error) throw n.error;
                        if (!this.transactionId) throw new Fr("expected transactionId to exist at tokenization", Dn.CASH_APP);
                        if (this.willRedirect) {
                            var r = {
                                key: Mc,
                                value: {
                                    paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                    transactionId: this.transactionId
                                }
                            };
                            return Oc(r), m.redirectTo(n.redirectURL), new Promise((() => {}))
                        }
                        var i = yield this.cashAppClient.createQrCodeContainer(n.qrURL);
                        t.appendChild(i);
                        var {
                            token: o,
                            cashtag: s,
                            paymentMethodTrackingId: a,
                            sessionId: c
                        } = yield this.messenger.request(Ic.REQUEST_CASH_APP_CREATE_WALLET_TOKEN, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: this.session
                            },
                            payload: {
                                expiresAt: Date.now() + vn.secondsToMs(n.expiresIn),
                                requestBody: {
                                    analytics_token: null !== (e = this.session.analyticsToken) && void 0 !== e ? e : "",
                                    client_id: this.session.applicationId,
                                    location_id: this.locationId,
                                    payment_method_tracking_id: this.context.getPaymentMethodTrackingId(),
                                    session_id: this.session.sessionId,
                                    transaction_id: this.transactionId,
                                    websdk_version: y.VERSION,
                                    website_url: this.session.sourceUrl
                                }
                            }
                        });
                        return this.context.setSessionId(c), this.context.setPaymentMethodTrackingId(a), Dc(s, this.transactionId, o)
                    } catch (e) {
                        return e instanceof Rc && this.errorLogger.captureException(e), zo(e, this.errorLogger)
                    }
                }))
            }
            generateWalletToken(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                return "wnon:".concat(window.btoa(JSON.stringify({
                    analytics_token: this.session.analyticsToken,
                    client_id: this.session.applicationId,
                    entry_method: "REDIRECT",
                    location_id: this.locationId,
                    payment_method_tracking_id: r,
                    session_id: e,
                    tender: {
                        brand: "CASH_APP",
                        preauth_idempotency_key: t,
                        transaction_id: n
                    },
                    websdk_version: y.VERSION,
                    website_url: this.session.sourceUrl
                })))
            }
            getRedirectResult() {
                var e;
                return xc(this, void 0, void 0, (function* () {
                    var {
                        error: t
                    } = Pc.findAndRemoveQueryParams(window.location.search, ["error"]);
                    if (t) {
                        var n = new pr([Cc(t)]);
                        return this.errorLogger.captureException(n), zo(n, this.errorLogger)
                    }
                    var r, i, o, s, {
                        state: a,
                        code: c,
                        access_token: l
                    } = Pc.findAndRemoveQueryParams(window.location.search, Pc.CASH_APP_OAUTH_PARAMS);
                    if (!a || !c || !l) return null;
                    try {
                        var u = function (e) {
                            var t = e.split(":");
                            if (3 !== t.length) throw new Fr("Invalid transaction ID: could not separate");
                            return t
                        }(i = function (e) {
                            var {
                                transaction_id: t
                            } = JSON.parse(e);
                            if (void 0 === t) throw new Fr("Malformed state in redirect query params: ".concat(e));
                            return t
                        }(a));
                        r = u[0], o = u[1]
                    } catch (e) {
                        return zo(e, this.errorLogger)
                    }
                    var d = Sc(Mc);
                    null !== d && i === (null === (e = d.value) || void 0 === e ? void 0 : e.transactionId) && (s = d.value.paymentMethodTrackingId), Ac(Mc);
                    var h = e => {
                        this.context.metricsHandler.metricsLogger.logEvent({
                            event: e,
                            eventSource: this.context.metricsHandler.eventSource
                        }, this.session.instanceId, r, s)
                    };
                    h(Yr.NonceStart);
                    try {
                        var p = yield this.messenger.request(Ic.REQUEST_CASH_APP_CUSTOMER, {
                            options: {
                                session: Object.assign({}, this.session, {
                                    paymentMethodTrackingId: s,
                                    sessionId: r
                                })
                            },
                            payload: l
                        }), f = this.generateWalletToken(r, c, i, s);
                        return h(Yr.NonceOK), Dc(p, o, f)
                    } catch (e) {
                        return h(Yr.NonceError), zo(e, this.errorLogger)
                    }
                }))
            }
            handleFirstInteraction() {
                this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(Yr.FirstInteraction))
            }
        }
        Nn.GIFT_CARD_NUMBER, Nn.GIFT_CARD_NUMBER, "0".repeat(24);
        var kc, Hc = [lr, ur, dr, hr, nr, fr];
        ! function (e) {
            e.CONFIGURE = "giftCardConfigure", e.DESTROY = "giftCardDestroy", e.LOAD_GIFT_CARDS_FORM = "loadGiftCardsForm", e.REQUEST_CARD_NONCE_IF_VALID_FORM = "giftCardRequestCardNonceIfValidForm", e.SET_FOCUS = "giftCardSetFocus"
        }(kc || (kc = {}));
        var Fc = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Gc = "emptyMessage",
            Vc = [Nn.GIFT_CARD_NUMBER];
        class Bc extends Uo {
            constructor(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(e), this.attached = !1, this.id = Ao(), this.iframeName = "".concat("gift-card", "-").concat(this.id), this.paymentMessenger = new hc(this.context), this.tokenizeInProcess = !1, this.inputLabelsIncluded = Boolean(null == t ? void 0 : t.includeInputLabels), this.initializeMessageBus(), this.validateOptions(t), this.initialOptions = t || {}, this.errorList = new Set, this.stylesLoadedPromise = new Promise(((e, t) => {
                    this.resolveStylePromise = e, this.rejectStylePromise = t
                }))
            }
            attach(e) {
                return Fc(this, void 0, void 0, (function* () {
                    if (this.attached) throw new nr(Dn.GIFT_CARD);
                    var t;
                    this.attached = !0, this.metricsHandler.logEvent(Yr.AttachStart), this.metricsHandler.logEvent(Wr.Configured, this.initialOptions);
                    try {
                        t = dc(e)
                    } catch (e) {
                        throw this.metricsHandler.logEvent(Yr.AttachError), e
                    }
                    try {
                        return yield this.buildCardElement(t), yield this.paymentMessenger.request(kc.LOAD_GIFT_CARDS_FORM, {
                            configuration: Object.assign(Object.assign({}, this.initialOptions), {
                                type: Dn.GIFT_CARD
                            }),
                            iframeName: this.iframeName
                        }), yield this.stylesLoadedPromise, this.element = t, window.addEventListener("resize", this.onResize.bind(this)), this.showCardElement(), this.onResize(), this.metricsHandler.logEvent(Yr.AttachOK), Promise.resolve()
                    } catch (e) {
                        if (this.attached = !1, this.metricsHandler.logEvent(Yr.AttachError), Sn(e, Hc)) throw e;
                        throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new fr("attaching the Gift Card Element")
                    }
                }))
            }
            configure(e) {
                return Fc(this, void 0, void 0, (function* () {
                    this.validateOptions(e), void 0 !== (null == e ? void 0 : e.includeInputLabels) && (this.inputLabelsIncluded = Boolean(null == e ? void 0 : e.includeInputLabels), this.onResize()), void 0 !== e.style && jc(e.style, this.id), this.metricsHandler.logEvent(Wr.ConfigUpdated, e);
                    try {
                        return void(yield this.paymentMessenger.request(kc.CONFIGURE, {
                            includeInputLabels: this.inputLabelsIncluded,
                            style: e.style,
                            type: Dn.GIFT_CARD
                        }))
                    } catch (e) {
                        if (Sn(e, nc)) throw e;
                        throw this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), new fr("configuring the Gift Card Element")
                    }
                }))
            }
            validateOptions(e) {
                var t = {
                    includeInputLabels: e => "boolean" == typeof e,
                    style: e => "object" == typeof e
                };
                Object.entries(e).forEach((e => {
                    var [n, r] = e;
                    if (void 0 === t[n]) throw new Xn(n);
                    if (t[n] && !t[n](r)) throw new $n(n, r)
                }))
            }
            destroy() {
                return Fc(this, void 0, void 0, (function* () {
                    this.metricsHandler.logEvent(Wr.Destroyed);
                    var e = yield this.paymentMessenger.request(kc.DESTROY);
                    return this.element && (ac(this.element), window.removeEventListener("resize", this.onResize.bind(this))), this.attached = !1, e
                }))
            }
            focus(e) {
                return Fc(this, void 0, void 0, (function* () {
                    if (!Object.values(Nn).includes(e)) throw new Jn(e);
                    this.metricsHandler.logEvent(Wr.Focused, e);
                    try {
                        return yield this.paymentMessenger.request(kc.SET_FOCUS, {
                            field: e
                        })
                    } catch (e) {
                        this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId)
                    }
                    return !1
                }))
            }
            addEventListener(e, t) {
                this.metricsHandler.logEvent(Wr.EventListenerAdded, e), super.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                super.removeEventListener(e, t)
            }
            tokenize() {
                return Fc(this, void 0, void 0, (function* () {
                    if (this.tokenizeInProcess) throw new pr([Fo]);
                    this.tokenizeInProcess = !0;
                    try {
                        var e = yield this.paymentMessenger.request(kc.REQUEST_CARD_NONCE_IF_VALID_FORM, {
                            type: Dn.GIFT_CARD
                        });
                        return this.tokenizeInProcess = !1, this.context.setPaymentMethodTrackingId(e.paymentMethodTrackingId), this.context.setSessionId(e.sessionId),
                            function (e) {
                                var {
                                    card: t,
                                    cardNonce: n
                                } = e;
                                return {
                                    details: {
                                        giftCard: t,
                                        method: Dn.GIFT_CARD
                                    },
                                    status: Mn.OK,
                                    token: n
                                }
                            }(e)
                    } catch (e) {
                        if (this.tokenizeInProcess = !1, e instanceof wr) return {
                            errors: e.errors,
                            status: Mn.INVALID
                        };
                        throw Sn(e, oc) ? e : (this.errorLogger.captureException(e, this.session.instanceId, this.session.sessionId), Nr())
                    }
                }))
            }
            buildCardElement(e) {
                var t;
                return Fc(this, void 0, void 0, (function* () {
                    this.wrapperElement = document.createElement("div"), this.wrapperElement.id = qc(this.id), this.wrapperElement.classList.add(Sa), this.hideCardElement(), this.cardDetail = document.createElement("span"), this.cardDetail.classList.add(Ta), e.appendChild(this.wrapperElement), this.iframeContainer = document.createElement("div"), this.iframeContainer.classList.add(Aa), this.wrapperElement.appendChild(this.iframeContainer), this.iframe = yield this.buildCardIframe(this.iframeContainer), this.iframe.classList.add(Oa), this.wrapperElement.appendChild(this.cardDetail), fc.addStyleElement(y.SINGLE_CARD_WRAPPER_STYLES, "sq-single-card-styles", this.resolveStylePromise, this.rejectStylePromise), (null === (t = this.initialOptions) || void 0 === t ? void 0 : t.style) && jc(this.initialOptions.style, this.id)
                }))
            }
            buildCardIframe(e) {
                return sc({
                    frameborder: "0",
                    height: "0px",
                    name: this.iframeName,
                    scrolling: "no",
                    src: y.GIFT_CARD_IFRAME,
                    width: "100%"
                }, e)
            }
            hideCardElement() {
                this.wrapperElement && this.wrapperElement.setAttribute("style", "display: none;")
            }
            showCardElement() {
                this.wrapperElement && this.wrapperElement.removeAttribute("style")
            }
            onResize(e) {
                if (this.iframe && this.wrapperElement && this.iframeContainer && !this.currentResizeTimeout) {
                    var t = () => {
                        if (this.wrapperElement && this.iframe && this.iframeContainer) {
                            var e = this.inputLabelsIncluded ? 62 : 48;
                            e += 2, this.iframe.style.height = "".concat(e, "px"), this.iframeContainer.style.height = "".concat(Math.round(e), "px")
                        }
                    };
                    t(), this.currentResizeTimeout = window.setTimeout((() => {
                        t(), this.currentResizeTimeout = void 0
                    }), 100)
                }
            }
            updateCardDetailText() {
                var e, t, n;
                this.cardDetail && (0 === this.errorList.size ? (t = null !== (e = this.focusedInput) && void 0 !== e ? e : Gc, n = this.buildHelperMessage(t), this.cardDetail.classList.remove(Pa), this.cardDetail.classList.add(Ra)) : (t = Vc.find((e => this.errorList.has(e))) || Vc[0], n = this.buildErrorMessage(t), this.cardDetail.classList.add(Pa), this.cardDetail.classList.remove(Ra)), this.cardDetail.textContent !== n && (this.cardDetail.textContent = n), n.length > 0 ? this.cardDetail.classList.add(wa) : this.cardDetail.classList.remove(wa))
            }
            addErrorMessage(e) {
                this.errorList.add(e), this.updateCardDetailText()
            }
            removeErrorMessage(e) {
                this.errorList.has(e) && (this.errorList.delete(e), this.updateCardDetailText())
            }
            addFocusMessage(e) {
                this.focusedInput = e, this.updateCardDetailText()
            }
            removeFocusMessage(e) {
                this.focusedInput === e && (this.focusedInput = null), setTimeout((() => {
                    null === this.focusedInput && this.updateCardDetailText()
                }), 50)
            }
            handleInputEvent(e) {
                var t, n, {
                        data: r
                    } = e,
                    i = r.payload;
                switch (i.eventType) {
                    case Pn.ERROR_CLASS_ADDED:
                        this.addErrorMessage(i.field), null === (t = this.wrapperElement) || void 0 === t || t.classList.add(cs);
                        break;
                    case Pn.ERROR_CLASS_REMOVED:
                        this.removeErrorMessage(i.field), this.removeErrorClass();
                        break;
                    case Pn.FOCUS_CLASS_ADDED:
                        this.addFocusMessage(i.field), null === (n = this.wrapperElement) || void 0 === n || n.classList.add(as);
                        break;
                    case Pn.FOCUS_CLASS_REMOVED:
                        this.removeFocusMessage(i.field), this.removeFocusClass()
                }
                super.dispatchEvent(i.eventType, i)
            }
            removeFocusClass() {
                setTimeout((() => {
                    var e;
                    this.focusedInput || null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(as)
                }), 50)
            }
            removeErrorClass() {
                var e;
                0 === this.errorList.size && (null === (e = this.wrapperElement) || void 0 === e || e.classList.remove(cs))
            }
            initializeMessageBus() {
                var e = this.handleInputEvent.bind(this),
                    t = {
                        [Jo.FOCUS_CLASS_ADDED]: e,
                        [Jo.FOCUS_CLASS_REMOVED]: e,
                        [Jo.ERROR_CLASS_ADDED]: e,
                        [Jo.ERROR_CLASS_REMOVED]: e,
                        [Jo.CARD_BRAND_CHANGED]: e,
                        [Jo.SUBMIT]: e,
                        [Jo.ESCAPE]: e
                    };
                this.paymentMessenger.initializeMessageBus(t)
            }
            buildErrorMessage(e) {
                switch (e) {
                    case Nn.GIFT_CARD_NUMBER:
                        return this.context.getLocaleString().paymentMethods.giftCards.errors.giftCardNumberError;
                    case Gc:
                    default:
                        return ""
                }
            }
            buildHelperMessage(e) {
                switch (e) {
                    case Nn.GIFT_CARD_NUMBER:
                        return this.context.getLocaleString().paymentMethods.giftCards.helperText.giftCardNumber;
                    case Gc:
                    default:
                        return ""
                }
            }
        }

        function qc(e) {
            return "".concat("gift-card-wrapper", "-").concat(e)
        }

        function jc(e, t) {
            var n = function (e) {
                    return "".concat("sq-gift-card-custom-styles", "-").concat(e)
                }(t),
                r = document.getElementById(n);
            null === r && ((r = document.createElement("style")).id = n, document.head.appendChild(r)), r.innerHTML = Xa(e, qc(t))
        }
        class Yc extends $t {
            constructor(e) {
                super("The event listener for ".concat(e, " timed out (30 seconds). If you've returned a promise, ensure it is resolving")), this.name = "EventListenerTimeoutError", Object.setPrototypeOf(this, Yc.prototype)
            }
        }
        class Kc extends Co {
            constructor() {
                super(), this.listeners = {}, this.listeners = {}
            }
            dispatchEvent(e, t, n) {
                return r = this, i = void 0, s = function* () {
                    if (e in this.listeners)
                        for (var r = new gr(e, t), i = this.listeners[e].slice(), o = function* (t, o) {
                                var s = void 0;
                                try {
                                    s = i[t](r)
                                } catch (t) {
                                    throw new Kn(e, t.message)
                                }
                                var a = void 0;
                                if (s instanceof Promise) try {
                                    a = yield li.timeout((() => s), 3e4, new Yc(e))
                                } catch (t) {
                                    if (t instanceof Yc) throw t;
                                    throw new Kn(e, t.message)
                                } else a = s;
                                n && n(a)
                            }, s = 0, a = i.length; s < a; s++) yield* o(s)
                }, new((o = void 0) || (o = Promise))((function (e, t) {
                    function n(e) {
                        try {
                            c(s.next(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(s.throw(e))
                        } catch (e) {
                            t(e)
                        }
                    }

                    function c(t) {
                        var r;
                        t.done ? e(t.value) : (r = t.value, r instanceof o ? r : new o((function (e) {
                            e(r)
                        }))).then(n, a)
                    }
                    c((s = s.apply(r, i || [])).next())
                }));
                var r, i, o, s
            }
        }

        function Wc(e, t) {
            if ("object" != typeof e) return {
                isValid: !1,
                missingFields: []
            };
            var n = [];
            return {
                isValid: Object.entries(t).map((r => {
                    var [i, o] = r;
                    if ("object" == typeof o) {
                        var {
                            isValid: s,
                            missingFields: a
                        } = Wc(e[i] || {}, t[i]);
                        return a.forEach((e => {
                            var [t, r] = e;
                            n.push(["".concat(i, ".").concat(t), r])
                        })), s
                    }
                    return i in e && typeof e[i] === o || (n.push([i, o]), !1)
                })).every((e => e)),
                missingFields: n
            }
        }

        function zc(e, t, n) {
            if (!Array.isArray(e)) return {
                isValid: !1,
                missingFields: [
                    [t, "Array"]
                ]
            };
            var r = e.reduce(((e, r) => {
                var i = Wc({
                        [t]: r
                    }, {
                        [t]: n
                    }),
                    o = An(i.missingFields);
                return {
                    isValid: e.isValid && i.isValid,
                    missingFieldsMap: Object.assign({}, e.missingFieldsMap, o)
                }
            }), {
                isValid: !0,
                missingFieldsMap: {}
            });
            return {
                isValid: r.isValid,
                missingFields: Object.entries(r.missingFieldsMap)
            }
        }
        var Zc, Qc = {
                amount: "string",
                label: "string"
            },
            Jc = {
                amount: "string",
                id: "string",
                label: "string"
            },
            Xc = {
                amount: "string",
                label: "string"
            },
            $c = {},
            el = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            };
        class tl {
            constructor(e, t, n, r) {
                this.eventTarget = new Kc, this.localeStrings = t, this._requestBillingContact = Boolean(e.requestBillingContact), this._requestShippingContact = Boolean(e.requestShippingContact), this._countryCode = e.countryCode, this._currencyCode = e.currencyCode, this._lineItems = e.lineItems, this._total = e.total, this._shippingOptions = e.shippingOptions, this._shippingContact = e.shippingContact, this.updateLock = n, this.metricsLogger = r
            }
            get requestBillingContact() {
                return this._requestBillingContact
            }
            get requestShippingContact() {
                return this._requestShippingContact
            }
            get countryCode() {
                return this._countryCode
            }
            get currencyCode() {
                return this._currencyCode
            }
            get lineItems() {
                return this._lineItems
            }
            get total() {
                return this._total
            }
            get shippingOptions() {
                return this._shippingOptions
            }
            get shippingContact() {
                return this._shippingContact
            }
            update(e) {
                var {
                    isValid: t,
                    missingFields: n
                } = rl(new tl(Object.assign({
                    countryCode: this.countryCode,
                    currencyCode: this.currencyCode,
                    lineItems: this.lineItems,
                    requestBillingContact: this.requestBillingContact,
                    requestShippingContact: this.requestShippingContact,
                    shippingContact: this.shippingContact,
                    shippingOptions: this.shippingOptions,
                    total: this.total
                }, e), this.localeStrings, this.updateLock, this.metricsLogger));
                if (!t) throw new jn(n);
                return !this.updateLock.isLocked && (e.requestBillingContact && (this._requestBillingContact = Boolean(e.requestBillingContact)), e.requestShippingContact && (this._requestShippingContact = Boolean(e.requestShippingContact)), e.countryCode && (this._countryCode = e.countryCode), e.currencyCode && (this._currencyCode = e.currencyCode), e.lineItems && (this._lineItems = e.lineItems), e.total && (this._total = e.total), e.shippingOptions && (this._shippingOptions = e.shippingOptions), e.shippingContact && (this._shippingContact = e.shippingContact), !0)
            }
            addEventListener(e, t) {
                switch (this.metricsLogger.logEvent({
                    event: Wr.EventListenerAdded,
                    eventConfigurationValues: e,
                    eventSource: Jr.PaymentRequest
                }), e) {
                    case xn.SHIPPING_CONTACT_CHANGED:
                        this.shippingContactEventListener(t);
                        break;
                    case xn.SHIPPING_OPTION_CHANGED:
                        this.shippingOptionEventListener(t);
                        break;
                    default:
                        throw new _o("PaymentRequest.addEventListener", "event", "PaymentRequestEvent")
                }
            }
            dispatchEvent(e, t, n) {
                return this.eventTarget.dispatchEvent(e, t, (e => {
                    var t = function (e) {
                        var {
                            lineItems: t,
                            shippingErrors: n,
                            shippingOptions: r,
                            error: i,
                            total: o
                        } = e;
                        if (t) {
                            var s = zc(t, "lineItem", Qc);
                            if (!s.isValid) return s
                        }
                        if (r) {
                            var a = zc(r, "shippingOption", Jc);
                            if (!a.isValid) return a
                        }
                        if (o) {
                            var c = Wc({
                                total: o
                            }, {
                                total: Xc
                            });
                            if (!c.isValid) return c
                        }
                        if (i && "string" != typeof i) return {
                            isValid: !1,
                            missingFields: [
                                ["error", "string"]
                            ]
                        };
                        if (n) {
                            var l = Wc(n, $c);
                            if (!l.isValid) return l
                        }
                        return {
                            isValid: !0,
                            missingFields: []
                        }
                    }(e);
                    if (!t.isValid) throw new Yn(t.missingFields);
                    n(e)
                }))
            }
            hasEventListener(e) {
                return this.eventTarget.hasEventListener(e)
            }
            shippingContactEventListener(e) {
                this.eventTarget.addEventListener(xn.SHIPPING_CONTACT_CHANGED, (t => el(this, void 0, void 0, (function* () {
                    var {
                        contactOrOption: n
                    } = t.detail;
                    try {
                        return yield e(n)
                    } catch (e) {
                        return console.error("ShippingContactUpdateError", e), {
                            error: this.localeStrings.getLocaleString().paymentMethods.wallets.callbackErrors.optionsError
                        }
                    }
                }))))
            }
            shippingOptionEventListener(e) {
                this.eventTarget.addEventListener(xn.SHIPPING_OPTION_CHANGED, (t => el(this, void 0, void 0, (function* () {
                    var {
                        contactOrOption: n
                    } = t.detail;
                    try {
                        return yield e(n)
                    } catch (e) {
                        return console.error("ShippingOptionUpdateError", e), {
                            error: this.localeStrings.getLocaleString().paymentMethods.wallets.callbackErrors.optionsError
                        }
                    }
                }))))
            }
        }

        function nl(e) {
            return Boolean(e.shippingOptions && e.shippingOptions.length > 0)
        }

        function rl(e) {
            return Wc(e, {
                countryCode: "string",
                currencyCode: "string",
                total: {
                    amount: "string",
                    label: "string"
                }
            })
        }
        class il {
            constructor() {
                this.lockSet = new Set
            }
            lock(e) {
                this.lockSet.add(e)
            }
            unlock(e) {
                this.lockSet.delete(e)
            }
            get isLocked() {
                return this.lockSet.size > 0
            }
        }! function (e) {
            e.REQUEST_HYDRATION = "REQUEST_HYDRATION"
        }(Zc || (Zc = {}));
        var ol = function (e) {
                var t = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = new URL(y.IFRAME_SRC);
                    return Object.entries(e).forEach((e => {
                        var [n, r] = e;
                        t.searchParams.set(n, r)
                    })), t.toString()
                }(e);
                return sc({
                    frameborder: "0",
                    height: "0",
                    scrolling: "no",
                    src: t,
                    style: "border: none !important; display: block !important; visibility: hidden !important",
                    width: "0"
                })
            },
            sl = function (e) {
                var t = new(ti[e.name] || $t);
                return t.fromSerializedError(e), t
            },
            al = function (e) {
                var t = e;
                return !0 === t._isSerializedError && void 0 !== t.name && void 0 !== t.message
            },
            cl = function (e) {
                return {
                    _isSerializedError: !0,
                    errors: e.errors,
                    message: e.message,
                    name: e.name
                }
            },
            ll = "channel:connected",
            ul = "channel:connecting",
            dl = "channel:close",
            hl = "channel:error";
        class pl {
            constructor(e) {
                this.receiveMessage = e => {
                    switch (e.data) {
                        case this.messageWithName(ul):
                            this.handleConnecting(e);
                            break;
                        case this.messageWithName(ll):
                            this.handleConnected();
                            break;
                        case this.messageWithName(dl):
                            this.close();
                            break;
                        case this.messageWithName(hl):
                            break;
                        default:
                            this.handleMessage(e)
                    }
                }, this.connected = !1, this.listeners = [], this.messageBuffer = [], this.name = e ? ":".concat(e) : ""
            }
            close() {
                this.port && (this.postMessage(this.messageWithName(dl)), this.port.close(), this.port = void 0, this.connected || window.removeEventListener("message", this.receiveMessage)), this.connected = !1
            }
            connect(e) {
                if (this.connected) throw new Fr("message channel is already connected");
                if (e) {
                    if (void 0 === e.origin) throw new Fr("message channel remote.origin must be defined");
                    if (null === e.window) throw new Fr("message channel remote.window cannot be null");
                    var t = new MessageChannel;
                    this.setupPort(t.port1), e.window.postMessage(this.messageWithName(ul), e.origin, [t.port2])
                } else window.addEventListener("message", this.receiveMessage)
            }
            setErrorLogger(e) {
                this.errorLogger = e
            }
            handleConnecting(e) {
                if (this.connected) throw new Fr("message channel should not be connecting because already connected");
                window.removeEventListener("message", this.receiveMessage), this.setupPort(e.ports[0]), this.postMessage(this.messageWithName(ll)), this.connectionEstablished()
            }
            handleConnected() {
                if (this.connected) throw new Fr("message channel already connected");
                this.connectionEstablished()
            }
            connectionEstablished() {
                for (this.connected = !0; this.messageBuffer.length > 0;) this.postMessage(this.messageBuffer.shift())
            }
            handleMessage(e) {
                this.listeners.forEach((t => {
                    t(e)
                }))
            }
            setupPort(e) {
                this.port = e, this.port.onmessage = this.receiveMessage, this.port.onmessageerror = e => {
                    this.postMessage(this.messageWithName(hl)), this.errorLogger && this.errorLogger.captureException(new Fr("message channel failed to deserialize message: ".concat(JSON.stringify(e))))
                }
            }
            set onmessage(e) {
                this.listeners.push(e)
            }
            postMessage(e) {
                this.port && this.connected ? this.port.postMessage(e) : this.messageBuffer.push(e)
            }
            messageWithName(e) {
                return e + this.name
            }
        }
        var fl, gl = vn.secondsToMs(128),
            ml = vn.secondsToMs(2);
        ! function (e) {
            e.ACK = "ack", e.OK = "ok", e.ERROR = "error"
        }(fl || (fl = {}));
        class vl {
            constructor(e) {
                this.messageListeners = {}, this.channel = new pl(e), this.channel.onmessage = this.handleMessage.bind(this)
            }
            setErrorLogger(e) {
                this.errorLogger = e, this.channel.setErrorLogger(e)
            }
            sendOneWayMessage(e, t) {
                var {
                    payload: n,
                    options: r
                } = t || {}, {
                    session: i,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s
                } = r || {};
                return this.message({
                    id: this.uniqueId(),
                    mustAcknowledge: !1,
                    mustRespond: !1,
                    payload: n,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s,
                    session: i,
                    type: e
                })
            }
            sendMessage(e, t) {
                var {
                    payload: n,
                    options: r
                } = t || {}, {
                    session: i,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s
                } = r || {};
                return this.message({
                    id: this.uniqueId(),
                    mustAcknowledge: !0,
                    mustRespond: !1,
                    payload: n,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s,
                    session: i,
                    type: e
                })
            }
            request(e, t) {
                var {
                    payload: n,
                    options: r
                } = t || {}, {
                    session: i,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s
                } = r || {};
                return this.message({
                    id: this.uniqueId(),
                    mustAcknowledge: !0,
                    mustRespond: !0,
                    payload: n,
                    paymentMethodInstanceId: o,
                    paymentMethodTrackingId: s,
                    session: i,
                    type: e
                })
            }
            respond(e, t) {
                var n = "".concat(e.type, ":").concat(fl.OK);
                return this.postResponse(n, e, t)
            }
            reject(e, t) {
                var n = "".concat(e.type, ":").concat(fl.ERROR);
                if (t instanceof $t) {
                    var r = cl(t);
                    return this.postResponse(n, e, r)
                }
                return this.postResponse(n, e, t)
            }
            onMessage(e, t) {
                var n = t || this.uniqueId();
                return this.addMessageEventListener(e, n), n
            }
            connect(e, t) {
                this.iframeID = t, this.channel.connect(e)
            }
            close() {
                this.channel.close()
            }
            handleMessage(e) {
                var t, n = this.messageListeners[e.data.type];
                e.data.type && "undefined" !== e.data.type ? n ? (e.data.mustAcknowledge && this.acknowledge(e.data), Object.values(n).forEach((t => {
                    t.forEach((t => {
                        t(e)
                    }))
                }))) : "development" === y.env && console.error(new Fr("Listener does not exist for ".concat(e.data.type, ", it must be added to message-bus"))) : null === (t = this.errorLogger) || void 0 === t || t.captureException(new Fr("Received a messenger message with an undefined type"))
            }
            logMessengerTimeout(e, t) {
                var n, r, i = new Vr(e.type, e.id, this.iframeID),
                    o = {
                        iframeID: String(this.iframeID),
                        messageId: String(e.id),
                        timeoutSeconds: String(vn.msToSeconds(t))
                    };
                this.errorLogger && this.errorLogger.captureException(i, null === (n = e.session) || void 0 === n ? void 0 : n.instanceId, null === (r = e.session) || void 0 === r ? void 0 : r.sessionId, o)
            }
            handleMessageContract(e) {
                if (!e.mustAcknowledge) return new Promise((e => {
                    e({})
                }));
                var t, n, r = () => {
                        [fl.ACK, fl.OK, fl.ERROR].forEach((n => {
                            delete this.messageListeners["".concat(e.type, ":").concat(n)][t]
                        }))
                    },
                    i = ml,
                    o = 0,
                    s = () => {
                        if (o < gl) {
                            var t = i - o;
                            n = window.setTimeout((() => {
                                o += t, this.logMessengerTimeout(e, o), s()
                            }), t), i *= 2
                        }
                    };
                return s(), new Promise(((i, o) => {
                    t = this.onMessage({
                        listener() {
                            clearTimeout(n), e.mustRespond || (r(), i({}))
                        },
                        messageType: "".concat(e.type, ":").concat(fl.ACK)
                    }), this.onMessage({
                        listener(e) {
                            r(), i(e.data.payload)
                        },
                        messageType: "".concat(e.type, ":").concat(fl.OK)
                    }, t), this.onMessage({
                        listener(e) {
                            r();
                            var {
                                payload: t
                            } = e.data;
                            if (al(t)) {
                                var n = sl(t);
                                o(n)
                            } else o(t)
                        },
                        messageType: "".concat(e.type, ":").concat(fl.ERROR)
                    }, t)
                }))
            }
            acknowledge(e) {
                var t = "".concat(e.type, ":").concat(fl.ACK);
                return this.message({
                    id: e.id,
                    mustAcknowledge: !1,
                    mustRespond: !1,
                    type: t
                })
            }
            postResponse(e, t, n) {
                return this.message({
                    id: t.id,
                    mustAcknowledge: !0,
                    mustRespond: !1,
                    payload: n,
                    type: e
                })
            }
            message(e) {
                var t, n = this.handleMessageContract(e);
                return e.type && "undefined" !== e.type || null === (t = this.errorLogger) || void 0 === t || t.captureException(new Fr("Attempting to send a messenger message with an undefined type")), this.channel.postMessage(e), n
            }
            addMessageEventListener(e, t) {
                var {
                    messageType: n,
                    listener: r
                } = e;
                this.messageListeners[n] = this.messageListeners[n] || {}, this.messageListeners[n][t] = this.messageListeners[n][t] || [], this.messageListeners[n][t].push(r)
            }
            uniqueId() {
                return Date.now().toString() + Math.floor(8e3 * Math.random())
            }
        }
        var El, _l = {
                build: function (e, t, n, r) {
                    return i = this, o = void 0, a = function* () {
                        var i = new vl(r);
                        return i.setErrorLogger(t), i.connect({
                            origin: y.ASSET_URL,
                            window: e.contentWindow
                        }, e.id), yield i.sendMessage("INITIALIZE", {
                            payload: n
                        }), i
                    }, new((s = void 0) || (s = Promise))((function (e, t) {
                        function n(e) {
                            try {
                                c(a.next(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function r(e) {
                            try {
                                c(a.throw(e))
                            } catch (e) {
                                t(e)
                            }
                        }

                        function c(t) {
                            var i;
                            t.done ? e(t.value) : (i = t.value, i instanceof s ? i : new s((function (e) {
                                e(i)
                            }))).then(n, r)
                        }
                        c((a = a.apply(i, o || [])).next())
                    }));
                    var i, o, s, a
                }
            },
            yl = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Cl = {
                initializeAnalytics: function (e, t, n) {
                    return yl(this, void 0, void 0, (function* () {
                        var {
                            applicationId: r,
                            locationId: i,
                            sourceUrl: o
                        } = e.serialize();
                        try {
                            var s = yield Mo.getToken({
                                applicationId: r,
                                locationId: i,
                                websiteUrl: o
                            });
                            e.setAnalyticsToken(s)
                        } catch (r) {
                            r instanceof cr && t.captureException(r, e.instanceId, e.sessionId), n && window.clearInterval(n)
                        }
                    }))
                },
                initializePayment: function (e, t, n, r) {
                    var {
                        applicationId: i,
                        locationId: o,
                        hostname: s,
                        sourceUrl: a
                    } = e;
                    return yl(this, void 0, void 0, (function* () {
                        t.logEvent({
                            event: Yr.InitializeStart,
                            eventSource: Jr.App
                        });
                        var e, c, l = r.getCurrentLocale();
                        try {
                            e = yield ol({
                                applicationId: i,
                                hostname: s
                            })
                        } catch (e) {
                            if (t.logEvent({
                                    event: Yr.InitializeError,
                                    eventSource: Jr.App
                                }), n.captureException(e), e instanceof Fr) throw new fr("initializing the payment method");
                            throw e
                        }
                        try {
                            c = yield _l.build(e, n, {
                                applicationId: i,
                                hostname: s,
                                locale: l,
                                locationId: o
                            });
                            var {
                                avt: u,
                                sessionId: d,
                                applePartnerInternalMerchantIdentifier: h,
                                instanceId: p,
                                paymentMethodSupportDetail: f,
                                featureFlagValues: g
                            } = yield c.request(Zc.REQUEST_HYDRATION, {
                                payload: {
                                    applicationId: i,
                                    hostname: s,
                                    locationId: o
                                }
                            });
                            t.setAvt(u);
                            var m = new rc({
                                applePayMerchantIdentifier: h,
                                applicationId: i,
                                avt: u,
                                hostname: s,
                                instanceId: p,
                                locale: l,
                                locationId: o,
                                sessionId: d,
                                sourceUrl: a
                            });
                            return t.logEvent({
                                event: Yr.InitializeOK,
                                eventSource: Jr.App,
                                internalConfigurationValues: g
                            }, p, d), {
                                featureFlagValues: g,
                                localeStrings: r,
                                messenger: c,
                                paymentMethodSupportDetail: f,
                                session: m
                            }
                        } catch (e) {
                            if (t.logEvent({
                                    event: Yr.InitializeError,
                                    eventSource: Jr.App
                                }), n.captureException(e), e instanceof Fr) throw new fr("initializing the payment method");
                            throw e
                        }
                    }))
                },
                validateVerificationDetails: function (e, t) {
                    var n = [];
                    return e.billingContact && "object" == typeof e.billingContact || n.push(new _o(t, "details.billingContact", "object")), e.intent && "string" == typeof e.intent && ["CHARGE", "STORE"].includes(e.intent) || n.push(new _o(t, "details.intent", "string")), "CHARGE" === e.intent && (e.amount && "string" == typeof e.amount || n.push(new _o(t, "details.amount", "string")), e.currencyCode && "string" == typeof e.currencyCode || n.push(new _o(t, "details.currencyCode", "string"))), n
                }
            };
        ! function (e) {
            e.REQUEST_APPLE_PAY_CARD_NONCE = "REQUEST_APPLE_PAY_CARD_NONCE", e.REQUEST_APPLE_PAY_MERCHANT_VALIDITY = "REQUEST_APPLE_PAY_MERCHANT_VALIDITY"
        }(El || (El = {}));
        var Il, Al = {
            AD: "Andorra",
            AE: "United Arab Emirates",
            AF: "Afghanistan",
            AG: "Antigua And Barbuda",
            AI: "Anguilla",
            AL: "Albania",
            AM: "Armenia",
            AO: "Angola",
            AQ: "Antarctica",
            AR: "Argentina",
            AS: "American Samoa",
            AT: "Austria",
            AU: "Australia",
            AW: "Aruba",
            AX: "Finland",
            AZ: "Azerbaijan",
            BA: "Bosnia And Herzegovina",
            BB: "Barbados",
            BD: "Bangladesh",
            BE: "Belgium",
            BF: "Burkina Faso",
            BG: "Bulgaria (rep.)",
            BH: "Bahrain",
            BI: "Burundi",
            BJ: "Benin",
            BL: "Saint Barthelemy",
            BM: "Bermuda",
            BN: "Brunei Darussalam",
            BO: "Bolivia",
            BQ: "Bonaire, Sint Eustatius, And Saba",
            BR: "Brazil",
            BS: "Bahamas",
            BT: "Bhutan",
            BV: "Bouvet Island",
            BW: "Botswana",
            BY: "Belarus",
            BZ: "Belize",
            CA: "Canada",
            CC: "Cocos (keeling) Islands",
            CD: "Congo (dem. Rep.)",
            CF: "Central African Republic",
            CG: "Congo (rep.)",
            CH: "Switzerland",
            CI: "Cote D'ivoire",
            CK: "Cook Islands",
            CL: "Chile",
            CM: "Cameroon",
            CN: "China",
            CO: "Colombia",
            CR: "Costa Rica",
            CV: "Cape Verde",
            CW: "Curacao",
            CX: "Christmas Island",
            CY: "Cyprus",
            CZ: "Czech Rep.",
            DE: "Germany",
            DJ: "Djibouti",
            DK: "Denmark",
            DM: "Dominica",
            DO: "Dominican Rep.",
            DZ: "Algeria",
            EC: "Ecuador",
            EE: "Estonia",
            EG: "Egypt",
            EH: "Western Sahara",
            ER: "Eritrea",
            ES: "Spain",
            ET: "Ethiopia",
            FI: "Finland",
            FJ: "Fiji",
            FK: "Falkland Islands (malvinas)",
            FM: "Micronesia (federated State Of)",
            FO: "Faroe Islands",
            FR: "France",
            GA: "Gabon",
            GB: "United Kingdom",
            GD: "Grenada (west Indies)",
            GE: "Georgia",
            GF: "French Guiana",
            GG: "Channel Islands",
            GH: "Ghana",
            GI: "Gibraltar",
            GL: "Greenland",
            GM: "Gambia",
            GN: "Guinea",
            GP: "Guadeloupe",
            GQ: "Equatorial Guinea",
            GR: "Greece",
            GS: "South Georgia",
            GT: "Guatemala",
            GU: "Guam",
            GW: "Guinea-bissau",
            GY: "Guyana",
            HK: "Hong Kong",
            HM: "Heard And Mcdonald Islands",
            HN: "Honduras",
            HR: "Croatia",
            HT: "Haiti",
            HU: "Hungary (rep.)",
            ID: "Indonesia",
            IE: "Ireland",
            IL: "Israel",
            IM: "Isle Of Man",
            IN: "India",
            IO: "British Indian Ocean Territory",
            IQ: "Iraq",
            IR: "Iran",
            IS: "Iceland",
            IT: "Italy",
            JE: "Channel Islands",
            JM: "Jamaica",
            JO: "Jordan",
            JP: "Japan",
            KE: "Kenya",
            KG: "Kyrgyzstan",
            KH: "Cambodia",
            KI: "Kiribati",
            KM: "Comoros",
            KN: "Saint Kitts And Nevis",
            KR: "South Korea",
            KW: "Kuwait",
            KY: "Cayman Islands",
            KZ: "Kazakhstan",
            LA: "Lao (people's Dem. Rep.)",
            LB: "Lebanon",
            LC: "Saint Lucia",
            LI: "Liechtenstein",
            LK: "Sri Lanka",
            LR: "Liberia",
            LS: "Lesotho",
            LT: "Lithuania",
            LU: "Luxembourg",
            LV: "Latvia",
            LY: "Libya",
            MA: "Morocco",
            MC: "Monaco",
            MD: "Rep. Moldova",
            ME: "Montenegro",
            MF: "Saint Martin",
            MG: "Madagascar",
            MH: "Marshall Islands",
            MK: "Macedonia",
            ML: "Mali",
            MM: "Myanmar",
            MN: "Mongolia",
            MO: "Macao",
            MP: "Northern Mariana Islands",
            MQ: "Martinique",
            MR: "Mauritania",
            MS: "Montserrat",
            MT: "Malta",
            MU: "Mauritius",
            MV: "Maldives",
            MW: "Malawi",
            MX: "Mexico",
            MY: "Malaysia",
            MZ: "Mozambique",
            NA: "Namibia",
            NC: "New Caledonia",
            NE: "Niger",
            NF: "Norfolk Island",
            NG: "Nigeria",
            NI: "Nicaragua",
            NL: "Netherlands",
            NO: "Norway",
            NP: "Nepal",
            NR: "Nauru Central Pacific",
            NU: "Niue",
            NZ: "New Zealand",
            OM: "Oman",
            PA: "Panama (rep.)",
            PE: "Peru",
            PF: "French Polynesia",
            PG: "Papua New Guinea",
            PH: "Philippines",
            PK: "Pakistan",
            PL: "Poland",
            PM: "St. Pierre And Miquelon",
            PN: "Pitcairn",
            PR: "Puerto Rico",
            PS: "Palestinian Territory",
            PT: "Portugal",
            PW: "Palau",
            PY: "Paraguay",
            QA: "Qatar",
            RE: "Reunion",
            RO: "Romania",
            RS: "Republic Of Serbia",
            RU: "Russian Federation",
            RW: "Rwanda",
            SA: "Saudi Arabia",
            SB: "Solomon Islands",
            SC: "Seychelles",
            SE: "Sweden",
            SG: "Rep. Of Singapore",
            SH: "Saint Helena",
            SI: "Slovenia",
            SJ: "Svalbard And Jan Mayen Islands",
            SK: "Slovakia",
            SL: "Sierra Leone",
            SM: "San Marino",
            SN: "Senegal",
            SO: "Somalia",
            SR: "Suriname",
            SS: "South Sudan",
            ST: "Sao Tome And Principe",
            SV: "El Salvador",
            SX: "Sint Maarten",
            SZ: "Swaziland",
            TC: "Turks And Caicos Islands",
            TD: "Chad",
            TF: "French Southern Territories",
            TG: "Togo",
            TH: "Thailand",
            TJ: "Tajikistan",
            TK: "Tokelau",
            TL: "Timor-leste",
            TM: "Turkmenistan",
            TN: "Tunisia",
            TO: "Tonga",
            TR: "Turkey",
            TT: "Trinidad And Tobago",
            TV: "Tuvalu",
            TW: "Taiwan",
            TZ: "Tanzania (united Rep.)",
            UA: "Ukraine",
            UG: "Uganda",
            UM: "United States Minor Outlying Islands",
            US: "United States",
            UY: "Uruguay",
            UZ: "Uzbekistan",
            VA: "Vatican",
            VC: "Saint Vincent And The Grenadines (antilles)",
            VE: "Venezuela",
            VG: "Virgin Islands (british)",
            VI: "Virgin Islands (u.s.)",
            VN: "Viet Nam",
            VU: "Vanuatu",
            WF: "Wallis And Futuna Islands",
            WS: "Samoa",
            YE: "Yemen",
            YT: "Mayotte",
            ZA: "South Africa",
            ZM: "Zambia",
            ZW: "Zimbabwe"
        };
        ! function (e) {
            e.PENDING = "pending", e.FINAL = "final"
        }(Il || (Il = {}));
        var Sl = {
                addressLines: "addressLines",
                city: "locality",
                country: "countryCode",
                postalCode: "postalCode",
                state: "administrativeArea"
            },
            Ol = ["visa", "masterCard", "jcb", "discover", "amex"];

        function Tl(e) {
            return {
                amount: e.amount,
                label: e.label,
                type: e.pending ? Il.PENDING : Il.FINAL
            }
        }

        function Pl(e) {
            return {
                amount: e.amount,
                detail: "",
                identifier: e.id,
                label: e.label
            }
        }

        function Rl(e, t) {
            return t ? Tl(t) : e
        }

        function wl(e, t) {
            return t ? t.map(Tl) : e
        }

        function Nl(e, t) {
            return t ? t.map(Pl) : e
        }

        function Ll() {
            for (var e = 3; e > 0 && !window.ApplePaySession.supportsVersion(e);) e--;
            return e
        }

        function bl(e) {
            var {
                addressLines: t,
                locality: n,
                administrativeArea: r,
                postalCode: i,
                countryCode: o,
                givenName: s,
                familyName: a,
                emailAddress: c,
                phoneNumber: l
            } = e;
            return {
                addressLines: t,
                city: n,
                countryCode: o && o.toUpperCase(),
                email: c,
                familyName: a,
                givenName: s,
                phone: l,
                postalCode: i,
                state: r
            }
        }

        function Dl(e) {
            var t = bl(e),
                {
                    email: n,
                    phone: r
                } = t;
            return function (e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }(t, ["email", "phone"])
        }

        function xl(e) {
            var {
                amount: t,
                identifier: n,
                label: r
            } = e;
            return {
                amount: t,
                id: n,
                label: r
            }
        }

        function Ml(e, t) {
            return {
                errors: (n = e, r = [], n.error && r.push(new window.ApplePayError("addressUnserviceable", "postalAddress", n.error)), n.shippingErrors && Object.entries(n.shippingErrors).forEach((e => {
                    var [t, n] = e, i = Sl[t] || "postalAddress";
                    r.push(new window.ApplePayError("shippingContactInvalid", i, n))
                })), r),
                newLineItems: wl(t.lineItems, e.lineItems),
                newShippingMethods: Nl(t.shippingMethods, e.shippingOptions),
                newTotal: Rl(t.total, e.total)
            };
            var n, r
        }

        function Ul(e, t) {
            var n = Ml(e, t);
            return Object.assign({
                status: window.ApplePaySession.STATUS_SUCCESS
            }, n)
        }

        function kl(e, t) {
            return {
                newLineItems: wl(t.lineItems, e.lineItems),
                newTotal: Rl(t.total, e.total)
            }
        }

        function Hl(e, t) {
            var n = Ml(e, t);
            return Object.assign({
                status: window.ApplePaySession.STATUS_SUCCESS
            }, n)
        }
        var Fl = function (e, t, n, r) {
            return new(n || (n = Promise))((function (i, o) {
                function s(e) {
                    try {
                        c(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function a(e) {
                    try {
                        c(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                        e(t)
                    }))).then(s, a)
                }
                c((r = r.apply(e, t || [])).next())
            }))
        };
        class Gl extends Uo {
            constructor(e, t, n) {
                if (super(t), this.sessionInProgress = !1, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.paymentRequestLockController = n, this.req = e, void 0 === window.ApplePaySession) throw new ar(vo.APPLE_PAY_BROWSER_NOT_SUPPORTED);
                if (!window.ApplePaySession.canMakePayments()) throw new ar(vo.APPLE_PAY_DEVICE_NOT_SUPPORTED);
                this.validateConfiguration()
            }
            validateConfiguration() {
                var e = this.session;
                if (!e.applePayMerchantIdentifier) throw new ar(vo.INVALID_CONFIG, "applePayMerchantIdentifier");
                if (!e.locationId) throw new ar(vo.INVALID_CONFIG, "locationId")
            }
            tokenize() {
                return Fl(this, void 0, void 0, (function* () {
                    if (this.handleFirstInteraction(), this.isDestroyed) throw new ir(Dn.APPLE_PAY);
                    if (this.sessionInProgress) throw new pr([Fo]);
                    this.applePayPaymentRequest = function (e, t) {
                        var n = [...Ol];
                        (null == t ? void 0 : t.isActive(so.CanUseInterac)) && n.push("interac");
                        var r, i = {
                            countryCode: e.countryCode,
                            currencyCode: e.currencyCode,
                            lineItems: wl([], e.lineItems),
                            merchantCapabilities: ["supports3DS"],
                            requiredBillingContactFields: ["postalAddress"],
                            shippingMethods: Nl([], e.shippingOptions),
                            supportedNetworks: n,
                            total: Tl(e.total)
                        };
                        return e.shippingContact && (i.shippingContact = {
                            addressLines: (r = e.shippingContact).addressLines,
                            administrativeArea: r.state,
                            country: Al[r.countryCode],
                            countryCode: r.countryCode,
                            emailAddress: r.email,
                            familyName: r.familyName,
                            givenName: r.givenName,
                            locality: r.city,
                            phoneNumber: r.phone,
                            postalCode: r.postalCode
                        }), e.requestBillingContact && (i.requiredShippingContactFields = ["email", "name", "phone"]), e.requestShippingContact && (i.requiredShippingContactFields = ["postalAddress", "name", "email", "phone"]), i
                    }(this.req, this.context.featureFlagHandler), this.applePaySession = new window.ApplePaySession(Ll(), this.applePayPaymentRequest), this.applePaySession.onshippingcontactselected = e => {
                        this.shippingContactChanged(e.shippingContact, this.applePayPaymentRequest)
                    }, this.applePaySession.onshippingmethodselected = e => {
                        this.shippingOptionChanged(e.shippingMethod, this.applePayPaymentRequest)
                    };
                    var e = new Promise((e => {
                            this.applePaySession.oncancel = () => {
                                this.metricsHandler.logEvent(Kr.ExternalSessionCancel), this.deleteApplePaySession(), e({
                                    status: Ho.CANCEL
                                })
                            }
                        })),
                        t = new Promise(((e, t) => {
                            this.applePaySession.onvalidatemerchant = n => Fl(this, void 0, void 0, (function* () {
                                try {
                                    var r = yield this.requestApplePayMerchantValidity(n.validationURL, this.applePayPaymentRequest);
                                    e(r)
                                } catch (e) {
                                    t(e)
                                }
                            }))
                        })),
                        n = new Promise(((e, t) => {
                            this.applePaySession.onpaymentauthorized = n => Fl(this, void 0, void 0, (function* () {
                                try {
                                    var r = yield this.requestApplePayCardNonce(n);
                                    this.deleteApplePaySession(), e(r)
                                } catch (e) {
                                    this.deleteApplePaySession(), t(e)
                                }
                            }))
                        }));
                    this.sessionInProgress = !0, this.paymentRequestLockController.lock(this), this.metricsHandler.logEvent(Kr.ExternalSessionStart), this.applePaySession.begin();
                    try {
                        var r = yield t;
                        this.applePaySession.completeMerchantValidation(r);
                        var {
                            status: i,
                            token: o,
                            details: s
                        } = yield Promise.race([n, e]);
                        return this.metricsHandler.logEvent(Kr.ExternalSessionOK), i === Ho.SUCCESS ? {
                            details: s,
                            status: Mn.OK,
                            token: o
                        } : {
                            status: Mn.CANCEL
                        }
                    } catch (e) {
                        throw this.metricsHandler.logEvent(Kr.ExternalSessionError), e
                    }
                }))
            }
            destroy() {
                return this.metricsHandler.logEvent(Wr.Destroyed), this.isDestroyed = !0, this.sessionHandler && (this.sessionHandler.abort(), this.deleteApplePaySession()), Promise.resolve()
            }
            requestApplePayCardNonce(e) {
                return Fl(this, void 0, void 0, (function* () {
                    var t = {
                            applepayData: e.payment
                        },
                        n = this.session,
                        r = this.selectedShippingMethod || this.getDefaultShippingMethod();
                    try {
                        var i = yield this.messenger.request(El.REQUEST_APPLE_PAY_CARD_NONCE, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: n
                            },
                            payload: t
                        });
                        return this.applePaySession.completePayment(window.ApplePaySession.STATUS_SUCCESS), this.context.setPaymentMethodTrackingId(i.paymentMethodTrackingId), this.wasFirstInteractionCalled = !1, this.context.setSessionId(i.sessionId),
                            function (e, t) {
                                var {
                                    card: n,
                                    cardNonce: r,
                                    shippingContact: i
                                } = e, o = n;
                                o.billing && (o = Object.assign({}, o, {
                                    billing: Dl(o.billing)
                                }));
                                var s = {
                                    details: {
                                        card: o,
                                        method: Dn.APPLE_PAY
                                    },
                                    status: Ho.SUCCESS,
                                    token: r
                                };
                                if (i) {
                                    var a = {
                                        contact: bl(i)
                                    };
                                    t && (a.option = xl(t)), s.details.shipping = a
                                }
                                return s
                            }(i, r)
                    } catch (e) {
                        throw this.applePaySession.completePayment(window.ApplePaySession.STATUS_FAILURE), e instanceof pr || this.errorLogger.captureException(e, n.instanceId, n.sessionId), e
                    }
                }))
            }
            requestApplePayMerchantValidity(e, t) {
                return Fl(this, void 0, void 0, (function* () {
                    var n, r = t && t.total ? t.total.label : null,
                        i = this.session,
                        o = {
                            clientId: i.applicationId,
                            locationId: i.locationId,
                            merchantName: r,
                            sourceUrl: i.sourceUrl,
                            validationUrl: e
                        };
                    try {
                        n = yield this.messenger.request(El.REQUEST_APPLE_PAY_MERCHANT_VALIDITY, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: i
                            },
                            payload: o
                        })
                    } catch (e) {
                        throw this.applePaySession.abort(), this.deleteApplePaySession(), e
                    }
                    try {
                        return JSON.parse(n.session)
                    } catch (e) {
                        throw this.applePaySession.abort(), this.deleteApplePaySession(), this.errorLogger.captureException(new Fr(e.message, Dn.APPLE_PAY), this.session.instanceId, this.session.sessionId), new fr("parsing Apple Pay merchant validity")
                    }
                }))
            }
            shippingContactChanged(e, t) {
                var n = Ll() >= 3 ? this.updateApplePayShippingContactV3(t) : this.updateApplePayShippingContactLegacy(t);
                this.req.hasEventListener(xn.SHIPPING_CONTACT_CHANGED) ? this.req.dispatchEvent(xn.SHIPPING_CONTACT_CHANGED, {
                    contactOrOption: bl(e)
                }, (e => {
                    this.handleShippingContactUpdate(n, e)
                })) : this.handleShippingContactUpdate(n)
            }
            handleShippingContactUpdate(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = null === (t = n.shippingOptions) || void 0 === t ? void 0 : t[0],
                    i = this.getDefaultShippingMethod();
                void 0 === r && null !== i && (r = xl(i)), void 0 !== r && this.req.hasEventListener(xn.SHIPPING_OPTION_CHANGED) ? (this.selectedShippingMethod = Pl(r), this.req.dispatchEvent(xn.SHIPPING_OPTION_CHANGED, {
                    contactOrOption: r
                }, (t => {
                    e(Object.assign({}, n, t))
                }))) : e(n)
            }
            shippingOptionChanged(e, t) {
                this.selectedShippingMethod = e;
                var n = Ll() >= 3 ? this.updateApplePayShippingMethodV3(t) : this.updateApplePayShippingMethodLegacy(t);
                this.req.hasEventListener(xn.SHIPPING_OPTION_CHANGED) ? this.req.dispatchEvent(xn.SHIPPING_OPTION_CHANGED, {
                    contactOrOption: xl(e)
                }, n) : n()
            }
            updateApplePayPaymentRequest(e) {
                e.newTotal && (this.applePayPaymentRequest.total = e.newTotal), e.newLineItems && (this.applePayPaymentRequest.lineItems = e.newLineItems), e.newShippingMethods && (this.applePayPaymentRequest.shippingMethods = e.newShippingMethods)
            }
            updateApplePayShippingContactV3(e) {
                var t = this;
                return function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = Ml(n, e);
                    t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(Kr.ShippingAddressChangeOK), t.applePaySession.completeShippingContactSelection(r)
                }
            }
            updateApplePayShippingContactLegacy(e) {
                var t = this;
                return function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = Ul(n, e);
                    t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(Kr.ShippingAddressChangeOK), t.applePaySession.completeShippingContactSelection(r.status, r.newShippingMethods, r.newTotal, r.newLineItems)
                }
            }
            updateApplePayShippingMethodV3(e) {
                var t = this;
                return function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = kl(n, e);
                    t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(Kr.ShippingOptionChangeOK), t.applePaySession.completeShippingMethodSelection(r)
                }
            }
            updateApplePayShippingMethodLegacy(e) {
                var t = this;
                return function () {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = Hl(n, e);
                    t.updateApplePayPaymentRequest(r), t.metricsHandler.logEvent(Kr.ShippingOptionChangeOK), t.applePaySession.completeShippingMethodSelection(r.status, r.newTotal, r.newLineItems)
                }
            }
            getDefaultShippingMethod() {
                var e = this.applePayPaymentRequest.shippingMethods;
                return e && e.length > 0 ? this.applePayPaymentRequest.shippingMethods[0] : null
            }
            get applePaySession() {
                if (!this.sessionHandler) {
                    var e = "Apple Pay Session is expected to exist when it does not.";
                    throw this.errorLogger.captureException(new Fr(e, "Apple Pay"), this.session.instanceId, this.session.sessionId), new fr(e)
                }
                return this.sessionHandler
            }
            set applePaySession(e) {
                this.sessionHandler = e
            }
            deleteApplePaySession() {
                delete this.sessionHandler, this.paymentRequestLockController.unlock(this), this.sessionInProgress = !1
            }
            handleFirstInteraction() {
                this.wasFirstInteractionCalled || (this.metricsHandler.logEvent(Yr.FirstInteraction), this.wasFirstInteractionCalled = !0)
            }
        }

        function Vl(e, t) {
            return Intl.NumberFormat(m.windowNavigationLanguage, {
                currency: t,
                style: "currency"
            }).format(Number.parseFloat(e))
        }
        var Bl = ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            ql = ["AMEX", "DISCOVER", "JCB", "MASTERCARD", "VISA"];

        function jl(e) {
            return {
                label: e.label,
                price: e.amount,
                status: e.pending ? a.Estimated : a.Final,
                type: "LINE_ITEM"
            }
        }

        function Yl(e, t) {
            return t.map((t => function (e, t) {
                return {
                    description: Vl(t.amount, e),
                    id: t.id,
                    label: t.label
                }
            }(e, t)))
        }

        function Kl(e, t, n, r) {
            var i = null != r ? r : n;
            if (i && i.length > 0) {
                var o = {
                    shippingOptions: Yl(e, i)
                };
                return i.some((e => (null == e ? void 0 : e.id) === t)) && (o.defaultSelectedOptionId = t), o
            }
        }

        function Wl(e, t) {
            return null == t ? void 0 : t.find((t => t.id === e))
        }

        function zl(e, t, n, r, i, o) {
            var {
                countryCode: s,
                currencyCode: a,
                total: c
            } = t, l = nl(t), u = Boolean(t.requestShippingContact || l), d = Object.assign({}, e, {
                emailRequired: Boolean(t.requestBillingContact),
                merchantInfo: i,
                shippingAddressRequired: u,
                shippingOptionRequired: l,
                transactionInfo: {
                    countryCode: s,
                    currencyCode: a,
                    totalPrice: c.amount,
                    totalPriceStatus: r
                }
            });
            if (u && (d.shippingAddressParameters = {
                    phoneNumberRequired: !0
                }), l) {
                var h = Kl(a, o, [], t.shippingOptions);
                h && (d.shippingOptionParameters = h)
            }
            return n.length > 0 && (d.callbackIntents = n), d
        }

        function Zl(e, t) {
            var n = [];
            return e.error && n.push({
                intent: t,
                message: e.error,
                reason: Ir.SHIPPING_ADDRESS_UNSERVICEABLE
            }), e.shippingErrors && Object.entries(e.shippingErrors).forEach((e => {
                var [r, i] = e;
                n.push({
                    intent: t,
                    message: "".concat(r, ": ").concat(i),
                    reason: Ir.SHIPPING_ADDRESS_INVALID
                })
            })), n
        }
        var Ql = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Jl = ["#google"];
        class Xl extends Uo {
            constructor(e, t, n, r, i) {
                var o;
                super(n), this.shippingOptions = void 0, this.wasFirstInteractionCalled = !1, this.isDestroyed = !1, this.validateConfiguration(), this.paymentRequestLockController = i, this.req = t, this.merchantInfo = r, this.element = null, nl(this.req) && (this.shippingOptions = this.req.shippingOptions, this.selectedShippingOptionId = null === (o = this.req.shippingOptions) || void 0 === o ? void 0 : o[0].id), this.callbackIntents = function (e, t) {
                    var n = [],
                        r = nl(e) && t.includes(xn.SHIPPING_OPTION_CHANGED),
                        i = e.requestShippingContact && t.includes(xn.SHIPPING_CONTACT_CHANGED);
                    return r ? (n.push(c.SHIPPING_ADDRESS), n.push(c.SHIPPING_OPTION)) : i && n.push(c.SHIPPING_ADDRESS), (!m.isAndroid() || r || i) && n.push(c.PAYMENT_AUTHORIZATION), n
                }(this.req, this.handlers);
                var s, a, p, f, g = function (e, t, n) {
                    var r = {
                            environment: y.GOOGLE_PAY_ENV,
                            merchantInfo: n
                        },
                        i = e.includes(c.SHIPPING_OPTION) || e.includes(c.SHIPPING_ADDRESS);
                    if (!m.isAndroid() || i) {
                        var o = {
                            onPaymentAuthorized: () => ({
                                transactionState: h.SUCCESS
                            })
                        };
                        i && (o.onPaymentDataChanged = t), r.paymentDataCallbacks = o
                    }
                    return r
                }(this.callbackIntents, this.onPaymentDataChanged.bind(this), this.merchantInfo);
                this.googlePayClient = new e.api.PaymentsClient(g), this.isReadyToPayRequest = (s = this.session.applicationId, a = this.req.requestBillingContact, p = this.context.featureFlagHandler, f = [...ql], (null == p ? void 0 : p.isActive(so.CanUseInterac)) && f.push("INTERAC"), {
                    allowedPaymentMethods: [{
                        parameters: {
                            allowedAuthMethods: Bl,
                            allowedCardNetworks: f,
                            billingAddressParameters: {
                                format: a ? l.FULL : l.MIN,
                                phoneNumberRequired: Boolean(a)
                            },
                            billingAddressRequired: !0
                        },
                        tokenizationSpecification: {
                            parameters: {
                                gateway: "square",
                                gatewayMerchantId: s
                            },
                            type: d.PAYMENT_GATEWAY
                        },
                        type: u.CARD
                    }],
                    apiVersion: 2,
                    apiVersionMinor: 0
                })
            }
            validateConfiguration() {
                var e = Jl.join(", ");
                if (document.querySelectorAll(e).length > 0) throw new sr(Dn.GOOGLE_PAY, e)
            }
            attach(e, t) {
                var n, r, i;
                return Ql(this, void 0, void 0, (function* () {
                    if (this.isDestroyed) throw new ir(Dn.GOOGLE_PAY);
                    var o = null !== (n = null == t ? void 0 : t.buttonColor) && void 0 !== n ? n : _r.DEFAULT,
                        s = null !== (r = null == t ? void 0 : t.buttonSizeMode) && void 0 !== r ? r : yr.STATIC,
                        a = null !== (i = null == t ? void 0 : t.buttonType) && void 0 !== i ? i : Cr.LONG;
                    this.metricsHandler.logEvent(Yr.AttachStart), this.metricsHandler.logEvent(Wr.Configured, t);
                    try {
                        this.element = uc(e, lc)
                    } catch (e) {
                        throw this.metricsHandler.logEvent(Yr.AttachError), e
                    }
                    this.isReadyToPay = yield this.checkIfReadyToPay(Yr.AttachError);
                    try {
                        var c = this.googlePayClient.createButton({
                            buttonColor: o,
                            buttonSizeMode: s,
                            buttonType: a,
                            onClick: () => {}
                        });
                        return this.element.appendChild(c), this.metricsHandler.logEvent(Yr.AttachOK), Promise.resolve()
                    } catch (e) {
                        throw this.errorLogger.captureException(e), this.metricsHandler.logEvent(Yr.AttachError), new ar(vo.UNKNOWN, e)
                    }
                }))
            }
            destroy() {
                return this.metricsHandler.logEvent(Wr.Destroyed), this.isDestroyed = !0, this.element && (this.element.innerHTML = ""), Promise.resolve()
            }
            tokenize() {
                return Ql(this, void 0, void 0, (function* () {
                    if (this.handleFirstInteraction(), this.isDestroyed) throw new ir(Dn.GOOGLE_PAY);
                    var e;
                    this.metricsHandler.logEvent(Kr.ExternalSessionStart), this.isReadyToPay = this.isReadyToPay || (yield this.checkIfReadyToPay(Kr.ExternalSessionError)), this.paymentRequestLockController.lock(this);
                    try {
                        e = yield this.loadPaymentData(), delete this.googlePayTokenDeferred, this.metricsHandler.logEvent(Kr.ExternalSessionOK)
                    } catch (e) {
                        if (delete this.googlePayTokenDeferred, this.paymentRequestLockController.unlock(this), "CANCELED" === e.statusCode) return this.metricsHandler.logEvent(Kr.ExternalSessionCancel), {
                            status: Mn.CANCEL
                        };
                        if (this.metricsHandler.logEvent(Kr.ExternalSessionError), e instanceof Error) throw this.errorLogger.captureException(e), e;
                        throw this.errorLogger.captureException(new Fr(JSON.stringify(e), Dn.GOOGLE_PAY)), new fr("tokenizing Google Pay.")
                    }
                    var {
                        token: t,
                        details: n
                    } = yield this.requestGooglePayCardNonce(e);
                    return {
                        details: n,
                        status: Mn.OK,
                        token: t
                    }
                }))
            }
            checkIfReadyToPay(e) {
                return Ql(this, void 0, void 0, (function* () {
                    var t;
                    try {
                        t = yield this.googlePayClient.isReadyToPay(this.isReadyToPayRequest)
                    } catch (e) {
                        this.errorLogger.captureException(new Fr('Calling googlePayClient.isReadyToPay threw "'.concat(e, '"'))), t = {
                            result: !1
                        }
                    }
                    var n = Boolean(t.result);
                    if (!n) throw e && this.metricsHandler.logEvent(e), new ar(vo.GOOGLE_PAY_BROWSER_NOT_SUPPORTED);
                    var r = this.callbackIntents.length > 0 ? a.Unknown : a.Final;
                    return this.googlePayClient.prefetchPaymentData(zl(this.isReadyToPayRequest, this.req, this.callbackIntents, r, this.merchantInfo, this.selectedShippingOptionId)), n
                }))
            }
            get handlers() {
                var e = [];
                return this.req.hasEventListener(xn.SHIPPING_OPTION_CHANGED) && e.push(xn.SHIPPING_OPTION_CHANGED), this.req.hasEventListener(xn.SHIPPING_CONTACT_CHANGED) && e.push(xn.SHIPPING_CONTACT_CHANGED), e
            }
            loadPaymentData() {
                return this.googlePayTokenDeferred || (this.googlePayTokenDeferred = this.googlePayClient.loadPaymentData(zl(this.isReadyToPayRequest, this.req, this.callbackIntents, a.Final, this.merchantInfo, this.selectedShippingOptionId))), this.googlePayTokenDeferred
            }
            onPaymentDataChanged(e) {
                switch (e.callbackTrigger) {
                    case c.INITIALIZE:
                    case c.SHIPPING_ADDRESS:
                        return this.onPaymentDataChangedShippingAddress(e);
                    case c.SHIPPING_OPTION:
                        return this.onPaymentDataChangedShippingOption(e);
                    default:
                        return this.errorLogger.captureException(new Fr("Unknown callbackTrigger: ".concat(e.callbackTrigger))), Promise.resolve({})
                }
            }
            onPaymentDataChangedShippingOption(e) {
                var t;
                return Ql(this, void 0, void 0, (function* () {
                    this.selectedShippingOptionId = null === (t = e.shippingOptionData) || void 0 === t ? void 0 : t.id;
                    var {
                        updatedOptionRequest: n,
                        optionErrors: r
                    } = yield this.dispatchShippingOptionChanged(this.selectedShippingOptionId, this.shippingOptions);
                    return this.paymentDataChangedComplete(n, r)
                }))
            }
            dispatchShippingOptionChanged(e, t) {
                var n = {
                    optionErrors: [],
                    updatedOptionRequest: {}
                };
                if (!this.handlers.includes(xn.SHIPPING_OPTION_CHANGED)) return Promise.resolve(n);
                var r = Wl(e, t);
                return r ? this.isDestroyed ? Promise.resolve({
                    optionErrors: [{
                        intent: c.SHIPPING_OPTION,
                        message: "An error occurred when attempting to submit payment, please close this window and try again.",
                        reason: Ir.PAYMENT_METHOD_DESTROYED
                    }],
                    updatedOptionRequest: {}
                }) : new Promise((e => {
                    this.req.dispatchEvent(xn.SHIPPING_OPTION_CHANGED, {
                        contactOrOption: r
                    }, (function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        e({
                            optionErrors: Zl(t, c.SHIPPING_OPTION),
                            updatedOptionRequest: t
                        })
                    }))
                })) : Promise.resolve(n)
            }
            onPaymentDataChangedShippingAddress(e) {
                var t;
                return Ql(this, void 0, void 0, (function* () {
                    var {
                        updatedContactRequest: n,
                        contactErrors: r
                    } = yield this.dispatchShippingContactChanged(e);
                    if (void 0 === this.req.shippingOptions || 0 === this.req.shippingOptions.length) return this.paymentDataChangedComplete(n, r);
                    var i = this.shippingOptions;
                    void 0 !== n.shippingOptions ? (i = n.shippingOptions, this.selectedShippingOptionId = n.shippingOptions[0].id) : this.selectedShippingOptionId = null === (t = this.shippingOptions) || void 0 === t ? void 0 : t[0].id;
                    var {
                        updatedOptionRequest: o,
                        optionErrors: s
                    } = yield this.dispatchShippingOptionChanged(this.selectedShippingOptionId, i), a = Object.assign({}, n, o), c = r.concat(s);
                    return this.paymentDataChangedComplete(a, c)
                }))
            }
            dispatchShippingContactChanged(e) {
                var t = {
                    contactErrors: [],
                    updatedContactRequest: {}
                };
                return new Promise((n => {
                    var r;
                    void 0 !== e.shippingAddress && this.handlers.includes(xn.SHIPPING_CONTACT_CHANGED) ? this.isDestroyed ? n({
                        contactErrors: [{
                            intent: c.SHIPPING_ADDRESS,
                            message: "An error occurred when attempting to submit payment, please close this window and try again.",
                            reason: Ir.PAYMENT_METHOD_DESTROYED
                        }],
                        updatedContactRequest: {}
                    }) : this.req.dispatchEvent(xn.SHIPPING_CONTACT_CHANGED, {
                        contactOrOption: (r = e.shippingAddress, {
                            city: r.locality,
                            countryCode: r.countryCode,
                            postalCode: r.postalCode,
                            state: r.administrativeArea
                        })
                    }, (function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        n({
                            contactErrors: Zl(e, c.SHIPPING_ADDRESS),
                            updatedContactRequest: e
                        })
                    })) : n(t)
                }))
            }
            paymentDataChangedComplete(e, t) {
                e.shippingOptions && e.shippingOptions.length > 0 && (this.shippingOptions = e.shippingOptions);
                var n = function (e, t, n, r) {
                    var i, o, s, a, {
                            total: c,
                            countryCode: l,
                            currencyCode: u,
                            lineItems: d
                        } = t,
                        h = n,
                        p = jl(null !== (i = e.total) && void 0 !== i ? i : c),
                        f = {
                            totalPrice: p.price,
                            totalPriceLabel: p.label,
                            totalPriceStatus: p.status
                        },
                        g = Object.assign({}, {
                            countryCode: l,
                            currencyCode: u
                        }, f),
                        m = (o = d, (a = null != (s = e.lineItems) ? s : o) ? a.map((e => jl(e))) : []);
                    m.length > 0 && (g.displayItems = m);
                    var v = {
                            newTransactionInfo: g
                        },
                        E = Kl(u, r, h, e.shippingOptions);
                    return E && (v.newShippingOptionParameters = E), v
                }(e, this.req, this.shippingOptions, this.selectedShippingOptionId);
                return t.length > 0 && (n.error = t[0]), n
            }
            requestGooglePayCardNonce(e) {
                return Ql(this, void 0, void 0, (function* () {
                    var t = this.session,
                        n = Wl(this.selectedShippingOptionId, this.shippingOptions);
                    try {
                        var r = yield this.messenger.request(Io.REQUEST_GOOGLE_PAY_CARD_NONCE, {
                            options: {
                                paymentMethodTrackingId: this.context.getPaymentMethodTrackingId(),
                                session: t
                            },
                            payload: e
                        });
                        return this.context.setPaymentMethodTrackingId(r.paymentMethodTrackingId), this.context.setSessionId(r.sessionId), this.wasFirstInteractionCalled = !1, this.paymentRequestLockController.unlock(this),
                            function (e, t) {
                                var {
                                    card: n,
                                    cardNonce: r,
                                    contact: i
                                } = e, o = {
                                    details: {
                                        card: n,
                                        method: Dn.GOOGLE_PAY
                                    },
                                    token: r
                                };
                                return void 0 !== i && (o.details.shipping = {
                                    contact: i
                                }, t && (o.details.shipping.option = t)), o
                            }(r, n)
                    } catch (e) {
                        throw this.paymentRequestLockController.unlock(this), e instanceof pr || this.errorLogger.captureException(e, t.instanceId, t.sessionId), e
                    }
                }))
            }
            handleFirstInteraction() {
                this.wasFirstInteractionCalled || (this.wasFirstInteractionCalled = !0, this.metricsHandler.logEvent(Yr.FirstInteraction))
            }
        }
        var $l = function (e, t, n) {
                return new Gl(e, t, n)
            },
            eu = function (e, t, n, r, i) {
                return new Xl(e, t, n, r, i)
            },
            tu = function (e, t, n, r) {
                return new(n || (n = Promise))((function (i, o) {
                    function s(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function (e) {
                            e(t)
                        }))).then(s, a)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            };

        function nu(e, t) {
            var {
                paymentMethodSupportDetail: n
            } = t;
            if (!t.getSession().locationId) throw new ar(vo.INVALID_CONFIG, "locationId");
            if (n && n[e] && !n[e].IsSupported) {
                var {
                    UnsupportedReasonType: r
                } = n[e], i = vo.UNKNOWN;
                throw r && r in mo && (i = Eo[r]), t.metricsHandler.logEvent(Yr.BuildError), new ar(i)
            }
        }

        function ru(e, t) {
            var {
                isValid: n,
                missingFields: r
            } = rl(e);
            if (!n) throw t.metricsHandler.logEvent(Yr.BuildError), new jn(r)
        }
        class iu {
            constructor(e, t, n) {
                this.localeStrings = new wi(navigator.language), this.paymentOptions = e, this.metrics = t, this.errorLogger = n, this.paymentRequestLockMap = new WeakMap
            }
            setLocale(e) {
                return tu(this, void 0, void 0, (function* () {
                    try {
                        var t = yield this.getPaymentContext(Jr.App);
                        return t.metricsHandler.logEvent(Wr.SetLocale, e), t.setLocale(e)
                    } catch (e) {
                        if (e instanceof Fr) throw this.errorLogger.captureException(e), new fr("setting the locale");
                        throw e
                    }
                }))
            }
            initializePaymentMethod() {
                return this.initializePaymentParamPromise || (this.initializePaymentParamPromise = Cl.initializePayment(this.paymentOptions, this.metrics, this.errorLogger, this.localeStrings)), this.initializePaymentParamPromise
            }
            setAnalytics(e) {
                if (!this.analyticsInterval) {
                    var t = this.analyticsInterval = window.setInterval((() => {
                        Cl.initializeAnalytics(e, this.errorLogger, t)
                    }), Do);
                    Cl.initializeAnalytics(e, this.errorLogger, t)
                }
            }
            getPaymentContext(e) {
                return tu(this, void 0, void 0, (function* () {
                    var {
                        featureFlagValues: t,
                        messenger: n,
                        session: r,
                        paymentMethodSupportDetail: i
                    } = yield this.initializePaymentMethod();
                    r.avt && this.errorLogger.setAvt(r.avt);
                    var o = Ao(),
                        s = new class {
                            constructor(e, t, n, r) {
                                this.metricsLogger = e, this.eventSource = n, this.session = t, this.paymentMethodTrackingId = r
                            }
                            logEvent(e, t) {
                                var n = {
                                    event: e,
                                    eventSource: this.eventSource
                                };
                                void 0 !== t && (n.eventConfigurationValues = t);
                                var {
                                    instanceId: r,
                                    sessionId: i
                                } = this.session.serialize();
                                return this.metricsLogger.logEvent(n, r, i, this.paymentMethodTrackingId)
                            }
                            setPaymentMethodTrackingId(e) {
                                this.paymentMethodTrackingId = e
                            }
                            getPaymentMethodTrackingId() {
                                return this.paymentMethodTrackingId
                            }
                        }(this.metrics, r, e, o);
                    this.setAnalytics(r), this.contextEventTarget || (this.contextEventTarget = new Co);
                    var a = new fo(this.errorLogger, n, s, r, i, this.localeStrings, this.contextEventTarget, t);
                    if (!a.featureFlagHandler.isActive(so.CanUseWebSDK)) throw new nn;
                    return a
                }))
            }
            verifyBuyer(e, t) {
                return tu(this, void 0, void 0, (function* () {
                    var n = [];
                    if (this.paymentOptions.locationId && 0 !== this.paymentOptions.locationId.length || n.push(new _o("verifyBuyer", "locationId", "string")), e && "string" == typeof e && 0 !== e.length || n.push(new _o("verifyBuyer", "source", "string")), t && "object" == typeof t ? n.push(...Cl.validateVerificationDetails(t, "verifyBuyer")) : n.push(new _o("verifyBuyer", "details", "object")), n.length > 0) throw new yo(n);
                    var r = yield this.getPaymentContext(Jr.App);
                    try {
                        r.metricsHandler.logEvent(Yr.VerificationStart);
                        var i = yield Mo.verifyBuyer({
                            applicationId: this.paymentOptions.applicationId,
                            locationId: this.paymentOptions.locationId,
                            websiteUrl: this.paymentOptions.sourceUrl
                        }, e, t);
                        return r.metricsHandler.logEvent(Yr.VerificationOK), i
                    } catch (e) {
                        if (r.metricsHandler.logEvent(Yr.VerificationError), e instanceof cr) throw this.errorLogger.captureException(e), e;
                        throw new Qn(e)
                    }
                }))
            }
            card(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t = yield this.getPaymentContext(Jr.Card);
                    t.metricsHandler.logEvent(Yr.BuildStart);
                    try {
                        var n = new yc(t, e);
                        return t.metricsHandler.logEvent(Yr.BuildOK), n
                    } catch (e) {
                        throw t.metricsHandler.logEvent(Yr.BuildError), e
                    }
                }))
            }
            paymentRequest(e) {
                var t = new il;
                this.metrics.logEvent({
                    event: Wr.Configured,
                    eventConfigurationValues: e,
                    eventSource: Jr.PaymentRequest
                });
                var n = new tl(e, this.localeStrings, t, this.metrics);
                return this.paymentRequestLockMap.set(n, t), n
            }
            googlePay(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t, n, r = yield this.getPaymentContext(Jr.GooglePay);
                    r.metricsHandler.logEvent(Yr.BuildStart), nu(no.GOOGLE_PAY, r),
                        function (e) {
                            if ("undefined" == typeof ShadowRoot) throw e.metricsHandler.logEvent(Yr.BuildError), new ar(vo.GOOGLE_PAY_BROWSER_NOT_SUPPORTED)
                        }(r), ru(e, r);
                    try {
                        var i = function (e, t) {
                                return tu(this, void 0, void 0, (function* () {
                                    return {
                                        authJwt: (yield e.request(Io.GENERATE_GOOGLE_PAY_AUTH_TOKEN, {
                                            options: {
                                                session: t
                                            }
                                        })).token,
                                        merchantId: y.GOOGLE_PAY_MERCHANT_ID
                                    }
                                }))
                            }(r.messenger, r.getSession()),
                            o = No();
                        [t, n] = yield Promise.all([o, i])
                    } catch (a) {
                        throw r.metricsHandler.logEvent(Yr.BuildError), a
                    }
                    try {
                        var s = this.paymentRequestLockMap.get(e);
                        if (!s) {
                            var a = new fr("PaymentRequestLockMap entry does not exist. This should never happen.");
                            throw this.errorLogger.captureException(a), a
                        }
                        var c = eu(t, e, r, n, s);
                        return r.metricsHandler.logEvent(Yr.BuildOK), c
                    } catch (a) {
                        throw r.metricsHandler.logEvent(Yr.BuildError), a
                    }
                }))
            }
            applePay(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t = yield this.getPaymentContext(Jr.ApplePay);
                    t.metricsHandler.logEvent(Yr.BuildStart), nu(no.APPLE_PAY, t), ru(e, t);
                    try {
                        var n = this.paymentRequestLockMap.get(e);
                        if (!n) {
                            var r = new fr("PaymentRequestLockMap entry does not exist. This should never happen.");
                            throw this.errorLogger.captureException(r), r
                        }
                        var i = $l(e, t, n);
                        return t.metricsHandler.logEvent(Yr.BuildOK), i
                    } catch (r) {
                        throw t.metricsHandler.logEvent(Yr.BuildError), r
                    }
                }))
            }
            ach() {
                return tu(this, void 0, void 0, (function* () {
                    var e = yield this.getPaymentContext(Jr.Ach);
                    e.metricsHandler.logEvent(Yr.BuildStart), nu(no.ACH, e);
                    try {
                        var t = yield Lo();
                        return e.metricsHandler.logEvent(Yr.BuildOK), new Ko(t, e)
                    } catch (t) {
                        throw e.metricsHandler.logEvent(Yr.BuildError), t
                    }
                }))
            }
            cashApp(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t = yield this.getPaymentContext(Jr.CashApp);
                    t.metricsHandler.logEvent(Yr.BuildStart), nu(no.CASH_APP, t);
                    try {
                        var n = new Uc(t, e);
                        return t.metricsHandler.logEvent(Yr.BuildOK), n
                    } catch (e) {
                        throw t.metricsHandler.logEvent(Yr.BuildError), e
                    }
                }))
            }
            alipay(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t = yield this.getPaymentContext(Jr.Alipay);
                    t.metricsHandler.logEvent(Yr.BuildStart), nu(no.ALIPAY, t);
                    try {
                        var n = new ns(t, e);
                        return t.metricsHandler.logEvent(Yr.BuildOK), n
                    } catch (e) {
                        throw t.metricsHandler.logEvent(Yr.BuildError), e
                    }
                }))
            }
            giftCard(e) {
                return tu(this, void 0, void 0, (function* () {
                    var t = yield this.getPaymentContext(Jr.GiftCard);
                    t.metricsHandler.logEvent(Yr.BuildStart);
                    try {
                        var n = new Bc(t, e);
                        return t.metricsHandler.logEvent(Yr.BuildOK), n
                    } catch (e) {
                        throw t.metricsHandler.logEvent(Yr.BuildError), e
                    }
                }))
            }
        }
        var ou = y.ENABLE_ERROR_LOGGING,
            su = y.env,
            au = new Map;
        window.Square = {
            errors: ni,
            payments: function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    n = "".concat(e, "-").concat(t);
                if (au.has(n)) return au.get(n);
                // if (!sn(m.windowLocation)) throw new tr;
                if (!m.isSupported()) throw new er;
                un(e);
                var r = new tn({
                        applicationId: e,
                        applicationUrl: window.location.origin,
                        enableErrorLogging: ou,
                        environment: su,
                        sourceName: "web-payments-sdk-public",
                        useGlobalHandlers: !1,
                        version: y.VERSION
                    }),
                    i = m.windowLocation.hostname,
                    o = m.windowLocation.origin,
                    s = {
                        applicationId: e,
                        hostname: i,
                        locationId: t,
                        sourceUrl: o
                    },
                    a = new oo({
                        applicationId: e,
                        hostname: i,
                        locationId: t
                    });
                a.logEvent({
                    event: Yr.LoadOK,
                    eventSource: Jr.App
                });
                var c = new iu(s, a, r);
                return au.set(n, c), c
            }
        }
    })()
})();