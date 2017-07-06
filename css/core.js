(function() {
    window.NEJ = window.NEJ || {};
    NEJ.O = {};
    NEJ.R = [];
    NEJ.F = function() {
        return !1
    };
    NEJ.P = function(CQ1x) {
        if (!CQ1x || !CQ1x.length) return null;
        var Wk6e = window;
        for (var a = CQ1x.split("."), l = a.length, i = a[0] == "window" ? 1 : 0; i < l; Wk6e = Wk6e[a[i]] = Wk6e[a[i]] || {}, i++);
        return Wk6e
    };
    NEJ.Q = function(bL2x, CQ1x) {
        bL2x = bL2x || NEJ.O;
        var bs2x = CQ1x.split(".");
        for (var i = 0, l = bs2x.length; i < l; i++) {
            bL2x = bL2x[bs2x[i]];
            if (!bL2x) break
        }
        return bL2x
    };
    NEJ.C = function() {
        var brs1x = function() {
            return NEJ.O.toString.call(arguments[0]) != "[object Function]"
        };
        var brE1x = function(A1x, bv2x) {
            for (var x in bv2x)
                if (A1x == bv2x[x]) return x;
            return null
        };
        var bjU0x = { cm2x: 0, bk1x: 1, bC2x: 2, bR2x: 3, bJ2x: 4, eR3x: 5, kj5o: 6, eh3x: 7 },
            tl8d = { cs2x: 0, bl1x: 1, bH2x: 2, cb2x: 3, bM2x: 4, gs3x: 5, kU5Z: 6, fP3x: 7 };
        return function() {
            var fc3x = function() {
                this.bss1x();
                return this.cm2x.apply(this, arguments)
            };
            fc3x.prototype.bss1x = NEJ.F;
            fc3x.prototype.cm2x = NEJ.F;
            fc3x.O1x = function(Ay0x, bsQ1x) {
                if (brs1x(Ay0x)) return;
                if (bsQ1x == null || !!bsQ1x) NEJ.X(this, Ay0x, brs1x);
                this.ckr9i = Ay0x;
                this.cg2x = Ay0x.prototype;
                var bB2x = function() {};
                bB2x.prototype = Ay0x.prototype;
                this.prototype = new bB2x;
                var Dq1x = this.prototype;
                Dq1x.constructor = this;
                var dO3x;
                for (var x in bjU0x) {
                    dO3x = brE1x(bjU0x[x], tl8d);
                    if (!dO3x || !this.cg2x[x]) continue;
                    Dq1x[x] = function(T1x) {
                        return function() { this[T1x].apply(this, arguments) }
                    }(dO3x)
                }
                var CC0x = {};
                for (var x in tl8d) {
                    dO3x = brE1x(tl8d[x], bjU0x);
                    if (!dO3x || !this.cg2x[dO3x]) continue;
                    CC0x[dO3x] = Ay0x;
                    Dq1x[x] = function(T1x) {
                        return function() {
                            var m1x, bB2x = this.bbW8O[T1x],
                                ZX7Q = bB2x.prototype[T1x];
                            this.bbW8O[T1x] = bB2x.ckr9i || Ay0x;
                            if (!!ZX7Q) m1x = ZX7Q.apply(this, arguments);
                            this.bbW8O[T1x] = Ay0x;
                            return m1x
                        }
                    }(dO3x)
                }
                Dq1x.bss1x = function() { this.bbW8O = NEJ.X({}, CC0x) };
                Dq1x.cxu2x = Dq1x.cs2x;
                return Dq1x
            };
            return fc3x
        }
    }();
    NEJ.X = function(fZ3x, bN2x, dD3x) {
        if (!fZ3x || !bN2x) return fZ3x;
        dD3x = dD3x || NEJ.F;
        for (var x in bN2x) {
            if (bN2x.hasOwnProperty(x) && !dD3x(bN2x[x], x)) fZ3x[x] = bN2x[x]
        }
        return fZ3x
    };
    NEJ.EX = function(fZ3x, bN2x) {
        if (!fZ3x || !bN2x) return fZ3x;
        for (var x in fZ3x) {
            if (fZ3x.hasOwnProperty(x) && bN2x[x] != null) fZ3x[x] = bN2x[x]
        }
        return fZ3x
    };
    var EF1x = Function.prototype;
    EF1x.ee3x = function(lp5u, bcS8K) {
        var f = NEJ.F,
            bcS8K = bcS8K || f,
            lp5u = lp5u || f,
            db2x = this;
        return function() {
            var d1x = { args: NEJ.R.slice.call(arguments, 0) };
            lp5u(d1x);
            if (!d1x.stopped) {
                d1x.value = db2x.apply(this, d1x.args);
                bcS8K(d1x)
            }
            return d1x.value
        }
    };
    EF1x.g1x = function() {
        var bg1x = arguments,
            fZ3x = arguments[0],
            blG0x = this;
        return function() {
            var tY8Q = NEJ.R.slice.call(bg1x, 1);
            NEJ.R.push.apply(tY8Q, arguments);
            return blG0x.apply(fZ3x || window, tY8Q)
        }
    };
    EF1x.ed3x = function() {
        var bg1x = arguments,
            fZ3x = NEJ.R.shift.call(bg1x),
            blG0x = this;
        return function() {
            NEJ.R.push.apply(arguments, bg1x);
            return blG0x.apply(fZ3x || window, arguments)
        }
    };
    var EF1x = String.prototype;
    if (!EF1x.trim) {
        EF1x.trim = function() {
            var cM2x = /(?:^\s+)|(?:\s+$)/g;
            return function() {
                return this.replace(cM2x, "")
            }
        }()
    }
    if (!window.MWF) window.MWF = NEJ;
    if (!window.mwf) window.mwf = NEJ.P("nej");
    if (!window.console) {
        NEJ.P("console").log = NEJ.F;
        NEJ.P("console").error = NEJ.F
    }
    var lt, gt, amp, nbsp, quot, apos, copy, reg
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        N1x = c1x("nej.p"),
        ZS7L = window.navigator.platform,
        sq8i = window.navigator.userAgent;
    var jU5Z = { mac: ZS7L, win: ZS7L, linux: ZS7L, ipad: sq8i, ipod: sq8i, iphone: ZS7L, android: sq8i };
    N1x.Qy5D = jU5Z;
    for (var x in jU5Z) jU5Z[x] = (new RegExp(x, "i")).test(jU5Z[x]);
    jU5Z.ios = jU5Z.ipad || jU5Z.iphone || jU5Z.ipod;
    jU5Z.tablet = jU5Z.ipad;
    jU5Z.desktop = jU5Z.mac || jU5Z.win || jU5Z.linux && !jU5Z.android;
    var hv4z = { engine: "unknow", release: "unknow", browser: "unknow", version: "unknow", prefix: { css: "", pro: "", clz: "" } };
    N1x.cR2x = hv4z;
    if (/msie\s+(.*?);/i.test(sq8i) || /trident\/.+rv:([\d\.]+)/i.test(sq8i)) {
        hv4z.engine = "trident";
        hv4z.browser = "ie";
        hv4z.version = RegExp.$1;
        hv4z.prefix = { css: "ms", pro: "ms", clz: "MS", evt: "MS" };
        var ns6m = { 6: "2.0", 7: "3.0", 8: "4.0", 9: "5.0", 10: "6.0", 11: "7.0" };
        hv4z.release = ns6m[document.documentMode] || ns6m[parseInt(hv4z.version)]
    } else if (/webkit\/?([\d.]+?)(?=\s|$)/i.test(sq8i)) {
        hv4z.engine = "webkit";
        hv4z.release = RegExp.$1 || "";
        hv4z.prefix = { css: "webkit", pro: "webkit", clz: "WebKit" }
    } else if (/rv\:(.*?)\)\s+gecko\//i.test(sq8i)) {
        hv4z.engine = "gecko";
        hv4z.release = RegExp.$1 || "";
        hv4z.browser = "firefox";
        hv4z.prefix = { css: "Moz", pro: "moz", clz: "Moz" };
        if (/firefox\/(.*?)(?=\s|$)/i.test(sq8i)) hv4z.version = RegExp.$1 || ""
    } else if (/presto\/(.*?)\s/i.test(sq8i)) {
        hv4z.engine = "presto";
        hv4z.release = RegExp.$1 || "";
        hv4z.browser = "opera";
        hv4z.prefix = { css: "O", pro: "o", clz: "O" };
        if (/version\/(.*?)(?=\s|$)/i.test(sq8i)) hv4z.version = RegExp.$1 || ""
    }
    if (hv4z.browser == "unknow") {
        var ns6m = ["chrome", "maxthon", "safari"];
        for (var i = 0, l = ns6m.length, T1x; i < l; i++) {
            T1x = ns6m[i] == "safari" ? "version" : ns6m[i];
            if ((new RegExp(T1x + "/(.*?)(?=\\s|$)", "i")).test(sq8i)) {
                hv4z.browser = ns6m[i];
                hv4z.version = RegExp.$1.trim();
                break
            }
        }
    }
    N1x.btQ1x = {};
    var ZP7I = hv4z.engine != "trident";
    N1x.mt6n = { gecko: hv4z.engine != "gecko", webkit: hv4z.engine != "webkit", presto: hv4z.engine != "presto", trident0: ZP7I || hv4z.release > "2.0", trident1: ZP7I || hv4z.release < "6.0", trident2: ZP7I || hv4z.release > "3.0", trident: ZP7I || hv4z.release >= "6.0" }
})();
(function() {
    var it5y = NEJ.P("nej.c"),
        R1x = {};
    var blR0x = function() {
        var cM2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V1x) {
            V1x = V1x || "";
            if (cM2x.test(V1x)) return RegExp.$1;
            return location.protocol + "//" + location.host
        }
    }();
    var Js3x = function() {
        var bue1x = function(i1x, bv2x) {
            if (!i1x || !i1x.length) return;
            for (var i = 0, l = i1x.length, kF5K; i < l; i++) {
                kF5K = i1x[i];
                if (kF5K.indexOf("://") > 0) bv2x[blR0x(kF5K)] = kF5K
            }
        };
        var bc1x = { portrait: { name: "portrait", dft: "portrait/" }, "ajax.swf": { name: "ajax", dft: "nej_proxy_flash.swf" }, "chart.swf": { name: "chart", dft: "nej_flex_chart.swf" }, "audio.swf": { name: "audio", dft: "nej_player_audio.swf" }, "video.swf": { name: "video", dft: "nej_player_video.swf" }, "clipboard.swf": { name: "clipboard", dft: "nej_clipboard.swf" } };
        return function(bN2x) {
            it5y.EJ1x("root", bN2x.root || "/res/");
            var biN9E, fr3x = it5y.y1x("root");
            for (var x in bc1x) {
                biN9E = bc1x[x];
                it5y.EJ1x(x, bN2x[biN9E.name] || fr3x + biN9E.dft)
            }
            var Aq0x = bN2x.p_csrf;
            if (Aq0x == !0) { Aq0x = { cookie: "AntiCSRF", param: "AntiCSRF" } }
            it5y.EJ1x("csrf", NEJ.EX({ cookie: "", param: "" }, Aq0x));
            R1x.frames = {};
            bue1x(bN2x.p_frame, R1x.frames);
            R1x.flashs = {};
            bue1x(bN2x.p_flash, R1x.flashs)
        }
    }();
    it5y.EJ1x = function(J1x, A1x) { R1x[J1x] = A1x };
    it5y.y1x = function(J1x) {
        return R1x[J1x]
    };
    it5y.ccN8F = function(V1x) {
        var ub8T = blR0x(V1x);
        return R1x.frames[ub8T] || ub8T + "/res/nej_proxy_frame.html"
    };
    it5y.ciV9M = function(V1x) {
        return R1x.flashs[blR0x(V1x)]
    };
    Js3x(window.NEJ_CONF || NEJ.O)
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        it5y = c1x("nej.c"),
        bN2x = window.NEJ_CONF || NEJ.O;
    if (N1x.mt6n.trident) return;
    it5y.EJ1x("storage.swf", bN2x.storage || it5y.y1x("root") + "nej_storage.swf");
    if (N1x.cR2x.release < "4.0") { it5y.EJ1x("blank.png", bN2x.blank || it5y.y1x("root") + "nej_blank.gif") }
    var i1x = bN2x.xdr,
        fR3x = /^(https?:\/\/.*?)(?=\/|$)/i,
        jj5o = /[\/?=&]/i;
    var buR2x = function(V1x) {
        return (fR3x.test(V1x) ? RegExp.$1 : "").toLowerCase()
    };
    if (!!i1x && !!i1x.length)
        for (var i = i1x.length - 1, V1x, J1x; i >= 0; i--) {
            V1x = i1x[i];
            J1x = buR2x(V1x);
            if (!!J1x) it5y.EJ1x(J1x, V1x)
        }
    it5y.cxh2x = function(V1x) {
        var J1x = buR2x(V1x);
        if (!J1x) {
            if (jj5o.test(V1x)) { J1x = location.protocol + "//" + location.host } else if (V1x.indexOf("://") < 0) { J1x = location.protocol + "//" + V1x } else { J1x = V1x }
        }
        return it5y.y1x(J1x) || J1x + "/res/nej_xdomain.html"
    }
})();
(function() {
    var c1x = NEJ.P,
        it5y = c1x("nej.c"),
        N1x = c1x("nej.g"),
        fT3x = +(new Date);
    N1x.cxd2x = 1e4 - fT3x;
    N1x.bhS9J = 10001 - fT3x;
    N1x.cxc2x = 10002 - fT3x;
    N1x.bvU2x = 10003 - fT3x;
    N1x.bRn6h = 10004 - fT3x;
    N1x.cwW2x = 10005 - fT3x;
    N1x.blK0x = 10006 - fT3x;
    N1x.bSL6F = 10007 - fT3x;
    N1x.xG9x = "Content-Type";
    N1x.cwR2x = "text/plain";
    N1x.DL1x = "multipart/form-data";
    N1x.bTZ6T = "application/x-www-form-urlencoded";
    N1x.baH7A = it5y.y1x("blank.png") || "data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
})();
(function() {
    var c1x = NEJ.P,
        eX3x = NEJ.R,
        N1x = c1x("nej.p"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        ba1x = c1x("nej.h");
    var kP5U = N1x.cR2x.prefix,
        bwM2x = N1x.btQ1x,
        bXm7f = { scale: "scale({x|1},{y|1})", rotate: "rotate({a})", translate: "translate({x},{y})" },
        cbF8x = { scale: "scale3d({x|1},{y|1},{z|1})", rotate: "rotate3d({x},{y},{z},{a})", translate: "translate3d({x},{y},{z})" },
        Nd4h = { transition: !0, transform: !0, animation: !0, keyframes: !0, box: !0, "box-pack": !0, "box-flex": !0, marquee: !0, "border-radius": !0, "user-select": !0 };
    var Js3x = function() {
        var ro7h = ba1x.byQ2x();
        bwM2x.css3d = !!ro7h && ro7h.m41 != null;
        var cM2x = /-([a-z])/g;
        for (var x in Nd4h) { Nd4h[byZ2x(x)] = Nd4h[x] }
    };
    var byZ2x = function() {
        var cM2x = /-([a-z])/g;
        return function(T1x) {
            T1x = T1x || "";
            return T1x.replace(cM2x, function($1, $2) {
                return $2.toUpperCase()
            })
        }
    }();
    var bzK2x = function(T1x) {
        return (!bwM2x.css3d ? bXm7f : cbF8x)[T1x]
    };
    var bzL2x = function() {
        var cM2x = /\s+/;
        return function(fc3x) {
            fc3x = (fc3x || "").trim();
            return !!fc3x ? fc3x.split(cM2x) : null
        }
    }();
    var Zw7p = function(E1x, t1x, fc3x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return;
        k1x.be1x(bzL2x(fc3x), function(dI3x) { E1x.classList[t1x](dI3x) })
    };
    ba1x.EX1x = function(i1x) {
        return eX3x.slice.call(i1x, 0)
    };
    ba1x.boI0x = function(E1x) {
        return ba1x.EX1x(E1x.children)
    };
    ba1x.bpc1x = function(E1x, fc3x) {
        return ba1x.EX1x(E1x.getElementsByClassName(fc3x))
    };
    ba1x.bqD1x = function(E1x, EY1x) { Zw7p(E1x, "add", EY1x) };
    ba1x.bax7q = function(E1x, Fa1x) { Zw7p(E1x, "remove", Fa1x) };
    ba1x.QK5P = function(E1x, Fa1x, EY1x) {
        Zw7p(E1x, "remove", Fa1x);
        Zw7p(E1x, "add", EY1x)
    };
    ba1x.bcy8q = function(E1x, fc3x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return !1;
        var i1x = E1x.classList;
        if (!i1x || !i1x.length) return !1;
        return k1x.cV2x(bzL2x(fc3x), function(dI3x) {
            return i1x.contains(dI3x)
        }) >= 0
    };
    ba1x.bcX8P = function(E1x, dI3x) {};
    ba1x.bdr8j = function(E1x) {};
    ba1x.bdz8r = function(fv3x, nc6W) {
        fv3x.selectionEnd = nc6W.end || 0;
        fv3x.selectionStart = nc6W.start || 0;
        fv3x.focus()
    };
    ba1x.bfz9q = function(fv3x) {
        return { end: fv3x.selectionEnd, start: fv3x.selectionStart }
    };
    ba1x.bgm9d = function() {
        var BS0x = function(dI3x, d1x) {
            var E1x = h1x.U1x(d1x);
            if (!E1x.value) a0x.w1x(E1x, dI3x)
        };
        var Fc1x = function(dI3x, d1x) { a0x.x1x(h1x.U1x(d1x), dI3x) };
        return function(E1x, eI3x, dI3x) {
            if (eI3x == 1) { h1x.q1x(E1x, "blur", BS0x.g1x(null, dI3x)) }
            if (eI3x == 1 || eI3x == -1) { h1x.q1x(E1x, "focus", Fc1x.g1x(null, dI3x)) }
        }
    }();
    ba1x.bjq9h = function(G1x) {
        return (new XMLSerializer).serializeToString(G1x) || ""
    };
    ba1x.bjH0x = function(Ab0x) {
        var fr3x = (new DOMParser).parseFromString(Ab0x, "text/xml").documentElement;
        return fr3x.nodeName == "parsererror" ? null : fr3x
    };
    ba1x.bjP0x = function(E1x) {};
    ba1x.mC6w = function(E1x) {
        return null
    };
    ba1x.bkS0x = function(E1x) {
        return null
    };
    ba1x.bkY0x = function(dE3x) {};
    ba1x.bls0x = function() {
        var bg1x = ba1x.EX1x(arguments);
        bg1x[0] = a0x.y1x(bg1x[0]);
        if (!bg1x[0]) return null;
        bg1x[1] = (bg1x[1] || "").toLowerCase();
        if (!bg1x[1]) return null;
        return bg1x
    };
    ba1x.Aa0x = function() {
        var um8e = { touchstart: "mousedown", touchmove: "mousemove", touchend: "mouseup" },
            ir4v = { transitionend: "TransitionEnd", animationend: "AnimationEnd", animationstart: "AnimationStart", animationiteration: "AnimationIteration" };
        var clT0x = function(t1x) {
            return (kP5U.evt || kP5U.pro) + t1x
        };
        return function() {
            var bg1x = ba1x.bls0x.apply(ba1x, arguments);
            if (!bg1x) return;
            var Zj7c = ir4v[bg1x[1]],
                Zi7b = um8e[bg1x[1]];
            if (!!Zj7c) {
                bg1x[4] = bg1x[1];
                bg1x[1] = clT0x(Zj7c)
            } else if (!!Zi7b) {
                var T1x = "on" + bg1x[1];
                if (!(T1x in bg1x[0])) {
                    bg1x[4] = bg1x[1];
                    bg1x[1] = Zi7b
                }
            }
            return bg1x
        }
    }();
    ba1x.bmN0x = function() {
        var bg1x = arguments;
        bg1x[0].addEventListener(bg1x[1], bg1x[2], !!bg1x[3])
    };
    ba1x.Zh7a = function() {
        var bg1x = arguments;
        bg1x[0].removeEventListener(bg1x[1], bg1x[2], !!bg1x[3])
    };
    ba1x.boo0x = function(E1x, t1x, e1x) {
        var d1x = document.createEvent("Event");
        d1x.initEvent(t1x, !0, !0);
        NEJ.X(d1x, e1x);
        E1x.dispatchEvent(d1x)
    };
    ba1x.byQ2x = function() {
        var fR3x = /\((.*?)\)/,
            jj5o = /\s*,\s*/,
            i1x = ["m11", "m12", "m21", "m22", "m41", "m42"];
        var Zd7W = function(ro7h) {
            var id4h = {};
            if (fR3x.test(ro7h || "")) { k1x.be1x(RegExp.$1.split(jj5o), function(A1x, s1x) { id4h[i1x[s1x]] = A1x || "" }) }
            return id4h
        };
        return function(ro7h) {
            if (!!window.CSSMatrix) return new CSSMatrix(ro7h);
            var T1x = kP5U.clz + "CSSMatrix";
            if (!!window[T1x]) return new window[T1x](ro7h || "");
            return Zd7W(ro7h)
        }
    }();
    ba1x.bzN2x = function() {
        var cM2x = /\{(.*?)\}/g;
        return function(T1x, bv2x) {
            bv2x = bv2x || o;
            var pO7H = bzK2x(T1x);
            return !pO7H ? "" : pO7H.replace(cM2x, function($1, $2) {
                var bs2x = $2.split("|");
                return bv2x[bs2x[0]] || bs2x[1] || "0"
            })
        }
    }();
    ba1x.bay7r = function(E1x, T1x, A1x) { E1x.style[ba1x.bzO2x(T1x)] = A1x };
    ba1x.bzO2x = function() {
        var cM2x = /^[a-z]/,
            bbi7b = kP5U.css;
        var cml0x = function(T1x) {
            return T1x.replace(cM2x, function($1) {
                return bbi7b + $1.toUpperCase()
            })
        };
        return function(T1x) {
            T1x = byZ2x(T1x);
            var cnn0x = ba1x.cob0x(T1x, Nd4h);
            return cnn0x ? cml0x(T1x) : T1x
        }
    }();
    ba1x.cob0x = function() {
        var cM2x = /^([a-z]+?)[A-Z]/;
        return function(T1x, bv2x) {
            if (!bv2x[T1x]) {
                if (cM2x.test(T1x)) T1x = RegExp.$1
            }
            return !!bv2x[T1x]
        }
    }();
    ba1x.cox1x = function() {
        var cM2x = /\$<(.*?)>/gi,
            bbi7b = "-" + kP5U.css.toLowerCase() + "-";
        return function(je5j) {
            return je5j.replace(cM2x, function($1, $2) {
                var eM3x = $2,
                    bs2x = eM3x.split("|"),
                    pO7H = bzK2x(bs2x[0]);
                if (!!pO7H) {
                    return ba1x.bzN2x(bs2x[0], k1x.hl4p(bs2x[1]))
                }
                return !ba1x.bOE5J(eM3x, Nd4h) ? eM3x : bbi7b + eM3x
            })
        }
    }();
    ba1x.bOE5J = function(T1x, bv2x) {
        return !!bv2x[T1x]
    };
    ba1x.bdv8n = function(cc2x, je5j) { cc2x.textContent = je5j };
    ba1x.bdE8w = function(cc2x, je5j) {
        var wo9f = cc2x.sheet,
            bq2x = wo9f.cssRules.length;
        wo9f.insertRule(je5j, bq2x);
        return wo9f.cssRules[bq2x]
    };
    ba1x.cvS2x = function(E1x, e1x) {};
    ba1x.Za7T = function(YW7P) {
        return (YW7P || "").toLowerCase() != "transparent"
    };
    ba1x.bPr5w = function(E1x) {};
    ba1x.bgU9L = function(E1x, T1x) {
        if (!!E1x.getAttribute) return E1x.getAttribute(T1x);
        return ""
    };
    ba1x.YU7N = function(fa3x) { a0x.cH2x(fa3x) };
    Js3x()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        N1x = c1x("nej.p"),
        ba1x = c1x("nej.h");
    if (N1x.mt6n.trident0) return;
    var fT3x = +(new Date);
    R1x = {};
    ba1x.bcX8P = ba1x.bcX8P.ee3x(function(d1x) {
        d1x.stopped = !0;
        var bg1x = d1x.args,
            C1x = a0x.kB5G(bg1x[0]),
            J1x = "hover-" + C1x;
        if (!C1x || !!R1x[J1x]) return;
        R1x[J1x] = !0;
        h1x.q1x(C1x, "mouseenter", a0x.x1x.g1x(a0x, C1x, bg1x[1]));
        h1x.q1x(C1x, "mouseleave", a0x.w1x.g1x(a0x, C1x, bg1x[1]))
    });
    ba1x.bdr8j = function() {
        var cvM2x = function() {};
        return ba1x.bdr8j.ee3x(function(d1x) {
            d1x.stopped = !0;
            var E1x = d1x.args[0],
                C1x = "fixed-" + a0x.kB5G(E1x);
            if (!!R1x[C1x]) return;
            var bc1x = {};
            R1x[C1x] = bc1x
        })
    }();
    ba1x.bjP0x = ba1x.bjP0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        var E1x = d1x.args[0],
            cc2x = E1x.style,
            bBI3x = a0x.om6g();
        cc2x.width = bBI3x.scrollWidth + "px";
        cc2x.height = bBI3x.scrollHeight + "px"
    });
    ba1x.mC6w = ba1x.mC6w.ee3x(function(d1x) {
        d1x.stopped = !0;
        var E1x = d1x.args[0],
            kd5i = R1x[E1x.msk];
        if (!kd5i) {
            E1x.msk = fT3x++;
            kd5i = a0x.cU2x("iframe");
            kd5i.style.position = "absolute";
            R1x[E1x.msk] = kd5i
        }
        d1x.value = kd5i;
        var cc2x = kd5i.style;
        cc2x.top = (parseInt(a0x.cZ2x(E1x, "top")) || 0) + "px";
        cc2x.left = (parseInt(a0x.cZ2x(E1x, "left")) || 0) + "px";
        cc2x.width = E1x.offsetWidth + "px";
        cc2x.height = E1x.offsetHeight + "px";
        E1x.insertAdjacentElement("beforeBegin", kd5i)
    });
    ba1x.bkS0x = ba1x.bkS0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        var kd5i = R1x[d1x.args[0].msk];
        if (!!kd5i) a0x.mm6g(kd5i)
    })
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        a0x = c1x("nej.e"),
        ba1x = c1x("nej.h");
    if (N1x.mt6n.trident1) return;
    ba1x.Aa0x = function() {
        var um8e = { touchcancel: "MSPointerCancel", touchstart: "MSPointerDown", touchmove: "MSPointerMove", touchend: "MSPointerUp" };
        return ba1x.Aa0x.ee3x(function(d1x) {
            var bg1x = ba1x.bls0x.apply(ba1x, d1x.args);
            if (!bg1x) {
                d1x.stopped = !0;
                return
            }
            var t1x = um8e[bg1x[1]];
            if (!!t1x && ("on" + t1x).toLowerCase() in bg1x[0]) {
                bg1x[4] = bg1x[1];
                bg1x[1] = t1x;
                d1x.stopped = !0;
                d1x.value = bg1x
            }
        })
    }();
    ba1x.Za7T = function(YW7P) {
        return !0
    };
    ba1x.YU7N = ba1x.YU7N.ee3x(function(d1x) {
        d1x.stopped = !0;
        var fa3x = d1x.args[0];
        a0x.X1x(fa3x, "display", "none");
        try { fa3x.contentWindow.document.body.innerHTML = "&nbsp;" } catch (ex) {}
    })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        N1x = c1x("nej.p"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        ba1x = c1x("nej.h"),
        bjS0x = {};
    if (N1x.mt6n.trident) return;
    ba1x.EX1x = ba1x.EX1x.ee3x(function(d1x) {
        d1x.stopped = !0;
        var i1x = d1x.args[0];
        if (!i1x) {
            d1x.value = null;
            return
        }
        var s1x = 0,
            m1x = [];
        while (!!i1x[s1x]) { m1x.push(i1x[s1x++]) }
        d1x.value = m1x
    });
    ba1x.boI0x = ba1x.boI0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        var bs2x = [];
        k1x.be1x(d1x.args[0].childNodes, function(f1x) {
            if (f1x.nodeType == 1) bs2x.push(f1x)
        });
        d1x.value = bs2x
    });
    ba1x.bpc1x = ba1x.bpc1x.ee3x(function(d1x) {
        var E1x = d1x.args[0];
        if (!!E1x.getElementsByClassName) return;
        d1x.stopped = !0;
        var m1x = [],
            bko0x = new RegExp("(\\s|^)(?:" + d1x.args[1].replace(/\s+/g, "|") + ")(?=\\s|$)");
        k1x.be1x(E1x.getElementsByTagName("*"), function(f1x) {
            if (bko0x.test(f1x.className)) m1x.push(f1x)
        });
        d1x.value = m1x
    });
    ba1x.bdz8r = ba1x.bdz8r.ee3x(function(d1x) {
        var fv3x = d1x.args[0],
            nc6W = d1x.args[1];
        if (fv3x.selectionStart == null) {
            d1x.stopped = !0;
            var cG2x = fv3x.createTextRange();
            cG2x.collapse(!0);
            cG2x.moveStart("character", nc6W.start);
            cG2x.moveEnd("character", nc6W.end - nc6W.start);
            cG2x.select();
            fv3x.focus()
        }
    });
    ba1x.bfz9q = ba1x.bfz9q.ee3x(function(d1x) {
        var fv3x = d1x.args[0];
        fv3x.focus();
        if (fv3x.selectionStart == null) {
            d1x.stopped = !0;
            var bBK3x = document.selection.createRange();
            var bBM3x = fv3x.createTextRange();
            bBM3x.moveToBookmark(bBK3x.getBookmark());
            var blp0x = fv3x.createTextRange();
            blp0x.collapse(!0);
            blp0x.setEndPoint("EndToStart", bBM3x);
            var in4r = blp0x.text.length;
            d1x.value = { start: in4r, end: in4r + bBK3x.text.length }
        }
    });
    ba1x.bjq9h = ba1x.bjq9h.ee3x(function(d1x) {
        if (!!window.XMLSerializer) return;
        d1x.stopped = !0;
        var E1x = d1x.args[0];
        d1x.value = E1x.xml != null ? E1x.xml : E1x.outHTML
    });
    ba1x.bjH0x = function() {
        var KG3x = ["Msxml2.DOMDocument.6.0", "Msxml2.DOMDocument.3.0"];
        var bPJ5O = function() {
            try {
                for (var i = 0, l = KG3x.length; i < l; i++) return new ActiveXObject(KG3x[i])
            } catch (ex) {
                return null
            }
        };
        return ba1x.bjH0x.ee3x(function(d1x) {
            if (!!window.DOMParser) return;
            d1x.stopped = !0;
            var BU0x = bPJ5O();
            if (!!BU0x && BU0x.loadXML(d1x.args[0]) && !BU0x.parseError.errorCode) d1x.value = BU0x.documentElement
        })
    }();
    ba1x.Aa0x = function() {
        var ir4v = { input: "propertychange", load: "readystatechange" };
        for (var x in ir4v) bjS0x[ir4v[x]] = !0;
        var bPL5Q = function(E1x, t1x) {
            if ("on" + t1x in E1x) return null;
            return ir4v[t1x] || ""
        };
        var bPO5T = function(t1x, db2x) {
            var dt3x = db2x;
            switch (t1x) {
                case "readystatechange":
                    dt3x = function(d1x) {
                        var E1x = h1x.U1x(d1x) || this;
                        if (E1x.readyState == "loaded" || E1x.readyState == "complete") {
                            d1x.target = E1x;
                            db2x.call(E1x, d1x)
                        }
                    };
                    break;
                case "propertychange":
                    dt3x = function(d1x) {
                        var E1x = h1x.U1x(d1x) || this;
                        if ("value" in E1x && d1x.propertyName == "value") {
                            d1x.target = E1x;
                            db2x.call(E1x, d1x)
                        }
                    };
                    break
            }
            return dt3x
        };
        return ba1x.Aa0x.ee3x(function(d1x) {
            var bg1x = ba1x.bls0x.apply(ba1x, d1x.args);
            if (!bg1x) {
                d1x.stopped = !0;
                return
            }
            var t1x = bPL5Q(bg1x[0], bg1x[1]);
            if (!!t1x) {
                d1x.stopped = !0;
                bg1x[4] = bg1x[1];
                bg1x[1] = t1x;
                if (!!bg1x[2]) {
                    bg1x[5] = bg1x[2];
                    bg1x[2] = bPO5T(bg1x[1], bg1x[2])
                }
                d1x.value = bg1x
            }
        }, function(d1x) {
            var bg1x = d1x.value;
            if (!bg1x[0] || !k1x.gc3x(bg1x[2])) return;
            if (!k1x.gc3x(bg1x[5])) bg1x[5] = bg1x[2];
            bg1x[2] = bg1x[2].g1x(bg1x[0])
        })
    }();
    ba1x.bmN0x = ba1x.bmN0x.ee3x(function(d1x) {
        var bg1x = d1x.args;
        if (!!bjS0x[bg1x[1]] || !document.addEventListener) {
            d1x.stopped = !0;
            bg1x[0].attachEvent("on" + bg1x[1], bg1x[2])
        }
    });
    ba1x.Zh7a = ba1x.Zh7a.ee3x(function(d1x) {
        var bg1x = d1x.args;
        if (!!bjS0x[bg1x[1]] || !document.removeEventListener) {
            d1x.stopped = !0;
            bg1x[0].detachEvent("on" + bg1x[1], bg1x[2])
        }
    });
    ba1x.boo0x = ba1x.boo0x.ee3x(function(d1x) {
        if (!document.createEvent) {
            d1x.stopped = !0;
            var bg1x = d1x.args,
                bBP3x = document.createEventObject();
            NEJ.X(bBP3x, bg1x[2]);
            try { bg1x[0].fireEvent("on" + bg1x[1], bBP3x) } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }
    });
    ba1x.bay7r = ba1x.bay7r.ee3x(function(d1x) {
        var bg1x = d1x.args,
            T1x = bg1x[1].toLowerCase();
        if (T1x == "opacity" && !(T1x in document.body.style)) {
            bg1x[1] = "filter";
            bg1x[2] = "alpha(opacity=" + bg1x[2] * 100 + ")"
        }
    });
    ba1x.bdv8n = function() {
        var ge3x = 30;
        return ba1x.bdv8n.ee3x(function(d1x) {
            var E1x = d1x.args[0];
            if (!E1x.styleSheet) return;
            d1x.stopped = !0;
            var je5j = d1x.args[1];
            var i1x = document.styleSheets;
            if (i1x.length > ge3x) {
                E1x = i1x[ge3x];
                je5j = E1x.cssText + je5j
            } else { E1x = E1x.styleSheet }
            E1x.cssText = je5j
        })
    }();
    ba1x.bdE8w = ba1x.bdE8w.ee3x(function(d1x) {
        var bg1x = d1x.args,
            wo9f = bg1x[0].sheet;
        if (!!wo9f) return;
        d1x.stopped = !0;
        var wo9f = bg1x[0].styleSheet,
            bq2x = wo9f.rules.length,
            bs2x = bg1x[1].split(/[\{\}]/);
        wo9f.addRule(bs2x[0], bs2x[1], bq2x);
        d1x.value = wo9f.rules[bq2x]
    });
    ba1x.bgm9d = function() {
        var BS0x = function(dI3x, d1x) { a0x.w1x(h1x.U1x(d1x), dI3x) };
        return ba1x.bgm9d.ee3x(function(d1x) {
            if (N1x.cR2x.release >= "4.0") return;
            var bg1x = d1x.args;
            if (bg1x[1] != 1) {
                h1x.q1x(bg1x[0], "blur", BS0x.g1x(null, bg1x[2]));
                bg1x[1] = -1
            }
        })
    }();
    ba1x.Za7T = function(YW7P) {
        return !0
    };
    ba1x.bgU9L = ba1x.bgU9L.ee3x(function(d1x) {
        var bg1x = d1x.args,
            f1x = (bg1x[0].attributes || Y1x)[bg1x[1]];
        if (!!f1x) {
            d1x.stopped = !0;
            d1x.value = f1x.value
        }
    }, function(d1x) {
        var bg1x = d1x.args;
        if (bg1x[1] == "maxlength" && d1x.value == 2147483647) d1x.value = ""
    });
    if (N1x.cR2x.release < 5) {
        ba1x.bkY0x = function() {
            var eV3x, fa3x, jo5t = [],
                boS0x = "cb-" + +(new Date),
                bi1x = '<script>parent.nej.h["' + boS0x + '"] = !0;parent.location.hash = decodeURIComponent("#<HASH>");</scr' + "ipt>";
            var bCi3x = function() {
                eV3x = window.clearTimeout(eV3x);
                if (!jo5t.length) return;
                var dE3x = jo5t.shift();
                try {
                    var uC8u = fa3x.contentWindow.document;
                    uC8u.open();
                    uC8u.write("<head><title>");
                    uC8u.write(document.title);
                    uC8u.write("</title>");
                    uC8u.write(bi1x.replace("#<HASH>", encodeURIComponent(dE3x)));
                    uC8u.write("</head><body></body>");
                    if (location.hostname != document.domain) uC8u.domain = document.domain;
                    uC8u.close();
                    ba1x[boS0x] = !1
                } catch (ex) {
                    console.log(ex.message || ex);
                    jo5t.unshift(dE3x)
                }
                eV3x = window.setTimeout(bCi3x, 50)
            };
            return ba1x.bkY0x.ee3x(function(d1x) {
                d1x.stopped = !0;
                var dE3x = d1x.args[0];
                if (!!ba1x[boS0x] || !fa3x && !dE3x) return;
                jo5t.push(dE3x);
                if (!fa3x) fa3x = a0x.YM7F();
                bCi3x()
            })
        }()
    }
    try { document.execCommand("BackgroundImageCache", !1, !0) } catch (e) {}
})();
(function() {
    var c1x = NEJ.P,
        h1x = c1x("nej.v"),
        ba1x = c1x("nej.h"),
        N1x = c1x("nej.p"),
        YL7E = N1x.btQ1x;
    if (N1x.mt6n.gecko) return;
    var Js3x = function() {
        YL7E.css3d = YL7E.css3d || "MozPerspective" in document.body.style;
        if (!document.body.insertAdjacentElement) HTMLElement.prototype.insertAdjacentElement = function(hK4O, E1x) {
            if (!hK4O || !E1x) return;
            switch (hK4O) {
                case "beforeEnd":
                    this.appendChild(E1x);
                    return;
                case "beforeBegin":
                    this.parentNode.insertBefore(E1x, this);
                    return;
                case "afterBegin":
                    !this.firstChild ? this.appendChild(E1x) : this.insertBefore(E1x, this.firstChild);
                    return;
                case "afterEnd":
                    !this.nextSibling ? this.parentNode.appendChild(E1x) : this.parentNode.insertBefore(E1x, this.nextSibling);
                    return
            }
        };
        if (!("innerText" in document.body)) {
            HTMLElement.prototype["__defineGetter__"]("innerText", function() {
                return this.textContent
            });
            HTMLElement.prototype["__defineSetter__"]("innerText", function(bi1x) { this.textContent = bi1x })
        }
    };
    ba1x.Aa0x = function() {
        var fR3x = /^(?:transitionend|animationend|animationstart|animationiteration)$/i;
        return ba1x.Aa0x.ee3x(function(d1x) {
            var bg1x = d1x.args;
            if (fR3x.test(bg1x[1] || "")) {
                d1x.stopped = !0;
                d1x.value = bg1x
            }
        })
    }();
    ba1x.bPr5w = function() {
        var bRz6t = function(d1x) {
            h1x.bh1x(d1x);
            h1x.U1x(d1x).control.click()
        };
        return function(E1x) { h1x.q1x(E1x, "click", bRz6t) }
    }();
    Js3x()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        ba1x = c1x("nej.h");
    var YI7B = function() {
        var ns6m = !!document.body.classList;
        return function() {
            return ns6m
        }
    }();
    var bCE3x = function() {
        var cM2x = /\s+/g;
        return function(fc3x) {
            fc3x = (fc3x || "").trim();
            return !fc3x ? null : new RegExp("(\\s|^)(?:" + fc3x.replace(cM2x, "|") + ")(?=\\s|$)", "g")
        }
    }();
    ba1x.QK5P = ba1x.QK5P.ee3x(function(d1x) {
        if (YI7B()) return;
        d1x.stopped = !0;
        var bg1x = d1x.args,
            E1x = a0x.y1x(bg1x[0]);
        if (!E1x || !bg1x[1] && !bg1x[2]) return;
        var fc3x = E1x.className || "";
        var EY1x = " " + (bg1x[2] || ""),
            Fa1x = bCE3x((bg1x[1] || "") + EY1x);
        !!Fa1x && (fc3x = fc3x.replace(Fa1x, "$1"));
        E1x.className = (fc3x + EY1x).replace(/\s+/g, " ").trim()
    });
    ba1x.bqD1x = ba1x.bqD1x.ee3x(function(d1x) {
        if (YI7B()) return;
        d1x.stopped = !0;
        var bg1x = d1x.args;
        ba1x.QK5P(bg1x[0], "", bg1x[1])
    });
    ba1x.bax7q = ba1x.bax7q.ee3x(function(d1x) {
        if (YI7B()) return;
        d1x.stopped = !0;
        var bg1x = d1x.args;
        ba1x.QK5P(bg1x[0], bg1x[1], "")
    });
    ba1x.bcy8q = ba1x.bcy8q.ee3x(function(d1x) {
        if (YI7B()) return;
        d1x.stopped = !0;
        var bg1x = d1x.args,
            E1x = a0x.y1x(bg1x[0]);
        if (!E1x) {
            d1x.value = !1;
            return
        }
        var cM2x = bCE3x(bg1x[1]);
        d1x.value = !cM2x ? !1 : cM2x.test(E1x.className || "")
    })
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        ba1x = c1x("nej.h");
    if (N1x.mt6n.webkit) return;
    ba1x.Za7T = function(YW7P) {
        return !0
    }
})();
(function() {
    var c1x = NEJ.P,
        ba1x = c1x("nej.h"),
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        cN2x = c1x("nej.x"),
        R1x = {};
    var bCQ3x = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x || !R1x[E1x.id]) return;
        var YF7y = !0,
            C1x = E1x.id;
        k1x.dZ3x(R1x[C1x], function() {
            YF7y = !1;
            return !0
        });
        if (YF7y) delete R1x[C1x]
    };
    h1x.q1x = cN2x.q1x = function() {
        var bSs6m = function() {
            var bg1x = ba1x.Aa0x.apply(ba1x, arguments);
            if (!bg1x || !bg1x[2]) return;
            var sE8w = a0x.kB5G(bg1x[0]),
                nU6O = R1x[sE8w] || {};
            R1x[sE8w] = nU6O;
            sE8w = bg1x[4] || bg1x[1];
            var zd0x = nU6O[sE8w] || [];
            nU6O[sE8w] = zd0x;
            zd0x.push({ type: bg1x[1], func: bg1x[2], capt: !!bg1x[3], sfun: bg1x[5] || bg1x[2] });
            return bg1x.slice(0, 4)
        };
        return function() {
            var bg1x = bSs6m.apply(null, arguments);
            if (!!bg1x) ba1x.bmN0x.apply(ba1x, bg1x);
            return this
        }
    }();
    h1x.lW6Q = cN2x.lW6Q = function() {
        var bSI6C = function() {
            var tY8Q = arguments,
                sE8w = a0x.kB5G(tY8Q[0]),
                nU6O = R1x[sE8w],
                t1x = (tY8Q[1] || "").toLowerCase(),
                d1x = tY8Q[2];
            if (!nU6O || !t1x || !d1x) return;
            nU6O = nU6O[t1x];
            if (!nU6O) return;
            var bST6N = !!tY8Q[3],
                s1x = k1x.cV2x(nU6O, function(ir4v) {
                    return d1x == ir4v.sfun && bST6N == ir4v.capt
                });
            if (s1x < 0) return;
            var ir4v = nU6O.splice(s1x, 1)[0];
            return !ir4v ? null : [a0x.y1x(sE8w), ir4v.type, ir4v.func, ir4v.capt]
        };
        return function() {
            var bg1x = bSI6C.apply(null, arguments);
            if (!!bg1x) {
                ba1x.Zh7a.apply(ba1x, bg1x);
                bCQ3x(bg1x[0])
            }
            return this
        }
    }();
    h1x.ip4t = cN2x.ip4t = function() {
        var bDE3x = function() {
            var tY8Q = arguments,
                sE8w = a0x.kB5G(tY8Q[0]),
                nU6O = R1x[sE8w],
                zd0x = (tY8Q[1] || "").toLowerCase();
            if (!nU6O || !zd0x) return;
            var E1x = a0x.y1x(sE8w);
            k1x.mk6e(nU6O[zd0x], function(ir4v, s1x, i1x) {
                ba1x.Zh7a(E1x, ir4v.type, ir4v.func, ir4v.capt);
                i1x.splice(s1x, 1)
            });
            delete nU6O[zd0x]
        };
        var bUu6o = function(E1x) {
            E1x = a0x.y1x(E1x);
            if (!E1x) return;
            var C1x = E1x.id;
            k1x.dZ3x(R1x[C1x], function(i1x, t1x) { bDE3x(C1x, t1x) });
            delete R1x[C1x]
        };
        return function(E1x, t1x) {
            !t1x ? bUu6o(E1x) : bDE3x(E1x, t1x);
            bCQ3x(E1x);
            return this
        }
    }();
    h1x.U1x = function() {
        var bgv9m;
        var Fs1x = function(T1x, E1x) {
            var bs2x = T1x.split(":");
            if (bs2x.length > 1) {
                if (!bgv9m) bgv9m = { c: a0x.bz2x, d: a0x.u1x, a: a0x.gA3x };
                var Fw1x = bgv9m[bs2x[0]];
                if (!!Fw1x) return !!Fw1x(E1x, bs2x[1]);
                T1x = bs2x[1]
            }
            return !!a0x.gA3x(E1x, T1x) || !!a0x.u1x(E1x, T1x) || a0x.bz2x(E1x, T1x)
        };
        return function(d1x) {
            if (!d1x) return null;
            var E1x = d1x.target || d1x.srcElement,
                dD3x = arguments[1];
            if (!dD3x) return E1x;
            if (k1x.ff3x(dD3x)) dD3x = Fs1x.g1x(null, dD3x);
            if (k1x.gc3x(dD3x)) {
                while (E1x) {
                    if (!!dD3x(E1x)) return E1x;
                    E1x = E1x.parentNode
                }
                return null
            }
            return E1x
        }
    }();
    h1x.bh1x = function(d1x) {
        h1x.rj7c(d1x);
        h1x.cd2x(d1x);
        return this
    };
    h1x.rj7c = function(d1x) {
        if (!!d1x) {!!d1x.stopPropagation ? d1x.stopPropagation() : d1x.cancelBubble = !0 }
        return this
    };
    h1x.cd2x = function(d1x) {
        if (!!d1x) {!!d1x.preventDefault ? d1x.preventDefault() : d1x.returnValue = !1 }
        return this
    };
    h1x.cvl2x = function() {
        var pr7k = !1;
        var bUz6t = function() {
            if (pr7k) return;
            pr7k = !0;
            h1x.q1x(document, "click", bUN6H, !0)
        };
        var bUN6H = function(d1x) {
            var E1x = h1x.U1x(d1x),
                bUQ6K = a0x.u1x(E1x, "stopped");
            if (bUQ6K == "true") {
                h1x.bh1x(d1x);
                a0x.u1x(E1x, "stopped", "false")
            }
        };
        return function(d1x) {
            if (!d1x) return;
            if (d1x.type == "click") {
                h1x.bh1x(d1x);
                return
            }
            bUz6t();
            a0x.u1x(h1x.U1x(d1x), "stopped", "true")
        }
    }();
    h1x.ky5D = function(d1x) {
        return d1x.pageX != null ? d1x.pageX : d1x.clientX + a0x.om6g().scrollLeft
    };
    h1x.nV6P = function(d1x) {
        return d1x.pageY != null ? d1x.pageY : d1x.clientY + a0x.om6g().scrollTop
    };
    h1x.z1x = cN2x.z1x = function(E1x, t1x, e1x) {
        var bg1x = ba1x.Aa0x(E1x, t1x);
        if (!!bg1x) ba1x.boo0x(bg1x[0], bg1x[1], e1x);
        return this
    };
    c1x("dbg").dumpEV = function() {
        return R1x
    };
    cN2x.isChange = !0
})();
(function() {
    var o = !0,
        w = null;
    (function(B) {
        function v(a) {
            if ("bug-string-char-index" == a) return "a" != "a" [0];
            var f, c = "json" == a;
            if (c || "json-stringify" == a || "json-parse" == a) {
                if ("json-stringify" == a || c) {
                    var d = k.stringify,
                        b = "function" == typeof d && l;
                    if (b) {
                        (f = function() {
                            return 1
                        }).toJSON = f;
                        try { b = "0" === d(0) && "0" === d(new Number) && '""' == d(new String) && d(m) === r && d(r) === r && d() === r && "1" === d(f) && "[1]" == d([f]) && "[null]" == d([r]) && "null" == d(w) && "[null,null,null]" == d([r, m, w]) && '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}' == d({ a: [f, o, !1, w, "\0\b\n\f\r\t"] }) && "1" === d(w, f) && "[\n 1,\n 2\n]" == d([1, 2], w, 1) && '"-271821-04-20T00:00:00.000Z"' == d(new Date(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == d(new Date(864e13)) && '"-000001-01-01T00:00:00.000Z"' == d(new Date(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == d(new Date(-1)) } catch (n) { b = !1 }
                    }
                    if (!c) return b
                }
                if ("json-parse" == a || c) {
                    a = k.parse;
                    if ("function" == typeof a) try {
                        if (0 === a("0") && !a(!1)) {
                            f = a('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}');
                            var e = 5 == f.a.length && 1 === f.a[0];
                            if (e) {
                                try { e = !a('"\t"') } catch (g) {}
                                if (e) try { e = 1 !== a("01") } catch (i) {}
                            }
                        }
                    } catch (O) { e = !1 }
                    if (!c) return e
                }
                return b && e
            }
        }
        var m = {}.toString,
            p, C, r, D = typeof define === "function" && define.amd,
            k = "object" == typeof exports && exports;
        k || D ? "object" == typeof JSON && JSON ? k ? (k.stringify = JSON.stringify, k.parse = JSON.parse) : k = JSON : D && (k = B.JSON = {}) : k = B.JSON || (B.JSON = {});
        var l = new Date(-0xc782b5b800cec);
        try { l = -109252 == l.getUTCFullYear() && 0 === l.getUTCMonth() && 1 === l.getUTCDate() && 10 == l.getUTCHours() && 37 == l.getUTCMinutes() && 6 == l.getUTCSeconds() && 708 == l.getUTCMilliseconds() } catch (P) {}
        if (!v("json")) {
            var s = v("bug-string-char-index");
            if (!l) var t = Math.floor,
                J = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                z = function(a, f) {
                    return J[f] + 365 * (a - 1970) + t((a - 1969 + (f = +(f > 1))) / 4) - t((a - 1901 + f) / 100) + t((a - 1601 + f) / 400)
                };
            if (!(p = {}.hasOwnProperty)) p = function(a) {
                var f = {},
                    c;
                if ((f.__proto__ = w, f.__proto__ = { toString: 1 }, f).toString != m) p = function(a) {
                    var f = this.__proto__,
                        a = a in (this.__proto__ = w, this);
                    this.__proto__ = f;
                    return a
                };
                else {
                    c = f.constructor;
                    p = function(a) {
                        var f = (this.constructor || c).prototype;
                        return a in this && !(a in f && this[a] === f[a])
                    }
                }
                f = w;
                return p.call(this, a)
            };
            var K = { "boolean": 1, number: 1, string: 1, "undefined": 1 };
            C = function(a, f) {
                var c = 0,
                    b, h, n;
                (b = function() { this.valueOf = 0 }).prototype.valueOf = 0;
                h = new b;
                for (n in h) p.call(h, n) && c++;
                b = h = w;
                if (c) c = c == 2 ? function(a, f) {
                    var c = {},
                        b = m.call(a) == "[object Function]",
                        d;
                    for (d in a) !(b && d == "prototype") && !p.call(c, d) && (c[d] = 1) && p.call(a, d) && f(d)
                } : function(a, f) {
                    var c = m.call(a) == "[object Function]",
                        b, d;
                    for (b in a) !(c && b == "prototype") && p.call(a, b) && !(d = b === "constructor") && f(b);
                    (d || p.call(a, b = "constructor")) && f(b)
                };
                else {
                    h = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"];
                    c = function(a, f) {
                        var c = m.call(a) == "[object Function]",
                            b, d;
                        if (d = !c)
                            if (d = typeof a.constructor != "function") {
                                d = typeof a.hasOwnProperty;
                                d = d == "object" ? !!a.hasOwnProperty : !K[d]
                            }
                        d = d ? a.hasOwnProperty : p;
                        for (b in a) !(c && b == "prototype") && d.call(a, b) && f(b);
                        for (c = h.length; b = h[--c]; d.call(a, b) && f(b));
                    }
                }
                c(a, f)
            };
            if (!v("json-stringify")) {
                var L = { 92: "\\\\", 34: '\\"', 8: "\\b", 12: "\\f", 10: "\\n", 13: "\\r", 9: "\\t" },
                    u = function(a, f) {
                        return ("000000" + (f || 0)).slice(-a)
                    },
                    G = function(a) {
                        var f = '"',
                            b = 0,
                            d = a.length,
                            h = d > 10 && s,
                            n;
                        for (h && (n = a.split("")); b < d; b++) {
                            var e = a.charCodeAt(b);
                            switch (e) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    f = f + L[e];
                                    break;
                                default:
                                    if (e < 32) {
                                        f = f + ("\\u00" + u(2, e.toString(16)));
                                        break
                                    }
                                    f = f + (h ? n[b] : s ? a.charAt(b) : a[b])
                            }
                        }
                        return f + '"'
                    },
                    E = function(a, b, c, d, h, n, e) {
                        var g = b[a],
                            i, j, k, l, q, s, v, x, y;
                        try { g = b[a] } catch (A) {}
                        if (typeof g == "object" && g) {
                            i = m.call(g);
                            if (i == "[object Date]" && !p.call(g, "toJSON"))
                                if (g > -1 / 0 && g < 1 / 0) {
                                    if (z) {
                                        k = t(g / 864e5);
                                        for (i = t(k / 365.2425) + 1970 - 1; z(i + 1, 0) <= k; i++);
                                        for (j = t((k - z(i, 0)) / 30.42); z(i, j + 1) <= k; j++);
                                        k = 1 + k - z(i, j);
                                        l = (g % 864e5 + 864e5) % 864e5;
                                        q = t(l / 36e5) % 24;
                                        s = t(l / 6e4) % 60;
                                        v = t(l / 1e3) % 60;
                                        l = l % 1e3
                                    } else {
                                        i = g.getUTCFullYear();
                                        j = g.getUTCMonth();
                                        k = g.getUTCDate();
                                        q = g.getUTCHours();
                                        s = g.getUTCMinutes();
                                        v = g.getUTCSeconds();
                                        l = g.getUTCMilliseconds()
                                    }
                                    g = (i <= 0 || i >= 1e4 ? (i < 0 ? "-" : "+") + u(6, i < 0 ? -i : i) : u(4, i)) + "-" + u(2, j + 1) + "-" + u(2, k) + "T" + u(2, q) + ":" + u(2, s) + ":" + u(2, v) + "." + u(3, l) + "Z"
                                } else g = w;
                            else if (typeof g.toJSON == "function" && (i != "[object Number]" && i != "[object String]" && i != "[object Array]" || p.call(g, "toJSON"))) g = g.toJSON(a)
                        }
                        c && (g = c.call(b, a, g));
                        if (g === w) return "null";
                        i = m.call(g);
                        if (i == "[object Boolean]") return "" + g;
                        if (i == "[object Number]") return g > -1 / 0 && g < 1 / 0 ? "" + g : "null";
                        if (i == "[object String]") return G("" + g);
                        if (typeof g == "object") {
                            for (a = e.length; a--;)
                                if (e[a] === g) throw TypeError();
                            e.push(g);
                            x = [];
                            b = n;
                            n = n + h;
                            if (i == "[object Array]") {
                                j = 0;
                                for (a = g.length; j < a; y || (y = o), j++) {
                                    i = E(j, g, c, d, h, n, e);
                                    x.push(i === r ? "null" : i)
                                }
                                a = y ? h ? "[\n" + n + x.join(",\n" + n) + "\n" + b + "]" : "[" + x.join(",") + "]" : "[]"
                            } else {
                                C(d || g, function(a) {
                                    var b = E(a, g, c, d, h, n, e);
                                    b !== r && x.push(G(a) + ":" + (h ? " " : "") + b);
                                    y || (y = o)
                                });
                                a = y ? h ? "{\n" + n + x.join(",\n" + n) + "\n" + b + "}" : "{" + x.join(",") + "}" : "{}"
                            }
                            e.pop();
                            return a
                        }
                    };
                k.stringify = function(a, b, c) {
                    var d, h, j;
                    if (typeof b == "function" || typeof b == "object" && b)
                        if (m.call(b) == "[object Function]") h = b;
                        else if (m.call(b) == "[object Array]") {
                        j = {};
                        for (var e = 0, g = b.length, i; e < g; i = b[e++], (m.call(i) == "[object String]" || m.call(i) == "[object Number]") && (j[i] = 1));
                    }
                    if (c)
                        if (m.call(c) == "[object Number]") {
                            if ((c = c - c % 1) > 0) {
                                d = "";
                                for (c > 10 && (c = 10); d.length < c; d = d + " ");
                            }
                        } else m.call(c) == "[object String]" && (d = c.length <= 10 ? c : c.slice(0, 10));
                    return E("", (i = {}, i[""] = a, i), h, j, d, "", [])
                }
            }
            if (!v("json-parse")) {
                var M = String.fromCharCode,
                    N = { 92: "\\", 34: '"', 47: "/", 98: "\b", 116: "\t", 110: "\n", 102: "\f", 114: "\r" },
                    b, A, j = function() {
                        b = A = w;
                        throw SyntaxError()
                    },
                    q = function() {
                        for (var a = A, f = a.length, c, d, h, k, e; b < f;) {
                            e = a.charCodeAt(b);
                            switch (e) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    b++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    c = s ? a.charAt(b) : a[b];
                                    b++;
                                    return c;
                                case 34:
                                    c = "@";
                                    for (b++; b < f;) {
                                        e = a.charCodeAt(b);
                                        if (e < 32) j();
                                        else if (e == 92) {
                                            e = a.charCodeAt(++b);
                                            switch (e) {
                                                case 92:
                                                case 34:
                                                case 47:
                                                case 98:
                                                case 116:
                                                case 110:
                                                case 102:
                                                case 114:
                                                    c = c + N[e];
                                                    b++;
                                                    break;
                                                case 117:
                                                    d = ++b;
                                                    for (h = b + 4; b < h; b++) {
                                                        e = a.charCodeAt(b);
                                                        e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || j()
                                                    }
                                                    c = c + M("0x" + a.slice(d, b));
                                                    break;
                                                default:
                                                    j()
                                            }
                                        } else {
                                            if (e == 34) break;
                                            e = a.charCodeAt(b);
                                            for (d = b; e >= 32 && e != 92 && e != 34;) e = a.charCodeAt(++b);
                                            c = c + a.slice(d, b)
                                        }
                                    }
                                    if (a.charCodeAt(b) == 34) {
                                        b++;
                                        return c
                                    }
                                    j();
                                default:
                                    d = b;
                                    if (e == 45) {
                                        k = o;
                                        e = a.charCodeAt(++b)
                                    }
                                    if (e >= 48 && e <= 57) {
                                        for (e == 48 && (e = a.charCodeAt(b + 1), e >= 48 && e <= 57) && j(); b < f && (e = a.charCodeAt(b), e >= 48 && e <= 57); b++);
                                        if (a.charCodeAt(b) == 46) {
                                            for (h = ++b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        e = a.charCodeAt(b);
                                        if (e == 101 || e == 69) {
                                            e = a.charCodeAt(++b);
                                            (e == 43 || e == 45) && b++;
                                            for (h = b; h < f && (e = a.charCodeAt(h), e >= 48 && e <= 57); h++);
                                            h == b && j();
                                            b = h
                                        }
                                        return +a.slice(d, b)
                                    }
                                    k && j();
                                    if (a.slice(b, b + 4) == "true") {
                                        b = b + 4;
                                        return o
                                    }
                                    if (a.slice(b, b + 5) == "false") {
                                        b = b + 5;
                                        return false
                                    }
                                    if (a.slice(b, b + 4) == "null") {
                                        b = b + 4;
                                        return w
                                    }
                                    j()
                            }
                        }
                        return "$"
                    },
                    F = function(a) {
                        var b, c;
                        a == "$" && j();
                        if (typeof a == "string") {
                            if ((s ? a.charAt(0) : a[0]) == "@") return a.slice(1);
                            if (a == "[") {
                                for (b = [];; c || (c = o)) {
                                    a = q();
                                    if (a == "]") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "]" && j()
                                        } else j();
                                    a == "," && j();
                                    b.push(F(a))
                                }
                                return b
                            }
                            if (a == "{") {
                                for (b = {};; c || (c = o)) {
                                    a = q();
                                    if (a == "}") break;
                                    if (c)
                                        if (a == ",") {
                                            a = q();
                                            a == "}" && j()
                                        } else j();
                                        (a == "," || typeof a != "string" || (s ? a.charAt(0) : a[0]) != "@" || q() != ":") && j();
                                    b[a.slice(1)] = F(q())
                                }
                                return b
                            }
                            j()
                        }
                        return a
                    },
                    I = function(a, b, c) {
                        c = H(a, b, c);
                        c === r ? delete a[b] : a[b] = c
                    },
                    H = function(a, b, c) {
                        var d = a[b],
                            h;
                        if (typeof d == "object" && d)
                            if (m.call(d) == "[object Array]")
                                for (h = d.length; h--;) I(d, h, c);
                            else C(d, function(a) { I(d, a, c) });
                        return c.call(a, b, d)
                    };
                k.parse = function(a, f) {
                    var c, d;
                    b = 0;
                    A = "" + a;
                    c = F(q());
                    q() != "$" && j();
                    b = A = w;
                    return f && m.call(f) == "[object Function]" ? H((d = {}, d[""] = c, d), "", f) : c
                }
            }
        }
        D && define(function() {
            return k
        })
    })(this)
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p");
    if (N1x.mt6n.trident0) return;
    JSON.parse = JSON.parse.ee3x(function(d1x) {
        var cO2x = d1x.args[0] || "";
        if (cO2x.length >= 5e5) {
            d1x.stopped = !0;
            d1x.value = eval("(" + cO2x + ")")
        }
    })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        dP3x = c1x("nej.g"),
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        ba1x = c1x("nej.h"),
        cN2x = c1x("nej.x"),
        Fx1x, bkp0x = {},
        R1x = document.createDocumentFragment();
    a0x.kB5G = cN2x.kB5G = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return;
        var C1x = !!E1x.id ? E1x.id : "auto-id-" + k1x.Yo7h(16);
        E1x.id = C1x;
        if (a0x.y1x(C1x) != E1x) bkp0x[C1x] = E1x;
        return C1x
    };
    a0x.y1x = cN2x.y1x = function(E1x) {
        var f1x = bkp0x["" + E1x];
        if (!!f1x) return f1x;
        if (!k1x.ff3x(E1x) && !k1x.uQ8I(E1x)) return E1x;
        return document.getElementById(E1x)
    };
    a0x.cQ2x = cN2x.cQ2x = function(E1x, dI3x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return null;
        var i1x = ba1x.boI0x(E1x);
        if (!!dI3x) k1x.mk6e(i1x, function(f1x, s1x) {
            if (!a0x.bz2x(f1x, dI3x)) i1x.splice(s1x, 1)
        });
        return i1x
    };
    a0x.I1x = cN2x.I1x = function(E1x, fc3x) {
        E1x = a0x.y1x(E1x);
        return !E1x ? null : ba1x.bpc1x(E1x, fc3x.trim())
    };
    a0x.bEl3x = cN2x.bEl3x = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!!E1x) {
            E1x = E1x.parentNode;
            while (!!E1x) {
                if (E1x.scrollHeight > E1x.clientHeight) break;
                E1x = E1x.parentNode
            }
            if (!!E1x) return E1x
        }
        var nU6O = document.body.scrollHeight,
            zd0x = document.documentElement.scrollHeight;
        return zd0x >= nU6O ? document.documentElement : document.body
    };
    a0x.om6g = function() {
        var bEn3x = function(i1x) {
            var m1x = 0;
            k1x.be1x(i1x, function(gh3x) {
                if (!gh3x) return;
                if (!m1x) { m1x = gh3x } else { m1x = Math.min(m1x, gh3x) }
            });
            return m1x
        };
        return function(uC8u) {
            var FB1x = uC8u || document,
                yN0x = FB1x.body,
                yM0x = FB1x.documentElement,
                m1x = { scrollTop: Math.max(yN0x.scrollTop, yM0x.scrollTop), scrollLeft: Math.max(yN0x.scrollLeft, yM0x.scrollLeft), clientWidth: bEn3x([yN0x.clientWidth, yN0x.offsetWidth, yM0x.clientWidth, yM0x.offsetWidth]), clientHeight: bEn3x([yN0x.clientHeight, yN0x.offsetHeight, yM0x.clientHeight, yM0x.offsetHeight]) };
            m1x.scrollWidth = Math.max(m1x.clientWidth, yN0x.scrollWidth, yM0x.scrollWidth);
            m1x.scrollHeight = Math.max(m1x.clientHeight, yN0x.scrollHeight, yM0x.scrollHeight);
            return m1x
        }
    }();
    a0x.cve2x = function(ge3x, oa6U) {
        var m1x = NEJ.X({}, oa6U),
            bEp3x = ge3x.width / ge3x.height,
            Yh7a = oa6U.width / oa6U.height;
        if (bEp3x > Yh7a && oa6U.height > ge3x.height) {
            m1x.height = ge3x.height;
            m1x.width = m1x.height * Yh7a
        }
        if (bEp3x < Yh7a && oa6U.width > ge3x.width) {
            m1x.width = ge3x.width;
            m1x.height = m1x.width / Yh7a
        }
        return m1x
    };
    a0x.cvc2x = function() {
        var cM2x = /\s+/;
        var to8g = {
            left: function() {
                return 0
            },
            center: function(gB3x, oa6U) {
                return (gB3x.width - oa6U.width) / 2
            },
            right: function(gB3x, oa6U) {
                return gB3x.width - oa6U.width
            },
            top: function() {
                return 0
            },
            middle: function(gB3x, oa6U) {
                return (gB3x.height - oa6U.height) / 2
            },
            bottom: function(gB3x, oa6U) {
                return gB3x.height - oa6U.height
            }
        };
        return function(gB3x, oa6U, mW6Q) {
            var m1x = {},
                bs2x = (mW6Q || "").split(cM2x),
                gi3x = to8g[bs2x[1]] || to8g.middle,
                gG3x = to8g[bs2x[0]] || to8g.center;
            m1x.top = gi3x(gB3x, oa6U);
            m1x.left = gG3x(gB3x, oa6U);
            return m1x
        }
    }();
    a0x.rp7i = cN2x.rp7i = function(E1x, dI3x) {
        ba1x.bcX8P(E1x, dI3x || a0x.u1x(E1x, "hover") || "js-hover");
        return this
    };
    a0x.FD1x = cN2x.FD1x = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return;
        ba1x.bdr8j(E1x)
    };
    a0x.bVg6a = cN2x.bVg6a = function() {
        var R1x = {},
            bEr3x = 2;
        var bVr7k = function(C1x, dI3x, d1x) {
            R1x[C1x] = [h1x.ky5D(d1x), h1x.nV6P(d1x)];
            a0x.x1x(C1x, dI3x)
        };
        var bVz7s = function(C1x, dI3x, d1x) {
            var bE2x = R1x[C1x];
            if (!k1x.em3x(bE2x)) return;
            var bVF7y = Math.abs(h1x.ky5D(d1x) - bE2x[0]),
                bWB7u = Math.abs(h1x.nV6P(d1x) - bE2x[1]);
            if (bVF7y > bEr3x || bWB7u > bEr3x) bbD8v(C1x, dI3x)
        };
        var bbD8v = function(C1x, dI3x) {
            if (k1x.em3x(R1x[C1x])) {
                R1x[C1x] = -1;
                a0x.w1x(C1x, dI3x)
            }
        };
        return function(E1x, dI3x) {
            var C1x = a0x.kB5G(E1x);
            if (!C1x || R1x[C1x] != null) return;
            R1x[C1x] = -1;
            dI3x = dI3x || a0x.u1x(C1x, "highlight") || "js-highlight";
            h1x.q1x(C1x, "touchstart", bVr7k.g1x(null, C1x, dI3x));
            h1x.q1x(document, "touchmove", bVz7s.g1x(null, C1x, dI3x));
            h1x.q1x(document, "touchend", bbD8v.g1x(null, C1x, dI3x));
            h1x.q1x(document, "touchcancel", bbD8v.g1x(null, C1x, dI3x))
        }
    }();
    a0x.yB9s = cN2x.yB9s = function() {
        var bXS7L = function(C1x, dI3x, bXT7M) {
            var E1x = a0x.y1x(C1x),
                d1x = { clazz: dI3x, target: E1x };
            if (a0x.bz2x(E1x, dI3x)) {
                d1x.toggled = !1;
                a0x.w1x(E1x, dI3x)
            } else {
                d1x.toggled = !0;
                a0x.x1x(E1x, dI3x)
            }
            bXT7M.call(null, d1x)
        };
        return function(E1x, e1x) {
            E1x = a0x.y1x(E1x);
            if (!!E1x) {
                var id4h = { ontoggle: bm1x, clazz: "js-toggle", element: E1x.parentNode };
                if (k1x.ff3x(e1x)) {
                    var f1x = a0x.y1x(e1x);
                    !!f1x ? id4h.element = f1x : id4h.clazz = e1x
                } else {
                    NEJ.EX(id4h, e1x);
                    id4h.element = a0x.y1x(id4h.element)
                }
                var C1x = a0x.kB5G(id4h.element);
                h1x.q1x(E1x, "click", bXS7L.g1x(null, C1x, id4h.clazz, id4h.ontoggle || bm1x))
            }
            return this
        }
    }();
    a0x.lQ6K = cN2x.lQ6K = function(E1x, e1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return;
        var eI3x = 0,
            dI3x = "js-focus";
        if (k1x.uQ8I(e1x)) { eI3x = e1x } else if (k1x.ff3x(e1x)) { dI3x = e1x } else if (k1x.kg5l(e1x)) {
            eI3x = e1x.mode || eI3x;
            dI3x = e1x.clazz || dI3x
        }
        var A1x = parseInt(a0x.u1x(E1x, "mode"));
        if (!isNaN(A1x)) eI3x = A1x;
        A1x = a0x.u1x(E1x, "focus");
        if (!!A1x) dI3x = A1x;
        ba1x.bgm9d(E1x, eI3x, dI3x);
        return this
    };
    a0x.cU2x = function() {
        var bv2x = { a: { href: "#", hideFocus: !0 }, style: { type: "text/css" }, link: { type: "text/css", rel: "stylesheet" }, iframe: { frameBorder: 0 }, script: { defer: !0, type: "text/javascript" } };
        return function(eZ3x, fc3x, bB2x) {
            var E1x = document.createElement(eZ3x);
            NEJ.X(E1x, bv2x[eZ3x.toLowerCase()]);
            if (!!fc3x) E1x.className = fc3x;
            bB2x = a0x.y1x(bB2x);
            if (!!bB2x) bB2x.appendChild(E1x);
            return E1x
        }
    }();
    a0x.YM7F = function() {
        var caH8z = function() {
            if (location.hostname == document.domain) return "about:blank";
            return 'javascript:(function(){document.open();document.domain="' + document.domain + '";document.close();})();'
        };
        var cby8q = function(T1x) {
            T1x = T1x.trim();
            if (!T1x) return a0x.cU2x("iframe");
            var fa3x;
            try {
                fa3x = document.createElement('<iframe name="' + T1x + '"></iframe>');
                fa3x.frameBorder = 0
            } catch (e) {
                fa3x = a0x.cU2x("iframe");
                fa3x.name = T1x
            }
            return fa3x
        };
        return function(e1x) {
            e1x = e1x || Y1x;
            var fa3x = cby8q(e1x.name || "");
            if (!e1x.visible) fa3x.style.display = "none";
            if (k1x.gc3x(e1x.onload)) h1x.q1x(fa3x, "load", function(d1x) {
                if (!fa3x.src) return;
                h1x.ip4t(fa3x, "load");
                e1x.onload(d1x)
            });
            var bB2x = e1x.parent;
            if (k1x.gc3x(bB2x)) {
                try { bB2x(fa3x) } catch (e) {}
            } else {
                (a0x.y1x(bB2x) || document.body).appendChild(fa3x)
            }
            var du3x = e1x.src || caH8z();
            window.setTimeout(function() { fa3x.src = du3x }, 0);
            return fa3x
        }
    }();
    a0x.cH2x = cN2x.cH2x = function() {
        var bHn4r = function(NP4T) { NP4T.src = dP3x.baH7A };
        var bHs4w = function(uZ8R) { uZ8R.src = "about:blank" };
        return function(E1x, cdc8U) {
            E1x = a0x.y1x(E1x);
            if (!E1x) return this;
            if (!cdc8U) h1x.ip4t(E1x);
            delete bkp0x[E1x.id];
            var eZ3x = E1x.tagName;
            if (eZ3x == "IFRAME") { bHs4w(E1x) } else if (eZ3x == "IMG") { bHn4r(E1x) } else if (!!E1x.getElementsByTagName) {
                k1x.be1x(E1x.getElementsByTagName("img"), bHn4r);
                k1x.be1x(E1x.getElementsByTagName("iframe"), bHs4w)
            }
            if (!!E1x.parentNode) { E1x.parentNode.removeChild(E1x) }
            return this
        }
    }();
    a0x.mm6g = cN2x.mm6g = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!!E1x) R1x.appendChild(E1x);
        return this
    };
    a0x.bHL4P = cN2x.bHL4P = function(E1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return;
        k1x.mk6e(E1x.childNodes, function(f1x) { a0x.cH2x(f1x) })
    };
    a0x.FL1x = cN2x.FL1x = function() {
        var dI3x, fR3x = /\s+/;
        var ceZ8R = function() {
            if (!!dI3x) return;
            dI3x = a0x.rD8v(".#<uispace>{position:relative;zoom:1;}.#<uispace>-show{position:absolute;top:0;left:100%;cursor:text;white-space:nowrap;overflow:hidden;}");
            a0x.bIN4R()
        };
        return function(E1x, e1x) {
            E1x = a0x.y1x(E1x);
            if (!E1x) return;
            ceZ8R();
            e1x = e1x || Y1x;
            var bB2x = E1x.parentNode;
            if (!a0x.bz2x(bB2x, dI3x)) {
                bB2x = a0x.cU2x("span", dI3x);
                E1x.insertAdjacentElement("beforeBegin", bB2x);
                bB2x.appendChild(E1x)
            }
            var bIP4T = e1x.nid || "",
                f1x = a0x.I1x(bB2x, bIP4T || dI3x + "-show")[0];
            if (!f1x) {
                var dC3x = ((e1x.clazz || "") + " " + bIP4T).trim();
                dC3x = dI3x + "-show" + (!dC3x ? "" : " ") + dC3x;
                f1x = a0x.cU2x(e1x.tag || "span", dC3x);
                bB2x.appendChild(f1x)
            }
            var dC3x = e1x.clazz;
            if (!!dC3x) {
                dC3x = (dC3x || "").trim().split(fR3x)[0] + "-parent";
                a0x.x1x(bB2x, dC3x)
            }
            return f1x
        }
    }();
    a0x.u1x = cN2x.u1x = function() {
        var bgQ9H = {},
            eZ3x = "data-",
            cM2x = /\-(.{1})/gi;
        var Di1x = function(E1x) {
            var C1x = a0x.kB5G(E1x);
            if (!!bgQ9H[C1x]) return;
            var bv2x = {};
            k1x.be1x(E1x.attributes, function(f1x) {
                var J1x = f1x.nodeName;
                if (J1x.indexOf(eZ3x) != 0) return;
                J1x = J1x.replace(eZ3x, "").replace(cM2x, function($1, $2) {
                    return $2.toUpperCase()
                });
                bv2x[J1x] = f1x.nodeValue || ""
            });
            bgQ9H[C1x] = bv2x
        };
        return function(E1x, J1x, A1x) {
            E1x = a0x.y1x(E1x);
            if (!E1x) return null;
            var XO7H = E1x.dataset;
            if (!XO7H) {
                Di1x(E1x);
                XO7H = bgQ9H[E1x.id]
            }
            if (A1x !== undefined) XO7H[J1x] = A1x;
            return XO7H[J1x]
        }
    }();
    a0x.gA3x = cN2x.gA3x = function(E1x, T1x, A1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return "";
        if (A1x !== undefined && !!E1x.setAttribute) E1x.setAttribute(T1x, A1x);
        return ba1x.bgU9L(E1x, T1x)
    };
    a0x.mI6C = function(dq3x) {
        var qj7c = document.createElement("div");
        qj7c.innerHTML = dq3x;
        var i1x = a0x.cQ2x(qj7c);
        return i1x.length > 1 ? qj7c : i1x[0]
    };
    a0x.cgk9b = cN2x.cgk9b = function(E1x) {
        E1x = a0x.y1x(E1x);
        return !E1x ? "" : ba1x.bjq9h(E1x)
    };
    a0x.bIS4W = function(Ab0x) {
        Ab0x = (Ab0x || "").trim();
        return !Ab0x ? null : ba1x.bjH0x(Ab0x)
    };
    a0x.cgF9w = function(da2x, t1x) {
        da2x = da2x || "";
        switch (t1x) {
            case "xml":
                da2x = a0x.bIS4W(da2x);
                break;
            case "json":
                try { da2x = JSON.parse(da2x) } catch (ex) { da2x = null }
                break
        }
        return da2x
    };
    a0x.hL4P = cN2x.hL4P = function() {
        var cgI9z = function(E1x) {
            return E1x == document.body || E1x == document.documentElement
        };
        return function(dH3x, nx6r) {
            dH3x = a0x.y1x(dH3x);
            if (!dH3x) return null;
            nx6r = a0x.y1x(nx6r) || null;
            var m1x = { x: 0, y: 0 },
                bjL0x, dh2x, XD7w;
            while (!!dH3x && dH3x != nx6r) {
                bjL0x = cgI9z(dH3x);
                dh2x = bjL0x ? 0 : dH3x.scrollLeft;
                XD7w = parseInt(a0x.cZ2x(dH3x, "borderLeftWidth")) || 0;
                m1x.x += dH3x.offsetLeft + XD7w - dh2x;
                dh2x = bjL0x ? 0 : dH3x.scrollTop;
                XD7w = parseInt(a0x.cZ2x(dH3x, "borderTopWidth")) || 0;
                m1x.y += dH3x.offsetTop + XD7w - dh2x;
                dH3x = dH3x.offsetParent
            }
            return m1x
        }
    }();
    a0x.mR6L = cN2x.mR6L = function(E1x) {
        var bj1x = a0x.hL4P(E1x);
        window.scrollTo(bj1x.x, bj1x.y);
        return this
    };
    a0x.ctV2x = function(ro7h) {
        ro7h = (ro7h || "").trim();
        return ba1x.byQ2x(ro7h)
    };
    a0x.chb9S = cN2x.chb9S = function(E1x, T1x, bv2x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return this;
        var A1x = ba1x.bzN2x(T1x, bv2x);
        if (!A1x) return this;
        a0x.X1x(E1x, "transform", A1x);
        return this
    };
    a0x.fx3x = cN2x.fx3x = function(E1x, bv2x) {
        E1x = a0x.y1x(E1x);
        if (!!E1x) k1x.dZ3x(bv2x, function(A1x, T1x) { a0x.X1x(E1x, T1x, A1x) });
        return this
    };
    a0x.cht9k = cN2x.cht9k = function(fv3x, e1x) {
        fv3x = a0x.y1x(fv3x);
        if (!fv3x) return { start: 0, end: 0 };
        if (k1x.uQ8I(e1x)) e1x = { start: e1x, end: e1x };
        if (e1x != null) {
            if (e1x.end == null) e1x.end = e1x.start || 0;
            ba1x.bdz8r(fv3x, e1x)
        } else { e1x = ba1x.bfz9q(fv3x) }
        return e1x
    };
    a0x.X1x = cN2x.X1x = function(E1x, T1x, A1x) {
        E1x = a0x.y1x(E1x);
        if (!!E1x) ba1x.bay7r(E1x, T1x, A1x);
        return this
    };
    a0x.cZ2x = cN2x.cZ2x = function(E1x, T1x) {
        E1x = a0x.y1x(E1x);
        if (!E1x) return "";
        var gk3x = !window.getComputedStyle ? E1x.currentStyle || Y1x : window.getComputedStyle(E1x, null);
        return gk3x[ba1x.bzO2x(T1x)] || ""
    };
    a0x.bJt4x = function() {
        var cM2x = /[\s\r\n]+/gi;
        return function(cc2x) {
            cc2x = (cc2x || "").trim().replace(cM2x, " ");
            if (!cc2x) return;
            var f1x = a0x.cU2x("style");
            document.head.appendChild(f1x);
            ba1x.bdv8n(f1x, ba1x.cox1x(cc2x));
            return f1x
        }
    }();
    a0x.bJu4y = function(xL9C) {
        try {
            xL9C = xL9C.trim();
            if (!!xL9C) return (new Function(xL9C))()
        } catch (ex) {
            console.error(ex.message);
            console.error(ex.stack)
        }
    };
    a0x.rD8v = function() {
        var cM2x = /#<.*?>/g,
            fT3x = +(new Date);
        return function(je5j) {
            if (!Fx1x) Fx1x = [];
            var fc3x = "auto-" + fT3x++;
            Fx1x.push(je5j.replace(cM2x, fc3x));
            return fc3x
        }
    }();
    a0x.bIN4R = function() {
        if (!!Fx1x) {
            a0x.bJt4x(Fx1x.join(""));
            Fx1x = null
        }
        return this
    };
    a0x.ctQ2x = function(cc2x, je5j) {
        cc2x = a0x.y1x(cc2x);
        return !cc2x ? null : ba1x.bdE8w(cc2x, je5j)
    };
    a0x.x1x = cN2x.x1x = function() {
        ba1x.bqD1x.apply(ba1x, arguments);
        return this
    };
    a0x.w1x = cN2x.w1x = function() {
        ba1x.bax7q.apply(ba1x, arguments);
        return this
    };
    a0x.eu3x = cN2x.eu3x = function() {
        ba1x.QK5P.apply(ba1x, arguments);
        return this
    };
    a0x.bz2x = cN2x.bz2x = function() {
        return ba1x.bcy8q.apply(ba1x, arguments)
    };
    if (!document.head) document.head = document.getElementsByTagName("head")[0] || document.body;
    cN2x.isChange = !0
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        ba1x = c1x("nej.h"),
        k1x = c1x("nej.u");
    var DK1x = function(j1x, t1x) {
        try {
            t1x = t1x.toLowerCase();
            if (j1x === null) return t1x == "null";
            if (j1x === undefined) return t1x == "undefined";
            return Y1x.toString.call(j1x).toLowerCase() == "[object " + t1x + "]"
        } catch (e) {
            return !1
        }
    };
    k1x.gc3x = function(j1x) {
        return DK1x(j1x, "function")
    };
    k1x.ff3x = function(j1x) {
        return DK1x(j1x, "string")
    };
    k1x.uQ8I = function(j1x) {
        return DK1x(j1x, "number")
    };
    k1x.ctP2x = function(j1x) {
        return DK1x(j1x, "boolean")
    };
    k1x.FZ1x = function(j1x) {
        return DK1x(j1x, "date")
    };
    k1x.em3x = function(j1x) {
        return DK1x(j1x, "array")
    };
    k1x.kg5l = function(j1x) {
        return DK1x(j1x, "object")
    };
    k1x.fB3x = function() {
        var cM2x = /[^\x00-\xfff]/g;
        return function(bi1x) {
            return ("" + (bi1x || "")).replace(cM2x, "**").length
        }
    }();
    k1x.cV2x = function(i1x, r1x) {
        var dD3x = k1x.gc3x(r1x) ? r1x : function(A1x) {
                return A1x === r1x
            },
            s1x = k1x.dZ3x(i1x, dD3x);
        return s1x != null ? s1x : -1
    };
    k1x.ctI2x = function() {
        var bKo4s;
        var Ql5q = function(i1x, no6i, nn6h) {
            if (no6i > nn6h) return -1;
            var AR0x = Math.ceil((no6i + nn6h) / 2),
                m1x = bKo4s(i1x[AR0x], AR0x, i1x);
            if (m1x == 0) return AR0x;
            if (m1x < 0) return Ql5q(i1x, no6i, AR0x - 1);
            return Ql5q(i1x, AR0x + 1, nn6h)
        };
        return function(i1x, Fw1x) {
            bKo4s = Fw1x || bm1x;
            return Ql5q(i1x, 0, i1x.length - 1)
        }
    }();
    k1x.mk6e = function(i1x, dt3x, ig4k) {
        if (!i1x || !i1x.length || !k1x.gc3x(dt3x)) return null;
        for (var i = i1x.length - 1; i >= 0; i--)
            if (!!dt3x.call(ig4k, i1x[i], i, i1x)) return i;
        return null
    };
    k1x.be1x = function(i1x, dt3x, ig4k) {
        if (!i1x || !i1x.length || !k1x.gc3x(dt3x)) return this;
        if (!!i1x.forEach) {
            i1x.forEach(dt3x, ig4k);
            return this
        }
        for (var i = 0, l = i1x.length; i < l; i++) dt3x.call(ig4k, i1x[i], i, i1x);
        return this
    };
    k1x.dZ3x = function(i1x, dt3x, ig4k) {
        if (!i1x || !k1x.gc3x(dt3x)) return null;
        if (i1x.length != null) {
            if (i1x.length > 0)
                for (var i = 0, l = i1x.length; i < l; i++)
                    if (!!dt3x.call(ig4k, i1x[i], i, i1x)) return i
        }
        if (k1x.kg5l(i1x)) {
            for (var x in i1x)
                if (i1x.hasOwnProperty(x) && !!dt3x.call(ig4k, i1x[x], x, i1x)) return x
        }
        return null
    };
    k1x.cko9f = function(ia4e, ckC9t, e1x) {
        ia4e = ia4e || [];
        e1x = e1x || Y1x;
        var bLL5Q = !!e1x.union,
            vu9l = !!e1x.begin,
            Xp7i = e1x.compare,
            cos1x = bLL5Q && vu9l ? k1x.mk6e : k1x.be1x;
        cos1x(ckC9t, function(r1x) {
            if (!!Xp7i) Xp7i = Xp7i.ed3x(r1x);
            var s1x = k1x.cV2x(ia4e, Xp7i || r1x);
            if (s1x >= 0) ia4e.splice(s1x, 1);
            if (bLL5Q) ia4e[vu9l ? "unshift" : "push"](r1x)
        });
        return ia4e
    };
    k1x.Cy0x = function(bv2x, bi1x) {
        if (!bv2x || !bi1x || !bi1x.replace) return bi1x || "";
        return bi1x.replace(bv2x.r, function($1) {
            var m1x = bv2x[!bv2x.i ? $1.toLowerCase() : $1];
            return m1x != null ? m1x : $1
        })
    };
    k1x.dJ3x = function() {
        var bv2x = { r: /\<|\>|\&lt;|\&gt;|\&|\r|\n|\s|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "\n": "<br/>", "\r": "", "&lt;": "&lt;", "&gt;": "&gt;" };
        return function(bi1x) {
            return k1x.Cy0x(bv2x, bi1x)
        }
    }();
    k1x.QA5F = function() {
        var bv2x = { r: /\&(?:lt|gt|amp|nbsp|#39|quot)\;|\<br\/\>/gi, "&lt;": "<", "&gt;": ">", "&amp;": "&", "&nbsp;": " ", "&#39;": "'", "&quot;": '"', "<br/>": "\n" };
        return function(bi1x) {
            return k1x.Cy0x(bv2x, bi1x)
        }
    }();
    k1x.iU5Z = function() {
        var bv2x = { i: !0, r: /\byyyy|yy|MM|cM|eM|M|dd|d|HH|H|mm|ms|ss|m|s|w|ct|et\b/g },
            coX1x = ["上午", "下午"],
            cqi1x = ["A.M.", "P.M."],
            bbC7v = ["日", "一", "二", "三", "四", "五", "六"],
            cqT1x = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
            csv1x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        var Jm3x = function(fn3x) {
            fn3x = parseInt(fn3x) || 0;
            return (fn3x < 10 ? "0" : "") + fn3x
        };
        var csy1x = function(oJ7C) {
            return oJ7C < 12 ? 0 : 1
        };
        return function(bA2x, Gi1x, csZ2x) {
            if (!bA2x || !Gi1x) return "";
            bA2x = k1x.WW6Q(bA2x);
            bv2x.yyyy = bA2x.getFullYear();
            bv2x.yy = ("" + bv2x.yyyy).substr(2);
            bv2x.M = bA2x.getMonth() + 1;
            bv2x.MM = Jm3x(bv2x.M);
            bv2x.eM = csv1x[bv2x.M - 1];
            bv2x.cM = cqT1x[bv2x.M - 1];
            bv2x.d = bA2x.getDate();
            bv2x.dd = Jm3x(bv2x.d);
            bv2x.H = bA2x.getHours();
            bv2x.HH = Jm3x(bv2x.H);
            bv2x.m = bA2x.getMinutes();
            bv2x.mm = Jm3x(bv2x.m);
            bv2x.s = bA2x.getSeconds();
            bv2x.ss = Jm3x(bv2x.s);
            bv2x.ms = bA2x.getMilliseconds();
            bv2x.w = bbC7v[bA2x.getDay()];
            var bNs5x = csy1x(bv2x.H);
            bv2x.ct = coX1x[bNs5x];
            bv2x.et = cqi1x[bNs5x];
            if (!!csZ2x) { bv2x.H = bv2x.H % 12 }
            return k1x.Cy0x(bv2x, Gi1x)
        }
    }();
    k1x.WW6Q = function(bA2x) {
        var cC2x = bA2x;
        if (k1x.ff3x(bA2x)) cC2x = new Date(Date.parse(bA2x));
        if (!k1x.FZ1x(bA2x)) cC2x = new Date(bA2x);
        return cC2x
    };
    k1x.FD1x = function(csQ2x, csO2x) {
        return (new Number(csQ2x)).toFixed(csO2x)
    };
    k1x.bdD8v = function() {
        var fR3x = /([^\/:])\/.*$/,
            jj5o = /\/[^\/]+$/,
            Ex1x = /[#\?]/,
            bdH8z = location.href.split(/[?#]/)[0],
            rd7W = document.createElement("a");
        var bei8a = function(ln5s) {
            return (ln5s || "").indexOf("://") > 0
        };
        var bNo5t = function(ln5s) {
            return (ln5s || "").split(Ex1x)[0].replace(jj5o, "/")
        };
        var csK1x = function(ln5s, fr3x) {
            if (ln5s.indexOf("/") == 0) return fr3x.replace(fR3x, "$1") + ln5s;
            return bNo5t(fr3x) + ln5s
        };
        bdH8z = bNo5t(bdH8z);
        return function(ln5s, fr3x) {
            ln5s = (ln5s || "").trim();
            if (!bei8a(fr3x)) fr3x = bdH8z;
            if (!ln5s) return fr3x;
            if (bei8a(ln5s)) return ln5s;
            ln5s = csK1x(ln5s, fr3x);
            rd7W.href = ln5s;
            ln5s = rd7W.href;
            return bei8a(ln5s) ? ln5s : rd7W.getAttribute("href", 4)
        }
    }();
    k1x.csF1x = function() {
        var cM2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(V1x) {
            if (cM2x.test(V1x || "")) return RegExp.$1.toLowerCase();
            return ""
        }
    }();
    k1x.bNk5p = function(G1x, id4h) {
        if (!G1x) return id4h;
        var T1x = G1x.tagName.toLowerCase(),
            i1x = a0x.cQ2x(G1x);
        if (!i1x || !i1x.length) {
            id4h[T1x] = G1x.textContent || G1x.text || "";
            return id4h
        }
        var dO3x = {};
        id4h[T1x] = dO3x;
        k1x.be1x(i1x, function(f1x) { k1x.bNk5p(f1x, dO3x) });
        return id4h
    };
    k1x.ctd2x = function(Ab0x) {
        try {
            return k1x.bNk5p(a0x.bIS4W(Ab0x), {})
        } catch (ex) {
            return null
        }
    };
    k1x.bNi5n = function(hw4A, JC3x) {
        var id4h = {};
        k1x.be1x((hw4A || "").split(JC3x), function(T1x) {
            var WO6I = T1x.split("=");
            if (!WO6I || !WO6I.length) return;
            var J1x = WO6I.shift();
            if (!J1x) return;
            id4h[decodeURIComponent(J1x)] = decodeURIComponent(WO6I.join("="))
        });
        return id4h
    };
    k1x.tW8O = function(fZ3x, JC3x, csB1x) {
        if (!fZ3x) return "";
        var bs2x = [];
        for (var x in fZ3x) { bs2x.push(encodeURIComponent(x) + "=" + (!!csB1x ? encodeURIComponent(fZ3x[x]) : fZ3x[x])) }
        return bs2x.join(JC3x || ",")
    };
    k1x.hl4p = function(bD2x) {
        return k1x.bNi5n(bD2x, "&")
    };
    k1x.de2x = function(fZ3x) {
        return k1x.tW8O(fZ3x, "&", !0)
    };
    k1x.ctf2x = function(fZ3x) {
        return ba1x.EX1x(fZ3x)
    };
    k1x.ctg2x = function(i1x, dD3x) {
        var m1x = {};
        k1x.be1x(i1x, function(r1x) {
            var J1x = r1x;
            if (!!dD3x) { J1x = dD3x(r1x) }
            m1x[J1x] = r1x
        });
        return m1x
    };
    k1x.cth2x = function(fn3x, fX3x) {
        var csu1x = ("" + fn3x).length,
            cst1x = Math.max(1, parseInt(fX3x) || 0),
            dh2x = cst1x - csu1x;
        if (dh2x > 0) { fn3x = (new Array(dh2x + 1)).join("0") + fn3x }
        return "" + fn3x
    };
    k1x.WH6B = function(fZ3x, T1x) {
        if (!k1x.em3x(T1x)) {
            try { delete fZ3x[T1x] } catch (e) { fZ3x[T1x] = undefined }
            return this
        }
        k1x.be1x(T1x, k1x.WH6B.g1x(k1x, fZ3x));
        return this
    };
    k1x.Yo7h = function() {
        var bNg5l = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        return function(bq2x) {
            bq2x = bq2x || 10;
            var m1x = [];
            for (var i = 0, bNf5k; i < bq2x; ++i) {
                bNf5k = Math.floor(Math.random() * bNg5l.length);
                m1x.push(bNg5l.charAt(bNf5k))
            }
            return m1x.join("")
        }
    }();
    k1x.JN3x = function(hc4g, ge3x) {
        return Math.floor(Math.random() * (ge3x - hc4g) + hc4g)
    };
    k1x.nb6V = function(bq2x) {
        bq2x = Math.max(0, Math.min(bq2x || 8, 30));
        var hc4g = Math.pow(10, bq2x - 1),
            ge3x = hc4g * 10;
        return k1x.JN3x(hc4g, ge3x).toString()
    };
    k1x.WE6y = function() {
        var fT3x = +(new Date);
        return function() {
            return "" + fT3x++
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        ni6c;
    if (!!N1x.cz2x) return;
    N1x.cz2x = NEJ.C();
    ni6c = N1x.cz2x.prototype;
    N1x.cz2x.B1x = function(e1x) {
        e1x = e1x || {};
        var cq2x = !!this.yj9a && this.yj9a.shift();
        if (!cq2x) {
            cq2x = new this(e1x);
            this.csq1x = (this.csq1x || 0) + 1
        }
        cq2x.bk1x(e1x);
        return cq2x
    };
    N1x.cz2x.S1x = function() {
        var JQ3x = function(r1x, s1x, i1x) {
            r1x.S1x();
            i1x.splice(s1x, 1)
        };
        return function(cq2x) {
            if (!cq2x) return null;
            if (!k1x.em3x(cq2x)) {
                if (!(cq2x instanceof this)) {
                    var fc3x = cq2x.constructor;
                    if (!!fc3x.S1x) fc3x.S1x(cq2x);
                    return null
                }
                if (cq2x == this.eK3x) delete this.eK3x;
                if (cq2x == this.yn9e) delete this.yn9e;
                cq2x.bC2x();
                if (!this.yj9a) this.yj9a = [];
                if (k1x.cV2x(this.yj9a, cq2x) < 0) { this.yj9a.push(cq2x) }
                return null
            }
            k1x.mk6e(cq2x, JQ3x, this)
        }
    }();
    N1x.cz2x.fU3x = function(e1x) {
        e1x = e1x || {};
        if (!this.eK3x) this.eK3x = this.B1x(e1x);
        return this.eK3x
    };
    N1x.cz2x.csp1x = function(e1x, qu7n) {
        e1x = e1x || {};
        if (!!qu7n && !!this.yn9e) {
            this.yn9e.S1x();
            delete this.yn9e
        }
        if (!this.yn9e) { this.yn9e = this.B1x(e1x) } else { this.yn9e.bk1x(e1x) }
        return this.yn9e
    };
    ni6c.cm2x = function() {
        var fT3x = +(new Date);
        return function() {
            this.id = fT3x++;
            this.lb5g = {};
            this.bNa5f = {}
        }
    }();
    ni6c.bk1x = function(e1x) { this.blB0x(e1x) };
    ni6c.bC2x = function() {
        this.ip4t();
        this.Gn1x()
    };
    ni6c.bT2x = function() {
        var fT3x = +(new Date);
        var crT1x = function(bg1x) {
            if (!bg1x || bg1x.length < 3) return;
            this.bNa5f["de-" + fT3x++] = bg1x;
            h1x.q1x.apply(h1x, bg1x)
        };
        return function(i1x) { k1x.be1x(i1x, crT1x, this) }
    }();
    ni6c.Gn1x = function() {
        var crS1x = function(bg1x, J1x, bv2x) {
            delete bv2x[J1x];
            h1x.lW6Q.apply(h1x, bg1x)
        };
        return function() { k1x.dZ3x(this.bNa5f, crS1x) }
    }();
    ni6c.ctl2x = function(dD3x) {
        dD3x = dD3x || bm1x;
        k1x.dZ3x(this, function(Bg0x, J1x, bv2x) {
            if (!!Bg0x && !!Bg0x.S1x && !dD3x(Bg0x)) {
                delete bv2x[J1x];
                Bg0x.S1x()
            }
        })
    };
    ni6c.S1x = function() { this.constructor.S1x(this) };
    ni6c.bMX5c = function(t1x) {
        var d1x = this.lb5g[t1x.toLowerCase()];
        return !!d1x && d1x !== bm1x
    };
    ni6c.q1x = function(t1x, d1x) {
        this.vd8V.apply(this, arguments);
        return this
    };
    ni6c.lW6Q = function(t1x, d1x) {
        var t1x = (t1x || "").toLowerCase(),
            dG3x = this.lb5g[t1x];
        if (!k1x.em3x(dG3x)) {
            if (dG3x == d1x) delete this.lb5g[t1x];
            return
        }
        k1x.mk6e(dG3x, function(eD3x, s1x, i1x) {
            if (eD3x == d1x) i1x.splice(s1x, 1)
        })
    };
    ni6c.vd8V = function(t1x, d1x) {
        if (!!t1x && k1x.gc3x(d1x)) this.lb5g[t1x.toLowerCase()] = d1x;
        return this
    };
    ni6c.blB0x = function() {
        var crO1x = function(d1x, t1x) { this.vd8V(t1x, d1x) };
        return function(dG3x) {
            k1x.dZ3x(dG3x, crO1x, this);
            return this
        }
    }();
    ni6c.ip4t = function() {
        var bnj0x = function(d1x, t1x) { this.ip4t(t1x) };
        return function(t1x) {
            var t1x = (t1x || "").toLowerCase();
            if (!!t1x) { delete this.lb5g[t1x] } else { k1x.dZ3x(this.lb5g, bnj0x, this) }
            return this
        }
    }();
    ni6c.bnz0x = function(t1x, d1x) {
        if (!t1x || !k1x.gc3x(d1x)) return this;
        t1x = t1x.toLowerCase();
        var dG3x = this.lb5g[t1x];
        if (!dG3x) {
            this.lb5g[t1x] = d1x;
            return this
        }
        if (!k1x.em3x(dG3x)) { this.lb5g[t1x] = [dG3x] }
        this.lb5g[t1x].push(d1x);
        return this
    };
    ni6c.z1x = function(t1x) {
        var d1x = this.lb5g[(t1x || "").toLowerCase()];
        if (!d1x) return this;
        var bg1x = eX3x.slice.call(arguments, 1);
        if (!k1x.em3x(d1x)) return d1x.apply(this, bg1x);
        k1x.be1x(d1x, function(db2x) {
            try { db2x.apply(this, bg1x) } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        }, this);
        return this
    };
    N1x.Wu6o = function() {
        var R1x = {};
        return function(C1x, fc3x, e1x) {
            var eB3x = fc3x.crN1x;
            if (!eB3x) {
                eB3x = k1x.Yo7h(10);
                fc3x.crN1x = eB3x
            }
            var J1x = C1x + "-" + eB3x,
                cq2x = R1x[J1x];
            if (!!e1x && !cq2x) {
                cq2x = fc3x.B1x(e1x);
                cq2x.S1x = cq2x.S1x.ee3x(function(d1x) {
                    delete R1x[J1x];
                    delete cq2x.S1x
                });
                R1x[J1x] = cq2x
            }
            return cq2x
        }
    }()
})();
(function() {
    var o = NEJ.O,
        u = NEJ.P("nej.u"),
        j = NEJ.P("nej.j");
    j.gD3x = function() {
        var cC2x = new Date,
            crM1x = +cC2x,
            boJ0x = 864e5;
        var crJ1x = function(T1x) {
            var qx7q = document.cookie,
                rq7j = "\\b" + T1x + "=",
                Wq6k = qx7q.search(rq7j);
            if (Wq6k < 0) return "";
            Wq6k += rq7j.length - 2;
            var yx9o = qx7q.indexOf(";", Wq6k);
            if (yx9o < 0) yx9o = qx7q.length;
            return qx7q.substring(Wq6k, yx9o) || ""
        };
        return function(T1x, j1x) {
            if (j1x === undefined) return crJ1x(T1x);
            if (u.ff3x(j1x)) {
                if (!!j1x) {
                    document.cookie = T1x + "=" + j1x + ";";
                    return j1x
                }
                j1x = { expires: -100 }
            }
            j1x = j1x || o;
            var qx7q = T1x + "=" + (j1x.value || "") + ";";
            delete j1x.value;
            if (j1x.expires !== undefined) {
                cC2x.setTime(crM1x + j1x.expires * boJ0x);
                j1x.expires = cC2x.toGMTString()
            }
            qx7q += u.tW8O(j1x, ";");
            document.cookie = qx7q
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        it5y = c1x("nej.c"),
        dP3x = c1x("nej.g"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        N1x = c1x("nej.ut.j"),
        k1x = c1x("nej.u"),
        b1x;
    if (!!N1x.Gt1x) return;
    N1x.Gt1x = NEJ.C();
    b1x = N1x.Gt1x.O1x(H1x.cz2x);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.oE6y = { noescape: false, url: "", sync: !1, cookie: !1, type: "text", method: "GET", timeout: 6e4 };
        NEJ.EX(this.oE6y, e1x);
        var Aq0x = it5y.y1x("csrf");
        if ((/^\/[^\/]/.test(this.oE6y.url) || this.oE6y.url.indexOf(location.protocol + "//" + location.host) == 0) && !!Aq0x.cookie && !!Aq0x.param) {
            var bD2x = encodeURIComponent(Aq0x.param) + "=" + encodeURIComponent(v1x.gD3x(Aq0x.cookie) || ""),
                JC3x = this.oE6y.url.indexOf("?") < 0 ? "?" : "&";
            this.oE6y.url += JC3x + bD2x
        }
        this.Wn6h = e1x.headers || {};
        var bi1x = this.Wn6h[dP3x.xG9x];
        if (bi1x == null) this.Wn6h[dP3x.xG9x] = dP3x.bTZ6T
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.yE9v;
        delete this.oE6y;
        delete this.Wn6h
    };
    b1x.crI1x = function(bi1x) {
        var bv2x = { r: /\<|\>/g, "<": "&lt;", ">": "&gt;" };
        if (!this.oE6y.noescape) {
            return k1x.Cy0x(bv2x, bi1x)
        } else {
            return bi1x
        }
    };
    b1x.sA8s = function(d1x) {
        var dX3x = d1x.status;
        if (dX3x == -1) {
            this.z1x("onerror", { code: dP3x.bvU2x, message: "请求[" + this.oE6y.url + "]超时！" });
            return
        }
        if (("" + dX3x).indexOf("2") != 0) {
            this.z1x("onerror", { data: dX3x, code: dP3x.blK0x, message: "服务器返回异常状态[" + dX3x + "]!" });
            return
        }
        this.z1x("onload", a0x.cgF9w(this.crI1x(d1x.result), this.oE6y.type))
    };
    b1x.cl2x = bm1x;
    b1x.bbB7u = function(j1x) {
        var V1x = this.oE6y.url;
        if (!V1x) {
            this.z1x("onerror", { code: dP3x.bhS9J, message: "没有输入请求地址！" });
            return this
        }
        try {
            this.oE6y.data = j1x == null ? null : j1x;
            var d1x = { request: this.oE6y, headers: this.Wn6h };
            try { this.z1x("onbeforerequest", d1x) } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.cl2x(d1x)
        } catch (e) { this.z1x("onerror", { code: dP3x.blK0x, message: "请求[" + V1x + "]失败:" + e.message + "！" }) }
        return this
    };
    b1x.jl5q = bm1x
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        ba1x = c1x("nej.h"),
        dP3x = c1x("nej.g"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut.j"),
        R1x = {},
        Kk3x;
    if (!!N1x.Wj6d) return;
    N1x.Wj6d = NEJ.C();
    Kk3x = N1x.Wj6d.O1x(N1x.Gt1x);
    Kk3x.bC2x = function() {
        this.bH2x();
        window.clearTimeout(this.dM3x);
        delete this.dM3x;
        try {
            this.qz7s.onreadystatechange = bm1x;
            this.qz7s.abort()
        } catch (e) {}
        delete this.qz7s
    };
    Kk3x.cl2x = function() {
        var crE1x = function(A1x, J1x) { this.qz7s.setRequestHeader(J1x, A1x) };
        return function(e1x) {
            var fy3x = e1x.request,
                nA6u = e1x.headers;
            this.qz7s = ba1x.bcT8L();
            if (nA6u[dP3x.xG9x] === dP3x.DL1x) {
                delete nA6u[dP3x.xG9x];
                this.qz7s.upload.onprogress = this.hq4u.g1x(this, 1);
                if (fy3x.data.tagName === "FORM") fy3x.data = new FormData(fy3x.data)
            }
            this.qz7s.onreadystatechange = this.hq4u.g1x(this, 2);
            if (fy3x.timeout != 0) { this.dM3x = window.setTimeout(this.hq4u.g1x(this, 3), fy3x.timeout) }
            this.qz7s.open(fy3x.method, fy3x.url, !fy3x.sync);
            k1x.dZ3x(nA6u, crE1x, this);
            if (!!this.oE6y.cookie && "withCredentials" in this.qz7s) this.qz7s.withCredentials = !0;
            this.qz7s.send(fy3x.data)
        }
    }();
    Kk3x.hq4u = function(t1x) {
        switch (t1x) {
            case 1:
                this.z1x("onuploading", arguments[1]);
                break;
            case 2:
                if (this.qz7s.readyState == 4) this.sA8s({ status: this.qz7s.status, result: this.qz7s.responseText || "" });
                break;
            case 3:
                this.sA8s({ status: -1 });
                break
        }
    };
    Kk3x.jl5q = function() {
        this.sA8s({ status: 0 });
        return this
    }
})();
(function() {
    if (typeof TrimPath === "undefined") {
        TrimPath = {};
        if (typeof exports !== "undefined") TrimPath = exports
    }
    var Kz3x = {},
        Wb6V = [],
        bMU5Z = /\s+/g,
        fT3x = +(new Date),
        Gy1x, bN2x, lJ5O;
    var Bj0x = function() {
        var fR3x = /^\s*[\[\{'"].*?[\]\}'"]\s*$/,
            jj5o = /[\&\|\<\>\+\-\*\/\%\,\(\)\[\]\?\:\!\=\;\s]/,
            Ex1x = /^(?:defined|null|undefined|true|false|instanceof|new|this|typeof|\$v|[\d]+)$/i,
            bdB8t = /^new\s+/,
            crx1x = /['"]/;
        var cru1x = function(A1x) {
            if (fR3x.test(A1x)) return;
            A1x = A1x.split(".")[0].trim();
            if (!A1x || crx1x.test(A1x)) return;
            A1x = A1x.replace(bdB8t, "");
            try {
                if (Ex1x.test(A1x)) return;
                lJ5O[A1x] = 1
            } catch (e) {}
        };
        return function(bi1x) {
            bi1x = bi1x || "";
            if (!bi1x || fR3x.test(bi1x)) return;
            var bs2x = bi1x.split(jj5o);
            for (var i = 0, l = bs2x.length; i < l; i++) cru1x(bs2x[i])
        }
    }();
    var crt1x = function(dm2x) {
        if (dm2x[2] != "in") throw "bad for loop statement: " + dm2x.join(" ");
        Wb6V.push(dm2x[1]);
        Bj0x(dm2x[3]);
        return "var __HASH__" + dm2x[1] + " = " + dm2x[3] + "," + dm2x[1] + "," + dm2x[1] + "_count=0;" + "if (!!__HASH__" + dm2x[1] + ")" + "for(var " + dm2x[1] + "_key in __HASH__" + dm2x[1] + "){" + dm2x[1] + " = __HASH__" + dm2x[1] + "[" + dm2x[1] + "_key];" + "if (typeof(" + dm2x[1] + ')=="function") continue;' + dm2x[1] + "_count++;"
    };
    var crq1x = function() {
        var dm2x = Wb6V[Wb6V.length - 1];
        return "}; if(!__HASH__" + dm2x + "||!" + dm2x + "_count){"
    };
    var crn1x = function() {
        Wb6V.pop();
        return "};"
    };
    var crm1x = function(dm2x) {
        if (dm2x[2] != "as") throw "bad for list loop statement: " + dm2x.join(" ");
        var KO3x = dm2x[1].split("..");
        if (KO3x.length > 1) {
            Bj0x(KO3x[0]);
            Bj0x(KO3x[1]);
            return "for(var " + dm2x[3] + "," + dm2x[3] + "_index=0," + dm2x[3] + "_beg=" + KO3x[0] + "," + dm2x[3] + "_end=" + KO3x[1] + "," + dm2x[3] + "_length=parseInt(" + dm2x[3] + "_end-" + dm2x[3] + "_beg+1);" + dm2x[3] + "_index<" + dm2x[3] + "_length;" + dm2x[3] + "_index++){" + dm2x[3] + " = " + dm2x[3] + "_beg+" + dm2x[3] + "_index;"
        } else {
            Bj0x(dm2x[1]);
            return "for(var __LIST__" + dm2x[3] + " = " + dm2x[1] + "," + dm2x[3] + "," + dm2x[3] + "_index=0," + dm2x[3] + "_length=__LIST__" + dm2x[3] + ".length;" + dm2x[3] + "_index<" + dm2x[3] + "_length;" + dm2x[3] + "_index++){" + dm2x[3] + " = __LIST__" + dm2x[3] + "[" + dm2x[3] + "_index];"
        }
    };
    var crh1x = function(dm2x) {
        if (!dm2x || !dm2x.length) return;
        dm2x.shift();
        var T1x = dm2x[0].split("(")[0];
        return "var " + T1x + " = function" + dm2x.join("").replace(T1x, "") + "{var __OUT=[];"
    };
    var crg1x = function(dm2x) {
        if (!dm2x[1]) throw "bad include statement: " + dm2x.join(" ");
        return 'if (typeof inline == "function"){__OUT.push(inline('
    };
    var beZ8R = function(kP5U, dm2x) {
        Bj0x(dm2x.slice(1).join(" "));
        return kP5U
    };
    var crd1x = function(dm2x) {
        return beZ8R("if(", dm2x)
    };
    var crc1x = function(dm2x) {
        return beZ8R("}else if(", dm2x)
    };
    var crb1x = function(dm2x) {
        return beZ8R("var ", dm2x)
    };
    bN2x = {
        blk: /^\{(cdata|minify|eval)/i,
        tag: "forelse|for|list|if|elseif|else|var|macro|break|notrim|trim|include",
        def: { "if": { pfix: crd1x, sfix: "){", pmin: 1 }, "else": { pfix: "}else{" }, elseif: { pfix: crc1x, sfix: "){", pdft: "true" }, "/if": { pfix: "}" }, "for": { pfix: crt1x, pmin: 3 }, forelse: { pfix: crq1x }, "/for": { pfix: crn1x }, list: { pfix: crm1x, pmin: 3 }, "/list": { pfix: "};" }, "break": { pfix: "break;" }, "var": { pfix: crb1x, sfix: ";" }, macro: { pfix: crh1x }, "/macro": { pfix: 'return __OUT.join("");};' }, trim: { pfix: function() { Gy1x = !0 } }, "/trim": { pfix: function() { Gy1x = null } }, inline: { pfix: crg1x, pmin: 1, sfix: "));}" } },
        ext: {
            seed: function(kP5U) {
                return (kP5U || "") + "" + fT3x
            },
            "default": function(A1x, ko5t) {
                return A1x || ko5t
            }
        }
    };
    var cqU1x = function() {
        var cqQ1x = /\\([\{\}])/g;
        return function(bi1x, iI5N) {
            bi1x = bi1x.replace(cqQ1x, "$1");
            var dm2x = bi1x.slice(1, -1).split(bMU5Z),
                bc1x = bN2x.def[dm2x[0]];
            if (!bc1x) {
                VO6I(bi1x, iI5N);
                return
            }
            if (!!bc1x.pmin && bc1x.pmin >= dm2x.length) throw "Statement needs more parameters:" + bi1x;
            iI5N.push(!!bc1x.pfix && typeof bc1x.pfix != "string" ? bc1x.pfix(dm2x) : bc1x.pfix || "");
            if (!!bc1x.sfix) {
                if (dm2x.length <= 1) {
                    if (!!bc1x.pdft) iI5N.push(bc1x.pdft)
                } else {
                    for (var i = 1, l = dm2x.length; i < l; i++) {
                        if (i > 1) iI5N.push(" ");
                        iI5N.push(dm2x[i])
                    }
                }
                iI5N.push(bc1x.sfix)
            }
        }
    }();
    var bMF5K = function(GJ2x, iI5N) {
        if (!GJ2x || !GJ2x.length) return;
        if (GJ2x.length == 1) {
            var bgn9e = GJ2x.pop();
            Bj0x(bgn9e);
            iI5N.push(bgn9e == "" ? '""' : bgn9e);
            return
        }
        var bgu9l = GJ2x.pop().split(":");
        iI5N.push("__MDF['" + bgu9l.shift() + "'](");
        bMF5K(GJ2x, iI5N);
        if (bgu9l.length > 0) {
            var bg1x = bgu9l.join(":");
            Bj0x(bg1x);
            iI5N.push("," + bg1x)
        }
        iI5N.push(")")
    };
    var VO6I = function(bi1x, iI5N) {
        if (!bi1x) return;
        var uO8G = bi1x.split("\n");
        if (!uO8G || !uO8G.length) return;
        for (var i = 0, l = uO8G.length, hf4j; i < l; i++) {
            hf4j = uO8G[i];
            if (!!Gy1x) {
                hf4j = hf4j.trim();
                if (!hf4j) continue
            }
            cqF1x(hf4j, iI5N);
            if (!!Gy1x && i < l - 1) iI5N.push("__OUT.push('\\n');")
        }
    };
    var cqF1x = function() {
        var cqE1x = /\|\|/g,
            cqD1x = /#@@#/g;
        return function(bi1x, iI5N) {
            var Ll3x = "}",
                Ln3x = -1,
                bq2x = bi1x.length,
                vu9l, gu3x, GW2x, Vv6p, LA3x;
            while (Ln3x + Ll3x.length < bq2x) {
                vu9l = "${";
                gu3x = "}";
                GW2x = bi1x.indexOf(vu9l, Ln3x + Ll3x.length);
                if (GW2x < 0) break;
                if (bi1x.charAt(GW2x + 2) == "%") {
                    vu9l = "${%";
                    gu3x = "%}"
                }
                Vv6p = bi1x.indexOf(gu3x, GW2x + vu9l.length);
                if (Vv6p < 0) break;
                Vr6l(bi1x.substring(Ln3x + Ll3x.length, GW2x), iI5N);
                LA3x = bi1x.substring(GW2x + vu9l.length, Vv6p).replace(cqE1x, "#@@#").split("|");
                for (var i = 0, l = LA3x.length; i < l; LA3x[i] = LA3x[i].replace(cqD1x, "||"), i++);
                iI5N.push("__OUT.push(");
                bMF5K(LA3x, iI5N);
                iI5N.push(");");
                Ll3x = gu3x;
                Ln3x = Vv6p
            }
            Vr6l(bi1x.substring(Ln3x + Ll3x.length), iI5N)
        }
    }();
    var Vr6l = function() {
        var bv2x = { r: /\n|\\|\'/g, "\n": "\\n", "\\": "\\\\", "'": "\\'" };
        var cqC1x = function(bi1x) {
            return (bi1x || "").replace(bv2x.r, function($1) {
                return bv2x[$1] || $1
            })
        };
        return function(bi1x, iI5N) {
            if (!bi1x) return;
            iI5N.push("__OUT.push('" + cqC1x(bi1x) + "');")
        }
    }();
    var cqy1x = function() {
        var cqv1x = /\t/g,
            cqt1x = /\n/g,
            cqs1x = /\r\n?/g;
        var bMC5H = function(bi1x, vu9l) {
            var s1x = bi1x.indexOf("}", vu9l + 1);
            while (bi1x.charAt(s1x - 1) == "\\") { s1x = bi1x.indexOf("}", s1x + 1) }
            return s1x
        };
        var cqq1x = function() {
            var bs2x = [],
                Ef1x = arguments[0];
            for (var x in Ef1x) {
                x = (x || "").trim();
                if (!x) continue;
                bs2x.push(x + "=$v('" + x + "')")
            }
            return bs2x.length > 0 ? "var " + bs2x.join(",") + ";" : ""
        };
        return function(bi1x) {
            lJ5O = {};
            bi1x = bi1x.replace(cqs1x, "\n").replace(cqv1x, "    ");
            var qB7u = ["if(!__CTX) return '';", ""];
            qB7u.push("function $v(__NAME){var v = __CTX[__NAME];return v==null?window[__NAME]:v;};");
            qB7u.push("var defined=function(__NAME){return __CTX[__NAME]!=null;},");
            qB7u.push("__OUT=[];");
            var Er1x = -1,
                bq2x = bi1x.length;
            var mb6V, GY2x, LM3x, LN3x, yZ0x, LP3x, bjQ0x, LS3x;
            while (Er1x + 1 < bq2x) {
                mb6V = Er1x;
                mb6V = bi1x.indexOf("{", mb6V + 1);
                while (mb6V >= 0) {
                    GY2x = bMC5H(bi1x, mb6V);
                    LM3x = bi1x.substring(mb6V, GY2x);
                    LN3x = LM3x.match(bN2x.blk);
                    if (!!LN3x) {
                        yZ0x = LN3x[1].length + 1;
                        LP3x = bi1x.indexOf("}", mb6V + yZ0x);
                        if (LP3x >= 0) {
                            bjQ0x = LP3x - mb6V - yZ0x <= 0 ? "{/" + LN3x[1] + "}" : LM3x.substr(yZ0x + 1);
                            yZ0x = bi1x.indexOf(bjQ0x, LP3x + 1);
                            if (yZ0x >= 0) {
                                VO6I(bi1x.substring(Er1x + 1, mb6V), qB7u);
                                LS3x = bi1x.substring(LP3x + 1, yZ0x);
                                switch (LN3x[1]) {
                                    case "cdata":
                                        Vr6l(LS3x, qB7u);
                                        break;
                                    case "minify":
                                        Vr6l(LS3x.replace(cqt1x, " ").replace(bMU5Z, " "), qB7u);
                                        break;
                                    case "eval":
                                        if (!!LS3x) qB7u.push("__OUT.push((function(){" + LS3x + "})());");
                                        break
                                }
                                mb6V = Er1x = yZ0x + bjQ0x.length - 1
                            }
                        }
                    } else if (bi1x.charAt(mb6V - 1) != "$" && bi1x.charAt(mb6V - 1) != "\\" && LM3x.substr(LM3x.charAt(1) == "/" ? 2 : 1).search(bN2x.tag) == 0) {
                        break
                    }
                    mb6V = bi1x.indexOf("{", mb6V + 1)
                }
                if (mb6V < 0) break;
                GY2x = bMC5H(bi1x, mb6V);
                if (GY2x < 0) break;
                VO6I(bi1x.substring(Er1x + 1, mb6V), qB7u);
                cqU1x(bi1x.substring(mb6V, GY2x + 1), qB7u);
                Er1x = GY2x
            }
            VO6I(bi1x.substring(Er1x + 1), qB7u);
            qB7u.push(';return __OUT.join("");');
            qB7u[1] = cqq1x(lJ5O);
            lJ5O = null;
            return new Function("__CTX", "__MDF", qB7u.join(""))
        }
    }();
    TrimPath.seed = function() {
        return fT3x
    };
    TrimPath.merge = function() {
        var LT3x = {};
        TrimPath.dump = function() {
            return { func: LT3x, text: Kz3x }
        };
        return function(eB3x, j1x, iX5c) {
            try {
                j1x = j1x || {};
                if (!LT3x[eB3x] && !Kz3x[eB3x]) return "";
                if (!LT3x[eB3x]) {
                    LT3x[eB3x] = cqy1x(Kz3x[eB3x]);
                    delete Kz3x[eB3x]
                }
                if (!!iX5c) {
                    for (var x in bN2x.ext)
                        if (!iX5c[x]) iX5c[x] = bN2x.ext[x]
                }
                return LT3x[eB3x](j1x, iX5c || bN2x.ext)
            } catch (ex) {
                return ex.message || ""
            }
        }
    }();
    TrimPath.parse = function() {
        var cqp1x = +(new Date);
        return function(bi1x, eB3x) {
            if (!bi1x) return "";
            eB3x = eB3x || "ck_" + cqp1x++;
            Kz3x[eB3x] = bi1x;
            return eB3x
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        fg3x = {};
    a0x.Hc2x = TrimPath.seed;
    a0x.bP2x = function() {
        var bMA5F = function(C1x) {
            return !a0x.hX4b ? "" : a0x.hX4b(C1x)
        };
        return function(eB3x, j1x, iX5c) {
            j1x = j1x || {};
            j1x.inline = bMA5F;
            iX5c = NEJ.X(NEJ.X({}, fg3x), iX5c);
            iX5c.rand = k1x.nb6V;
            iX5c.format = k1x.iU5Z;
            iX5c.escape = k1x.dJ3x;
            iX5c.inline = bMA5F;
            return TrimPath.merge(eB3x, j1x, iX5c)
        }
    }();
    a0x.en3x = function(bi1x, cqk1x) {
        if (!bi1x) return "";
        var eB3x, E1x = a0x.y1x(bi1x);
        if (!!E1x) {
            eB3x = E1x.id;
            bi1x = E1x.value || E1x.innerText;
            if (!cqk1x) a0x.cH2x(E1x)
        }
        return TrimPath.parse(bi1x, eB3x)
    };
    a0x.dT3x = function(bB2x, eB3x, j1x, iX5c) {
        bB2x = a0x.y1x(bB2x);
        if (!!bB2x) bB2x.innerHTML = a0x.bP2x(eB3x, j1x, iX5c);
        return this
    };
    a0x.ctn2x = function(bv2x) { NEJ.X(fg3x, bv2x) };
    c1x("dbg").dumpJST = function() {
        return TrimPath.dump()
    }
})();
(function() {
    var cK2x = NEJ.P("nej.p"),
        N1x = window,
        jU5Z = cK2x.Qy5D,
        bMt5y = jU5Z.ipad || jU5Z.iphone;
    if (!bMt5y && !!N1x.requestAnimationFrame && !!N1x.cancelRequestAnimationFrame) return;
    var kP5U = cK2x.cR2x.prefix.pro;
    if (!bMt5y && !!N1x[kP5U + "RequestAnimationFrame"] && !!N1x[kP5U + "CancelRequestAnimationFrame"]) {
        N1x.requestAnimationFrame = N1x[kP5U + "RequestAnimationFrame"];
        N1x.cancelRequestAnimationFrame = N1x[kP5U + "CancelRequestAnimationFrame"];
        return
    }
    var Va6U = jU5Z.desktop ? 80 : jU5Z.ios ? 50 : 30;
    N1x.requestAnimationFrame = function(dt3x) {
        return window.setTimeout(function() {
            try { dt3x(+(new Date)) } catch (ex) {}
        }, 1e3 / Va6U)
    };
    N1x.cancelRequestAnimationFrame = function(C1x) {
        window.clearTimeout(C1x);
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        ba1x = c1x("nej.h"),
        cN2x = c1x("nej.x"),
        UY6S = c1x("nej.ut.j.cb"),
        gd3x;
    if (!!a0x.qE7x) return;
    a0x.qE7x = cN2x.qE7x = function() {
        var R1x = {},
            fR3x = /^(?:mouse.*|(?:dbl)?click)$/i;
        window.onflashevent = function(d1x) {
            var C1x = decodeURIComponent(d1x.target),
                t1x = d1x.type.toLowerCase();
            var db2x = R1x[C1x + "-on" + t1x];
            if (!!db2x) {
                try { db2x(d1x) } catch (e) {}
                return
            }
            var cJ2x = R1x[C1x + "-tgt"];
            if (!!cJ2x && fR3x.test(t1x)) { bMs5x(cJ2x, d1x) }
        };
        var bmx0x = function(e1x) {
            var bB2x = a0x.y1x(e1x.parent) || document.body,
                dq3x = a0x.bP2x(gd3x, e1x);
            bB2x.insertAdjacentHTML(!e1x.hidden ? "beforeEnd" : "afterBegin", dq3x)
        };
        var bMs5x = function(C1x, d1x) {
            var t1x = d1x.type.toLowerCase();
            requestAnimationFrame(function() { h1x.z1x(C1x, t1x) })
        };
        var cpW1x = function(hg4k) {
            return !!hg4k && !!hg4k.inited && !!hg4k.inited()
        };
        var LZ3x = function(C1x) {
            var bs2x = [document.embeds[C1x], a0x.y1x(C1x), document[C1x], window[C1x]],
                s1x = k1x.dZ3x(bs2x, cpW1x),
                hg4k = bs2x[s1x],
                bmO0x = C1x + "-count";
            R1x[bmO0x]++;
            if (!!hg4k || R1x[bmO0x] > 100) {
                R1x[C1x](hg4k);
                delete R1x[C1x];
                delete R1x[bmO0x];
                return
            }
            window.setTimeout(LZ3x.g1x(null, C1x), 300)
        };
        var cpV1x = function(e1x) {
            var C1x = e1x.id,
                fN3x = e1x.params;
            if (!fN3x) {
                fN3x = {};
                e1x.params = fN3x
            }
            var lJ5O = fN3x.flashvars || "";
            lJ5O += (!lJ5O ? "" : "&") + ("id=" + C1x);
            if (!e1x.hidden && (!!e1x.target || ba1x.Za7T(fN3x.wmode))) {
                var gV4Z = a0x.kB5G(e1x.target) || a0x.kB5G(e1x.parent),
                    UW6Q = k1x.WE6y();
                UY6S["cb" + UW6Q] = bMs5x.g1x(null, gV4Z);
                lJ5O += "&onevent=nej.ut.j.cb.cb" + UW6Q;
                R1x[C1x + "-tgt"] = gV4Z
            }
            fN3x.flashvars = lJ5O;
            k1x.dZ3x(e1x, function(A1x, J1x) {
                if (k1x.gc3x(A1x) && J1x != "onready") { R1x[C1x + "-" + J1x] = A1x }
            })
        };
        return function(e1x) {
            e1x = NEJ.X({}, e1x);
            if (!e1x.src) return;
            var C1x = "flash_" + k1x.WE6y();
            e1x.id = C1x;
            cpV1x(e1x);
            bmx0x(e1x);
            if (!e1x.onready) return;
            R1x[C1x] = e1x.onready;
            R1x[C1x + "-count"] = 0;
            LZ3x(C1x)
        }
    }();
    gd3x = a0x.en3x('{var hide  = defined("hidden")&&!!hidden}{var param = defined("params")&&params||NEJ.O}{var width = !hide?width:"1px",height = !hide?height:"1px"}{if hide}<div style="position:absolute;top:0;left:0;width:1px;height:1px;z-index:10000;overflow:hidden;">{/if}<object classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"codebase = "http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"width = "${width|default:"100px"}"height = "${height|default:"100px"}" id="${id}"><param value="${src}" name="movie">{for x in param}<param value="${x}" name="${x_key}"/>{/for}<embed src="${src}" name="${id}"width="${width|default:"100px"}"height="${height|default:"100px"}"pluginspage="http://www.adobe.com/go/getflashplayer"type="application/x-shockwave-flash"{for x in param}${x_key}="${x}" {/for}></embed></object>{if hide}</div>{/if}');
    cN2x.isChange = !0
})();
(function() {
    var c1x = NEJ.P,
        it5y = c1x("nej.c"),
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut.j"),
        UY6S = c1x("nej.ut.j.cb"),
        R1x = {},
        fT3x = +(new Date),
        bnG0x;
    if (!!N1x.bnX0x) return;
    UY6S["ld" + fT3x] = function(J1x, da2x) {
        var iN5S = R1x[J1x];
        if (!iN5S) return;
        delete R1x[J1x];
        iN5S.sA8s({ status: 200, result: da2x })
    };
    UY6S["er" + fT3x] = function(J1x, dX3x) {
        var iN5S = R1x[J1x];
        if (!iN5S) return;
        delete R1x[J1x];
        iN5S.sA8s({ status: dX3x || 0 })
    };
    N1x.bnX0x = NEJ.C();
    bnG0x = N1x.bnX0x.O1x(N1x.Gt1x);
    bnG0x.cl2x = function(e1x) {
        var hg4k = R1x.flash;
        if (k1x.em3x(hg4k)) {
            hg4k.push(this.cl2x.g1x(this, e1x));
            return
        }
        if (!hg4k) {
            R1x.flash = [this.cl2x.g1x(this, e1x)];
            a0x.qE7x({
                hidden: !0,
                src: it5y.y1x("ajax.swf"),
                onready: function(hg4k) {
                    if (!hg4k) return;
                    var i1x = R1x.flash;
                    R1x.flash = hg4k;
                    k1x.mk6e(i1x, function(db2x) {
                        try { db2x() } catch (e) {}
                    })
                }
            });
            return
        }
        this.yE9v = "swf-" + k1x.nb6V();
        R1x[this.yE9v] = this;
        var j1x = NEJ.EX({ url: "", data: null, method: "GET" }, e1x.request);
        j1x.key = this.yE9v;
        j1x.headers = e1x.headers;
        j1x.onerror = "nej.ut.j.cb.er" + fT3x;
        j1x.onloaded = "nej.ut.j.cb.ld" + fT3x;
        var bMp5u = it5y.ciV9M(j1x.url);
        if (!!bMp5u) j1x.policyURL = bMp5u;
        hg4k.request(j1x)
    };
    bnG0x.jl5q = function() {
        delete R1x[this.yE9v];
        this.sA8s({ status: 0 });
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        ba1x = c1x("nej.h");
    ba1x.bMo5t = function() {
        var cM2x = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(hB4F) {
            hB4F = hB4F || "";
            if (cM2x.test(hB4F)) return RegExp.$1;
            return "*"
        }
    }();
    ba1x.bop0x = function(j1x) {
        return j1x
    };
    ba1x.bot0x = function(bMm5r, e1x) {
        if (!bMm5r.postMessage) return;
        e1x = e1x || Y1x;
        bMm5r.postMessage(ba1x.bop0x(e1x.data), ba1x.bMo5t(e1x.origin))
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.fs3x) return;
    N1x.fs3x = NEJ.C();
    b1x = N1x.fs3x.O1x(N1x.cz2x);
    b1x.cm2x = function() {
        this.P1x = {};
        this.cs2x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.Ma3x = a0x.y1x(e1x.element) || window;
        this.bMl5q(e1x.event);
        this.cpG1x();
        this.z1x("oninit")
    };
    b1x.bC2x = function() {
        var DV1x = function(A1x, J1x, bv2x) {
            if (!k1x.em3x(A1x)) { k1x.WH6B(this.Ma3x, J1x) }
            delete bv2x[J1x]
        };
        return function() {
            this.bH2x();
            k1x.dZ3x(this.P1x, DV1x, this);
            delete this.Ma3x
        }
    }();
    b1x.UU6O = function(E1x, t1x) {
        E1x = a0x.y1x(E1x);
        return E1x == this.Ma3x && (!t1x || !!this.P1x["on" + t1x])
    };
    b1x.bMl5q = function(d1x) {
        if (k1x.ff3x(d1x)) {
            var T1x = "on" + d1x;
            if (!this.P1x[T1x]) { this.P1x[T1x] = this.cpC1x.g1x(this, d1x) }
            this.bMj5o(d1x);
            return
        }
        if (k1x.em3x(d1x)) { k1x.be1x(d1x, this.bMl5q, this) }
    };
    b1x.bMj5o = function(t1x) {
        var d1x = "on" + t1x,
            db2x = this.Ma3x[d1x],
            bMi5n = this.P1x[d1x];
        if (db2x != bMi5n) {
            this.US6M(t1x);
            if (!!db2x && db2x != bm1x) this.bMg5l(t1x, db2x);
            this.Ma3x[d1x] = bMi5n
        }
    };
    b1x.bMg5l = function(t1x, db2x, cpv1x) {
        var i1x = this.P1x[t1x];
        if (!i1x) {
            i1x = [];
            this.P1x[t1x] = i1x
        }
        if (k1x.gc3x(db2x)) {!cpv1x ? i1x.push(db2x) : i1x.unshift(db2x) }
    };
    b1x.US6M = function(t1x, db2x) {
        var i1x = this.P1x[t1x];
        if (!i1x || !i1x.length) return;
        if (!db2x) {
            delete this.P1x[t1x];
            return
        }
        k1x.mk6e(i1x, function(A1x, s1x, Hk2x) {
            if (db2x === A1x) {
                Hk2x.splice(s1x, 1);
                return !0
            }
        })
    };
    b1x.cpC1x = function(t1x, d1x) {
        d1x = d1x || { noargs: !0 };
        d1x.type = t1x;
        this.z1x("ondispatch", d1x);
        if (!!d1x.stopped) return;
        k1x.be1x(this.P1x[t1x], function(db2x) {
            try { db2x(d1x) } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        })
    };
    b1x.cpG1x = function() {
        var baZ7S = function(d1x) {
            var bg1x = d1x.args,
                t1x = bg1x[1].toLowerCase();
            if (this.UU6O(bg1x[0], t1x)) {
                d1x.stopped = !0;
                this.bMj5o(t1x);
                this.bMg5l(t1x, bg1x[2], bg1x[3]);
                this.z1x("oneventadd", { type: t1x, listener: bg1x[2] })
            }
        };
        var cpu1x = function(d1x) {
            var bg1x = d1x.args,
                t1x = bg1x[1].toLowerCase();
            if (this.UU6O(bg1x[0], t1x)) {
                d1x.stopped = !0;
                this.US6M(t1x, bg1x[2])
            }
        };
        var bnj0x = function(d1x) {
            var bg1x = d1x.args,
                t1x = (bg1x[1] || "").toLowerCase();
            if (this.UU6O(bg1x[0])) {
                if (!!t1x) {
                    this.US6M(t1x);
                    return
                }
                k1x.dZ3x(this.P1x, function(A1x, J1x) {
                    if (k1x.em3x(A1x)) { this.US6M(J1x) }
                }, this)
            }
        };
        var cpn1x = function(d1x) {
            var bg1x = d1x.args,
                t1x = bg1x[1].toLowerCase();
            if (this.UU6O(bg1x[0], t1x)) {
                d1x.stopped = !0;
                bg1x[0]["on" + t1x].apply(bg1x[0], bg1x.slice(2))
            }
        };
        return function() {
            if (!!this.cpm1x) return;
            this.cpm1x = true;
            h1x.q1x = h1x.q1x.ee3x(baZ7S.g1x(this));
            h1x.lW6Q = h1x.lW6Q.ee3x(cpu1x.g1x(this));
            h1x.ip4t = h1x.ip4t.ee3x(bnj0x.g1x(this));
            h1x.z1x = h1x.z1x.ee3x(cpn1x.g1x(this))
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        ba1x = c1x("nej.h"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut");
    if (N1x.mt6n.trident) return;
    if (!!window.postMessage) {
        ba1x.bop0x = ba1x.bop0x.ee3x(function(d1x) {
            d1x.stopped = !0;
            d1x.value = JSON.stringify(d1x.args[0])
        });
        return
    }
    var J1x = "MSG|",
        jo5t = [];
    var cpl1x = function() {
        var T1x = unescape(window.name || "").trim();
        if (!T1x || T1x.indexOf(J1x) != 0) return;
        window.name = "";
        var m1x = k1x.bNi5n(T1x.replace(J1x, ""), "|"),
            hB4F = (m1x.origin || "").toLowerCase();
        if (!!hB4F && hB4F != "*" && location.href.toLowerCase().indexOf(hB4F) != 0) return;
        h1x.z1x(window, "message", { data: JSON.parse(m1x.data || "null"), source: window.frames[m1x.self] || m1x.self, origin: ba1x.bMo5t(m1x.ref || document.referrer) })
    };
    var cpf1x = function() {
        var UN6H;
        var cpe1x = function(bv2x, s1x, i1x) {
            if (k1x.cV2x(UN6H, bv2x.w) < 0) {
                UN6H.push(bv2x.w);
                i1x.splice(s1x, 1);
                bv2x.w.name = bv2x.d
            }
        };
        return function() {
            UN6H = [];
            k1x.mk6e(jo5t, cpe1x);
            UN6H = null
        }
    }();
    ba1x.bot0x = function() {
        var coT1x = function(j1x) {
            var m1x = {};
            j1x = j1x || Y1x;
            m1x.origin = j1x.origin || "";
            m1x.ref = location.href;
            m1x.self = j1x.source;
            m1x.data = JSON.stringify(j1x.data);
            return J1x + k1x.tW8O(m1x, "|", !0)
        };
        return ba1x.bot0x.ee3x(function(d1x) {
            d1x.stopped = !0;
            var bg1x = d1x.args;
            jo5t.unshift({ w: bg1x[0], d: escape(coT1x(bg1x[1])) })
        })
    }();
    H1x.fs3x.B1x({ element: window, event: "message" });
    window.setInterval(cpf1x, 100);
    window.setInterval(cpl1x, 20)
})();
(function() {
    var c1x = NEJ.P,
        ba1x = c1x("nej.h"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j");
    v1x.coO1x = function() {
        var iy5D = window.name || "_parent",
            coN1x = { gi3x: window.top, iy5D: window, bB2x: window.parent };
        return function(cJ2x, e1x) {
            if (typeof cJ2x == "string") {
                cJ2x = coN1x[cJ2x] || window.frames[cJ2x];
                if (!cJ2x) return this
            }
            var j1x = NEJ.X({ origin: "*", source: iy5D }, e1x);
            ba1x.bot0x(cJ2x, j1x);
            return this
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        it5y = c1x("nej.c"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.ut.j"),
        R1x = {},
        UE6y;
    if (!!N1x.bcb8T) return;
    N1x.bcb8T = NEJ.C();
    UE6y = N1x.bcb8T.O1x(N1x.Gt1x);
    UE6y.cm2x = function() {
        var ex3x = "NEJ-AJAX-DATA:",
            Di1x = !1;
        var bcu8m = function(d1x) {
            var j1x = d1x.data;
            if (j1x.indexOf(ex3x) != 0) return;
            j1x = JSON.parse(j1x.replace(ex3x, ""));
            var iN5S = R1x[j1x.key];
            if (!iN5S) return;
            delete R1x[j1x.key];
            j1x.result = decodeURIComponent(j1x.result || "");
            iN5S.sA8s(j1x)
        };
        var bcv8n = function() {
            if (!Di1x) {
                Di1x = !0;
                h1x.q1x(window, "message", bcu8m)
            }
        };
        return function() {
            this.cs2x();
            bcv8n()
        }
    }();
    UE6y.cl2x = function(e1x) {
        var fy3x = e1x.request,
            iN5S = it5y.ccN8F(fy3x.url),
            uZ8R = R1x[iN5S];
        if (k1x.em3x(uZ8R)) {
            uZ8R.push(this.cl2x.g1x(this, e1x));
            return
        }
        if (!uZ8R) {
            R1x[iN5S] = [this.cl2x.g1x(this, e1x)];
            a0x.YM7F({
                src: iN5S,
                visible: !1,
                onload: function(d1x) {
                    var i1x = R1x[iN5S];
                    R1x[iN5S] = h1x.U1x(d1x).contentWindow;
                    k1x.mk6e(i1x, function(db2x) {
                        try { db2x() } catch (e) {}
                    })
                }
            });
            return
        }
        this.yE9v = "frm-" + k1x.nb6V();
        R1x[this.yE9v] = this;
        var j1x = NEJ.EX({ url: "", data: null, timeout: 0, method: "GET" }, fy3x);
        j1x.key = this.yE9v;
        j1x.headers = e1x.headers;
        v1x.coO1x(R1x[iN5S], { data: j1x })
    };
    UE6y.jl5q = function() {
        delete R1x[this.yE9v];
        this.sA8s({ status: 0 });
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        dP3x = c1x("nej.g"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.ut.j"),
        R1x = {},
        Hn2x;
    if (!!N1x.bcE8w) return;
    N1x.bcE8w = NEJ.C();
    Hn2x = N1x.bcE8w.O1x(N1x.Gt1x);
    Hn2x.cm2x = function() {
        var ex3x = "NEJ-UPLOAD-RESULT:",
            Di1x = !1;
        var bcu8m = function(d1x) {
            var j1x = d1x.data;
            if (j1x.indexOf(ex3x) != 0) return;
            j1x = JSON.parse(j1x.replace(ex3x, ""));
            var iN5S = R1x[j1x.key];
            if (!iN5S) return;
            delete R1x[j1x.key];
            iN5S.sA8s(decodeURIComponent(j1x.result))
        };
        var bcv8n = function() {
            if (!Di1x) {
                Di1x = !0;
                h1x.q1x(window, "message", bcu8m)
            }
        };
        return function() {
            this.cs2x();
            bcv8n()
        }
    }();
    Hn2x.bC2x = function() {
        this.bH2x();
        a0x.cH2x(this.bcM8E);
        delete this.bcM8E;
        window.clearTimeout(this.dM3x);
        delete this.dM3x
    };
    Hn2x.sA8s = function(da2x) {
        var Q1x;
        try {
            Q1x = JSON.parse(da2x);
            this.z1x("onload", Q1x)
        } catch (e) { this.z1x("onerror", { code: dP3x.bRn6h, message: da2x }) }
    };
    Hn2x.cl2x = function() {
        var coJ1x = function() {
            var lT6N, da2x;
            try {
                var lT6N = this.bcM8E.contentWindow.document.body,
                    da2x = lT6N.innerText || lT6N.textContent
            } catch (e) {
                return
            }
            this.sA8s(da2x)
        };
        var bdk8c = function(V1x, eI3x, qx7q) {
            v1x.br2x(V1x, {
                type: "json",
                method: "POST",
                cookie: qx7q,
                mode: parseInt(eI3x) || 0,
                onload: function(j1x) {
                    if (!this.dM3x) return;
                    this.z1x("onuploading", j1x);
                    this.dM3x = window.setTimeout(bdk8c.g1x(this, V1x, eI3x, qx7q), 1e3)
                }.g1x(this),
                onerror: function(bQ2x) {
                    if (!this.dM3x) return;
                    this.dM3x = window.setTimeout(bdk8c.g1x(this, V1x, eI3x, qx7q), 1e3)
                }.g1x(this)
            })
        };
        return function(e1x) {
            var fy3x = e1x.request,
                nA6u = e1x.headers,
                eE3x = fy3x.data,
                T1x = "fom-" + k1x.nb6V();
            R1x[T1x] = this;
            eE3x.target = T1x;
            eE3x.method = "POST";
            eE3x.enctype = dP3x.DL1x;
            eE3x.encoding = dP3x.DL1x;
            var V1x = eE3x.action || "",
                lj5o = V1x.indexOf("?") <= 0 ? "?" : "&";
            eE3x.action = V1x + lj5o + "_proxy_=form";
            this.bcM8E = a0x.YM7F({
                name: T1x,
                onload: function(d1x) {
                    var uZ8R = h1x.U1x(d1x);
                    h1x.q1x(uZ8R, "load", coJ1x.g1x(this));
                    eE3x.submit();
                    var bMb5g = (eE3x.nej_query || Y1x).value;
                    if (!bMb5g) return;
                    var eI3x = (eE3x.nej_mode || Y1x).value,
                        qx7q = (eE3x.nej_cookie || Y1x).value == "true";
                    this.dM3x = window.setTimeout(bdk8c.g1x(this, bMb5g, eI3x, qx7q), 100)
                }.g1x(this)
            })
        }
    }();
    Hn2x.jl5q = function() {
        this.z1x("onerror", { code: dP3x.bSL6F, message: "客户端终止文件上传" });
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        ba1x = c1x("nej.h"),
        N1x = c1x("nej.ut.j");
    ba1x.bcT8L = function() {
        return new XMLHttpRequest
    };
    ba1x.bdy8q = function(eI3x, UA6u, e1x) {
        var bv2x = !!UA6u ? { 2: N1x.bcE8w } : { 2: N1x.bcb8T, 3: N1x.bnX0x };
        return (bv2x[eI3x] || N1x.Wj6d).B1x(e1x)
    }
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        ba1x = c1x("nej.h");
    if (N1x.mt6n.trident) return;
    ba1x.bcT8L = function() {
        var KG3x = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Msxml2.XMLHTTP.4.0", "Msxml2.XMLHTTP.5.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
        var coD1x = function() {
            for (var i = 0, l = KG3x.length; i < l; i++) {
                try {
                    return new ActiveXObject(KG3x[i])
                } catch (e) {}
            }
            return null
        };
        return ba1x.bcT8L.ee3x(function(d1x) {
            if (!!window.XMLHttpRequest) return;
            d1x.stopped = !0;
            d1x.value = coD1x()
        })
    }();
    ba1x.bdy8q = function() {
        var CC0x = { 0: 2, 1: 3 };
        return ba1x.bdy8q.ee3x(function(d1x) {
            var bg1x = d1x.args,
                eI3x = bg1x[0] || 0;
            bg1x[0] = !!bg1x[1] ? 2 : CC0x[eI3x] || eI3x
        })
    }()
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        ba1x = c1x("nej.h"),
        dP3x = c1x("nej.g"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.ut.j"),
        mQ6K = {},
        Fs1x = bm1x;
    v1x.jl5q = function(eB3x) {
        var R1x = mQ6K[eB3x];
        if (!R1x) return this;
        R1x.req.jl5q();
        return this
    };
    v1x.Uw6q = function(dD3x) {
        Fs1x = dD3x || bm1x;
        return this
    };
    v1x.br2x = function() {
        var iJ5O = (location.protocol + "//" + location.host).toLowerCase();
        var coC1x = function(V1x) {
            var hB4F = k1x.csF1x(V1x);
            return !!hB4F && hB4F != iJ5O
        };
        var coz1x = function(nA6u) {
            return (nA6u || Y1x)[dP3x.xG9x] == dP3x.DL1x
        };
        var cow1x = function(e1x) {
            var UA6u = coz1x(e1x.headers);
            if (!coC1x(e1x.url) && !UA6u) return N1x.Wj6d.B1x(e1x);
            return ba1x.bdy8q(e1x.mode, UA6u, e1x)
        };
        var DV1x = function(eB3x) {
            var R1x = mQ6K[eB3x];
            if (!R1x) return;
            if (!!R1x.req) R1x.req.S1x();
            delete mQ6K[eB3x]
        };
        var bLZ5e = function(eB3x, t1x) {
            var R1x = mQ6K[eB3x];
            if (!R1x) return;
            DV1x(eB3x);
            try {
                var d1x = { type: t1x, result: arguments[2] };
                Fs1x(d1x);
                if (!d1x.stopped)(R1x[t1x] || bm1x)(d1x.result)
            } catch (ex) {
                console.error(ex.message);
                console.error(ex)
            }
        };
        var xp9g = function(eB3x, j1x) { bLZ5e(eB3x, "onload", j1x) };
        var zz0x = function(eB3x, bQ2x) { bLZ5e(eB3x, "onerror", bQ2x) };
        return function(V1x, e1x) {
            e1x = e1x || {};
            var eB3x = k1x.nb6V(),
                R1x = { onload: e1x.onload || bm1x, onerror: e1x.onerror || bm1x };
            mQ6K[eB3x] = R1x;
            e1x.onload = xp9g.g1x(null, eB3x);
            e1x.onerror = zz0x.g1x(null, eB3x);
            if (!!e1x.query) {
                var lj5o = V1x.indexOf("?") < 0 ? "?" : "&",
                    bD2x = e1x.query;
                if (k1x.kg5l(bD2x)) bD2x = k1x.de2x(bD2x);
                if (!!bD2x) V1x += lj5o + bD2x
            }
            e1x.url = V1x;
            R1x.req = cow1x(e1x);
            R1x.req.bbB7u(e1x.data);
            return eB3x
        }
    }();
    v1x.gb3x = function(eE3x, e1x) {
        var gy3x = { mode: 0, type: "json", query: null, cookie: !1, headers: {}, onload: null, onerror: null, onuploading: null, onbeforerequest: null };
        NEJ.EX(gy3x, e1x);
        gy3x.data = eE3x;
        gy3x.method = "POST";
        gy3x.timeout = 0;
        gy3x.headers[dP3x.xG9x] = dP3x.DL1x;
        return v1x.br2x(eE3x.action, gy3x)
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        dP3x = c1x("nej.g"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        N1x = c1x("nej.ut.j"),
        lK5P, jm5r = 6e4;
    if (!!N1x.Mw3x) return;
    N1x.Mw3x = NEJ.C();
    lK5P = N1x.Mw3x.O1x(H1x.cz2x);
    lK5P.cm2x = function() {
        this.cs2x();
        this.MA3x = { onerror: this.cou1x.g1x(this), onloaded: this.cot1x.g1x(this) };
        if (!this.constructor.P1x) this.constructor.P1x = { loaded: {} }
    };
    lK5P.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.Hw2x = e1x.version;
        this.bfO9F = e1x.timeout;
        this.MA3x.version = this.Hw2x;
        this.MA3x.timeout = this.bfO9F
    };
    lK5P.bLY5d = function(J1x) { delete this.constructor.P1x[J1x] };
    lK5P.zC0x = function(J1x) {
        return this.constructor.P1x[J1x]
    };
    lK5P.bLV5a = function(J1x, j1x) { this.constructor.P1x[J1x] = j1x };
    lK5P.Um6g = bm1x;
    lK5P.bLT5Y = function(fy3x) { h1x.ip4t(fy3x) };
    lK5P.bgo9f = function(fy3x) {
        fy3x.src = this.kH5M;
        document.head.appendChild(fy3x)
    };
    lK5P.zG0x = function() {
        var R1x = this.zC0x(this.kH5M);
        if (!R1x) return;
        window.clearTimeout(R1x.timer);
        this.bLT5Y(R1x.request);
        delete R1x.bind;
        delete R1x.timer;
        delete R1x.request;
        this.bLY5d(this.kH5M);
        this.zC0x("loaded")[this.kH5M] = !0
    };
    lK5P.Ui6c = function(T1x) {
        var R1x = this.zC0x(this.kH5M);
        if (!R1x) return;
        var i1x = R1x.bind;
        this.zG0x();
        if (!!i1x && i1x.length > 0) {
            var cq2x;
            while (i1x.length) {
                cq2x = i1x.shift();
                try { cq2x.z1x(T1x, arguments[1]) } catch (ex) {
                    console.error(ex.message);
                    console.error(ex.stack)
                }
                cq2x.S1x()
            }
        }
    };
    lK5P.ek3x = function(bQ2x) { this.Ui6c("onerror", bQ2x) };
    lK5P.bLQ5V = function() { this.Ui6c("onloaded") };
    lK5P.cnT0x = function(V1x) { this.constructor.B1x(this.MA3x).HB2x(V1x) };
    lK5P.bLO5T = function(bQ2x) {
        var R1x = this.zC0x(this.ur8j);
        if (!R1x) return;
        if (!!bQ2x) R1x.error++;
        R1x.loaded++;
        if (R1x.loaded < R1x.total) return;
        this.bLY5d(this.ur8j);
        this.z1x(R1x.error > 0 ? "onerror" : "onloaded")
    };
    lK5P.cou1x = function(bQ2x) { this.bLO5T(!0) };
    lK5P.cot1x = function() { this.bLO5T() };
    lK5P.HB2x = function(V1x) {
        V1x = k1x.bdD8v(V1x);
        if (!V1x) {
            this.z1x("onerror", { code: dP3x.bhS9J, message: "请指定要载入的资源地址！" });
            return this
        }
        this.kH5M = V1x;
        if (!!this.Hw2x) this.kH5M += (this.kH5M.indexOf("?") < 0 ? "?" : "&") + this.Hw2x;
        if (this.zC0x("loaded")[this.kH5M]) {
            try { this.z1x("onloaded") } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
            this.S1x();
            return this
        }
        var R1x = this.zC0x(this.kH5M),
            fy3x;
        if (!!R1x) {
            R1x.bind.unshift(this);
            R1x.timer = window.clearTimeout(R1x.timer)
        } else {
            fy3x = this.Um6g();
            R1x = { request: fy3x, bind: [this] };
            this.bLV5a(this.kH5M, R1x);
            h1x.q1x(fy3x, "load", this.bLQ5V.g1x(this));
            h1x.q1x(fy3x, "error", this.ek3x.g1x(this, { code: dP3x.blK0x, message: "无法加载指定资源文件[" + this.kH5M + "]！" }))
        }
        if (this.bfO9F != 0) R1x.timer = window.setTimeout(this.ek3x.g1x(this, { code: dP3x.bvU2x, message: "指定资源文件[" + this.kH5M + "]载入超时！" }), this.bfO9F || jm5r);
        if (!!fy3x) this.bgo9f(fy3x);
        this.z1x("onloading");
        return this
    };
    lK5P.bLN5S = function(i1x) {
        if (!i1x || !i1x.length) {
            this.z1x("onerror", { code: dP3x.bhS9J, message: "请指定要载入的资源队列！" });
            return this
        }
        this.ur8j = k1x.nb6V();
        var R1x = { error: 0, loaded: 0, total: i1x.length };
        this.bLV5a(this.ur8j, R1x);
        for (var i = 0, l = i1x.length; i < l; i++) {
            if (!i1x[i]) {
                R1x.total--;
                continue
            }
            this.cnT0x(i1x[i])
        }
        this.z1x("onloading");
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        ba1x = c1x("nej.h"),
        N1x = c1x("nej.ut.j"),
        MN4R;
    if (!!N1x.bhu9l) return;
    N1x.bhu9l = NEJ.C();
    MN4R = N1x.bhu9l.O1x(N1x.Mw3x);
    MN4R.Um6g = function() {
        var fa3x = a0x.cU2x("iframe");
        fa3x.width = 0;
        fa3x.height = 0;
        fa3x.style.display = "none";
        return fa3x
    };
    MN4R.bgo9f = function(fy3x) {
        fy3x.src = this.kH5M;
        document.body.appendChild(fy3x)
    };
    MN4R.ek3x = function(bQ2x) {
        var fa3x = (this.zC0x(this.kH5M) || Y1x).request;
        this.Ui6c("onerror", bQ2x);
        ba1x.YU7N(fa3x)
    };
    MN4R.bLQ5V = function() {
        var lT6N = null,
            fa3x = (this.zC0x(this.kH5M) || Y1x).request;
        try { lT6N = fa3x.contentWindow.document.body } catch (ex) {}
        this.Ui6c("onloaded", lT6N);
        ba1x.YU7N(fa3x)
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ut.j"),
        bhw9n;
    if (!!N1x.Ue6Y) return;
    N1x.Ue6Y = NEJ.C();
    bhw9n = N1x.Ue6Y.O1x(N1x.Mw3x);
    bhw9n.Um6g = function() {
        return a0x.cU2x("link")
    };
    bhw9n.bgo9f = function(fy3x) {
        fy3x.href = this.kH5M;
        document.head.appendChild(fy3x)
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ut.j"),
        Ua6U;
    if (!!N1x.TY6S) return;
    N1x.TY6S = NEJ.C();
    Ua6U = N1x.TY6S.O1x(N1x.Mw3x);
    Ua6U.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.bLM5R = e1x.async;
        this.bia9R = e1x.charset;
        this.MA3x.async = !1;
        this.MA3x.charset = this.bia9R
    };
    Ua6U.Um6g = function() {
        var fy3x = a0x.cU2x("script");
        if (this.bLM5R != null) fy3x.async = !!this.bLM5R;
        if (this.bia9R != null) fy3x.charset = this.bia9R;
        return fy3x
    };
    Ua6U.bLT5Y = function(fy3x) { a0x.cH2x(fy3x) }
})();
(function() {
    var c1x = NEJ.P,
        v1x = c1x("nej.j"),
        N1x = c1x("nej.ut.j");
    v1x.cnJ0x = function(V1x, e1x) {
        N1x.TY6S.B1x(e1x).HB2x(V1x);
        return this
    };
    v1x.cnI0x = function(i1x, e1x) {
        N1x.TY6S.B1x(e1x).bLN5S(i1x);
        return this
    };
    v1x.ctt2x = function(V1x, e1x) {
        N1x.Ue6Y.B1x(e1x).HB2x(V1x);
        return this
    };
    v1x.cnG0x = function(i1x, e1x) {
        N1x.Ue6Y.B1x(e1x).bLN5S(i1x);
        return this
    };
    v1x.bLJ5O = function(V1x, e1x) {
        N1x.bhu9l.B1x(e1x).HB2x(V1x);
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        R1x = {},
        rR8J = +(new Date) + "-";
    a0x.cF2x = function() {
        var cv2x = 0;
        var MP4T = function() {
            if (cv2x > 0) return;
            cv2x = 0;
            h1x.z1x(document, "templateready");
            h1x.ip4t(document, "templateready")
        };
        var TU6O = function(fv3x, e1x) {
            var du3x = a0x.u1x(fv3x, "src");
            if (!du3x) return;
            e1x = e1x || Y1x;
            var fr3x = e1x.root;
            if (!fr3x) { fr3x = fv3x.ownerDocument.location.href } else { fr3x = k1x.bdD8v(fr3x) }
            du3x = du3x.split(",");
            k1x.be1x(du3x, function(A1x, s1x, i1x) { i1x[s1x] = k1x.bdD8v(A1x, fr3x) });
            return du3x
        };
        var cnz0x = function(fv3x, e1x) {
            if (!fv3x) return;
            var du3x = TU6O(fv3x, e1x);
            if (!!du3x) v1x.cnG0x(du3x, { version: a0x.u1x(fv3x, "version") });
            a0x.bJt4x(fv3x.value)
        };
        var cny0x = function(A1x) {
            cv2x--;
            a0x.bJu4y(A1x);
            MP4T()
        };
        var cnx0x = function(fv3x, e1x) {
            if (!fv3x) return;
            var du3x = TU6O(fv3x, e1x),
                eM3x = fv3x.value;
            if (!!du3x) {
                cv2x++;
                var e1x = { version: a0x.u1x(fv3x, "version"), onloaded: cny0x.g1x(null, eM3x) };
                window.setTimeout(v1x.cnI0x.g1x(v1x, du3x, e1x), 0);
                return
            }
            a0x.bJu4y(eM3x)
        };
        var cnw0x = function(lT6N) {
            cv2x--;
            a0x.cF2x(lT6N);
            MP4T()
        };
        var cnv0x = function(fv3x, e1x) {
            if (!fv3x) return;
            var du3x = TU6O(fv3x, e1x)[0];
            if (!!du3x) {
                cv2x++;
                var e1x = { version: a0x.u1x(fv3x, "version"), onloaded: cnw0x };
                window.setTimeout(v1x.bLJ5O.g1x(v1x, du3x, e1x), 0)
            }
        };
        var cns0x = function(C1x, da2x) {
            cv2x--;
            a0x.HL2x(C1x, da2x || "");
            MP4T()
        };
        var cnr0x = function(fv3x, e1x) {
            if (!fv3x || !fv3x.id) return;
            var C1x = fv3x.id,
                du3x = TU6O(fv3x, e1x)[0];
            if (!!du3x) {
                cv2x++;
                var V1x = du3x + (du3x.indexOf("?") < 0 ? "?" : "&") + (a0x.u1x(fv3x, "version") || ""),
                    e1x = { type: "text", method: "GET", onload: cns0x.g1x(null, C1x) };
                window.setTimeout(v1x.br2x.g1x(v1x, V1x, e1x), 0)
            }
        };
        var cni0x = function(f1x, e1x) {
            var t1x = f1x.name.toLowerCase();
            switch (t1x) {
                case "jst":
                    a0x.en3x(f1x, !0);
                    return;
                case "txt":
                    a0x.HL2x(f1x.id, f1x.value || "");
                    return;
                case "ntp":
                    a0x.hO4S(f1x.value || "", f1x.id);
                    return;
                case "js":
                    cnx0x(f1x, e1x);
                    return;
                case "css":
                    cnz0x(f1x, e1x);
                    return;
                case "html":
                    cnv0x(f1x, e1x);
                    return;
                case "res":
                    cnr0x(f1x, e1x);
                    return
            }
        };
        H1x.fs3x.B1x({ element: document, event: "templateready", oneventadd: MP4T });
        return function(E1x, e1x) {
            E1x = a0x.y1x(E1x);
            if (!!E1x) {
                var i1x = E1x.tagName == "TEXTAREA" ? [E1x] : E1x.getElementsByTagName("textarea");
                k1x.be1x(i1x, function(f1x) { cni0x(f1x, e1x) });
                a0x.cH2x(E1x, !0)
            }
            MP4T();
            return this
        }
    }();
    a0x.HL2x = function(J1x, A1x) {
        R1x[J1x] = A1x || "";
        return this
    };
    a0x.hX4b = function(J1x) {
        return R1x[J1x] || ""
    };
    a0x.hO4S = function(E1x, J1x) {
        J1x = J1x || k1x.nb6V();
        E1x = a0x.y1x(E1x) || E1x;
        a0x.HL2x(rR8J + J1x, E1x);
        a0x.mm6g(E1x);
        return J1x
    };
    a0x.dr3x = function(J1x) {
        if (!J1x) return null;
        J1x = rR8J + J1x;
        var A1x = a0x.hX4b(J1x);
        if (!A1x) return null;
        if (k1x.ff3x(A1x)) {
            A1x = a0x.mI6C(A1x);
            a0x.HL2x(J1x, A1x)
        }
        return A1x.cloneNode(!0)
    };
    a0x.zU0x = function() {
        var Fs1x = function(A1x, J1x) {
            return J1x == "offset" || J1x == "limit"
        };
        return function(i1x, r1x, e1x) {
            var bs2x = [];
            if (!i1x || !i1x.length || !r1x) return bs2x;
            e1x = e1x || Y1x;
            var dL3x = i1x.length,
                iW5b = parseInt(e1x.offset) || 0,
                gu3x = Math.min(dL3x, iW5b + (parseInt(e1x.limit) || dL3x)),
                cn2x = { total: i1x.length, range: [iW5b, gu3x] };
            NEJ.X(cn2x, e1x, Fs1x);
            for (var i = iW5b, cq2x; i < gu3x; i++) {
                cn2x.index = i;
                cn2x.data = i1x[i];
                cq2x = r1x.B1x(cn2x);
                var C1x = cq2x.CN1x();
                R1x[C1x] = cq2x;
                cq2x.S1x = cq2x.S1x.ee3x(function(C1x, cq2x) {
                    delete R1x[C1x];
                    delete cq2x.S1x
                }.g1x(null, C1x, cq2x));
                bs2x.push(cq2x)
            }
            return bs2x
        }
    }();
    a0x.bLA5F = function(C1x) {
        return R1x[C1x]
    };
    a0x.ctu2x = function(dC3x, e1x) {
        e1x = e1x || Y1x;
        a0x.cF2x(e1x.tid || "template-box");
        h1x.q1x(document, "templateready", function() { dC3x.B1x().z1x("onshow", e1x) })
    };
    c1x("dbg").dumpTC = function() {
        return R1x
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        N1x = c1x("nej.ui"),
        b1x;
    if (!!N1x.er3x) return;
    N1x.er3x = NEJ.C();
    b1x = N1x.er3x.O1x(H1x.cz2x);
    b1x.cm2x = function() {
        this.cs2x();
        a0x.bIN4R();
        this.bZ2x();
        this.bR2x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.cnd0x(e1x.clazz);
        this.bLy5D(e1x.parent)
    };
    b1x.bC2x = function() {
        this.bH2x();
        this.bLx5C();
        delete this.fD3x;
        a0x.mm6g(this.o1x);
        a0x.w1x(this.o1x, this.blt0x);
        delete this.blt0x
    };
    b1x.bZ2x = bm1x;
    b1x.bR2x = function() {
        if (!this.ca2x) this.TC6w();
        this.o1x = a0x.dr3x(this.ca2x);
        if (!this.o1x) this.o1x = a0x.cU2x("div", this.kM5R);
        a0x.x1x(this.o1x, this.kM5R)
    };
    b1x.TC6w = bm1x;
    b1x.cnd0x = function(dI3x) {
        this.blt0x = dI3x || "";
        a0x.x1x(this.o1x, this.blt0x)
    };
    b1x.cmT0x = function() {
        if (!this.kM5R) return;
        a0x.x1x(this.fD3x, this.kM5R + "-parent")
    };
    b1x.bLx5C = function() {
        if (!this.kM5R) return;
        a0x.w1x(this.fD3x, this.kM5R + "-parent")
    };
    b1x.jZ5e = function() {
        return this.o1x
    };
    b1x.bLy5D = function(bB2x) {
        if (!this.o1x) return this;
        this.bLx5C();
        if (k1x.gc3x(bB2x)) { this.fD3x = bB2x(this.o1x) } else {
            this.fD3x = a0x.y1x(bB2x);
            if (!!this.fD3x) this.fD3x.appendChild(this.o1x)
        }
        this.cmT0x();
        return this
    };
    b1x.M1x = function() {
        if (!this.fD3x || !this.o1x || this.o1x.parentNode == this.fD3x) return this;
        this.fD3x.appendChild(this.o1x);
        return this
    };
    b1x.bp2x = function() {
        a0x.mm6g(this.o1x);
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        ba1x = c1x("nej.h"),
        N1x = c1x("nej.ui"),
        uk8c, bLv5A;
    if (!!N1x.NM4Q) return;
    N1x.NM4Q = NEJ.C();
    uk8c = N1x.NM4Q.O1x(N1x.er3x);
    bLv5A = N1x.NM4Q.cg2x;
    uk8c.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.vd8V("oncontentready", e1x.oncontentready || this.cmP0x.g1x(this));
        this.cmM0x = !!e1x.nohack;
        this.cmL0x = !!e1x.destroyable;
        this.HV2x(e1x.content)
    };
    uk8c.bC2x = function() {
        this.z1x("onbeforerecycle");
        this.bH2x();
        this.Tu6o();
        this.HV2x("");
        a0x.fx3x(this.o1x, { top: "", left: "" })
    };
    uk8c.cmP0x = bm1x;
    uk8c.HW2x = bm1x;
    uk8c.Tu6o = function() {
        a0x.mm6g(this.o1x);
        if (!!this.mC6w) {
            this.mC6w = ba1x.bkS0x(this.o1x);
            delete this.mC6w
        }
    };
    uk8c.HV2x = function(bi1x) {
        if (!this.o1x || !this.Ah0x || bi1x == null) return this;
        bi1x = bi1x || "";
        k1x.ff3x(bi1x) ? this.Ah0x.innerHTML = bi1x : this.Ah0x.appendChild(bi1x);
        this.z1x("oncontentready", this.Ah0x);
        return this
    };
    uk8c.fV3x = function(bj1x) {
        var A1x = bj1x.top;
        if (A1x != null) {
            A1x += "px";
            a0x.X1x(this.o1x, "top", A1x);
            a0x.X1x(this.mC6w, "top", A1x)
        }
        var A1x = bj1x.left;
        if (A1x != null) {
            A1x += "px";
            a0x.X1x(this.o1x, "left", A1x);
            a0x.X1x(this.mC6w, "left", A1x)
        }
        return this
    };
    uk8c.M1x = function() {
        a0x.X1x(this.o1x, "visibility", "hidden");
        bLv5A.M1x.apply(this, arguments);
        this.HW2x();
        a0x.X1x(this.o1x, "visibility", "");
        if (!this.cmM0x) { this.mC6w = ba1x.mC6w(this.o1x) }
        return this
    };
    uk8c.bp2x = function() {
        this.cmL0x ? this.S1x() : this.Tu6o();
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ui"),
        Aj0x;
    if (!!N1x.Tq6k) return;
    N1x.Tq6k = NEJ.C();
    Aj0x = N1x.Tq6k.O1x(N1x.er3x);
    Aj0x.bk1x = function(e1x) {
        this.Oa4e();
        this.bl1x(this.cmK0x(e1x));
        this.bS2x.onbeforerecycle = this.S1x.g1x(this);
        this.nI6C = this.boc0x()
    };
    Aj0x.bC2x = function() {
        this.z1x("onbeforerecycle");
        this.bH2x();
        delete this.bS2x;
        a0x.mm6g(this.o1x);
        var Al0x = this.nI6C;
        if (!!Al0x) {
            delete this.nI6C;
            Al0x.S1x()
        }
    };
    Aj0x.boc0x = bm1x;
    Aj0x.cmK0x = function(e1x) {
        var m1x = {};
        k1x.dZ3x(e1x, function(r1x, J1x) { this.bS2x.hasOwnProperty(J1x) ? this.bS2x[J1x] = r1x : m1x[J1x] = r1x }, this);
        return m1x
    };
    Aj0x.Oa4e = function() { this.bS2x = { clazz: "", parent: null, content: this.o1x, destroyable: !1, oncontentready: null, nohack: !1 } };
    Aj0x.M1x = function() {
        if (!!this.nI6C) this.nI6C.M1x();
        this.z1x("onaftershow");
        return this
    };
    Aj0x.bp2x = function() {
        if (!!this.nI6C) this.nI6C.bp2x();
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        dP3x = c1x("nej.g"),
        ba1x = c1x("nej.h"),
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        N1x = c1x("nej.ui"),
        Ok4o, bLu5z;
    if (!!N1x.If2x) return;
    var hQ4U = a0x.rD8v(".#<uispace>{position:fixed;_position:absolute;z-index:100;top:0;bottom:0;left:0;right:0;width:100%;height:100%;background-image:url(" + dP3x.baH7A + ");}");
    N1x.If2x = NEJ.C();
    Ok4o = N1x.If2x.O1x(N1x.er3x);
    bLu5z = N1x.If2x.cg2x;
    Ok4o.bk1x = function(e1x) {
        this.bl1x(e1x);
        var bi1x = e1x.content || "&nbsp;";
        k1x.ff3x(bi1x) ? this.o1x.innerHTML = bi1x : this.o1x.appendChild(bi1x)
    };
    Ok4o.bC2x = function() {
        this.bH2x();
        this.o1x.innerHTML = "&nbsp;"
    };
    Ok4o.bZ2x = function() { this.kM5R = hQ4U };
    Ok4o.M1x = function() {
        ba1x.bjP0x(this.o1x);
        bLu5z.M1x.apply(this, arguments);
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        N1x = c1x("nej.ut"),
        uc8U;
    if (!!N1x.wI9z) return;
    N1x.wI9z = NEJ.C();
    uc8U = N1x.wI9z.O1x(N1x.cz2x);
    uc8U.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.cmI0x = !!e1x.overflow;
        this.o1x = a0x.y1x(e1x.body);
        this.Az0x = a0x.y1x(e1x.view) || a0x.bEl3x(this.o1x);
        this.bLt5y = a0x.y1x(e1x.mbar) || this.o1x;
        this.Tj6d = parseInt(e1x.direction) || 0;
        if (!!e1x.isRelative) {
            this.o1x.style.position = "relative";
            this.bpS1x = true;
            this.bqc1x()
        }
        this.bT2x([
            [document, "mouseup", this.bqr1x.g1x(this)],
            [document, "mousemove", this.bqt1x.g1x(this)],
            [this.bLt5y, "mousedown", this.Os4w.g1x(this)]
        ])
    };
    uc8U.bqc1x = function() {
        if (!!this.bpS1x) {
            this.Ih2x = a0x.hL4P(this.o1x, this.Az0x);
            this.Ih2x.x -= parseInt(a0x.cZ2x(this.o1x, "left")) || 0;
            this.Ih2x.y -= parseInt(a0x.cZ2x(this.o1x, "top")) || 0
        }
    };
    uc8U.bC2x = function() {
        this.bH2x();
        delete this.o1x;
        delete this.bLt5y;
        delete this.Az0x
    };
    uc8U.bag7Z = function() {
        return { x: Math.max(this.Az0x.clientWidth, this.Az0x.scrollWidth) - this.o1x.offsetWidth, y: Math.max(this.Az0x.clientHeight, this.Az0x.scrollHeight) - this.o1x.offsetHeight }
    };
    uc8U.Os4w = function(d1x) {
        h1x.bh1x(d1x);
        if (!!this.hM4Q) return;
        this.hM4Q = { x: h1x.ky5D(d1x), y: h1x.nV6P(d1x) };
        this.bLs5x = this.bag7Z();
        this.z1x("ondragstart", d1x)
    };
    uc8U.bqt1x = function(d1x) {
        if (!this.hM4Q) return;
        var bj1x = { x: h1x.ky5D(d1x), y: h1x.nV6P(d1x) };
        var sh8Z = bj1x.x - this.hM4Q.x,
            sf8X = bj1x.y - this.hM4Q.y,
            A1x = { top: (parseInt(a0x.cZ2x(this.o1x, "top")) || 0) + sf8X, left: (parseInt(a0x.cZ2x(this.o1x, "left")) || 0) + sh8Z };
        if (this.bpS1x) {
            this.bqc1x();
            A1x.top = A1x.top + this.Ih2x.y;
            A1x.left = A1x.left + this.Ih2x.x
        }
        this.hM4Q = bj1x;
        this.fV3x(A1x)
    };
    uc8U.bqr1x = function(d1x) {
        if (!this.hM4Q) return;
        delete this.bLs5x;
        delete this.hM4Q;
        this.z1x("ondragend", this.baE7x())
    };
    uc8U.fV3x = function(d1x) {
        if (!this.cmI0x) {
            var bLr5w = this.bLs5x || this.bag7Z();
            d1x.top = Math.min(bLr5w.y, Math.max(0, d1x.top));
            d1x.left = Math.min(bLr5w.x, Math.max(0, d1x.left))
        }
        var cc2x = this.o1x.style;
        if (this.bpS1x) {
            this.bqc1x();
            d1x.top = d1x.top - this.Ih2x.y;
            d1x.left = d1x.left - this.Ih2x.x
        }
        if (this.Tj6d == 0 || this.Tj6d == 2) cc2x.top = d1x.top + "px";
        if (this.Tj6d == 0 || this.Tj6d == 1) cc2x.left = d1x.left + "px";
        this.z1x("onchange", d1x);
        return this
    };
    uc8U.baE7x = function() {
        return { left: parseInt(a0x.cZ2x(this.o1x, "left")) || 0, top: parseInt(a0x.cZ2x(this.o1x, "top")) || 0 }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = NEJ.P("nej.e"),
        h1x = NEJ.P("nej.v"),
        k1x = NEJ.P("nej.u"),
        H1x = NEJ.P("nej.ut"),
        N1x = NEJ.P("nej.ui"),
        hQ4U, gd3x, b1x, K1x;
    if (!!N1x.Tg6a) return;
    N1x.Tg6a = NEJ.C();
    b1x = N1x.Tg6a.O1x(N1x.NM4Q);
    K1x = N1x.Tg6a.cg2x;
    b1x.cm2x = function() {
        this.qU7N = {};
        this.jF5K = { onchange: this.bqt1x.g1x(this) };
        this.cs2x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.cmx0x(e1x.mask);
        this.cmw0x(e1x.align);
        this.Ae0x(e1x.title);
        if (!e1x.draggable) return;
        this.iM5R = H1x.wI9z.B1x(this.jF5K)
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.pA7t;
        delete this.Ov4z;
        if (!!this.Ad0x) {
            this.Ad0x.S1x();
            delete this.Ad0x
        }
        if (!!this.iM5R) {
            this.iM5R.S1x();
            delete this.iM5R
        }
    };
    b1x.bZ2x = function() {
        this.kM5R = hQ4U;
        this.ca2x = gd3x
    };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.cQ2x(this.o1x);
        this.Ah0x = i1x[1];
        this.jF5K.mbar = i1x[0];
        this.jF5K.body = this.o1x;
        h1x.q1x(i1x[2], "mousedown", this.cmt0x.g1x(this));
        h1x.q1x(this.jF5K.mbar, "mousedown", this.Os4w.g1x(this));
        this.bLn5s = a0x.cQ2x(this.jF5K.mbar)[0]
    };
    b1x.cmt0x = function(d1x) {
        h1x.bh1x(d1x);
        this.z1x("onclose", d1x);
        if (!d1x.stopped) { this.bp2x() }
    };
    b1x.Os4w = function(d1x) { h1x.z1x(document, "click") };
    b1x.bqt1x = function(d1x) {
        if (!this.mC6w) return;
        a0x.fx3x(this.mC6w, { top: d1x.top + "px", left: d1x.left + "px" })
    };
    b1x.HW2x = function() {
        var eD3x = [function() {
                return 0
            }, function(mB6v, CU1x, bj1x, J1x) {
                if (J1x == "top" && window.top != window.self) {
                    var Td6X = 0,
                        Df1x = 0;
                    if (top.g_topBarHeight) Td6X = top.g_topBarHeight;
                    if (top.g_bottomBarShow && top.g_bottomBarHeight) Df1x = top.g_bottomBarHeight;
                    if (mB6v.top <= Td6X) {
                        var bcD8v = Math.max(0, (CU1x.height - (Td6X - mB6v.top) - Df1x - bj1x.height) / 2);
                        return bcD8v + Td6X
                    } else {
                        var bcD8v = Math.max(0, (CU1x.height - Df1x - bj1x.height) / 2);
                        return bcD8v + mB6v.top
                    }
                }
                return Math.max(0, mB6v[J1x] + (CU1x[hD4H[J1x]] - bj1x[hD4H[J1x]]) / 2)
            }, function(mB6v, CU1x, bj1x, J1x) {
                return mB6v[J1x] + (CU1x[hD4H[J1x]] - bj1x[hD4H[J1x]])
            }],
            cmj0x = ["left", "top"],
            hD4H = { left: "width", top: "height" };
        return function() {
            var A1x = {},
                cc2x = this.o1x.style,
                iF5K = a0x.om6g(),
                mB6v = { left: iF5K.scrollLeft, top: iF5K.scrollTop },
                CU1x = { width: iF5K.clientWidth, height: iF5K.clientHeight },
                bj1x = { width: this.o1x.offsetWidth, height: this.o1x.offsetHeight },
                dh2x = { left: iF5K.clientWidth - this.o1x.offsetWidth, top: iF5K.clientHeight - this.o1x.offsetHeight };
            k1x.be1x(cmj0x, function(J1x, s1x) {
                var db2x = eD3x[this.pA7t[s1x]];
                if (!db2x) return;
                A1x[J1x] = db2x(mB6v, CU1x, bj1x, J1x)
            }, this);
            this.fV3x(A1x)
        }
    }();
    b1x.cmh0x = function() {
        if (!this.Ad0x) {
            if (!this.Ov4z) return;
            this.qU7N.parent = this.fD3x;
            this.Ad0x = this.Ov4z.B1x(this.qU7N)
        }
        this.Ad0x.M1x()
    };
    b1x.Tu6o = function() {
        if (!!this.Ad0x) this.Ad0x.bp2x();
        K1x.Tu6o.apply(this, arguments)
    };
    b1x.cmx0x = function(kd5i) {
        if (!!kd5i) {
            if (kd5i instanceof N1x.If2x) {
                this.Ad0x = kd5i;
                return
            }
            if (k1x.gc3x(kd5i)) {
                this.Ov4z = kd5i;
                return
            }
            this.Ov4z = N1x.If2x;
            if (k1x.ff3x(kd5i)) this.qU7N.clazz = kd5i;
            return
        }
        this.Ov4z = null
    };
    b1x.Ae0x = function(eH3x, dq3x) {
        if (!!this.bLn5s) {
            var ZX7Q = !dq3x ? "innerText" : "innerHTML";
            this.bLn5s[ZX7Q] = eH3x || "标题"
        }
        return this
    };
    b1x.cmw0x = function() {
        var cM2x = /\s+/,
            cmg0x = { left: 0, center: 1, right: 2, auto: 3 },
            cmf0x = { top: 0, middle: 1, bottom: 2, auto: 3 };
        return function(mW6Q) {
            this.pA7t = (mW6Q || "").split(cM2x);
            var dO3x = cmg0x[this.pA7t[0]];
            if (dO3x == null) dO3x = 1;
            this.pA7t[0] = dO3x;
            var dO3x = cmf0x[this.pA7t[1]];
            if (dO3x == null) dO3x = 1;
            this.pA7t[1] = dO3x;
            return this
        }
    }();
    b1x.M1x = function() {
        K1x.M1x.apply(this, arguments);
        this.cmh0x();
        return this
    };
    hQ4U = a0x.rD8v(".#<uispace>{position:absolute;z-index:1000;border:1px solid #aaa;background:#fff;}.#<uispace> .zbar{line-height:30px;background:#8098E7;border-bottom:1px solid #aaa;}.#<uispace> .zcnt{padding:10px 5px;}.#<uispace> .zttl{margin-right:20px;text-align:left;}.#<uispace> .zcls{position:absolute;top:5px;right:0;width:20px;height:20px;line-height:20px;cursor:pointer;}");
    gd3x = a0x.hO4S('<div class="' + hQ4U + '"><div class="zbar"><div class="zttl">标题</div></div><div class="zcnt"></div><span class="zcls" title="关闭窗体">×</span></div>')
})();
(function() {
    var c1x = NEJ.P,
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ui"),
        bda8S;
    if (!!N1x.SY6S) return;
    N1x.SY6S = NEJ.C();
    bda8S = N1x.SY6S.O1x(N1x.Tq6k);
    bda8S.boc0x = function() {
        return N1x.Tg6a.B1x(this.bS2x)
    };
    bda8S.Oa4e = function() {
        N1x.SY6S.cg2x.Oa4e.apply(this, arguments);
        this.bS2x.mask = null;
        this.bS2x.title = "标题";
        this.bS2x.align = "";
        this.bS2x.draggable = !1;
        this.bS2x.onclose = null
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        bd1x = c1x("nej.ui"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.dV3x = NEJ.C();
    b1x = n1x.dV3x.O1x(bd1x.SY6S);
    b1x.bk1x = function(e1x) {
        e1x.clazz = "m-layer z-show " + (e1x.clazz || "");
        e1x.nohack = true;
        e1x.draggable = true;
        this.bl1x(e1x)
    };
    b1x.dw3x = function(f1x, bF2x) {
        if (!f1x) return;
        a0x.X1x(f1x, "display", !bF2x ? "none" : "");
        f1x.lastChild.innerText = bF2x || ""
    };
    b1x.dK3x = function(gg3x, cD2x, OE5J, OK5P) {
        var dC3x = "js-lock";
        if (cD2x === undefined) return a0x.bz2x(gg3x, dC3x);
        !cD2x ? a0x.w1x(gg3x, dC3x) : a0x.x1x(gg3x, dC3x);
        gg3x.firstChild.innerText = !cD2x ? OE5J : OK5P
    };
    n1x.dV3x.M1x = function(e1x) {
        e1x = e1x || {};
        if (e1x.mask === undefined) e1x.mask = "m-mask";
        if (e1x.parent === undefined) e1x.parent = document.body;
        if (e1x.draggable === undefined) e1x.draggable = true;
        !!this.eK3x && this.eK3x.S1x();
        this.eK3x = this.B1x(e1x);
        this.eK3x.M1x(e1x);
        return this.eK3x
    };
    n1x.dV3x.bp2x = function() {!!this.eK3x && this.eK3x.S1x() }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.bdO8G = NEJ.C();
    b1x = n1x.bdO8G.O1x(n1x.dV3x);
    K1x = n1x.bdO8G.cg2x;
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        if (e1x.bubble === undefined) e1x.bubble = true;
        this.OL5Q = e1x.bubble;
        this.pk7d = e1x.message || ""
    };
    b1x.bZ2x = function() { this.ca2x = a0x.hO4S('<div class="lyct f-cb f-tc"></div>') };
    b1x.bR2x = function() {
        this.cb2x();
        h1x.q1x(this.o1x, "click", this.cw2x.g1x(this))
    };
    b1x.cw2x = function(d1x) {
        var f1x = h1x.U1x(d1x, "d:action");
        if (!f1x) return;
        if (f1x.href) h1x.cd2x(d1x);
        if (a0x.u1x(f1x, "action") == "close") this.bp2x();
        if (this.OL5Q === !1) h1x.rj7c(d1x);
        this.z1x("onaction", a0x.u1x(f1x, "action"))
    };
    b1x.M1x = function() {
        K1x.M1x.call(this);
        this.o1x.innerHTML = this.pk7d
    };
    var fT3x = a0x.en3x('<div class="f-fs1" style="line-height:22px;">${message|default:""}</div><div class="lybtn">{list buttons as item}<a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}" href="#" {if !!item.action}data-action="${item.action}"{/if}><i>${item.text}</i></a>{/list}</div>');
    l1x.mu6o = function() {
        var eV3x;
        var cq2x;
        var bea8S = function(ga3x, W1x) {
            if (k1x.gc3x(ga3x, "function") && ga3x(W1x) != -1) cq2x.S1x()
        };
        var zL0x = function() {!!cq2x && cq2x.bp2x() };
        return function(e1x) {
            clearTimeout(eV3x);
            e1x = e1x || {};
            e1x.title = e1x.title || "提示";
            e1x.clazz = e1x.clazz || "";
            e1x.parent = e1x.parent || document.body;
            e1x.buttons = e1x.buttons || [];
            e1x.message = a0x.bP2x(fT3x, e1x);
            e1x.onaction = bea8S.g1x(null, e1x.action);
            if (e1x.mask === undefined) e1x.mask = true;
            if (e1x.draggable === undefined) e1x.draggable = true;
            !!cq2x && cq2x.S1x();
            cq2x = n1x.bdO8G.B1x(e1x);
            cq2x.M1x();
            if (e1x.autoclose) eV3x = setTimeout(zL0x.g1x(null), 2e3);
            return cq2x
        }
    }();
    l1x.fb3x = function(e1x) {
        e1x = e1x || {};
        e1x.clazz = e1x.clazz || "m-layer-w1";
        e1x.buttons = [{ klass: "u-btn2-2", action: "close", text: e1x.btntxt || "确定" }];
        var cq2x = l1x.mu6o(e1x);
        return cq2x
    };
    l1x.gS3x = function(e1x) {
        e1x = e1x || {};
        e1x.clazz = e1x.clazz || "m-layer-w2";
        e1x.buttons = [{ klass: "u-btn2-2", action: "ok", text: e1x.btnok || "确定", style: e1x.okstyle || "" }, { klass: "u-btn2-1", action: "close", text: e1x.btncc || "取消", style: e1x.ccstyle || "" }];
        var cq2x = l1x.mu6o(e1x);
        return cq2x
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u");
    a0x.cme0x = function() {
        var fR3x = /[\r\n]/gi,
            R1x = {};
        var cmd0x = function(cO2x) {
            return (cO2x || "").replace(fR3x, "aa").length
        };
        var bLl5q = function(C1x) {
            var bc1x = R1x[C1x],
                bLk5p = a0x.y1x(C1x),
                wx9o = a0x.y1x(C1x + "-counter");
            if (!bLk5p || !bc1x) return;
            var d1x = { input: bLk5p.value };
            d1x.length = bc1x.onlength(d1x.input);
            d1x.delta = bc1x.max - d1x.length;
            bc1x.onchange(d1x);
            wx9o.innerHTML = d1x.value || "剩余" + d1x.delta + "个字"
        };
        return function(E1x, e1x) {
            var C1x = a0x.kB5G(E1x);
            if (!C1x || !!R1x[C1x]) return;
            var bc1x = NEJ.X({}, e1x);
            bc1x.onchange = bc1x.onchange || bm1x;
            bc1x.onlength = cmd0x;
            if (!bc1x.max) {
                var bLj5o = parseInt(a0x.gA3x(C1x, "maxlength")),
                    bLi5n = parseInt(a0x.u1x(C1x, "maxLength"));
                bc1x.max = bLj5o || bLi5n || 100;
                if (!bLj5o && !!bLi5n) bc1x.onlength = k1x.fB3x
            }
            R1x[C1x] = bc1x;
            h1x.q1x(C1x, "input", bLl5q.g1x(null, C1x));
            var f1x = a0x.FL1x(C1x, { nid: bc1x.nid || "js-counter", clazz: bc1x.clazz });
            bc1x.xid = C1x + "-counter";
            f1x.id = bc1x.xid;
            bLl5q(C1x)
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        ba1x = c1x("nej.h");
    ba1x.bfN9E = function(E1x, dI3x) {}
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        N1x = c1x("nej.p"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        ba1x = c1x("nej.h");
    if (N1x.mt6n.trident) return;
    ba1x.bfN9E = function() {
        var R1x = {};
        var Fc1x = function(d1x) {
            var cL2x = h1x.U1x(d1x);
            if (!!cL2x.value) return;
            a0x.X1x(a0x.FL1x(cL2x), "display", "none")
        };
        var BS0x = function(d1x) {
            var cL2x = h1x.U1x(d1x);
            if (!!cL2x.value) return;
            a0x.X1x(a0x.FL1x(cL2x), "display", "")
        };
        var clV0x = function(cL2x, dI3x) {
            var C1x = a0x.kB5G(cL2x),
                jR5W = a0x.FL1x(cL2x, { tag: "label", clazz: dI3x });
            jR5W.htmlFor = C1x;
            var da2x = a0x.gA3x(cL2x, "placeholder") || "";
            jR5W.innerText = da2x == "null" ? "" : da2x;
            var cr2x = cL2x.offsetHeight + "px";
            a0x.fx3x(jR5W, { left: 0, display: !cL2x.value ? "" : "none" })
        };
        return ba1x.bfN9E.ee3x(function(d1x) {
            d1x.stopped = !0;
            var bg1x = d1x.args,
                cL2x = a0x.y1x(bg1x[0]);
            if (!!R1x[cL2x.id]) return;
            clV0x(cL2x, bg1x[1]);
            R1x[cL2x.id] = !0;
            h1x.q1x(cL2x, "blur", BS0x.g1x(null));
            h1x.q1x(cL2x, "focus", Fc1x.g1x(null))
        })
    }()
})();
(function() {
    var c1x = NEJ.P,
        ba1x = c1x("nej.h"),
        a0x = c1x("nej.e"),
        cN2x = c1x("nej.x");
    a0x.fC3x = cN2x.fC3x = function(E1x, dI3x) {
        ba1x.bfN9E(E1x, a0x.u1x(E1x, "holder") || dI3x || "js-placeholder");
        return this
    };
    cN2x.isChange = !0
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        he4i;
    if (!!N1x.OT5Y) return;
    N1x.OT5Y = NEJ.C();
    he4i = N1x.OT5Y.O1x(N1x.cz2x);
    he4i.cm2x = function() {
        this.cs2x();
        this.Bh0x = { tp: { nid: "js-nej-tp" }, ok: { nid: "js-nej-ok" }, er: { nid: "js-nej-er" } }
    };
    he4i.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.fJ3x = document.forms[e1x.form] || a0x.y1x(e1x.form);
        this.bT2x([
            [this.fJ3x, "keypress", this.clU0x.g1x(this)]
        ]);
        this.pk7d = e1x.message || {};
        this.pk7d.pass = this.pk7d.pass || "&nbsp;";
        var eI3x = this.oK7D(this.fJ3x, "focusMode", 1);
        if (!isNaN(eI3x)) { this.bLe5j = { mode: eI3x, clazz: e1x.focus } }
        this.zH0x = e1x.holder;
        this.Bh0x.tp.clazz = "js-mhd " + (e1x.tip || "js-tip");
        this.Bh0x.ok.clazz = "js-mhd " + (e1x.pass || "js-pass");
        this.Bh0x.er.clazz = "js-mhd " + (e1x.error || "js-error");
        this.bLd5i = e1x.invalid || "js-invalid";
        this.clO0x(e1x);
        this.gn3x();
        if (!!this.zw0x) this.zw0x.focus()
    };
    he4i.bC2x = function() {
        this.bH2x();
        delete this.pk7d;
        delete this.zw0x;
        delete this.BI0x;
        delete this.fJ3x;
        delete this.bLb5g;
        delete this.Pc5h
    };
    he4i.oK7D = function(f1x, BQ0x, t1x) {
        var A1x = a0x.u1x(f1x, BQ0x);
        switch (t1x) {
            case 1:
                return parseInt(A1x);
            case 2:
                return (A1x || "").toLowerCase() == "true";
            case 3:
                return this.bhD9u(A1x)
        }
        return A1x
    };
    he4i.zq0x = function(A1x, t1x) {
        if (t1x == "date") return this.bhD9u(A1x);
        return parseInt(A1x)
    };
    he4i.SP6J = function() {
        var jj5o = /^button|submit|reset|image|hidden|file$/i;
        return function(f1x) {
            f1x = this.y1x(f1x) || f1x;
            var t1x = f1x.type;
            return !!f1x.name && !jj5o.test(f1x.type || "")
        }
    }();
    he4i.clL0x = function() {
        var jj5o = /^hidden$/i;
        return function(f1x) {
            if (this.SP6J(f1x)) return !0;
            f1x = this.y1x(f1x) || f1x;
            var t1x = f1x.type || "";
            return jj5o.test(t1x)
        }
    }();
    he4i.bhD9u = function() {
        var cM2x = /[-\/]/;
        var clK0x = function(A1x) {
            if (!A1x) return "";
            A1x = A1x.split(cM2x);
            A1x.push(A1x.shift());
            return A1x.join("/")
        };
        return function(A1x) {
            if ((A1x || "").toLowerCase() == "now") return +(new Date);
            return Date.parse(clK0x(A1x))
        }
    }();
    he4i.clU0x = function(d1x) {
        if (d1x.keyCode != 13) return;
        this.z1x("onenter", d1x)
    };
    he4i.clC0x = function(C1x, T1x) {
        var qI7B = this.Pc5h[T1x],
            A1x = this.oK7D(C1x, T1x);
        if (!A1x || !qI7B) return;
        this.SO6I(C1x, qI7B);
        this.bic9T(C1x, T1x, A1x)
    };
    he4i.clB0x = function(C1x, T1x) {
        try {
            var bKW5b = this.oK7D(C1x, T1x);
            if (!bKW5b) return;
            var A1x = new RegExp(bKW5b);
            this.bic9T(C1x, T1x, A1x);
            this.SO6I(C1x, this.Pc5h[T1x])
        } catch (e) {}
    };
    he4i.cly0x = function(C1x, T1x) {
        var qI7B = this.Pc5h[T1x];
        if (!!qI7B && this.oK7D(C1x, T1x, 2)) this.SO6I(C1x, qI7B)
    };
    he4i.biA9r = function(C1x, T1x, A1x) {
        A1x = parseInt(A1x);
        if (isNaN(A1x)) return;
        this.bic9T(C1x, T1x, A1x);
        this.SO6I(C1x, this.Pc5h[T1x])
    };
    he4i.bKU5Z = function(C1x, T1x) { this.biA9r(C1x, T1x, this.oK7D(C1x, T1x)) };
    he4i.bKT5Y = function(C1x, T1x) { this.biA9r(C1x, T1x, a0x.gA3x(C1x, T1x)) };
    he4i.bKS5X = function(C1x, T1x, t1x) {
        var A1x = this.zq0x(this.oK7D(C1x, T1x), this.oK7D(C1x, "type"));
        this.biA9r(C1x, T1x, A1x)
    };
    he4i.clq9h = function() {
        var fR3x = /^input|textarea$/i;
        var Fc1x = function(d1x) { this.oL7E(h1x.U1x(d1x)) };
        var BS0x = function(d1x) {
            var f1x = h1x.U1x(d1x);
            if (!this.oK7D(f1x, "ignore", 2)) { this.bKR5W(f1x) }
        };
        return function(f1x) {
            if (this.oK7D(f1x, "autoFocus", 2)) this.zw0x = f1x;
            var po7h = a0x.gA3x(f1x, "placeholder");
            if (!!po7h && po7h != "null") a0x.fC3x(f1x, this.zH0x);
            if (!!this.bLe5j && fR3x.test(f1x.tagName)) a0x.lQ6K(f1x, this.bLe5j);
            var C1x = a0x.kB5G(f1x);
            this.cly0x(C1x, "required");
            this.clC0x(C1x, "type");
            this.clB0x(C1x, "pattern");
            this.bKT5Y(C1x, "maxlength");
            this.bKT5Y(C1x, "minlength");
            this.bKU5Z(C1x, "maxLength");
            this.bKU5Z(C1x, "minLength");
            this.bKS5X(C1x, "min");
            this.bKS5X(C1x, "max");
            var T1x = f1x.name;
            this.pk7d[T1x + "-tip"] = this.oK7D(f1x, "tip");
            this.pk7d[T1x + "-error"] = this.oK7D(f1x, "message");
            this.oL7E(f1x);
            var bt2x = this.BI0x[C1x],
                j1x = (bt2x || Y1x).data || Y1x,
                Pi5n = this.oK7D(f1x, "counter", 2);
            if (Pi5n && (j1x.maxlength || j1x.maxLength)) { a0x.cme0x(C1x, { nid: this.Bh0x.tp.nid, clazz: "js-counter" }) }
            if (!!bt2x && fR3x.test(f1x.tagName)) {
                this.bT2x([
                    [f1x, "focus", Fc1x.g1x(this)],
                    [f1x, "blur", BS0x.g1x(this)]
                ])
            } else if (this.oK7D(f1x, "focus", 2)) {
                this.bT2x([
                    [f1x, "focus", Fc1x.g1x(this)]
                ])
            }
        }
    }();
    he4i.clO0x = function() {
        var CL1x = {
            number: /^[\d]+$/i,
            url: /^[a-z]+:\/\/(?:[\w-]+\.)+[a-z]{2,6}.*$/i,
            email: /^[\w-\.]+@(?:[\w-]+\.)+[a-z]{2,6}$/i,
            date: function(v) {
                return !v || !isNaN(this.bhD9u(v))
            }
        };
        var clo9f = {
            required: function(f1x) {
                var t1x = f1x.type,
                    cln9e = !f1x.value,
                    clh9Y = (t1x == "checkbox" || t1x == "radio") && !f1x.checked;
                if (clh9Y || cln9e) return -1
            },
            type: function(f1x, e1x) {
                var cM2x = this.bLb5g[e1x.type],
                    eM3x = f1x.value.trim(),
                    cld9U = !!cM2x.test && !cM2x.test(eM3x),
                    clb9S = k1x.gc3x(cM2x) && !cM2x.call(this, eM3x);
                if (cld9U || clb9S) return -2
            },
            pattern: function(f1x, e1x) {
                if (!e1x.pattern.test(f1x.value)) return -3
            },
            maxlength: function(f1x, e1x) {
                if (f1x.value.length > e1x.maxlength) return -4
            },
            minlength: function(f1x, e1x) {
                if (f1x.value.length < e1x.minlength) return -5
            },
            maxLength: function(f1x, e1x) {
                if (k1x.fB3x(f1x.value) > e1x.maxLength) return -4
            },
            minLength: function(f1x, e1x) {
                if (k1x.fB3x(f1x.value) < e1x.minLength) return -5
            },
            min: function(f1x, e1x) {
                var fn3x = this.zq0x(f1x.value, e1x.type);
                if (isNaN(fn3x) || fn3x < e1x.min) return -6
            },
            max: function(f1x, e1x) {
                var fn3x = this.zq0x(f1x.value, e1x.type);
                if (isNaN(fn3x) || fn3x > e1x.max) return -7
            }
        };
        return function(e1x) {
            this.bLb5g = NEJ.X(NEJ.X({}, CL1x), e1x.type);
            this.Pc5h = NEJ.X(NEJ.X({}, clo9f), e1x.attr)
        }
    }();
    he4i.SO6I = function(C1x, vK9B) {
        if (!k1x.gc3x(vK9B)) return;
        var bt2x = this.BI0x[C1x];
        if (!bt2x || !bt2x.func) {
            bt2x = bt2x || {};
            bt2x.func = [];
            this.BI0x[C1x] = bt2x
        }
        bt2x.func.push(vK9B)
    };
    he4i.bic9T = function(C1x, T1x, A1x) {
        if (!T1x) return;
        var bt2x = this.BI0x[C1x];
        if (!bt2x || !bt2x.data) {
            bt2x = bt2x || {};
            bt2x.data = {};
            this.BI0x[C1x] = bt2x
        }
        bt2x.data[T1x] = A1x
    };
    he4i.bKR5W = function(f1x) {
        f1x = this.y1x(f1x) || f1x;
        var bt2x = this.BI0x[a0x.kB5G(f1x)];
        if (!f1x || !bt2x || !this.SP6J(f1x)) return !0;
        var m1x;
        k1x.dZ3x(bt2x.func, function(eD3x) {
            m1x = eD3x.call(this, f1x, bt2x.data);
            return m1x != null
        }, this);
        if (m1x == null) {
            var d1x = { target: f1x, form: this.fJ3x };
            this.z1x("oncheck", d1x);
            m1x = d1x.value
        }
        var d1x = { target: f1x, form: this.fJ3x };
        if (m1x != null) {
            d1x.code = m1x;
            this.z1x("oninvalid", d1x);
            if (!d1x.stopped) { this.cla9R(f1x, d1x.value || this.pk7d[f1x.name + m1x]) }
        } else {
            this.z1x("onvalid", d1x);
            if (!d1x.stopped) this.ckZ9Q(f1x, d1x.value)
        }
        return m1x == null
    };
    he4i.vN9E = function() {
        var ckW9N = function(Zj7c, Zi7b) {
            return Zj7c == Zi7b ? "block" : "none"
        };
        var ckV9M = function(f1x, t1x, bF2x) {
            var po7h = bKH5M.call(this, f1x, t1x);
            if (!po7h && !!bF2x) po7h = a0x.FL1x(f1x, this.Bh0x[t1x]);
            return po7h
        };
        var bKH5M = function(f1x, t1x) {
            var po7h;
            if (t1x == "tp") po7h = a0x.y1x(f1x.name + "-tip");
            if (!po7h) po7h = a0x.I1x(f1x.parentNode, this.Bh0x[t1x].nid)[0];
            return po7h
        };
        return function(f1x, bF2x, t1x) {
            f1x = this.y1x(f1x) || f1x;
            if (!f1x) return;
            t1x == "er" ? a0x.x1x(f1x, this.bLd5i) : a0x.w1x(f1x, this.bLd5i);
            var po7h = ckV9M.call(this, f1x, t1x, bF2x);
            if (!!po7h && !!bF2x) po7h.innerHTML = bF2x;
            k1x.dZ3x(this.Bh0x, function(A1x, J1x) { a0x.X1x(bKH5M.call(this, f1x, J1x), "display", ckW9N(t1x, J1x)) }, this)
        }
    }();
    he4i.oL7E = function(f1x, bF2x) {
        this.vN9E(f1x, bF2x || this.pk7d[f1x.name + "-tip"], "tp");
        return this
    };
    he4i.ckZ9Q = function(f1x, bF2x) {
        this.vN9E(f1x, bF2x || this.pk7d[f1x.name + "-pass"] || this.pk7d.pass, "ok");
        return this
    };
    he4i.cla9R = function(f1x, bF2x) {
        this.vN9E(f1x, bF2x || this.pk7d[f1x.name + "-error"], "er");
        return this
    };
    he4i.hU4Y = function() {
        var fR3x = /^(?:radio|checkbox)$/i;
        var ckS9J = function(A1x) {
            return A1x == null ? "" : A1x
        };
        var bKG5L = function(A1x, f1x) {
            if (fR3x.test(f1x.type || "")) { f1x.checked = A1x == f1x.value } else { f1x.value = ckS9J(A1x) }
        };
        return function(T1x, A1x) {
            var f1x = this.y1x(T1x);
            if (!f1x) return this;
            if (f1x.tagName == "SELECT" || !f1x.length) { bKG5L(A1x, f1x) } else { k1x.be1x(f1x, bKG5L.g1x(null, A1x)) }
            return this
        }
    }();
    he4i.y1x = function(T1x) {
        return this.fJ3x.elements[T1x]
    };
    he4i.ctx2x = function() {
        return this.fJ3x
    };
    he4i.Sy6s = function() {
        var fR3x = /^radio|checkbox$/i,
            jj5o = /^number|date$/;
        var ckM9D = function(bv2x, f1x) {
            var T1x = f1x.name,
                A1x = f1x.value,
                bt2x = bv2x[T1x],
                t1x = this.oK7D(f1x, "type");
            if (jj5o.test(t1x)) A1x = this.zq0x(A1x, t1x);
            if (fR3x.test(f1x.type) && !f1x.checked) {
                A1x = this.oK7D(f1x, "value");
                if (!A1x) return
            }
            if (!!bt2x) {
                if (!k1x.em3x(bt2x)) {
                    bt2x = [bt2x];
                    bv2x[T1x] = bt2x
                }
                bt2x.push(A1x)
            } else { bv2x[T1x] = A1x }
        };
        return function() {
            var m1x = {};
            k1x.be1x(this.fJ3x.elements, function(f1x) {
                if (this.clL0x(f1x)) ckM9D.call(this, m1x, f1x)
            }, this);
            return m1x
        }
    }();
    he4i.Sv6p = function() {
        var ckL9C = function(f1x) {
            if (this.SP6J(f1x)) this.oL7E(f1x)
        };
        return function() {
            this.fJ3x.reset();
            k1x.be1x(this.fJ3x.elements, ckL9C, this);
            return this
        }
    }();
    he4i.ctz2x = function() {
        this.fJ3x.submit();
        return this
    };
    he4i.gn3x = function() {
        var ckJ9A = function(f1x) {
            if (this.SP6J(f1x)) this.clq9h(f1x)
        };
        return function() {
            this.BI0x = {};
            k1x.be1x(this.fJ3x.elements, ckJ9A, this);
            return this
        }
    }();
    he4i.ckI9z = function(f1x) {
        f1x = this.y1x(f1x) || f1x;
        if (!!f1x) return this.bKR5W(f1x);
        var m1x = !0;
        k1x.be1x(this.fJ3x.elements, function(f1x) {
            var jX5c = this.ckI9z(f1x);
            m1x = m1x && jX5c
        }, this);
        return m1x
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        l1x = c1x("nm.x"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.Sr6l = NEJ.C();
    b1x = n1x.Sr6l.O1x(n1x.dV3x);
    K1x = n1x.Sr6l.cg2x;
    b1x.bR2x = function() {
        this.cb2x();
        h1x.q1x(this.o1x, "click", this.cw2x.g1x(this));
        h1x.q1x(document, "mousewheel", this.yV0x.g1x(this));
        if (!!document.body.addEventListener) document.body.addEventListener("DOMMouseScroll", this.yV0x.g1x(this))
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        if (e1x.jst) { this.o1x.innerHTML = a0x.bP2x(e1x.jst, e1x.data) } else if (e1x.ntp) { this.o1x.appendChild(a0x.dr3x(e1x.ntp)) } else if (e1x.txt) { this.o1x.innerHTML = a0x.hX4b(e1x.txt) } else if (e1x.html) { this.o1x.innerHTML = e1x.html }
        var PU5Z = this.o1x.getElementsByTagName("form");
        if (PU5Z.length) { this.fJ3x = H1x.OT5Y.B1x({ form: PU5Z[0] }) }
        this.DT1x = a0x.cQ2x(this.o1x)[0]
    };
    b1x.bC2x = function() {
        this.z1x("ondestroy");
        this.bH2x();
        this.o1x.innerHTML = "";
        delete this.DT1x
    };
    b1x.cw2x = function(d1x) {
        var f1x = h1x.U1x(d1x, "d:action"),
            j1x = this.fJ3x ? this.fJ3x.Sy6s() : null,
            d1x = { action: a0x.u1x(f1x, "action") };
        if (j1x) d1x.data = j1x;
        if (d1x.action) {
            this.z1x("onaction", d1x);
            if (d1x.stopped) return;
            this.bp2x()
        }
    };
    b1x.yV0x = function(d1x) {
        if (!this.DT1x) return;
        h1x.bh1x(d1x);
        var dh2x = d1x.wheelDelta || -d1x.detail;
        this.DT1x.scrollTop -= dh2x
    };
    l1x.jn5s = function(e1x) {
        e1x.destroyable = e1x.destroyable || true;
        e1x.title = e1x.title || "提示";
        e1x.draggable = true;
        e1x.parent = document.body;
        e1x.mask = e1x.mask || true;
        var Al0x = n1x.Sr6l.B1x(e1x);
        Al0x.M1x();
        return Al0x
    }
})();
(function() {
    var p = NEJ.P("nej.u");
    var bKB5G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        PZ5e = {},
        Eh1x = {};
    for (var i = 0, l = bKB5G.length, c; i < l; i++) {
        c = bKB5G.charAt(i);
        PZ5e[i] = c;
        Eh1x[c] = i
    }
    var ckG9x = function(iL5Q) {
        var s1x = 0,
            c, m1x = [];
        while (s1x < iL5Q.length) {
            c = iL5Q[s1x];
            if (c < 128) {
                m1x.push(String.fromCharCode(c));
                s1x++
            } else if (c > 191 && c < 224) {
                m1x.push(String.fromCharCode((c & 31) << 6 | iL5Q[s1x + 1] & 63));
                s1x += 2
            } else {
                m1x.push(String.fromCharCode((c & 15) << 12 | (iL5Q[s1x + 1] & 63) << 6 | iL5Q[s1x + 2] & 63));
                s1x += 3
            }
        }
        return m1x.join("")
    };
    var ckE9v = function() {
        var hf4j = /\r\n/g;
        return function(j1x) {
            j1x = j1x.replace(hf4j, "\n");
            var m1x = [],
                ns6m = String.fromCharCode(237);
            if (ns6m.charCodeAt(0) < 0)
                for (var i = 0, l = j1x.length, c; i < l; i++) {
                    c = j1x.charCodeAt(i);
                    c > 0 ? m1x.push(c) : m1x.push(256 + c >> 6 | 192, 256 + c & 63 | 128)
                } else
                    for (var i = 0, l = j1x.length, c; i < l; i++) {
                        c = j1x.charCodeAt(i);
                        if (c < 128) m1x.push(c);
                        else if (c > 127 && c < 2048) m1x.push(c >> 6 | 192, c & 63 | 128);
                        else m1x.push(c >> 12 | 224, c >> 6 & 63 | 128, c & 63 | 128)
                    }
            return m1x
        }
    }();
    var IL2x = function(iL5Q) {
        var s1x = 0,
            m1x = [],
            eI3x = iL5Q.length % 3;
        if (eI3x == 1) iL5Q.push(0, 0);
        if (eI3x == 2) iL5Q.push(0);
        while (s1x < iL5Q.length) {
            m1x.push(PZ5e[iL5Q[s1x] >> 2], PZ5e[(iL5Q[s1x] & 3) << 4 | iL5Q[s1x + 1] >> 4], PZ5e[(iL5Q[s1x + 1] & 15) << 2 | iL5Q[s1x + 2] >> 6], PZ5e[iL5Q[s1x + 2] & 63]);
            s1x += 3
        }
        if (eI3x == 1) m1x[m1x.length - 1] = m1x[m1x.length - 2] = "=";
        if (eI3x == 2) m1x[m1x.length - 1] = "=";
        return m1x.join("")
    };
    var ckD9u = function() {
        var qu7n = /\n|\r|=/g;
        return function(j1x) {
            var s1x = 0,
                m1x = [];
            j1x = j1x.replace(qu7n, "");
            for (var i = 0, l = j1x.length; i < l; i += 4) m1x.push(Eh1x[j1x.charAt(i)] << 2 | Eh1x[j1x.charAt(i + 1)] >> 4, (Eh1x[j1x.charAt(i + 1)] & 15) << 4 | Eh1x[j1x.charAt(i + 2)] >> 2, (Eh1x[j1x.charAt(i + 2)] & 3) << 6 | Eh1x[j1x.charAt(i + 3)]);
            var bq2x = m1x.length,
                eI3x = j1x.length % 4;
            if (eI3x == 2) m1x = m1x.slice(0, bq2x - 2);
            if (eI3x == 3) m1x = m1x.slice(0, bq2x - 1);
            return m1x
        }
    }();
    p.ctA2x = function(j1x) {
        return ckG9x(ckD9u(j1x))
    };
    p.ckA9r = function(j1x) {
        try {
            return window.btoa(j1x)
        } catch (ex) {
            return IL2x(ckE9v(j1x))
        }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        h1x = c1x("nej.v"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.p"),
        k1x = c1x("nej.u"),
        n1x = c1x("nm.l"),
        D1x = c1x("nm.w"),
        bI2x = c1x("nej.ui"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x;
    var TYPE_MAP = { 13: "playlist", 17: "program", 18: "song", 19: "album" };
    n1x.bKy4C = NEJ.C();
    b1x = n1x.bKy4C.O1x(n1x.dV3x);
    b1x.bZ2x = function() { this.ca2x = "m-download-layer" };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.bmQ0x = i1x[0];
        this.bmZ0x = i1x[1];
        this.bKx4B = i1x[2];
        v1x.br2x("/client/version/get", { type: "json", onload: this.ckw9n.g1x(this) });
        if (N1x.Qy5D.mac) {
            a0x.w1x(this.bmQ0x.parentNode, "f-hide");
            a0x.x1x(this.bmZ0x.parentNode, "f-hide");
            a0x.x1x(this.bKx4B, "f-hide")
        } else {
            a0x.x1x(this.bmQ0x.parentNode, "f-hide");
            a0x.w1x(this.bmZ0x.parentNode, "f-hide");
            a0x.w1x(this.bKx4B, "f-hide")
        }
    };
    b1x.bk1x = function(e1x) {
        e1x.clazz = " m-layer-down";
        e1x.parent = e1x.parent || document.body;
        e1x.title = "下载";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bl1x(e1x);
        this.bT2x([
            [this.o1x, "click", this.bO2x.g1x(this)]
        ]);
        this.es3x = TYPE_MAP[e1x.type];
        this.gx3x = e1x.id
    };
    b1x.bC2x = function() { this.bH2x() };
    b1x.yK9B = function() { this.bp2x() };
    b1x.AT0x = function(d1x) {
        this.z1x("onok", A1x);
        this.bp2x()
    };
    b1x.bO2x = function(d1x) {
        var f1x = h1x.U1x(d1x, "d:action");
        switch (a0x.u1x(f1x, "action")) {
            case "download":
                this.bp2x();
                window.open(a0x.u1x(f1x, "src"));
                break;
            case "orpheus":
                this.bp2x();
                location.href = "orpheus://" + k1x.ckA9r(JSON.stringify({ type: this.es3x, id: this.gx3x, cmd: "download" }));
                break
        }
    };
    b1x.ckw9n = function(d1x) {
        if ((d1x || Y1x).code == 200) {
            this.Hw2x = d1x.data;
            this.bmQ0x.innerText = "V" + this.Hw2x.mac;
            this.bmZ0x.innerText = "V" + this.Hw2x.pc
        }
    };
    l1x.RZ6T = function(e1x) { n1x.bKy4C.B1x(e1x).M1x() }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        k1x = c1x("nej.u"),
        p1x = c1x("nm.d"),
        bN2x = {};
    p1x.y1x = function(J1x) {
        return bN2x[J1x]
    };
    p1x.od6X = function(J1x, bc1x) { bN2x[J1x] = bc1x };
    p1x.eP3x = function(j1x) {
        k1x.dZ3x(j1x, function(r1x, J1x) {
            var bc1x = bN2x[J1x] || {};
            NEJ.X(bc1x, r1x);
            bN2x[J1x] = bc1x
        })
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        ba1x = c1x("nej.h");
    ba1x.RY6S = function(J1x) {
        return localStorage.getItem(J1x)
    };
    ba1x.RX6R = function(J1x, A1x) { localStorage.setItem(J1x, A1x) };
    ba1x.boq0x = function(J1x) { localStorage.removeItem(J1x) };
    ba1x.bos0x = function() { localStorage.clear() };
    ba1x.ckv9m = function() {
        var m1x = [];
        for (var i = 0, l = localStorage.length; i < l; i++) m1x.push(localStorage.key(i));
        return m1x
    };
    ba1x.bov0x = function() {
        (document.onstorageready || bm1x)()
    };
    ba1x.boy0x = function() {
        return !0
    }
})();
(function() {
    var c1x = NEJ.P,
        N1x = c1x("nej.p"),
        it5y = c1x("nej.c"),
        ba1x = c1x("nej.h"),
        rv7o;
    if (N1x.mt6n.trident || !!window.localStorage) return;
    var cku9l = function() {
        var qj7c, eV3x;
        var bmx0x = function() {
            qj7c = document.createElement("div");
            NEJ.X(qj7c.style, { position: "absolute", top: 0, left: 0, width: "1px", height: "1px", zIndex: 1e4, overflow: "hidden" });
            document.body.insertAdjacentElement("afterBegin", qj7c);
            qj7c.innerHTML = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1"id="f-' + +(new Date) + '" codebase="http://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + it5y.y1x("storage.swf") + '"/><param name="AllowScriptAccess" value="sameDomain"/></object>'
        };
        var LZ3x = function() {
            eV3x = window.clearTimeout(eV3x);
            var hg4k = qj7c.getElementsByTagName("object")[0];
            if (!!hg4k.initStorage) {
                delete qj7c;
                rv7o = hg4k;
                rv7o.initStorage("nej-storage");
                (document.onstorageready || bm1x)();
                return
            }
            eV3x = window.setTimeout(LZ3x, 500)
        };
        return function() {
            if (!!rv7o) return;
            bmx0x();
            LZ3x()
        }
    }();
    ba1x.RY6S = ba1x.RY6S.ee3x(function(d1x) {
        d1x.stopped = !0;
        if (!rv7o) return;
        d1x.value = rv7o.getItem(d1x.args[0])
    });
    ba1x.RX6R = ba1x.RX6R.ee3x(function(d1x) {
        d1x.stopped = !0;
        if (!rv7o) return;
        var bg1x = d1x.args;
        rv7o.setItem(bg1x[0], bg1x[1])
    });
    ba1x.boq0x = ba1x.boq0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        if (!rv7o) return;
        rv7o.removeItem(d1x.args[0])
    });
    ba1x.bos0x = ba1x.bos0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        if (!!rv7o) rv7o.clear()
    });
    ba1x.bov0x = ba1x.bov0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        cku9l()
    });
    ba1x.boy0x = ba1x.boy0x.ee3x(function(d1x) {
        d1x.stopped = !0;
        d1x.value = !!rv7o
    })
})();
(function() {
    var c1x = NEJ.P,
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        ba1x = c1x("nej.h"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        R1x = {};
    v1x.uV8N = function(J1x, A1x) {
        var bKw4A = JSON.stringify(A1x);
        try { ba1x.RX6R(J1x, bKw4A) } catch (ex) {
            console.error(ex.message);
            console.error(ex)
        }
        if (bKw4A != ba1x.RY6S(J1x)) R1x[J1x] = A1x;
        return this
    };
    v1x.sw8o = function(J1x) {
        var j1x = JSON.parse(ba1x.RY6S(J1x) || "null");
        return j1x == null ? R1x[J1x] : j1x
    };
    v1x.bKv4z = function(J1x, A1x) {
        var j1x = v1x.sw8o(J1x);
        if (j1x == null) {
            j1x = A1x;
            v1x.uV8N(J1x, j1x)
        }
        return j1x
    };
    v1x.QB5G = function(J1x) {
        delete R1x[J1x];
        ba1x.boq0x(J1x);
        return this
    };
    v1x.ctB2x = function() {
        var bps1x = function(r1x, J1x, bv2x) { delete bv2x[J1x] };
        return function() {
            k1x.dZ3x(R1x, bps1x);
            ba1x.bos0x();
            return this
        }
    }();
    v1x.ctC2x = function(m1x) {
        m1x = m1x || {};
        k1x.be1x(ba1x.ckv9m(), function(J1x) { m1x[J1x] = v1x.sw8o(J1x) });
        return m1x
    };
    H1x.fs3x.B1x({
        element: document,
        event: "storageready",
        oneventadd: function() {
            if (ba1x.boy0x()) { document.onstorageready() }
        }
    });
    var ckm9d = function() {
        var cki9Z = function(A1x, J1x, bv2x) {
            ba1x.RX6R(J1x, JSON.stringify(A1x));
            delete bv2x[J1x]
        };
        return function() { k1x.dZ3x(R1x, cki9Z) }
    }();
    h1x.q1x(document, "storageready", ckm9d);
    ba1x.bov0x()
})();
(function() {
    var c1x = NEJ.P,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        IY2x;
    if (!!N1x.bpP1x) return;
    N1x.bpP1x = NEJ.C();
    IY2x = N1x.bpP1x.O1x(N1x.cz2x);
    IY2x.cm2x = function() {
        var fT3x = +(new Date),
            mi6c = "dat-" + fT3x;
        return function() {
            this.cs2x();
            var R1x = this.constructor[mi6c];
            if (!R1x) {
                R1x = {};
                this.constructor[mi6c] = R1x
            }
            this.P1x = R1x
        }
    }();
    IY2x.y1x = function(J1x) {
        return this.P1x[J1x]
    };
    IY2x.od6X = function(J1x, A1x) {
        var lO6I = this.P1x[J1x];
        this.P1x[J1x] = A1x;
        h1x.z1x(localCache, "cachechange", { key: J1x, type: "set", oldValue: lO6I, newValue: A1x });
        return this
    };
    IY2x.cH2x = function(J1x) {
        var lO6I = this.P1x[J1x];
        k1x.WH6B(this.P1x, J1x);
        h1x.z1x(localCache, "cachechange", { key: J1x, type: "delete", oldValue: lO6I, newValue: undefined });
        return lO6I
    };
    IY2x.RU6O = function(CQ1x) {
        return NEJ.Q(this.P1x, CQ1x)
    };
    window.localCache = N1x.bpP1x.B1x();
    N1x.fs3x.B1x({ element: localCache, event: "cachechange" })
})();
(function() {
    var c1x = NEJ.P,
        eX3x = NEJ.R,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.ut"),
        mi6c = "dat-" + +(new Date),
        mh6b;
    if (!!N1x.bqz1x) return;
    N1x.bqz1x = NEJ.C();
    mh6b = N1x.bqz1x.O1x(N1x.cz2x);
    mh6b.cm2x = function() {
        this.cs2x();
        this.P1x = this.constructor[mi6c];
        if (!this.P1x) {
            this.P1x = {};
            this.P1x[mi6c + "-l"] = {};
            this.constructor[mi6c] = this.P1x
        }
    };
    mh6b.qv7o = function(J1x) {
        return this.P1x[J1x]
    };
    mh6b.ob6V = function(J1x, A1x) { this.P1x[J1x] = A1x };
    mh6b.kw5B = function(J1x, ko5t) {
        var j1x = this.qv7o(J1x);
        if (j1x == null) {
            j1x = ko5t;
            this.ob6V(J1x, j1x)
        }
        return j1x
    };
    mh6b.ckf9W = function(J1x) {
        if (J1x != null) {
            delete this.P1x[J1x];
            return
        }
        k1x.dZ3x(this.P1x, function(r1x, J1x) {
            if (J1x == mi6c + "-l") return;
            this.ckf9W(J1x)
        }, this)
    };
    mh6b.ctF2x = function(J1x) {
        if (!!v1x.QB5G) return v1x.QB5G(J1x)
    };
    mh6b.ckd9U = function(J1x) {
        if (!!v1x.sw8o) return v1x.sw8o(J1x)
    };
    mh6b.cka9R = function(J1x, A1x) {
        if (!!v1x.uV8N) v1x.uV8N(J1x, A1x)
    };
    mh6b.BW0x = function(J1x, ko5t) {
        var j1x = this.QM5R(J1x);
        if (j1x == null) {
            j1x = ko5t;
            this.vg9X(J1x, j1x)
        }
        return j1x
    };
    mh6b.QM5R = function(J1x) {
        var j1x = this.qv7o(J1x);
        if (j1x != null) return j1x;
        j1x = this.ckd9U(J1x);
        if (j1x != null) this.ob6V(J1x, j1x);
        return j1x
    };
    mh6b.vg9X = function(J1x, A1x) {
        this.cka9R(J1x, A1x);
        this.ob6V(J1x, A1x)
    };
    mh6b.bKm4q = function(J1x) {
        if (J1x != null) {
            delete this.P1x[J1x];
            if (!!v1x.QB5G) v1x.QB5G(J1x);
            return
        }
        k1x.dZ3x(this.P1x, function(r1x, J1x) {
            if (J1x == mi6c + "-l") return;
            this.bKm4q(J1x)
        }, this)
    };
    mh6b.ctG2x = function() {
        this.bKm4q();
        return this
    };
    mh6b.ctH2x = function(J1x) {
        var j1x = this.P1x[mi6c + "-l"];
        delete j1x[J1x]
    };
    mh6b.baK7D = function(J1x) {
        var j1x = this.P1x[mi6c + "-l"],
            bg1x = eX3x.slice.call(arguments, 1);
        k1x.be1x(j1x[J1x], function(dt3x) {
            try { dt3x.apply(null, bg1x) } catch (ex) {
                console.error(ex.message);
                console.error(ex.stack)
            }
        });
        delete j1x[J1x]
    };
    mh6b.baP7I = function(J1x, dt3x) {
        dt3x = dt3x || bm1x;
        var i1x = this.P1x[mi6c + "-l"][J1x];
        if (!i1x) {
            i1x = [dt3x];
            this.P1x[mi6c + "-l"][J1x] = i1x;
            return !1
        }
        i1x.push(dt3x);
        return !0
    };
    mh6b.cjU9L = function(i1x, bj1x, fX3x) {
        if (!i1x) return !1;
        bj1x = parseInt(bj1x) || 0;
        fX3x = parseInt(fX3x) || 0;
        if (!fX3x) {
            if (!i1x.loaded) return !1;
            fX3x = i1x.length
        }
        if (!!i1x.loaded) fX3x = Math.min(fX3x, i1x.length - bj1x);
        for (var i = 0; i < fX3x; i++)
            if (!i1x[bj1x + i]) return !1;
        return !0
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        b1x, K1x;
    if (!!N1x.QO5T) return;
    N1x.QO5T = NEJ.C();
    b1x = N1x.QO5T.O1x(N1x.bqz1x);
    K1x = N1x.QO5T.cg2x;
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.ur8j = e1x.key || "id";
        this.bb1x = e1x.data || Y1x;
        this.cjT9K = !!e1x.autogc;
        this.cjR9I(e1x.id)
    };
    b1x.bC2x = function() {
        this.bH2x();
        if (!!this.dM3x) { this.bKj4n() }
    };
    b1x.cjR9I = function(C1x) {
        var R1x;
        if (!!C1x) {
            R1x = this.P1x[C1x];
            if (!R1x) {
                R1x = {};
                this.P1x[C1x] = R1x
            }
        }
        R1x = R1x || this.P1x;
        R1x.hash = R1x.hash || {};
        this.QZ5e = R1x
    };
    b1x.bKj4n = function() {
        this.dM3x = window.clearTimeout(this.dM3x);
        var bv2x = {};
        k1x.dZ3x(this.QZ5e, function(i1x, J1x) {
            if (J1x == "hash") return;
            if (!k1x.em3x(i1x)) return;
            k1x.be1x(i1x, function(r1x) {
                if (!r1x) return;
                bv2x[r1x[this.ur8j]] = !0
            }, this)
        }, this);
        k1x.dZ3x(this.RL5Q(), function(r1x, C1x, dE3x) {
            if (!bv2x[C1x]) { delete dE3x[C1x] }
        })
    };
    b1x.cjO9F = function() {
        if (!!this.dM3x) { this.dM3x = window.clearTimeout(this.dM3x) }
        this.dM3x = window.setTimeout(this.bKj4n.g1x(this), 150)
    };
    b1x.yf9W = function(r1x, RJ5O) {
        r1x = this.bKi4m(r1x, RJ5O) || r1x;
        if (!r1x) return null;
        var J1x = r1x[this.ur8j];
        if (J1x != null) {
            var hA4E = this.RL5Q()[J1x];
            if (!!hA4E) r1x = NEJ.X(hA4E, r1x);
            this.RL5Q()[J1x] = r1x
        }
        delete r1x.bKh4l;
        return r1x
    };
    b1x.bKi4m = bm1x;
    b1x.bbY8Q = function(J1x, r1x) {
        if (!r1x) return;
        if (!k1x.em3x(r1x)) {
            var i1x = this.gR3x(J1x),
                r1x = this.yf9W(r1x, J1x);
            if (!!r1x) i1x.unshift(r1x);
            return
        }
        k1x.mk6e(r1x, this.bbY8Q.g1x(this, J1x))
    };
    b1x.Rh5m = function(J1x, cp2x) {
        var i1x = this.gR3x(J1x);
        i1x.length = Math.max(i1x.length, cp2x);
        this.bcp8h(J1x);
        return this
    };
    b1x.jt5y = function(J1x) {
        return this.gR3x(J1x).length
    };
    b1x.bcp8h = function(J1x, nG6A) {
        this.gR3x(J1x).loaded = nG6A != !1;
        return this
    };
    b1x.RG5L = function(J1x) {
        return !!this.gR3x(J1x).loaded
    };
    b1x.rc7V = function(J1x, i1x) {
        this.tD8v(J1x);
        this.bcF8x({ key: J1x, offset: 0, limit: i1x.length + 1 }, { list: i1x, total: i1x.length })
    };
    b1x.gR3x = function() {
        var CY1x = function(J1x) {
            return (J1x || "") + (!J1x ? "" : "-") + "list"
        };
        return function(J1x) {
            var J1x = CY1x(J1x),
                i1x = this.QZ5e[J1x];
            if (!i1x) {
                i1x = [];
                this.QZ5e[J1x] = i1x
            }
            return i1x
        }
    }();
    b1x.RL5Q = function() {
        var dE3x = this.QZ5e.hash;
        if (!dE3x) {
            dE3x = {};
            this.QZ5e.hash = dE3x
        }
        return dE3x
    };
    b1x.bcN8F = function() {
        var CY1x = function(e1x) {
            return "r-" + e1x.key
        };
        return function(e1x) {
            var hT4X = NEJ.X({}, e1x),
                mE6y = CY1x(hT4X);
            if (!this.baP7I(mE6y, this.z1x.g1x(this))) {
                hT4X.rkey = mE6y;
                hT4X.onload = this.cjH9y.g1x(this, hT4X);
                this.z1x("dopullrefresh", hT4X)
            }
            return this
        }
    }();
    b1x.cjH9y = function(e1x, i1x) {
        this.bbY8Q(e1x.key, i1x);
        this.baK7D(e1x.rkey, "onpullrefresh", e1x)
    };
    b1x.nC6w = function() {
        var CY1x = function(e1x) {
            return "r-" + e1x.key + "-" + e1x.offset + "-" + e1x.limit
        };
        return function(e1x) {
            e1x = e1x || Y1x;
            var hT4X = { key: "" + e1x.key || "", ext: e1x.ext || null, data: e1x.data || null, offset: parseInt(e1x.offset) || 0, limit: parseInt(e1x.limit) || 0 },
                i1x = this.gR3x(hT4X.key);
            if (this.cjU9L(i1x, hT4X.offset, hT4X.limit)) {
                this.z1x("onlistload", hT4X);
                return this
            }
            var mE6y = CY1x(hT4X);
            if (!this.baP7I(mE6y, this.z1x.g1x(this))) {
                hT4X.rkey = mE6y;
                hT4X.onload = this.bcF8x.g1x(this, hT4X);
                this.z1x("doloadlist", hT4X)
            }
            return this
        }
    }();
    b1x.bcF8x = function() {
        var DV1x = function(r1x, s1x, i1x) {
            if (!!r1x) {
                return !0
            }
            i1x.splice(s1x, 1)
        };
        return function(e1x, m1x) {
            e1x = e1x || Y1x;
            var J1x = e1x.key,
                bj1x = e1x.offset,
                bKf4j = this.gR3x(J1x);
            var i1x = m1x || [];
            if (!k1x.em3x(i1x)) {
                i1x = m1x.result || m1x.list || [];
                var cp2x = parseInt(m1x.total);
                if (!isNaN(cp2x) || cp2x > i1x.length) { this.Rh5m(J1x, cp2x) }
            }
            k1x.be1x(i1x, function(r1x, s1x) { bKf4j[bj1x + s1x] = this.yf9W(r1x, J1x) }, this);
            if (i1x.length < e1x.limit) {
                this.bcp8h(J1x);
                k1x.mk6e(bKf4j, DV1x)
            }
            this.baK7D(e1x.rkey, "onlistload", e1x)
        }
    }();
    b1x.tD8v = function() {
        var DV1x = function(r1x, s1x, i1x) { i1x.splice(s1x, 1) };
        return function(J1x) {
            var i1x = this.gR3x(J1x);
            k1x.mk6e(i1x, DV1x);
            this.bcp8h(J1x, !1);
            if (this.cjT9K) { this.cjO9F() }
            return this
        }
    }();
    b1x.bKe4i = function(r1x, RJ5O) {
        return !r1x.bKh4l
    };
    b1x.eg3x = function(C1x) {
        return this.RL5Q()[C1x]
    };
    b1x.ctL2x = function(C1x) {
        var r1x = this.eg3x(C1x);
        if (!!r1x) r1x.bKh4l = !0
    };
    b1x.RF5K = function() {
        var CY1x = function(e1x) {
            return "r-" + e1x.key + "-" + e1x.id
        };
        return function(e1x) {
            e1x = e1x || Y1x;
            var C1x = e1x[this.ur8j],
                hT4X = { id: C1x, ext: e1x.ext, data: e1x.data || {}, key: "" + e1x.key || "" };
            r1x = this.eg3x(C1x);
            hT4X.data[this.ur8j] = C1x;
            if (!!r1x && this.bKe4i(r1x, hT4X.key)) {
                this.z1x("onitemload", hT4X);
                return this
            }
            var mE6y = CY1x(hT4X);
            if (!this.baP7I(mE6y, this.z1x.g1x(this))) {
                hT4X.rkey = mE6y;
                hT4X.onload = this.cjB9s.g1x(this, hT4X);
                this.z1x("doloaditem", hT4X)
            }
            return this
        }
    }();
    b1x.cjB9s = function(e1x, r1x) {
        e1x = e1x || Y1x;
        this.yf9W(r1x, e1x.key);
        this.baK7D(e1x.rkey, "onitemload", e1x)
    };
    b1x.iD5I = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.xy9p.g1x(this, e1x);
        this.z1x("doadditem", e1x)
    };
    b1x.xy9p = function(e1x, r1x) {
        var J1x = e1x.key;
        r1x = this.yf9W(r1x, J1x);
        if (!!r1x) {
            var ex3x = 0,
                i1x = this.gR3x(J1x);
            if (!e1x.push) {
                ex3x = -1;
                var bj1x = e1x.offset || 0;
                i1x.splice(bj1x, 0, r1x)
            } else if (i1x.loaded) {
                ex3x = 1;
                i1x.push(r1x)
            } else { i1x.length++ }
        }
        var d1x = { key: J1x, flag: ex3x, data: r1x, action: "add", ext: e1x.ext };
        this.z1x("onitemadd", d1x);
        return d1x
    };
    b1x.Ji3x = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.bdA8s.g1x(this, e1x);
        this.z1x("dodeleteitem", e1x)
    };
    b1x.bdA8s = function(e1x, bKd4h) {
        var r1x, J1x = e1x.key;
        if (!!bKd4h) {
            r1x = this.eg3x(e1x.id) || null;
            var C1x = e1x.id,
                cjz9q = this.ur8j,
                i1x = this.gR3x(J1x),
                s1x = k1x.cV2x(i1x, function(hA4E) {
                    return !!hA4E && hA4E[cjz9q] == C1x
                });
            if (s1x >= 0) i1x.splice(s1x, 1)
        }
        var d1x = { key: J1x, data: r1x, action: "delete", ext: e1x.ext };
        this.z1x("onitemdelete", d1x);
        return d1x
    };
    b1x.RA5F = function(e1x) {
        e1x = NEJ.X({}, e1x);
        e1x.onload = this.cjy9p.g1x(this, e1x);
        this.z1x("doupdateitem", e1x)
    };
    b1x.cjy9p = function(e1x, r1x) {
        var J1x = e1x.key;
        if (!!r1x) r1x = this.yf9W(r1x, J1x);
        var d1x = { key: J1x, data: r1x, action: "update", ext: e1x.ext };
        this.z1x("onitemupdate", d1x);
        return d1x
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.bdG8y) return;
    N1x.bdG8y = NEJ.C();
    b1x = N1x.bdG8y.O1x(N1x.QO5T);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.blB0x({ doloadlist: this.Rz5E.g1x(this), doloaditem: this.bdM8E.g1x(this), doadditem: this.bKc4g.g1x(this), dodeleteitem: this.Ry5D.g1x(this), doupdateitem: this.Rx5C.g1x(this), dopullrefresh: this.bKb4f.g1x(this) })
    };
    b1x.Rz5E = bm1x;
    b1x.bKb4f = bm1x;
    b1x.bdM8E = bm1x;
    b1x.bKc4g = bm1x;
    b1x.Ry5D = bm1x;
    b1x.Rx5C = bm1x
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        b1x, K1x;
    p1x.gU3x = NEJ.C();
    b1x = p1x.gU3x.O1x(H1x.bdG8y);
    b1x.cl2x = function() {
        var Rt5y = location.protocol + "//" + location.host;
        var cjv9m = function(bs2x, j1x) {
            var bv2x = { conf: {}, data: {}, urls: [] };
            k1x.be1x(bs2x, function(J1x, s1x, i1x) {
                var bc1x = p1x.y1x(J1x);
                if (!bc1x) return;
                var beh8Z = bKa4e(bc1x.url, j1x[J1x]);
                bv2x.urls.push(beh8Z);
                bv2x.conf[beh8Z] = bc1x;
                bv2x.data[beh8Z] = JSON.stringify(j1x[J1x] == null ? "" : j1x[J1x])
            });
            return bv2x
        };
        var bKa4e = function(V1x, j1x) {
            return V1x.replace(/\{(.*?)\}/gi, function($1, $2) {
                return j1x[$2] || $1
            })
        };
        var bJZ4d = function(bc1x, e1x, d1x) {
            h1x.z1x(window, "requesterror", d1x);
            if (!!d1x.stopped) return;
            var EB1x = bc1x.onerror || e1x.onerror;
            if (k1x.ff3x(EB1x)) { this.z1x(EB1x, d1x, e1x) } else {
                (EB1x || bm1x).call(this, d1x, e1x)
            }
            var d1x = { result: d1x, option: e1x };
            this.z1x("onerror", d1x);
            if (!d1x.stopped)(bc1x.onmessage || bm1x).call(this, d1x.result.code, d1x.result)
        };
        var bJY4c = function(Q1x, bc1x, e1x) {
            var m1x = Q1x;
            if (k1x.gc3x(bc1x.format)) { m1x = bc1x.format.call(this, Q1x, e1x) }
            return m1x
        };
        var xp9g = function(Q1x, bc1x, e1x, tl8d) {
            if (k1x.gc3x(bc1x.beforeload)) { bc1x.beforeload.call(this, Q1x, e1x, bc1x) }
            if (Q1x && Q1x.code != null && Q1x.code != 200) {
                bJZ4d.call(this, bc1x, e1x, { key: e1x.key, code: Q1x.code, message: Q1x.message || "", captchaId: Q1x.captchaId, ext: Q1x });
                return
            }
            var m1x = Q1x;
            if (!tl8d) { m1x = bJY4c.call(this, Q1x, bc1x, e1x) } else if (k1x.gc3x(bc1x.format)) {
                var beV8N = [];
                k1x.be1x(tl8d.urls, function(V1x) { beV8N.push(bJY4c.call(this, Q1x[V1x], tl8d.conf[V1x], e1x)) }, this);
                beV8N.push(e1x);
                m1x = bc1x.format.apply(this, beV8N)
            }
            var tf8X = bc1x.onload || e1x.onload,
                bJX4b = bc1x.finaly || e1x.finaly || bm1x;
            if (k1x.ff3x(tf8X)) { bJX4b.call(this, this.z1x(tf8X, m1x), e1x) } else { bJX4b.call(this, (tf8X || bm1x).call(this, m1x), e1x) }
        };
        var zz0x = function(bc1x, e1x, bQ2x) { bJZ4d.call(this, bc1x, e1x, { key: e1x.key, code: bQ2x.code || -1, message: bQ2x.message || "" }) };
        return function(bc1x, e1x) {
            if (k1x.ff3x(bc1x)) { bc1x = p1x.y1x(bc1x) }
            delete e1x.value;
            (bc1x.filter || bm1x).call(this, e1x, bc1x);
            var Q1x = e1x.value;
            if (!!Q1x) {
                xp9g.call(this, Q1x, bc1x, e1x);
                return
            }
            var V1x, j1x = e1x.data || Y1x,
                xn9e = { cookie: !0, type: bc1x.rtype || "json", method: bc1x.type || "POST", onerror: zz0x.g1x(this, bc1x, e1x), noescape: bc1x.noescape };
            if (k1x.em3x(bc1x.url)) {
                var tl8d = cjv9m(bc1x.url, j1x);
                V1x = Rt5y + "/api/batch";
                xn9e.data = k1x.de2x(tl8d.data);
                xn9e.onload = xp9g.ed3x(this, bc1x, e1x, tl8d);
                xn9e.headers = { "batch-method": "POST" };
                delete tl8d.data
            } else {
                var kP5U = bc1x.url.indexOf(":") < 0 ? Rt5y : "";
                V1x = bKa4e(kP5U + bc1x.url, j1x);
                xn9e.data = k1x.de2x(e1x.data);
                xn9e.onload = xp9g.ed3x(this, bc1x, e1x)
            }
            if (xn9e.method == "GET") xn9e.query = xn9e.data;
            return v1x.br2x(V1x, xn9e)
        }
    }();
    b1x.En1x = function() {
        var fR3x = /^get|list|pull$/i;
        return function(bJV4Z, e1x) {
            var J1x = e1x.key,
                bc1x = p1x.y1x(J1x.split("-")[0] + "-" + bJV4Z);
            if (fR3x.test(bJV4Z) && J1x.indexOf("post-") < 0) bc1x.type = "GET";
            this.cl2x(bc1x, e1x)
        }
    }();
    b1x.ctM2x = function(J1x, i1x) {
        var cp2x = i1x.length;
        this.bcF8x({ key: J1x, offset: 0, limit: cp2x + 1 }, { list: i1x, total: cp2x })
    };
    b1x.Rz5E = function(e1x) { this.En1x("list", e1x) };
    b1x.bdM8E = function(e1x) { this.En1x("get", e1x) };
    b1x.bKb4f = function(e1x) { this.En1x("pull", e1x) };
    b1x.bKc4g = function(e1x) { this.En1x("add", e1x) };
    b1x.Ry5D = function(e1x) { this.En1x("del", e1x) };
    b1x.Rx5C = function(e1x) { this.En1x("update", e1x) };
    b1x.cjf9W = function(r1x) { this.yf9W(r1x) };
    H1x.fs3x.B1x({ element: window, event: "requesterror" })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        p1x = c1x("nm.d"),
        bfw9n = {},
        b1x, K1x;
    var sB8t = function(m1x, e1x) {
        m1x.conf = e1x.conf;
        return m1x
    };
    p1x.eP3x({
        "res-mv-get": {
            type: "GET",
            url: "/api/v1/mv/detail",
            format: function(Q1x, e1x) {
                return sB8t({ mv: Q1x }, e1x)
            }
        },
        "res-song-get": {
            type: "GET",
            url: "/api/song/detail",
            format: function(m1x, e1x) {
                if (!!m1x.songs && m1x.songs.length > 0) m1x.song = m1x.songs[0];
                else m1x.song = bfw9n;
                delete m1x.songs;
                return sB8t(m1x, e1x)
            },
            filter: function(e1x) { e1x.data.ids = "[" + e1x.data.id + "]" }
        },
        "res-program-get": { type: "GET", url: "/api/dj/program/detail", format: sB8t },
        "res-album-get": { type: "GET", url: "/api/album/{id}", format: sB8t },
        "res-playlist-get": {
            type: "GET",
            url: "/api/playlist/detail",
            format: function(m1x, e1x) {
                m1x.playlist = m1x.result;
                delete m1x.result;
                return sB8t(m1x, e1x)
            }
        },
        "res-mv-play": { type: "GET", url: "/api/song/mv/play", format: sB8t },
        "res-playlist-play": { type: "GET", url: "/api/playlist/update/playcount", format: sB8t },
        "res-program-play": { type: "GET", url: "/api/dj/program/listen", format: sB8t },
        "res-djradio-get": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e1x) {
                var i1x = e1x.data.id.split("-");
                e1x.data.radioId = i1x[0];
                e1x.data.asc = i1x[1] == 2;
                e1x.data.limit = 1e3;
                delete e1x.data.id
            },
            format: function(Q1x, e1x) {
                var cje9V = { id: e1x.data.radioId, programs: Q1x.programs };
                return sB8t({ djradio: cje9V }, e1x)
            }
        },
        "res-hotSongs-get": { type: "GET", url: "/api/artist/{id}", format: sB8t },
        "res-lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e1x) {
                e1x.data.lv = 0;
                e1x.data.tv = 0
            },
            format: function(m1x, e1x) {
                var vk9b = { lyric: "", nolyric: true };
                if (m1x.code == 200 && m1x.lrc && m1x.lrc.lyric) {
                    vk9b.lyric = m1x.lrc.lyric;
                    vk9b.nolyric = false
                } else { vk9b.nolyric = true }
                return sB8t({ lyric: vk9b }, e1x)
            }
        }
    });
    p1x.vi9Z = NEJ.C();
    b1x = p1x.vi9Z.O1x(p1x.gU3x);
    b1x.cjd9U = function(t1x, cE2x) {
        return this.qv7o(this.RD5I(t1x, cE2x))
    };
    b1x.Rn5s = function(t1x, cE2x, e1x) {
        e1x = e1x || {};
        var j1x = this.qv7o(this.RD5I(t1x, cE2x));
        if (j1x && (t1x != 13 && t1x != 19 || e1x.conf && e1x.conf.useCache)) {
            this.z1x("onresourceload", t1x, cE2x, j1x, e1x.conf);
            return
        }
        e1x.data = { id: cE2x };
        e1x.onload = this.cjc9T.g1x(this, t1x, cE2x);
        e1x.onerror = this.cjb9S.g1x(this, t1x, cE2x);
        this.cl2x("res-" + this.yw9n(t1x) + "-get", e1x)
    };
    b1x.cjc9T = function(t1x, cE2x, m1x) {
        var j1x = m1x[this.yw9n(t1x)];
        this.ob6V(this.RD5I(t1x, cE2x), j1x);
        this.z1x("onresourceload", t1x, cE2x, j1x, m1x.conf)
    };
    b1x.cjb9S = function(t1x, cE2x, m1x, e1x) {
        if (m1x.code != 404) {
            this.z1x("onresourceerror", t1x, cE2x, m1x.code);
            return
        }
        this.ob6V(this.RD5I(t1x, cE2x), bfw9n);
        this.z1x("onresourceload", t1x, cE2x, bfw9n, e1x.conf)
    };
    b1x.ctN2x = function(t1x, e1x) { this.cl2x("res-" + this.yw9n(t1x) + "-play", e1x) };
    b1x.RD5I = function(t1x, cE2x) {
        return "res-" + this.yw9n(t1x) + "-" + cE2x
    };
    b1x.yw9n = function(t1x) {
        var bv2x = { 2: "hotSongs", 13: "playlist", 17: "program", 18: "song", 19: "album", 21: "mv", 41: "lyric", 70: "djradio" };
        return bv2x[t1x]
    };
    p1x.vi9Z.Jg3x = function(t1x, cE2x) {
        if (!this.eK3x) this.eK3x = p1x.vi9Z.B1x({});
        return this.eK3x.cjd9U(t1x, cE2x)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        p1x = c1x("nm.d"),
        bgs9j = /^[1-9][0-9]*$/,
        b1x, K1x;
    var LOCAL_LOG_KEY = "local-log";
    p1x.eP3x({ "bi-log": { url: "/api/feedback/weblog" }, "bi-batch-log": { url: "/api/feedback/weblog" }, "plus-mv-count": { url: "/api/song/mv/play" }, "plus-song-count": { url: "/api/song/play" }, "plus-dj-count": { type: "GET", url: "/api/dj/program/listen" }, "plus-playlist-count": { type: "GET", url: "/api/playlist/update/playcount" } });
    p1x.hI4M = NEJ.C();
    b1x = p1x.hI4M.O1x(p1x.gU3x);
    b1x.gm3x = function(W1x, bc1x) {
        if (!W1x || !bc1x) return;
        if (k1x.ff3x(bc1x)) {
            try { bc1x = JSON.parse(bc1x) } catch (_e) {
                if (console && console.warn) { console.warn("bilog error: ", a0x) }
            }
        }
        if (!k1x.kg5l(bc1x)) return;
        this.cl2x("bi-log", { data: { logs: JSON.stringify([{ action: W1x, json: bc1x }]) } });
        if (typeof GEnvType == "string" && GEnvType == "local") { console.log("[BI LOG] action=" + W1x + ", json=" + JSON.stringify(bc1x)) }
    };
    b1x.RH5M = function(mU6O) {
        if (!k1x.em3x(mU6O)) return;
        this.cl2x("bi-batch-log", { data: { logs: JSON.stringify(mU6O) } })
    };
    b1x.bJU4Y = function(bc1x) {
        if (!bc1x || !bc1x.type || !bc1x.rid) return;
        var mT6N = bc1x.type;
        if (bgs9j.test(mT6N)) { mT6N = this.yw9n(mT6N) }
        if (!mT6N) return;
        if (mT6N == "playlist") mT6N = "list";
        this.gm3x("search", { type: mT6N, id: bc1x.rid || null, keyword: bc1x.keyword || null })
    };
    b1x.Rc5h = function() {
        var ciO9F = /^\/m\/(song|album|playlist)\?id=(\d+)/;
        return function(bc1x) {
            if (!bc1x || !bc1x.type || !bc1x.rid) return;
            if (bc1x.play === undefined) bc1x.play = true;
            var mT6N = bc1x.type;
            if (bgs9j.test(mT6N)) { mT6N = this.yw9n(mT6N) }
            if (!mT6N) return;
            if (mT6N == "playlist") mT6N = "list";
            var Q1x = { id: bc1x.rid, type: mT6N };
            if (mT6N == "song" && bc1x.source) {
                Q1x.source = this.bJN4R(bc1x.source);
                if (!!bc1x.sourceid) Q1x.sourceid = bc1x.sourceid
            }
            this.gm3x(!bc1x.play ? "addto" : "play", Q1x);
            if (mT6N == "song" && bc1x.hash && bc1x.hash.match(ciO9F)) { this.gm3x(!bc1x.play ? "addto" : "play", { type: RegExp.$1, id: RegExp.$2 }) }
        }
    }();
    b1x.bgT9K = function(C1x, bA2x, dH3x, Bf0x) {
        var Q1x = { type: "song", wifi: 0, download: 0 };
        var ciK9B = { 1: "ui", 2: "playend", 3: "interrupt", 4: "exception" };
        Q1x.id = C1x;
        Q1x.time = Math.round(bA2x);
        Q1x.end = k1x.ff3x(Bf0x) ? Bf0x : ciK9B[Bf0x] || "";
        if (dH3x && dH3x.fid) {
            Q1x.source = this.bJN4R(dH3x.fid);
            Q1x.sourceId = dH3x.fdata
        }
        this.gm3x("play", Q1x)
    };
    b1x.bJK4O = function(t1x, cE2x) {
        if (!t1x || !cE2x) return;
        if (bgs9j.test(t1x)) t1x = this.yw9n(t1x);
        if (t1x != "playlist" && t1x != "dj") return;
        var bc1x = p1x.y1x("plus-" + t1x + "-count");
        if (!bc1x) return !1;
        this.cl2x(bc1x, { data: { id: cE2x } });
        var R1x = this.kw5B("play-hist-" + t1x, []);
        if (k1x.cV2x(R1x, cE2x) < 0) {
            R1x.push(cE2x);
            return !0
        }
        return !1
    };
    b1x.yw9n = function(t1x) {
        var bv2x = { 1: "user", 2: "artist", 13: "playlist", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist" };
        return bv2x[t1x]
    };
    b1x.bJN4R = function(Jc2x) {
        var bv2x = { 1: "user", 2: "artist", 13: "list", 17: "dj", 18: "song", 19: "album", 21: "mv", 31: "toplist", 32: "search", 33: "search", 34: "event", 35: "msg" };
        return bv2x[Jc2x]
    };
    b1x.ciF9w = function(gM3x) {
        var mU6O = this.BW0x(LOCAL_LOG_KEY, []);
        mU6O.unshift(gM3x);
        if (mU6O.length > 200) { mU6O.length = 200 }
        this.vg9X(LOCAL_LOG_KEY, mU6O)
    };
    b1x.ciB9s = function() {
        return this.QM5R(LOCAL_LOG_KEY)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        n1x = c1x("nm.l"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d");
    if (!p1x.vi9Z) return;
    var R1x = p1x.vi9Z.B1x({ onresourceload: ciz9q });
    var Br0x = p1x.hI4M.fU3x();

    function ciz9q(t1x, cE2x, j1x, bc1x) {
        var i1x = [];
        switch (parseInt(t1x)) {
            case 2:
                i1x = j1x;
                break;
            case 13:
                i1x = j1x.tracks;
                break;
            case 18:
                i1x.push(j1x);
                break;
            case 19:
                i1x = j1x.songs;
                break;
            case 21:
                if (j1x.mp && j1x.mp.fee && j1x.mp.pl <= 0) {
                    l1x.bhG9x(j1x.data.id, j1x.mp.fee);
                    return
                }
                break
        }
        if (l1x.IZ2x(i1x, true, null, t1x == 19 ? { source: "album", sourceid: cE2x } : null) == 0) {
            return
        }
        l1x.fb3x({ clazz: "m-layer-w2", bubble: !1, message: bc1x.message })
    }

    function cix9o(d1x, qf7Y, wA9r, fg3x) {
        fg3x = fg3x || {};
        if (d1x.action == "ok") {
            if (wA9r) { location.dispatch2("/payfee?songId=" + wA9r) } else { location.dispatch2("/payfee?fee=" + qf7Y || 1) }
            Br0x.gm3x("click", { type: "tobuyvip", name: "box", source: fg3x.source || "song", sourceid: fg3x.sourceid || wA9r || 0 })
        } else if (d1x.action == "song") {
            location.dispatch2("/payfee?singleSong=true&songId=" + wA9r);
            Br0x.gm3x("click", { type: "tobuyone", name: "box", source: fg3x.source || "song", sourceid: fg3x.sourceid || wA9r || 0 })
        }
    }

    function QP5U(bF2x) { l1x.fb3x({ clazz: "m-layer-w2", bubble: !1, message: bF2x, btntxt: "知道了" }) }

    function QJ5O(bF2x, Q1x) { QP5U((Q1x || Y1x).toast || bF2x) }
    l1x.hV4Z = function(bF2x, C1x, t1x, civ9m, bf1x) {
        bF2x = bF2x || "由于版权保护，您所在的地区暂时无法使用。";
        if (civ9m && bf1x && bf1x.privilege && bf1x.privilege.toast) { v1x.br2x("/api/song/toast", { query: { id: bf1x.id }, type: "json", onload: QJ5O.g1x(this, bF2x), onerror: QJ5O.g1x(this, bF2x) }) } else if (C1x && t1x) { R1x.Rn5s(t1x, C1x, { conf: { message: bF2x, useCache: t1x != 18 } }) } else { QP5U(bF2x) }
    };
    l1x.sR8J = function(qf7Y, wA9r, t1x, fg3x, me6Y) {
        var bN2x, pO7H = "m-popup-info",
            big9X = "单首购买",
            bii9Z = "马上去开通",
            cA2x = "唱片公司要求，当前歌曲须付费使用。",
            bJH4L = true;
        try { bN2x = top.api.feeMessage || {} } catch (e) { bN2x = {} }
        if (qf7Y == 1 || qf7Y == 8 || qf7Y == 16) {
            if (t1x == "song") {
                pO7H = "m-popup-song-buy";
                cA2x = bN2x["vip2"] || cA2x;
                bii9Z = bN2x["vip2button"] || "包月购买";
                big9X = bN2x["vip2link"] || big9X;
                if (me6Y && me6Y.flag !== undefined) {
                    var bs2x = me6Y.flag.toString(2).split("");
                    if (parseInt(bs2x.pop(), 10) == 1) { bJH4L = false }
                }
            } else { cA2x = bN2x["vip"] || cA2x }
        } else if (qf7Y == 4) {
            cA2x = bN2x["album"] || cA2x;
            bii9Z = "立即订购"
        } else { cA2x = bN2x["unknow"] || cA2x }
        l1x.jn5s({ clazz: "m-layer-w5", html: a0x.bP2x(pO7H, { songTxt: big9X, tip: cA2x, oktext: bii9Z, cctext: "以后再说", showSongText: bJH4L }), onaction: cix9o.ed3x(null, qf7Y, wA9r, fg3x) })
    };
    l1x.bJG4K = function(hn4r, gZ4d) {
        l1x.gS3x({
            title: "提示",
            message: "唱片公司要求，该歌曲须下载后播放",
            btnok: "下载",
            btncc: "取消",
            okstyle: "u-btn2-w1",
            ccstyle: "u-btn2-w1",
            action: function(t1x) {
                if (t1x == "ok") { l1x.RZ6T({ id: hn4r, type: gZ4d }) }
            }
        })
    };
    l1x.bhG9x = function(nN6H, qf7Y) {
        var bN2x, cA2x = "唱片公司要求，当前歌曲须付费使用。";
        try { bN2x = top.api.feeMessage || {} } catch (e) { bN2x = {} }
        if (qf7Y == 1 || qf7Y == 8) { cA2x = bN2x["vip"] || cA2x } else if (qf7Y == 4) { cA2x = bN2x["album"] || cA2x } else { cA2x = bN2x["unknow"] || cA2x }
        return l1x.jn5s({
            clazz: "m-layer-w5",
            html: a0x.bP2x("m-popup-info", { tip: cA2x, oktext: "马上去开通", cctext: "以后再说" }),
            onaction: function(d1x) {
                if (d1x.action == "ok") {
                    location.dispatch2("/payfee?mvId=" + nN6H);
                    Br0x.gm3x("click", { type: "tobuyone", name: "box", source: "mv", sourceid: nN6H || 0 })
                }
            }
        })
    };
    l1x.IZ2x = function() {
        function compareFee(cir9i, ciq9h) {
            var bv2x = { 1: 99, 8: 99, 4: 88, 16: 99 };
            return (bv2x[cir9i] || 0) - (bv2x[ciq9h] || 0)
        }
        return function(i1x, cA2x, sG8y, fg3x) {
            sG8y = sG8y || {};
            var vK9B = [],
                IX2x = {},
                bJF4J = 0,
                bJE4I = 0,
                IW2x = null;
            if (!i1x || !i1x.length) return vK9B;
            k1x.be1x(i1x, function(bf1x) {
                var eT3x = l1x.og6a(bf1x);
                if (eT3x == 0) { vK9B.push(bf1x) } else if (eT3x == 10) {
                    if (bf1x.privilege) { bf1x.fee = bf1x.privilege.fee }
                    if (compareFee(bf1x.fee, IX2x.fee) > 0) { IX2x = bf1x }
                } else if (eT3x == 11) {
                    ++bJF4J;
                    if (!sG8y.play) vK9B.push(bf1x)
                } else if (eT3x == 1e3) {
                    ++bJE4I;
                    if (!sG8y.download) vK9B.push(bf1x)
                } else if (eT3x == 100) { IW2x = bf1x }
            });
            if (vK9B.length == 0 && cA2x) {
                if (bJF4J == i1x.length) {
                    var rf7Y = i1x[0].privilege || {};
                    if (rf7Y.payed) { l1x.hV4Z("唱片公司要求，该歌曲须下载后播放") } else { l1x.sR8J(rf7Y.fee, null, null, fg3x) }
                } else if (bJE4I == i1x.length) { l1x.hV4Z("因版权方要求，该歌曲不支持下载") } else if (IX2x.id) { l1x.sR8J(IX2x.fee, IX2x.id, null, fg3x, IX2x.privilege) } else {
                    if (IW2x && i1x.length == 1 && IW2x.privilege && IW2x.privilege.st < 0 && IW2x.privilege.toast) { l1x.hV4Z(null, null, null, true, IW2x) } else { l1x.hV4Z() }
                }
            }
            return vK9B
        }
    }();
    l1x.og6a = function(bf1x) {
        if (!bf1x) return 0;
        var eT3x = bf1x.privilege;
        if (bf1x.program) return 0;
        if (window.GAbroad) return 100;
        if (eT3x) {
            if (eT3x.st != null && eT3x.st < 0) {
                return 100
            }
            if (eT3x.fee > 0 && eT3x.fee != 8 && eT3x.payed == 0 && eT3x.pl <= 0) return 10;
            if (eT3x.fee == 16) return 11;
            if ((eT3x.fee == 0 || eT3x.payed) && eT3x.pl > 0 && eT3x.dl == 0) return 1e3;
            if (eT3x.pl == 0 && eT3x.dl == 0) return 100;
            return 0
        } else {
            var dX3x = bf1x.status != null ? bf1x.status : bf1x.st != null ? bf1x.st : 0;
            if (bf1x.status >= 0) return 0;
            if (bf1x.fee > 0) return 10;
            return 100
        }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        h1x = c1x("nej.v"),
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ui"),
        b1x;
    if (!!N1x.Sb6V) return;
    var hQ4U = a0x.rD8v(".#<uispace>{position:absolute;background:#fff;}");
    N1x.Sb6V = NEJ.C();
    b1x = N1x.Sb6V.O1x(N1x.NM4Q);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.bT2x([
            [document, "click", this.rb7U.g1x(this)]
        ]);
        this.cim9d = !!e1x.nostop;
        this.bJD4H = { top: e1x.top, left: e1x.left }
    };
    b1x.bC2x = function() {
        delete this.vI9z;
        delete this.bjK0x;
        delete this.pA7t;
        delete this.bJC4G;
        delete this.Sd6X;
        delete this.bJD4H;
        this.bH2x()
    };
    b1x.bZ2x = function() { this.kM5R = hQ4U };
    b1x.bR2x = function() {
        this.cb2x();
        this.Ah0x = this.o1x;
        h1x.q1x(this.o1x, "click", this.cih9Y.g1x(this))
    };
    b1x.rb7U = function(d1x) {
        if (d1x.button != 2) this.bp2x()
    };
    b1x.cih9Y = function(d1x) {
        if (this.cim9d) return;
        h1x.rj7c(d1x);
        var E1x = h1x.U1x(d1x);
        if (E1x.tagName == "A") h1x.cd2x(d1x)
    };
    b1x.cig9X = function() {
        var cM2x = /\s+/i;
        return function(mW6Q) {
            mW6Q = (mW6Q || "").trim().toLowerCase().split(cM2x);
            mW6Q[0] = mW6Q[0] || "bottom";
            mW6Q[1] = mW6Q[1] || "left";
            this.pA7t = mW6Q
        }
    }();
    b1x.cia9R = function(mW6Q) {
        var m1x = {},
            mg6a = this.bjK0x,
            ctO2x = a0x.om6g(),
            dk2x = this.o1x.offsetWidth,
            cr2x = this.o1x.offsetHeight;
        switch (mW6Q[0]) {
            case "top":
                m1x.top = mg6a.top - cr2x;
                m1x.left = mW6Q[1] == "right" ? mg6a.left + mg6a.width - dk2x : mg6a.left;
                break;
            case "left":
                m1x.left = mg6a.left - dk2x;
                m1x.top = mW6Q[1] == "bottom" ? mg6a.top + mg6a.height - cr2x : mg6a.top;
                break;
            case "right":
                m1x.left = mg6a.left + mg6a.width;
                m1x.top = mW6Q[1] == "bottom" ? mg6a.top + mg6a.height - cr2x : mg6a.top;
                break;
            default:
                m1x.top = mg6a.top + mg6a.height;
                m1x.left = mW6Q[1] == "right" ? mg6a.left + mg6a.width - dk2x : mg6a.left;
                break
        }
        return m1x
    };
    b1x.HW2x = function() {
        if (!this.bJC4G) {
            this.fV3x(this.bJD4H);
            return
        }
        if (!!this.Sd6X) {
            this.fV3x(this.vI9z);
            return
        }
        if (!!this.bjK0x) this.fV3x(this.cia9R(this.pA7t))
    };
    b1x.chA9r = function(E1x, dh2x, d1x) {
        dh2x = dh2x || Y1x;
        var bJn4r = a0x.om6g(),
            cN2x = h1x.ky5D(d1x) + (dh2x.left || 0),
            gE3x = h1x.nV6P(d1x) + (dh2x.top || 0),
            dk2x = E1x.offsetWidth + (dh2x.right || 0),
            cr2x = E1x.offsetHeight + (dh2x.bottom || 0),
            IS2x = bJn4r.scrollWidth,
            bky0x = bJn4r.scrollHeight,
            bkz0x = cN2x + dk2x,
            bkE0x = gE3x + cr2x;
        switch (this.pA7t[0]) {
            case "top":
                gE3x = bkE0x > bky0x ? gE3x - cr2x : gE3x;
                if (this.pA7t[1] == "right") { cN2x = cN2x - dk2x < 0 ? 0 : cN2x - dk2x } else { cN2x = bkz0x > IS2x ? IS2x - dk2x : cN2x }
                break;
            case "left":
                cN2x = bkz0x > IS2x ? IS2x - dk2x : cN2x;
                if (this.pA7t[1] == "top") { gE3x = bkE0x > bky0x ? gE3x - cr2x : gE3x } else { gE3x = gE3x - cr2x < 0 ? gE3x : gE3x - cr2x }
                break;
            case "right":
                cN2x = cN2x - dk2x < 0 ? 0 : cN2x - dk2x;
                if (this.pA7t[1] == "top") { gE3x = bkE0x > bky0x ? gE3x - cr2x : gE3x } else { gE3x = gE3x - cr2x < 0 ? gE3x : gE3x - cr2x }
                break;
            default:
                gE3x = gE3x - cr2x < 0 ? gE3x : gE3x - cr2x;
                if (this.pA7t[1] == "left") { cN2x = bkz0x > IS2x ? IS2x - dk2x : cN2x } else { cN2x = cN2x - dk2x < 0 ? 0 : cN2x - dk2x }
                break
        }
        return { top: gE3x, left: cN2x }
    };
    b1x.bkP0x = function() {
        var chu9l = function(E1x, dh2x) {
            E1x = a0x.y1x(E1x);
            if (!E1x) return;
            dh2x = dh2x || Y1x;
            var bj1x = a0x.hL4P(E1x);
            return { top: bj1x.y - (dh2x.top || 0), left: bj1x.x - (dh2x.left || 0), width: E1x.offsetWidth + (dh2x.right || 0), height: E1x.offsetHeight + (dh2x.bottom || 0) }
        };
        return function(e1x) {
            e1x = e1x || Y1x;
            this.Sd6X = e1x.event;
            this.cig9X(e1x.align);
            if (!!this.Sd6X) this.vI9z = this.chA9r(e1x.target, e1x.delta, this.Sd6X);
            this.bjK0x = chu9l(e1x.target, e1x.delta);
            this.bJC4G = !!e1x.fitable;
            this.M1x();
            return this
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ui"),
        b1x, K1x;
    if (!!N1x.zE0x) return;
    N1x.zE0x = NEJ.C();
    b1x = N1x.zE0x.O1x(N1x.Tq6k);
    K1x = N1x.zE0x.cg2x;
    N1x.zE0x.ctT2x = function() {
        var chj9a = function(d1x, C1x, fc3x, jq5v, Qp5u) {
            var cq2x, J1x = C1x + "-i",
                R1x = fc3x.vW9N,
                bJi4m = !!jq5v.noclear,
                bJg4k = !!jq5v.toggled;
            if (k1x.gc3x(jq5v.onbeforeclick)) {
                var Sj6d = jq5v.noclear,
                    chd9U = jq5v.toggled;
                try { jq5v.onbeforeclick(jq5v) } catch (e) {}
                bJi4m = !!jq5v.noclear;
                bJg4k = !!jq5v.toggled;
                jq5v.toggled = chd9U;
                jq5v.noclear = Sj6d
            }
            var Bg0x = R1x[J1x];
            if (bJg4k && !!Bg0x) {
                Bg0x.bp2x();
                return
            }
            h1x.bh1x(d1x);
            if (!bJi4m) {
                h1x.z1x(document, "click");
                cq2x = fc3x.B1x(jq5v)
            } else { cq2x = fc3x.csp1x(jq5v, !0) }
            R1x[J1x] = cq2x;
            cq2x.vd8V("onbeforerecycle", function() { delete R1x[J1x] });
            cq2x.bkP0x(Qp5u)
        };
        return function(f1x, e1x) {
            f1x = a0x.y1x(f1x);
            if (!f1x) return this;
            if (!this.vW9N) this.vW9N = {};
            var C1x = a0x.kB5G(f1x);
            if (!!this.vW9N[C1x]) return this;
            e1x = NEJ.X({}, e1x);
            var Qp5u = NEJ.EX({ align: "", delta: null, fitable: !1 }, e1x);
            Qp5u.target = C1x;
            e1x.destroyable = !0;
            if (!e1x.fixed) {
                Qp5u.fitable = !0;
                e1x.parent = document.body
            }
            this.vW9N[C1x] = [C1x, e1x.event || "click", chj9a.ed3x(null, C1x, this, e1x, Qp5u)];
            h1x.q1x.apply(h1x, this.vW9N[C1x]);
            return this
        }
    }();
    N1x.zE0x.ctU2x = function(f1x) {
        if (!this.vW9N) return this;
        var C1x = a0x.kB5G(f1x),
            d1x = this.vW9N[C1x];
        if (!d1x) return this;
        delete this.vW9N[C1x];
        h1x.lW6Q.apply(h1x, d1x);
        var cq2x = this.vW9N[C1x + "-i"];
        if (!!cq2x) cq2x.bp2x();
        return this
    };
    b1x.boc0x = function() {
        return N1x.Sb6V.B1x(this.bS2x)
    };
    b1x.Oa4e = function() {
        K1x.Oa4e.apply(this, arguments);
        this.bS2x.top = null;
        this.bS2x.left = null;
        this.bS2x.nostop = !1
    };
    b1x.bkP0x = function(e1x) {
        if (!!this.nI6C) this.nI6C.bkP0x(e1x);
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        bd1x = c1x("nej.ui"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.blI0x = NEJ.C();
    b1x = n1x.blI0x.O1x(bd1x.zE0x);
    b1x.bk1x = function(e1x) {
        e1x.nohack = true;
        this.bl1x(e1x)
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.Z1x = NEJ.C();
    b1x = n1x.Z1x.O1x(n1x.blI0x);
    K1x = n1x.Z1x.cg2x;
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.es3x = e1x.type || 1
    };
    b1x.bR2x = function() {
        this.cb2x();
        this.o1x = a0x.mI6C(this.cha9R());
        var i1x = a0x.cQ2x(this.o1x);
        this.pl7e = i1x[0];
        this.ci2x = i1x[1]
    };
    b1x.cha9R = function() {
        return '<div class="sysmsg"><i class="u-icn u-icn-31"></i><span></span></div>'
    };
    b1x.HW2x = function() {
        var A1x = {},
            cc2x = this.o1x.style,
            iF5K = a0x.om6g(),
            mB6v = { left: iF5K.scrollLeft, top: iF5K.scrollTop },
            dh2x = { left: iF5K.clientWidth - this.o1x.offsetWidth, top: iF5K.clientHeight - this.o1x.offsetHeight };
        A1x.top = Math.max(0, mB6v.top + dh2x.top / 2);
        A1x.left = Math.max(0, mB6v.left + dh2x.left / 2);
        this.nI6C.fV3x(A1x)
    };
    b1x.M1x = function(e1x) {
        K1x.M1x.call(this);
        this.HW2x();
        this.es3x == 1 ? a0x.eu3x(this.pl7e, "u-icn-32", "u-icn-31") : a0x.eu3x(this.pl7e, "u-icn-31", "u-icn-32");
        this.ci2x.innerHTML = e1x.tip || ""
    };
    n1x.Z1x.M1x = function() {
        var eV3x;
        return function(e1x) {
            clearTimeout(eV3x);
            if (e1x.parent === undefined) e1x.parent = document.body;
            if (e1x.autoclose === undefined) e1x.autoclose = true;
            e1x.clazz = "m-sysmsg";
            !!this.eK3x && this.eK3x.S1x();
            this.eK3x = this.B1x(e1x);
            this.eK3x.M1x(e1x);
            if (e1x.autoclose) eV3x = setTimeout(this.bp2x.g1x(this), 2e3)
        }
    }();
    n1x.Z1x.bp2x = function() {!!this.eK3x && this.eK3x.bp2x() }
})();
(function() {
    var c1x = NEJ.P,
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u");
    if (window["GRef"] && window["GRef"] == "mail") {
        v1x.br2x = v1x.br2x.ee3x(function(d1x) {
            e1x = d1x.args[1];
            e1x.query = e1x.query || {};
            if (k1x.ff3x(e1x.query)) e1x.query = k1x.hl4p(e1x.query);
            e1x.query.ref = "mail"
        })
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        eX3x = NEJ.R,
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        n1x = c1x("nm.l"),
        J1x = "playlist-tracks_",
        b1x;
    p1x.eP3x({
        "playlist_my-list": {
            url: "/api/user/playlist",
            type: "GET",
            format: function(Q1x, e1x) {
                this.cgY9P(Q1x.playlist);
                return { total: 0, list: eX3x }
            },
            onerror: function() { this.z1x("onlisterror") }
        },
        "playlist_new-add": {
            url: "/api/playlist/create",
            format: function(Q1x, e1x) {
                var iG5L = Q1x.playlist;
                iG5L.creator = GUser;
                iG5L.isHost = !0;
                iG5L.typeFlag = "playlist";
                return iG5L
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.hj4n, "listchange", d1x) },
            onmessage: function() {
                var lA5F = { 507: "歌单数量超过上限！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" };
                return function(ck2x) { n1x.Z1x.M1x({ tip: lA5F[ck2x] || "创建失败", type: 2 }) }
            }()
        },
        "playlist_new-del": {
            url: "/api/playlist/delete",
            type: "GET",
            filter: function(e1x) { e1x.id = e1x.data.pid },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.hj4n, "listchange", d1x) },
            onmessage: function() {
                var lA5F = { 404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" };
                return function(ck2x) { n1x.Z1x.M1x({ tip: lA5F[ck2x] || "删除失败", type: 2 }) }
            }()
        },
        "playlist_fav-add": {
            type: "GET",
            url: "/api/playlist/subscribe",
            filter: function(e1x) {
                var fg3x = e1x.ext || {};
                e1x.ext = NEJ.X(fg3x, e1x.data);
                e1x.data = { id: e1x.ext.id }
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.M1x({ tip: "收藏成功" + (Q1x.point > 0 ? ' 获得<em class="s-fc6">' + Q1x.point + "积分</em>" : "") });
                var r1x = e1x.ext;
                r1x.subscribedCount++;
                return r1x
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(p1x.cgV9M, "listchange", d1x);
                h1x.z1x(p1x.cgV9M, "itemchange", { attr: "subscribedCount", data: d1x.data })
            },
            onmessage: function() {
                var lA5F = { 404: "歌单不存在！", 501: "歌单已经收藏！", 506: "歌单收藏数量超过上限！" };
                return function(ck2x) { n1x.Z1x.M1x({ type: 2, tip: lA5F[ck2x] || "收藏失败，请稍后再试！" }) }
            }()
        },
        "playlist_fav-del": {
            url: "/api/playlist/unsubscribe",
            type: "GET",
            filter: function(e1x) { e1x.id = e1x.data.id = e1x.data.pid },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.hj4n, "listchange", d1x) },
            onmessage: function() {
                var lA5F = { 404: "歌单不存在！", 405: "你操作太快了，请休息一会再试！", 406: "你操作太快了，请休息一会再试！" };
                return function(ck2x) { n1x.Z1x.M1x({ tip: lA5F[ck2x], type: 2 }) }
            }()
        },
        "playlist_new-update": {
            url: ["playlist-update-name", "playlist-update-tag", "playlist-update-desc"],
            filter: function(e1x) {
                var j1x = e1x.data,
                    Sn6h = {};
                Sn6h["playlist-update-name"] = { id: j1x.id, name: j1x.name };
                Sn6h["playlist-update-tag"] = { id: j1x.id, tags: j1x.tags.join(";") };
                Sn6h["playlist-update-desc"] = { id: j1x.id, desc: j1x.description };
                e1x.data = Sn6h;
                e1x.ext = j1x
            },
            format: function(T1x, pt7m, PW5b, e1x) {
                if (T1x.code == 200 && pt7m.code == 200 && PW5b.code == 200) {
                    e1x.ext.allSuccess = true;
                    n1x.Z1x.M1x({ tip: "保存成功" })
                } else if (T1x.code == 407 || pt7m.code == 407 || PW5b.code == 407) {
                    e1x.ext.allSuccess = false;
                    n1x.Z1x.M1x({ type: 2, tip: "输入内容包含关键字" })
                } else {
                    e1x.ext.allSuccess = false;
                    n1x.Z1x.M1x({ type: 2, tip: "保存失败" })
                }
                return this.eg3x(e1x.ext.id)
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.hj4n, "listchange", d1x) },
            onmessage: function(ck2x) { n1x.Z1x.M1x({ type: 2, tip: "保存失败" }) }
        },
        "playlist-update-name": {
            url: "/api/playlist/update/name",
            format: function(Q1x, e1x) {
                var r1x = this.eg3x(e1x.ext.id);
                if (Q1x.code == 200) r1x.name = e1x.ext.name;
                return Q1x
            }
        },
        "playlist-update-tag": {
            url: "/api/playlist/tags/update",
            format: function(Q1x, e1x) {
                var r1x = this.eg3x(e1x.ext.id);
                if (Q1x.code == 200) r1x.tags = e1x.ext.tags;
                return Q1x
            }
        },
        "playlist-update-desc": {
            url: "/api/playlist/desc/update",
            format: function(Q1x, e1x) {
                var r1x = this.eg3x(e1x.ext.id);
                if (Q1x.code == 200) r1x.description = e1x.ext.description;
                return Q1x
            }
        },
        "playlist-update-cover": {
            url: "/api/playlist/cover/update",
            filter: function(e1x) {
                e1x.url = e1x.data.url;
                delete e1x.data.url
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.M1x({ tip: "保存成功" });
                var r1x = this.eg3x(e1x.data.id);
                r1x.coverImgUrl = e1x.url;
                e1x.ext = r1x;
                return r1x
            },
            onmessage: function(ck2x) { n1x.Z1x.M1x({ type: 2, tip: "保存失败" }) },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.hj4n, "itemchange", { attr: "coverImgUrl", data: e1x.ext }) }
        },
        "playlist-upcount": {
            url: "/api/playlist/update/playcount",
            type: "GET",
            format: function(Q1x, e1x) {
                var iG5L = this.eg3x(e1x.data.id);
                if (!iG5L) return;
                iG5L.playCount++;
                h1x.z1x(p1x.hj4n, "itemchange", { attr: "playcount", data: iG5L })
            }
        }
    });
    p1x.hj4n = NEJ.C();
    b1x = p1x.hj4n.O1x(p1x.gU3x);
    b1x.cm2x = function() { this.cs2x() };
    b1x.bJc4g = function() {
        var cT2x = GUser.userId;
        this.nC6w({ limit: 1001, key: "playlist_my-" + cT2x, data: { offset: 0, limit: 1001, uid: cT2x } })
    };
    b1x.cgY9P = function(i1x) {
        var cT2x = GUser.userId,
            jd5i = [],
            bJa4e = [];
        k1x.be1x(i1x, function(r1x) {
            r1x.typeFlag = "playlist";
            if (r1x.creator && r1x.creator.userId == cT2x) {
                if (r1x.specialType == 5) r1x.name = "我喜欢的音乐";
                r1x.isHost = !0;
                jd5i.push(r1x)
            } else { bJa4e.push(r1x) }
        });
        this.rc7V("playlist_new-" + cT2x, jd5i);
        this.rc7V("playlist_fav-" + cT2x, bJa4e)
    };
    b1x.cgO9F = function(j1x) { this.cl2x("playlist-update-cover", { data: j1x }) };
    b1x.ctX2x = function() {
        var PT5Y = this.cgu9l.y1x("host-plist");
        if (PT5Y.length == 0) {
            return
        }
        if (PT5Y.length == 1 && PT5Y[0].trackCount <= 0) {
            return
        }
        for (var i = 0, len = PT5Y.length; i < len; i++) {
            var r1x = PT5Y[i];
            if (r1x.trackCount > 0) return r1x.id
        }
        return this.cgu9l.y1x("host-plist")[0].id
    };
    b1x.cgs9j = function(C1x) {
        if (GUser && GUser.userId > 0) { this.cl2x("playlist-upcount", { data: { id: C1x } }) }
    };
    b1x.DR1x = function() {
        if (GUser && GUser.userId > 0) {
            return !0
        } else {
            top.login();
            return !1
        }
    };
    b1x.ctY2x = function() {
        return GUser.userId
    };
    b1x.bnp0x = function(r1x) {
        if (r1x.userId == GUser.userId && r1x.specialType == 5) r1x.name = "我喜欢的音乐";
        h1x.z1x(this.constructor, "itemchange", { data: this.yf9W(r1x) });
        return r1x
    };
    H1x.fs3x.B1x({ element: p1x.hj4n, event: ["listchange", "playcountchange", "itemchange"] })
})();
(function() {
    var c1x = NEJ.P,
        eX3x = NEJ.R,
        bm1x = NEJ.F,
        Y1x = NEJ.O,
        H1x = c1x("nej.ut"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    p1x.eP3x({
        "program-get": {
            url: "/api/dj/program/detail",
            format: function(Q1x) {
                return Q1x.program
            }
        },
        "program_djradio-list": {
            type: "GET",
            url: "/api/dj/program/byradio",
            filter: function(e1x) {
                e1x.data.limit = 1e3;
                delete e1x.data.id
            },
            format: function(Q1x, e1x) {
                var bIU4Y = [],
                    As0x = Q1x.programs;
                if (As0x) {
                    for (var i = 0, l = As0x.length; i < l; i++) {
                        if (As0x[i].programFeeType < 10 || As0x[i].buyed) { bIU4Y.push(As0x[i]) }
                    }
                }
                return bIU4Y
            }
        },
        "program_fav-list": {
            url: "/api/djprogram/subscribed/paged",
            format: function(Q1x, e1x) {
                return Q1x.programs
            },
            onerror: "onlisterror"
        },
        "program_fav-add": {
            url: "/api/djprogram/subscribe",
            filter: function(e1x) {
                e1x.ext = e1x.data;
                e1x.data = { id: e1x.ext.id };
                e1x.id = e1x.data.id
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.M1x({ tip: "收藏成功" });
                var r1x = e1x.ext;
                r1x.subscribedCount++;
                r1x.subscribed = !0;
                return r1x
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.pB7u, "listchange", d1x) },
            onmessage: function() {
                var lA5F = { 404: "节目不存在！", 501: "节目已收藏！" };
                return function(ck2x) { n1x.Z1x.M1x({ type: 2, tip: lA5F[ck2x] || "收藏失败！" }) }
            }()
        },
        "program_fav-del": {
            url: "/api/djprogram/unsubscribe",
            finaly: function(d1x, e1x) { h1x.z1x(p1x.pB7u, "listchange", d1x) },
            onmessage: function() {
                var lA5F = { 404: "节目不存在！", 502: "没有收藏此节目！" };
                return function(ck2x) { l1x.bnL0x({ txt: lA5F[ck2x] || "取消收藏失败！" }) }
            }()
        },
        "program-update-count": {
            type: "GET",
            url: "/api/dj/program/listen",
            filter: function(e1x) {
                var r1x = this.eg3x(e1x.data.id) || Y1x;
                e1x.ext = (r1x.listenerCount || 0) + 1
            },
            format: function(Q1x, e1x) {
                var r1x = this.eg3x(e1x.data.id);
                if (!!r1x) { r1x.listenerCount = Math.max(e1x.ext, r1x.listenerCount || 0) }
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.pB7u, "itemchange", { attr: "playCount", data: this.eg3x(e1x.data.id) }) }
        },
        "program-like": {
            url: "/api/resource/like",
            filter: function(e1x) { e1x.data = { threadId: "A_DJ_1_" + e1x.id } },
            format: function(Q1x, e1x) {
                var r1x = e1x.ext.data || this.eg3x(e1x.id);
                r1x.liked = true;
                r1x.likedCount++;
                e1x.ext.data = r1x;
                try { top.player.setLike(r1x) } catch (e) {}
                return r1x
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.pB7u, "itemchange", { attr: "likedCount", data: e1x.ext.data }) }
        },
        "program-unlike": {
            url: "/api/resource/unlike",
            filter: function(e1x) { e1x.data = { threadId: "A_DJ_1_" + e1x.id } },
            format: function(Q1x, e1x) {
                var r1x = e1x.ext.data || this.eg3x(e1x.id);
                r1x.liked = false;
                r1x.likedCount--;
                e1x.ext.data = r1x;
                try { top.player.setLike(r1x) } catch (e) {}
                return r1x
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.pB7u, "itemchange", { attr: "likedCount", data: e1x.ext.data }) }
        }
    });
    p1x.pB7u = NEJ.C();
    b1x = p1x.pB7u.O1x(p1x.gU3x);
    b1x.cua2x = function() {
        var cT2x = GUser.userId;
        this.nC6w({ limit: 1001, key: "program_fav-" + cT2x, data: { offset: 0, limit: 1e3, uid: cT2x } })
    };
    b1x.cub2x = function(cS2x) {
        var oB6v = cS2x[this.ur8j];
        l1x.cgg9X(4, function(R1x) { R1x.rc7V("track_program-" + oB6v, cS2x.songs) });
        delete cS2x.songs;
        var bK2x = cS2x.mainSong;
        l1x.cgg9X(4, function(R1x) { R1x.rc7V("track_program_main-" + oB6v, !bK2x ? [] : [bK2x]) });
        cS2x.mainSong = (bK2x || Y1x).id
    };
    b1x.cud2x = function(C1x) {
        var cS2x = this.eg3x(C1x),
            cT2x = localCache.RU6O("host.profile.userId");
        return !!cS2x && cS2x.dj.userId == cT2x
    };
    b1x.cue2x = function(C1x) {
        return !1
    };
    b1x.bnp0x = function(r1x) {
        h1x.z1x(this.constructor, "itemchange", { attr: "detail", data: this.yf9W(r1x) });
        return r1x
    };
    b1x.cgs9j = function(C1x) { this.cl2x("program-update-count", { data: { id: C1x } }) };
    l1x.bIM4Q = function(e1x) {
        var R1x = p1x.pB7u.B1x({
            onitemadd: function() {
                (e1x.onsuccess || bm1x)()
            },
            onerror: function() {
                (e1x.onerror || bm1x)()
            }
        });
        if (e1x.data.liked) { R1x.PP5U(e1x.data) } else { R1x.tZ8R(e1x.data) }
    };
    b1x.tZ8R = function(cS2x) {
        if (!l1x.gW4a()) return;
        var cn2x = { ext: {} };
        if (k1x.kg5l(cS2x)) {
            cn2x.id = cS2x.id;
            cn2x.ext.data = cS2x
        } else { cn2x.id = cS2x }
        this.cl2x("program-like", cn2x)
    };
    b1x.PP5U = function(cS2x) {
        if (!l1x.gW4a()) return;
        var cn2x = { ext: {} };
        if (k1x.kg5l(cS2x)) {
            cn2x.id = cS2x.id;
            cn2x.ext.data = cS2x
        } else { cn2x.id = cS2x }
        this.cl2x("program-unlike", cn2x)
    };
    H1x.fs3x.B1x({ element: p1x.pB7u, event: ["listchange", "itemchange"] })
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        eX3x = NEJ.R,
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        n1x = c1x("nm.l"),
        l1x = c1x("nm.x"),
        J1x = "playlist-tracks_",
        l1x = c1x("nm.x"),
        b1x;
    p1x.eP3x({
        "track-get": {
            url: "/api/v3/song/detail",
            filter: function(e1x) { e1x.data.c = JSON.stringify([{ id: e1x.data.id }]) },
            format: function(Q1x, e1x) {
                var bf1x = l1x.Ep1x(Q1x.songs[0]);
                bf1x.privilege = Q1x.privileges[0];
                return bf1x
            }
        },
        "track_playlist-list": {
            url: "/api/v3/playlist/detail",
            filter: function(e1x) { e1x.data.n = 1e3 },
            format: function(Q1x, e1x) {
                var gJ3x = [];
                this.sd8V.bnp0x(Q1x.playlist);
                k1x.be1x(Q1x.playlist.tracks, function(bK2x, s1x) {
                    var bIL4P = l1x.Ep1x(bK2x);
                    bIL4P.privilege = Q1x.privileges[s1x];
                    gJ3x.push(bIL4P)
                }, this);
                return gJ3x
            }
        },
        "track_album-list": {
            url: "/api/v1/album/{id}",
            format: function(Q1x, e1x) {
                var gJ3x = [];
                k1x.be1x(Q1x.songs, function(bf1x) { gJ3x.push(l1x.Ep1x(bf1x)) });
                return gJ3x
            }
        },
        "track_playlist-add": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e1x) {
                var bv2x = {},
                    j1x = e1x.data,
                    cfX8P = this.gR3x(e1x.key) || [];
                Ev1x = [];
                k1x.be1x(cfX8P, function(bK2x) {
                    var C1x = k1x.kg5l(bK2x) ? bK2x.id : bK2x;
                    bv2x[C1x] = true
                });
                e1x.ext = [];
                k1x.be1x(j1x.tracks, function(bK2x) {
                    var C1x = k1x.kg5l(bK2x) ? bK2x.id : bK2x;
                    if (!bv2x[C1x]) {
                        Ev1x.push(C1x);
                        bv2x[C1x] = true;
                        e1x.ext.push(bK2x)
                    }
                });
                j1x.trackIds = JSON.stringify(Ev1x);
                j1x.op = "add";
                if (!Ev1x.length) { e1x.value = { code: 502 } }
            },
            format: function(Q1x, e1x) {
                n1x.Z1x.M1x({ tip: "已添加至歌单" });
                var iG5L = this.sd8V.eg3x(e1x.data.pid);
                if (!!Q1x.coverImgUrl) iG5L.coverImgUrl = Q1x.coverImgUrl;
                k1x.mk6e(e1x.ext, function(bK2x) {
                    this.xy9p(e1x, k1x.kg5l(bK2x) ? bK2x : null);
                    if (!!iG5L) iG5L.trackCount++
                }, this);
                h1x.z1x(p1x.hj4n, "itemchange", { data: iG5L || {}, cmd: "add" });
                this.z1x("onaddsuccess");
                return null
            },
            finaly: function(d1x, e1x) {
                h1x.z1x(p1x.uv8n, "listchange", { key: e1x.key, action: "refresh" });
                var oB6v = e1x.data.pid,
                    cp2x = this.jt5y(e1x.key)
            },
            onmessage: function() {
                var lA5F = { 502: "歌曲已存在！", 505: "歌单已满！" };
                return function(ck2x) { setTimeout(function() { n1x.Z1x.M1x({ tip: lA5F[ck2x] || "添加失败，请稍后再试！", type: 2 }) }, 0) }
            }()
        },
        "track_playlist-del": {
            url: "/api/playlist/manipulate/tracks",
            filter: function(e1x) {
                var j1x = e1x.data;
                e1x.ext = j1x.trackIds;
                j1x.trackIds = JSON.stringify(j1x.trackIds);
                j1x.op = "del"
            },
            format: function(Q1x, e1x) {
                var iG5L = this.sd8V.eg3x(e1x.data.pid);
                k1x.be1x(e1x.ext, function(C1x) {
                    this.bdA8s({ id: C1x, key: "track_playlist-" + e1x.data.pid }, !0);
                    if (!!iG5L) iG5L.trackCount = Math.max(0, iG5L.trackCount - 1)
                }, this);
                h1x.z1x(p1x.hj4n, "itemchange", { data: iG5L || {}, cmd: "del" });
                return null
            },
            finaly: function(d1x, e1x) { h1x.z1x(p1x.uv8n, "listchange", { key: e1x.key, action: "refresh" }) },
            onmessage: function(ck2x) { l1x.bnL0x({ text: "歌曲删除失败！" }) }
        },
        "track_program-list": {
            url: "/api/dj/program/detail",
            format: function(Q1x, e1x) {
                return this.bIK4O.bnp0x(Q1x.program).songs
            },
            onerror: "onlisterror"
        },
        "track_listen_record-list": {
            url: "/api/v1/play/record",
            format: function(Q1x, e1x) {
                var i1x = [];
                if (e1x.data.type == -1) {
                    if (Q1x.weekData && Q1x.weekData.length) { e1x.data.type = 1 } else { e1x.data.type = 0 }
                }
                if (e1x.data.type == 1) { i1x = this.bIJ4N(Q1x.weekData) } else { i1x = this.bIJ4N(Q1x.allData) }
                return i1x
            },
            onerror: "onlisterror"
        },
        "track_day-list": {
            url: "/api/v2/discovery/recommend/songs",
            format: function(Q1x) {
                var mU6O = [];
                k1x.be1x(Q1x.recommend, function(bf1x, s1x) { mU6O.push({ action: "recommendimpress", json: { alg: bf1x.alg, scene: "user-song", position: s1x, id: bf1x.id } }) });
                this.kI5N.RH5M(mU6O);
                return Q1x.recommend
            },
            onerror: "onlisterror"
        },
        "track_lyric-get": {
            type: "GET",
            url: "/api/song/lyric",
            filter: function(e1x) {
                e1x.data.lv = 0;
                e1x.data.tv = 0
            },
            format: function(m1x, e1x) {
                return m1x
            },
            onload: "onlyricload",
            onerror: "onlyricerror"
        }
    });
    p1x.uv8n = NEJ.C();
    b1x = p1x.uv8n.O1x(p1x.gU3x);
    b1x.cm2x = function() {
        this.cs2x();
        this.sd8V = p1x.hj4n.B1x();
        this.bIK4O = p1x.pB7u.B1x();
        this.kI5N = p1x.hI4M.B1x()
    };
    b1x.bIJ4N = function(i1x) {
        var m1x = [],
            ge3x = 0;
        k1x.be1x(i1x, function(r1x, s1x) {
            var bf1x = l1x.Ep1x(r1x.song);
            if (s1x == 0) { ge3x = r1x.score }
            bf1x.max = ge3x;
            bf1x.playCount = r1x.playCount;
            bf1x.score = r1x.score;
            m1x.push(bf1x)
        });
        return m1x
    };
    H1x.fs3x.B1x({ element: p1x.uv8n, event: ["listchange"] })
})();
(function() {
    function J() {
        var d = "6skV4PUYecGhx07l".split("");
        this.d = function(f) {
            if (null == f || void 0 == f) return f;
            if (0 != f.length % 2) throw Error("1100");
            for (var b = [], c = 0; c < f.length; c++) {
                0 == c % 2 && b.push("%");
                for (var g = d, a = 0; a < g.length; a++)
                    if (f.charAt(c) == g[a]) {
                        b.push(a.toString(16));
                        break
                    }
            }
            return decodeURIComponent(b.join(""))
        }
    }
    var k = (new J).d,
        d = (new J).d,
        e = (new J).d,
        f = (new J).d,
        g = (new J).d;
    (function() {
        var B = [e("44UsY4UP"), e("40UcU7UcUkUsYkP6UxYPUYUcU7"), d("U4UPUVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("47P6P6UxUsYcUPYkPVUeUPUxUx"), f("40PVk6PkUPUUUPYkUPU7UVUPk6PVUsU7YVk6PVUPYkUcUU"), e("4eUcYkUsUYUcU7Ulk6PVUsU7YVk64Y4k"), d("YVUPYkUcUU"), g("UYUPY44VUlU7Y4UPYeY4")],
            J = [g("YPU7UcUUUlYkU0VkUU")],
            b = [d(""), g("4YYkUsYcP4UPYeY4"), k("Y6UsYkUPU7Y4"), e("7Phchx7PcxeU"), k("Y6UxYPUYUcU7YV"), d("4sU4UlUkUP4PYe40UsU744UPY4UPUVY4"), e("V6V6VsV6"), d("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYUcU7"), k("PUUPUPY4UxUPk6P4PUk64VUlYkUP"), f("V6V6V6VY"), f("V6V6V6V4"), d("V6V6V6Vk"), d("V6V6V6VV"), g("V6V6V6V6"), e("V6V6V6Vs"), g("PPU7UcY4Yck6P6UxUsYcUPYk"), d("PVUhYcY6UPk6PYUPUkk6P6UxYPUYUcU7"), d("PYUPUk4hUcY4k0UcU7Y4UPUYYkUcUPYkY4UPk6P6444U"), e("4kUPUxUxk640P4"), e("V6V6V6Ve"), g("UYUPY4PVYPY6Y6UlYkY4UPU44PYeY4UPU7YVUcUlU7YV"), d("YVUPY4P4UcU0UP"), e("V6V6V6Vc"), g("PVUsUUUPPVUPUsYkUVUe"), d("kk"), f("k4"), f("PPU7UcYUUPYkYV"), e("kP"), e("kU"), f("kY"), f("VsVsVsV6"), d("UYUPY4k6Y6UxYPUYUcU7k6YVY4YkUcU7UYk6UPYeUVUPY6Y4UcUlU7"), e("P4UeYkUPUP44PVUeUsU4UlYY"), g("kh"), f("kx"), d("k0"), f("4sYkUsUk"), g("7eehhc7Uc7cx74heh07YhheU7PG7eh"), d("k7"), g("4UPPPG4PPVUeUsYkUP"), g("kl"), d("V6"), k("Vs"), f("Vk"), e("VV"), e("V4"), e("74hhhl7PG7ehPl4Y4kVkVVVsVk"), g("VP"), f("VU"), e("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7P4UPYeY4"), f("VY"), d("PY4P4kPG4P47k64kYkUlYYYVUPYkk64PYeY4UPU7YVUcUlU7"), f("Ve"), e("Vc"), g("VG"), g("44UcYUPek64kYkUlYYYVUPYkk6P6UxYPUYk04cU7"), k("Vh"), g("V0"), d("PPY6UxUsYck6P64V"), e("UVUsU7YUUsYVk6UPYeUVUPY6Y4UcUlU7"), f("4s"), k("4k"), g("4V"), g("44"), g("4P"), f("7Ph7G77eh0Gl7ccheP7chhcs"), e("4U"), k("4eUsYkYkUcU7UYY4UlU7"), f("4Y"), f("4e"), f("4c"), k("4G"), e("4YU7UlU0UPk6PVUeUPUxUxk64cU7Y4UPUYYkUsY4UcUlU7"), f("4h"), f("4x"), f("40"), e("47"), f("4l"), k("P6"), d("Ps"), k("Pk"), d("PV"), g("47UcUsUYUsYkUsk6PVUlUxUcU4"), g("P4"), e("PVUPUU4VUxUcUPU7Y4k6P6UxYPUYUcU7"), d("PP"), e("PU"), d("VsVsVsVs"), e("PY"), d("Pe"), g("Pc"), k("PG"), e("4YUlYPU4Yck64lUxU4k6PVY4YcUxUP"), k("Px"), g("PkUlUkUxUlYek64xUsYPU7UVUeUPYkk6P6UxYPUYUcU7"), d("40UcUVYkUlYVUlUUY4k64lUUUUUcUVUPk6VkV6VsVV"), f("PsPs40YPYVUcUV"), k("Us"), e("4PYPYkUlYVY4UcUxUP"), e("Uk"), k("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUxk7Vs"), k("UV"), d("PVUVYkUcY6Y4UcU7UYk744UcUVY4UcUlU7UsYkYc"), f("U4"), f("74hhhl7PG7eh"), f("UP"), k("UU"), k("UY"), e("Ue"), d("40Usk04VUlU7UUUcUYk7UVUlU0k6Y6UxYPUYUcU7"), d("Uc"), g("VsV6VsV6"), d("4VUsYVYPUsUx"), d("UG"), e("Uh"), e("Ux"), d("U0"), g("U7"), e("Ul"), d("Y6"), k("VsV6V6Ve"), f("UVY4"), d("U4Ul47UlY4P4YkUsUVUh"), g("Ys"), d("YVUPY4P4UcU0UPUlYPY4"), f("74heh07PG7ehk6P6YkUl"), e("Yk"), k("4YUcYVUeUs"), k("UYUPY4P4UcU0UPYGUlU7UP4lUUUUYVUPY4"), g("YV"), d("VsV6V6VP"), g("VsV6V6V4"), k("Y4"), k("YP"), g("VsV6V6VV"), f("YU"), f("VsV6V6Vs"), d("YY"), e("Ye"), e("U4YkUsYY4sYkYkUsYcYV"), g("Yc"), e("YG"), f("Yh"), g("Y0"), k("Y7"), d("UUUlU7Y4"), g("VsV6V6Vc"), k("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6UPYeY6UcYkUPYVV0"), f("PVUeUPUxUxk7PP4c4eUPUxY6UPYk"), f("Y4Ul44UsY4UsPPPk4x"), f("PYUcU7U4UlYYP4UPYeY4"), e("UxUsU7UYYPUsUYUP"), g("U4Ul"), f("74heh07chhcsk6P6YkUl"), e("4eUcUYUeUxUcUYUeY4P4UPYeY4"), k("U4UcYU"), g("40UPU7YPP4UPYeY4"), e("4s4l4xk640UPU4UcUsk6P6UxUsYcUkUsUVUhk6P6UxYPUYUcU7"), f("4VUcY4YkUcYek6UlU7UxUcU7UPk6Y6UxYPUYk0UcU7"), f("UPUV"), f("44UPYVU4UPU0UlU7Us"), k("4cU7UsUVY4UcYUUP4kUlYkU4UPYk"), f("PkUPUsUxP6UxUsYcUPYk"), d("4e4P4x4x4l"), f("kxk6kYUVUlU4UPkYVG"), k("UPU0"), f("U7Y6P4UlU7UYUkYP4sU4U4UcU7"), e("UVYkUPUsY4UP4PUxUPU0UPU7Y4"), g("Y6UeUsU7Y4UlU0"), k("40PVk6P640UcU7UVUeUl"), d("7UGPhY74h0cV"), d("UPYUUsUx"), f("UPYe"), k("44UcYUPek6PU4l44k64eUPUxY6UPYkk6P6UxYPUYk0UcU7"), f("7UcUh67YhheU7Ucee774h0cV"), d("PsYPUcUVUhP4UcU0UP4VUeUPUVUh4lUkUGUPUVY4k7PsYPUcUVUhP4UcU0UP4VUeUPUVUhk7Vs"), k("4UUxYc4lYk44UcUPk64YUsU0UPYVk6P6UxYPUYUcU7"), e("UsY4Y4UsUVUePVUeUsU4UPYk"), e("P6UxUsYc4lU7k6P6UxYPUYk0UcU7"), f("UYUPY4P4UcU0UP"), e("Vsk7V6Vs"), e("4kYkUlUsU4YYUsYc"), k("UUY6"), e("4sUxUsYYUsYkk647P64sP64ck6YPY4UcUxYV"), d("4UUlYkY4UP"), g("UeUsYVUe4VUlU4UP"), e("7UcUhc7UG0GV7PGYcG74h0cV"), e("4PPV47k6PVUlU7UsYkk64sP64c"), k("4eP644UPY4UPUVY4"), e("4kUcY4U4UPUUUPU7U4UPYkk6PsYPUcUVUhPVUVUsU7"), k("4c4Pk6P4UsUkk6Y6UxYPUYUcU7"), g("kYkx"), k("4kYPY4Y4UlU74UUsUVUP"), e("UVY6YP4VUxUsYVYV"), g("4VUPU7Y4YPYkYck64YUlY4UeUcUV"), f("4lU7UxUcU7UPk6PVY4UlYkUsUYUPk6Y6UxYPUYk0UcU7"), k("PVUsUUUPYkk6PPY6U4UsY4UP"), d("40YVYeU0UxVkk7444l4044UlUVYPU0UPU7Y4"), d("4PU7UYYkUsYUUPYkYVk640P4"), d("PVUcUxYUUPYkUxUcUYUeY4k6P6UxYPUYk04cU7"), g("4YUlUlUYUxUPk64YUPUsYkYVk6V6k7VPk7VVVVk7V6"), g("4VUcY4YkUcYek64c4V4sk64VUxUcUPU7Y4"), d("UsUxY6UeUsUkUPY4UcUV"), k("PU44UlYYU7UxUlUsU4UPYk"), e("7Pe0e77UcUeY7UGPhY74h0cV"), f("UsY4Y4YkPUUPYkY4UPYe"), g("7PG7eh74h0cV"), f("UVUlUlUhUcUP"), g("kPVkVk"), k("kPVkVU"), g("4VUPU7Y4UsYPYk"), g("V4UYUsU0UP"), e("PkUlUVUhYYUPUxUx"), e("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVUVs"), g("4lUVY4UlYVUeUsY6UPk6PVY4YkUPUsU0UcU7UYk6PVUPYkYUUcUVUPYV"), e("Y4Ul4Y40P4PVY4YkUcU7UY"), d("Y4UeV0kl"), d("PVYPU0UsY4YkUsP6444Uk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("P6444Uk7P6U4UU4VY4YkUx"), g("UUUcUxUxPVY4YcUxUP"), d("UGUP"), f("4sU4UlUkUPk640UcU7UYk6PVY4U4"), g("P4UlYkUVUe4eUPUxY6UPYk"), e("4UYkUsU7UhUxUcU7k64YUlY4UeUcUVk64eUPUsYUYc"), f("7Pe0e77UcUeY74hhhl7PG7eh"), g("4eUsYkU0UlU7Yck6P6UxYPUYk04cU7"), d("4YUcUYUc"), f("YUVsk7Vs"), g("4hUcU7Ulk640P4"), f("PVUcU04eUPUc"), k("4sUxUcPVPV4l4xUlUYUcU7k6Y6UxYPUYUcU7"), k("PkUPUsUxP6UxUsYcUPYkk7PkUPUsUxP6UxUsYcUPYkkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), d("PcUsU7U4UPYek6P6444Uk6PUUcUPYYUPYk"), g("4VUcY4YkUcYek6PkUPUVUPUcYUUPYkk6P6UxYPUYk0UcU7"), g("U0UsUc"), g("Y4UlY6"), d("4sUVYkUlP6444Uk7P6444U"), g("UVUsU7YUUsYVk6UsY6Uck6UPYeUVUPY6Y4UcUlU7"), d("4cU7UsUVY4UcYUUP4VUsY6Y4UcUlU7"), g("40UPU7YP"), d("Y6YkUPUVUcYVUcUlU7k6U0UPU4UcYPU0Y6k6UUUxUlUsY4Vhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6UYUxPl4UYkUsUY4VUlUxUlYkk6V0k6YUUPUVV4keYUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPkxk6V6kxk6VskcVhk6Y0"), g("PsPsVkV6VsVVk64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("4YUlUlUYUxUPk6PPY6U4UsY4UP"), k("7Pe0e77UcUeY7Ph0Gc74hGcs"), k("UP40YPYVUcUVP6UxYPUYUcU7k6444x40VU"), f("PYUPUkk64VUlU0Y6UlU7UPU7Y4YV"), e("4kUsUkYcUxUlU7k6P4UlUlUx4kUsYk"), g("4VUlUlYYUlU7k6PPY6U4UsY4UP"), k("4cU7UUUlP4UPYeY4"), f("YkU0UlUVYek7PkUPUsUxP6UxUsYcUPYkk64YVkk64VUlU7Y4YkUlUx"), d("Uc40UPYVUek6Y6UxYPUYUcU7"), e("PkUPUsUx44UlYYU7UxUlUsU4UPYkk6P6UxYPUYUcU7"), e("PVYcU0UsU7Y4UPUVk6P64h4ck64VUxUcUPU7Y4"), g("PlY6UeUsU7Y4UlU0"), g("4Y444xk64lUkUGUPUVY4k6PYUPUkk6P6UxYPUYk0UcU7k6VsVUk7V6V6"), d("YYUPUkUYUx"), k("7Pe0e77UcUeY7PG7eh74h0cV"), g("YVUVYkUPUPU7"), k("UkUlU4Yc"), f("P4Pk4c4s474Y4x4PPlPVP4Pk4cP6"), k("U7V0"), d("P4UxYYUY40UlU7Ul"), f("kYVGkY"), k("4xUlUY40UP4cU7k6P6UxYPUYUcU7k6Vsk7V6k7V6k7VcVVVP"), d("UUYPU7UVY4UcUlU7"), e("UVUlU7Y4UPYeY4k7UeUsYVUe4VUlU4UP"), k("4sYkUVUeUc4V4s44"), g("PU4PPkP44PPePlPV4e4s444PPk"), k("PPUkYPU7Y4YP"), d("4UUsUVUPUkUlUlUhk6P6UxYPUYUcU7"), e("4sUVY4UcYUUP4VUsY6Y4UcUlU7"), g("7YhheU7Ucee774h0cV"), k("40UsUxUYYPU7k64YUlY4UeUcUV"), e("47UPYYYVk64YUlY4UeUcUVk640P4"), e("4VUsY6Y4UcUlU7P4UPYeY4"), k("UsPGUkPcV6UVPeU4PYVsUPPUUUVkPPUYVVP4UeV4PVUcPkVPUGPsUhVUP6Ux4lVYU047U7Ve40Ul4xVcY64hYs4GYk4cYV4eY44YYP4UYU4PYY44Ye4VYc4kYG4s"), e("44UPUGUsPUYPk64x4Y4Vk6PVUsU7YVk640UlU7Ul"), k("4VUlY6Y6UPYkY6UxUsY4UPk64YUlY4UeUcUVk64xUcUYUeY4"), e("PVUPUYUlUPk6P6YkUcU7Y4"), g("PVUsYYUsYVU4UPUP"), d("4kUsYPUeUsYPYVk6VcVV"), f("4VUeUsUxUhU4YPYVY4UPYk"), g("4sUkUsU4Uck640P4k64VUlU7U4UPU7YVUPU4k64xUcUYUeY4"), f("4xYPUVUcU4Usk64kYkUcUYUeY4"), g("PYUcU4UPk64xUsY4UcU7"), g("UUUlU7Y4k6U4UPY4UPUVY4k6UPYkYkUlYk"), f("4hUlYGYPUhUsk64YUlY4UeUcUVk6P6YkVU47"), d("4eY4U0UxVPk6UxUlUVUsY4UcUlU7k6Y6YkUlYUUcU4UPYk"), f("44UcYUPek6P6UxYPYVk6PYUPUkk6P6UxUsYcUPYk"), f("PUUxUsU4UcU0UcYkk6PVUVYkUcY6Y4"), d("4UUcUxUPk644UlYYU7UxUlUsU4UPYkk6P6UxYPUYk0UcU7"), f("UlUk"), d("4sU4UlU4Ukk7PVY4YkUPUsU0"), d("40UPU7UxUl"), e("UVUsUxUxP6UeUsU7Y4UlU0"), k("PYUlUxUUYkUsU0k640UsY4UeUPU0UsY4UcUVUs"), e("4VUsY4UsUxUcU7Us4YYkUlYPY6k6PPY6U4UsY4UP"), k("4PYkUsYVk64kUlUxU4k64cP44V"), e("44UPYUUsUxPUPkPe4VY4YkUxk744UPYUUsUxPUPkPe4VY4YkUxk7Vs"), k("4GPV4PPVPV4c4l474c44k0PYPcPcPc"), g("7Pe0e77UcUeY7YhheU7chhcs"), k("UsU4U44kUPUeUsYUUcUlYk"), k("Y6Us"), k("4kUcY4YVY4YkUPUsU0k6PUUPYkUsk6PVUPYkUcUU"), d("keUUYPU7UVY4UcUlU7kekcYhYkUPY4YPYkU7k6VsVkVVVhY0kckekcVh"), d("Y6Uc"), d("P4UPU7UVUPU7Y4k64UP447k6Y6UxYPUYk0UcU7"), k("YkUPU0UlYUUP4VUeUcUxU4"), f("4UUlUxYek6VVk64kYkUlYYYVUPYkk6P6UxYPUYUcU7"), k("YPYVUPP6YkUlUYYkUsU0"), f("UeUlYVY4U7UsU0UP"), f("Y6UeUsU7Y4UlU0k7UcU7UGUPUVY44GYV"), f("PVUeUlUVUhYYUsYUUP4UUxUsYVUek7PVUeUlUVUhYYUsYUUP4UUxUsYVUe"), d("YkUYUkUskeVsV6Vkkxk6VkV6V4kxk6V6kxk6V6k7VYkc"), e("4sU4UkUxUlUVUhP6UxYPUYUcU7"), e("4kUsUVUhUYYkUlYPU7U4"), g("4sUY4VUlU7Y4YkUlUxk74sUY4VUlU7Y4YkUlUx"), e("P6UeUlY4Ul4VUPU7Y4UPYkP6UxYPUYUcU7Vsk7Vsk7Vkk7Vk"), g("4YYPU7UYPVUPUl"), e("YVV0"), d("U4UPUVUlU4UPPPPk4c"), g("7UcUhc7UG0GV7eeeck74h0cV"), d("7Pe0e77UcUeY7UcUh67cG0el"), d("VsVkVV"), g("YYUPUkUYUxk6UPYeUVUPY6Y4UcUlU7"), f("YkUP"), k("PY40P6UxUsYcUPYkk74l4VPe"), e("VYVkY6Ye"), f("4sY6Y6PYUlYkUhYVY6UsUVUP"), d("4eUcUYUeUxUcUYUeY4"), e("U4UlUVYPU0UPU7Y4"), d("PcUsU7U4UPYek640UPU4UcUsk6P6UxYPUYUcU7"), e("4PPV47k64xUsYPU7UVUek640UlYGUcUxUxUsk6P6UxYPUYUcU7"), d("VYV6Y6Yek6kY4sYkUcUsUxkY"), k("UcU7UGUPUVY44GYV"), g("4xUlU0Us"), d("4kUcY44VUlU0UPY44sUYUPU7Y4"), f("4VUsUxUcUkYkUc"), f("4kUlUlUhU0UsU7k64lUxU4k6PVY4YcUxUP"), d("YVUPYVYVUcUlU7PVY4UlYkUsUYUP"), f("PPY4UlY6UcUs"), k("UVUlU0Y6UcUxUPPVUeUsU4UPYk"), e("UPYVUVUsY6UP"), d("PVUVYkUlUxUxUkUsYk"), g("PYUcU7U4UlYY"), d("VsV4VYV4V4U4VcVPVVVeVVUVU4VVV6VYVP444sV4Vk4VVcVVUV44Us4sUPVYV4VUVP4V4U4sVPUU4VV64kVcVV4kVs"), d("7ccGhU74hcGU"), d("4hUsYVY6UPYkYVUhYck6P6UsYVYVYYUlYkU4k640UsU7UsUYUPYk"), e("40UcU7UY4xUcPPk04PYeY44k"), d("UYUPY4k6YVYcYVY4UPU0k6UVUlUxUlYkYVk6UPYeUVUPY6Y4UcUlU7"), d("PVUhYcY6UPk744UPY4UPUVY4UcUlU7"), k("4UUcUxUP4xUsUkk6Y6UxYPUYUcU7"), e("U7Y64sP64ck6P6UxYPUYUcU7"), g("U7UlY4PlUPYeUcYVY4PlUeUlYVY4"), e("VkU4"), d("4sUVY4UcYUUPPe4lUkUGUPUVY4"), k("44UlY4YPU0"), d("P6444Uk0Pe4VUeUsU7UYUPk6PUUcUPYYUPYk"), d("P640UcU7UY4xUcPP"), k("UVUlUxUlYk44UPY6Y4Ue")],
            c = [f("47UlUhUcUsk6PVYPUcY4UPk64PU7UsUkUxUPYkk6P6UxYPUYUcU7"), k("PkUPUsUxPUUcU4UPUlk7PkUPUsUxPUUcU4UPUlkeY4U0kck64sUVY4UcYUUPPek64VUlU7Y4YkUlUxk6keVVVkk0UkUcY4kc"), k("40UsUYU7UPY4Ul"), e("4sU4UlUkUP4PYe40UsU74V4V44UPY4UPUVY4"), f("4YUsUkYkUcUlUxUs"), k("P6UxUsYcUkUcUxUx"), e("U7UsYUUcUYUsY4UlYk"), g("PkUsUVUeUsU7Us"), e("P4YYk64VUPU7k640P4k64VUlU7U4UPU7YVUPU4k64PYeY4YkUsk64kUlUxU4"), e("PsPs40UcU7Uc444xk6P6UxYPUYUcU7"), f("kVUUVUV6"), f("UUUcUxUxPkUPUVY4"), e("V0U7YPUxUxVhk6Y6UsY4UeV0klVhk6U4UlU0UsUcU7V0"), d("44UPUUUsYPUxY4k64kYkUlYYYVUPYkk64eUPUxY6UPYk"), d("4UYkUPU7UVUek6PVUVYkUcY6Y4k640P4"), g("7UG6eY7UGPhY74h0cV"), g("UPU7UVUlU4UPPPPk4c"), e("PPU0Y6YPYVUe"), k("UcUVY6"), f("7Pe0e77UcUeY7Yc6GP7Yele6"), k("UVYkUPUsY4UPP6YkUlUYYkUsU0"), g("U0UlU7UlYVY6UsUVUP"), k("4kYPY4Y4UlU7PVUeUsU4UlYY"), k("4kUlU4UlU7Uck640P4"), g("PVP44sP44c4VPl44Pk4sPY"), e("7chhcs74h0cV"), k("U4UlYYU7UxUlUsU4PPY6U4UsY4UPYk"), k("4sUxUcUPU4UcY4k6P6UxYPUYk04cU7"), d("P6444Uk6UcU7Y4UPUYYkUsU4Ulk6U4Ulk6PYUPUk4hUcY4"), k("YPU7UcUUUlYkU04lUUUUYVUPY4"), k("UPU7UVUlU4UPPPPk4c4VUlU0Y6UlU7UPU7Y4"), f("P6UcUVUsYVUs"), f("4sU4UlUkUPk64UUsU7UYYVUlU7UYk6PVY4U4"), k("UkUcU7U44kYPUUUUUPYk"), g("4sPU4Yk6PVUcY4UPPVUsUUUPY4Yck6Y6UxYPUYUcU7"), f("4lYkUkUcY4k644UlYYU7UxUlUsU4UPYk"), d("UVUlUxUlYk"), f("UeUcU4U4UPU7"), f("UxUlUVUsUxPVY4UlYkUsUYUP"), e("4YUlUlUYUxUPk6P4UsUxUhk64PUUUUUPUVY4YVk6P6UxYPUYUcU7"), d("UcU7U4UPYeUPU4444k"), g("4xYPUVUcU4Usk64UUsYe"), g("4sU0UsYGUlU740P6VV44UlYYU7UxUlUsU4UPYkP6UxYPUYUcU7"), k("UVYkUPUsY4UP4kYPUUUUUPYk"), f("4VUsYVY4UPUxUxUsYk"), k("UxUcU7UhP6YkUlUYYkUsU0"), f("4VUsUxUcUUUlYkU7UcUsU7k64U4k"), f("P4UeYkUPUP444eUcUYUeUxUcUYUeY4"), g("UVYkUPUsY4UPPVUeUsU4UPYk"), f("4YYPUxUcU0"), f("47YcYe4xUsYPU7UVUeUPYk"), d("PcUlYPP4YPUkUPk6P6UxYPUYk0UcU7"), e("7UGPhY74h0cVPl4Y4kVkVVVsVk"), g("PVPY4VY4Uxk7PVPY4VY4Ux"), f("4YUlUlUYUxUPk64PUsYkY4Uek6P6UxYPUYk0UcU7"), k("PsPs44UlYYU7UxUlUsU4k6P6UxYPUYUcU7"), k("k7U0YPYVUcUVk7VsVUVVk7UVUlU0Vhk7UcUYUsU0UPk7VsVUVVk7UVUlU0Vhk7U0YPYVUcUVk7UeYGk7U7UPY4UPUsYVUPk7UVUlU0"), k("47UlYkY4UlU7k64cU4UPU7Y4UcY4Yck6PVUsUUUP"), d("Y6UsYkYVUP4cU7Y4"), f("PVUcU0Y6UxUPk6P6UsYVYV"), d("4VUlUxUlU7U7Usk640P4"), k("YGUsUhUl"), k("UYUPY4PPU7UcUUUlYkU04xUlUVUsY4UcUlU7"), e("YVUeUsU4UPYkPVUlYPYkUVUP"), d("44UlYYU7UxUlUsU4UPYkYVk6Y6UxYPUYUcU7"), f("UxUlUVUsY4UcUlU7"), f("4eUPYkUlUPYVk6kUk64YUPU7UPYkUsUxYVk6UxUcYUUP"), g("YYUcU7U4UlYY"), g("PVUeUlYYUVUsYkU4k64YUlY4UeUcUV"), d("7Ph7G77eh0Gl7UG0GV7chhcs74h0cV"), e("7Pe0e77UcUeY7eGsex7UGPhY"), d("4YUcU7UYUPYk"), g("PkUlUVUh40UPUxY4k6PPY6U4UsY4UP"), f("PYUcU7U4UlYY4UYkUsU0UP"), g("UPU7UsUkUxUPPUUPYkY4UPYe4sY4Y4YkUcUk4sYkYkUsYc"), k("4hUsUVYVY44lU7UP"), d("UsY4Y4YkUcUkYPY4UPk6YUUPUVVkk6UsY4Y4YkPUUPYkY4UPYeVhk6YUUsYkYcUcU7UYk6YUUPUVVkk6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPVhk6YPU7UcUUUlYkU0k6YUUPUVVkk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6YUUlUcU4k6U0UsUcU7kekck6Yhk6k6k6YUUsYkYcUcU7P4UPYe4VUlUlYkU4UcU7UsY4UPk6V0k6UsY4Y4YkPUUPYkY4UPYek6khk6YPU7UcUUUlYkU04lUUUUYVUPY4Vhk6k6k6UYUxPlP6UlYVUcY4UcUlU7k6V0k6YUUPUVV4keUsY4Y4YkPUUPYkY4UPYekxk6V6kxk6VskcVhk6Y0"), f("P6UPYkY6UPY4YPUs"), k("UlY6UPU744UsY4UsUkUsYVUP"), f("UVUsU7YUUsYV"), d("Uc4YUPY4Y4UPYkPVUVYkUcY6Y4UsUkUxUPP6UxYPUYUcU7"), d("4cU7UUUlYkU0UsUxk6PkUlU0UsU7"), k("47UcY4YkUlk6P6444Uk6P6UxYPUYk04cU7"), g("40YVYeU0UxVkk7Pe404x4eP4P4P6"), e("7Pe0e77UcUeY7chhcs74h0cV"), f("47P64xUsYVY4P6UsYVYV"), d("P4UeYkUPUP444UUsUVUP"), f("4xUsYVY4P6UsYVYV"), f("VGVG"), k("Y6UsYkYVUP4UUxUlUsY4"), k("7Pe0e77UcUeY7ccGhU74hcGU"), d("Vhk6"), g("UYUPY44sY4Y4YkUcUk4xUlUVUsY4UcUlU7"), f("YhkYU7UsU0UPkYVG"), e("47YcUsUxUs"), f("U7UlY4PlUPYeUcYVY4PlUeUlYVY4U7UsU0UP"), f("PxkY"), g("4Y4U4s4V4Pk6P6UxYPUYUcU7"), k("YPU7U4UPUUUcU7UPU4"), d("7UcUh67PG7eh74h0cV"), g("PlUcYPYsYeUxU4U0YGYkPl"), e("Pxk7"), f("40UsY4YPYkUsk640P4k6PVUVYkUcY6Y4k64VUsY6UcY4UsUxYV"), e("4sYkUcUsUxk64kUxUsUVUh"), e("4UUsU7UYPVUlU7UY"), d("U0YY4Vk6U7UhUkUsUUUGUlYkU4k6Y6UeYVUYUxYck6UPYeYUY4k6YGYsUcYPkxk67sh0G6k6Y4Y6UeYVY4klVGklYPUeUkUYY4UcUVk7U0UlklUxUPYUYUUs"), d("4kYkUsUYUYUsU4UlUVUcUl"), f("4eUsYkU0UlU7Yck64UUcYkUPUUUlYek6P6UxYPUYUcU7"), f("P6UsUxUsUVUPk6PVUVYkUcY6Y4k640P4"), g("47UsY4UcYUUPk64VUxUcUPU7Y4"), e("YPYVUPYk4sUYUPU7Y4"), g("PsYPUcUVUhP4UcU0UPk7PsYPUcUVUhP4UcU0UP"), k("UPYeY6UPYkUcU0UPU7Y4UsUxk0YYUPUkUYUx"), f("4sPkPk4sPcPl4kPP4U4U4PPk"), f("7eehhc7Uc7cx74heh074heG07chhcs"), d("4sUxUcY6UsYck6PVUPUVYPYkUcY4Yck64VUlU7Y4YkUlUxk6VV"), d("PVUVYkUcY6Y4k640P4k64kUlUxU4"), e("kxk6kYUkYkUlYYYVUPYkP6YkUlY6kYVG"), g("P4444V4VY4Uxk7P4444V4VY4Ux"), k("YVUPUxUU"), f("4cU7UUUl4kUsUVUhUYYkUlYPU7U4"), g("P6UsU7U4Ulk6PYUPUkk6P6UxYPUYUcU7"), e("4eUsUPY4Y4UPU7YVUVUeYYUPUcUxUPYk"), d("YVY6UsU7"), g("4sUVY4UcYUUP4kUlYkU4UPYk"), k("P4UeYkUPUP444xUcUYUeY4PVUeUsU4UlYY"), g("V6VkV6Vk"), f("V6VkV6VV"), e("V6VkV6V6"), d("V6VkV6Vs"), d("PYP64ck644UPY4UPUVY4UlYkk6Vsk7V4"), g("Vhk6UPYeY6UcYkUPYVV0"), d("P4UeYkUPUP4444UsYkUhPVUeUsU4UlYY"), g("4PYeUcUUk64PYUUPYkYcYYUeUPYkUP"), d("4kUsY4Y4UxUPUxUlUYk64YUsU0UPk64xUsYPU7UVUeUPYk"), g("4cU0Y6UsUVY4"), k("PU4x4Vk640YPUxY4UcU0UPU4UcUsk6P6UxYPUYUcU7"), d("4sU4UlUkUPk64eUPUkYkUPYY"), e("4kUxYPUPPVY4UsUVUhYVk64cU7YVY4UsUxUxk644UPY4UPUVY4UlYk"), d("YYYYYYU0U0U0U0U0U0U0U0U0U0UxUxUc"), d("UeUcYVY4UlYkYc"), g("YVUsU7YVk0YVUPYkUcUU"), g("P6UsY6YcYkYPYV"), d("4kYPY4Y4UlU7P4UPYeY4"), k("V6VkVsVs"), f("4sY6Y6PPY6"), g("P6UsYkUlU0k7P4PUk6Y6UxUsYcUPYkk6Y6UxYPUYUcU7"), k("44UPUsUxP6UxYc4xUcYUUPk6PPY6U4UsY4UP"), f("4xUlUeUcY4k64YYPUGUsYkUsY4Uc"), d("4UPk4s4Y404P47P4PlPV4e4s444PPk"), d("4sUYUPU7UVYck64U4k"), e("40UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYkk740UsUVYkUlU0UPU4UcUs4UUxUsYVUeP6UsY6UPYk"), d("kVkVkV"), f("PYUlYkU44VUsY6Y4YPYkUPPe"), k("UYUPY44VUlU0Y6YPY4UPU4PVY4YcUxUP"), e("Y6UxUsY4UUUlYkU0"), e("V6VsV6VP"), g("4sYkUsUkUcUVk6P4YcY6UPYVUPY4Y4UcU7UY"), e("V6VsV6VU"), e("V6VsV6VV"), d("7Pe0e77UcUeY74heG07PG7eh"), g("V6VsV6V4"), f("V6VsV6Vs"), g("V6VsV6Vk"), f("V6VsV6V6"), k("V6VsV6VY"), k("4kYPY4Y4UlU74eUcUYUeUxUcUYUeY4"), k("YUUPYkY4UPYe4sY4Y4YkUcUkP6UlUcU7Y4UPYk"), e("V6VsV6Ve"), k("Y4UPYeY44kUsYVUPUxUcU7UP"), e("kVV6VUVc"), f("U4UlYPUkUxUPP4YYUcYVY4k6PYUPUkk6P6UxYPUYUcU7"), g("YPU7UPYVUVUsY6UP"), g("P4UeYPU7U4UPYkk644UsY64VY4YkUxk647P64sP64ck6P6UxYPUYUcU7"), d("4kUsY4UsU7UY"), d("444U4hUsUck0PV4k"), g("PVU7UsY6k64cP44V")],
            Ja = [e("40UlUlUx4kUlYkUsU7")];
        (function() {
            var a = [82, 73, 50, 30, 45, 29, 28, 16, 82, 41, 77, 5, 27, 92, 27, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, 11, -11, 2563907772, 12, -12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, 18, -18, 19, -19, 20, -20, 21, -21, -22, 22, 23, -23, 24, -24, -25, 25, -26, 26, 27, -27, 28, -28, 29, -29, -30, 30, 31, -31, -32, 32, -33, 33, -34, 34, -35, 35, -37, -36, 36, 37, -38, 39, -39, 38, -41, 41, 40, -40, 42, -43, 43, -42, -45, 45, -44, 44, -46, 47, 46, -47, 48, -48, 49, -49, 50, -51, 51, -50, 570562233, 53, -52, -53, 52, 55, 54, -54, -55, 503444072, -57, -56, 57, 56, 58, -59, -58, 59, 60, 61, -61, -60, 62, 63, -63, -62, -66, 711928724, 64, -67, 66, 65, -64, -65, 67, -69, 68, 69, 70, -70, -68, -71, 71, -72, 3686517206, -75, -74, 75, 73, 72, 74, -73, 79, 76, -76, 77, -79, -78, 78, -77, 3554079995, 82, -80, 80, -83, -82, 81, -81, 83, -85, -84, -86, 86, 84, 85, 87, -87, -91, 90, 88, 89, -88, -90, 91, -89, 95, 94, -92, -95, 93, -94, -93, 92, -99, 99, -96, 98, -97, -98, 96, 97, -101, 3272380065, 100, -103, 101, 102, -102, -100, 103, 107, -105, 104, 106, 105, -106, -104, -107, 111, 108, 110, 109, -108, -110, -109, -111, 251722036, -114, 115, 113, 112, 114, -115, -112, -113, -118, 118, -116, -119, 116, 117, -117, 119, 123, 120, 122, 121, -120, -122, -121, -123, 125, 127, 3412177804, 126, 124, -125, -126, -124, -127, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 174e4, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 18e5, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
            (function() {
                function d(b, c) {
                    if (null == b) return null;
                    for (var l = x(c), f = [], g = b.length, e = a[15]; e < g; e++) f.push(Y(b[e], l++));
                    return f
                }

                function f(b) {
                    if (null == b) return null;
                    for (var c = [], l = a[15], d = b.length; l < d; l++) {
                        var g = b[l];
                        c[l] = Ka[(g >>> a[23] & a[56]) * a[58] + (g & a[56])]
                    }
                    return c
                }

                function g(h) {
                    var c = [];
                    if (null == h || void 0 == h || h.length == a[15]) return za(L);
                    if (h.length >= L) {
                        var c = a[15],
                            l = [];
                        if (null != h && h.length != a[15]) {
                            if (h.length < L) throw Error(b[134]);
                            for (var d = a[15]; d < L; d++) l[d] = h[c + d]
                        }
                        return l
                    }
                    for (l = a[15]; l < L; l++) c[l] = h[l % h.length];
                    return c
                }

                function e(h) {
                    var c = a[405];
                    if (null != h)
                        for (var l = a[15]; l < h.length; l++) c = c >>> a[38] ^ La[(c ^ h[l]) & a[299]];
                    h = Aa(c ^ a[405]);
                    c = h.length;
                    if (null == h || c < a[15]) h = new String(b[0]);
                    else {
                        for (var l = [], d = a[15]; d < c; d++) l.push(Ma(h[d]));
                        h = l.join(b[0])
                    }
                    return h
                }

                function k(h, c, l) {
                    var d, f = [b[70], b[85], b[118], b[73], b[77], b[106], b[80], b[116], b[44], b[42], b[62], b[114], b[93], b[105], b[40], b[64], b[103], b[86], b[99], b[141], b[48], b[89], b[76], b[69], b[132], b[47], b[88], b[33], b[43], b[45], b[78], b[53], b[110], b[50], b[68], b[101], b[52], b[41], b[138], b[133], b[66], b[129], b[108], b[81], b[140], b[90], b[117], b[63], b[107], b[91], b[135], b[115], b[113], b[97], b[60], b[61], b[137], b[126], b[83], b[79], b[119], b[71], b[123], b[75]],
                        g = b[74],
                        e = [];
                    if (l == a[541]) l = h[c], d = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(g), e.push(g);
                    else if (l == a[16]) l = h[c], d = h[c + a[541]], h = a[15], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(g);
                    else if (l == a[19]) l = h[c], d = h[c + a[541]], h = h[c + a[16]], e.push(f[l >>> a[16] & a[153]]), e.push(f[(l << a[23] & a[122]) + (d >>> a[23] & a[56])]), e.push(f[(d << a[16] & a[148]) + (h >>> a[30] & a[19])]), e.push(f[h & a[153]]);
                    else throw Error(b[111]);
                    return e.join(b[0])
                }

                function za(b) {
                    for (var c = [], l = a[15]; l < b; l++) c[l] = a[15];
                    return c
                }

                function Z(h, c, l, d, f) {
                    if (null != h && h.length != a[15]) {
                        if (null == l) throw Error(b[131]);
                        if (h.length < f) throw Error(b[134]);
                        for (var e = a[15]; e < f; e++) l[d + e] = h[c + e]
                    }
                }

                function Aa(b) {
                    var c = [];
                    c[0] = b >>> a[74] & a[299];
                    c[1] = b >>> a[58] & a[299];
                    c[2] = b >>> a[38] & a[299];
                    c[3] = b & a[299];
                    return c
                }

                function ma(h) {
                    if (null == h || void 0 == h) return h;
                    h = encodeURIComponent(h);
                    for (var c = [], l = h.length, d = a[15]; d < l; d++)
                        if (h.charAt(d) == b[27])
                            if (d + a[16] < l) c.push(Na(h.charAt(++d) + b[0] + h.charAt(++d))[0]);
                            else throw Error(b[146]);
                    else c.push(h.charCodeAt(d));
                    return c
                }

                function Na(b) {
                    if (null == b || b.length == a[15]) return [];
                    b = new String(b);
                    for (var c = [], l = b.length / a[16], d = a[15], f = a[15]; f < l; f++) {
                        var e = parseInt(b.charAt(d++), a[58]) << a[23],
                            g = parseInt(b.charAt(d++), a[58]);
                        c[f] = x(e + g)
                    }
                    return c
                }

                function Ma(c) {
                    var d = [];
                    d.push(aa[c >>> a[23] & a[56]]);
                    d.push(aa[c & a[56]]);
                    return d.join(b[0])
                }

                function na(b, c) {
                    if (null == b || null == c || b.length != c.length) return b;
                    for (var d = [], f = a[15], e = b.length; f < e; f++) d[f] = Y(b[f], c[f]);
                    return d
                }

                function Y(a, b) {
                    a = x(a);
                    b = x(b);
                    return x(a ^ b)
                }

                function Oa(a, b) {
                    return x(a + b)
                }

                function x(c) {
                    if (c < a[290]) return x(a[291] - (a[290] - c));
                    if (c >= a[290] && c <= a[282]) return c;
                    if (c > a[282]) return x(a[292] + c - a[282]);
                    throw Error(b[136])
                }

                function Pa(h) {
                    function d() {
                        for (var h = [b[282], c[32], c[137], b[221], c[150], b[36], c[157], c[103], c[174], b[280], b[18], b[303], c[23], b[338], c[106], b[181], b[337], c[46], c[44], b[112], b[210], b[194], b[281], c[60], b[277], b[276], b[160], c[175], b[356], b[198], b[297], b[98], c[104], b[184], b[223], c[14], c[4], b[226], b[127], b[92], c[49], b[318], c[122], b[67], B[5], c[135], c[81], c[75], b[228], b[286], c[148], b[335], b[283], c[41], c[2], b[272], c[102], b[293], b[348], Ja[0], b[169], B[4], b[273], b[82], c[94], c[108], c[142], c[77], c[5], b[358], c[7], b[212], b[279], c[116], b[278], c[68], b[229], c[176], b[261], c[8], b[268], c[17], b[26], b[340], b[289], b[284], b[104], c[160], b[224], b[256], b[243], b[322], b[204], c[19], b[300], c[70], c[90], b[206], b[3], b[65], c[99], b[186], b[321], b[170], b[346], c[25], b[174], b[271], c[15], b[46], c[52], c[69], c[84], b[153], b[125], c[114], b[37]], f = [], e = a[15]; e < h.length; e++) try {
                            var g = h[e];
                            l()(g) && f.push(g)
                        } catch (k) {}
                        return f.join(b[56])
                    }

                    function l() {
                        function h(a) {
                            var c = {};
                            return k.style.fontFamily = a, g.appendChild(k), c.height = k.offsetHeight, c.width = k.offsetWidth, g[b[307]](k), c
                        }
                        var d = [c[21], c[141], B[6]],
                            l = [],
                            f = c[139],
                            e = b[327],
                            g = C[b[258]],
                            k = C[b[167]](c[123]);
                        k.style.fontSize = e;
                        k.style.visibility = c[37];
                        k.innerHTML = f;
                        for (f = a[15]; f < d.length; f++) l[f] = h(d[f]);
                        return function(c) {
                            for (var f = a[15]; f < l.length; f++) {
                                var e = h(c + b[34] + d[f]),
                                    g = l[f];
                                if (e.height !== g.height || e.width !== g.width) return !0
                            }
                            return !1
                        }
                    }

                    function f() {
                        var a = null,
                            h = null,
                            d = [];
                        try { h = C[b[167]](c[79]), a = h[B[7]](b[255]) || h[B[7]](c[112]) } catch (l) {}
                        if (!a) return d;
                        try { d.push(a[b[20]]()) } catch (g) {}
                        try { d.push(e(a, h)) } catch (k) {}
                        return d.join(b[56])
                    }

                    function e(h, d) {
                        try {
                            var f = c[76],
                                l = b[240],
                                g = h[c[43]]();
                            h[c[33]](h[c[113]], g);
                            var k = new Float32Array([a[432], a[488], a[15], a[428], a[453], a[15], a[15], a[468], a[15]]);
                            h.bufferData(h[c[113]], k, h[c[24]]);
                            g.k = a[19];
                            g.l = a[19];
                            var t = h[c[20]](),
                                X = h[c[48]](h[b[267]]);
                            h[c[63]](X, f);
                            h[b[341]](X);
                            var la = h[c[48]](h[c[149]]);
                            return h[c[63]](la, l), h[b[341]](la), h[b[177]](t, X), h[b[177]](t, la), h[c[45]](t), h[b[309]](t), t.n = h[c[92]](t, b[205]), t.m = h[c[62]](t, c[29]), h[c[74]](t.o), h[c[167]](t.n, g.k, h.FLOAT, !a[541], a[15], a[15]), h[J[0]](t.m, a[541], a[541]), h[b[139]](h[b[259]], a[15], g.l), M(d[b[149]]())
                        } catch ($a) {
                            return b[324]
                        }
                    }

                    function g() {
                        var h = C[b[167]](b[155]),
                            d = [],
                            f = [c[124], b[270], b[328], b[315], b[192], c[166], c[22], c[143], b[274], b[1], b[329], b[154], b[161], b[238], b[49], c[120], b[248], b[239], b[156], b[343], c[132], c[86], c[47], c[125], b[32], b[344], c[73], b[150]];
                        if (!window[c[154]]) return d.join(b[0]);
                        for (var l = a[15]; l < f.length; l++) try { C[b[258]].appendChild(h), h.style.color = f[l], d.push(f[l]), d.push(window[c[154]](h).getPropertyValue(c[36])), C[b[258]][b[307]](h) } catch (e) { d.push(b[349]) }
                        return d.join(b[54])
                    }

                    function k() {
                        try {
                            var h = C[b[167]](c[79]),
                                d = h[B[7]](b[354]),
                                f = c[105];
                            d[c[169]] = b[235];
                            d[b[145]] = b[333];
                            d[c[169]] = b[202];
                            d[b[219]] = c[10];
                            d[c[11]](a[281], a[541], a[152], a[66]);
                            d[b[219]] = c[170];
                            d.fillText(f, a[16], a[56]);
                            d[b[219]] = b[313];
                            d.fillText(f, a[23], a[60]);
                            return h[b[149]]()
                        } catch (l) {
                            return b[237]
                        }
                    }

                    function m() {
                        try {
                            return window[b[355]] && n.h ? q() : r()
                        } catch (a) {
                            return b[31]
                        }
                    }

                    function r() {
                        if (!y[b[4]]) return b[0];
                        var h = [b[211], b[314], c[3], b[5], b[183], c[27], c[115], b[230], c[42], b[157], c[145], b[266], c[34], b[246], c[134], b[336], b[189], c[138], b[296], b[201], b[158], b[233], b[247], c[147], c[13], b[55], b[288], b[173], c[171], c[64], c[26], b[244], b[332], b[187], c[133], b[269], b[290], b[351], b[176], b[308], b[39], b[254], c[97], c[71], b[72], b[7], c[54], b[200], c[39], b[242], c[107], b[225], c[66], b[188], b[287], b[190], c[80], b[250], b[347], c[87], b[263], b[213], b[109], b[95], B[1], c[109], c[82], c[0], c[57], b[352], c[85], B[3], b[166], c[50], b[214], b[195], c[35], c[121], c[146], c[28], b[357], b[317], c[31], b[178], b[241], c[55], c[9], b[96], b[251], b[94], c[72], b[196], b[23], b[102], b[84], b[148], b[199], c[59], b[16], b[217], b[252], b[306], c[173], b[222], b[15], b[58], b[203], b[8], c[136], b[245], b[17], b[51], b[295], c[153], c[130], b[331], b[232], c[51], c[61]],
                            d = [],
                            f = {};
                        d.push(p(y[b[4]], function(h) {
                            f[h.name] = a[541];
                            var d = p(h, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [h.name, h.description, d].join(c[88])
                        }, this).join(b[25]));
                        d.push(p(h, function(a) {
                            if (f[a]) return b[0];
                            a = y[b[4]][a];
                            if (!a) return b[0];
                            var h = p(a, function(a) {
                                return [a.type, a.suffixes].join(b[144])
                            }).join(b[34]);
                            return [a.name, a.description, h].join(c[88])
                        }, this).join(b[56]));
                        return d.join(b[56])
                    }

                    function q() {
                        return window[b[355]] ? p([b[236], b[292], b[316], b[298], c[151], b[197], c[83], b[218], c[111], b[175], b[249], b[100], b[162], b[231], c[1], b[249], b[102], b[148], b[312], c[53], b[350], c[118], b[326]], function(a) {
                            try {
                                return new window[b[355]](a), a
                            } catch (h) {
                                return null
                            }
                        }).join(b[56]) : b[0]
                    }

                    function p(a, b, h) {
                        var c = [];
                        if (null == a) return c;
                        if (I && a.map === I) return a.map(b, h);
                        E(a, function(a, d, f) { c[c.length] = b.call(h, a, d, f) });
                        return c
                    }

                    function E(b, h) {
                        if (null !== b)
                            if (z && b.forEach === z) b.forEach(h, void 0);
                            else if (b.length === +b.length)
                            for (var c = a[15], d = b.length; c < d && h.call(void 0, b[c], c, b) !== {}; c++);
                        else
                            for (c in b)
                                if (b.hasOwnProperty(c) && h.call(void 0, b[c], c, b) === {}) break
                    }
                    var z = Array.prototype.forEach,
                        I = Array.prototype.map,
                        n = { e: M, j: !0, i: !0, h: !0, b: !0, a: !0 };
                    typeof h == b[264] ? n.e = h : (null != h.b && void 0 != h.b && (n.b = h.b), null != h.a && void 0 != h.a && (n.a = h.a));
                    this.get = function() {
                        var h = [],
                            l = [];
                        if (Qa) {
                            var e;
                            try { e = !!window[b[339]] } catch (X) { e = !0 }
                            h.push(e);
                            var p;
                            try { p = !!window[c[38]] } catch (z) { p = !0 }
                            h.push(p);
                            h.push(!!window[c[40]]);
                            C[b[258]] ? h.push(typeof C[b[258]][b[301]]) : h.push("undefined");
                            h.push(typeof window[c[78]]);
                            h.push(y[b[193]]);
                            h.push(y[c[155]]);
                            if (e = n.i) try {
                                var u = C[b[167]](c[79]);
                                e = !(!u[B[7]] || !u[B[7]](b[354]))
                            } catch (r) { e = !1 }
                            if (e) try { h.push(k()), n.b && h.push(f()) } catch (E) { h.push(b[59]) }
                            h.push(g());
                            n.a && l.push(d());
                            l.push(y[c[110]]);
                            l.push(y[b[151]]);
                            l.push(window[b[257]][b[359]]);
                            n.j && (u = window[b[257]] ? [window[b[257]].height, window[b[257]].width] : [a[15], a[15]], typeof u !== c[98] && l.push(u.join(b[138])));
                            l.push((new Date)[b[128]]());
                            l.push(y[b[122]]);
                            l.push(m())
                        }
                        u = [];
                        n.e ? (u.push(n.e(h.join(c[152]))), u.push(n.e(l.join(c[152])))) : (u.push(M(h.join(c[152]))), u.push(M(l.join(c[152]))));
                        return u
                    }
                }

                function M(h) {
                    var c = a[88],
                        d, f, e, g, k, m;
                    d = h.length & a[19];
                    f = h.length - d;
                    e = c;
                    c = a[21];
                    g = a[375];
                    for (m = a[15]; m < f;) k = h.charCodeAt(m) & a[299] | (h.charCodeAt(++m) & a[299]) << a[38] | (h.charCodeAt(++m) & a[299]) << a[58] | (h.charCodeAt(++m) & a[299]) << a[74], ++m, k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k, e = e << a[50] | e >>> a[64], e = (e & a[486]) * a[26] + (((e >>> a[58]) * a[26] & a[486]) << a[58]) & a[405], e = (e & a[486]) + a[394] + (((e >>> a[58]) + a[435] & a[486]) << a[58]);
                    k = a[15];
                    switch (d) {
                        case a[19]:
                            k ^= (h.charCodeAt(m + a[16]) & a[299]) << a[58];
                        case a[16]:
                            k ^= (h.charCodeAt(m + a[541]) & a[299]) << a[38];
                        case a[541]:
                            k ^= h.charCodeAt(m) & a[299], k = (k & a[486]) * c + (((k >>> a[58]) * c & a[486]) << a[58]) & a[405], k = k << a[56] | k >>> a[60], k = (k & a[486]) * g + (((k >>> a[58]) * g & a[486]) << a[58]) & a[405], e ^= k
                    }
                    e ^= h.length;
                    e ^= e >>> a[58];
                    e = (e & a[486]) * a[407] + (((e >>> a[58]) * a[407] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[50];
                    e = (e & a[486]) * a[349] + (((e >>> a[58]) * a[349] & a[486]) << a[58]) & a[405];
                    e ^= e >>> a[58];
                    h = e >>> a[15];
                    d = [];
                    d.push(h);
                    try {
                        for (var r, B = h + b[0], p = a[15], E = a[15], z = a[15]; z < B.length; z++) try {
                            var q = parseInt(B.charAt(z) + b[0]),
                                p = q || q === a[15] ? p + q : p + a[541];
                            E++
                        } catch (n) { p += a[541], E++ }
                        E = E == a[15] ? a[541] : E;
                        r = ba(p * a[541] / E, N);
                        for (var x, C = Math.floor(r / Math.pow(a[43], N - a[541])), G = h + b[0], w = a[15], D = a[15], H = a[15], u = a[15], F = a[15]; F < G.length; F++) try {
                            var v = parseInt(G.charAt(F) + b[0]);
                            v || v === a[15] ? v < C ? (D++, w += v) : (u++, H += v) : (u++, H += C)
                        } catch (A) { u++, H += C }
                        u = u == a[15] ? a[541] : u;
                        D = D == a[15] ? a[541] : D;
                        x = ba(H * a[541] / u - w * a[541] / D, T);
                        d.push(ca(r, N, b[41]));
                        d.push(ca(x, T, b[41]))
                    } catch (y) { d = [], d.push(h), d.push(U(N, b[35]).join(b[0])), d.push(U(T, b[35]).join(b[0])) }
                    return d.join(b[0])
                }

                function ba(h, c) {
                    if (h < a[15] || h >= a[43]) throw Error(b[30]);
                    for (var d = U(c, b[41]), e = b[0] + h, f = a[15], g = a[15]; f < d.length && g < e.length; g++) e.charAt(g) != b[38] && (d[f++] = e.charAt(g));
                    return parseInt(d.join(b[0]))
                }

                function ca(a, c, d) {
                    a = b[0] + a;
                    if (a.length > c) throw Error(b[87]);
                    if (a.length == c) return a;
                    for (var e = [], f = a.length; f < c; f++) e.push(d);
                    e.push(a);
                    return e.join(b[0])
                }

                function U(b, c) {
                    if (b <= a[15]) return [a[15]];
                    for (var d = [], e = a[15]; e < b; e++) d.push(c);
                    return d
                }

                function r(a) {
                    return null == a || void 0 == a
                }

                function m(a, b, c) {
                    this.f = a;
                    this.c = b;
                    this.g = r(c) ? !0 : c
                }

                function Ra(a) {
                    if (r(a) || r(a.f) || r(a.c)) return !1;
                    try {
                        if (r(window[a.f])) return !1
                    } catch (b) {
                        return !1
                    }
                    return !0
                }

                function v(c, d) {
                    if (r(c)) return b[0];
                    for (var e = a[15]; e < c.length; e++) {
                        var f = c[e];
                        if (!r(f) && f.f == d) return f
                    }
                }

                function da() {
                    var h;
                    a: {
                        if (!r(q))
                            for (h = a[15]; h < q.length; h++) {
                                var d = q[h];
                                if (d.g && !Ra(d)) {
                                    h = d;
                                    break a
                                }
                            }
                        h = null
                    }
                    var e;
                    if (r(h)) {
                        try { e = window.parseFloat(b[180]) === a[384] && window.isNaN(window.parseFloat(b[163])) } catch (f) { e = !1 }
                        if (e) {
                            var g;
                            try { g = window.parseInt(b[323]) === a[273] && window.isNaN(window.parseInt(b[163])) } catch (k) { g = !1 }
                            if (g) {
                                var m;
                                try { m = window.decodeURI(b[208]) === b[24] } catch (C) { m = !1 }
                                if (m) {
                                    var x;
                                    try { x = window.decodeURIComponent(b[209]) === b[28] } catch (F) { x = !1 }
                                    if (x) {
                                        var p;
                                        try { p = window.encodeURI(b[24]) === b[208] } catch (E) { p = !1 }
                                        if (p) {
                                            var z;
                                            try { z = window.encodeURIComponent(b[28]) === b[209] } catch (I) { z = !1 }
                                            if (z) {
                                                var n;
                                                try { n = window.escape(b[28]) === b[209] } catch (A) { n = !1 }
                                                if (n) {
                                                    var y;
                                                    try { y = window.unescape(b[209]) === b[28] } catch (G) { y = !1 }
                                                    if (y) {
                                                        var w;
                                                        try { w = window.eval(b[304]) === a[273] } catch (D) { w = !1 }
                                                        e = w ? null : v(q, b[171])
                                                    } else e = v(q, c[172])
                                                } else e = v(q, b[342])
                                            } else e = v(q, c[30])
                                        } else e = v(q, c[16])
                                    } else e = v(q, B[2])
                                } else e = v(q, b[320])
                            } else e = v(q, c[58])
                        } else e = v(q, c[89])
                    } else e = h;
                    return e
                }

                function Sa() {
                    var a = da();
                    if (!r(a)) return a.c;
                    try { a = r(window[b[168]]) || r(window[b[168]][b[334]]) ? null : v(q, b[311]) } catch (c) { a = null }
                    if (!r(a)) return a.c;
                    try { a = r(context) || r(context[b[185]]) ? null : v(q, b[265]) } catch (d) { a = null }
                    return r(a) ? null : a.c
                }

                function Ba(c) {
                    for (var d = [], e = a[15]; e < c; e++) {
                        var f = Math.random() * Ta,
                            f = Math.floor(f);
                        d.push(ea.charAt(f))
                    }
                    return d.join(b[0])
                }

                function P(h) {
                    for (var d = (C[b[207]] || b[0]).split(c[91]), e = a[15]; e < d.length; e++) {
                        var f = d[e].indexOf(b[57]);
                        if (f >= a[15]) {
                            var g = d[e].substring(f + a[541], d[e].length);
                            if (d[e].substring(a[15], f) == h) return window.decodeURIComponent(g)
                        }
                    }
                    return null
                }

                function Ca(h) {
                    var d = [b[135], b[182], b[133], b[108], b[159], b[165], c[18]],
                        e = b[0];
                    if (null == h || void 0 == h) return h;
                    if (typeof h == [b[291], b[220], b[121]].join(b[0])) {
                        for (var e = e + b[142], f = a[15]; f < d.length; f++)
                            if (h.hasOwnProperty(d[f])) {
                                var g = b[29] + d[f] + b[262],
                                    k;
                                k = b[0] + h[d[f]];
                                k = null == k || void 0 == k ? k : k.replace(/'/g, c[96]).replace(/"/g, b[24]);
                                e += g + k + b[191]
                            }
                        e.charAt(e.length - a[541]) == b[34] && (e = e.substring(a[15], e.length - a[541]));
                        return e += b[143]
                    }
                    return null
                }

                function oa(a, d, e, f) {
                    var g = [];
                    g.push(a + b[57] + encodeURIComponent(d));
                    e && (a = new Date, a = new Date(f), f = a[b[215]](), g.push(c[91]), g.push(b[172]), g.push(b[305]), g.push(b[325]), g.push(b[319]), g.push(f));
                    g.push(c[91]);
                    g.push(b[302]);
                    g.push(b[216]);
                    null != A && void 0 != A && A != b[0] && (g.push(c[91]), g.push(b[152]), g.push(b[234]), g.push(b[260]), g.push(A));
                    C[b[207]] = g.join(b[0])
                }

                function Da(a) { window[pa] = a }

                function Ea(a) { window[qa] = a }

                function Fa(c, d) {
                    for (var e = [], f = a[15]; f < d; f++) e.push(c);
                    return e.join(b[0])
                }

                function Ga(a, c) {
                    var d = P(a);
                    null !== d && void 0 !== d && d !== b[0] || oa(a, c, !1)
                }

                function ra() {
                    var a = P(V);
                    if (null == a || void 0 == a || a == b[0]) a = window[qa];
                    return a
                }

                function Ua() {
                    var a = ra();
                    if (null == a || void 0 == a || a == b[0]) return !1;
                    try {
                        return (a = parseInt(a)) && a >= fa ? !0 : !1
                    } catch (c) {
                        return !1
                    }
                }

                function ga(c) {
                    if (null == c || void 0 == c || c == b[0]) return null;
                    c = c.split(b[54]);
                    return c.length < a[16] || !/[0-9]+/gi.test(c[1]) ? null : parseInt(c[1])
                }

                function Q() {
                    var a = P(S);
                    if (null == a || void 0 == a || a == b[0]) a = window[pa];
                    return a
                }

                function Va() {
                    var c = Q();
                    if (null == c || void 0 == c || c == b[0]) return a[15];
                    c = ga(c);
                    return null == c ? a[15] : c - (sa - ta) - (new window[B[0]])[b[179]]()
                }

                function Ha(d, e) {
                    var f = new window[B[0]];
                    f[b[21]](f[b[179]]() - a[326]);
                    window[b[330]][b[207]] = null == e || void 0 == e || e == b[0] ? d + b[147] + f[b[215]]() : d + c[12] + e + c[131] + f[b[215]]()
                }

                function Ia() {
                    if (!(null == K || void 0 == K || K.length <= a[15]))
                        for (var c = a[15]; c < K.length; c++) {
                            var d = K[c];
                            (null != A && void 0 != A && A != b[0] || null != d && void 0 != d && d != b[0]) && A != d && (Ha(S, d), Ha(V, d))
                        }
                }

                function ua() {
                    Ia();
                    window[qa] = null;
                    window[pa] = null;
                    var h = !0,
                        t = { v: b[227] },
                        l = Sa();
                    l && (t[c[18]] = l);
                    l = null;
                    t[b[108]] = Wa;
                    var m = (new window[B[0]])[b[179]]() + sa,
                        r = m + a[308] * a[148] * a[148] * a[74] * a[303] * a[26];
                    t[b[133]] = Ba(a[19]) + m + Ba(a[19]);
                    try {
                        var q = (new Pa({ b: Xa, a: Ya })).get();
                        null != q && void 0 != q && q.length > a[15] ? t[b[182]] = q.join(b[34]) : (t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1)
                    } catch (C) { t[b[182]] = Fa(b[41], a[43]), t[b[159]] = b[42], h = !1 }
                    try {
                        var v = l = Ca(t),
                            t = Za;
                        if (null == t || void 0 == t) throw Error(b[120]);
                        if (null == v || void 0 == v) v = b[0];
                        var q = v,
                            y;
                        y = null == v ? e([]) : e(ma(v));
                        var A = ma(q + y),
                            p = ma(t);
                        null == A && (A = []);
                        y = [];
                        for (var E = a[15]; E < va; E++) {
                            var z = Math.random() * a[301],
                                z = Math.floor(z);
                            y[E] = x(z)
                        }
                        var p = g(p),
                            p = na(p, g(y)),
                            E = p = g(p),
                            I;
                        if (null == A || void 0 == A || A.length == a[15]) I = za(F);
                        else {
                            var n = A.length,
                                J = a[15],
                                J = n % F <= F - ha ? F - n % F - ha : F * a[16] - n % F - ha,
                                z = [];
                            Z(A, a[15], z, a[15], n);
                            for (var K = a[15]; K < J; K++) z[n + K] = a[15];
                            Z(Aa(n), a[15], z, n + J, ha);
                            I = z
                        }
                        n = I;
                        if (null == n || n.length % F != a[15]) throw Error(b[130]);
                        I = [];
                        for (var G = a[15], w = n.length / F, D = a[15]; D < w; D++) {
                            I[D] = [];
                            for (var H = a[15]; H < F; H++) I[D][H] = n[G++]
                        }
                        G = [];
                        Z(y, a[15], G, a[15], va);
                        for (var u = I.length, L = a[15]; L < u; L++) {
                            var O, M;
                            var N = I[L];
                            if (null == N) M = null;
                            else {
                                for (var T = x(a[104]), w = [], U = N.length, P = a[15]; P < U; P++) w.push(Oa(N[P], T++));
                                M = w
                            }
                            var Q;
                            w = M;
                            if (null == w) Q = null;
                            else {
                                for (var aa = x(a[143]), D = [], ba = w.length, wa = a[15]; wa < ba; wa++) D.push(Y(w[wa], aa--));
                                Q = D
                            }
                            var ca = d(Q, a[127]);
                            O = d(ca, a[36]);
                            var xa = na(O, p),
                                ia;
                            w = xa;
                            D = E;
                            if (null == w) ia = null;
                            else if (null == D) ia = w;
                            else {
                                for (var H = [], da = D.length, W = a[15], ea = w.length; W < ea; W++) H[W] = x(w[W] + D[W % da]);
                                ia = H
                            }
                            var xa = na(ia, E),
                                ja = f(xa),
                                ja = f(ja);
                            Z(ja, a[15], G, L * F + va, F);
                            E = ja
                        }
                        var ka;
                        if (null == G || void 0 == G) ka = null;
                        else if (G.length == a[15]) ka = b[0];
                        else {
                            var ya = a[19];
                            try {
                                for (var u = [], R = a[15]; R < G.length;)
                                    if (R + ya <= G.length) u.push(k(G, R, ya)), R += ya;
                                    else {
                                        u.push(k(G, R, G.length - R));
                                        break
                                    }
                                ka = u.join(b[0])
                            } catch (ra) {
                                throw Error(b[111])
                            }
                        }
                        l = ka
                    } catch (ga) { l = Ca({ ec: b[43], em: ga.message }), h = !1 }
                    l = l + b[54] + m;
                    oa(S, l, h, r);
                    Ga(S, l);
                    Da(l);
                    oa(V, fa, h, r);
                    Ga(V, fa);
                    Ea(fa);
                    window[b[124]] && window[b[124]](ua, ta)
                }
                m.prototype = {
                    toString: function() {
                        return c[93] + this.f + b[164] + this.c + c[117] + this.g + b[143]
                    }
                };
                var q = [new m(c[67], b[13]), new m(b[330], b[14]), new m(c[6], b[11]), new m(c[65], b[12]), new m(c[140], b[10]), new m(b[257], b[9]), new m(b[2], b[19]), new m(b[235], b[22]), new m(c[119], b[6]), new m(c[89], c[164]), new m(c[58], c[162]), new m(b[320], c[163]), new m(B[2], c[159]), new m(c[16], c[161]), new m(c[30], c[156]), new m(b[342], c[158]), new m(c[172], c[165]), new m(b[171], c[168]), new m(b[253], c[128], !1), new m(b[294], c[129], !1), new m(b[168], c[126], !1), new m(b[311], c[127], !1), new m(b[265], c[144], !1)],
                    Qa = da() ? !1 : !0,
                    Wa = window && window[c[65]] && window[c[65]].host || b[353],
                    C = window[b[330]],
                    y = window[c[6]],
                    N = a[16],
                    T = a[16],
                    aa = [b[41], b[42], b[43], b[44], b[45], b[47], b[48], b[50], b[52], b[53], b[97], b[99], b[101], b[103], b[105], b[106]],
                    La = [a[15], a[377], a[383], a[522], a[449], a[316], a[495], a[343], a[462], a[542], a[310], a[461], a[496], a[464], a[415], a[40], a[455], a[363], a[533], a[402], a[438], a[293], a[366], a[511], a[491], a[493], a[476], a[333], a[539], a[412], a[297], a[427], a[474], a[29], a[369], a[503], a[325], a[353], a[546], a[390], a[420], a[440], a[174], a[442], a[306], a[501], a[469], a[336], a[508], a[331], a[482], a[355], a[358], a[400], a[379], a[528], a[525], a[459], a[423], a[34], a[408], a[520], a[319], a[446], a[471], a[437], a[47], a[417], a[548], a[506], a[463], a[312], a[320], a[256], a[345], a[498], a[380], a[395], a[523], a[385], a[416], a[537], a[429], a[298], a[497], a[487], a[335], a[478], a[300], a[433], a[513], a[367], a[368], a[451], a[404], a[534], a[504], a[295], a[337], a[470], a[443], a[413], a[445], a[190], a[354], a[317], a[391], a[547], a[33], a[466], a[505], a[370], a[521], a[398], a[447], a[321], a[460], a[517], a[37], a[424], a[403], a[350], a[529], a[381], a[334], a[499], a[356], a[483], a[481], a[332], a[452], a[490], a[296], a[431], a[341], a[419], a[536], a[401], a[516], a[362], a[365], a[515], a[479], a[304], a[314], a[458], a[139], a[540], a[414], a[53], a[309], a[473], a[387], a[519], a[388], a[374], a[494], a[348], a[340], a[324], a[426], a[28], a[527], a[456], a[318], a[450], a[389], a[526], a[485], a[352], a[510], a[329], a[378], a[532], a[342], a[409], a[283], a[441], a[421], a[436], a[467], a[339], a[130], a[509], a[372], a[502], a[475], a[22], a[545], a[397], a[307], a[360], a[514], a[364], a[302], a[347], a[399], a[535], a[361], a[328], a[430], a[294], a[418], a[382], a[330], a[480], a[489], a[32], a[346], a[492], a[322], a[359], a[518], a[386], a[373], a[410], a[51], a[411], a[472], a[323], a[457], a[313], a[538], a[305], a[531], a[376], a[406], a[344], a[351], a[484], a[327], a[512], a[448], a[315], a[524], a[392], a[24], a[425], a[454], a[530], a[393], a[544], a[357], a[311], a[500], a[371], a[17], a[477], a[338], a[465], a[507], a[157], a[439], a[232], a[434], a[422]],
                    Ka = [a[76], a[182], a[199], a[231], a[165], a[156], a[75], a[207], a[166], a[19], a[158], a[223], a[191], a[102], a[35], a[94], a[126], a[127], a[248], a[192], a[56], a[66], a[284], a[274], a[82], a[110], a[257], a[258], a[175], a[275], a[86], a[215], a[224], a[95], a[167], a[168], a[193], a[233], a[64], a[285], a[159], a[70], a[153], a[240], a[208], a[45], a[173], a[241], a[140], a[83], a[65], a[103], a[152], a[135], a[194], a[209], a[144], a[38], a[276], a[46], a[114], a[265], a[68], a[131], a[106], a[242], a[243], a[225], a[136], a[71], a[132], a[145], a[128], a[183], a[60], a[44], a[286], a[118], a[266], a[72], a[90], a[18], a[267], a[200], a[73], a[123], a[169], a[111], a[137], a[115], a[244], a[277], a[98], a[216], a[74], a[26], a[124], a[282], a[27], a[133], a[259], a[281], a[31], a[217], a[249], a[41], a[96], a[78], a[23], a[160], a[176], a[184], a[250], a[201], a[119], a[226], a[62], a[16], a[251], a[59], a[48], a[227], a[148], a[129], a[116], a[290], a[170], a[107], a[99], a[234], a[87], a[134], a[245], a[210], a[84], a[235], a[195], a[260], a[91], a[261], a[92], a[211], a[100], a[80], a[262], a[268], a[112], a[185], a[218], a[79], a[122], a[269], a[104], a[120], a[177], a[20], a[263], a[149], a[61], a[77], a[154], a[36], a[150], a[125], a[89], a[219], a[101], a[252], a[113], a[141], a[121], a[220], a[273], a[186], a[253], a[178], a[202], a[246], a[108], a[187], a[81], a[117], a[49], a[203], a[30], a[264], a[270], a[142], a[271], a[212], a[138], a[52], a[221], a[88], a[109], a[222], a[143], a[236], a[54], a[97], a[272], a[287], a[541], a[228], a[247], a[146], a[63], a[278], a[67], a[254], a[161], a[15], a[543], a[213], a[204], a[214], a[188], a[179], a[196], a[58], a[229], a[288], a[237], a[55], a[279], a[162], a[50], a[155], a[289], a[69], a[197], a[180], a[280], a[151], a[93], a[230], a[181], a[39], a[85], a[238], a[105], a[25], a[255], a[171], a[189], a[42], a[198], a[57], a[163], a[164], a[205], a[239], a[172], a[206], a[147], a[43]],
                    F = a[158],
                    L = a[158],
                    ha = a[23],
                    va = a[23],
                    d = function(b, c) {
                        if (null == b) return null;
                        for (var d = x(c), e = [], f = b.length, g = a[15]; g < f; g++) e.push(Y(b[g], d++));
                        return e
                    },
                    Za = b[345],
                    S = b[299],
                    V = c[100],
                    fa = a[91],
                    ea = b[275],
                    Ta = ea.length,
                    sa = a[444],
                    ta = a[396],
                    Ya = !1,
                    Xa = !1,
                    O = window && window[c[65]] && window[c[65]][b[310]] || c[95],
                    A = c[56],
                    A = function(d, e) {
                        if (null == d || void 0 == d || d == b[0] || null == e || void 0 == e || e.length <= a[15]) return null;
                        e = e.split(b[56]);
                        for (var f = a[15]; f < e.length; f++) {
                            var g = new RegExp(e[f].replace(/\./g, c[101]) + b[25]);
                            if (null != d.match(g) || null != (b[38] + d).match(g)) return e[f]
                        }
                        return null
                    }(O, A),
                    pa = S.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    qa = V.replace(/[^a-zA-Z0-9$]/g, b[0]).toLowerCase(),
                    K = function(c) {
                        var d = [];
                        if (!c) return d;
                        c = c.split(b[38]);
                        for (var e = b[0], f = a[15]; f < c.length; f++) f < c.length - a[541] && (e = b[38] + c[c.length - a[541] - f] + e, d.push(e));
                        return d
                    }(O);
                K.push(null);
                K.push(b[38] + O);
                (function(d) {
                    for (var e = a[15], f = (C[b[207]] || b[0]).split(c[91]), g = a[15]; g < f.length; g++) {
                        var k = f[g].indexOf(b[57]);
                        k >= a[15] && f[g].substring(a[15], k) == d && (e += a[541])
                    }
                    return e
                })(S) > a[541] && Ia();
                (function() {
                    var a = Q();
                    if (null == a || void 0 == a || a == b[0]) a = !1;
                    else {
                        var c;
                        if (c = Ua()) a = ga(a), c = !(null == a || a - (new window[B[0]])[b[179]]() <= sa - ta);
                        a = c
                    }
                    return a
                })() ? (Da(Q()), Ea(ra()), O = Va(), window[b[124]] && window[b[124]](ua, O)) : ua()
            })()
        })()
    })()
})();
(function() {})();
(function() {
    var bII4M;
    var tO8G = "VISITOR_CLIENT_NO_COOKIE_SUPPORT";
    var cfL8D = 0;
    var bIH4L = 0;
    var bIG4K = 1;
    var bIF4J = 0;
    var bpp1x = "";
    var bID4H = "";
    var bIC4G = "";
    var Sq6k = "";
    var Ss6m = "";
    var bpF1x = "";
    var bIA4E = 0;
    var bIz4D = "";
    var Ix2x = "";
    var AU0x = 0;
    var bqa1x = ntes_get_domain();
    var bqb1x = null;
    var cuf2x = "//analytics.163.com";
    var cfv8n = function() {};

    function is_spider() {
        return /baiduspider/gi.test(window.navigator.userAgent)
    }

    function ntes_get_domain() {
        var f = document.domain;
        var d = f.split(".");
        var c = d.length;
        var e = /^\d+$/g;
        if (e.test(d[c - 1])) {
            return f
        }
        if (d.length < 3) {
            return "." + f
        }
        var g = ["com", "net", "org", "gov", "co"];
        var b, a = false;
        for (b = 0; b < g.length; b++) {
            if (d[c - 2] == g[b]) { a = true }
        }
        if (!a) {
            return "." + d[c - 2] + "." + d[c - 1]
        } else {
            return "." + d[c - 3] + "." + d[c - 2] + "." + d[c - 1]
        }
    }

    function ntes_set_cookie_long(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 1e3 * 60 * 60 * 24 * 365 * 100);
        document.cookie = a + "=" + c + "; expires=" + b.toGMTString() + "; path=/; domain=" + bqa1x
    }

    function ntes_set_cookie(a, c) {
        var b = new Date;
        b.setTime(b.getTime() + 0);
        document.cookie = a + "=" + c + "; path=/; domain=" + bqa1x
    }

    function ntes_set_cookie_new(b, d, a) {
        if (!a || a == "") { a = 1e3 * 60 * 60 * 24 * 365 * 1 }
        var c = new Date;
        c.setTime(c.getTime() + a);
        document.cookie = b + "=" + d + "; expires=" + c.toGMTString() + "; path=/; domain=" + bqa1x
    }

    function ntes_get_cookie(c) {
        var a = document.cookie;
        var d = c + "=";
        var g = a.length;
        var b = 0;
        while (b < g) {
            var e = b + d.length;
            if (a.substring(b, e) == d) {
                var f = a.indexOf(";", e);
                if (f == -1) { f = g }
                return unescape(a.substring(e, f))
            }
            b = a.indexOf(" ", b) + 1;
            if (b == 0) {
                break
            }
        }
        return -1
    }

    function ntes_get_flashver() {
        var f = "",
            n = navigator;
        if (n.plugins && n.plugins.length) {
            for (var ii = 0; ii < n.plugins.length; ii++) {
                if (n.plugins[ii].name.indexOf("Shockwave Flash") != -1) {
                    f = n.plugins[ii].description.split("Shockwave Flash")[1];
                    break
                }
            }
        } else {
            if (window.ActiveXObject) {
                for (var ii = 10; ii >= 2; ii--) {
                    try {
                        var fl = eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash." + ii + "');");
                        if (fl) {
                            f = ii + ".0";
                            break
                        }
                    } catch (e) {}
                }
            }
        }
        return f
    }
    var cfu8m = 0;
    var PA5F = 8;

    function ntes_hex_md5(a) {
        return binl2hex(ntes_core_md5(str2binl(a), a.length * PA5F))
    }

    function ntes_core_md5(p, k) {
        p[k >> 5] |= 128 << k % 32;
        p[(k + 64 >>> 9 << 4) + 14] = k;
        var o = 1732584193;
        var n = -271733879;
        var m = -1732584194;
        var l = 271733878;
        for (var g = 0; g < p.length; g += 16) {
            var j = o;
            var h = n;
            var f = m;
            var e = l;
            o = md5_ff(o, n, m, l, p[g + 0], 7, -680876936);
            l = md5_ff(l, o, n, m, p[g + 1], 12, -389564586);
            m = md5_ff(m, l, o, n, p[g + 2], 17, 606105819);
            n = md5_ff(n, m, l, o, p[g + 3], 22, -1044525330);
            o = md5_ff(o, n, m, l, p[g + 4], 7, -176418897);
            l = md5_ff(l, o, n, m, p[g + 5], 12, 1200080426);
            m = md5_ff(m, l, o, n, p[g + 6], 17, -1473231341);
            n = md5_ff(n, m, l, o, p[g + 7], 22, -45705983);
            o = md5_ff(o, n, m, l, p[g + 8], 7, 1770035416);
            l = md5_ff(l, o, n, m, p[g + 9], 12, -1958414417);
            m = md5_ff(m, l, o, n, p[g + 10], 17, -42063);
            n = md5_ff(n, m, l, o, p[g + 11], 22, -1990404162);
            o = md5_ff(o, n, m, l, p[g + 12], 7, 1804603682);
            l = md5_ff(l, o, n, m, p[g + 13], 12, -40341101);
            m = md5_ff(m, l, o, n, p[g + 14], 17, -1502002290);
            n = md5_ff(n, m, l, o, p[g + 15], 22, 1236535329);
            o = md5_gg(o, n, m, l, p[g + 1], 5, -165796510);
            l = md5_gg(l, o, n, m, p[g + 6], 9, -1069501632);
            m = md5_gg(m, l, o, n, p[g + 11], 14, 643717713);
            n = md5_gg(n, m, l, o, p[g + 0], 20, -373897302);
            o = md5_gg(o, n, m, l, p[g + 5], 5, -701558691);
            l = md5_gg(l, o, n, m, p[g + 10], 9, 38016083);
            m = md5_gg(m, l, o, n, p[g + 15], 14, -660478335);
            n = md5_gg(n, m, l, o, p[g + 4], 20, -405537848);
            o = md5_gg(o, n, m, l, p[g + 9], 5, 568446438);
            l = md5_gg(l, o, n, m, p[g + 14], 9, -1019803690);
            m = md5_gg(m, l, o, n, p[g + 3], 14, -187363961);
            n = md5_gg(n, m, l, o, p[g + 8], 20, 1163531501);
            o = md5_gg(o, n, m, l, p[g + 13], 5, -1444681467);
            l = md5_gg(l, o, n, m, p[g + 2], 9, -51403784);
            m = md5_gg(m, l, o, n, p[g + 7], 14, 1735328473);
            n = md5_gg(n, m, l, o, p[g + 12], 20, -1926607734);
            o = md5_hh(o, n, m, l, p[g + 5], 4, -378558);
            l = md5_hh(l, o, n, m, p[g + 8], 11, -2022574463);
            m = md5_hh(m, l, o, n, p[g + 11], 16, 1839030562);
            n = md5_hh(n, m, l, o, p[g + 14], 23, -35309556);
            o = md5_hh(o, n, m, l, p[g + 1], 4, -1530992060);
            l = md5_hh(l, o, n, m, p[g + 4], 11, 1272893353);
            m = md5_hh(m, l, o, n, p[g + 7], 16, -155497632);
            n = md5_hh(n, m, l, o, p[g + 10], 23, -1094730640);
            o = md5_hh(o, n, m, l, p[g + 13], 4, 681279174);
            l = md5_hh(l, o, n, m, p[g + 0], 11, -358537222);
            m = md5_hh(m, l, o, n, p[g + 3], 16, -722521979);
            n = md5_hh(n, m, l, o, p[g + 6], 23, 76029189);
            o = md5_hh(o, n, m, l, p[g + 9], 4, -640364487);
            l = md5_hh(l, o, n, m, p[g + 12], 11, -421815835);
            m = md5_hh(m, l, o, n, p[g + 15], 16, 530742520);
            n = md5_hh(n, m, l, o, p[g + 2], 23, -995338651);
            o = md5_ii(o, n, m, l, p[g + 0], 6, -198630844);
            l = md5_ii(l, o, n, m, p[g + 7], 10, 1126891415);
            m = md5_ii(m, l, o, n, p[g + 14], 15, -1416354905);
            n = md5_ii(n, m, l, o, p[g + 5], 21, -57434055);
            o = md5_ii(o, n, m, l, p[g + 12], 6, 1700485571);
            l = md5_ii(l, o, n, m, p[g + 3], 10, -1894986606);
            m = md5_ii(m, l, o, n, p[g + 10], 15, -1051523);
            n = md5_ii(n, m, l, o, p[g + 1], 21, -2054922799);
            o = md5_ii(o, n, m, l, p[g + 8], 6, 1873313359);
            l = md5_ii(l, o, n, m, p[g + 15], 10, -30611744);
            m = md5_ii(m, l, o, n, p[g + 6], 15, -1560198380);
            n = md5_ii(n, m, l, o, p[g + 13], 21, 1309151649);
            o = md5_ii(o, n, m, l, p[g + 4], 6, -145523070);
            l = md5_ii(l, o, n, m, p[g + 11], 10, -1120210379);
            m = md5_ii(m, l, o, n, p[g + 2], 15, 718787259);
            n = md5_ii(n, m, l, o, p[g + 9], 21, -343485551);
            o = safe_add(o, j);
            n = safe_add(n, h);
            m = safe_add(m, f);
            l = safe_add(l, e)
        }
        return Array(o, n, m, l)
    }

    function md5_cmn(h, e, d, c, g, f) {
        return safe_add(bit_rol(safe_add(safe_add(e, h), safe_add(c, f)), g), d)
    }

    function md5_ff(g, f, k, j, e, i, h) {
        return md5_cmn(f & k | ~f & j, g, f, e, i, h)
    }

    function md5_gg(g, f, k, j, e, i, h) {
        return md5_cmn(f & j | k & ~j, g, f, e, i, h)
    }

    function md5_hh(g, f, k, j, e, i, h) {
        return md5_cmn(f ^ k ^ j, g, f, e, i, h)
    }

    function md5_ii(g, f, k, j, e, i, h) {
        return md5_cmn(k ^ (f | ~j), g, f, e, i, h)
    }

    function safe_add(a, d) {
        var c = (a & 65535) + (d & 65535);
        var b = (a >> 16) + (d >> 16) + (c >> 16);
        return b << 16 | c & 65535
    }

    function bit_rol(a, b) {
        return a << b | a >>> 32 - b
    }

    function str2binl(d) {
        var c = new Array;
        var a = (1 << PA5F) - 1;
        for (var b = 0; b < d.length * PA5F; b += PA5F) { c[b >> 5] |= (d.charCodeAt(b / PA5F) & a) << b % 32 }
        return c
    }

    function binl2hex(c) {
        var b = cfu8m ? "0123456789ABCDEF" : "0123456789abcdef";
        var d = "";
        for (var a = 0; a < c.length * 4; a++) { d += b.charAt(c[a >> 2] >> a % 4 * 8 + 4 & 15) + b.charAt(c[a >> 2] >> a % 4 * 8 & 15) }
        return d
    }

    function str_to_ent(e) {
        var a = "";
        var d;
        for (d = 0; d < e.length; d++) {
            var f = e.charCodeAt(d);
            var b = "";
            if (f > 255) {
                while (f >= 1) {
                    b = "0123456789".charAt(f % 10) + b;
                    f = f / 10
                }
                if (b == "") { b = "0" }
                b = "#" + b;
                b = "&" + b;
                b = b + ";";
                a += b
            } else { a += e.charAt(d) }
        }
        return a
    }

    function ntes_get_navigation_info() {
        Sq6k = "-";
        bpF1x = "-";
        Ss6m = "-";
        var c = window.self,
            b = window.screen,
            a = window.navigator;
        if (c.screen) {
            Sq6k = b.width + "x" + b.height;
            bpF1x = b.colorDepth + "-bit"
        } else {
            if (c.java) {
                var e = java.awt.Toolkit.getDefaultToolkit();
                var f = e.getScreenSize();
                Sq6k = f.width + "x" + f.height
            }
        }
        if (a.language) { Ss6m = a.language.toLowerCase() } else {
            if (a.browserLanguage) { Ss6m = a.browserLanguage.toLowerCase() }
        }
        var g = new Date(document.lastModified);
        bIA4E = g.getTime() / 1e3
    }

    function fetch_visitor_hash() {
        var c = new Date;
        var b = document.body.clientWidth + ":" + document.body.clientHeight;
        var a = str_to_ent(c.getTime() + Math.random() + document.location + document.referrer + screen.width + screen.height + navigator.userAgent + document.cookie + b);
        return ntes_hex_md5(a)
    }

    function cug2x(c, b, f) {
        var e = c + "_" + +(new Date) + parseInt(Math.random() * 100),
            a, d = f || cfv8n;
        a = window[e] = new Image;
        a.onload = function() {
            window[e] = null;
            d()
        };
        a.onerror = function() {
            window[e] = null;
            d()
        };
        a.src = b;
        a = null
    }

    function neteaseTracker(l, a, m, k) {
        if (is_spider()) {
            return
        }
        var e = k || bII4M;
        bpp1x = escape(a || document.location);
        bID4H = escape(m || document.title);
        bIC4G = l === true ? "" : escape(l || document.referrer);
        bIz4D = ntes_get_flashver();
        var b = (new Date).getTime();
        if (bqb1x == null) {
            document.cookie = "__ntes__test__cookies=" + b;
            bqb1x = ntes_get_cookie("__ntes__test__cookies") == b ? true : false;
            document.cookie = "__ntes__test__cookies=" + b + "; expires=" + (new Date("1970/01/01")).toUTCString()
        }
        if (e == "undefined" || !e) {
            return
        }
        if (bpp1x.indexOf("http") != 0) {
            return
        }
        var h = ntes_get_cookie("_ntes_nnid");
        if (h == -1) {
            if (bqb1x) {
                tO8G = fetch_visitor_hash();
                bIH4L = 1;
                ntes_set_cookie_long("_ntes_nnid", tO8G + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tO8G)
            }
        } else {
            var o = h.indexOf(",");
            var p = h.indexOf("|");
            var f = false;
            if (p == -1) { p = h.length }
            tO8G = h.substr(0, o);
            AU0x = h.substr(o + 1, p - o - 1);
            if (AU0x == 0) {
                AU0x = (new Date).getTime();
                f = true
            }
            if (!tO8G) {
                tO8G = fetch_visitor_hash();
                f = true
            }
            if (f) {
                ntes_set_cookie_long("_ntes_nnid", tO8G + "," + AU0x);
                ntes_set_cookie_long("_ntes_nuid", tO8G)
            }
            if (AU0x != 0 && b - AU0x > 365 * 86400 * 1e3) {
                AU0x = 0;
                ntes_set_cookie_long("_ntes_nnid", tO8G + "," + (new Date).getTime());
                ntes_set_cookie_long("_ntes_nuid", tO8G)
            }
        }

        function c(q, i) {
            var s = ntes_get_cookie(q),
                r = ntes_get_cookie(i);
            return s == -1 ? r == -1 ? "" : r : s
        }
        Ix2x = c("P_INFO", "P_OINFO");
        Ix2x = Ix2x ? Ix2x.substr(0, Ix2x.indexOf("|")) : "";
        bIF4J = c("S_INFO", "S_OINFO") ? 1 : 0;
        ntes_get_navigation_info();
        var n = ["_nacc=", e, "&_nvid=", tO8G, "&_nvtm=", cfL8D, "&_nvsf=", bIG4K, "&_nvfi=", bIH4L, "&_nlag=", Ss6m, "&_nlmf=", bIA4E, "&_nres=", Sq6k, "&_nscd=", bpF1x, "&_nstm=", bIF4J, "&_nurl=", bpp1x, "&_ntit=", bID4H, "&_nref=", bIC4G, "&_nfla=", bIz4D, "&_nssn=", Ix2x, "&_nxkey=", (b + "" + Math.random()).substring(6, 20), "&_end1"].join("");
        bIG4K = 0;
        neteaseTracker.callback = null
    }
    bII4M = "iad";
    neteaseTracker()
})();
(function() {})();
var CryptoJS = CryptoJS || function(u, p) {
    var d = {},
        l = d.lib = {},
        s = function() {},
        t = l.Base = {
            extend: function(a) {
                s.prototype = this;
                var c = new s;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function() { c.$super.init.apply(this, arguments) });
                c.init.prototype = c;
                c.$super = this;
                return c
            },
            create: function() {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            },
            init: function() {},
            mixIn: function(a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        r = l.WordArray = t.extend({
            init: function(a, c) {
                a = this.words = a || [];
                this.sigBytes = c != p ? c : 4 * a.length
            },
            toString: function(a) {
                return (a || v).stringify(this)
            },
            concat: function(a) {
                var c = this.words,
                    e = a.words,
                    j = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var k = 0; k < a; k++) c[j + k >>> 2] |= (e[k >>> 2] >>> 24 - 8 * (k % 4) & 255) << 24 - 8 * ((j + k) % 4);
                else if (65535 < e.length)
                    for (k = 0; k < a; k += 4) c[j + k >>> 2] = e[k >>> 2];
                else c.push.apply(c, e);
                this.sigBytes += a;
                return this
            },
            clamp: function() {
                var a = this.words,
                    c = this.sigBytes;
                a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
                a.length = u.ceil(c / 4)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.words = this.words.slice(0);
                return a
            },
            random: function(a) {
                for (var c = [], e = 0; e < a; e += 4) c.push(4294967296 * u.random() | 0);
                return new r.init(c, a)
            }
        }),
        w = d.enc = {},
        v = w.Hex = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) {
                    var k = c[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    e.push((k >>> 4).toString(16));
                    e.push((k & 15).toString(16))
                }
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j += 2) e[j >>> 3] |= parseInt(a.substr(j, 2), 16) << 24 - 4 * (j % 8);
                return new r.init(e, c / 2)
            }
        },
        b = w.Latin1 = {
            stringify: function(a) {
                var c = a.words;
                a = a.sigBytes;
                for (var e = [], j = 0; j < a; j++) e.push(String.fromCharCode(c[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return e.join("")
            },
            parse: function(a) {
                for (var c = a.length, e = [], j = 0; j < c; j++) e[j >>> 2] |= (a.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new r.init(e, c)
            }
        },
        x = w.Utf8 = {
            stringify: function(a) {
                try {
                    return decodeURIComponent(escape(b.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data")
                }
            },
            parse: function(a) {
                return b.parse(unescape(encodeURIComponent(a)))
            }
        },
        q = l.BufferedBlockAlgorithm = t.extend({
            reset: function() {
                this.j1x = new r.init;
                this.bIx4B = 0
            },
            Su6o: function(a) {
                "string" == typeof a && (a = x.parse(a));
                this.j1x.concat(a);
                this.bIx4B += a.sigBytes
            },
            zX0x: function(a) {
                var c = this.j1x,
                    e = c.words,
                    j = c.sigBytes,
                    k = this.blockSize,
                    b = j / (4 * k),
                    b = a ? u.ceil(b) : u.max((b | 0) - this.bIy4C, 0);
                a = b * k;
                j = u.min(4 * a, j);
                if (a) {
                    for (var q = 0; q < a; q += k) this.bIw4A(e, q);
                    q = e.splice(0, a);
                    c.sigBytes -= j
                }
                return new r.init(q, j)
            },
            clone: function() {
                var a = t.clone.call(this);
                a.j1x = this.j1x.clone();
                return a
            },
            bIy4C: 0
        });
    l.Hasher = q.extend({
        cfg: t.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        },
        reset: function() {
            q.reset.call(this);
            this.bak7d()
        },
        update: function(a) {
            this.Su6o(a);
            this.zX0x();
            return this
        },
        finalize: function(a) {
            a && this.Su6o(a);
            return this.Sw6q()
        },
        blockSize: 16,
        baf7Y: function(a) {
            return function(b, e) {
                return (new a.init(e)).finalize(b)
            }
        },
        cfn8f: function(a) {
            return function(b, e) {
                return (new n.HMAC.init(a, e)).finalize(b)
            }
        }
    });
    var n = d.algo = {};
    return d
}(Math);
(function() {
    var u = CryptoJS,
        p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function(d) {
            var l = d.words,
                p = d.sigBytes,
                t = this.bv2x;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3)
                for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + .75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64))
                for (; d.length % 4;) d.push(l);
            return d.join("")
        },
        parse: function(d) {
            var l = d.length,
                s = this.bv2x,
                t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w < l; w++)
                if (w % 4) {
                    var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4),
                        b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                    t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                    r++
                }
            return p.create(t, r)
        },
        bv2x: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();
(function(u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }
    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        bak7d: function() { this.dE3x = new w.init([1732584193, 4023233417, 2562383102, 271733878]) },
        bIw4A: function(q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a,
                    e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this.dE3x.words,
                c = q[n + 0],
                e = q[n + 1],
                j = q[n + 2],
                k = q[n + 3],
                z = q[n + 4],
                r = q[n + 5],
                t = q[n + 6],
                w = q[n + 7],
                v = q[n + 8],
                A = q[n + 9],
                B = q[n + 10],
                C = q[n + 11],
                u = q[n + 12],
                D = q[n + 13],
                E = q[n + 14],
                x = q[n + 15],
                f = a[0],
                m = a[1],
                g = a[2],
                h = a[3],
                f = p(f, m, g, h, c, 7, b[0]),
                h = p(h, f, m, g, e, 12, b[1]),
                g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]),
                f = p(f, m, g, h, z, 7, b[4]),
                h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]),
                m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]),
                h = p(h, f, m, g, A, 12, b[9]),
                g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]),
                f = p(f, m, g, h, u, 7, b[12]),
                h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]),
                m = p(m, g, h, f, x, 22, b[15]),
                f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]),
                g = d(g, h, f, m, C, 14, b[18]),
                m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]),
                h = d(h, f, m, g, B, 9, b[21]),
                g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]),
                f = d(f, m, g, h, A, 5, b[24]),
                h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]),
                m = d(m, g, h, f, v, 20, b[27]),
                f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f, m, g, j, 9, b[29]),
                g = d(g, h, f, m, w, 14, b[30]),
                m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]),
                h = l(h, f, m, g, v, 11, b[33]),
                g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]),
                f = l(f, m, g, h, e, 4, b[36]),
                h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]),
                m = l(m, g, h, f, B, 23, b[39]),
                f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]),
                g = l(g, h, f, m, k, 16, b[42]),
                m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]),
                h = l(h, f, m, g, u, 11, b[45]),
                g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]),
                f = s(f, m, g, h, c, 6, b[48]),
                h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m, E, 15, b[50]),
                m = s(m, g, h, f, r, 21, b[51]),
                f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]),
                g = s(g, h, f, m, B, 15, b[54]),
                m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]),
                h = s(h, f, m, g, x, 10, b[57]),
                g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]),
                f = s(f, m, g, h, z, 6, b[60]),
                h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]),
                m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        },
        Sw6q: function() {
            var b = this.j1x,
                n = b.words,
                a = 8 * this.bIx4B,
                c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a / 4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this.zX0x();
            b = this.dE3x;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        },
        clone: function() {
            var b = v.clone.call(this);
            b.dE3x = this.dE3x.clone();
            return b
        }
    });
    t.MD5 = v.baf7Y(r);
    t.HmacMD5 = v.cfn8f(r)
})(Math);
(function() {
    var u = CryptoJS,
        p = u.lib,
        d = p.Base,
        l = p.WordArray,
        p = u.algo,
        s = p.EvpKDF = d.extend({
            cfg: d.extend({ keySize: 4, hasher: p.MD5, iterations: 1 }),
            init: function(d) { this.cfg = this.cfg.extend(d) },
            compute: function(d, r) {
                for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                    n && s.update(n);
                    var n = s.update(d).finalize(r);
                    s.reset();
                    for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                    b.concat(n)
                }
                b.sigBytes = 4 * q;
                return b
            }
        });
    u.EvpKDF = function(d, l, p) {
        return s.create(p).compute(d, l)
    }
})();
CryptoJS.lib.Cipher || function(u) {
    var p = CryptoJS,
        d = p.lib,
        l = d.Base,
        s = d.WordArray,
        t = d.BufferedBlockAlgorithm,
        r = p.enc.Base64,
        w = p.algo.EvpKDF,
        v = d.Cipher = t.extend({
            cfg: l.extend(),
            createEncryptor: function(e, a) {
                return this.create(this.bat7m, e, a)
            },
            createDecryptor: function(e, a) {
                return this.create(this.cfm8e, e, a)
            },
            init: function(e, a, b) {
                this.cfg = this.cfg.extend(b);
                this.bIv4z = e;
                this.J1x = a;
                this.reset()
            },
            reset: function() {
                t.reset.call(this);
                this.bak7d()
            },
            process: function(e) {
                this.Su6o(e);
                return this.zX0x()
            },
            finalize: function(e) {
                e && this.Su6o(e);
                return this.Sw6q()
            },
            keySize: 4,
            ivSize: 4,
            bat7m: 1,
            cfm8e: 2,
            baf7Y: function(e) {
                return {
                    encrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    },
                    decrypt: function(b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        Sw6q: function() {
            return this.zX0x(!0)
        },
        blockSize: 1
    });
    var b = p.mode = {},
        x = function(e, a, b) {
            var c = this.bIt4x;
            c ? this.bIt4x = u : c = this.bIs4w;
            for (var d = 0; d < b; d++) e[a + d] ^= c[d]
        },
        q = (d.BlockCipherMode = l.extend({
            createEncryptor: function(e, a) {
                return this.Encryptor.create(e, a)
            },
            createDecryptor: function(e, a) {
                return this.Decryptor.create(e, a)
            },
            init: function(e, a) {
                this.bIo4s = e;
                this.bIt4x = a
            }
        })).extend();
    q.Encryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bIo4s,
                c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this.bIs4w = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function(e, a) {
            var b = this.bIo4s,
                c = b.blockSize,
                d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this, e, a, c);
            this.bIs4w = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function(a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        },
        unpad: function(a) { a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255 }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({ mode: b, padding: q }),
        reset: function() {
            v.reset.call(this);
            var a = this.cfg,
                b = a.iv,
                a = a.mode;
            if (this.bIv4z == this.bat7m) var c = a.createEncryptor;
            else c = a.createDecryptor, this.bIy4C = 1;
            this.eI3x = c.call(a, this, b && b.words)
        },
        bIw4A: function(a, b) { this.eI3x.processBlock(a, b) },
        Sw6q: function() {
            var a = this.cfg.padding;
            if (this.bIv4z == this.bat7m) {
                a.pad(this.j1x, this.blockSize);
                var b = this.zX0x(!0)
            } else b = this.zX0x(!0), a.unpad(b);
            return b
        },
        blockSize: 4
    });
    var n = d.CipherParams = l.extend({
            init: function(a) { this.mixIn(a) },
            toString: function(a) {
                return (a || this.formatter).stringify(this)
            }
        }),
        b = (p.format = {}).OpenSSL = {
            stringify: function(a) {
                var b = a.ciphertext;
                a = a.salt;
                return (a ? s.create([1398893684, 1701076831]).concat(a).concat(b) : b).toString(r)
            },
            parse: function(a) {
                a = r.parse(a);
                var b = a.words;
                if (1398893684 == b[0] && 1701076831 == b[1]) {
                    var c = s.create(b.slice(2, 4));
                    b.splice(0, 4);
                    a.sigBytes -= 16
                }
                return n.create({ ciphertext: a, salt: c })
            }
        },
        a = d.SerializableCipher = l.extend({
            cfg: l.extend({ format: b }),
            encrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                var l = a.createEncryptor(c, d);
                b = l.finalize(b);
                l = l.cfg;
                return n.create({ ciphertext: b, key: c, iv: l.iv, algorithm: a, mode: l.mode, padding: l.padding, blockSize: a.blockSize, formatter: d.format })
            },
            decrypt: function(a, b, c, d) {
                d = this.cfg.extend(d);
                b = this.Zd7W(b, d.format);
                return a.createDecryptor(c, d).finalize(b.ciphertext)
            },
            Zd7W: function(a, b) {
                return "string" == typeof a ? b.parse(a, this) : a
            }
        }),
        p = (p.kdf = {}).OpenSSL = {
            execute: function(a, b, c, d) {
                d || (d = s.random(8));
                a = w.create({ keySize: b + c }).compute(a, d);
                c = s.create(a.words.slice(b), 4 * c);
                a.sigBytes = 4 * b;
                return n.create({ key: a, iv: c, salt: d })
            }
        },
        c = d.PasswordBasedCipher = a.extend({
            cfg: a.cfg.extend({ kdf: p }),
            encrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                d = l.kdf.execute(d, b.keySize, b.ivSize);
                l.iv = d.iv;
                b = a.encrypt.call(this, b, c, d.key, l);
                b.mixIn(d);
                return b
            },
            decrypt: function(b, c, d, l) {
                l = this.cfg.extend(l);
                c = this.Zd7W(c, l.format);
                d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
                l.iv = d.iv;
                return a.decrypt.call(this, b, c, d.key, l)
            }
        })
}();
(function() {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4,
            k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e],
            F = a[z],
            G = a[F],
            y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        d = d.AES = p.extend({
            bak7d: function() {
                for (var a = this.J1x, c = a.words, d = a.sigBytes / 4, a = 4 * ((this.ceQ8I = d + 6) + 1), e = this.ceO8G = [], j = 0; j < a; j++)
                    if (j < d) e[j] = c[j];
                    else {
                        var k = e[j - 1];
                        j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                        e[j] = e[j - d] ^ k
                    }
                c = this.ceJ8B = [];
                for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>> 8 & 255]] ^ n[l[k & 255]]
            },
            encryptBlock: function(a, b) { this.bIn4r(a, b, this.ceO8G, t, r, w, v, l) },
            decryptBlock: function(a, c) {
                var d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d;
                this.bIn4r(a, c, this.ceJ8B, b, x, q, n, s);
                d = a[c + 1];
                a[c + 1] = a[c + 3];
                a[c + 3] = d
            },
            bIn4r: function(a, b, c, d, e, j, l, f) {
                for (var m = this.ceQ8I, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++],
                    s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++],
                    t = d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++],
                    n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++],
                    g = q,
                    h = s,
                    k = t;
                q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
                s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
                t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
                n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
                a[b] = q;
                a[b + 1] = s;
                a[b + 2] = t;
                a[b + 3] = n
            },
            keySize: 8
        });
    u.AES = p.baf7Y(d)
})();

function RSAKeyPair(a, b, c) { this.e = biFromHex(a), this.d = biFromHex(b), this.m = biFromHex(c), this.chunkSize = 2 * biHighIndex(this.m), this.radix = 16, this.barrett = new BarrettMu(this.m) }

function twoDigit(a) {
    return (10 > a ? "0" : "") + String(a)
}

function encryptedString(a, b) {
    for (var f, g, h, i, j, k, l, c = new Array, d = b.length, e = 0; d > e;) c[e] = b.charCodeAt(e), e++;
    for (; 0 != c.length % a.chunkSize;) c[e++] = 0;
    console.log(a)
    console.log(c)

    for (f = c.length, g = "", e = 0; f > e; e += a.chunkSize) {
        for (j = new BigInt, h = 0, i = e; i < e + a.chunkSize; ++h) j.digits[h] = c[i++], j.digits[h] += c[i++] << 8;
        k = a.barrett.powMod(j, a.e), l = 16 == a.radix ? biToHex(k) : biToString(k, a.radix), g += l + " "
    console.log(a)
    console.log(k)
    console.log(biToHex(k))

    }
    return g.substring(0, g.length - 1)
}

function decryptedString(a, b) {
    var e, f, g, h, c = b.split(" "),
        d = "";
    for (e = 0; e < c.length; ++e)
        for (h = 16 == a.radix ? biFromHex(c[e]) : biFromString(c[e], a.radix), g = a.barrett.powMod(h, a.d), f = 0; f <= biHighIndex(g); ++f) d += String.fromCharCode(255 & g.digits[f], g.digits[f] >> 8);
    return 0 == d.charCodeAt(d.length - 1) && (d = d.substring(0, d.length - 1)), d
}

function setMaxDigits(a) {
    maxDigits = a, ZERO_ARRAY = new Array(maxDigits);
    for (var b = 0; b < ZERO_ARRAY.length; b++) ZERO_ARRAY[b] = 0;
    bigZero = new BigInt, bigOne = new BigInt, bigOne.digits[0] = 1
}

function BigInt(a) { this.digits = "boolean" == typeof a && 1 == a ? null : ZERO_ARRAY.slice(0), this.isNeg = !1 }

function biFromDecimal(a) {
    for (var d, e, f, b = "-" == a.charAt(0), c = b ? 1 : 0; c < a.length && "0" == a.charAt(c);) ++c;
    if (c == a.length) d = new BigInt;
    else {
        for (e = a.length - c, f = e % dpl10, 0 == f && (f = dpl10), d = biFromNumber(Number(a.substr(c, f))), c += f; c < a.length;) d = biAdd(biMultiply(d, lr10), biFromNumber(Number(a.substr(c, dpl10)))), c += dpl10;
        d.isNeg = b
    }
    return d
}

function biCopy(a) {
    var b = new BigInt(!0);
    return b.digits = a.digits.slice(0), b.isNeg = a.isNeg, b
}

function biFromNumber(a) {
    var c, b = new BigInt;
    for (b.isNeg = 0 > a, a = Math.abs(a), c = 0; a > 0;) b.digits[c++] = a & maxDigitVal, a >>= biRadixBits;
    return b
}

function reverseStr(a) {
    var c, b = "";
    for (c = a.length - 1; c > -1; --c) b += a.charAt(c);
    return b
}

function biToString(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = b, d = biDivideModulo(a, c), e = hexatrigesimalToChar[d[1].digits[0]]; 1 == biCompare(d[0], bigZero);) d = biDivideModulo(d[0], c), digit = d[1].digits[0], e += hexatrigesimalToChar[d[1].digits[0]];
    return (a.isNeg ? "-" : "") + reverseStr(e)
}

function biToDecimal(a) {
    var c, d, b = new BigInt;
    for (b.digits[0] = 10, c = biDivideModulo(a, b), d = String(c[1].digits[0]); 1 == biCompare(c[0], bigZero);) c = biDivideModulo(c[0], b), d += String(c[1].digits[0]);
    return (a.isNeg ? "-" : "") + reverseStr(d)
}

function digitToHex(a) {
    var b = 15,
        c = "";
    for (i = 0; 4 > i; ++i) c += hexToChar[a & b], a >>>= 4;
    return reverseStr(c)
}

function biToHex(a) {
    var d, b = "";
    for (biHighIndex(a), d = biHighIndex(a); d > -1; --d) b += digitToHex(a.digits[d]);
    return b
}

function charToHex(a) {
    var h, b = 48,
        c = b + 9,
        d = 97,
        e = d + 25,
        f = 65,
        g = 90;
    return h = a >= b && c >= a ? a - b : a >= f && g >= a ? 10 + a - f : a >= d && e >= a ? 10 + a - d : 0
}

function hexToDigit(a) {
    var d, b = 0,
        c = Math.min(a.length, 4);
    for (d = 0; c > d; ++d) b <<= 4, b |= charToHex(a.charCodeAt(d));
    return b
}

function biFromHex(a) {
    var d, e, b = new BigInt,
        c = a.length;
    for (d = c, e = 0; d > 0; d -= 4, ++e) b.digits[e] = hexToDigit(a.substr(Math.max(d - 4, 0), Math.min(d, 4)));
    return b
}

function biFromString(a, b) {
    var g, h, i, j, c = "-" == a.charAt(0),
        d = c ? 1 : 0,
        e = new BigInt,
        f = new BigInt;
    for (f.digits[0] = 1, g = a.length - 1; g >= d; g--) h = a.charCodeAt(g), i = charToHex(h), j = biMultiplyDigit(f, i), e = biAdd(e, j), f = biMultiplyDigit(f, b);
    return e.isNeg = c, e
}

function biDump(a) {
    return (a.isNeg ? "-" : "") + a.digits.join(" ")
}

function biAdd(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biSubtract(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, d = 0, f = 0; f < a.digits.length; ++f) e = a.digits[f] + b.digits[f] + d, c.digits[f] = 65535 & e, d = Number(e >= biRadix);
        c.isNeg = a.isNeg
    }
    return c
}

function biSubtract(a, b) {
    var c, d, e, f;
    if (a.isNeg != b.isNeg) b.isNeg = !b.isNeg, c = biAdd(a, b), b.isNeg = !b.isNeg;
    else {
        for (c = new BigInt, e = 0, f = 0; f < a.digits.length; ++f) d = a.digits[f] - b.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
        if (-1 == e) {
            for (e = 0, f = 0; f < a.digits.length; ++f) d = 0 - c.digits[f] + e, c.digits[f] = 65535 & d, c.digits[f] < 0 && (c.digits[f] += biRadix), e = 0 - Number(0 > d);
            c.isNeg = !a.isNeg
        } else c.isNeg = a.isNeg
    }
    return c
}

function biHighIndex(a) {
    for (var b = a.digits.length - 1; b > 0 && 0 == a.digits[b];) --b;
    return b
}

function biNumBits(a) {
    var e, b = biHighIndex(a),
        c = a.digits[b],
        d = (b + 1) * bitsPerDigit;
    for (e = d; e > d - bitsPerDigit && 0 == (32768 & c); --e) c <<= 1;
    return e
}

function biMultiply(a, b) {
    var d, h, i, k, c = new BigInt,
        e = biHighIndex(a),
        f = biHighIndex(b);
    for (k = 0; f >= k; ++k) {
        for (d = 0, i = k, j = 0; e >= j; ++j, ++i) h = c.digits[i] + a.digits[j] * b.digits[k] + d, c.digits[i] = h & maxDigitVal, d = h >>> biRadixBits;
        c.digits[k + e + 1] = d
    }
    return c.isNeg = a.isNeg != b.isNeg, c
}

function biMultiplyDigit(a, b) {
    var c, d, e, f;
    for (result = new BigInt, c = biHighIndex(a), d = 0, f = 0; c >= f; ++f) e = result.digits[f] + a.digits[f] * b + d, result.digits[f] = e & maxDigitVal, d = e >>> biRadixBits;
    return result.digits[1 + c] = d, result
}

function arrayCopy(a, b, c, d, e) {
    var g, h, f = Math.min(b + e, a.length);
    for (g = b, h = d; f > g; ++g, ++h) c[h] = a[g]
}

function biShiftLeft(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, 0, d.digits, c, d.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = d.digits.length - 1, h = g - 1; g > 0; --g, --h) d.digits[g] = d.digits[g] << e & maxDigitVal | (d.digits[h] & highBitMasks[e]) >>> f;
    return d.digits[0] = d.digits[g] << e & maxDigitVal, d.isNeg = a.isNeg, d
}

function biShiftRight(a, b) {
    var e, f, g, h, c = Math.floor(b / bitsPerDigit),
        d = new BigInt;
    for (arrayCopy(a.digits, c, d.digits, 0, a.digits.length - c), e = b % bitsPerDigit, f = bitsPerDigit - e, g = 0, h = g + 1; g < d.digits.length - 1; ++g, ++h) d.digits[g] = d.digits[g] >>> e | (d.digits[h] & lowBitMasks[e]) << f;
    return d.digits[d.digits.length - 1] >>>= e, d.isNeg = a.isNeg, d
}

function biMultiplyByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, b, c.digits.length - b), c
}

function biDivideByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, b, c.digits, 0, c.digits.length - b), c
}

function biModuloByRadixPower(a, b) {
    var c = new BigInt;
    return arrayCopy(a.digits, 0, c.digits, 0, b), c
}

function biCompare(a, b) {
    if (a.isNeg != b.isNeg) return 1 - 2 * Number(a.isNeg);
    for (var c = a.digits.length - 1; c >= 0; --c)
        if (a.digits[c] != b.digits[c]) return a.isNeg ? 1 - 2 * Number(a.digits[c] > b.digits[c]) : 1 - 2 * Number(a.digits[c] < b.digits[c]);
    return 0
}

function biDivideModulo(a, b) {
    var f, g, h, i, j, k, l, m, n, o, p, q, r, s, c = biNumBits(a),
        d = biNumBits(b),
        e = b.isNeg;
    if (d > c) return a.isNeg ? (f = biCopy(bigOne), f.isNeg = !b.isNeg, a.isNeg = !1, b.isNeg = !1, g = biSubtract(b, a), a.isNeg = !0, b.isNeg = e) : (f = new BigInt, g = biCopy(a)), new Array(f, g);
    for (f = new BigInt, g = a, h = Math.ceil(d / bitsPerDigit) - 1, i = 0; b.digits[h] < biHalfRadix;) b = biShiftLeft(b, 1), ++i, ++d, h = Math.ceil(d / bitsPerDigit) - 1;
    for (g = biShiftLeft(g, i), c += i, j = Math.ceil(c / bitsPerDigit) - 1, k = biMultiplyByRadixPower(b, j - h); - 1 != biCompare(g, k);) ++f.digits[j - h], g = biSubtract(g, k);
    for (l = j; l > h; --l) {
        for (m = l >= g.digits.length ? 0 : g.digits[l], n = l - 1 >= g.digits.length ? 0 : g.digits[l - 1], o = l - 2 >= g.digits.length ? 0 : g.digits[l - 2], p = h >= b.digits.length ? 0 : b.digits[h], q = h - 1 >= b.digits.length ? 0 : b.digits[h - 1], f.digits[l - h - 1] = m == p ? maxDigitVal : Math.floor((m * biRadix + n) / p), r = f.digits[l - h - 1] * (p * biRadix + q), s = m * biRadixSquared + (n * biRadix + o); r > s;) --f.digits[l - h - 1], r = f.digits[l - h - 1] * (p * biRadix | q), s = m * biRadix * biRadix + (n * biRadix + o);
        k = biMultiplyByRadixPower(b, l - h - 1), g = biSubtract(g, biMultiplyDigit(k, f.digits[l - h - 1])), g.isNeg && (g = biAdd(g, k), --f.digits[l - h - 1])
    }
    return g = biShiftRight(g, i), f.isNeg = a.isNeg != e, a.isNeg && (f = e ? biAdd(f, bigOne) : biSubtract(f, bigOne), b = biShiftRight(b, i), g = biSubtract(b, g)), 0 == g.digits[0] && 0 == biHighIndex(g) && (g.isNeg = !1), new Array(f, g)
}

function biDivide(a, b) {
    return biDivideModulo(a, b)[0]
}

function biModulo(a, b) {
    return biDivideModulo(a, b)[1]
}

function biMultiplyMod(a, b, c) {
    return biModulo(biMultiply(a, b), c)
}

function biPow(a, b) {
    for (var c = bigOne, d = a;;) {
        if (0 != (1 & b) && (c = biMultiply(c, d)), b >>= 1, 0 == b) break;
        d = biMultiply(d, d)
    }
    return c
}

function biPowMod(a, b, c) {
    for (var d = bigOne, e = a, f = b;;) {
        if (0 != (1 & f.digits[0]) && (d = biMultiplyMod(d, e, c)), f = biShiftRight(f, 1), 0 == f.digits[0] && 0 == biHighIndex(f)) break;
        e = biMultiplyMod(e, e, c)
    }
    return d
}

function BarrettMu(a) {
    this.modulus = biCopy(a), this.k = biHighIndex(this.modulus) + 1;
    var b = new BigInt;
    b.digits[2 * this.k] = 1, this.mu = biDivide(b, this.modulus), this.bkplus1 = new BigInt, this.bkplus1.digits[this.k + 1] = 1, this.modulo = BarrettMu_modulo, this.multiplyMod = BarrettMu_multiplyMod, this.powMod = BarrettMu_powMod
}

function BarrettMu_modulo(a) {
    var i, b = biDivideByRadixPower(a, this.k - 1),
        c = biMultiply(b, this.mu),
        d = biDivideByRadixPower(c, this.k + 1),
        e = biModuloByRadixPower(a, this.k + 1),
        f = biMultiply(d, this.modulus),
        g = biModuloByRadixPower(f, this.k + 1),
        h = biSubtract(e, g);
    for (h.isNeg && (h = biAdd(h, this.bkplus1)), i = biCompare(h, this.modulus) >= 0; i;) h = biSubtract(h, this.modulus), i = biCompare(h, this.modulus) >= 0;
    return h
}

function BarrettMu_multiplyMod(a, b) {
    var c = biMultiply(a, b);
    return this.modulo(c)
}

function BarrettMu_powMod(a, b) {
    var d, e, c = new BigInt;
    for (c.digits[0] = 1, d = a, e = b;;) {
        if (0 != (1 & e.digits[0]) && (c = this.multiplyMod(c, d)), e = biShiftRight(e, 1), 0 == e.digits[0] && 0 == biHighIndex(e)) break;
        d = this.multiplyMod(d, d)
    }
    return c
}
var maxDigits, ZERO_ARRAY, bigZero, bigOne, dpl10, lr10, hexatrigesimalToChar, hexToChar, highBitMasks, lowBitMasks, biRadixBase = 2,
    biRadixBits = 16,
    bitsPerDigit = biRadixBits,
    biRadix = 65536,
    biHalfRadix = biRadix >>> 1,
    biRadixSquared = biRadix * biRadix,
    maxDigitVal = biRadix - 1,
    maxInteger = 9999999999999998;
setMaxDigits(20), dpl10 = 15, lr10 = biFromNumber(1e15), hexatrigesimalToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), hexToChar = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), highBitMasks = new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), lowBitMasks = new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535);
! function() {
    function a(a) {
        var d, e, b = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            c = "";
        for (d = 0; a > d; d += 1) e = Math.random() * b.length, e = Math.floor(e), c += b.charAt(e);
        // return c
        return 'ffffffffffffffff'
    }

    function b(a, b) {
        var c = CryptoJS.enc.Utf8.parse(b),
            d = CryptoJS.enc.Utf8.parse("0102030405060708"),
            e = CryptoJS.enc.Utf8.parse(a),
            f = CryptoJS.AES.encrypt(e, c, { iv: d, mode: CryptoJS.mode.CBC });
        return f.toString()
    }

    function c(a, b, c) {
        var d, e;
        return setMaxDigits(131), d = new RSAKeyPair(b, "", c), e = encryptedString(d, a)
    }

    function d(d, e, f, g) {
        var h = {},
            i = a(16);
        return h.encText = b(d, g), h.encText = b(h.encText, i), h.encSecKey = c(i, e, f), h
    }

    function e(a, b, d, e) {
        var f = {};
        return f.encText = c(a + e, b, d), f
    }
    window.asrsea = d, window.ecnonasr = e
}();
(function() {
    var c1x = NEJ.P,
        dP3x = c1x("nej.g"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        OY5d = c1x("nm.x.ek");
    OY5d.emj = { "色": "00e0b", "流感": "509f6", "这边": "259df", "弱": "8642d", "嘴唇": "bc356", "亲": "62901", "开心": "477df", "呲牙": "22677", "憨笑": "ec152", "猫": "b5ff6", "皱眉": "8ace6", "幽灵": "15bb7", "蛋糕": "b7251", "发怒": "52b3a", "大哭": "b17a8", "兔子": "76aea", "星星": "8a5aa", "钟情": "76d2e", "牵手": "41762", "公鸡": "9ec4e", "爱意": "e341f", "禁止": "56135", "狗": "fccf6", "亲亲": "95280", "叉": "104e0", "礼物": "312ec", "晕": "bda92", "呆": "557c9", "生病": "38701", "钻石": "14af6", "拜": "c9d05", "怒": "c4f7f", "示爱": "0c368", "汗": "5b7a4", "小鸡": "6bee2", "痛苦": "55932", "撇嘴": "575cc", "惶恐": "e10b4", "口罩": "24d81", "吐舌": "3cfe4", "心碎": "875d3", "生气": "e8204", "可爱": "7b97d", "鬼脸": "def52", "跳舞": "741d5", "男孩": "46b8e", "奸笑": "289dc", "猪": "6935b", "圈": "3ece0", "便便": "462db", "外星": "0a22b", "圣诞": "8e7", "流泪": "01000", "强": "1", "爱心": "0CoJU", "女孩": "m6Qyw", "惊恐": "8W8ju", "大笑": "d" };
    OY5d.md = ["色", "流感", "这边", "弱", "嘴唇", "亲", "开心", "呲牙", "憨笑", "猫", "皱眉", "幽灵", "蛋糕", "发怒", "大哭", "兔子", "星星", "钟情", "牵手", "公鸡", "爱意", "禁止", "狗", "亲亲", "叉", "礼物", "晕", "呆", "生病", "钻石", "拜", "怒", "示爱", "汗", "小鸡", "痛苦", "撇嘴", "惶恐", "口罩", "吐舌", "心碎", "生气", "可爱", "鬼脸", "跳舞", "男孩", "奸笑", "猪", "圈", "便便", "外星", "圣诞"]
})();
(function() {
    var c1x = NEJ.P,
        dP3x = c1x("nej.g"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        OY5d = c1x("nm.x.ek"),
        l1x = c1x("nm.x");
    if (v1x.br2x.redefine) return;
    window.GEnc = true;
    var baJ7C = function(ceI8A) {
        var m1x = [];
        k1x.be1x(ceI8A, function(ceH8z) { m1x.push(OY5d.emj[ceH8z]) });
        return m1x.join("")
    };
    var ceE8w = v1x.br2x;
    v1x.br2x = function(V1x, e1x) {
        var j1x = {},
            e1x = NEJ.X({}, e1x),
            lj5o = V1x.indexOf("?");
        if (window.GEnc && /(^|\.com)\/api/.test(V1x) && !(e1x.headers && e1x.headers[dP3x.xG9x] == dP3x.DL1x) && !e1x.noEnc) {
            if (lj5o != -1) {
                j1x = k1x.hl4p(V1x.substring(lj5o + 1));
                V1x = V1x.substring(0, lj5o)
            }
            if (e1x.query) { j1x = NEJ.X(j1x, k1x.ff3x(e1x.query) ? k1x.hl4p(e1x.query) : e1x.query) }
            if (e1x.data) { j1x = NEJ.X(j1x, k1x.ff3x(e1x.data) ? k1x.hl4p(e1x.data) : e1x.data) }
            j1x["csrf_token"] = v1x.gD3x("__csrf");
            V1x = V1x.replace("api", "weapi");
            e1x.method = "post";
            delete e1x.query;
            console.log(j1x);
            console.log(JSON.stringify(j1x));
            console.log(baJ7C(["流泪", "强"]));
            console.log(baJ7C(OY5d.md));
            console.log(baJ7C(["爱心", "女孩", "惊恐", "大笑"]));
            var bIg4k = window.asrsea(JSON.stringify(j1x), baJ7C(["流泪", "强"]), baJ7C(OY5d.md), baJ7C(["爱心", "女孩", "惊恐", "大笑"]));
            e1x.data = k1x.de2x({ params: bIg4k.encText, encSecKey: bIg4k.encSecKey })
        }
        ceE8w(V1x, e1x)
    };
    v1x.br2x.redefine = true
})();
(function() {
    window.setTimeout(function() {
        var bp = document.createElement("script");
        var curProtocol = window.location.protocol.split(":")[0];
        if (curProtocol === "https") { bp.src = "https://zz.bdstatic.com/linksubmit/push.js" } else { bp.src = "http://push.zhanzhang.baidu.com/push.js" }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s)
    }, 3e3)
})();
(function() {})();
(function() {})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        cK2x = c1x("nej.p"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        di2x = c1x("nm.u"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        n1x = c1x("nm.l"),
        baV7O = "http://s1.music.126.net/style/web2/emt/emoji_{ID}.png",
        j1x = { "大笑": "86", "可爱": "85", "憨笑": "359", "色": "95", "亲亲": "363", "惊恐": "96", "流泪": "356", "亲": "362", "呆": "352", "哀伤": "342", "呲牙": "343", "吐舌": "348", "撇嘴": "353", "怒": "361", "奸笑": "341", "汗": "97", "痛苦": "346", "惶恐": "354", "生病": "350", "口罩": "351", "大哭": "357", "晕": "355", "发怒": "115", "开心": "360", "鬼脸": "94", "皱眉": "87", "流感": "358", "爱心": "33", "心碎": "34", "钟情": "303", "星星": "309", "生气": "314", "便便": "89", "强": "13", "弱": "372", "拜": "14", "牵手": "379", "跳舞": "380", "禁止": "374", "这边": "262", "爱意": "106", "示爱": "376", "嘴唇": "367", "狗": "81", "猫": "78", "猪": "100", "兔子": "459", "小鸡": "450", "公鸡": "461", "幽灵": "116", "圣诞": "411", "外星": "101", "钻石": "52", "礼物": "107", "男孩": "0", "女孩": "1", "蛋糕": "337", 18: "186", "圈": "312", "叉": "313" },
        ceA8s = function() {
            if (h1x && h1x.z1x) { h1x.dispatchEventalias = h1x.z1x }
        };
    ceA8s();
    l1x.baX7Q = function(bK2x) {
        if (!bK2x || bK2x.copyrightId === undefined || !!bK2x.program) return false;
        if (window.GAbroad) {
            bK2x.fee = 0;
            return true
        }
        if (bK2x.status < 0) return true;
        var OR5W;
        if (typeof GCopyrights !== "undefined") OR5W = GCopyrights;
        try {
            if (!OR5W && !!top.GCopyrights) OR5W = top.GCopyrights
        } catch (e) {}
        if (OR5W) {
            var s1x = k1x.cV2x(OR5W, bK2x.copyrightId);
            if (s1x >= 0) return true
        }
        return false
    };
    l1x.bbb7U = function() {
        var zA0x = /^\/m\/(song|album|artist|playlist|dj|search)\?/,
            um8e = { 2: "artist", 13: "playlist", 17: "dj", 19: "album", 18: "song", 31: "toplist", 32: "searchsong", 33: "searchlyric", 34: "event", 70: "djradio", 24: "day", 50: "record" },
            cey8q = { song: "单曲", album: "专辑", artist: "歌手", playlist: "歌单", dj: "电台节目", searchsong: "单曲搜索", searchlyric: "歌词搜索", toplist: "榜单", event: "动态", djradio: "电台", day: "每日歌曲推荐", record: "听歌排行榜" };
        var cew8o = function(J1x, j1x, OQ5V) {
            switch (J1x) {
                case "event":
                    j1x = j1x.split("|");
                    return "/event?id=" + j1x[0] + "&uid=" + j1x[1];
                case "searchsong":
                case "searchlyric":
                    var t1x = J1x == "searchsong" ? 1 : 1006;
                    return "/search/m/?s=" + encodeURIComponent(j1x) + "&type=" + t1x;
                case "toplist":
                    return "/discover/toplist?id=" + j1x + "&_hash=songlist-" + OQ5V;
                case "day":
                    return "/discover/recommend/taste" + "?_hash=songlist-" + OQ5V;;
                case "record":
                    j1x = j1x.split("|");
                    return "/user/songs/rank?id=" + j1x[0] + "&cat=" + j1x[1];
                    break;
                default:
                    return "/" + J1x + "?id=" + j1x + "&_hash=songlist-" + OQ5V
            }
        };
        return function(dH3x, OQ5V) {
            if (!dH3x) return null;
            var Jc2x = dH3x.fid || (dH3x.type != 18 ? dH3x.type : null),
                bbw7p = dH3x.fdata || dH3x.rid,
                bHZ4d = dH3x.page || dH3x.fhref;
            var J1x = um8e[Jc2x];
            if (!J1x) {
                var xq9h = (bHZ4d || "").match(zA0x);
                if (xq9h) J1x = xq9h[1]
            }
            if (!J1x) return null;
            return { title: cey8q[J1x], link: !um8e[Jc2x] ? bHZ4d : cew8o(J1x, bbw7p, OQ5V), fid: Jc2x, fdata: bbw7p }
        }
    }();
    l1x.SU6O = function(ko5t) {
        var dp3x = ko5t;
        if (typeof GUser !== "undefined" && GUser.userId > 0) dp3x = GUser;
        return dp3x
    };
    l1x.gW4a = function() {
        if (typeof GUser !== "undefined" && GUser.userId > 0) {
            return true
        } else {
            top.login();
            return false
        }
    };
    l1x.Im2x = function() {
        var zA0x = /#(.*?)$/;
        return function(gi3x) {
            var iJ5O = gi3x === false ? location : top.location;
            return zA0x.test(iJ5O.href) ? RegExp.$1 : ""
        }
    }();
    l1x.zs0x = function() {
        var bHV4Z = l1x.bbR8J().supported,
            zr0x = a0x.cU2x("audio"),
            bHU4Y = zr0x.canPlayType && zr0x.canPlayType("audio/mpeg");
        if (cK2x.Qy5D.mac) {
            if (bHU4Y) return 2;
            if (bHV4Z) return 1;
            return 0
        } else {
            if (bHV4Z) return 1;
            if (bHU4Y) return 2;
            return 0
        }
    };
    l1x.bbR8J = function() {
        var fZ3x, bbS8K = !1,
            bbV8N = "";
        if (cK2x.cR2x.browser == "ie") {
            try { fZ3x = new ActiveXObject("ShockwaveFlash.ShockwaveFlash") } catch (e) { fZ3x = null }
            if (fZ3x) {
                bbS8K = !0;
                bbV8N = fZ3x.GetVariable("$version")
            }
        } else {
            if (navigator.plugins && navigator.plugins.length > 0) {
                fZ3x = navigator.plugins["Shockwave Flash"];
                if (fZ3x) {
                    bbS8K = !0;
                    bbV8N = fZ3x.description
                }
            }
        }
        return { supported: bbS8K, version: bbV8N }
    };
    l1x.pY7R = function() {
        return "网易云音乐"
    };
    l1x.cdU8M = function() {
        return j1x
    };
    l1x.bHT4X = function(da2x) {
        var C1x = j1x[da2x];
        return C1x == null ? "" : baV7O.replace("{ID}", C1x)
    };
    l1x.so8g = function(bi1x, dC3x, Ik2x) {
        if (!bi1x) return "";
        if (!!Ik2x) { bi1x = l1x.cdR8J(bi1x) }
        return l1x.bcf8X(l1x.cdP8H(bi1x, dC3x))
    };
    l1x.bcm8e = function() {
        var OG5L = { AT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))/g, LINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)/g, ACT_NOLINK: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|(#[^\[\]\/\\\#\r\n]+?#)/g, ACT: /(@([\u4e00-\u9fa5A-Za-z0-9-_]{2,})((?=[ :@：])|$))|((http[s]{0,1}):\/\/[\-a-zA-Z0-9\.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(\/[a-zA-Z0-9\\\.\-~!@#$%\^&\*\+\?:_\/=<>]*)?)|(#[^\[\]\/\\\#\r\n]+?#)/g, LING: /\n/g, BLANK: /\s/g, MLINE: /([ \f\r\t\v]*\n){2,}/g },
            bcq8i = { LINK: '<a href="${url}" class="${klass}">${value}</a>', AT: '<a href="${url}" class="${klass}">@${value}</a>', ACT: '<a href="javascript:;" class="${klass}" data-title="${value}" data-action="activity">${value}</a>' },
            cdK8C = { r: /\<|\>|\&lt;|\&gt;|\&|\'|\"/g, "<": "&lt;", ">": "&gt;", "&": "&amp;", " ": "&nbsp;", '"': "&quot;", "'": "&#39;", "&lt;": "&lt;", "&gt;": "&gt;" },
            cdH8z = ["AT", "LINK", "ACT_NOLINK", "ACT"];
        var cdF8x = function(dY3x, bcz8r) {
            dY3x = Ij2x(dY3x);
            if (!!bcz8r) { dY3x = dY3x.replace(OG5L.MLINE, "\n\n").replace(OG5L.LING, "</br>") }
            dY3x = l1x.bcf8X(dY3x);
            return dY3x
        };
        var Ij2x = function(bi1x) {
            return k1x.Cy0x(cdK8C, bi1x)
        };
        return function(dY3x, e1x, ec3x) {
            e1x = e1x || {};
            ec3x = ec3x || {};
            ec3x.actHash = {};
            var cdE8w = !!e1x.parseLink,
                cdB8t = !!e1x.parseAct,
                cdA8s = e1x.linkTpl || bcq8i.LINK,
                cdy8q = e1x.atTpl || bcq8i.AT,
                cdx8p = e1x.actTpl || bcq8i.ACT,
                bcz8r = !!e1x.keepSpace,
                bcQ8I = e1x.linkKlass || "s-fc7";
            cuj2x = e1x.actBiJson || "";
            if (!dY3x) return "";
            dY3x = dY3x.trim().replace(/&amp;/g, "&").replace(/&nbsp;/g, " ");
            var kr5w = cdH8z[cdE8w + 2 * cdB8t],
                cM2x = OG5L[kr5w],
                bs2x = null,
                lc5h = null,
                gv3x = 0,
                cuk2x = "",
                cul2x = "";
            var yU0x = [];
            cM2x.lastIndex = 0;
            while (bs2x = cM2x.exec(dY3x)) {
                var fI3x = { html: "", before: bs2x.index - 1, after: bs2x.index + bs2x[0].length };
                if (bs2x[1]) {
                    var lc5h = bs2x[2].replace(/[^\x00-\xff]/g, "**");
                    if (lc5h.length < 4 || lc5h.length > 32) {} else {
                        var OA5F = a0x.en3x(cdy8q);
                        fI3x.html = a0x.bP2x(OA5F, { value: Ij2x(bs2x[2]), url: encodeURI("/user/home?nickname=" + bs2x[2]), klass: bcQ8I });
                        yU0x.push(fI3x)
                    }
                } else if (bs2x.length > 8 && bs2x[4]) {
                    var OA5F = a0x.en3x(cdA8s);
                    fI3x.html = a0x.bP2x(OA5F, { value: Ij2x(bs2x[4]), url: encodeURI(bs2x[4]), klass: bcQ8I });
                    yU0x.push(fI3x)
                } else {
                    var bHK4O = kr5w == "ACT_NOLINK" ? 4 : 9;
                    var OA5F = a0x.en3x(cdx8p);
                    fI3x.html = a0x.bP2x(OA5F, { value: Ij2x(bs2x[bHK4O]), klass: bcQ8I });
                    yU0x.push(fI3x);
                    ec3x.actHash[bs2x[bHK4O].slice(1, -1)] = true
                }
            }
            var cdn8f = yU0x.length,
                ko5t = { before: dY3x.length - 1, after: 0 },
                bdt8l = "";
            for (var i = 0; i <= cdn8f; i++) {
                var in4r, gu3x;
                in4r = (yU0x[i - 1] || ko5t).after;
                gu3x = (yU0x[i] || ko5t).before;
                if (gu3x >= in4r && in4r >= 0 && gu3x <= dY3x.length - 1) { bdt8l += cdF8x(dY3x.substring(in4r, gu3x + 1), bcz8r) }
                if (yU0x[i]) { bdt8l += yU0x[i].html }
            }
            return bdt8l
        }
    }();
    l1x.cdR8J = function() {
        var cM2x = new RegExp("(http[s]{0,1})://[-a-zA-Z0-9.]+(:(6553[0-5]|655[0-2][0-9]|65[0-4][0-9][0-9]|6[0-4][0-9][0-9][0-9]|\\d{2,4}|[1-9]))?(/[a-zA-Z0-9\\.\\-~!@#$%^&*+?:_/=<>]*)?", "g");
        return function(bi1x) {
            return (bi1x || "").replace(/&amp;/g, "&").replace(/&nbsp;/g, " ").replace(cM2x, function($0, $1) {
                return "<a href=" + $0 + ' class="link u-link"><i class="u-dicn u-dicn-28"></i>网页链接</a>'
            })
        }
    }();
    l1x.cdP8H = function() {
        var cM2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var eD3x = function(lc5h, dC3x) {
            return '<a href="/user/home?nickname=' + encodeURIComponent(lc5h) + '" class="' + (dC3x || "") + '">@' + lc5h + "</a>"
        };
        return function(bi1x, dC3x) {
            return (bi1x || "").replace(cM2x, function($0, $1) {
                return eD3x($1, dC3x)
            })
        }
    }();
    l1x.bcf8X = function() {
        var cM2x = /\[(.*?)\]/g;
        return function(bi1x) {
            return (bi1x || "").replace(cM2x, function($1, $2) {
                var V1x = l1x.bHT4X($2);
                return !V1x ? $1 : '<img src="' + V1x + '"/>'
            })
        }
    }();
    l1x.yB9s = function(E1x, dC3x) { a0x.bz2x(E1x, dC3x) ? a0x.w1x(E1x, dC3x) : a0x.x1x(E1x, dC3x) };
    l1x.Ot4x = function(cJ2x, hB4F) {
        cJ2x = a0x.y1x(cJ2x);
        hB4F = a0x.y1x(hB4F);
        if (!cJ2x || !hB4F) return !1;
        for (hB4F = hB4F.parentNode; !!hB4F && hB4F != cJ2x; hB4F = hB4F.parentNode);
        return hB4F == cJ2x
    };
    l1x.lH5M = function() {
        var bHJ4N = function(fn3x) {
            return (fn3x < 10 ? "0" : "") + fn3x
        };
        return function(jM5R) {
            jM5R = parseInt(jM5R) || 0;
            if (!jM5R) return "00:00";
            var Oq4u = Math.floor(jM5R % 60),
                cdj8b = Math.floor(jM5R / 60);
            return bHJ4N(cdj8b) + ":" + bHJ4N(Oq4u)
        }
    }();
    l1x.wE9v = function(fj3x, uX8P) {
        if (!fj3x || fj3x.length == 0) return "";
        uX8P = uX8P || "/";
        var bs2x = [];
        for (var i = fj3x.length - 1; i >= 0; i--) { bs2x.unshift(fj3x[i].name) }
        return bs2x.join(uX8P)
    };
    l1x.pu7n = function() {
        var Oo4s = function(hh4l, dC3x, cJ2x) {
            if (!hh4l || !hh4l.name) return "";
            if (!hh4l.id) return '<span class="' + dC3x + '">' + k1x.dJ3x(hh4l.name) + "</span>";
            return "<a" + (cJ2x ? ' target="_blank"' : "") + ' class="' + dC3x + '" href="/artist?id=' + hh4l.id + '" hidefocus="true">' + k1x.dJ3x(hh4l.name) + "</a>"
        };
        return function(fj3x, T1x, uX8P, cJ2x, bHF4J) {
            if (!fj3x || !fj3x.length) return "";
            uX8P = uX8P || "/";
            T1x = T1x || "";
            Id2x = "";
            var eH3x = [];
            for (var i = 0, i1x = [], rC8u = [], fh3x; i < fj3x.length; ++i) {
                eH3x.push(fj3x[i].name);
                if (!fj3x[i] || fj3x[i].id <= 0) {
                    rC8u.push(fj3x[i]);
                    continue
                }
                if (k1x.gc3x(T1x)) { fh3x = T1x(fj3x[i]) } else { fh3x = Oo4s(fj3x[i], T1x, cJ2x) }
                if (fh3x && bHF4J && fj3x[i].tns && fj3x[i].tns.length > 0) {
                    Id2x = k1x.dJ3x(fj3x[i].tns[0]);
                    fh3x += '<span class="s-fc8" title="' + Id2x + '"> - (' + Id2x + ")</span>"
                }!!fh3x && i1x.push(fh3x)
            }
            for (var i = 0, fh3x; i < rC8u.length; ++i) {
                if (k1x.gc3x(T1x)) { fh3x = T1x(rC8u[i]) } else { fh3x = Oo4s(rC8u[i], T1x, cJ2x) }
                if (fh3x && bHF4J && rC8u[i].tns && rC8u[i].tns.length > 0) {
                    Id2x = k1x.dJ3x(rC8u[i].tns[0]);
                    fh3x += '<span class="s-fc8" title="' + Id2x + '"> - (' + Id2x + ")</span>"
                }!!fh3x && i1x.push(fh3x)
            }
            return '<span title="' + eH3x.join(uX8P) + '">' + i1x.join(uX8P) + "</span>"
        }
    }();
    l1x.wN9E = function(eY3x) {
        return !!eY3x && /^[0-9]{11}$/.test(eY3x)
    };
    l1x.cum2x = function(eY3x) {
        if (!l1x.wN9E(eY3x)) return eY3x;
        return eY3x.substring(0, 3) + "****" + eY3x.substr(7)
    };
    l1x.iV5a = function() {
        var cM2x = /^\s+$/g;
        return function(hw4A) {
            return !hw4A || cM2x.test(hw4A)
        }
    }();
    l1x.Ic2x = function() {
        var bej8b = /[^\x00-\xfff]/g;
        return function(hw4A) {
            var cdb8T = hw4A.match(bej8b) || [],
                dL3x = cdb8T.length;
            return hw4A.length + dL3x
        }
    }();
    l1x.ym9d = function() {
        var bej8b = /[^\x00-\xfff]/;
        return function(hw4A, gh3x) {
            for (var i = 0, len = hw4A.length; i < len && gh3x > 0; i++) {
                if (bej8b.test(hw4A.charAt(i))) {
                    gh3x -= 2;
                    if (gh3x < 0) {
                        break
                    }
                } else { gh3x -= 1 }
            }
            return hw4A.substring(0, i)
        }
    }();
    l1x.Dw1x = function(hw4A, gh3x, Pi5n) {
        gh3x = gh3x || 10;
        Pi5n = Pi5n || nej.p.cR2x.engine == "trident" && parseInt(nej.p.cR2x.release) < 5;
        if (Pi5n && l1x.Ic2x(hw4A) > gh3x) {
            return l1x.ym9d(hw4A, gh3x) + "..."
        } else {
            return hw4A
        }
    };
    l1x.bHE4I = function(f1x) {
        return f1x === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(f1x.type || f1x.href || ~f1x.tabIndex)
    };
    l1x.ccZ8R = function(d1x, cJ2x) {
        if (!d1x || !cJ2x) return !0;
        var f1x, t1x = d1x.type.toLowerCase();
        if (t1x == "mouseout") { f1x = d1x.relatedTarget || d1x.toElement } else if (t1x == "mouseover") { f1x = d1x.relatedTarget || d1x.fromElement }
        return !f1x || f1x !== cJ2x && !l1x.Ot4x(cJ2x, f1x)
    };
    l1x.rp7i = function() {
        R1x = {};
        return function(f1x, dI3x) {
            var C1x = a0x.kB5G(f1x),
                J1x = "hover-" + C1x;
            if (!dI3x || !C1x || !!R1x[J1x]) return;
            R1x[J1x] = !0;
            h1x.q1x(C1x, "mouseover", function() {
                var beN8F = a0x.I1x(f1x, "hshow") || [];
                var beP8H = a0x.I1x(f1x, "icn-dislike") || [];
                a0x.x1x(C1x, "z-hover");
                a0x.X1x(beN8F[0], "display", "block");
                a0x.X1x(beP8H[0], "display", "block")
            });
            h1x.q1x(C1x, "mouseout", function() {
                var beN8F = a0x.I1x(f1x, "hshow") || [];
                var beP8H = a0x.I1x(f1x, "icn-dislike") || [];
                a0x.w1x(C1x, "z-hover");
                a0x.X1x(beN8F[0], "display", "none");
                a0x.X1x(beP8H[0], "display", "none")
            })
        }
    }();
    l1x.bHD4H = function() {
        var bv2x = { r: /\(|\)|\[|\]|\{|\}|\*|\+|\^|\$|\?|\!|\\|\||\./gi, "(": "\\(", ")": "\\)", "[": "\\[", "]": "\\]", "{": "\\{", "}": "\\}", "*": "\\*", "+": "\\+", "^": "\\^", $: "\\$", "?": "\\?", "!": "\\!", "\\": "\\\\", "|": "\\|", ".": "\\." };
        return function(hw4A) {
            return k1x.Cy0x(bv2x, hw4A)
        }
    }();
    l1x.su8m = function(bA2x) {
        if (k1x.FZ1x(bA2x)) bA2x = bA2x.getTime();
        var fL3x = new Date,
            nd6X = fL3x.getTime() - bA2x;
        if (nd6X <= 6e4) return "刚刚";
        var qk7d = fL3x.getHours() * 36e5 + fL3x.getMinutes() * 6e4 + fL3x.getSeconds() * 1e3;
        if (nd6X <= qk7d) {
            if (nd6X < 36e5) {
                var Oc4g = Math.floor(nd6X / 6e4);
                return Oc4g + "分钟前"
            }
            return k1x.iU5Z(bA2x, "HH:mm")
        } else {
            if (nd6X < qk7d + 864e5) {
                return "昨天" + k1x.iU5Z(bA2x, "HH:mm")
            } else {
                var gj3x = fL3x.getFullYear(),
                    bfp9g = new Date(gj3x, 0, 1);
                var qk7d = fL3x.getTime() - bfp9g.getTime();
                if (nd6X < qk7d) {
                    return k1x.iU5Z(bA2x, "M月d日 HH:mm")
                }
                return k1x.iU5Z(bA2x, "yyyy年M月d日")
            }
        }
    };
    l1x.ccV8N = function(bA2x) {
        if (k1x.FZ1x(bA2x)) bA2x = bA2x.getTime();
        var fL3x = new Date,
            nd6X = fL3x.getTime() - bA2x;
        var qk7d = fL3x.getHours() * 36e5 + fL3x.getMinutes() * 6e4 + fL3x.getSeconds() * 1e3;
        if (nd6X <= qk7d) {
            return "今天" + k1x.iU5Z(bA2x, "HH:mm")
        } else {
            if (nd6X < qk7d + 864e5) {
                return "昨天" + k1x.iU5Z(bA2x, "HH:mm")
            } else {
                return k1x.iU5Z(bA2x, "yy-MM-dd HH:mm")
            }
        }
    };
    l1x.ccT8L = function(bA2x) {
        if (k1x.FZ1x(bA2x)) bA2x = bA2x.getTime();
        var fL3x = new Date,
            nd6X = fL3x.getTime() - bA2x;
        if (nd6X <= 6e4) return "刚刚";
        var qk7d = fL3x.getHours() * 36e5 + fL3x.getMinutes() * 6e4 + fL3x.getSeconds() * 1e3;
        if (nd6X <= qk7d) {
            if (nd6X < 36e5) {
                var Oc4g = Math.floor(nd6X / 6e4);
                return Oc4g + "分钟前"
            }
            return k1x.iU5Z(bA2x, "HH:mm")
        } else {
            if (nd6X < qk7d + 864e5) {
                return "昨天" + k1x.iU5Z(bA2x, "HH:mm")
            } else if (nd6X < qk7d + 864e5 * 6) {
                var gj3x = fL3x.getFullYear(),
                    bfp9g = new Date(gj3x, 0, 1);
                var qk7d = fL3x.getTime() - bfp9g.getTime();
                if (nd6X < qk7d) {
                    return k1x.iU5Z(bA2x, "M月d日 HH:mm")
                }
                return k1x.iU5Z(bA2x, "yyyy年M月d日")
            } else {
                return "最近"
            }
        }
    };
    l1x.NZ4d = function() {
        var cM2x = /\{(.*?)\}/gi;
        return function(pO7H, j1x) {
            return (pO7H || "").replace(cM2x, function($1, $2) {
                var A1x = j1x[$2];
                return A1x == null ? $1 : A1x
            })
        }
    }();
    l1x.eP3x = function() {
        var bg1x = Array.prototype.slice.call(arguments, 0),
            pO7H = bg1x.shift();
        if (pO7H) {
            return pO7H.replace(/{(\d+)}/g, function($1, $2) {
                return $2 < bg1x.length ? bg1x[$2] : $1
            })
        }
        return ""
    };
    l1x.HZ2x = function(i1x, dC3x, kP5U) {
        return "";
        kP5U = kP5U || " - ";
        if (i1x && i1x.length) {
            return kP5U + (!!dC3x ? '<span class="' + dC3x + '">' + i1x[0] + "</span>" : i1x[0])
        }
        return ""
    };
    l1x.bHz4D = function() {
        if (window.getSelection) {
            var ql7e = window.getSelection();
            if (ql7e && ql7e.focusNode && ql7e.focusNode.tagName) {
                var xU9L = a0x.cQ2x(ql7e.focusNode);
                for (var i = 0, xM9D; i < xU9L.length; ++i) {
                    xM9D = xU9L[i].tagName;
                    if (!xM9D) continue;
                    xM9D = xM9D.toLowerCase();
                    if (xM9D == "textarea" || xM9D == "input") return !0
                }
            }
        } else if (document.selection) {
            var cG2x = document.selection.createRange();
            if (cG2x) {
                var f1x = cG2x.parentElement();
                if (f1x && f1x.tagName) {
                    var xM9D = f1x.tagName.toLowerCase();
                    if (xM9D == "textarea" || xM9D == "input") return !0
                }
            }
        }
        return !1
    };
    l1x.xP9G = function(fq3x) {
        if (/^[A-Z]\:\\/i.test(fq3x)) { fq3x = fq3x.split("\\") } else { fq3x = fq3x.split("/") }
        fq3x = fq3x[fq3x.length - 1];
        return fq3x
    };
    l1x.ccQ8I = function() {
        var CL1x = [13, 17, 34, 19, 18, 21];
        return function(C1x) {
            var bs2x = (C1x || "").split("_");
            return { type: CL1x[bs2x[2]] || -1, id: bs2x[3] || "" }
        }
    }();
    l1x.bfW9N = function(dp3x) {
        if (4 == dp3x.userType) {
            return '<sup class="icn u-icn2 u-icn2-music2"></sup>'
        } else if (dp3x.authStatus == 1) {
            return '<sup class="u-icn u-icn-1"></sup>'
        } else if (dp3x.expertTags && dp3x.expertTags.length) {
            return '<sup class="u-icn u-icn-84"></sup>'
        }
    };
    l1x.NQ4U = function(fn3x) {
        fn3x += "";
        if (fn3x) {
            return fn3x.substr(0, 3) + "****" + fn3x.substr(fn3x.length - 4)
        }
    };
    l1x.cun2x = function(s1x, cp2x) {
        return (s1x % cp2x + cp2x) % cp2x
    };
    l1x.bHy4C = function() {
        var CL1x = ["playlist", "program", "event", "album", "song", "mv", "topic"];
        return function(C1x) {
            var bs2x = (C1x || "").split("_"),
                m1x = { type: CL1x[bs2x[2]] || -1, id: bs2x[3] || "" };
            if (m1x.type == "event") {
                m1x.uid = bs2x[4] || "";
                return "/" + m1x.type + "?id=" + m1x.id + "&uid=" + m1x.uid
            }
            return "/" + m1x.type + "?id=" + m1x.id
        }
    }();
    l1x.bHx4B = function() {
        var CL1x = ["歌单", "电台节目", "动态", "专辑", "单曲", "MV", "专栏文章"];
        return function(C1x) {
            var bs2x = (C1x || "").split("_");
            return CL1x[bs2x[2]] || "资源"
        }
    }();
    l1x.ccM8E = function(bD2x) {
        var qs = bD2x.length > 0 ? bD2x.substring(1) : "",
            args = {},
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            i = 0,
            len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) { args[name] = value }
        }
        return args
    };
    l1x.bHw4A = function(xD9u, NO4S) {
        var Tw6q = 0,
            dX3x = new Array;
        k1x.be1x(xD9u, function(V1x, s1x) {
            var cY2x = a0x.cU2x("img");
            cY2x.src = V1x;
            h1x.q1x(cY2x, "load", function(s1x, d1x) {
                dX3x[s1x] = 1;
                Tw6q++;
                if (Tw6q == xD9u.length) NO4S(xD9u, dX3x)
            }.g1x(this, s1x));
            h1x.q1x(cY2x, "error", function(d1x, s1x) {
                dX3x[s1x] = 0;
                Tw6q++;
                if (Tw6q == xD9u.length) NO4S(xD9u, dX3x)
            }.g1x(this, s1x))
        })
    };
    l1x.Tz6t = function(i1x, dD3x) {
        var m1x = [];
        k1x.be1x(i1x, function(r1x, s1x, ig4k) { m1x.push(dD3x(r1x, s1x, ig4k)) });
        return m1x
    };
    l1x.Uw6q = function(i1x, dD3x, ig4k) {
        var m1x = [];
        k1x.be1x(i1x, function(r1x, s1x) {
            if (dD3x.call(ig4k, r1x, s1x, i1x)) { m1x.push(r1x) }
        });
        return m1x
    };
    l1x.ccJ8B = function(bi1x) {
        return k1x.dJ3x((bi1x || "").replace(/\s{2,}/g, " ").trim())
    };
    l1x.bgA9r = function(bf1x) {
        if (bf1x.transNames && bf1x.transNames.length) {
            return bf1x.transNames[0]
        } else if (bf1x.alias && bf1x.alias.length) {
            return bf1x.alias[0]
        }
    };
    l1x.bHv4z = function(PW5b) {
        if (PW5b) {
            return PW5b.replace(/\n{2,}/g, "<br/><br/>").replace(/\n/g, "<br/>").replace(/(<br\/?>){2,}/g, "<br/><br/>")
        }
    };
    l1x.bgC9t = function(f1x) {
        var f1x = a0x.y1x(f1x),
            da2x = f1x && f1x.getElementsByTagName("textarea")[0],
            J1x = a0x.u1x(f1x, "key"),
            bgD9u = a0x.u1x(f1x, "simple") == "1",
            bHu4y = p1x.uv8n.fU3x();
        if (!(f1x && da2x && J1x)) return;
        if (bgD9u) { bHu4y.rc7V(J1x, l1x.Ep1x(JSON.parse(da2x.value))) } else { bHu4y.rc7V(J1x, JSON.parse(da2x.value || da2x.defaultValue)) }
        f1x.innerHTML = "";
        return J1x
    };
    l1x.ccG8y = function(oC6w) {
        if (!oC6w.onbeforelistload) { oC6w.onbeforelistload = function(d1x) { d1x.value = '<div class="u-load s-fc4"><i class="icn"></i> 加载中...</div>' } }
        if (!oC6w.onemptylist) { oC6w.onemptylist = function(d1x) { d1x.value = '<div class="n-nmusic"><h3 class="f-ff2"><i class="u-icn u-icn-21"></i>' + (oC6w.emptyMsg || "暂时还没有数据") + "</h3></div>" } }
        return oC6w
    };
    l1x.Ep1x = function(hs4w) {
        if (k1x.em3x(hs4w)) {
            var ec3x = [];
            k1x.be1x(hs4w, function(bgD9u) { ec3x.push(bHt4x(bgD9u)) });
            return ec3x
        } else {
            return bHt4x(hs4w)
        }

        function bHt4x(hs4w) {
            if (!hs4w) return null;
            var ec3x = { album: hs4w.al, alias: hs4w.alia || hs4w.ala || [], artists: hs4w.ar || [], commentThreadId: "R_SO_4_" + hs4w.id, copyrightId: hs4w.cp || 0, duration: hs4w.dt || 0, id: hs4w.id, mvid: hs4w.mv || 0, name: hs4w.name || "", cd: hs4w.cd, position: hs4w.no || 0, ringtone: hs4w.rt, rtUrl: hs4w.rtUrl, status: hs4w.st || 0, pstatus: hs4w.pst || 0, fee: hs4w.fee || 0, version: hs4w.v || 0, eq: hs4w.eq, songType: hs4w.t || 0, mst: hs4w.mst, score: hs4w.pop || 0, ftype: hs4w.ftype, rtUrls: hs4w.rtUrls, transNames: hs4w.tns, privilege: hs4w.privilege, lyrics: hs4w.lyrics };
            return ec3x
        }
    };
    l1x.cuo2x = function() {
        var f1x = a0x.mI6C('<div class="u-mask u-mask-light"></div>' + '<div class="m-opentip">' + '<div class="lay">' + '<div class="note">' + "<h3>分享打不开？</h3>" + '<p>请点击右上角<br>选择<span class="s-fc5">“分享到...”</span></p>' + "</div></div></div>");
        document.body.appendChild(f1x);
        h1x.q1x(f1x, "click", function(d1x) {
            h1x.bh1x(d1x);
            a0x.cH2x(f1x)
        })
    };
    l1x.lN6H = function(cv2x) {
        if (cv2x < 1e5) {
            return cv2x
        } else {
            return Math.floor(cv2x / 1e4) + "万"
        }
    };
    l1x.vn9e = function(cv2x, da2x) {
        return "<i>" + (cv2x ? "(" + cv2x + ")" : da2x) + "</i>"
    };
    l1x.bHr4v = function(t1x, hp4t) {
        var e1x = {};
        if (!k1x.kg5l(hp4t)) {
            return e1x
        }
        switch (parseInt(t1x)) {
            case 17:
                e1x.title = hp4t.name;
                e1x.author = (hp4t.radio || []).name;
                e1x.picUrl = hp4t.coverUrl;
                e1x.category = hp4t.radio.category;
                break;
            case 19:
                e1x.title = hp4t.name;
                e1x.author = l1x.wE9v(hp4t.artists);
                e1x.authors = l1x.wE9v(hp4t.artists, " / ");
                e1x.picUrl = hp4t.picUrl;
                break;
            case 13:
                e1x.title = hp4t.name;
                e1x.author = (hp4t.creator || []).nickname;
                e1x.picUrl = hp4t.coverImgUrl;
                break;
            case 18:
                e1x.title = hp4t.name;
                e1x.author = l1x.wE9v(hp4t.artists);
                e1x.picUrl = (hp4t.album || []).picUrl;
                break;
            case 20:
                e1x.title = hp4t.name;
                e1x.author = "";
                e1x.picUrl = hp4t.img1v1Url;
                break;
            case 21:
                e1x.title = hp4t.name;
                e1x.author = hp4t.artistName;
                e1x.authors = l1x.wE9v(hp4t.artists, " / ");
                e1x.picUrl = hp4t.newCover || hp4t.cover;
                break;
            case 70:
                e1x.title = hp4t.name;
                e1x.author = (hp4t.dj || []).nickname;
                e1x.picUrl = hp4t.picUrl;
                e1x.category = hp4t.category;
                break;
            default:
                break
        }
        return e1x
    };
    l1x.bHq4u = function() {
        return location.hostname.indexOf("igame.163.com") >= 0
    };
    l1x.ccB8t = function(eD3x, vm9d, e1x) {
        var bL2x, bg1x, m1x;
        var jm5r = null;
        var NC4G = 0;
        if (!e1x) e1x = {};
        var TD6x = function() {
            NC4G = e1x.leading === false ? 0 : +(new Date);
            jm5r = null;
            m1x = eD3x.apply(bL2x, bg1x);
            if (!jm5r) bL2x = bg1x = null
        };
        return function() {
            var fL3x = +(new Date);
            if (!NC4G && e1x.leading === false) NC4G = fL3x;
            var bhx9o = vm9d - (fL3x - NC4G);
            bL2x = this;
            bg1x = arguments;
            if (bhx9o <= 0 || bhx9o > vm9d) {
                if (jm5r) {
                    clearTimeout(jm5r);
                    jm5r = null
                }
                NC4G = fL3x;
                m1x = eD3x.apply(bL2x, bg1x);
                if (!jm5r) bL2x = bg1x = null
            } else if (!jm5r && e1x.trailing !== false) { jm5r = setTimeout(TD6x, bhx9o) }
            return m1x
        }
    };
    l1x.bHp4t = function(eD3x, vm9d, qq7j) {
        var jm5r, bg1x, bL2x, Nw4A, m1x;
        var TD6x = function() {
            var gv3x = new Date - Nw4A;
            if (gv3x < vm9d && gv3x >= 0) { jm5r = setTimeout(TD6x, vm9d - gv3x) } else {
                jm5r = null;
                if (!qq7j) {
                    m1x = eD3x.apply(bL2x, bg1x);
                    if (!jm5r) bL2x = bg1x = null
                }
            }
        };
        return function() {
            bL2x = this;
            bg1x = arguments;
            Nw4A = new Date;
            var bhF9w = qq7j && !jm5r;
            if (!jm5r) jm5r = setTimeout(TD6x, vm9d);
            if (bhF9w) {
                m1x = eD3x.apply(bL2x, bg1x);
                bL2x = bg1x = null
            }
            return m1x
        }
    };
    l1x.Nv4z = function(f1x, is5x) {
        if (f1x) {
            var f1x = f1x.firstElementChild;
            if (f1x) {
                f1x.firstElementChild && (f1x = f1x.firstElementChild);
                f1x.setAttribute("xlink:href", "/style/pc/svg/" + is5x)
            }
        }
    };
    l1x.bHo4s = function(eH3x) {
        if (!eH3x || !eH3x.length) {
            return
        }
        eH3x = /^#(.+?)#$/.exec(eH3x)[1];
        eH3x = eH3x.replace(/\s/g, " ");
        v1x.br2x("/api/act/detail", {
            type: "json",
            method: "post",
            data: k1x.de2x({ actname: eH3x }),
            onload: function(Q1x) {
                if (!Q1x || Q1x.code != 200 || !Q1x.act) { n1x.Z1x.M1x({ type: 2, tip: "该话题暂未创建" }) } else { location.dispatch2("/activity?id=" + Q1x.act.actId) }
            },
            onerror: function(bQ2x) { n1x.Z1x.M1x({ type: 2, tip: "操作失败，请稍后再试" }) }
        })
    };
    l1x.bhN9E = function(Nu4y, xi9Z) {
        if (!Nu4y || !xi9Z) return false;
        if (Nu4y == xi9Z) return true;
        return l1x.bhN9E(Nu4y, xi9Z.parentNode)
    };
    a0x.fz3x = function(bB2x, kQ5V) {
        if (!bB2x) return null;
        if (!kQ5V) return bB2x.firstChild;
        return a0x.I1x(bB2x, kQ5V)[0]
    };
    l1x.ccy8q = function(hw4A) {
        return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(hw4A)
    };
    l1x.cup2x = function(sj8b) {
        if (!sj8b) {
            return "0b"
        }
        var ccu8m = ["Bytes", "KB", "MB", "GB"];
        var bd1x = Math.floor(Math.log(sj8b) / Math.log(1024));
        return (sj8b / Math.pow(1024, Math.floor(bd1x))).toFixed(bd1x == 1 ? 0 : 1) + ccu8m[bd1x]
    }
})();
(function() {
    function ccq8i() {
        var yi9Z = function(jf5k) {
            if (jf5k < -128) {
                return yi9Z(128 - (-128 - jf5k))
            } else if (jf5k >= -128 && jf5k <= 127) {
                return jf5k
            } else if (jf5k > 127) {
                return yi9Z(-129 + jf5k - 127)
            } else {
                throw new Error("1001")
            }
        };
        var ccg8Y = function(jf5k, bj1x) {
            return yi9Z(jf5k + bj1x)
        };
        var ccf8X = function(TI6C, biq9h) {
            if (TI6C == null) {
                return null
            }
            if (biq9h == null) {
                return TI6C
            }
            var pM7F = [];
            var cbX8P = biq9h.length;
            for (var i = 0, bq2x = TI6C.length; i < bq2x; i++) { pM7F[i] = ccg8Y(TI6C[i], biq9h[i % cbX8P]) }
            return pM7F
        };
        var cbV8N = function(TK6E) {
            if (TK6E == null) {
                return TK6E
            }
            var pM7F = [];
            var cbR8J = TK6E.length;
            for (var i = 0, bq2x = cbR8J; i < bq2x; i++) { pM7F[i] = yi9Z(0 - TK6E[i]) }
            return pM7F
        };
        var cbO8G = function(biO9F, Nm4q) {
            biO9F = yi9Z(biO9F);
            Nm4q = yi9Z(Nm4q);
            return yi9Z(biO9F ^ Nm4q)
        };
        var bGW4a = function(Nl4p, bja9R) {
            if (Nl4p == null || bja9R == null || Nl4p.length != bja9R.length) {
                return Nl4p
            }
            var pM7F = [];
            var cbM8E = Nl4p.length;
            for (var i = 0, bq2x = cbM8E; i < bq2x; i++) { pM7F[i] = cbO8G(Nl4p[i], bja9R[i]) }
            return pM7F
        };
        var bGT4X = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        var cbH8z = function(cK2x) {
            var HN2x = [];
            HN2x.push(bGT4X[cK2x >>> 4 & 15]);
            HN2x.push(bGT4X[cK2x & 15]);
            return HN2x.join("")
        };
        var cbG8y = function(sj8b) {
            var bq2x = sj8b.length;
            if (sj8b == null || bq2x < 0) {
                return new String("")
            }
            var HN2x = [];
            for (var i = 0; i < bq2x; i++) { HN2x.push(cbH8z(sj8b[i])) }
            return HN2x.join("")
        };
        var bGS4W = function(TO6I) {
            if (TO6I == null || TO6I.length == 0) {
                return TO6I
            }
            var bjn9e = new String(TO6I);
            var pM7F = [];
            var bq2x = bjn9e.length / 2;
            var bj1x = 0;
            for (var i = 0; i < bq2x; i++) {
                var nn6h = parseInt(bjn9e.charAt(bj1x++), 16) << 4;
                var no6i = parseInt(bjn9e.charAt(bj1x++), 16);
                pM7F[i] = yi9Z(nn6h + no6i)
            }
            return pM7F
        };
        var cbE8w = function(cO2x) {
            if (cO2x == null || cO2x == undefined) {
                return cO2x
            }
            var Nc4g = encodeURIComponent(cO2x);
            var sj8b = [];
            var bGQ4U = Nc4g.length;
            for (var i = 0; i < bGQ4U; i++) {
                if (Nc4g.charAt(i) == "%") {
                    if (i + 2 < bGQ4U) { sj8b.push(bGS4W(Nc4g.charAt(++i) + "" + Nc4g.charAt(++i))[0]) } else {
                        throw new Error("1009")
                    }
                } else { sj8b.push(Nc4g.charCodeAt(i)) }
            }
            return sj8b
        };
        var cbz8r = function(uU8M) {
            var bd1x = 0;
            bd1x += (uU8M[0] & 255) << 24;
            bd1x += (uU8M[1] & 255) << 16;
            bd1x += (uU8M[2] & 255) << 8;
            bd1x += uU8M[3] & 255;
            return bd1x
        };
        var cus2x = function(bd1x) {
            var uU8M = [];
            uU8M[0] = bd1x >>> 24 & 255;
            uU8M[1] = bd1x >>> 16 & 255;
            uU8M[2] = bd1x >>> 8 & 255;
            uU8M[3] = bd1x & 255;
            return uU8M
        };
        var cbx8p = function(du3x, bjE9v, bq2x) {
            var ec3x = [];
            if (du3x == null || du3x.length == 0) {
                return ec3x
            }
            if (du3x.length < bq2x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq2x; i++) { ec3x[i] = du3x[bjE9v + i] }
            return ec3x
        };
        var bjG0x = function(du3x, bjE9v, qA7t, cbv8n, bq2x) {
            if (du3x == null || du3x.length == 0) {
                return qA7t
            }
            if (qA7t == null) {
                throw new Error("1004")
            }
            if (du3x.length < bq2x) {
                throw new Error("1003")
            }
            for (var i = 0; i < bq2x; i++) { qA7t[cbv8n + i] = du3x[bjE9v + i] }
            return qA7t
        };
        var cbu8m = function(bq2x) {
            var bs2x = [];
            for (var i = 0; i < bq2x; i++) { bs2x[i] = 0 }
            return bs2x
        };
        var cbt8l = [82, 9, 106, -43, 48, 54, -91, 56, -65, 64, -93, -98, -127, -13, -41, -5, 124, -29, 57, -126, -101, 47, -1, -121, 52, -114, 67, 68, -60, -34, -23, -53, 84, 123, -108, 50, -90, -62, 35, 61, -18, 76, -107, 11, 66, -6, -61, 78, 8, 46, -95, 102, 40, -39, 36, -78, 118, 91, -94, 73, 109, -117, -47, 37, 114, -8, -10, 100, -122, 104, -104, 22, -44, -92, 92, -52, 93, 101, -74, -110, 108, 112, 72, 80, -3, -19, -71, -38, 94, 21, 70, 87, -89, -115, -99, -124, -112, -40, -85, 0, -116, -68, -45, 10, -9, -28, 88, 5, -72, -77, 69, 6, -48, 44, 30, -113, -54, 63, 15, 2, -63, -81, -67, 3, 1, 19, -118, 107, 58, -111, 17, 65, 79, 103, -36, -22, -105, -14, -49, -50, -16, -76, -26, 115, -106, -84, 116, 34, -25, -83, 53, -123, -30, -7, 55, -24, 28, 117, -33, 110, 71, -15, 26, 113, 29, 41, -59, -119, 111, -73, 98, 14, -86, 24, -66, 27, -4, 86, 62, 75, -58, -46, 121, 32, -102, -37, -64, -2, 120, -51, 90, -12, 31, -35, -88, 51, -120, 7, -57, 49, -79, 18, 16, 89, 39, -128, -20, 95, 96, 81, 127, -87, 25, -75, 74, 13, 45, -27, 122, -97, -109, -55, -100, -17, -96, -32, 59, 77, -82, 42, -11, -80, -56, -21, -69, 60, -125, 83, -103, 97, 23, 43, 4, 126, -70, 119, -42, 38, -31, 105, 20, 99, 85, 33, 12, 125];
        var HJ2x = 64;
        var TQ6K = 64;
        var bGO4S = 4;
        var cbm8e = function(pz7s) {
            var bGJ4N = [];
            if (pz7s == null || pz7s == undefined || pz7s.length == 0) {
                return cbu8m(TQ6K)
            }
            if (pz7s.length >= TQ6K) {
                return cbx8p(pz7s, 0, TQ6K)
            } else {
                for (var i = 0; i < TQ6K; i++) { bGJ4N[i] = pz7s[i % pz7s.length] }
            }
            return bGJ4N
        };
        var cbd8V = function(TV6P) {
            if (TV6P == null || TV6P.length % HJ2x != 0) {
                throw new Error("1005")
            }
            var bkj0x = [];
            var bj1x = 0;
            var caX8P = TV6P.length / HJ2x;
            for (var i = 0; i < caX8P; i++) {
                bkj0x[i] = [];
                for (var j = 0; j < HJ2x; j++) { bkj0x[i][j] = TV6P[bj1x++] }
            }
            return bkj0x
        };
        var caS8K = function(bGG4K) {
            var nn6h = bGG4K >>> 4 & 15;
            var no6i = bGG4K & 15;
            var bj1x = nn6h * 16 + no6i;
            return cbt8l[bj1x]
        };
        var bGD4H = function(bkv0x) {
            if (bkv0x == null) {
                return null
            }
            var bGC4G = [];
            for (var i = 0, bq2x = bkv0x.length; i < bq2x; i++) { bGC4G[i] = caS8K(bkv0x[i]) }
            return bGC4G
        };
        var caL8D = function(Hx2x, pz7s) {
            if (Hx2x == null) {
                return null
            }
            if (Hx2x.length == 0) {
                return []
            }
            if (Hx2x.length % HJ2x != 0) {
                throw new Error("1005")
            }
            pz7s = cbm8e(pz7s);
            var bkA0x = pz7s;
            var bkC0x = cbd8V(Hx2x);
            var My3x = [];
            var caJ8B = bkC0x.length;
            for (var i = 0; i < caJ8B; i++) {
                var bkN0x = bGD4H(bkC0x[i]);
                bkN0x = bGD4H(bkN0x);
                var bkO0x = bGW4a(bkN0x, bkA0x);
                var caF7y = ccf8X(bkO0x, cbV8N(bkA0x));
                bkO0x = bGW4a(caF7y, pz7s);
                bjG0x(bkO0x, 0, My3x, i * HJ2x, HJ2x);
                bkA0x = bkC0x[i]
            }
            var bGz4D = [];
            bjG0x(My3x, My3x.length - bGO4S, bGz4D, 0, bGO4S);
            var bq2x = cbz8r(bGz4D);
            if (bq2x > My3x.length) {
                throw new Error("1006")
            }
            var pM7F = [];
            bjG0x(My3x, 0, pM7F, 0, bq2x);
            return pM7F
        };
        var caB7u = function(UJ6D, J1x) {
            if (UJ6D == null) {
                return null
            }
            var bGw4A = new String(UJ6D);
            if (bGw4A.length == 0) {
                return []
            }
            var Hx2x = bGS4W(bGw4A);
            if (J1x == null || J1x == undefined) {
                throw new Error("1007")
            }
            var pz7s = cbE8w(J1x);
            return caL8D(Hx2x, pz7s)
        };
        this.cam7f = function(UJ6D, J1x) {
            var cal7e = caB7u(UJ6D, J1x);
            var blf0x = new String(cbG8y(cal7e));
            var UQ6K = [];
            var cak7d = blf0x.length / 2;
            var bj1x = 0;
            for (var i = 0; i < cak7d; i++) {
                UQ6K.push("%");
                UQ6K.push(blf0x.charAt(bj1x++));
                UQ6K.push(blf0x.charAt(bj1x++))
            }
            return UQ6K.join("")
        }
    }
    window.settmusic = (new ccq8i).cam7f
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        J1x = "Search-tracks_",
        b1x;
    p1x.eP3x({
        "search-suggest": {
            url: "/api/search/suggest/web",
            type: "POST",
            format: function(Q1x) {
                return Q1x
            },
            onerror: function(Q1x, e1x) {
                if (Q1x.code == 407) { e1x.onForbidden() }
            }
        },
        "search-multimatch": { url: "/api/search/suggest/multimatch", type: "GET" },
        "search-list": {
            url: "/api/cloudsearch/get/web",
            type: "post",
            noescape: true,
            filter: function(e1x, bc1x) { window.log && window.log("searchkeywordclient", { type: this.caj7c(parseInt(e1x.data.type)) || "suggest", keyword: e1x.data.s, offset: e1x.offset }) },
            format: function(Q1x, e1x) {
                if (Q1x.abroad) {
                    try { Q1x.result = JSON.parse(decodeURIComponent(settmusic(Q1x.result, p1x.sk))) } catch (e) {}
                }
                Q1x.result = Q1x.result || {};
                var i1x, cp2x, jH5M = [],
                    sT8L = e1x.data.s || "",
                    fX3x = e1x.data.limit,
                    t1x = parseInt(e1x.data.type) || 1,
                    m1x = Q1x.result;
                switch (t1x) {
                    case 1:
                        i1x = this.bGq4u(m1x.songs, e1x.data.hlpretag, e1x.data.hlposttag);
                        cp2x = m1x.songCount;
                        break;
                    case 10:
                        i1x = m1x.albums;
                        cp2x = m1x.albumCount;
                        break;
                    case 100:
                        i1x = m1x.artists;
                        cp2x = m1x.artistCount;
                        break;
                    case 1e3:
                        i1x = m1x.playlists;
                        cp2x = m1x.playlistCount;
                        break;
                    case 1002:
                        i1x = m1x.userprofiles;
                        cp2x = m1x.userprofileCount;
                        break;
                    case 1004:
                        i1x = m1x.mvs;
                        cp2x = m1x.mvCount;
                        break;
                    case 1006:
                        i1x = this.bGq4u(m1x.songs, e1x.data.hlpretag, e1x.data.hlposttag);
                        cp2x = m1x.songCount;
                        break;
                    case 1009:
                        var oP7I = m1x.djRadios;
                        if (!!oP7I) {
                            k1x.be1x(oP7I, function(A1x, s1x, bZX7Q) {
                                A1x.xid = A1x.id;
                                A1x.id = A1x.id + "_rad"
                            });
                            if (oP7I.length) { this.rc7V("radio_search-" + e1x.data.s, oP7I) }
                        }
                        cp2x = Math.min(m1x.djprogramCount, 500);
                        i1x = m1x.djprograms || [];
                        if (e1x.data.isPub) {
                            k1x.mk6e(oP7I, function(A1x, s1x, bZX7Q) {
                                A1x.stype = 1;
                                i1x.unshift(A1x)
                            });
                            cp2x = Math.min(i1x.length, 500)
                        }
                        break
                }
                this.z1x("onsearchload", Q1x);
                if (i1x && i1x.length) {
                    for (var i = 0; i < fX3x; i++) {
                        if (i < i1x.length) { jH5M.push(i1x[i]) } else { jH5M.push(null) }
                    }
                }
                return { more: !0, total: Math.min(cp2x || 0, sT8L.length < 3 ? 500 : 5e3), list: jH5M }
            },
            onerror: function(Q1x, e1x) {
                e1x.onload(e1x, []);
                if (k1x.gc3x(e1x.onerror)) { e1x.onerror(Q1x) }
            }
        }
    });
    p1x.Cs0x = NEJ.C();
    b1x = p1x.Cs0x.O1x(p1x.gU3x);
    b1x.cm2x = function() { this.cs2x() };
    b1x.bZU7N = function(J1x, e1x) {
        if (!J1x) return;
        if (!!this.bGn4r) v1x.jl5q(this.bGn4r);
        this.bGn4r = this.cl2x("search-suggest", NEJ.X({ data: { s: J1x, limit: 8 } }, e1x))
    };
    b1x.bZP7I = function(J1x, e1x) {
        if (!J1x) return;
        this.cl2x("search-multimatch", NEJ.X({ data: { s: J1x } }, e1x))
    };
    b1x.bGq4u = function() {
        var bZL7E = function(hf4j, bGl4p, bGk4o) {
            var bZF7y = hf4j.match(new RegExp(bGl4p + "(.+?)" + bGk4o, "gi")),
                cv2x = 0;
            k1x.be1x(bZF7y, function(r1x) { cv2x += r1x.replace(new RegExp(bGl4p, "g"), "").replace(new RegExp(bGk4o, "g"), "").length });
            return cv2x
        };
        return function(iw5B, bZE7x, bZD7w) {
            var bGi4m = [];
            k1x.be1x(iw5B, function(bf1x, bd1x) {
                bf1x = l1x.Ep1x(bf1x);
                var UV6P = bf1x.lyrics || [],
                    dL3x = UV6P.length,
                    iW5b = 0,
                    cp2x = 4,
                    UX6R = { l: 0, v: 0 },
                    bms0x;
                if (dL3x > 4) {
                    k1x.be1x(UV6P, function(hf4j, s1x) {
                        var bGh4l = bZL7E(hf4j, bZE7x, bZD7w);
                        if (bGh4l > UX6R.v) {
                            UX6R.v = bGh4l;
                            UX6R.l = s1x
                        }
                    });
                    iW5b = UX6R.l;
                    iW5b = Math.max(iW5b, 0);
                    bms0x = dL3x - iW5b - 4;
                    if (bms0x < 0) iW5b += bms0x;
                    bf1x.lrcAbstractEnd = iW5b + cp2x - 1
                } else { bf1x.lrcAbstractEnd = dL3x - 1 }
                bf1x.lrcAbstractStart = iW5b;
                bf1x.indexId = (UV6P && UV6P.length ? "L" : "NL") + bf1x.id;
                bGi4m.push(bf1x)
            });
            return bGi4m
        }
    }();
    b1x.caj7c = function(t1x) {
        switch (t1x) {
            case 1:
                return "song";
                break;
            case 100:
                return "artist";
                break;
            case 10:
                return "album";
                break;
            case 1004:
                return "mv";
                break;
            case 1006:
                return "lyric";
                break;
            case 1e3:
                return "list";
                break;
            case 1009:
                return "djradio";
                break;
            case 1002:
                return "user";
                break;
            default:
                return "suggest";
                break
        }
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        F1x = c1x("nm.m"),
        n1x = c1x("nm.l"),
        cW2x = c1x("nm.i"),
        L1x = c1x("nm.m.sch"),
        b1x, K1x;
    var bmF0x = { songs: 1, artists: 100, albums: 10, playlists: 1e3 };
    L1x.LW3x = NEJ.C();
    b1x = L1x.LW3x.O1x(H1x.cz2x);
    b1x.cm2x = function(f1x) {
        this.cs2x();
        this.bR2x(f1x);
        this.P1x = p1x.Cs0x.fU3x()
    };
    b1x.bR2x = function(f1x) {
        this.o1x = f1x;
        var i1x = a0x.I1x(f1x, "j-flag");
        this.ew3x = i1x[0];
        this.bmM0x = i1x[1];
        this.cf2x = i1x[2];
        this.my6s = i1x[3];
        h1x.q1x(this.ew3x, "input", this.fE3x.g1x(this));
        h1x.q1x(this.ew3x, "keyup", this.fE3x.g1x(this));
        h1x.q1x(this.ew3x, "focus", this.fS3x.g1x(this));
        h1x.q1x(this.bmM0x, "click", this.fS3x.g1x(this));
        h1x.q1x(this.ew3x, "blur", this.bmT0x.g1x(this));
        h1x.q1x(this.cf2x, "click", this.Vg6a.g1x(this));
        h1x.q1x(this.o1x, "keydown", this.bnc0x.g1x(this));
        h1x.q1x(this.o1x, "keypress", this.Vi6c.g1x(this));
        h1x.q1x(this.my6s, "mouseover", this.LK3x.g1x(this));
        h1x.q1x(this.my6s, "mouseout", this.LK3x.g1x(this));
        if (this.ew3x.value) { this.ew3x.value = "" }
        if (this.ew3x.style.opacity != null) { this.ew3x.style.opacity = 1 }
    };
    b1x.fE3x = function(d1x) {
        if (d1x.type == "keyup" && d1x.keyCode == 8 || d1x.keyCode == 46) { this.CX1x() } else if (d1x.type == "input" || d1x.type == "propertychange") { setTimeout(this.CX1x.g1x(this), 0) }
    };
    b1x.fS3x = function() {
        this.wC9t(this.bmM0x, !1);
        a0x.x1x(this.o1x, "m-srch-fcs");
        this.ew3x.focus();
        this.CX1x();
        a0x.x1x(a0x.I1x("g-topbar", "j-showoff")[0], "f-hide")
    };
    b1x.bmT0x = function() {
        if (!this.ew3x.value) { this.wC9t(this.bmM0x, !0) }
        var CZ1x = a0x.I1x(this.my6s, "slt");
        if (this.Vo6i(this.my6s) && CZ1x.length > 0 && a0x.u1x(CZ1x[0], "type")) {
            var is5x = CZ1x[0].href;
            if (/#\/(song|album|artist|playlist)\?id=(\d+)/.test(is5x)) { window.log("search", { rid: RegExp.$2, type: RegExp.$1, keyword: this.ew3x.value }) }
            this.bny0x(CZ1x[0].href)
        }
        this.wC9t(this.my6s, !1);
        a0x.w1x(this.o1x, "m-srch-fcs")
    };
    b1x.wC9t = function(f1x, lh5m) { a0x.X1x(f1x, "display", !lh5m ? "none" : "") };
    b1x.Vo6i = function(f1x) {
        return a0x.cZ2x(f1x, "display") != "none"
    };
    b1x.CX1x = function() {
        var De1x = function(tv8n, da2x) {
            if (!da2x) return;
            return da2x.replace(new RegExp(l1x.bHD4H(tv8n), "gi"), function($1) {
                return '<span class="s-fc7 f-tdn">' + $1 + "</span>"
            })
        };
        var bZt7m = function(hw4A) {
            var gh3x = this.o1x.clientWidth > 250 ? 41 : 17;
            if (l1x.Ic2x(hw4A) > gh3x) {
                return l1x.ym9d(hw4A, gh3x) + "..."
            } else {
                return hw4A
            }
        };
        var Vs6m = function(m1x) {
            return m1x.songs && m1x.songs.length || m1x.albums && m1x.albums.length || m1x.artists && m1x.artists.length || m1x.playlists && m1x.playlists.length
        };
        var tf8X = function(tv8n, d1x) {
            if (!l1x.bHE4I(this.ew3x) || l1x.iV5a(this.ew3x.value)) {
                this.wC9t(this.my6s, !1);
                return
            }
            d1x.keyword = k1x.dJ3x(tv8n);
            var dq3x = a0x.bP2x("m-search-suggest", d1x, { mark: De1x.g1x(this, tv8n), cutStr: bZt7m.g1x(this) }),
                tx8p = d1x.result.order;
            this.my6s.innerHTML = dq3x;
            this.wC9t(this.my6s, Vs6m(d1x.result) ? !0 : !1);
            if (!!tx8p && !!tx8p.length) { this.bnU0x = { keyword: tv8n, type: bmF0x[tx8p[0]] } }
        };
        var bZp7i = function() {
            this.wC9t(this.my6s, !1);
            return
        };
        return function() {
            var A1x = this.ew3x.value;
            if (l1x.iV5a(A1x)) {
                this.wC9t(this.my6s, !1);
                return
            }
            this.P1x.bZU7N(A1x, { onload: tf8X.g1x(this, A1x), onForbidden: bZp7i.g1x(this) })
        }
    }();
    b1x.Vi6c = function(d1x) {
        if (d1x.keyCode != 13) return;
        var CZ1x = a0x.I1x(this.my6s, "slt");
        if (this.Vo6i(this.my6s) && CZ1x.length > 0) {
            this.bny0x(CZ1x[0].href);
            this.wC9t(this.my6s, !1);
            return
        }
        this.Vg6a();
        this.wC9t(this.my6s, !1)
    };
    b1x.bnc0x = function(d1x) {
        if (!this.Vo6i(this.my6s)) return;
        var i1x = a0x.I1x(this.my6s, "xtag"),
            dL3x = i1x.length,
            s1x = k1x.cV2x(i1x, function(r1x) {
                return a0x.bz2x(r1x, "slt")
            });
        switch (d1x.keyCode) {
            case 38:
                if (s1x >= 0) a0x.w1x(i1x[s1x], "slt");
                a0x.x1x(i1x[s1x <= 0 ? dL3x - 1 : s1x - 1], "slt");
                break;
            case 40:
                if (s1x >= 0) a0x.w1x(i1x[s1x], "slt");
                a0x.x1x(i1x[(s1x + 1) % dL3x], "slt");
                break
        }
    };
    b1x.LK3x = function(d1x) {
        if (!this.Vo6i(this.my6s)) return;
        var LB3x, E1x = h1x.U1x(d1x),
            i1x = a0x.I1x(this.my6s, "xtag");
        if (E1x.tagName.toLowerCase() == "a") LB3x = E1x;
        else if (E1x.parentNode.tagName.toLowerCase() == "a") LB3x = E1x.parentNode;
        if (!LB3x) return;
        k1x.be1x(i1x, function(r1x) {
            a0x.w1x(r1x, "slt");
            a0x.u1x(r1x, "type", "")
        });
        if (d1x.type == "mouseout") return;
        a0x.x1x(LB3x, "slt");
        a0x.u1x(LB3x, "type", "mouse")
    };
    b1x.Vg6a = function() {
        var dE3x = location.hash,
            s1x = dE3x.indexOf("?"),
            bD2x = k1x.hl4p(dE3x.substring(s1x + 1));
        bD2x.s = this.ew3x.value;
        if (l1x.iV5a(bD2x.s)) return;
        if (!bD2x.type && this.bnU0x && this.bnU0x.keyword == bD2x.s) { bD2x.type = this.bnU0x.type }
        this.bny0x("/search/#/?" + k1x.de2x(bD2x));
        this.ew3x.blur()
    };
    b1x.bny0x = function(V1x) {
        if (location.dispatch2) { location.dispatch2(V1x) } else { location.href = V1x }
    };
    L1x.LW3x.bZl7e = function() {
        var i1x = a0x.I1x(document.body, "j-suggest");
        k1x.be1x(i1x, function(r1x) { new L1x.LW3x(r1x) })
    };
    L1x.LW3x.bZl7e()
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        b1x;
    p1x.eP3x({
        "mv_artist-list": {
            url: "/api/artist/mvs",
            type: "get",
            format: function(Q1x) {
                return { total: Q1x.size || 0, list: Q1x.mvs || [] }
            }
        },
        "album_artist-list": {
            url: "/api/artist/albums/{id}",
            type: "get",
            format: function(Q1x) {
                return { total: Q1x.size || 0, list: Q1x.hotAlbums || [] }
            }
        },
        "ydcailing_post-list": {
            url: "/api/cailing/all",
            type: "POST",
            format: function(Q1x) {
                return Q1x.result.songs
            }
        },
        "wo-list": {
            url: "/api/unicom/wo/content",
            format: function(Q1x, e1x) {
                if (e1x.offset == 0) {
                    var oF6z = Q1x.data[0];
                    this.z1x("onfirstload", oF6z);
                    Q1x.data.splice(0, 1);
                    return Q1x.data
                } else {
                    return Q1x.data
                }
            }
        }
    });
    p1x.Do1x = NEJ.C();
    b1x = p1x.Do1x.O1x(p1x.gU3x);
    b1x.cm2x = function() { this.cs2x() };
    b1x.Lx3x = function() {
        var rR8J = "LOCAL_FLAG";
        return function(t1x, bZk7d) {
            var j1x = this.BW0x(rR8J, {});
            if (j1x[t1x]) {
                return true
            } else {
                if (!bZk7d) {
                    j1x[t1x] = true;
                    this.vg9X(rR8J, j1x)
                }
                return false
            }
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        bog0x;
    if (!!N1x.ny6s) return;
    N1x.ny6s = NEJ.C();
    bog0x = N1x.ny6s.O1x(N1x.cz2x);
    bog0x.bk1x = function() {
        var bZj7c = function(d1x) { d1x.matched = d1x.source == d1x.target };
        return function(e1x) {
            e1x.oncheck = e1x.oncheck || bZj7c;
            this.bl1x(e1x);
            this.bU2x = e1x.list;
            this.hW4a = e1x.dataset || "id";
            this.jK5P = e1x.selected || "js-selected"
        }
    }();
    bog0x.nD6x = function(A1x) {
        var E1x, d1x = { target: A1x };
        k1x.be1x(this.bU2x, function(f1x) {
            delete d1x.matched;
            d1x.source = a0x.u1x(f1x, this.hW4a);
            this.z1x("oncheck", d1x);
            if (!d1x.matched) { a0x.w1x(f1x, this.jK5P) } else {
                E1x = f1x;
                a0x.x1x(f1x, this.jK5P)
            }
        }, this);
        return E1x
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ut"),
        ow6q;
    if (!!N1x.cP2x) return;
    N1x.cP2x = NEJ.C();
    ow6q = N1x.cP2x.O1x(N1x.cz2x);
    ow6q.cm2x = function() {
        this.ik4o = {};
        this.cs2x();
        this.bJ2x()
    };
    ow6q.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.boG0x = e1x.umi || "";
        this.An0x = e1x.dispatcher;
        this.GQ2x = e1x.composite || Y1x;
        this.blB0x({ onshow: this.eR3x.g1x(this), onhide: this.kj5o.g1x(this), onrefresh: this.eh3x.g1x(this), onmessage: this.qV7O.g1x(this), onbeforehide: this.bZg7Z.g1x(this) })
    };
    ow6q.bC2x = function() {
        delete this.boG0x;
        this.ik4o = {};
        this.bH2x()
    };
    ow6q.tP8H = function(d1x) {
        if (!!d1x) d1x.stopped = !0
    };
    ow6q.bJ2x = bm1x;
    ow6q.eR3x = bm1x;
    ow6q.kj5o = bm1x;
    ow6q.eh3x = bm1x;
    ow6q.qV7O = bm1x;
    ow6q.bZg7Z = bm1x;
    ow6q.pj7c = function(nx6r, bF2x, eI3x) { this.An0x.boT0x({ to: nx6r, mode: eI3x || 0, data: bF2x, from: this.boG0x }) };
    ow6q.cuw2x = function(t1x, j1x) { this.An0x.yd9U(t1x, { from: this.boG0x, data: j1x }) };
    ow6q.cux2x = function() { this.An0x.lv5A.apply(this.An0x, arguments) };
    ow6q.bZd7W = function() {
        return this.ik4o
    };
    a0x.VD6x = function() {
        if (!!window.dispatcher) { dispatcher.bGa4e.apply(dispatcher, arguments) }
    }
})();
(function() {
    var c1x = NEJ.P,
        bm1x = NEJ.F,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        vP9G;
    if (!!N1x.dl2x) return;
    N1x.dl2x = NEJ.C();
    vP9G = N1x.dl2x.O1x(N1x.cP2x);
    vP9G.bYX7Q = function(e1x) {
        var bB2x;
        if (!bB2x) {
            var j1x = e1x.input || Y1x;
            bB2x = a0x.y1x(j1x.parent)
        }
        if (!bB2x) {
            var j1x = e1x.data || Y1x;
            bB2x = a0x.y1x(j1x.parent)
        }
        if (!bB2x) { bB2x = a0x.y1x(e1x.parent) }
        return bB2x
    };
    vP9G.eR3x = function(e1x) {
        var bB2x = this.bYX7Q(e1x);
        if (!!bB2x && !!this.o1x) bB2x.appendChild(this.o1x);
        this.gs3x(e1x);
        this.bFZ4d("onshow", e1x);
        this.eh3x(e1x)
    };
    vP9G.eh3x = function(e1x) {
        this.fP3x(e1x);
        this.bFZ4d("onrefresh", e1x)
    };
    vP9G.kj5o = function() {
        this.kU5Z();
        this.bYU7N();
        a0x.mm6g(this.o1x)
    };
    vP9G.bFY4c = function() {
        var fR3x = /^onshow|onrefresh|delay$/;
        return function(bW2x) {
            return fR3x.test(bW2x)
        }
    }();
    vP9G.bFX4b = bm1x;
    vP9G.bFZ4d = function() {
        var bFW4a = function(bD2x, e1x, bW2x, oB6v) {
            if (this.bFY4c(oB6v)) return;
            if (!!bD2x) bW2x += (bW2x.indexOf("?") > 1 ? "&" : "?") + bD2x;
            var cL2x = this.bFX4b(oB6v, e1x) || {};
            cL2x.location = e1x;
            cL2x.parent = this.ik4o[oB6v];
            this.An0x.ij4n(bW2x, { input: cL2x })
        };
        return function(t1x, e1x) {
            if (!e1x.nodelay) {
                if (!!this.GQ2x.delay) return;
                var bFV4Z = this.GQ2x[t1x] || Y1x;
                if (bFV4Z.delay) return
            }
            var bD2x = k1x.de2x(e1x.param) || "";
            if (t1x == "onrefresh") { k1x.dZ3x(this.GQ2x, bFW4a.g1x(this, bD2x, e1x)) }
            k1x.dZ3x(bFV4Z, bFW4a.g1x(this, bD2x, e1x))
        }
    }();
    vP9G.bYU7N = function() {
        var zL0x = function(bW2x, oB6v) {
            if (!this.bFY4c(oB6v)) this.An0x.bp2x(bW2x)
        };
        return function() {
            k1x.dZ3x(this.GQ2x, zL0x, this);
            k1x.dZ3x(this.GQ2x.onshow, zL0x, this);
            k1x.dZ3x(this.GQ2x.onrefresh, zL0x, this)
        }
    }()
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        F1x = c1x("nm.m"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        b1x, K1x;
    F1x.Lg3x = NEJ.C();
    b1x = F1x.Lg3x.O1x(H1x.cz2x);
    b1x.cm2x = function() {
        this.cs2x();
        this.o1x = a0x.y1x("g-topbar");
        var i1x = a0x.I1x(this.o1x, "j-tflag");
        this.bpX1x = i1x[0];
        this.GK2x = i1x[1];
        this.tM8E = i1x[2];
        this.bFU4Y = i1x[3];
        this.bqd1x = i1x[4];
        this.bYM7F = H1x.ny6s.B1x({ list: this.bpX1x.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.bqn1x = H1x.ny6s.B1x({ list: this.bqd1x.getElementsByTagName("a"), selected: "z-slt", dataset: "module" });
        this.bT2x([
            [this.GK2x, "click", this.cw2x.g1x(this)],
            [this.GK2x, "mouseout", this.bFT4X.g1x(this, 0)],
            [this.GK2x, "mouseover", this.bFT4X.g1x(this, 1)]
        ]);
        window.scrollTopbar = this.bYB7u.g1x(this);
        window.matchNav = this.bFP4T.g1x(this);
        window.polling = this.qT7M.g1x(this);
        this.KV3x = p1x.Do1x.B1x();
        this.bYy7r();
        this.GE2x();
        var bD2x = k1x.hl4p(location.href.split("?")[1]) || {};
        if (bD2x.market) { a0x.y1x("topbar-download-link").href = "/download?market=" + bD2x.market }
        var bqK1x = a0x.I1x(this.o1x, "j-showoff");
        if (bqK1x && !this.KV3x.Lx3x("newMvSearch")) {
            a0x.w1x(bqK1x[0], "f-hide");
            window.setTimeout(function() { a0x.x1x(bqK1x[0], "f-hide") }, 5e3)
        }
    };
    b1x.qT7M = function(d1x) {
        var dE3x = l1x.Im2x();
        if (!/^\/msg/.test(dE3x)) {
            var GD2x = 0;
            GD2x += d1x.comment;
            GD2x += d1x.forward;
            GD2x += d1x.msg;
            GD2x += d1x.notice;
            if (GD2x > 0) { this.tM8E.innerHTML = a0x.bP2x("m-topbar-mesg-count", { count: GD2x }) } else { this.tM8E.innerHTML = "" }
            var ev3x = "/at";
            if (d1x.notice) ev3x = "/notify";
            if (d1x.comment) ev3x = "/comment";
            if (d1x.msg > 0) ev3x = "/private";
            if (d1x.forward > 0) ev3x = "/at";
            this.tM8E.href = "/msg/#" + ev3x
        } else { this.tM8E.innerHTML = "" }
        var i1x = a0x.I1x(this.bpX1x, "j-t");
        if (!/^\/friend/.test(dE3x)) {
            if (i1x && i1x.length) { a0x.X1x(i1x[0], "display", d1x.event > 0 ? "" : "none") }
        } else { a0x.X1x(i1x[0], "display", "none") }
    };
    b1x.cw2x = function(d1x) {
        var f1x = h1x.U1x(d1x, "d:action");
        if (f1x) {
            switch (a0x.u1x(f1x, "action")) {
                case "login":
                    h1x.cd2x(d1x);
                    var t1x = a0x.u1x(f1x, "type");
                    if (t1x) {
                        if (t1x == "sina" || t1x == "tencent") top.open(f1x.href);
                        else top.login(t1x == "mobile" ? 0 : 3)
                    } else { top.login() }
                    break;
                case "logout":
                    h1x.cd2x(d1x);
                    top.logout();
                    break;
                case "viewStore":
                    if (!this.KV3x.Lx3x("storeNew")) { a0x.x1x(this.bra1x, "f-vhide") }
                    break;
                case "viewLevel":
                    if (!this.KV3x.Lx3x("levelNew")) { a0x.x1x(this.brb1x, "f-vhide") }
                    break
            }
        }
    };
    b1x.bFT4X = function(Ag0x, d1x) {
        if (this.bFN4R) { this.bFN4R.style.display = !Ag0x ? "none" : "" }
    };
    b1x.bYB7u = function(fO3x) { a0x.X1x(this.o1x, "top", -fO3x + "px") };
    b1x.bFP4T = function(ev3x, bYw7p) {
        this.bYM7F.nD6x(ev3x);
        if (ev3x == "discover") {
            a0x.x1x(this.bFU4Y, "f-hide");
            a0x.w1x(this.bqd1x, "f-hide");
            window.g_topBarHeight = 105;
            this.bqn1x.nD6x(bYw7p)
        } else {
            a0x.w1x(this.bFU4Y, "f-hide");
            a0x.x1x(this.bqd1x, "f-hide");
            window.g_topBarHeight = 75
        }
    };
    b1x.bYy7r = function() {
        var uZ8R = a0x.y1x("g_iframe");
        if (!uZ8R) return;
        var gi3x = uZ8R.contentWindow.document.getElementById("g_top");
        this.bFP4T(a0x.u1x(gi3x, "module"), a0x.u1x(gi3x, "sub"))
    };
    b1x.GE2x = function() {
        var dp3x = GUser || {},
            bYv7o = GUserAcc || {};
        if (dp3x && dp3x.userId) {
            a0x.dT3x(this.GK2x, "m-topbar-user-login", NEJ.X(dp3x, bYv7o));
            a0x.X1x(this.tM8E, "display", "")
        } else {
            this.GK2x.innerHTML = a0x.hX4b("m-topbar-user-unlogin");
            this.tM8E.innerHTML = "";
            var i1x = a0x.I1x(this.bpX1x, "j-t");
            a0x.X1x(i1x[0], "display", "none");
            a0x.X1x(this.tM8E, "display", "none")
        }
        var i1x = a0x.I1x(this.GK2x, "j-uflag");
        this.bFN4R = i1x[0];
        this.cuD2x = i1x[1];
        this.brb1x = i1x[2];
        this.bra1x = i1x[3];
        if (!this.KV3x.Lx3x("storeNew", true)) { a0x.w1x(this.bra1x, "f-vhide") } else { a0x.x1x(this.bra1x, "f-vhide") }
        if (!this.KV3x.Lx3x("levelNew", true)) { a0x.w1x(this.brb1x, "f-vhide") } else { a0x.x1x(this.brb1x, "f-vhide") }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        p1x = c1x("nm.d"),
        b1x, K1x;
    p1x.eP3x({ "polling-get": { type: "GET", url: "/api/pl/count", format: function(Q1x) { h1x.z1x(p1x.rZ8R, "message", Q1x) } } });
    p1x.rZ8R = NEJ.C();
    b1x = p1x.rZ8R.O1x(p1x.gU3x);
    b1x.VS6M = function() { this.cl2x("polling-get", {}) };
    b1x.uj8b = function() {
        var eV3x;
        return function() {
            if (!!eV3x) return;
            eV3x = window.setInterval(this.VS6M.g1x(this), 1e5);
            this.VS6M()
        }
    }();
    H1x.fs3x.B1x({ event: "message", element: p1x.rZ8R })
})();
var io = "undefined" === typeof module ? {} : module.exports;
(function() {
    (function(exports, global) {
        var io = exports;
        io.version = "0.9.16";
        io.protocol = 1;
        io.transports = [];
        io.j = [];
        io.sockets = {};
        io.connect = function(host, details) {
            var uri = io.util.parseUri(host),
                uuri, socket;
            if (global && global.location) {
                uri.protocol = uri.protocol || global.location.protocol.slice(0, -1);
                uri.host = uri.host || (global.document ? global.document.domain : global.location.hostname);
                uri.port = uri.port || global.location.port
            }
            uuri = io.util.uniqueUri(uri);
            var options = { host: uri.host, secure: "https" == uri.protocol, port: uri.port || ("https" == uri.protocol ? 443 : 80), query: uri.query || "" };
            io.util.merge(options, details);
            if (options["force new connection"] || !io.sockets[uuri]) { socket = new io.Socket(options) }
            if (!options["force new connection"] && socket) { io.sockets[uuri] = socket }
            socket = socket || io.sockets[uuri];
            return socket.of(uri.path.length > 1 ? uri.path : "")
        }
    })("object" === typeof module ? module.exports : this.io = {}, this);
    (function(exports, global) {
        var util = exports.util = {};
        var re = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
        var parts = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
        util.parseUri = function(str) {
            var m = re.exec(str || ""),
                uri = {},
                i = 14;
            while (i--) { uri[parts[i]] = m[i] || "" }
            return uri
        };
        util.uniqueUri = function(uri) {
            var protocol = uri.protocol,
                host = uri.host,
                port = uri.port;
            if ("document" in global) {
                host = host || document.domain;
                port = port || (protocol == "https" && document.location.protocol !== "https:" ? 443 : document.location.port)
            } else {
                host = host || "localhost";
                if (!port && protocol == "https") { port = 443 }
            }
            return (protocol || "http") + "://" + host + ":" + (port || 80)
        };
        util.query = function(base, addition) {
            var query = util.chunkQuery(base || ""),
                components = [];
            util.merge(query, util.chunkQuery(addition || ""));
            for (var part in query) {
                if (query.hasOwnProperty(part)) { components.push(part + "=" + query[part]) }
            }
            return components.length ? "?" + components.join("&") : ""
        };
        util.chunkQuery = function(qs) {
            var query = {},
                params = qs.split("&"),
                i = 0,
                l = params.length,
                kv;
            for (; i < l; ++i) {
                kv = params[i].split("=");
                if (kv[0]) { query[kv[0]] = kv[1] }
            }
            return query
        };
        var pageLoaded = false;
        util.load = function(fn) {
            if ("document" in global && document.readyState === "complete" || pageLoaded) {
                return fn()
            }
            util.on(global, "load", fn, false)
        };
        util.on = function(element, event, fn, capture) {
            if (element.attachEvent) { element.attachEvent("on" + event, fn) } else if (element.addEventListener) { element.addEventListener(event, fn, capture) }
        };
        util.request = function(xdomain) {
            if (xdomain && "undefined" != typeof XDomainRequest && !util.ua.hasCORS) {
                return new XDomainRequest
            }
            if ("undefined" != typeof XMLHttpRequest && (!xdomain || util.ua.hasCORS)) {
                return new XMLHttpRequest
            }
            if (!xdomain) {
                try {
                    return new(window[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
                } catch (e) {}
            }
            return null
        };
        if ("undefined" != typeof window) { util.load(function() { pageLoaded = true }) }
        util.defer = function(fn) {
            if (!util.ua.webkit || "undefined" != typeof importScripts) {
                return fn()
            }
            util.load(function() { setTimeout(fn, 100) })
        };
        util.merge = function merge(target, additional, deep, lastseen) {
            var seen = lastseen || [],
                depth = typeof deep == "undefined" ? 2 : deep,
                prop;
            for (prop in additional) {
                if (additional.hasOwnProperty(prop) && util.indexOf(seen, prop) < 0) {
                    if (typeof target[prop] !== "object" || !depth) {
                        target[prop] = additional[prop];
                        seen.push(additional[prop])
                    } else { util.merge(target[prop], additional[prop], depth - 1, seen) }
                }
            }
            return target
        };
        util.mixin = function(ctor, ctor2) { util.merge(ctor.prototype, ctor2.prototype) };
        util.inherit = function(ctor, ctor2) {
            function f() {}
            f.prototype = ctor2.prototype;
            ctor.prototype = new f
        };
        util.isArray = Array.isArray || function(obj) {
            return Object.prototype.toString.call(obj) === "[object Array]"
        };
        util.intersect = function(arr, arr2) {
            var ret = [],
                longest = arr.length > arr2.length ? arr : arr2,
                shortest = arr.length > arr2.length ? arr2 : arr;
            for (var i = 0, l = shortest.length; i < l; i++) {
                if (~util.indexOf(longest, shortest[i])) ret.push(shortest[i])
            }
            return ret
        };
        util.indexOf = function(arr, o, i) {
            for (var j = arr.length, i = i < 0 ? i + j < 0 ? 0 : i + j : i || 0; i < j && arr[i] !== o; i++) {}
            return j <= i ? -1 : i
        };
        util.toArray = function(enu) {
            var arr = [];
            for (var i = 0, l = enu.length; i < l; i++) arr.push(enu[i]);
            return arr
        };
        util.ua = {};
        util.ua.hasCORS = "undefined" != typeof XMLHttpRequest && function() {
            try {
                var a = new XMLHttpRequest
            } catch (e) {
                return false
            }
            return a.withCredentials != undefined
        }();
        util.ua.webkit = "undefined" != typeof navigator && /webkit/i.test(navigator.userAgent);
        util.ua.iDevice = "undefined" != typeof navigator && /iPad|iPhone|iPod/i.test(navigator.userAgent)
    })("undefined" != typeof io ? io : module.exports, this);
    (function(exports, io) {
        exports.EventEmitter = EventEmitter;

        function EventEmitter() {}
        EventEmitter.prototype.on = function(name, fn) {
            if (!this.$events) { this.$events = {} }
            if (!this.$events[name]) { this.$events[name] = fn } else if (io.util.isArray(this.$events[name])) { this.$events[name].push(fn) } else { this.$events[name] = [this.$events[name], fn] }
            return this
        };
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prototype.once = function(name, fn) {
            var self = this;

            function on() {
                self.removeListener(name, on);
                fn.apply(this, arguments)
            }
            on.listener = fn;
            this.on(name, on);
            return this
        };
        EventEmitter.prototype.removeListener = function(name, fn) {
            if (this.$events && this.$events[name]) {
                var list = this.$events[name];
                if (io.util.isArray(list)) {
                    var pos = -1;
                    for (var i = 0, l = list.length; i < l; i++) {
                        if (list[i] === fn || list[i].listener && list[i].listener === fn) {
                            pos = i;
                            break
                        }
                    }
                    if (pos < 0) {
                        return this
                    }
                    list.splice(pos, 1);
                    if (!list.length) { delete this.$events[name] }
                } else if (list === fn || list.listener && list.listener === fn) { delete this.$events[name] }
            }
            return this
        };
        EventEmitter.prototype.removeAllListeners = function(name) {
            if (name === undefined) {
                this.$events = {};
                return this
            }
            if (this.$events && this.$events[name]) { this.$events[name] = null }
            return this
        };
        EventEmitter.prototype.listeners = function(name) {
            if (!this.$events) { this.$events = {} }
            if (!this.$events[name]) { this.$events[name] = [] }
            if (!io.util.isArray(this.$events[name])) { this.$events[name] = [this.$events[name]] }
            return this.$events[name]
        };
        EventEmitter.prototype.emit = function(name) {
            if (!this.$events) {
                return false
            }
            var handler = this.$events[name];
            if (!handler) {
                return false
            }
            var args = Array.prototype.slice.call(arguments, 1);
            if ("function" == typeof handler) { handler.apply(this, args) } else if (io.util.isArray(handler)) {
                var listeners = handler.slice();
                for (var i = 0, l = listeners.length; i < l; i++) { listeners[i].apply(this, args) }
            } else {
                return false
            }
            return true
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, nativeJSON) {
        "use strict";
        if (nativeJSON && nativeJSON.parse) {
            return exports.JSON = { parse: nativeJSON.parse, stringify: nativeJSON.stringify }
        }
        var JSON = exports.JSON = {};

        function f(n) {
            return n < 10 ? "0" + n : n
        }

        function date(d, key) {
            return isFinite(d.valueOf()) ? d.getUTCFullYear() + "-" + f(d.getUTCMonth() + 1) + "-" + f(d.getUTCDate()) + "T" + f(d.getUTCHours()) + ":" + f(d.getUTCMinutes()) + ":" + f(d.getUTCSeconds()) + "Z" : null
        }
        var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            gap, indent, meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
            rep;

        function quote(string) {
            escapable.lastIndex = 0;
            return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
                var c = meta[a];
                return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + string + '"'
        }

        function str(key, holder) {
            var i, k, v, length, mind = gap,
                partial, value = holder[key];
            if (value instanceof Date) { value = date(key) }
            if (typeof rep === "function") { value = rep.call(holder, key, value) }
            switch (typeof value) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                case "null":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null"
                    }
                    gap += indent;
                    partial = [];
                    if (Object.prototype.toString.apply(value) === "[object Array]") {
                        length = value.length;
                        for (i = 0; i < length; i += 1) { partial[i] = str(i, value) || "null" }
                        v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
                        gap = mind;
                        return v
                    }
                    if (rep && typeof rep === "object") {
                        length = rep.length;
                        for (i = 0; i < length; i += 1) {
                            if (typeof rep[i] === "string") {
                                k = rep[i];
                                v = str(k, value);
                                if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) }
                            }
                        }
                    } else {
                        for (k in value) {
                            if (Object.prototype.hasOwnProperty.call(value, k)) {
                                v = str(k, value);
                                if (v) { partial.push(quote(k) + (gap ? ": " : ":") + v) }
                            }
                        }
                    }
                    v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
                    gap = mind;
                    return v
            }
        }
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) { indent += " " }
            } else if (typeof space === "string") { indent = space }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", { "": value })
        };
        JSON.parse = function(text, reviver) {
            var j;

            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) { value[k] = v } else { delete value[k] }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({ "": j }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    })("undefined" != typeof io ? io : module.exports, typeof JSON !== "undefined" ? JSON : undefined);
    (function(exports, io) {
        var parser = exports.parser = {};
        var packets = parser.packets = ["disconnect", "connect", "heartbeat", "message", "json", "event", "ack", "error", "noop"];
        var reasons = parser.reasons = ["transport not supported", "client not handshaken", "unauthorized"];
        var advice = parser.advice = ["reconnect"];
        var JSON = io.JSON,
            indexOf = io.util.indexOf;
        parser.encodePacket = function(packet) {
            var type = indexOf(packets, packet.type),
                id = packet.id || "",
                endpoint = packet.endpoint || "",
                ack = packet.ack,
                data = null;
            switch (packet.type) {
                case "error":
                    var reason = packet.reason ? indexOf(reasons, packet.reason) : "",
                        adv = packet.advice ? indexOf(advice, packet.advice) : "";
                    if (reason !== "" || adv !== "") data = reason + (adv !== "" ? "+" + adv : "");
                    break;
                case "message":
                    if (packet.data !== "") data = packet.data;
                    break;
                case "event":
                    var ev = { name: packet.name };
                    if (packet.args && packet.args.length) { ev.args = packet.args }
                    data = JSON.stringify(ev);
                    break;
                case "json":
                    data = JSON.stringify(packet.data);
                    break;
                case "connect":
                    if (packet.qs) data = packet.qs;
                    break;
                case "ack":
                    data = packet.ackId + (packet.args && packet.args.length ? "+" + JSON.stringify(packet.args) : "");
                    break
            }
            var encoded = [type, id + (ack == "data" ? "+" : ""), endpoint];
            if (data !== null && data !== undefined) encoded.push(data);
            return encoded.join(":")
        };
        parser.encodePayload = function(packets) {
            var decoded = "";
            if (packets.length == 1) return packets[0];
            for (var i = 0, l = packets.length; i < l; i++) {
                var packet = packets[i];
                decoded += "�" + packet.length + "�" + packets[i]
            }
            return decoded
        };
        var regexp = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
        parser.decodePacket = function(data) {
            var pieces = data.match(regexp);
            if (!pieces) return {};
            var id = pieces[2] || "",
                data = pieces[5] || "",
                packet = { type: packets[pieces[1]], endpoint: pieces[4] || "" };
            if (id) {
                packet.id = id;
                if (pieces[3]) packet.ack = "data";
                else packet.ack = true
            }
            switch (packet.type) {
                case "error":
                    var pieces = data.split("+");
                    packet.reason = reasons[pieces[0]] || "";
                    packet.advice = advice[pieces[1]] || "";
                    break;
                case "message":
                    packet.data = data || "";
                    break;
                case "event":
                    try {
                        var opts = JSON.parse(data);
                        packet.name = opts.name;
                        packet.args = opts.args
                    } catch (e) {}
                    packet.args = packet.args || [];
                    break;
                case "json":
                    try { packet.data = JSON.parse(data) } catch (e) {}
                    break;
                case "connect":
                    packet.qs = data || "";
                    break;
                case "ack":
                    var pieces = data.match(/^([0-9]+)(\+)?(.*)/);
                    if (pieces) {
                        packet.ackId = pieces[1];
                        packet.args = [];
                        if (pieces[3]) {
                            try { packet.args = pieces[3] ? JSON.parse(pieces[3]) : [] } catch (e) {}
                        }
                    }
                    break;
                case "disconnect":
                case "heartbeat":
                    break
            }
            return packet
        };
        parser.decodePayload = function(data) {
            if (data.charAt(0) == "�") {
                var ret = [];
                for (var i = 1, length = ""; i < data.length; i++) {
                    if (data.charAt(i) == "�") {
                        ret.push(parser.decodePacket(data.substr(i + 1).substr(0, length)));
                        i += Number(length) + 1;
                        length = ""
                    } else { length += data.charAt(i) }
                }
                return ret
            } else {
                return [parser.decodePacket(data)]
            }
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io) {
        exports.Transport = Transport;

        function Transport(socket, sessid) {
            this.socket = socket;
            this.sessid = sessid
        }
        io.util.mixin(Transport, io.EventEmitter);
        Transport.prototype.heartbeats = function() {
            return true
        };
        Transport.prototype.onData = function(data) {
            this.clearCloseTimeout();
            if (this.socket.connected || this.socket.connecting || this.socket.reconnecting) { this.setCloseTimeout() }
            if (data !== "") {
                var msgs = io.parser.decodePayload(data);
                if (msgs && msgs.length) {
                    for (var i = 0, l = msgs.length; i < l; i++) { this.onPacket(msgs[i]) }
                }
            }
            return this
        };
        Transport.prototype.onPacket = function(packet) {
            this.socket.setHeartbeatTimeout();
            if (packet.type == "heartbeat") {
                return this.onHeartbeat()
            }
            if (packet.type == "connect" && packet.endpoint == "") { this.onConnect() }
            if (packet.type == "error" && packet.advice == "reconnect") { this.isOpen = false }
            this.socket.onPacket(packet);
            return this
        };
        Transport.prototype.setCloseTimeout = function() {
            if (!this.closeTimeout) {
                var self = this;
                this.closeTimeout = setTimeout(function() { self.onDisconnect() }, this.socket.closeTimeout)
            }
        };
        Transport.prototype.onDisconnect = function() {
            if (this.isOpen) this.close();
            this.clearTimeouts();
            this.socket.onDisconnect();
            return this
        };
        Transport.prototype.onConnect = function() {
            this.socket.onConnect();
            return this
        };
        Transport.prototype.clearCloseTimeout = function() {
            if (this.closeTimeout) {
                clearTimeout(this.closeTimeout);
                this.closeTimeout = null
            }
        };
        Transport.prototype.clearTimeouts = function() {
            this.clearCloseTimeout();
            if (this.reopenTimeout) { clearTimeout(this.reopenTimeout) }
        };
        Transport.prototype.packet = function(packet) { this.send(io.parser.encodePacket(packet)) };
        Transport.prototype.onHeartbeat = function(heartbeat) { this.packet({ type: "heartbeat" }) };
        Transport.prototype.onOpen = function() {
            this.isOpen = true;
            this.clearCloseTimeout();
            this.socket.onOpen()
        };
        Transport.prototype.onClose = function() {
            var self = this;
            this.isOpen = false;
            this.socket.onClose();
            this.onDisconnect()
        };
        Transport.prototype.prepareUrl = function() {
            var options = this.socket.options;
            return this.scheme() + "://" + options.host + ":" + options.port + "/" + options.resource + "/" + io.protocol + "/" + this.name + "/" + this.sessid
        };
        Transport.prototype.ready = function(socket, fn) { fn.call(this) }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.Socket = Socket;

        function Socket(options) {
            this.options = { port: 80, secure: false, document: "document" in global ? document : false, resource: "socket.io", transports: io.transports, "connect timeout": 1e4, "try multiple transports": true, reconnect: true, "reconnection delay": 500, "reconnection limit": Infinity, "reopen delay": 3e3, "max reconnection attempts": 10, "sync disconnect on unload": false, "auto connect": true, "flash policy port": 10843, manualFlush: false };
            io.util.merge(this.options, options);
            this.connected = false;
            this.open = false;
            this.connecting = false;
            this.reconnecting = false;
            this.namespaces = {};
            this.buffer = [];
            this.doBuffer = false;
            if (this.options["sync disconnect on unload"] && (!this.isXDomain() || io.util.ua.hasCORS)) {
                var self = this;
                io.util.on(global, "beforeunload", function() { self.disconnectSync() }, false)
            }
            if (this.options["auto connect"]) { this.connect() }
        }
        io.util.mixin(Socket, io.EventEmitter);
        Socket.prototype.of = function(name) {
            if (!this.namespaces[name]) {
                this.namespaces[name] = new io.SocketNamespace(this, name);
                if (name !== "") { this.namespaces[name].packet({ type: "connect" }) }
            }
            return this.namespaces[name]
        };
        Socket.prototype.publish = function() {
            this.emit.apply(this, arguments);
            var nsp;
            for (var i in this.namespaces) {
                if (this.namespaces.hasOwnProperty(i)) {
                    nsp = this.of(i);
                    nsp.$emit.apply(nsp, arguments)
                }
            }
        };

        function empty() {}
        Socket.prototype.handshake = function(fn) {
            var self = this,
                options = this.options;

            function complete(data) {
                if (data instanceof Error) {
                    self.connecting = false;
                    self.onError(data.message)
                } else { fn.apply(null, data.split(":")) }
            }
            var url = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, io.protocol, io.util.query(this.options.query, "t=" + +(new Date))].join("/");
            if (this.isXDomain() && !io.util.ua.hasCORS) {
                var insertAt = document.getElementsByTagName("script")[0],
                    script = document.createElement("script");
                script.src = url + "&jsonp=" + io.j.length;
                insertAt.parentNode.insertBefore(script, insertAt);
                io.j.push(function(data) {
                    complete(data);
                    script.parentNode.removeChild(script)
                })
            } else {
                var xhr = io.util.request();
                xhr.open("GET", url, true);
                if (this.isXDomain()) { xhr.withCredentials = true }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        xhr.onreadystatechange = empty;
                        if (xhr.status == 200) { complete(xhr.responseText) } else if (xhr.status == 403) { self.onError(xhr.responseText) } else { self.connecting = false;!self.reconnecting && self.onError(xhr.responseText) }
                    }
                };
                xhr.send(null)
            }
        };
        Socket.prototype.getTransport = function(override) {
            var transports = override || this.transports,
                match;
            for (var i = 0, transport; transport = transports[i]; i++) {
                if (io.Transport[transport] && io.Transport[transport].check(this) && (!this.isXDomain() || io.Transport[transport].xdomainCheck(this))) {
                    return new io.Transport[transport](this, this.sessionid)
                }
            }
            return null
        };
        Socket.prototype.connect = function(fn) {
            if (this.connecting && this.transports != "jsonp-polling") {
                return this
            }
            var self = this;
            self.connecting = true;
            this.handshake(function(sid, heartbeat, close, transports) {
                self.sessionid = sid;
                self.closeTimeout = close * 1e3;
                self.heartbeatTimeout = heartbeat * 1e3;
                var check = function() {
                    return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
                };
                if (!check()) { transports = "jsonp-polling" }
                if (!self.transports) self.transports = self.origTransports = transports ? io.util.intersect(transports.split(","), self.options.transports) : self.options.transports;
                self.setHeartbeatTimeout();

                function connect(transports) {
                    if (self.transport) self.transport.clearTimeouts();
                    self.transport = self.getTransport(transports);
                    if (!self.transport) return self.publish("connect_failed");
                    self.transport.ready(self, function() {
                        self.connecting = true;
                        self.publish("connecting", self.transport.name);
                        self.transport.open();
                        if (self.options["connect timeout"]) {
                            self.connectTimeoutTimer = setTimeout(function() {
                                if (!self.connected) {
                                    self.connecting = false;
                                    if (self.options["try multiple transports"]) {
                                        var remaining = self.transports;
                                        while (remaining.length > 0 && remaining.splice(0, 1)[0] != self.transport.name) {}
                                        if (remaining.length) { connect(remaining) } else { self.publish("connect_failed") }
                                    }
                                }
                            }, self.options["connect timeout"])
                        }
                    })
                }
                connect(self.transports);
                self.once("connect", function() {
                    clearTimeout(self.connectTimeoutTimer);
                    fn && typeof fn == "function" && fn()
                })
            });
            return this
        };
        Socket.prototype.setHeartbeatTimeout = function() {
            clearTimeout(this.heartbeatTimeoutTimer);
            if (this.transport && !this.transport.heartbeats()) return;
            var self = this;
            this.heartbeatTimeoutTimer = setTimeout(function() { self.transport.onClose() }, this.heartbeatTimeout)
        };
        Socket.prototype.packet = function(data) {
            if (this.connected && !this.doBuffer) { this.transport.packet(data) } else { this.buffer.push(data) }
            return this
        };
        Socket.prototype.setBuffer = function(v) {
            this.doBuffer = v;
            if (!v && this.connected && this.buffer.length) {
                if (!this.options["manualFlush"]) { this.flushBuffer() }
            }
        };
        Socket.prototype.flushBuffer = function() {
            this.transport.payload(this.buffer);
            this.buffer = []
        };
        Socket.prototype.disconnect = function() {
            if (this.connected || this.connecting) {
                if (this.open) { this.of("").packet({ type: "disconnect" }) }
                this.onDisconnect("booted")
            }
            return this
        };
        Socket.prototype.disconnectSync = function() {
            var xhr = io.util.request();
            var uri = ["http" + (this.options.secure ? "s" : "") + ":/", this.options.host + ":" + this.options.port, this.options.resource, io.protocol, "", this.sessionid].join("/") + "/?disconnect=1";
            xhr.open("GET", uri, false);
            xhr.send(null);
            this.onDisconnect("booted")
        };
        Socket.prototype.isXDomain = function() {
            var port = global.location.port || ("https:" == global.location.protocol ? 443 : 80);
            return this.options.host !== global.location.hostname || this.options.port != port
        };
        Socket.prototype.onConnect = function() {
            if (!this.connected) {
                this.connected = true;
                this.connecting = false;
                if (!this.doBuffer) { this.setBuffer(false) }
                this.emit("connect")
            }
        };
        Socket.prototype.onOpen = function() { this.open = true };
        Socket.prototype.onClose = function() {
            this.open = false;
            clearTimeout(this.heartbeatTimeoutTimer)
        };
        Socket.prototype.onPacket = function(packet) { this.of(packet.endpoint).onPacket(packet) };
        Socket.prototype.onError = function(err) {
            if (err && err.advice) {
                if (err.advice === "reconnect" && (this.connected || this.connecting)) {
                    this.disconnect();
                    if (this.options.reconnect) { this.reconnect() }
                }
            }
            this.publish("error", err && err.reason ? err.reason : err)
        };
        Socket.prototype.onDisconnect = function(reason) {
            var wasConnected = this.connected,
                wasConnecting = this.connecting;
            this.connected = false;
            this.connecting = false;
            this.open = false;
            if (wasConnected || wasConnecting) {
                this.transport.close();
                this.transport.clearTimeouts();
                if (wasConnected) {
                    this.publish("disconnect", reason);
                    if ("booted" != reason && this.options.reconnect && !this.reconnecting) { this.reconnect() }
                }
            }
        };
        Socket.prototype.reconnect = function() {
            this.reconnecting = true;
            this.reconnectionAttempts = 0;
            this.reconnectionDelay = this.options["reconnection delay"];
            var self = this,
                maxAttempts = this.options["max reconnection attempts"],
                tryMultiple = this.options["try multiple transports"],
                limit = this.options["reconnection limit"];

            function reset() {
                if (self.connected) {
                    for (var i in self.namespaces) {
                        if (self.namespaces.hasOwnProperty(i) && "" !== i) { self.namespaces[i].packet({ type: "connect" }) }
                    }
                    self.publish("reconnect", self.transport.name, self.reconnectionAttempts)
                }
                clearTimeout(self.reconnectionTimer);
                self.removeListener("connect_failed", maybeReconnect);
                self.removeListener("connect", maybeReconnect);
                self.reconnecting = false;
                delete self.reconnectionAttempts;
                delete self.reconnectionDelay;
                delete self.reconnectionTimer;
                delete self.redoTransports;
                self.options["try multiple transports"] = tryMultiple
            }

            function maybeReconnect() {
                if (!self.reconnecting) {
                    return
                }
                if (self.connected) {
                    return reset()
                }
                if (self.connecting && self.reconnecting && self.transports != "jsonp-polling") {
                    return self.reconnectionTimer = setTimeout(maybeReconnect, 1e3)
                }
                if (self.reconnectionAttempts++ >= maxAttempts) {
                    if (!self.redoTransports) {
                        self.on("connect_failed", maybeReconnect);
                        self.options["try multiple transports"] = true;
                        self.transports = self.origTransports;
                        self.transport = self.getTransport();
                        self.redoTransports = true;
                        self.connect()
                    } else {
                        self.publish("reconnect_failed");
                        reset()
                    }
                } else {
                    if (self.reconnectionDelay < limit) { self.reconnectionDelay *= 2 }
                    self.connect();
                    self.publish("reconnecting", self.reconnectionDelay, self.reconnectionAttempts);
                    self.reconnectionTimer = setTimeout(maybeReconnect, self.reconnectionDelay)
                }
            }
            this.options["try multiple transports"] = false;
            this.reconnectionTimer = setTimeout(maybeReconnect, this.reconnectionDelay);
            this.on("connect", maybeReconnect)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.SocketNamespace = SocketNamespace;

        function SocketNamespace(socket, name) {
            this.socket = socket;
            this.name = name || "";
            this.flags = {};
            this.json = new Flag(this, "json");
            this.ackPackets = 0;
            this.acks = {}
        }
        io.util.mixin(SocketNamespace, io.EventEmitter);
        SocketNamespace.prototype.$emit = io.EventEmitter.prototype.emit;
        SocketNamespace.prototype.of = function() {
            return this.socket.of.apply(this.socket, arguments)
        };
        SocketNamespace.prototype.packet = function(packet) {
            packet.endpoint = this.name;
            this.socket.packet(packet);
            this.flags = {};
            return this
        };
        SocketNamespace.prototype.send = function(data, fn) {
            var packet = { type: this.flags.json ? "json" : "message", data: data };
            if ("function" == typeof fn) {
                packet.id = ++this.ackPackets;
                packet.ack = true;
                this.acks[packet.id] = fn
            }
            return this.packet(packet)
        };
        SocketNamespace.prototype.emit = function(name) {
            var args = Array.prototype.slice.call(arguments, 1),
                lastArg = args[args.length - 1],
                packet = { type: "event", name: name };
            if ("function" == typeof lastArg) {
                packet.id = ++this.ackPackets;
                packet.ack = "data";
                this.acks[packet.id] = lastArg;
                args = args.slice(0, args.length - 1)
            }
            packet.args = args;
            return this.packet(packet)
        };
        SocketNamespace.prototype.disconnect = function() {
            if (this.name === "") { this.socket.disconnect() } else {
                this.packet({ type: "disconnect" });
                this.$emit("disconnect")
            }
            return this
        };
        SocketNamespace.prototype.onPacket = function(packet) {
            var self = this;

            function ack() { self.packet({ type: "ack", args: io.util.toArray(arguments), ackId: packet.id }) }
            switch (packet.type) {
                case "connect":
                    this.$emit("connect");
                    break;
                case "disconnect":
                    if (this.name === "") { this.socket.onDisconnect(packet.reason || "booted") } else { this.$emit("disconnect", packet.reason) }
                    break;
                case "message":
                case "json":
                    var params = ["message", packet.data];
                    if (packet.ack == "data") { params.push(ack) } else if (packet.ack) { this.packet({ type: "ack", ackId: packet.id }) }
                    this.$emit.apply(this, params);
                    break;
                case "event":
                    var params = [packet.name].concat(packet.args);
                    if (packet.ack == "data") params.push(ack);
                    this.$emit.apply(this, params);
                    break;
                case "ack":
                    if (this.acks[packet.ackId]) {
                        this.acks[packet.ackId].apply(this, packet.args);
                        delete this.acks[packet.ackId]
                    }
                    break;
                case "error":
                    if (packet.advice) { this.socket.onError(packet) } else {
                        if (packet.reason == "unauthorized") { this.$emit("connect_failed", packet.reason) } else { this.$emit("error", packet.reason) }
                    }
                    break
            }
        };

        function Flag(nsp, name) {
            this.namespace = nsp;
            this.name = name
        }
        Flag.prototype.send = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.send.apply(this.namespace, arguments)
        };
        Flag.prototype.emit = function() {
            this.namespace.flags[this.name] = true;
            this.namespace.emit.apply(this.namespace, arguments)
        }
    })("undefined" != typeof io ? io : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports.websocket = WS;

        function WS(socket) { io.Transport.apply(this, arguments) }
        io.util.inherit(WS, io.Transport);
        WS.prototype.name = "websocket";
        WS.prototype.open = function() {
            var query = io.util.query(this.socket.options.query),
                self = this,
                Socket;
            if (!Socket) { Socket = global.MozWebSocket || global.WebSocket }
            this.websocket = new Socket(this.prepareUrl() + query);
            this.websocket.onopen = function() {
                self.onOpen();
                self.socket.setBuffer(false)
            };
            this.websocket.onmessage = function(ev) { self.onData(ev.data) };
            this.websocket.onclose = function() {
                self.onClose();
                self.socket.setBuffer(true)
            };
            this.websocket.onerror = function(e) { self.onError(e) };
            return this
        };
        if (io.util.ua.iDevice) {
            WS.prototype.send = function(data) {
                var self = this;
                setTimeout(function() { self.websocket.send(data) }, 0);
                return this
            }
        } else {
            WS.prototype.send = function(data) {
                this.websocket.send(data);
                return this
            }
        }
        WS.prototype.payload = function(arr) {
            for (var i = 0, l = arr.length; i < l; i++) { this.packet(arr[i]) }
            return this
        };
        WS.prototype.close = function() {
            this.websocket.close();
            return this
        };
        WS.prototype.onError = function(e) { this.socket.onError(e) };
        WS.prototype.scheme = function() {
            return this.socket.options.secure ? "wss" : "ws"
        };
        WS.check = function() {
            return "WebSocket" in global && !("__addTask" in WebSocket) || "MozWebSocket" in global
        };
        WS.xdomainCheck = function() {
            return true
        };
        io.transports.push("websocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.flashsocket = Flashsocket;

        function Flashsocket() { io.Transport.websocket.apply(this, arguments) }
        io.util.inherit(Flashsocket, io.Transport.websocket);
        Flashsocket.prototype.name = "flashsocket";
        Flashsocket.prototype.open = function() {
            var self = this,
                args = arguments;
            WebSocket.VV6P(function() { io.Transport.websocket.prototype.open.apply(self, args) });
            return this
        };
        Flashsocket.prototype.send = function() {
            var self = this,
                args = arguments;
            WebSocket.VV6P(function() { io.Transport.websocket.prototype.send.apply(self, args) });
            return this
        };
        Flashsocket.prototype.close = function() {
            WebSocket.KM3x.length = 0;
            io.Transport.websocket.prototype.close.call(this);
            return this
        };
        Flashsocket.prototype.ready = function(socket, fn) {
            function init() {
                var options = socket.options,
                    port = options["flash policy port"],
                    path = ["http" + (options.secure ? "s" : "") + ":/", options.host + ":" + options.port, options.resource, "static/flashsocket", "WebSocketMain" + (socket.isXDomain() ? "Insecure" : "") + ".swf"];
                if (!Flashsocket.loaded) {
                    if (typeof WEB_SOCKET_SWF_LOCATION === "undefined") { WEB_SOCKET_SWF_LOCATION = path.join("/") }
                    if (port !== 843) { WebSocket.loadFlashPolicyFile("xmlsocket://" + options.host + ":" + port) }
                    WebSocket.baB7u();
                    Flashsocket.loaded = true
                }
                fn.call(self)
            }
            var self = this;
            if (document.body) return init();
            io.util.load(init)
        };
        Flashsocket.check = function() {
            if (typeof WebSocket == "undefined" || !("__initialize" in WebSocket) || !swfobject) return false;
            return swfobject.getFlashPlayerVersion().major >= 10
        };
        Flashsocket.xdomainCheck = function() {
            return true
        };
        if (typeof window != "undefined") { WEB_SOCKET_DISABLE_AUTO_INITIALIZATION = true }
        io.transports.push("flashsocket")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    if ("undefined" != typeof window) {
        var swfobject = function() {
            var D = "undefined",
                r = "object",
                S = "Shockwave Flash",
                W = "ShockwaveFlash.ShockwaveFlash",
                q = "application/x-shockwave-flash",
                R = "SWFObjectExprInst",
                x = "onreadystatechange",
                O = window,
                j = document,
                t = navigator,
                T = false,
                U = [h],
                o = [],
                N = [],
                I = [],
                l, Q, E, B, J = false,
                a = false,
                n, G, m = true,
                M = function() {
                    var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                        ah = t.userAgent.toLowerCase(),
                        Y = t.platform.toLowerCase(),
                        ae = Y ? /win/.test(Y) : /win/.test(ah),
                        ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                        af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                        X = !+"1",
                        ag = [0, 0, 0],
                        ab = null;
                    if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                        ab = t.plugins[S].description;
                        if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                            T = true;
                            X = false;
                            ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                            ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                            ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                            ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                        }
                    } else {
                        if (typeof O[["Active"].concat("Object").join("X")] != D) {
                            try {
                                var ad = new(window[["Active"].concat("Object").join("X")])(W);
                                if (ad) {
                                    ab = ad.GetVariable("$version");
                                    if (ab) {
                                        X = true;
                                        ab = ab.split(" ")[1].split(",");
                                        ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                    }
                                }
                            } catch (Z) {}
                        }
                    }
                    return { w3: aa, pv: ag, wk: af, ie: X, win: ae, mac: ac }
                }(),
                k = function() {
                    if (!M.w3) {
                        return
                    }
                    if (typeof j.readyState != D && j.readyState == "complete" || typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body)) { f() }
                    if (!J) {
                        if (typeof j.addEventListener != D) { j.addEventListener("DOMContentLoaded", f, false) }
                        if (M.ie && M.win) {
                            j.attachEvent(x, function() {
                                if (j.readyState == "complete") {
                                    j.detachEvent(x, arguments.callee);
                                    f()
                                }
                            });
                            if (O == top) {
                                (function() {
                                    if (J) {
                                        return
                                    }
                                    try { j.documentElement.doScroll("left") } catch (X) {
                                        setTimeout(arguments.callee, 0);
                                        return
                                    }
                                    f()
                                })()
                            }
                        }
                        if (M.wk) {
                            (function() {
                                if (J) {
                                    return
                                }
                                if (!/loaded|complete/.test(j.readyState)) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                        s(f)
                    }
                }();

            function f() {
                if (J) {
                    return
                }
                try {
                    var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                    Z.parentNode.removeChild(Z)
                } catch (aa) {
                    return
                }
                J = true;
                var X = U.length;
                for (var Y = 0; Y < X; Y++) { U[Y]() }
            }

            function K(X) {
                if (J) { X() } else { U[U.length] = X }
            }

            function s(Y) {
                if (typeof O.addEventListener != D) { O.addEventListener("load", Y, false) } else {
                    if (typeof j.addEventListener != D) { j.addEventListener("load", Y, false) } else {
                        if (typeof O.attachEvent != D) { i(O, "onload", Y) } else {
                            if (typeof O.onload == "function") {
                                var X = O.onload;
                                O.onload = function() {
                                    X();
                                    Y()
                                }
                            } else { O.onload = Y }
                        }
                    }
                }
            }

            function h() {
                if (T) { V() } else { H() }
            }

            function V() {
                var X = j.getElementsByTagName("body")[0];
                var aa = C(r);
                aa.setAttribute("type", q);
                aa.style.visibility = "hidden";
                var Z = X.appendChild(aa);
                if (Z) {
                    var Y = 0;
                    (function() {
                        if (typeof Z.GetVariable != D) {
                            var ab = Z.GetVariable("$version");
                            if (ab) {
                                ab = ab.split(" ")[1].split(",");
                                M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        } else {
                            if (Y < 10) {
                                Y++;
                                setTimeout(arguments.callee, 10);
                                return
                            }
                        }
                        X.removeChild(aa);
                        Z = null;
                        H()
                    })()
                } else { H() }
            }

            function H() {
                var ag = o.length;
                if (ag > 0) {
                    for (var af = 0; af < ag; af++) {
                        var Y = o[af].id;
                        var ab = o[af].callbackFn;
                        var aa = { success: false, id: Y };
                        if (M.pv[0] > 0) {
                            var ae = c(Y);
                            if (ae) {
                                if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                    w(Y, true);
                                    if (ab) {
                                        aa.success = true;
                                        aa.ref = z(Y);
                                        ab(aa)
                                    }
                                } else {
                                    if (o[af].expressInstall && A()) {
                                        var ai = {};
                                        ai.data = o[af].expressInstall;
                                        ai.width = ae.getAttribute("width") || "0";
                                        ai.height = ae.getAttribute("height") || "0";
                                        if (ae.getAttribute("class")) { ai.styleclass = ae.getAttribute("class") }
                                        if (ae.getAttribute("align")) { ai.align = ae.getAttribute("align") }
                                        var ah = {};
                                        var X = ae.getElementsByTagName("param");
                                        var ac = X.length;
                                        for (var ad = 0; ad < ac; ad++) {
                                            if (X[ad].getAttribute("name").toLowerCase() != "movie") { ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value") }
                                        }
                                        P(ai, ah, Y, ab)
                                    } else {
                                        p(ae);
                                        if (ab) { ab(aa) }
                                    }
                                }
                            }
                        } else {
                            w(Y, true);
                            if (ab) {
                                var Z = z(Y);
                                if (Z && typeof Z.SetVariable != D) {
                                    aa.success = true;
                                    aa.ref = Z
                                }
                                ab(aa)
                            }
                        }
                    }
                }
            }

            function z(aa) {
                var X = null;
                var Y = c(aa);
                if (Y && Y.nodeName == "OBJECT") {
                    if (typeof Y.SetVariable != D) { X = Y } else {
                        var Z = Y.getElementsByTagName(r)[0];
                        if (Z) { X = Z }
                    }
                }
                return X
            }

            function A() {
                return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
            }

            function P(aa, ab, X, Z) {
                a = true;
                E = Z || null;
                B = { success: false, id: X };
                var ae = c(X);
                if (ae) {
                    if (ae.nodeName == "OBJECT") {
                        l = g(ae);
                        Q = null
                    } else {
                        l = ae;
                        Q = X
                    }
                    aa.id = R;
                    if (typeof aa.width == D || !/%$/.test(aa.width) && parseInt(aa.width, 10) < 310) { aa.width = "310" }
                    if (typeof aa.height == D || !/%$/.test(aa.height) && parseInt(aa.height, 10) < 137) { aa.height = "137" }
                    j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                    var ad = M.ie && M.win ? ["Active"].concat("").join("X") : "PlugIn",
                        ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                    if (typeof ab.flashvars != D) { ab.flashvars += "&" + ac } else { ab.flashvars = ac }
                    if (M.ie && M.win && ae.readyState != 4) {
                        var Y = C("div");
                        X += "SWFObjectNew";
                        Y.setAttribute("id", X);
                        ae.parentNode.insertBefore(Y, ae);
                        ae.style.display = "none";
                        (function() {
                            if (ae.readyState == 4) { ae.parentNode.removeChild(ae) } else { setTimeout(arguments.callee, 10) }
                        })()
                    }
                    u(aa, ab, X)
                }
            }

            function p(Y) {
                if (M.ie && M.win && Y.readyState != 4) {
                    var X = C("div");
                    Y.parentNode.insertBefore(X, Y);
                    X.parentNode.replaceChild(g(Y), X);
                    Y.style.display = "none";
                    (function() {
                        if (Y.readyState == 4) { Y.parentNode.removeChild(Y) } else { setTimeout(arguments.callee, 10) }
                    })()
                } else { Y.parentNode.replaceChild(g(Y), Y) }
            }

            function g(ab) {
                var aa = C("div");
                if (M.win && M.ie) { aa.innerHTML = ab.innerHTML } else {
                    var Y = ab.getElementsByTagName(r)[0];
                    if (Y) {
                        var ad = Y.childNodes;
                        if (ad) {
                            var X = ad.length;
                            for (var Z = 0; Z < X; Z++) {
                                if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) { aa.appendChild(ad[Z].cloneNode(true)) }
                            }
                        }
                    }
                }
                return aa
            }

            function u(ai, ag, Y) {
                var X, aa = c(Y);
                if (M.wk && M.wk < 312) {
                    return X
                }
                if (aa) {
                    if (typeof ai.id == D) { ai.id = Y }
                    if (M.ie && M.win) {
                        var ah = "";
                        for (var ae in ai) {
                            if (ai[ae] != Object.prototype[ae]) {
                                if (ae.toLowerCase() == "data") { ag.movie = ai[ae] } else {
                                    if (ae.toLowerCase() == "styleclass") { ah += ' class="' + ai[ae] + '"' } else {
                                        if (ae.toLowerCase() != "classid") { ah += " " + ae + '="' + ai[ae] + '"' }
                                    }
                                }
                            }
                        }
                        var af = "";
                        for (var ad in ag) {
                            if (ag[ad] != Object.prototype[ad]) { af += '<param name="' + ad + '" value="' + ag[ad] + '" />' }
                        }
                        aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                        N[N.length] = ai.id;
                        X = c(ai.id)
                    } else {
                        var Z = C(r);
                        Z.setAttribute("type", q);
                        for (var ac in ai) {
                            if (ai[ac] != Object.prototype[ac]) {
                                if (ac.toLowerCase() == "styleclass") { Z.setAttribute("class", ai[ac]) } else {
                                    if (ac.toLowerCase() != "classid") { Z.setAttribute(ac, ai[ac]) }
                                }
                            }
                        }
                        for (var ab in ag) {
                            if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") { e(Z, ab, ag[ab]) }
                        }
                        aa.parentNode.replaceChild(Z, aa);
                        X = Z
                    }
                }
                return X
            }

            function e(Z, X, Y) {
                var aa = C("param");
                aa.setAttribute("name", X);
                aa.setAttribute("value", Y);
                Z.appendChild(aa)
            }

            function y(Y) {
                var X = c(Y);
                if (X && X.nodeName == "OBJECT") {
                    if (M.ie && M.win) {
                        X.style.display = "none";
                        (function() {
                            if (X.readyState == 4) { b(Y) } else { setTimeout(arguments.callee, 10) }
                        })()
                    } else { X.parentNode.removeChild(X) }
                }
            }

            function b(Z) {
                var Y = c(Z);
                if (Y) {
                    for (var X in Y) {
                        if (typeof Y[X] == "function") { Y[X] = null }
                    }
                    Y.parentNode.removeChild(Y)
                }
            }

            function c(Z) {
                var X = null;
                try { X = j.getElementById(Z) } catch (Y) {}
                return X
            }

            function C(X) {
                return j.createElement(X)
            }

            function i(Z, X, Y) {
                Z.attachEvent(X, Y);
                I[I.length] = [Z, X, Y]
            }

            function F(Z) {
                var Y = M.pv,
                    X = Z.split(".");
                X[0] = parseInt(X[0], 10);
                X[1] = parseInt(X[1], 10) || 0;
                X[2] = parseInt(X[2], 10) || 0;
                return Y[0] > X[0] || Y[0] == X[0] && Y[1] > X[1] || Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2] ? true : false
            }

            function v(ac, Y, ad, ab) {
                if (M.ie && M.mac) {
                    return
                }
                var aa = j.getElementsByTagName("head")[0];
                if (!aa) {
                    return
                }
                var X = ad && typeof ad == "string" ? ad : "screen";
                if (ab) {
                    n = null;
                    G = null
                }
                if (!n || G != X) {
                    var Z = C("style");
                    Z.setAttribute("type", "text/css");
                    Z.setAttribute("media", X);
                    n = aa.appendChild(Z);
                    if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) { n = j.styleSheets[j.styleSheets.length - 1] }
                    G = X
                }
                if (M.ie && M.win) {
                    if (n && typeof n.addRule == r) { n.addRule(ac, Y) }
                } else {
                    if (n && typeof j.createTextNode != D) { n.appendChild(j.createTextNode(ac + " {" + Y + "}")) }
                }
            }

            function w(Z, X) {
                if (!m) {
                    return
                }
                var Y = X ? "visible" : "hidden";
                if (J && c(Z)) { c(Z).style.visibility = Y } else { v("#" + Z, "visibility:" + Y) }
            }

            function L(Y) {
                var Z = /[\\\"<>\.;]/;
                var X = Z.exec(Y) != null;
                return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
            }
            var d = function() {
                if (M.ie && M.win) {
                    window.attachEvent("onunload", function() {
                        var ac = I.length;
                        for (var ab = 0; ab < ac; ab++) { I[ab][0].detachEvent(I[ab][1], I[ab][2]) }
                        var Z = N.length;
                        for (var aa = 0; aa < Z; aa++) { y(N[aa]) }
                        for (var Y in M) { M[Y] = null }
                        M = null;
                        for (var X in swfobject) { swfobject[X] = null }
                        swfobject = null
                    })
                }
            }();
            return {
                registerObject: function(ab, X, aa, Z) {
                    if (M.w3 && ab && X) {
                        var Y = {};
                        Y.id = ab;
                        Y.swfVersion = X;
                        Y.expressInstall = aa;
                        Y.callbackFn = Z;
                        o[o.length] = Y;
                        w(ab, false)
                    } else {
                        if (Z) { Z({ success: false, id: ab }) }
                    }
                },
                getObjectById: function(X) {
                    if (M.w3) {
                        return z(X)
                    }
                },
                embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                    var X = { success: false, id: ah };
                    if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                        w(ah, false);
                        K(function() {
                            ae += "";
                            ag += "";
                            var aj = {};
                            if (af && typeof af === r) {
                                for (var al in af) { aj[al] = af[al] }
                            }
                            aj.data = ab;
                            aj.width = ae;
                            aj.height = ag;
                            var am = {};
                            if (ad && typeof ad === r) {
                                for (var ak in ad) { am[ak] = ad[ak] }
                            }
                            if (Z && typeof Z === r) {
                                for (var ai in Z) {
                                    if (typeof am.flashvars != D) { am.flashvars += "&" + ai + "=" + Z[ai] } else { am.flashvars = ai + "=" + Z[ai] }
                                }
                            }
                            if (F(Y)) {
                                var an = u(aj, am, ah);
                                if (aj.id == ah) { w(ah, true) }
                                X.success = true;
                                X.ref = an
                            } else {
                                if (aa && A()) {
                                    aj.data = aa;
                                    P(aj, am, ah, ac);
                                    return
                                } else { w(ah, true) }
                            }
                            if (ac) { ac(X) }
                        })
                    } else {
                        if (ac) { ac(X) }
                    }
                },
                switchOffAutoHideShow: function() { m = false },
                ua: M,
                getFlashPlayerVersion: function() {
                    return { major: M.pv[0], minor: M.pv[1], release: M.pv[2] }
                },
                hasFlashPlayerVersion: F,
                createSWF: function(Z, Y, X) {
                    if (M.w3) {
                        return u(Z, Y, X)
                    } else {
                        return undefined
                    }
                },
                showExpressInstall: function(Z, aa, X, Y) {
                    if (M.w3 && A()) { P(Z, aa, X, Y) }
                },
                removeSWF: function(X) {
                    if (M.w3) { y(X) }
                },
                createCSS: function(aa, Z, Y, X) {
                    if (M.w3) { v(aa, Z, Y, X) }
                },
                addDomLoadEvent: K,
                addLoadEvent: s,
                getQueryParamValue: function(aa) {
                    var Z = j.location.search || j.location.hash;
                    if (Z) {
                        if (/\?/.test(Z)) { Z = Z.split("?")[1] }
                        if (aa == null) {
                            return L(Z)
                        }
                        var Y = Z.split("&");
                        for (var X = 0; X < Y.length; X++) {
                            if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                                return L(Y[X].substring(Y[X].indexOf("=") + 1))
                            }
                        }
                    }
                    return ""
                },
                expressInstallCallback: function() {
                    if (a) {
                        var X = c(R);
                        if (X && l) {
                            X.parentNode.replaceChild(l, X);
                            if (Q) {
                                w(Q, true);
                                if (M.ie && M.win) { l.style.display = "block" }
                            }
                            if (E) { E(B) }
                        }
                        a = false
                    }
                }
            }
        }()
    }(function() {
        if ("undefined" == typeof window || window.WebSocket) return;
        var console = window.console;
        if (!console || !console.log || !console.error) { console = { log: function() {}, error: function() {} } }
        if (!swfobject.hasFlashPlayerVersion("10.0.0")) {
            console.error("Flash Player >= 10.0.0 is required.");
            return
        }
        if (location.protocol == "file:") { console.error("WARNING: web-socket-js doesn't work in file:///... URL " + "unless you set Flash Security Settings properly. " + "Open the page via Web server i.e. http://...") }
        WebSocket = function(url, protocols, proxyHost, proxyPort, headers) {
            var self = this;
            self.gx3x = WebSocket.bYs7l++;
            WebSocket.bFK4O[self.gx3x] = self;
            self.readyState = WebSocket.CONNECTING;
            self.bufferedAmount = 0;
            self.lb5g = {};
            if (!protocols) { protocols = [] } else if (typeof protocols == "string") { protocols = [protocols] }
            setTimeout(function() { WebSocket.VV6P(function() { WebSocket.oq6k.create(self.gx3x, url, protocols, proxyHost || null, proxyPort || 0, headers || null) }) }, 0)
        };
        WebSocket.prototype.send = function(data) {
            if (this.readyState == WebSocket.CONNECTING) {
                throw "INVALID_STATE_ERR: Web Socket connection has not been established"
            }
            var result = WebSocket.oq6k.send(this.gx3x, encodeURIComponent(data));
            if (result < 0) {
                return true
            } else {
                this.bufferedAmount += result;
                return false
            }
        };
        WebSocket.prototype.close = function() {
            if (this.readyState == WebSocket.CLOSED || this.readyState == WebSocket.CLOSING) {
                return
            }
            this.readyState = WebSocket.CLOSING;
            WebSocket.oq6k.close(this.gx3x)
        };
        WebSocket.prototype.addEventListener = function(type, listener, useCapture) {
            if (!(type in this.lb5g)) { this.lb5g[type] = [] }
            this.lb5g[type].push(listener)
        };
        WebSocket.prototype.removeEventListener = function(type, listener, useCapture) {
            if (!(type in this.lb5g)) return;
            var events = this.lb5g[type];
            for (var i = events.length - 1; i >= 0; --i) {
                if (events[i] === listener) {
                    events.splice(i, 1);
                    break
                }
            }
        };
        WebSocket.prototype.dispatchEvent = function(event) {
            var events = this.lb5g[event.type] || [];
            for (var i = 0; i < events.length; ++i) { events[i](event) }
            var handler = this["on" + event.type];
            if (handler) handler(event)
        };
        WebSocket.prototype.bYq7j = function(flashEvent) {
            if ("readyState" in flashEvent) { this.readyState = flashEvent.readyState }
            if ("protocol" in flashEvent) { this.protocol = flashEvent.protocol }
            var jsEvent;
            if (flashEvent.type == "open" || flashEvent.type == "error") { jsEvent = this.bFI4M(flashEvent.type) } else if (flashEvent.type == "close") { jsEvent = this.bFI4M("close") } else if (flashEvent.type == "message") {
                var data = decodeURIComponent(flashEvent.message);
                jsEvent = this.bYd7W("message", data)
            } else {
                throw "unknown event type: " + flashEvent.type
            }
            this.dispatchEvent(jsEvent)
        };
        WebSocket.prototype.bFI4M = function(type) {
            if (document.createEvent && window.Event) {
                var event = document.createEvent("Event");
                event.initEvent(type, false, false);
                return event
            } else {
                return { type: type, bubbles: false, cancelable: false }
            }
        };
        WebSocket.prototype.bYd7W = function(type, data) {
            if (document.createEvent && window.MessageEvent && !window.opera) {
                var event = document.createEvent("MessageEvent");
                event.initMessageEvent("message", false, false, data, null, null, window, null);
                return event
            } else {
                return { type: type, data: data, bubbles: false, cancelable: false }
            }
        };
        WebSocket.CONNECTING = 0;
        WebSocket.OPEN = 1;
        WebSocket.CLOSING = 2;
        WebSocket.CLOSED = 3;
        WebSocket.oq6k = null;
        WebSocket.bFK4O = {};
        WebSocket.KM3x = [];
        WebSocket.bYs7l = 0;
        WebSocket.loadFlashPolicyFile = function(url) { WebSocket.VV6P(function() { WebSocket.oq6k.loadManualPolicyFile(url) }) };
        WebSocket.baB7u = function() {
            if (WebSocket.oq6k) return;
            if (WebSocket.bYc7V) { window.WEB_SOCKET_SWF_LOCATION = WebSocket.bYc7V }
            if (!window.WEB_SOCKET_SWF_LOCATION) {
                console.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");
                return
            }
            var container = document.createElement("div");
            container.id = "webSocketContainer";
            container.style.position = "absolute";
            if (WebSocket.bYb7U()) {
                container.style.left = "0px";
                container.style.top = "0px"
            } else {
                container.style.left = "-100px";
                container.style.top = "-100px"
            }
            var holder = document.createElement("div");
            holder.id = "webSocketFlash";
            container.appendChild(holder);
            document.body.appendChild(container);
            swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION, "webSocketFlash", "1", "1", "10.0.0", null, null, { hasPriority: true, swliveconnect: true, allowScriptAccess: "always" }, null, function(e) {
                if (!e.success) { console.error("[WebSocket] swfobject.embedSWF failed") }
            })
        };
        WebSocket.cuH2x = function() {
            setTimeout(function() {
                WebSocket.oq6k = document.getElementById("webSocketFlash");
                WebSocket.oq6k.setCallerUrl(location.href);
                WebSocket.oq6k.setDebug(!!window.WEB_SOCKET_DEBUG);
                for (var i = 0; i < WebSocket.KM3x.length; ++i) { WebSocket.KM3x[i]() }
                WebSocket.KM3x = []
            }, 0)
        };
        WebSocket.cuJ2x = function() {
            setTimeout(function() {
                try {
                    var events = WebSocket.oq6k.receiveEvents();
                    for (var i = 0; i < events.length; ++i) { WebSocket.bFK4O[events[i].webSocketId].bYq7j(events[i]) }
                } catch (e) { console.error(e) }
            }, 0);
            return true
        };
        WebSocket.cuL2x = function(message) { console.log(decodeURIComponent(message)) };
        WebSocket.dw3x = function(message) { console.error(decodeURIComponent(message)) };
        WebSocket.VV6P = function(task) {
            if (WebSocket.oq6k) { task() } else { WebSocket.KM3x.push(task) }
        };
        WebSocket.bYb7U = function() {
            if (!window.navigator || !window.navigator.mimeTypes) {
                return false
            }
            var mimeType = window.navigator.mimeTypes["application/x-shockwave-flash"];
            if (!mimeType || !mimeType.enabledPlugin || !mimeType.enabledPlugin.filename) {
                return false
            }
            return mimeType.enabledPlugin.filename.match(/flashlite/i) ? true : false
        };
        if (!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION) {
            if (window.addEventListener) { window.addEventListener("load", function() { WebSocket.baB7u() }, false) } else { window.attachEvent("onload", function() { WebSocket.baB7u() }) }
        }
    })();
    (function(exports, io, global) {
        exports.XHR = XHR;

        function XHR(socket) {
            if (!socket) return;
            io.Transport.apply(this, arguments);
            this.sendBuffer = []
        }
        io.util.inherit(XHR, io.Transport);
        XHR.prototype.open = function() {
            this.socket.setBuffer(false);
            this.onOpen();
            this.get();
            this.setCloseTimeout();
            return this
        };
        XHR.prototype.payload = function(payload) {
            var msgs = [];
            for (var i = 0, l = payload.length; i < l; i++) { msgs.push(io.parser.encodePacket(payload[i])) }
            this.send(io.parser.encodePayload(msgs))
        };
        XHR.prototype.send = function(data) {
            this.post(data);
            return this
        };

        function empty() {}
        XHR.prototype.post = function(data) {
            var self = this;
            this.socket.setBuffer(true);

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    self.posting = false;
                    if (this.status == 200) { self.socket.setBuffer(false) } else { self.onClose() }
                }
            }

            function onload() {
                this.onload = empty;
                self.socket.setBuffer(false)
            }
            this.sendXHR = this.request("POST");
            if (global.XDomainRequest && this.sendXHR instanceof XDomainRequest) { this.sendXHR.onload = this.sendXHR.onerror = onload } else { this.sendXHR.onreadystatechange = stateChange }
            this.sendXHR.send(data)
        };
        XHR.prototype.close = function() {
            this.onClose();
            return this
        };
        XHR.prototype.request = function(method) {
            var req = io.util.request(this.socket.isXDomain()),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            req.open(method || "GET", this.prepareUrl() + query, true);
            if (method == "POST") {
                try {
                    if (req.setRequestHeader) { req.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } else { req.contentType = "text/plain" }
                } catch (e) {}
            }
            return req
        };
        XHR.prototype.scheme = function() {
            return this.socket.options.secure ? "https" : "http"
        };
        XHR.check = function(socket, xdomain) {
            try {
                var request = io.util.request(xdomain),
                    usesXDomReq = global.XDomainRequest && request instanceof XDomainRequest,
                    socketProtocol = socket && socket.options && socket.options.secure ? "https:" : "http:",
                    isXProtocol = global.location && socketProtocol != global.location.protocol;
                if (request && !(usesXDomReq && isXProtocol)) {
                    return true
                }
            } catch (e) {}
            return false
        };
        XHR.xdomainCheck = function(socket) {
            return XHR.check(socket, true)
        }
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io) {
        exports.htmlfile = HTMLFile;

        function HTMLFile(socket) { io.Transport.XHR.apply(this, arguments) }
        io.util.inherit(HTMLFile, io.Transport.XHR);
        HTMLFile.prototype.name = "htmlfile";
        HTMLFile.prototype.get = function() {
            this.doc = new(window[["Active"].concat("Object").join("X")])("htmlfile");
            this.doc.open();
            this.doc.write("<html></html>");
            this.doc.close();
            this.doc.parentWindow.s = this;
            var iframeC = this.doc.createElement("div");
            iframeC.className = "socketio";
            this.doc.body.appendChild(iframeC);
            this.iframe = this.doc.createElement("iframe");
            iframeC.appendChild(this.iframe);
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date));
            this.iframe.src = this.prepareUrl() + query;
            io.util.on(window, "unload", function() { self.destroy() })
        };
        HTMLFile.prototype.c1x = function(data, doc) {
            data = data.replace(/\\\//g, "/");
            this.onData(data);
            try {
                var script = doc.getElementsByTagName("script")[0];
                script.parentNode.removeChild(script)
            } catch (e) {}
        };
        HTMLFile.prototype.destroy = function() {
            if (this.iframe) {
                try { this.iframe.src = "about:blank" } catch (e) {}
                this.doc = null;
                this.iframe.parentNode.removeChild(this.iframe);
                this.iframe = null;
                CollectGarbage()
            }
        };
        HTMLFile.prototype.close = function() {
            this.destroy();
            return io.Transport.XHR.prototype.close.call(this)
        };
        HTMLFile.check = function(socket) {
            if (typeof window != "undefined" && ["Active"].concat("Object").join("X") in window) {
                try {
                    var a = new(window[["Active"].concat("Object").join("X")])("htmlfile");
                    return a && io.Transport.XHR.check(socket)
                } catch (e) {}
            }
            return false
        };
        HTMLFile.xdomainCheck = function() {
            return false
        };
        io.transports.push("htmlfile")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports);
    (function(exports, io, global) {
        exports["xhr-polling"] = XHRPolling;

        function XHRPolling() { io.Transport.XHR.apply(this, arguments) }
        io.util.inherit(XHRPolling, io.Transport.XHR);
        io.util.merge(XHRPolling, io.Transport.XHR);
        XHRPolling.prototype.name = "xhr-polling";
        XHRPolling.prototype.heartbeats = function() {
            return false
        };
        XHRPolling.prototype.open = function() {
            var self = this;
            io.Transport.XHR.prototype.open.call(self);
            return false
        };

        function empty() {}
        XHRPolling.prototype.get = function() {
            if (!this.isOpen) return;
            var self = this;

            function stateChange() {
                if (this.readyState == 4) {
                    this.onreadystatechange = empty;
                    if (this.status == 200) {
                        self.onData(this.responseText);
                        self.get()
                    } else { self.onClose() }
                }
            }

            function onload() {
                this.onload = empty;
                this.onerror = empty;
                self.retryCounter = 1;
                self.onData(this.responseText);
                self.get()
            }

            function onerror() {
                self.retryCounter++;
                if (!self.retryCounter || self.retryCounter > 3) { self.onClose() } else { self.get() }
            }
            this.xhr = this.request();
            if (global.XDomainRequest && this.xhr instanceof XDomainRequest) {
                this.xhr.onload = onload;
                this.xhr.onerror = onerror
            } else { this.xhr.onreadystatechange = stateChange }
            this.xhr.send(null)
        };
        XHRPolling.prototype.onClose = function() {
            io.Transport.XHR.prototype.onClose.call(this);
            if (this.xhr) {
                this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = empty;
                try { this.xhr.abort() } catch (e) {}
                this.xhr = null
            }
        };
        XHRPolling.prototype.ready = function(socket, fn) {
            var self = this;
            io.util.defer(function() { fn.call(self) })
        };
        io.transports.push("xhr-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    (function(exports, io, global) {
        var indicator = global.document && "MozAppearance" in global.document.documentElement.style;
        exports["jsonp-polling"] = JSONPPolling;

        function JSONPPolling(socket) {
            io.Transport["xhr-polling"].apply(this, arguments);
            this.index = io.j.length;
            var self = this;
            io.j.push(function(msg) { self.c1x(msg) })
        }
        io.util.inherit(JSONPPolling, io.Transport["xhr-polling"]);
        JSONPPolling.prototype.name = "jsonp-polling";
        JSONPPolling.prototype.post = function(data) {
            var self = this,
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (!this.form) {
                var form = document.createElement("form"),
                    area = document.createElement("textarea"),
                    id = this.iframeId = "socketio_iframe_" + this.index,
                    iframe;
                form.className = "socketio";
                form.style.position = "absolute";
                form.style.top = "0px";
                form.style.left = "0px";
                form.style.display = "none";
                form.target = id;
                form.method = "POST";
                form.setAttribute("accept-charset", "utf-8");
                area.name = "d";
                form.appendChild(area);
                document.body.appendChild(form);
                this.form = form;
                this.area = area
            }
            this.form.action = this.prepareUrl() + query;

            function complete() {
                initIframe();
                self.socket.setBuffer(false)
            }

            function initIframe() {
                if (self.iframe) { self.form.removeChild(self.iframe) }
                try { iframe = document.createElement('<iframe name="' + self.iframeId + '">') } catch (e) {
                    iframe = document.createElement("iframe");
                    iframe.name = self.iframeId
                }
                iframe.id = self.iframeId;
                self.form.appendChild(iframe);
                self.iframe = iframe
            }
            initIframe();
            this.area.value = io.JSON.stringify(data);
            try { this.form.submit() } catch (e) {}
            if (this.iframe.attachEvent) {
                iframe.onreadystatechange = function() {
                    if (self.iframe.readyState == "complete") { complete() }
                }
            } else { this.iframe.onload = complete }
            this.socket.setBuffer(true)
        };
        JSONPPolling.prototype.get = function() {
            var self = this,
                script = document.createElement("script"),
                query = io.util.query(this.socket.options.query, "t=" + +(new Date) + "&i=" + this.index);
            if (this.script) {
                this.script.parentNode.removeChild(this.script);
                this.script = null
            }
            script.async = true;
            script.src = this.prepareUrl() + query;
            script.onerror = function() { self.onClose() };
            var insertAt = document.getElementsByTagName("script")[0];
            insertAt.parentNode.insertBefore(script, insertAt);
            this.script = script;
            if (indicator) {
                setTimeout(function() {
                    var iframe = document.createElement("iframe");
                    document.body.appendChild(iframe);
                    document.body.removeChild(iframe)
                }, 100)
            }
        };
        JSONPPolling.prototype.c1x = function(msg) {
            this.onData(msg);
            if (this.isOpen) { this.get() }
            return this
        };
        JSONPPolling.prototype.ready = function(socket, fn) {
            var self = this;
            if (!indicator) return fn.call(this);
            io.util.load(function() { fn.call(self) })
        };
        JSONPPolling.check = function() {
            return "document" in global
        };
        JSONPPolling.xdomainCheck = function() {
            return true
        };
        io.transports.push("jsonp-polling")
    })("undefined" != typeof io ? io.Transport : module.exports, "undefined" != typeof io ? io : module.parent.exports, this);
    if (typeof define === "function" && define.amd) {
        define([], function() {
            return io
        })
    }
})();
(function() {
    var isArray = Array.isArray;
    if (isArray === undefined) {
        isArray = function(arr) {
            return Object.prototype.toString.call(arr) === "[object Array]"
        }
    }
    var root = this;

    function EventEmitter() {}
    if (typeof module !== "undefined" && module.exports) { module.exports.EventEmitter = EventEmitter } else {
        root = window;
        root.EventEmitter = EventEmitter
    }
    var defaultMaxListeners = 10;
    EventEmitter.prototype.setMaxListeners = function(n) {
        if (!this.dG3x) this.dG3x = {};
        this.bFD4H = n
    };
    EventEmitter.prototype.emit = function() {
        var type = arguments[0];
        if (type === "error") {
            if (!this.dG3x || !this.dG3x.error || isArray(this.dG3x.error) && !this.dG3x.error.length) {
                if (this.domain) {
                    var er = arguments[1];
                    er.domain_emitter = this;
                    er.domain = this.domain;
                    er.domain_thrown = false;
                    this.domain.emit("error", er);
                    return false
                }
                if (arguments[1] instanceof Error) {
                    throw arguments[1]
                } else {
                    throw new Error("Uncaught, unspecified 'error' event.")
                }
                return false
            }
        }
        if (!this.dG3x) return false;
        var handler = this.dG3x[type];
        if (!handler) return false;
        if (typeof handler == "function") {
            if (this.domain) { this.domain.enter() }
            switch (arguments.length) {
                case 1:
                    handler.call(this);
                    break;
                case 2:
                    handler.call(this, arguments[1]);
                    break;
                case 3:
                    handler.call(this, arguments[1], arguments[2]);
                    break;
                default:
                    var l = arguments.length;
                    var args = new Array(l - 1);
                    for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
                    handler.apply(this, args)
            }
            if (this.domain) { this.domain.exit() }
            return true
        } else if (isArray(handler)) {
            if (this.domain) { this.domain.enter() }
            var l = arguments.length;
            var args = new Array(l - 1);
            for (var i = 1; i < l; i++) args[i - 1] = arguments[i];
            var listeners = handler.slice();
            for (var i = 0, l = listeners.length; i < l; i++) { listeners[i].apply(this, args) }
            if (this.domain) { this.domain.exit() }
            return true
        } else {
            return false
        }
    };
    EventEmitter.prototype.addListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("addListener only takes instances of Function")
        }
        if (!this.dG3x) this.dG3x = {};
        this.emit("newListener", type, typeof listener.listener === "function" ? listener.listener : listener);
        if (!this.dG3x[type]) { this.dG3x[type] = listener } else if (isArray(this.dG3x[type])) { this.dG3x[type].push(listener) } else { this.dG3x[type] = [this.dG3x[type], listener] }
        if (isArray(this.dG3x[type]) && !this.dG3x[type].warned) {
            var m;
            if (this.bFD4H !== undefined) { m = this.bFD4H } else { m = defaultMaxListeners }
            if (m && m > 0 && this.dG3x[type].length > m) {
                this.dG3x[type].warned = true;
                console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this.dG3x[type].length);
                console.trace()
            }
        }
        return this
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.once = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error(".once only takes instances of Function")
        }
        var self = this;

        function g() {
            self.removeListener(type, g);
            listener.apply(this, arguments)
        }
        g.listener = listener;
        self.on(type, g);
        return this
    };
    EventEmitter.prototype.removeListener = function(type, listener) {
        if ("function" !== typeof listener) {
            throw new Error("removeListener only takes instances of Function")
        }
        if (!this.dG3x || !this.dG3x[type]) return this;
        var list = this.dG3x[type];
        if (isArray(list)) {
            var position = -1;
            for (var i = 0, length = list.length; i < length; i++) {
                if (list[i] === listener || list[i].listener && list[i].listener === listener) {
                    position = i;
                    break
                }
            }
            if (position < 0) return this;
            list.splice(position, 1)
        } else if (list === listener || list.listener && list.listener === listener) { delete this.dG3x[type] }
        return this
    };
    EventEmitter.prototype.removeAllListeners = function(type) {
        if (arguments.length === 0) {
            this.dG3x = {};
            return this
        }
        var events = this.dG3x && this.dG3x[type];
        if (!events) return this;
        if (isArray(events)) { events.splice(0) } else { this.dG3x[type] = null }
        return this
    };
    EventEmitter.prototype.listeners = function(type) {
        if (!this.dG3x) this.dG3x = {};
        if (!this.dG3x[type]) this.dG3x[type] = [];
        if (!isArray(this.dG3x[type])) { this.dG3x[type] = [this.dG3x[type]] }
        return this.dG3x[type]
    }
})();
(function() {
    if (typeof Object.create !== "function") {
        Object.create = function(o) {
            function F() {}
            F.prototype = o;
            return new F
        }
    }
    var root = window;
    var pomelo = Object.create(EventEmitter.prototype);
    root.pomelo = pomelo;
    var socket = null;
    var id = 1;
    var callbacks = {};
    var route = "web-connector.messageHandler.";
    var isRegister = false;
    var success = 200;
    var register_ack = "register";
    var bind_ack = "bind";
    var regBind_ack = "registerAndBind";
    var cancelBind_ack = "cancelBind";
    var message_store = {};
    var heartbeat_interval = 1e3 * 60;
    var heartbeat_timer;
    var current_user;
    var current_domain;
    var cacheMessageIds = [];
    var cacheSize = 100;
    pomelo.init = function(host, port, reconnect, cb) {
        var url = "ws://" + host;
        if (port) { url += ":" + port }
        var params;
        if (reconnect) { params = { "force new connection": true, reconnect: true, "max reconnection attempts": 50 } } else { params = { "force new connection": true, reconnect: false } }
        socket = io.connect(url, params);
        socket.on("connect", function() {
            console.log("[pomeloclient.init] websocket connected!");
            cb()
        });
        socket.on("reconnect", function() { pomelo.emit("reconnect") });
        socket.on("message", function(data) {
            message_store = {};
            if (typeof data === "string") { data = JSON.parse(data) }
            if (data instanceof Array) { processMessageBatch(data) } else {
                processMessage(data);
                emitMessage()
            }
        });
        socket.on("error", function(err) { cb(err) });
        socket.on("disconnect", function(reason) {
            isRegister = false;
            pomelo.emit("disconnect", reason)
        })
    };
    var request = function(method, opts, cb) {
        if (!method) {
            console.error("request message error with no method.");
            return
        }
        id++;
        callbacks[id] = cb;
        sendMsg(method, id, opts)
    };
    var notify = function(method, msg) {
        if (!method) {
            console.error("notify message error with no method.");
            return
        }
        sendMsg(method, 0, msg)
    };
    var sendMsg = function(method, msgId, msg) {
        var path = route + method;
        var rs = { id: msgId, route: path, msg: msg };
        var sg = JSON.stringify(rs);
        socket.send(sg)
    };
    var processMessageBatch = function(msgs) {
        for (var i = 0, l = msgs.length; i < l; i++) { processMessage(msgs[i]) }
        emitMessage()
    };
    var emitMessage = function() {
        for (var key in message_store) { pomelo.emit(key, message_store[key]) }
    };
    var processMessage = function(msg) {
        if (msg.id) {
            var cb = callbacks[msg.id];
            delete callbacks[msg.id];
            if (typeof cb !== "function") {
                console.log("[pomeloclient.processMessage] cb is not a function for request " + msg.id);
                return
            }
            cb(msg.body);
            if (msg.body.type === register_ack && msg.body.code == success) { isRegister = true }
            if ((msg.body.type === bind_ack || msg.body.type === regBind_ack) && msg.body.code == success) { heartbeat_timer = setInterval(function() { notify("heartbeat", { flag: "online", domain: current_domain, user: current_user }) }, heartbeat_interval) }
            if (msg.body.type === cancelBind_ack && msg.body.code == success) { clearInterval(heartbeat_timer) }
            return
        } else {
            if (!filterMessage(msg)) {
                return
            }
            if (!message_store[msg.route]) {
                if (msg.body instanceof Array) { message_store[msg.route] = msg.body } else { message_store[msg.route] = [msg.body] }
            } else {
                var arr = message_store[msg.route];
                if (msg.body instanceof Array) {
                    var messages = msg.body;
                    for (var i = 0; i < messages.length; i++) { arr.push(messages[i]) }
                } else { arr.push(msg.body) }
                message_store[msg.route] = arr
            }
        }
    };
    var filterMessage = function(message) {
        var msgs = message.body;
        var ids = [];
        var results = {};
        if (msgs instanceof Array) {
            for (var i = 0; i < msgs.length; i++) {
                var id = msgs[i].msgId;
                ids.push(id)
            }
            var duplicatedIds = checkMessage(ids);
            if (duplicatedIds.length !== 0) {
                return false
            } else {
                cacheMessageIds = cacheMessageIds.concat(ids);
                if (cacheMessageIds.length > cacheSize) {
                    var length = cacheMessageIds - cacheSize;
                    for (var i = 0; i < length; i++) { cacheMessageIds.shift() }
                }
            }
        }
        return true
    };
    var checkMessage = function(ids) {
        var array = [];
        for (var i = 0; i < cacheMessageIds.length; i++) {
            var id = cacheMessageIds[i];
            for (var j = 0; j < ids.length; j++) {
                if (ids[j] === id) { array.push(id) }
            }
        }
        return array
    };
    pomelo.register = function(opts, cb) { request("register", opts, cb) };
    pomelo.bind = function(opts, cb) {
        if (isRegister) {
            current_domain = opts.domain;
            current_user = opts.user;
            request("bind", opts, cb)
        } else { console.log("cannot bind without registration.") }
    };
    pomelo.registerAndBind = function(opts, cb) {
        current_domain = opts.domain;
        current_user = opts.user;
        request("registerAndBind", opts, cb)
    };
    pomelo.cancelBind = function(opts, cb) {
        current_domain = null;
        current_user = null;
        request("cancelBind", opts, cb)
    };
    pomelo.getOnlineUser = function(opts, cb) { request("getOnlineUser", opts, cb) };
    pomelo.disconnect = function() {
        if (socket) {
            socket.disconnect();
            socket = null
        }
    };
    pomelo.ackMessage = function(domain, msgs) {
        var msgIds = "";
        var types = "";
        var message = {};
        var user;
        for (var i = 0; i < msgs.length; i++) {
            var data = msgs[i];
            if (!user) { user = data.user }
            msgIds += data.msgId;
            types += data.type;
            if (i !== msgs.length - 1) {
                msgIds += ";";
                types += ";"
            }
        }
        var message = { user: user, msgIds: msgIds, types: types, domain: domain };
        notify("ack", message)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        l1x = c1x("nm.x"),
        di2x = c1x("nm.u"),
        p1x = c1x("nm.d"),
        Ku3x = c1x("pomelo"),
        dn3x = 0,
        b1x, K1x;
    p1x.eP3x({
        "polling-init": {
            url: "/api/push/init",
            format: function(Q1x) {
                dn3x = 2;
                var rU8M = { domain: "music.163.com", host: MUSIC_CONFIG.pushHost, port: MUSIC_CONFIG.pushPort, key: MUSIC_CONFIG.pushKey, secret: "bec0b878892740c498505a85eb3dcec9" },
                    j1x = Q1x.account || Y1x,
                    cT2x = GUser.userId;
                Ku3x.init(rU8M.host, rU8M.port, true, this.bXU7N.g1x(this, { user: cT2x, nonce: j1x.nonce, domain: rU8M.domain, productKey: rU8M.key, signature: j1x.signature, expire_time: j1x.expireTime }))
            },
            onerror: function() {
                return this.baY7R()
            }
        }
    });
    p1x.zT0x = NEJ.C();
    b1x = p1x.zT0x.O1x(p1x.gU3x);
    b1x.cm2x = function() {
        var pr7k = !1;
        return function(e1x) {
            if (!pr7k) { pr7k = !0 }
            this.cs2x(e1x);
            Ku3x.on("specify", this.qV7O.g1x(this));
            Ku3x.on("broadcast", this.qV7O.g1x(this))
        }
    }();
    b1x.qV7O = function(d1x) { k1x.be1x(d1x, function(bF2x) { h1x.z1x(p1x.zT0x, "message", bF2x) }, this) };
    b1x.baY7R = function() {
        var bA2x = 500;
        return function() {
            dn3x = 0;
            Ku3x.disconnect();
            if (bA2x > 6e4) bA2x = 500;
            bA2x *= 2
        }
    }();
    b1x.bXU7N = function(e1x, bQ2x) {
        if (!!bQ2x) {
            return this.baY7R()
        }
        dn3x = 3;
        Ku3x.registerAndBind(e1x, function(m1x) {
            if (m1x.code != 200) {
                return this.baY7R()
            }
            dn3x = 4
        }.g1x(this))
    };
    b1x.cuN2x = function() { di2x.bXQ7J.fU3x().cuO2x() };
    b1x.cuP2x = function() { di2x.bXQ7J.fU3x().cuQ2x() };
    b1x.bbk7d = function() {
        var pr7k = !1;
        return function() {
            if (pr7k) return;
            pr7k = !0;
            this.cl2x("polling-init", {})
        }
    }();
    H1x.fs3x.B1x({ event: "message", element: p1x.zT0x })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        cK2x = c1x("nej.p"),
        k1x = c1x("nej.u"),
        n1x = c1x("nm.l"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        dj2x = c1x("api"),
        b1x, K1x;
    var gd3x = a0x.hO4S('<div class="lyct f-cb"><div class="m-fdback"><div class="tip">任何产品中的问题，欢迎反馈给我们</div><div class="u-txtwrap f-pr"><textarea class="u-txt area" placeholder="请输入反馈内容"></textarea><span class="zs s-fc2">140</span></div><div class="u-txtwrap f-pr holder-parent"><textarea class="u-txt contact" placeholder="请留下联系方式（电话、QQ、邮箱）" maxLength="100"></textarea></div><div style="display:none" class="u-err"><i class="u-icn u-icn-25"></i>内容不能为空！</div></div><div class="lybtn f-tc"><a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w4" hidefocus="true"><i>发送意见</i></a><a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w4" hidefocus="true"><i>取 消</i></a></div></div>');
    n1x.bbm7f = NEJ.C();
    b1x = n1x.bbm7f.O1x(n1x.dV3x);
    K1x = n1x.bbm7f.cg2x;
    b1x.bk1x = function(e1x) {
        e1x.title = "意见反馈";
        this.bl1x(e1x)
    };
    b1x.bZ2x = function() { this.ca2x = gd3x };
    b1x.bR2x = function() {
        this.cb2x();
        this.gH3x = {};
        var Gv1x = a0x.I1x;
        var Bq0x = h1x.q1x;
        this.gH3x.submit_btn = Gv1x(this.o1x, "u-btn2")[0];
        this.gH3x.cancle_btn = Gv1x(this.o1x, "u-btn2")[1];
        this.gH3x.prompt_msg = Gv1x(this.o1x, "u-err")[0];
        this.gH3x.zs = Gv1x(this.o1x, "zs")[0];
        a0x.X1x(this.gH3x.zs, "display", "none");
        this.gH3x.fb_txt = Gv1x(this.o1x, "u-txt")[0];
        this.gH3x.contact = Gv1x(this.o1x, "u-txt")[1];
        a0x.fC3x(this.gH3x.fb_txt, "holder");
        a0x.fC3x(this.gH3x.contact, "holder");
        if (a0x.bz2x(this.gH3x.fb_txt.parentNode, "holder-parent")) { a0x.X1x(this.gH3x.fb_txt.parentNode, "display", "block") }
        if (a0x.bz2x(this.gH3x.contact.parentNode, "holder-parent")) { a0x.X1x(this.gH3x.contact.parentNode, "display", "block") }
        Bq0x(this.gH3x.submit_btn, "click", this.bXN7G.g1x(this));
        Bq0x(this.gH3x.cancle_btn, "click", this.bXM7F.g1x(this));
        Bq0x(this.gH3x.prompt_msg, "msgShow", this.bXL7E.g1x(this));
        Bq0x(this.gH3x.fb_txt, "keyup", this.tt8l.g1x(this));
        Bq0x(this.gH3x.fb_txt, "input", this.fi3x.g1x(this));
        Bq0x(this.gH3x.contact, "keyup", this.bXK7D.g1x(this));
        Bq0x(this.gH3x.contact, "input", this.bFA4E.g1x(this));
        this.kI5N = p1x.hI4M.B1x()
    };
    b1x.bXN7G = function(d1x) {
        h1x.bh1x(d1x);
        if (this.cu2x()) return;
        var bi1x = this.gH3x.fb_txt.value.trim();
        var bq2x = bi1x.length;
        var e1x = { type: "json", method: "post", noEnc: true };
        var bFz4D = this.gH3x.contact.value.trim();
        var Wi6c = { ua: navigator.userAgent, hash: top.location.hash, href: location.href, flash: l1x.bbR8J(), contact: bFz4D };
        var j1x = { content: bi1x, client: "web", xInfo: JSON.stringify(Wi6c) },
            mU6O = this.kI5N.ciB9s();
        if (mU6O && mU6O.length) { j1x.log = mU6O.join("\n") }
        if (bq2x == 0) {
            this.gH3x.prompt_msg.innerHTML = "反馈内容不能为空";
            a0x.X1x(this.gH3x.prompt_msg, "display", "block");
            return
        }
        if (bFz4D.length > 100) {
            this.gH3x.prompt_msg.innerHTML = "联系方式最多只能输入100个字符";
            a0x.X1x(this.gH3x.prompt_msg, "display", "block");
            return
        }
        this.cu2x(true);
        e1x.data = k1x.de2x(j1x);
        e1x.onload = this.bXH7A.g1x(this);
        e1x.onerror = this.hS4W.g1x(this);
        v1x.br2x("/api/feedback/web", e1x)
    };
    b1x.fi3x = function(d1x) {
        var bq2x = this.gH3x.fb_txt.value.trim().length;
        if (bq2x > 0) a0x.X1x(this.gH3x.prompt_msg, "display", "none");
        cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "7.0" ? setTimeout(this.fE3x.g1x(this), 0) : this.fE3x()
    };
    b1x.tt8l = function(d1x) {
        if (d1x.keyCode === 8) this.fE3x()
    };
    b1x.fE3x = function() {
        var bq2x = this.gH3x.fb_txt.value.trim().length;
        this.gH3x.zs.innerHTML = !bq2x ? "0/140" : bq2x + "/140"
    };
    b1x.bFA4E = function(d1x) {
        var bq2x = this.gH3x.contact.value.trim().length;
        if (bq2x > 0) a0x.X1x(this.gH3x.prompt_msg, "display", "none")
    };
    b1x.bXK7D = function(d1x) {
        if (d1x.keyCode === 8) this.bFA4E()
    };
    b1x.bXM7F = function(d1x) {
        h1x.cd2x(d1x);
        this.bp2x()
    };
    b1x.bXL7E = function(d1x) {
        var f1x = h1x.U1x(d1x);
        f1x.innerHTML = "请输入反馈内容"
    };
    b1x.cuR2x = function(cuS2x) {
        var f1x = h1x.U1x(d1x);
        f1x.innerHTML = ""
    };
    b1x.bXH7A = function(m1x) {
        this.cu2x(false);
        this.bp2x();
        n1x.Z1x.M1x({ tip: "意见发送成功", autoclose: true })
    };
    b1x.hS4W = function(m1x) {
        this.cu2x(false);
        n1x.Z1x.M1x({ tip: "意见发送失败", autoclose: true })
    };
    b1x.cu2x = function(cD2x) {
        return this.dK3x(this.gH3x.submit_btn, cD2x, "发送意见", "发送中...")
    };
    b1x.M1x = function() {
        K1x.M1x.call(this);
        this.cu2x(false);
        this.gH3x.fb_txt.value = "";
        this.gH3x.contact.value = "";
        a0x.X1x(this.gH3x.prompt_msg, "display", "none");
        this.fE3x()
    };
    l1x.bXC7v = function(e1x) {
        e1x = e1x || {};
        if (e1x.title === undefined) e1x.title = "意见反馈";
        n1x.bbm7f.M1x(e1x)
    };
    dj2x.feedback = l1x.feedback = l1x.bXC7v
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        N1x = c1x("nej.ui"),
        b1x;
    if (!!N1x.wL9C) return;
    N1x.wL9C = NEJ.C();
    b1x = N1x.wL9C.O1x(N1x.er3x);
    b1x.cm2x = function() {
        this.gx3x = this.bFw4A();
        this.cs2x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.co2x = e1x.index;
        this.fQ3x = e1x.total;
        this.gC3x = e1x.range;
        this.gn3x(e1x.data)
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.bb1x;
        delete this.co2x;
        delete this.fQ3x;
        delete this.gC3x
    };
    b1x.hi4m = bm1x;
    b1x.bFw4A = function() {
        var fT3x = +(new Date);
        return function() {
            return "itm-" + ++fT3x
        }
    }();
    b1x.CN1x = function() {
        return this.gx3x
    };
    b1x.hk4o = function() {
        return this.bb1x
    };
    b1x.gn3x = function(j1x) {
        this.bb1x = j1x || {};
        this.hi4m(this.bb1x)
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        N1x = c1x("nej.ui"),
        b1x, K1x;
    if (!!N1x.rA8s) return;
    N1x.rA8s = NEJ.C();
    b1x = N1x.rA8s.O1x(N1x.wL9C);
    K1x = N1x.rA8s.cg2x;
    b1x.bk1x = function(e1x) {
        this.bXz7s = e1x.pkey || "id";
        this.bl1x(e1x)
    };
    b1x.BM0x = function(j1x) { this.z1x("ondelete", { ext: j1x, id: this.CN1x(), data: this.hk4o(), body: this.jZ5e() }) };
    b1x.Kg3x = function(j1x) { this.z1x("onupdate", { ext: j1x, id: this.CN1x(), data: this.hk4o(), body: this.jZ5e() }) };
    b1x.gn3x = function(j1x) {
        K1x.gn3x.apply(this, arguments);
        this.gx3x = this.bb1x[this.bXz7s] || this.bFw4A()
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ui"),
        b1x, hQ4U, bcn8f;
    if (!!N1x.bco8g) return;
    N1x.bco8g = NEJ.C();
    b1x = N1x.bco8g.O1x(N1x.er3x);
    b1x.bk1x = function(e1x) {
        this.Wo6i = NEJ.X({}, e1x);
        this.fw3x = NEJ.X({}, e1x);
        delete this.Wo6i.onchange;
        this.fw3x.onchange = this.gp3x.g1x(this);
        this.bl1x(e1x);
        this.bXy7r({ number: e1x.number, label: e1x.label || Y1x })
    };
    b1x.bC2x = function() {
        this.bH2x();
        if (!!this.kc5h) {
            this.kc5h.S1x();
            delete this.kc5h
        }
        delete this.Wo6i;
        delete this.fw3x;
        this.bXw7p();
        this.o1x.innerHTML = "&nbsp;"
    };
    b1x.bZ2x = function() { this.kM5R = hQ4U };
    b1x.bXy7r = function(j1x) {
        a0x.dT3x(this.o1x, bcn8f, j1x);
        var fT3x = a0x.Hc2x();
        this.fw3x.list = a0x.I1x(this.o1x, "js-i-" + fT3x);
        this.fw3x.pbtn = (a0x.I1x(this.o1x, "js-p-" + fT3x) || eX3x)[0];
        this.fw3x.nbtn = (a0x.I1x(this.o1x, "js-n-" + fT3x) || eX3x)[0]
    };
    b1x.bR2x = function() { this.cb2x() };
    b1x.cuT2x = function(j1x) {
        return a0x.bP2x(bcn8f, j1x)
    };
    b1x.gp3x = function(d1x) {
        if (this.Kb3x) return;
        var s1x = d1x.index,
            cp2x = d1x.total;
        this.Kb3x = !0;
        this.Ka3x(s1x, cp2x);
        k1x.be1x(this.Wt6n, function(rL8D) { rL8D.Ka3x(s1x, cp2x) });
        this.Kb3x = !1;
        this.z1x("onchange", d1x)
    };
    b1x.g1x = function(bB2x) {
        bB2x = a0x.y1x(bB2x);
        if (!bB2x) return this;
        var cn2x = NEJ.X({}, this.Wo6i);
        cn2x.parent = bB2x;
        cn2x.index = this.rK8C();
        cn2x.total = this.jt5y();
        var rL8D = this.constructor.B1x(cn2x);
        rL8D.vd8V("onchange", this.fw3x.onchange);
        if (!this.Wt6n) this.Wt6n = [];
        this.Wt6n.push(rL8D);
        return this
    };
    b1x.bXw7p = function() {
        var bps1x = function(rL8D, s1x, i1x) {
            rL8D.S1x();
            i1x.splice(s1x, 1)
        };
        return function() { k1x.mk6e(this.Wt6n, bps1x) }
    }();
    b1x.jB5G = function(s1x) {
        if (!this.kc5h) return;
        this.kc5h.jB5G(s1x)
    };
    b1x.rK8C = function() {
        if (!this.kc5h) return 1;
        return this.kc5h.rK8C()
    };
    b1x.jt5y = function() {
        if (!this.kc5h) return 1;
        return this.kc5h.jt5y()
    };
    b1x.Ka3x = function(s1x, cp2x) {
        if (!this.kc5h) return;
        this.kc5h.Ka3x(s1x, cp2x)
    };
    b1x.bcI8A = function(cp2x) {
        if (!this.kc5h) return;
        this.kc5h.bcI8A(cp2x)
    };
    hQ4U = a0x.rD8v(".#<uispace>{font-size:12px;line-height:160%;}.#<uispace> a{margin:0 2px;padding:2px 8px;color:#333;border:1px solid #aaa;text-decoration:none;}.#<uispace> .js-disabled{cursor:default;}.#<uispace> .js-selected{cursor:default;background:#bbb;}");
    bcn8f = a0x.en3x('{trim}{if !defined("noprv")||!noprv}<a href="#" class="zbtn zprv ${\'js-p-\'|seed}">${label.prev||"上一页"}</a>{/if}{list 1..number as x}<a href="#" class="zpgi zpg${x} ${\'js-i-\'|seed}"></a>{/list}{if !defined("nonxt")||!nonxt}<a href="#" class="zbtn znxt ${\'js-n-\'|seed}">${label.next||"下一页"}</a>{/if}{/trim}')
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.WA6u) return;
    N1x.WA6u = NEJ.C();
    b1x = N1x.WA6u.O1x(N1x.cz2x);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.WB6v = e1x.pbtn;
        this.cf2x = e1x.nbtn;
        this.WD6x = e1x.sbtn;
        this.WF6z = e1x.ebtn;
        this.hW4a = e1x.event || "click";
        this.jK5P = e1x.selected || "js-selected";
        this.mH6B = e1x.disabled || "js-disabled";
        this.bXt7m(e1x.list);
        this.Ka3x(e1x.index || 1, e1x.total || 1)
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.bU2x;
        delete this.hW4a;
        delete this.WB6v;
        delete this.cf2x;
        delete this.WD6x;
        delete this.WF6z;
        delete this.bFs4w;
        delete this.fQ3x;
        delete this.co2x;
        delete this.jK5P;
        delete this.mH6B
    };
    b1x.bXt7m = function() {
        var bcU8M = function(f1x) {
            this.bU2x.push(f1x);
            this.bT2x([
                [f1x, this.hW4a, this.cI2x.ed3x(this, 0)]
            ])
        };
        return function(i1x) {
            this.bU2x = [];
            this.bT2x([
                [this.WB6v, "click", this.cI2x.ed3x(this, -1)],
                [this.cf2x, "click", this.cI2x.ed3x(this, 1)],
                [this.WD6x, "click", this.cI2x.ed3x(this, -2)],
                [this.WF6z, "click", this.cI2x.ed3x(this, 2)]
            ]);
            k1x.be1x(i1x, bcU8M, this)
        }
    }();
    b1x.Cj0x = function(f1x, s1x) {
        if (s1x == null) {
            f1x.innerText = "";
            a0x.X1x(f1x, "display", "none");
            a0x.w1x(f1x, this.jK5P)
        } else {
            f1x.innerText = s1x;
            a0x.X1x(f1x, "display", "");
            s1x == this.co2x ? a0x.x1x(f1x, this.jK5P) : a0x.w1x(f1x, this.jK5P)
        }
    };
    b1x.bcZ8R = function() {
        if (this.co2x <= 1) {
            a0x.x1x(this.WB6v, this.mH6B);
            a0x.x1x(this.WD6x, this.mH6B)
        } else {
            a0x.w1x(this.WB6v, this.mH6B);
            a0x.w1x(this.WD6x, this.mH6B)
        }
        if (this.co2x >= this.fQ3x) {
            a0x.x1x(this.cf2x, this.mH6B);
            a0x.x1x(this.WF6z, this.mH6B)
        } else {
            a0x.w1x(this.cf2x, this.mH6B);
            a0x.w1x(this.WF6z, this.mH6B)
        }
    };
    b1x.WG6A = bm1x;
    b1x.bde8W = function() {
        this.WG6A();
        this.bcZ8R();
        this.z1x("onchange", { last: this.bFs4w, total: this.fQ3x, index: this.co2x, ext: this.bdh8Z })
    };
    b1x.bFr4v = function(s1x) {
        s1x = parseInt(s1x);
        if (isNaN(s1x) || this.fQ3x == null) return !1;
        s1x = Math.max(1, Math.min(s1x, this.fQ3x));
        this.bFs4w = this.co2x;
        this.co2x = s1x;
        return !0
    };
    b1x.bdl8d = function(cp2x) {
        cp2x = parseInt(cp2x);
        if (isNaN(cp2x) || cp2x < 1) return !1;
        this.fQ3x = cp2x;
        return !0
    };
    b1x.cI2x = function(d1x, ex3x) {
        h1x.cd2x(d1x);
        var E1x = h1x.U1x(d1x);
        if (!E1x || a0x.bz2x(E1x, this.jK5P) || a0x.bz2x(E1x, this.mH6B)) return;
        var s1x = E1x.innerText;
        switch (ex3x) {
            case 1:
            case -1:
                s1x = this.co2x + ex3x;
                break;
            case 2:
                s1x = this.fQ3x;
                break;
            case -2:
                s1x = 1;
                break
        }
        this.jB5G(s1x)
    };
    b1x.rK8C = function() {
        return this.co2x
    };
    b1x.jB5G = function(s1x) {
        var bXq7j = this.co2x;
        this.bFr4v(s1x);
        if (bXq7j != this.co2x) this.bde8W();
        return this
    };
    b1x.jt5y = function() {
        return this.fQ3x
    };
    b1x.Rh5m = function(cp2x) {
        if (this.bdl8d(cp2x) && this.co2x != null) {
            this.co2x = 1;
            this.bde8W()
        }
        return this
    };
    b1x.bcI8A = function(cp2x) {
        if (this.bdl8d(cp2x)) {
            this.WG6A();
            this.bcZ8R()
        }
        return this
    };
    b1x.Ka3x = function(s1x, cp2x) {
        if (!this.bdl8d(cp2x) || !this.bFr4v(s1x)) return this;
        this.bde8W();
        return this
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        cN2x = c1x("nej.x"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.JI3x) return;
    N1x.JI3x = NEJ.C();
    b1x = N1x.JI3x.O1x(N1x.WA6u);
    b1x.cm2x = function() {
        this.cs2x();
        var f1x = a0x.cU2x("span", "zdot");
        f1x.innerText = "...";
        this.WI6C = [f1x.cloneNode(true), f1x]
    };
    b1x.bC2x = function() {
        this.bH2x();
        this.bFq4u()
    };
    b1x.bFq4u = function() {
        a0x.mm6g(this.WI6C[0]);
        a0x.mm6g(this.WI6C[1])
    };
    b1x.WG6A = function() {
        this.bdh8Z = { last: !1, first: !1, list: this.bU2x };
        this.bFq4u();
        this.Cj0x(this.bU2x[0], 1);
        var bE2x = 1,
            bq2x = this.bU2x.length;
        if (this.fQ3x < bq2x) {
            for (var pq7j; bE2x < bq2x; bE2x++) {
                pq7j = bE2x + 1;
                this.Cj0x(this.bU2x[bE2x], pq7j > this.fQ3x ? null : pq7j)
            }
            return
        }
        if (this.co2x > 1) {
            var cv2x = Math.floor((bq2x - 2) / 2),
                bXo7h = this.fQ3x - bq2x + 2,
                in4r = Math.max(2, this.co2x - cv2x);
            if (this.fQ3x >= bq2x) { in4r = Math.min(in4r, bXo7h) }
            if (in4r > 2) {
                this.bU2x[0].insertAdjacentElement("afterEnd", this.WI6C[0]);
                this.bdh8Z.first = !0
            }
            for (var s1x;; bE2x++) {
                s1x = in4r + bE2x - 1;
                if (s1x > this.co2x) break;
                this.Cj0x(this.bU2x[bE2x], s1x)
            }
        }
        if (this.co2x < this.fQ3x) {
            var s1x, in4r = this.co2x + 1;
            for (var i = 0, l = bq2x - 2;; i++, bE2x++) {
                s1x = in4r + i;
                if (bE2x > l || s1x > this.fQ3x) break;
                this.Cj0x(this.bU2x[bE2x], s1x)
            }
            if (s1x < this.fQ3x) {
                this.bU2x[bE2x].insertAdjacentElement("beforeBegin", this.WI6C[1]);
                this.bdh8Z.last = !0
            }
            if (s1x <= this.fQ3x) { this.Cj0x(this.bU2x[bE2x++], this.fQ3x) }
        }
        for (; bE2x < bq2x; bE2x++) { this.Cj0x(this.bU2x[bE2x]) }
    };
    a0x.bXk7d = cN2x.bXk7d = function(bB2x, e1x) {
        var C1x = a0x.kB5G(bB2x);
        if (!C1x) return null;
        if (!N1x.Wu6o(C1x, N1x.JI3x)) {
            e1x = e1x || {};
            var i1x = !e1x.clazz ? a0x.cQ2x(C1x) : a0x.I1x(C1x, e1x.clazz);
            e1x.pbtn = i1x.shift();
            e1x.nbtn = i1x.pop();
            e1x.list = i1x;
            delete e1x.clazz
        }
        return N1x.Wu6o(C1x, N1x.JI3x, e1x || Y1x)
    };
    cN2x.isChange = !0
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        N1x = c1x("nej.ui"),
        b1x, K1x, gd3x;
    if (!!N1x.JE3x) return;
    N1x.JE3x = NEJ.C();
    b1x = N1x.JE3x.O1x(N1x.bco8g);
    K1x = N1x.JE3x.cg2x;
    b1x.bk1x = function(e1x) {
        e1x.number = parseInt(e1x.number) || 9;
        this.bl1x(e1x);
        this.kc5h = H1x.JI3x.B1x(this.fw3x)
    };
    b1x.gp3x = function(d1x) {
        if (!!this.Wo6i.noend) {
            var bFn4r = d1x.ext || Y1x,
                i1x = bFn4r.list || eX3x;
            if (bFn4r.last) { a0x.X1x(i1x[i1x.length - 1], "display", "none") }
        }
        K1x.gp3x.apply(this, arguments)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        bd1x = c1x("nej.ui"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.WQ6K) return;
    N1x.WQ6K = NEJ.C();
    b1x = N1x.WQ6K.O1x(N1x.cz2x);
    b1x.bk1x = function(e1x) {
        this.iu5z = {};
        this.bl1x(e1x);
        this.ic4g = a0x.y1x(e1x.parent);
        this.eJ3x = { parent: this.ic4g };
        this.qC7v = parseInt(e1x.limit) || 10;
        this.vR9I = parseInt(e1x.first) || this.qC7v;
        this.bXi7b(e1x.item);
        this.bXh7a(e1x.cache || Y1x);
        this.bXf7Y(e1x.pager || Y1x);
        this.gn3x()
    };
    b1x.bC2x = function() {
        this.z1x("onbeforerecycle");
        this.JB3x();
        this.bH2x();
        if (this.iu5z.clear) { this.P1x.tD8v(this.iu5z.key) }
        this.P1x.S1x();
        if (!!this.il4p) {
            this.il4p.S1x();
            delete this.il4p
        }
        delete this.bFm4q;
        delete this.fw3x;
        delete this.WT6N;
        delete this.P1x;
        delete this.ic4g;
        delete this.Jx3x;
        delete this.eJ3x;
        delete this.iu5z
    };
    b1x.bFl4p = function() {
        var cM2x = /\{(.*?)\}/gi,
            bXa7T = function(pO7H, j1x) {
                return (pO7H || "{id}{seed}").replace(cM2x, function($1, $2) {
                    var A1x = j1x[$2];
                    return A1x == null ? $1 : A1x
                })
            };
        return function(C1x) {
            var J1x = bXa7T(this.eJ3x.jstIdTempalte, { id: C1x, seed: a0x.Hc2x() });
            if (!this.eJ3x.jstIdType) {
                return a0x.y1x(J1x)
            } else if (this.eJ3x.jstIdType == 1) {
                return (a0x.I1x(this.ic4g, J1x) || [])[0]
            }
        }
    }();
    b1x.yX0x = function(bE2x, bj1x, fX3x, bq2x) {
        var m1x = { index: 1, total: 1 };
        if (bj1x >= bE2x) { m1x.index = Math.floor((bj1x - bE2x) / fX3x) + 2 }
        if (bq2x > bE2x) { m1x.total = Math.ceil((bq2x - bE2x) / fX3x) + 1 }
        return m1x
    };
    b1x.bFk4o = function(J1x) {
        delete this.Jx3x;
        this.Gl1x = J1x;
        this.bT2x([
            [this.ic4g, "click", this.bWU7N.g1x(this)]
        ])
    };
    b1x.bXi7b = function(r1x) {
        if (k1x.ff3x(r1x)) {
            this.bFk4o(r1x);
            return
        }
        NEJ.X(this.eJ3x, r1x);
        var dC3x = this.eJ3x.klass;
        delete this.eJ3x.klass;
        if (k1x.ff3x(dC3x)) {
            this.bFk4o(dC3x);
            return
        }
        delete this.Gl1x;
        this.Jx3x = dC3x;
        this.eJ3x.ondelete = this.z1x.g1x(this, "ondelete");
        this.eJ3x.onupdate = this.z1x.g1x(this, "onupdate")
    };
    b1x.bXh7a = function(R1x) {
        var dC3x = R1x.klass,
            jq5v = NEJ.X({}, R1x);
        this.iu5z.key = jq5v.lkey;
        this.iu5z.data = jq5v.data || {};
        this.iu5z.clear = !!jq5v.clear;
        this.eJ3x.pkey = jq5v.key || "id";
        jq5v.onlistload = this.bem8e.g1x(this);
        jq5v.onpullrefresh = this.bWT7M.g1x(this);
        if (!!dC3x && "onlistchange" in dC3x) {
            this.bT2x([
                [dC3x, "listchange", this.beo8g.g1x(this)]
            ])
        } else {
            jq5v.onitemadd = this.WV6P.g1x(this);
            jq5v.onitemdelete = this.WZ6T.g1x(this);
            jq5v.onitemupdate = this.bFd3x.g1x(this)
        }
        this.P1x = (dC3x || N1x.QO5T).B1x(jq5v);
        if (R1x.total != null) { this.P1x.Rh5m(this.iu5z.key, R1x.total) }
        if (!!R1x.list) { this.P1x.rc7V(this.iu5z.key, R1x.list) }
    };
    b1x.bXf7Y = function(rL8D) {
        this.bFm4q = rL8D.klass || bd1x.JE3x;
        this.fw3x = NEJ.X({}, rL8D);
        if (k1x.em3x(rL8D.parent)) {
            this.fw3x.parent = rL8D.parent[0];
            this.Jn3x = rL8D.parent.slice(1);
            if (!this.Jn3x || !this.Jn3x.length) { delete this.Jn3x }
        }
        delete this.fw3x.klass
    };
    b1x.JB3x = function() {
        var fR3x = /^(?:table|tr|tbody|ul|ol|select)$/i;
        return function() {
            this.z1x("onbeforelistclear", { parent: this.ic4g });
            if (!!this.fd3x && this.fd3x.length > 0) {
                this.fd3x = this.Jx3x.S1x(this.fd3x);
                delete this.fd3x
            }
            if (fR3x.test(this.ic4g.tagName)) { a0x.bHL4P(this.ic4g) } else { this.ic4g.innerHTML = "" }
        }
    }();
    b1x.beM8E = function(Xa6U) {
        if (!!this.fw3x.fixed) return;
        a0x.X1x(this.fw3x.parent, "display", Xa6U);
        k1x.be1x(this.Jn3x, function(bB2x) { a0x.X1x(bB2x, "display", Xa6U) }, this)
    };
    b1x.beO8G = function() {
        var s1x = this.fw3x.index || 1;
        delete this.fw3x.index;
        if (!!this.il4p) { s1x = this.il4p.rK8C() }
        this.yR0x({ last: s1x, index: s1x })
    };
    b1x.yR0x = function(d1x) { this.z1x("onpagechange", d1x) };
    b1x.bFc3x = function(bj1x) {
        this.iu5z.offset = bj1x;
        this.Rz5E()
    };
    b1x.bFb3x = function(e1x) {
        return e1x
    };
    b1x.Rz5E = function() {
        this.Ru5z();
        var j1x = this.iu5z.data;
        j1x.offset = this.iu5z.offset;
        var oF6z = j1x.offset == 0;
        j1x.total = oF6z;
        this.iu5z.limit = oF6z ? this.vR9I : this.qC7v;
        j1x.limit = this.iu5z.limit;
        this.P1x.nC6w(this.bFb3x(NEJ.X({}, this.iu5z)))
    };
    b1x.bem8e = function(e1x) {
        if (e1x.key != this.iu5z.key || e1x.offset != this.iu5z.offset) return;
        this.Xb7U();
        var i1x = this.P1x.gR3x(e1x.key);
        if (!i1x || !i1x.length) {
            this.bfd9U();
            return
        }
        var fX3x = e1x.limit,
            bj1x = e1x.offset;
        if (this.bfe9V(i1x, bj1x, fX3x)) return;
        this.z1x("onbeforelistrender", { list: i1x, offset: bj1x, parent: this.ic4g });
        if (!!this.Gl1x) {
            this.eJ3x.xlist = i1x;
            this.eJ3x.beg = bj1x;
            this.eJ3x.end = Math.min(i1x.length, bj1x + fX3x) - 1;
            this.eJ3x.act = "list";
            var dq3x = a0x.bP2x(this.Gl1x, this.eJ3x);
            this.Rl5q(dq3x)
        } else {
            this.eJ3x.limit = fX3x;
            this.eJ3x.offset = bj1x;
            var gw3x = a0x.zU0x(i1x, this.Jx3x, this.eJ3x);
            this.Ri5n(gw3x)
        }
        this.z1x("onafterlistrender", { list: i1x, offset: bj1x, parent: this.ic4g })
    };
    b1x.bWT7M = function(e1x) {
        if (!this.WT6N) return;
        delete this.WT6N;
        this.Xb7U("onafterpullrefresh");
        this.gn3x()
    };
    b1x.bFa3x = function(s1x, cp2x) {
        if (!!this.il4p) {
            var yx9o = this.il4p.rK8C(),
                bWM7F = this.il4p.jt5y();
            if (yx9o > cp2x || cp2x != bWM7F) {
                this.il4p.S1x();
                delete this.il4p;
                this.yR0x({ last: yx9o, index: Math.min(s1x, cp2x) });
                return !0
            }
        } else {
            this.fw3x.index = s1x;
            this.fw3x.total = cp2x;
            this.il4p = this.bFm4q.B1x(this.fw3x);
            this.il4p.vd8V("onchange", this.yR0x.g1x(this));
            k1x.be1x(this.Jn3x, function(bB2x) { this.il4p.g1x(bB2x) }, this)
        }
    };
    b1x.Xc7V = function() {
        var fT3x = +(new Date);
        return function(j1x) {
            var C1x = j1x[this.eJ3x.pkey];
            if (!C1x) {
                j1x["dirty-data"] = !0;
                j1x[this.eJ3x.pkey] = "dirty-" + fT3x++
            }
            return j1x
        }
    }();
    b1x.Xd7W = function(j1x) {
        var C1x = j1x[this.eJ3x.pkey];
        if (!!j1x["dirty-data"]) {
            delete j1x["dirty-data"];
            delete j1x[this.eJ3x.pkey]
        }
        return C1x
    };
    b1x.Xe7X = function() {
        var bWL7E = function(jE5J, lT6N) { this.ic4g.insertAdjacentElement(jE5J, lT6N) };
        return function(jE5J, j1x) {
            var Hk2x = [j1x];
            if (!!this.Gl1x) {
                this.eJ3x.xlist = Hk2x;
                this.eJ3x.beg = 0;
                this.eJ3x.end = 0;
                this.eJ3x.act = "add";
                this.Rl5q(a0x.bP2x(this.Gl1x, this.eJ3x), jE5J)
            } else {
                this.eJ3x.limit = 1;
                this.eJ3x.offset = 0;
                this.eJ3x.parent = bWL7E.g1x(this, jE5J);
                var gw3x = a0x.zU0x(Hk2x, this.Jx3x, this.eJ3x);
                this.eJ3x.parent = this.ic4g;
                this.Ri5n(gw3x)
            }
        }
    }();
    b1x.Ru5z = bm1x;
    b1x.Xb7U = function(T1x) {
        var d1x = { parent: this.ic4g };
        this.z1x(T1x || "onafterlistload", d1x);
        if (!d1x.stopped) { a0x.mm6g(this.ci2x) }
    };
    b1x.bfe9V = bm1x;
    b1x.Xf7Y = function(bF2x, jE5J) {
        if (k1x.ff3x(bF2x)) {
            if (!this.ci2x) this.ci2x = a0x.cU2x("div");
            this.ci2x.innerHTML = bF2x
        } else { this.ci2x = bF2x }
        this.ic4g.insertAdjacentElement(jE5J || "beforeEnd", this.ci2x)
    };
    b1x.vN9E = function(T1x, ko5t, jE5J) {
        var d1x = { parent: this.ic4g };
        this.z1x(T1x, d1x);
        if (!d1x.stopped) { this.Xf7Y(d1x.value || ko5t, jE5J) }
    };
    b1x.bfd9U = bm1x;
    b1x.Rl5q = bm1x;
    b1x.Ri5n = bm1x;
    b1x.bWU7N = function() {
        var fR3x = /^(?:delete|update)$/;
        return function(d1x) {
            var f1x = h1x.U1x(d1x, "d:action");
            if (!f1x) return;
            var W1x = a0x.u1x(f1x, "action");
            if (!fR3x.test(W1x)) return;
            var C1x = a0x.u1x(f1x, "id");
            if (!C1x) return;
            var r1x = this.P1x.eg3x(C1x);
            if (!r1x) return;
            h1x.bh1x(d1x);
            this.z1x("on" + W1x, { data: r1x, id: r1x[this.eJ3x.pkey], body: a0x.y1x(this.bFl4p(C1x)) })
        }
    }();
    b1x.WV6P = bm1x;
    b1x.Ry5D = function(d1x) {
        var j1x = d1x.data || {},
            e1x = { data: j1x, key: this.iu5z.key, id: j1x[this.eJ3x.pkey] };
        this.z1x("onbeforedelete", e1x);
        this.P1x.Ji3x(e1x)
    };
    b1x.WZ6T = bm1x;
    b1x.Rx5C = function(d1x) {
        var j1x = d1x.data || {},
            e1x = { data: j1x, key: this.iu5z.key };
        this.z1x("onbeforeupdate", e1x);
        this.P1x.RA5F(e1x)
    };
    b1x.bFd3x = function(d1x) {
        this.QT5Y(d1x, "onafterupdate");
        if (d1x.stopped) return;
        var C1x = d1x.data[this.eJ3x.pkey];
        if (!!this.fd3x) {
            var r1x = a0x.bLA5F(C1x);
            if (!!r1x) r1x.gn3x(d1x.data)
        } else {
            var f1x = a0x.y1x(C1x + "" + a0x.Hc2x());
            if (!f1x) return;
            var i1x = this.P1x.gR3x(d1x.key),
                s1x = k1x.cV2x(i1x, d1x.data);
            if (s1x < 0) return;
            this.eJ3x.list = i1x;
            this.eJ3x.beg = s1x;
            this.eJ3x.end = s1x;
            this.eJ3x.act = "update";
            var dq3x = a0x.bP2x(this.Gl1x, this.eJ3x);
            f1x.insertAdjacentHTML("afterEnd", dq3x);
            a0x.cH2x(f1x)
        }
    };
    b1x.QT5Y = function(d1x, T1x) {
        var r1x = d1x.data;
        if (!r1x || r1x[this.eJ3x.pkey] == null) {
            this.z1x("onerror", d1x);
            d1x.stopped = !0
        }
        if (!d1x.stopped) { this.z1x(T1x, d1x) }
    };
    b1x.bfA9r = bm1x;
    b1x.bfD9u = bm1x;
    b1x.beo8g = function(d1x) {
        if (d1x.key != this.iu5z.key) return;
        switch (d1x.action) {
            case "add":
                this.WV6P(d1x);
                break;
            case "delete":
                this.WZ6T(d1x);
                break;
            case "update":
                this.bFd3x(d1x);
                break;
            case "refresh":
                this.gn3x();
                break;
            case "unshift":
                this.bfD9u(d1x.offset, d1x.limit);
                break;
            case "append":
                this.bfA9r(d1x.offset, d1x.limit);
                break
        }
    };
    b1x.ox6r = function(r1x) { this.Rx5C({ data: r1x }) };
    b1x.lP6J = function(r1x) { this.Ry5D({ data: r1x }) };
    b1x.rx7q = function(r1x) { this.P1x.iD5I({ data: r1x, key: this.iu5z.key }) };
    b1x.rw7p = function() {
        return this.P1x
    };
    b1x.bfK9B = function(j1x) {
        this.Xe7X("afterBegin", this.Xc7V(j1x));
        return this.Xd7W(j1x)
    };
    b1x.bEZ3x = function(j1x) {
        this.Xe7X("beforeEnd", this.Xc7V(j1x));
        return this.Xd7W(j1x)
    };
    b1x.gn3x = function() {
        this.JB3x();
        this.beO8G()
    };
    b1x.cuU2x = function() {
        this.P1x.tD8v(this.iu5z.key);
        this.gn3x()
    };
    b1x.bcN8F = function() {
        if (!!this.WT6N) return;
        this.WT6N = !0;
        this.vN9E("onbeforepullrefresh", "列表刷新中...", "afterBegin");
        this.P1x.bcN8F({ key: this.iu5z.key, data: this.iu5z.data })
    };
    b1x.jt5y = function() {
        return this.P1x.jt5y(this.iu5z.key)
    };
    b1x.bEX3x = function() {
        return this.il4p
    };
    b1x.RG5L = function() {
        return this.P1x.RG5L(this.iu5z.key)
    };
    b1x.bWC7v = function() {
        return this.fd3x
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        k1x = c1x("nej.u"),
        a0x = c1x("nej.e"),
        N1x = c1x("nej.ut"),
        b1x, K1x;
    if (!!N1x.iv5A) return;
    N1x.iv5A = NEJ.C();
    b1x = N1x.iv5A.O1x(N1x.WQ6K);
    K1x = N1x.iv5A.cg2x;
    b1x.yX0x = function(bj1x, bq2x) {
        return K1x.yX0x.call(this, this.vR9I, bj1x, this.qC7v, bq2x)
    };
    b1x.bfV9M = function(s1x) {
        var bj1x = 0;
        if (s1x > 1) bj1x = this.vR9I + (s1x - 2) * this.qC7v;
        return bj1x
    };
    b1x.yR0x = function(d1x) {
        K1x.yR0x.apply(this, arguments);
        if (!d1x.stopped) { this.bFc3x(this.bfV9M(d1x.index)) }
    };
    b1x.Ru5z = function() {
        this.JB3x();
        this.vN9E("onbeforelistload", "列表加载中...")
    };
    b1x.Xb7U = function() {
        K1x.Xb7U.apply(this, arguments);
        this.JB3x()
    };
    b1x.bfe9V = function(i1x, bj1x, fX3x) {
        var bt2x = this.yX0x(bj1x, i1x.length);
        if (this.bFa3x(bt2x.index, bt2x.total)) return !0;
        this.beM8E(bt2x.total > 1 ? "" : "none")
    };
    b1x.bfd9U = function() { this.vN9E("onemptylist", "没有列表数据！") };
    b1x.Xf7Y = function(bF2x, jE5J) {
        if (!jE5J && k1x.ff3x(bF2x)) {
            this.ic4g.innerHTML = bF2x;
            return
        }
        K1x.Xf7Y.apply(this, arguments)
    };
    b1x.Rl5q = function(dq3x) { this.ic4g.innerHTML = dq3x };
    b1x.Ri5n = function(gw3x) { this.fd3x = gw3x };
    b1x.WV6P = function(d1x) {
        this.QT5Y(d1x, "onafteradd");
        if (!d1x.stopped) this.gn3x()
    };
    b1x.WZ6T = function(d1x) {
        this.QT5Y(d1x, "onafterdelete");
        if (!d1x.stopped) this.gn3x()
    };
    b1x.bfA9r = function(bj1x, fX3x) {
        var s1x = 1;
        if (!!this.il4p) { s1x = this.il4p.rK8C() }
        var iW5b = this.bfV9M(s1x),
            gu3x = iW5b + (s1x > 1 ? this.qC7v : this.vR9I);
        if (bj1x >= gu3x && !!this.il4p) {
            var bt2x = this.yX0x(0, this.jt5y());
            this.il4p.bcI8A(bt2x.total);
            this.beM8E(bt2x.total > 1 ? "" : "none")
        } else { this.gn3x() }
    };
    b1x.bfD9u = function(bj1x, fX3x) {
        var s1x = 1;
        if (!!this.il4p) { s1x = this.il4p.rK8C() }
        var iW5b = this.bfV9M(s1x),
            bt2x = this.yX0x(iW5b, this.jt5y());
        this.yR0x({ last: s1x, index: bt2x.index })
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        D1x = c1x("nm.w"),
        ge3x = 40,
        b1x, K1x;
    D1x.Xg7Z = NEJ.C();
    b1x = D1x.Xg7Z.O1x(H1x.cz2x);
    K1x = D1x.Xg7Z.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.Qz5E = e1x.inputer;
        this.bfY9P = e1x.tipper;
        this.bT2x([
            [this.Qz5E, "input", this.fi3x.g1x(this)]
        ])
    };
    b1x.bC2x = function() {
        this.bH2x();
        this.Gd1x(null, null)
    };
    b1x.fi3x = function(d1x) {
        if (d1x && d1x.type == "keyup" && (d1x.keyCode != 8 || d1x.keyCode != 68)) return;
        var T1x = this.Qz5E.value,
            cuV2x;
        if (l1x.Ic2x(T1x) > ge3x) {
            this.Qz5E.value = l1x.ym9d(T1x, ge3x);
            this.Gd1x("歌单名不能超过20个汉字或40个英文字符！", arguments.callee.g1x(this))
        } else if (T1x.indexOf("#") >= 0 || T1x.indexOf("@") >= 0) { this.Gd1x("歌单名不能包含字符“@”和“#”！") } else {
            this.Gd1x(null, null);
            this.z1x("onchange", { value: T1x })
        }
    };
    b1x.bWr7k = function() { this.fi3x() };
    b1x.Gd1x = function() {
        var C1x = 0;
        return function(dY3x, bEV3x) {
            if (!!C1x) window.clearTimeout(C1x);
            if (!dY3x) {
                a0x.x1x(this.bfY9P, "f-vhide");
                this.bEU3x = !1;
                return
            }
            this.bfY9P.innerHTML = '<i class="u-icn u-icn-25"></i>' + dY3x;
            a0x.w1x(this.bfY9P, "f-vhide");
            this.bEU3x = !0;
            if (k1x.gc3x(bEV3x)) C1x = window.setTimeout(function() {
                this.Gd1x(null, null);
                bEV3x()
            }.g1x(this), 1e3)
        }
    }();
    b1x.bET3x = function() {
        if (this.bEU3x) return !1;
        if (l1x.iV5a(this.Qz5E.value)) {
            this.Gd1x("歌单名不能为空");
            return !1
        }
        return !0
    };
    b1x.fu3x = function() {
        return this.Qz5E.value
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        h1x = c1x("nej.v"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j"),
        n1x = c1x("nm.l"),
        D1x = c1x("nm.w"),
        bI2x = c1x("nej.ui"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x;
    n1x.Xn7g = NEJ.C();
    b1x = n1x.Xn7g.O1x(n1x.dV3x);
    K1x = n1x.Xn7g.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.Xr7k = { inputer: i1x[0], tipper: i1x[1] };
        this.gK3x = { onerror: this.bEQ3x.g1x(this), onitemadd: this.bEQ3x.g1x(this) };
        this.pE7x = i1x[2];
        h1x.q1x(i1x[2], "click", this.DO1x.g1x(this));
        h1x.q1x(i1x[3], "click", this.yK9B.g1x(this));
        h1x.q1x(this.o1x, "keypress", this.bEO3x.g1x(this))
    };
    b1x.bZ2x = function() { this.ca2x = "m-wgt-create" };
    b1x.bk1x = function(e1x) {
        e1x.clazz = " m-layer-w2";
        e1x.parent = e1x.parent || document.body;
        e1x.title = "新建歌单";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bl1x(e1x);
        this.Xr7k.inputer.value = e1x.name || "";
        this.sx8p = D1x.Xg7Z.B1x(this.Xr7k);
        this.sx8p.bWr7k();
        this.P1x = p1x.hj4n.B1x(this.gK3x);
        setTimeout(function() { this.Xr7k.inputer.focus() }.g1x(this), 0)
    };
    b1x.bC2x = function() {
        this.bH2x();
        if (this.sx8p) {
            this.sx8p.S1x();
            delete this.sx8p
        }
        this.rr7k(!1);
        this.Xr7k.inputer.value = ""
    };
    b1x.rr7k = function(Qe5j) {
        this.nv6p = Qe5j;
        if (Qe5j) {
            this.pE7x.innerHTML = "<i>新建中...</i>";
            a0x.x1x(this.pE7x, "u-btn2-dis")
        } else {
            this.pE7x.innerHTML = "<i>新 建</i>";
            a0x.w1x(this.pE7x, "u-btn2-dis")
        }
    };
    b1x.DO1x = function() {
        if (this.nv6p || !this.sx8p.bET3x()) return;
        var cn2x = { key: "playlist_new-" + GUser.userId, data: { name: this.sx8p.fu3x() }, offset: 1 };
        this.P1x.iD5I(cn2x);
        this.rr7k(!0)
    };
    b1x.bEQ3x = function(d1x) {
        var ck2x = (d1x.result || Y1x).code;
        if (!ck2x) { this.z1x("onsuccess", d1x.data) } else { this.z1x("onerror", d1x) }
        this.bp2x()
    };
    b1x.yK9B = function() { this.bp2x() };
    b1x.bEO3x = function(d1x) {
        if (d1x.keyCode == 13) this.DO1x()
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        v1x = c1x("nej.j"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.bgF9w = NEJ.C();
    b1x = n1x.bgF9w.O1x(n1x.dV3x);
    K1x = n1x.bgF9w.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.hJ4N = { limit: 301, parent: i1x[1], cache: { klass: p1x.hj4n, lkey: "playlist_new-" + GUser.userId, onlisterror: this.bgH9y.g1x(this) }, item: { klass: "m-wgt-subscribe-item", cutStr: l1x.Dw1x, escape: k1x.dJ3x } };
        this.gK3x = { onsuccess: this.Xt7m.g1x(this), onerror: this.ek3x.g1x(this) };
        h1x.q1x(i1x[0], "click", this.DO1x.g1x(this));
        h1x.q1x(i1x[1], "click", this.ls5x.g1x(this))
    };
    b1x.bZ2x = function() { this.ca2x = "m-wgt-subscribe" };
    b1x.bk1x = function(e1x) {
        e1x.parent = e1x.parent || document.body;
        e1x.clazz = " m-layer-w2";
        e1x.title = "添加到歌单";
        e1x.draggable = !0;
        e1x.mask = !0;
        this.bl1x(e1x);
        this.Xu7n = (e1x.tracks || []).reverse();
        this.hJ4N.item.size = this.Xu7n.length;
        this.gK3x.name = e1x.name || "";
        this.bEM3x = p1x.uv8n.B1x({ onaddsuccess: this.yt9k.g1x(this) });
        this.sd8V = p1x.hj4n.B1x({ onlistload: this.bWb7U.g1x(this) });
        this.sd8V.bJc4g();
        k1x.be1x(this.Xu7n, function(r1x, s1x, i1x) {
            if (!k1x.kg5l(r1x)) { i1x[s1x] = this.bEM3x.eg3x(r1x) || r1x }
        }, this)
    };
    b1x.bWb7U = function() {
        if (this.ds3x) this.ds3x.S1x();
        this.ds3x = H1x.iv5A.B1x(this.hJ4N)
    };
    b1x.DO1x = function() {
        this.bp2x();
        if (this.Ed1x) this.Ed1x.S1x();
        this.Ed1x = n1x.Xn7g.B1x(this.gK3x);
        this.Ed1x.M1x()
    };
    b1x.ls5x = function() {
        var bVY7R = function(f1x) {
            while (f1x && f1x != document) {
                if (f1x.tagName.toLowerCase() == "li") {
                    return f1x
                }
                f1x = f1x.parentNode
            }
        };
        return function(d1x) {
            h1x.cd2x(d1x);
            var E1x = h1x.U1x(d1x),
                bhd9U = bVY7R(E1x);
            if (!!bhd9U && !a0x.bz2x(bhd9U, "dis")) { this.Xt7m({ id: a0x.u1x(bhd9U, "id") }) }
        }
    }();
    b1x.Xt7m = function(d1x) {
        var C1x = d1x.id;
        if (!C1x || !this.Xu7n.length) return;
        this.bEM3x.iD5I({ key: "track_playlist-" + C1x, data: { tracks: this.Xu7n, pid: C1x } });
        this.bp2x()
    };
    b1x.yt9k = function() {
        this.z1x("onsuccess");
        n1x.Z1x.M1x({ tip: "收藏成功" })
    };
    b1x.ek3x = function(d1x) {
        this.bp2x();
        this.z1x("onerror", d1x);
        var cA2x = "收藏失败";
        switch (d1x.code) {
            case 405:
                cA2x = "操作过于频繁，先休息一下再试吧";
                break;
            case 507:
                cA2x = "歌单数量超过限制";
                break;
            case 502:
                cA2x = "歌曲已经存在"
        }
        n1x.Z1x.M1x({ tip: cA2x, type: 2 })
    };
    b1x.bgH9y = function() {
        this.bp2x();
        n1x.Z1x.M1x({ tip: "列表下载失败，请稍后再试", type: 2 })
    };
    l1x.lv5A = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        n1x.bgF9w.M1x(e1x)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        cK2x = c1x("nej.p"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        l1x = c1x("nm.x");
    var bhe9V, nG6A, V1x = decodeURIComponent(location.href),
        iN5S = /.+(http:\/\/.+\/proxy.html)/.test(V1x) ? RegExp.$1 : "";
    if (!!iN5S) { v1x.uV8N("mail_proxy_url", iN5S) } else { iN5S = v1x.sw8o("mail_proxy_url") || "about:blank" }
    bhe9V = a0x.YM7F({ src: iN5S, onload: function() { nG6A = true } });
    var bEF3x = function() { v1x.gD3x("USER_TRIGGER", { value: true, expire: 1 / (24 * 60), path: "/" }) };
    var bVS7L = function() {
        if (cK2x.cR2x.browser == "ie" && parseInt(cK2x.cR2x.version) < 9) {
            l1x.fb3x({ clazz: "m-layer-w2", message: "当前浏览器版本过低，暂时无法使用，请升级后再试。" });
            return false
        }
        return true
    };
    l1x.XA7t = function(t1x, C1x, W1x) {
        if (!bVS7L()) return;
        bEF3x();
        if (W1x == "stop") {
            if (!nG6A) throw "proxy not loaded";
            bEF3x();
            bhe9V.contentWindow.location.replace(iN5S + "#" + k1x.de2x({ to: "ifrmMusic", message: JSON.stringify({ s: +(new Date), action: "stop" }) }))
        } else { bhe9V.contentWindow.location.replace(iN5S + "#" + k1x.de2x({ to: "ifrmMusic", message: JSON.stringify({ type: t1x, id: C1x, s: +(new Date), action: W1x }) })) }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        l1x = c1x("nm.x"),
        n1x = c1x("nm.l"),
        p1x = c1x("nm.d");
    var kI5N = p1x.hI4M.B1x();
    var nX6R = p1x.uv8n.B1x({ onlistload: bVR7K, onitemload: bVQ7J, onerror: ek3x });
    var Ek1x = p1x.pB7u.B1x({ onlistload: bVP7I, onitemload: bVO7H, onerror: ek3x });
    var bEE3x = {};

    function vh9Y(d1x) {
        var f1x = h1x.U1x(d1x, "d:resAction"),
            W1x = a0x.u1x(f1x, "resAction");
        if (f1x && (W1x == "play" || W1x == "addto")) {
            bED3x({ action: W1x, type: parseInt(a0x.u1x(f1x, "resType")), id: a0x.u1x(f1x, "resId"), from: a0x.u1x(f1x, "resFrom"), data: a0x.u1x(f1x, "resData"), order: a0x.u1x(f1x, "resOrder") });
            bVI7B(f1x)
        }
    }

    function bED3x(bN2x) {
        var W1x = bN2x.action,
            t1x = bN2x.type,
            C1x = bN2x.id,
            dH3x = bN2x.from,
            j1x = bN2x.data,
            tx8p = bN2x.order,
            e1x = { limit: 1e3, offset: 0, data: { id: C1x }, ext: { id: C1x, action: W1x, type: t1x, from: dH3x, data: j1x } };
        if (W1x != "play" && W1x != "addto" || !t1x) return;
        if (window.GRef && GRef == "mail") {
            l1x.XA7t(t1x, C1x, W1x);
            return
        }
        switch (t1x) {
            case 13:
                e1x.key = "track_playlist-" + C1x;
                nX6R.nC6w(e1x);
                if (W1x == "play") { v1x.br2x("/api/playlist/update/playcount", { query: { id: C1x } }) }
                break;
            case 17:
                e1x.key = "program";
                e1x.id = C1x;
                Ek1x.RF5K(e1x);
                if (W1x == "play") { v1x.br2x("/api/dj/program/listen", { query: { id: C1x } }) }
                break;
            case 18:
                e1x.key = "track";
                e1x.id = C1x;
                nX6R.RF5K(e1x);
                break;
            case 19:
                e1x.key = "track_album-" + C1x;
                nX6R.nC6w(e1x);
                break;
            case 24:
                e1x.key = "track_day";
                nX6R.nC6w(e1x);
                break;
            case 2:
                e1x.key = "track_artist_top-" + C1x;
                nX6R.nC6w(e1x);
                break;
            case 70:
                e1x.key = "program_djradio-" + C1x + "-" + tx8p;
                e1x.data.radioId = C1x;
                e1x.data.asc = tx8p == 2;
                Ek1x.nC6w(e1x);
                break
        }
    }

    function bEz3x(i1x) {
        var m1x = [];
        k1x.be1x(i1x, function(r1x) {
            if (r1x.mainSong) {
                r1x.mainSong.program = r1x;
                m1x.push(r1x.mainSong);
                r1x.localupdatetime = +(new Date);
                nX6R.cjf9W(r1x.mainSong);
                r1x.mainTrackId = r1x.mainSong.id;
                delete r1x.mainSong
            } else {
                var bEy3x = nX6R.eg3x(r1x.mainTrackId);
                bEy3x && m1x.push(bEy3x)
            }
        });
        return m1x
    }

    function XG7z(i1x, e1x) {
        var qu7n = e1x.action == "play" && e1x.type != 17 && e1x.type != 18,
            eW3x = e1x.action == "play";
        if (!i1x.length) return;
        if (e1x.type == 19) { i1x = l1x.IZ2x(i1x, true, { play: true }, { source: "album", sourceid: e1x.id }) } else { i1x = l1x.IZ2x(i1x, true, { play: true }) }
        k1x.be1x(i1x, function(r1x) { r1x.source = l1x.bbb7U({ fid: e1x.from, fdata: e1x.data, type: e1x.type, rid: e1x.id }, r1x.id) });
        top.player.addTo(i1x, qu7n, eW3x);
        kI5N.Rc5h({ rid: e1x.id, type: e1x.type, hash: l1x.Im2x(), play: eW3x, source: e1x.from, sourceid: e1x.data })
    }

    function bVR7K(d1x) {
        var i1x = nX6R.gR3x(d1x.key);
        XG7z(i1x, d1x.ext)
    }

    function bVQ7J(d1x) {
        var i1x = [nX6R.eg3x(d1x.id)],
            bf1x = i1x[0],
            pb7U = l1x.og6a(bf1x),
            rf7Y = bf1x.privilege || {};
        if (pb7U == 10) { l1x.sR8J(rf7Y.fee || bf1x.fee, bf1x.id, "song", null, rf7Y) } else if (pb7U == 100) { l1x.hV4Z(null, null, null, true, bf1x) } else if (pb7U == 11) { l1x.bJG4K(bf1x.id, 18) } else { XG7z(i1x, d1x.ext) }
    }

    function bVP7I(d1x) {
        var i1x = bEz3x(Ek1x.gR3x(d1x.key));
        XG7z(i1x, d1x.ext)
    }

    function bVO7H(d1x) {
        var i1x = bEz3x([Ek1x.eg3x(d1x.id)]);
        XG7z(i1x, d1x.ext)
    }

    function ek3x() { top.player.tipPlay("无法播放，音乐已下线") }

    function bVI7B(f1x) {
        var t1x = a0x.u1x(f1x, "resType"),
            C1x = a0x.u1x(f1x, "resId"),
            J1x = t1x + "-" + C1x;
        if (bEE3x[J1x]) return;
        var bEx3x = a0x.y1x("play-count"),
            bhR9I = a0x.I1x(f1x.parentNode, "nb"),
            OS5X = null;
        if (bEx3x) { OS5X = bEx3x } else { OS5X = !!bhR9I && !!bhR9I[0] ? bhR9I[0] : null }
        if (OS5X) {
            var cv2x = OS5X.innerHTML;
            if (/^\d+$/.test(cv2x)) { OS5X.innerText = +cv2x + 1 }
            bEE3x[J1x] = true
        }
    }
    l1x.bVx7q = function(f1x) { h1x.q1x(f1x || document.body, "click", vh9Y.g1x(this)) };
    l1x.bVw7p = function(W1x, t1x, C1x) { bED3x({ action: W1x, type: t1x, id: C1x }) }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        p1x = c1x("nm.d"),
        b1x, K1x;
    p1x.eP3x({
        "share-all": { url: "/api/share/friends/resource", format: function(m1x, e1x) { this.bVu7n(m1x, e1x) }, onerror: "onshareerror" },
        "share-sns": { url: "/api/share/resource/sns", format: function(m1x, e1x) { this.z1x("onshareall", e1x.result) }, onerror: function(m1x, e1x) { this.z1x("onshareall", e1x.result) } },
        "share-private": { url: "/api/msg/private/send", onload: "onshareprivate", onerror: "onshareerror" },
        share_img_compound: {
            url: "/upload/event/img/compound",
            type: "POST",
            format: function(m1x, e1x) {
                e1x.options.picUrl = m1x.picUrl;
                this.bEv3x(e1x.options, e1x.result)
            },
            onerror: function(m1x, e1x) { this.z1x("onshareall", e1x.result) }
        },
        "vid-get": {
            url: "/api/video/coversvid/get",
            format: function(Q1x, e1x) {
                this.ob6V("vid_info-" + e1x.data.nosKey, Q1x);
                return Q1x
            }
        }
    });
    p1x.bhX9O = NEJ.C();
    b1x = p1x.bhX9O.O1x(p1x.gU3x);
    b1x.bVs7l = function() {
        var tK8C = function(Q1x, e1x) {
            e1x.times++;
            if (e1x.times > 10) { this.z1x("onvinfoerror", e1x.key, Q1x) } else { setTimeout(eD3x.g1x(this, e1x), e1x.times * 1e3) }
        };
        var xk9b = function(Q1x, e1x) { this.z1x("onvinfo", e1x.key, Q1x) };
        var eD3x = function(e1x) {
            var V1x = e1x.url;
            v1x.br2x(V1x + "?vinfo", { method: "GET", type: "json", mode: 1, onload: xk9b.ed3x(this, e1x), onerror: tK8C.ed3x(this, e1x) })
        };
        return function(e1x) {
            e1x.times = 0;
            eD3x.call(this, e1x)
        }
    }();
    b1x.cuZ2x = function() {
        var OJ5O;
        var tK8C = function(Q1x, e1x) {
            if (Q1x.code > 0) {
                clearInterval(this.AH0x);
                this.z1x("onviderror", e1x.data.nosKey)
            }
        };
        var xk9b = function(J1x, Q1x) {
            if (Q1x.vid && Q1x.covers) {
                clearInterval(this.AH0x);
                this.z1x("onvid", J1x, Q1x)
            }
        };
        var eD3x = function(e1x) {
            if (+(new Date) - OJ5O > 60 * 60 * 1e3) {
                clearInterval(this.AH0x);
                this.z1x("onviderror", e1x.data.nosKey);
                return
            }
            e1x.onload = xk9b.g1x(this, e1x.data.nosKey);
            e1x.onerror = tK8C.g1x(this);
            this.cl2x("vid-get", e1x)
        };
        return function(e1x) {
            if (!e1x || !e1x.data) return;
            OJ5O = +(new Date);
            this.AH0x = clearInterval(this.AH0x);
            this.AH0x = setInterval(eD3x.g1x(this, e1x), 1e4);
            eD3x.apply(this, arguments)
        }
    }();
    b1x.bVq7j = function() { this.AH0x = clearInterval(this.AH0x) };
    b1x.bVu7n = function(m1x, nf6Z) {
        if (m1x.event && nf6Z.snsTypes) {
            if (nf6Z.pics) {
                var bEs3x = [];
                for (var i = 0, len = nf6Z.pics.length; i < len; i++) { bEs3x[i] = nf6Z.pics[i].originId }
                this.cl2x("share_img_compound", { data: { picIds: bEs3x.join(",") }, options: nf6Z, result: m1x })
            } else {
                nf6Z.picUrl = nf6Z.picUrl;
                this.bEv3x(nf6Z, m1x)
            }
        } else { this.z1x("onshareall", m1x) }
        var Br0x = p1x.hI4M.B1x();
        Br0x.gm3x(nf6Z.isPub ? "pubevent" : "shareevent", { id: m1x.id })
    };
    b1x.bEv3x = function(nf6Z, m1x) {
        var cn2x = {};
        cn2x.eventid = m1x.event.id;
        cn2x.eventtype = m1x.event.type;
        nf6Z.picUrl && (cn2x.picUrl = nf6Z.picUrl);
        cn2x.snsTypes = nf6Z.snsTypes;
        cn2x.msg = nf6Z.data.msg || "";
        cn2x.type = nf6Z.data.type;
        nf6Z.data.id && (cn2x.id = nf6Z.data.id);
        this.cl2x("share-sns", { data: cn2x, result: m1x })
    };
    b1x.bVk6e = function(e1x) {
        var j1x = { type: "", id: 0, threadId: "", msg: "", actId: 0, pics: "", uuid: "publish-" + +(new Date) + k1x.nb6V(5) };
        j1x = NEJ.EX(j1x, e1x);
        if (!(j1x.id > 0)) {
            delete j1x.id;
            j1x.type = "noresource"
        }
        if (!j1x.threadId) { delete j1x.threadId }
        if (!j1x.actId) { delete j1x.actId }
        if (!j1x.pics) { delete j1x.pics } else { j1x.pics = JSON.stringify(j1x.pics) }
        this.cl2x("share-all", { data: j1x, snsTypes: e1x.snsTypes, picUrl: e1x.picUrl, pics: e1x.pics, isPub: e1x.isPub })
    };
    b1x.bVf6Z = function(e1x) { this.cl2x("share-private", e1x) };
    b1x.bVe6Y = function(e1x) { this.cl2x("share-all", e1x) }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x;
    var bVc6W = { 40: !0 };
    p1x.eP3x({
        "event-list": {
            url: "/api/v1/event/get",
            filter: function(e1x) {
                e1x.data.getcounts = true;
                e1x.data.pagesize = e1x.data.limit;
                if (e1x.data.offset == 0) { e1x.data.lasttime = -1 }
                delete e1x.data.offset
            },
            format: function(Q1x, e1x) {
                Q1x.event = l1x.Uw6q(Q1x.event, function(r1x, s1x) {
                    return !bVc6W[r1x.type]
                });
                this.bVb6V(Q1x.event);
                e1x.data.lasttime = Q1x.lasttime;
                if (Q1x.event.length) { Q1x.event.length = e1x.limit }
                return { list: Q1x.event, total: Q1x.size }
            }
        },
        "event_latest-list": {
            url: "/api/act/event/getnews",
            format: function(Q1x, e1x) {
                return { list: Q1x.events, total: Q1x.count }
            }
        },
        "event-pull": {
            url: "/api/event/getnews",
            filter: function(e1x) { e1x.data.pagesize = 20 },
            format: function(Q1x, e1x) {
                return Q1x.event
            }
        },
        "ievent-get": { type: "GET", url: "/api/event/get", onload: "oneventload", onerror: "oneventloaderror" },
        "ievent-new-get": { type: "GET", url: "/api/event/getnews", onload: "oneventnewload" },
        "ievent_user-list": {
            type: "GET",
            url: "/api/event/get/{userId}",
            filter: function(e1x) {
                e1x.data.time = -1;
                e1x.data.getcounts = true
            },
            format: function(Q1x, e1x) {
                Q1x.events.length = e1x.limit;
                return { list: Q1x.events, total: Q1x.size }
            }
        },
        "ievent-res-get": {
            url: "/api/res/status",
            format: function(m1x, e1x) {
                m1x.conf = e1x.conf;
                return m1x
            }
        },
        "ievent-like": {
            url: "/api/resource/like",
            onload: "oneventlike",
            filter: function(e1x, bc1x) {
                if (e1x.like) {
                    if (e1x.comment) { bc1x.url = "/api/v1/comment/like" } else { bc1x.url = "/api/resource/like" }
                    bc1x.onload = "oneventlike";
                    bc1x.onerror = "oneventlikeerr"
                } else {
                    if (e1x.comment) { bc1x.url = "/api/v1/comment/unlike" } else { bc1x.url = "/api/resource/unlike" }
                    bc1x.onload = "oneventunlike";
                    bc1x.onerror = "oneventunlikeerr"
                }
            },
            format: function(m1x, e1x) {
                m1x.eid = e1x.eid;
                m1x.origin = e1x.origin;
                m1x.ext = e1x.ext;
                return m1x
            }
        },
        "ievent_user-del": {
            url: "/api/event/delete",
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event-del": {
            url: "/api/event/delete",
            filter: function(e1x, bc1x) {
                if (e1x.data.type == "nointer") { bc1x.url = "/api/event/rcmd/reject" } else if (e1x.data.transcoding) { bc1x.url = "/api/event/video/transcoding/delete" } else { bc1x.url = "/api/event/delete" }
            },
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event_activity-del": {
            url: "/api/event/delete",
            format: function(m1x, e1x) {
                m1x.id = e1x.data.id;
                return m1x
            }
        },
        "event_activity-list": {
            url: "/api/act/event",
            filter: function(e1x) {
                e1x.data.lasttime = e1x.data.lasttime || -1;
                e1x.data.pagesize = e1x.data.limit;
                e1x.data.getcounts = true;
                delete e1x.data.offset
            },
            format: function(Q1x, e1x) {
                e1x.data.lasttime = Q1x.lasttime;
                var i1x = Q1x.events;
                if (Q1x.more) i1x = this.bVa6U(i1x, e1x.data.pagesize);
                return { list: i1x, total: Q1x.size }
            },
            onerror: "onlisterror"
        }
    });
    p1x.xX9O = NEJ.C();
    b1x = p1x.xX9O.O1x(p1x.gU3x);
    b1x.cm2x = function() { this.cs2x() };
    b1x.biD9u = function(t1x, cE2x) {
        return t1x + "-" + cE2x
    };
    b1x.cvd2x = function(e1x) { this.cl2x("ievent-get", e1x) };
    b1x.cvf2x = function(e1x) { this.cl2x("ievent-new-get", e1x) };
    b1x.cvg2x = function(e1x) { this.cl2x("ievent-user-get", e1x) };
    b1x.cvi2x = function(t1x, cE2x) {
        return this.qv7o(this.biD9u(t1x, cE2x))
    };
    b1x.cvj2x = function(FK1x, e1x) {
        if (!FK1x || !FK1x.length) return;
        e1x = e1x || {};
        var bv2x = { song: 2, album: 4, playlist: 1, mv: 3, program: 5 };
        for (var i = 0, Ev1x = [], bEi3x = [], j1x; i < FK1x.length; ++i) {
            j1x = FK1x[i];
            j1x = this.qv7o(this.biD9u(j1x.type, j1x.id));
            if (!j1x) {
                Ev1x.push(FK1x[i].id);
                bEi3x.push(bv2x[FK1x[i].type] || 0)
            }
        }
        if (!Ev1x.length) {
            this.z1x("oneventresload", e1x.conf);
            return
        }
        e1x.data = { ids: JSON.stringify(Ev1x), types: JSON.stringify(bEi3x) };
        e1x.onload = this.bUK6E.g1x(this);
        this.cl2x("ievent-res-get", e1x)
    };
    b1x.bUK6E = function(m1x) {
        if (m1x.code != 200) {
            this.z1x("oneventreserror", m1x.code);
            return
        }
        var bv2x = { 1: "playlist", 2: "song", 3: "mv", 4: "album", 5: "program" };
        for (var i = 0, i1x = m1x.results; i < i1x.length; ++i) { this.ob6V(this.biD9u(bv2x[i1x[i].type], i1x[i].id), i1x[i]) }
        this.z1x("oneventresload", m1x.conf)
    };
    b1x.bEh3x = function(j1x) {
        var J1x = "event-list";
        this.bbY8Q(J1x, j1x);
        this.z1x("onitemadd", { key: J1x, action: "add", data: j1x, flag: -1 })
    };
    b1x.tZ8R = function(e1x) { this.cl2x("ievent-like", e1x) };
    b1x.lP6J = function(e1x) { this.cl2x("ievent-delete", e1x) };
    b1x.bVa6U = function(i1x, fX3x) {
        for (var i = i1x.length; i < fX3x; i++) i1x.push(null);
        return i1x
    };
    b1x.bVb6V = function(i1x) {
        var m1x = [];
        if (!i1x || !i1x.length) return;
        k1x.be1x(i1x, function(d1x) { d1x.biData = this.bEe3x(d1x) }, this)
    };
    b1x.bEe3x = function() {
        var bmF0x = { 32: "comment", 33: "activity", 34: "recomment_artist" },
            bUE6y = [13, 17, 18, 19, 20, 21, 22, 28, 31];
        return function(d1x) {
            var Q1x = { id: d1x.id, sourceid: d1x.user.userId, alg: d1x.rcmdInfo ? d1x.rcmdInfo.alg : null, contentType: bmF0x[d1x.type] || (k1x.cV2x(bUE6y, d1x.type) != -1 ? "user_event" : "other") };
            return Q1x
        }
    }();
    b1x.AW0x = function(bUA6u, d1x) {
        var Q1x = this.bEe3x(d1x);
        Q1x.actionType = bUA6u;
        if (window.log) log("eventclick", Q1x)
    };
    b1x.cvk2x = function(e1x) { this.cl2x("event_latest-list", e1x) }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        bI2x = c1x("nej.ui"),
        l1x = c1x("nm.x"),
        L1x = c1x("nm.w"),
        b1x, K1x;
    L1x.XX7Q = NEJ.C();
    b1x = L1x.XX7Q.O1x(bI2x.er3x);
    K1x = L1x.XX7Q.cg2x;
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        var gB3x = e1x.box || Y1x;
        a0x.fx3x(this.o1x, { position: "absolute", width: gB3x.width + "px", height: gB3x.height + "px", top: gB3x.top + "px", left: gB3x.left + "px" });
        window.uploader = this
    };
    b1x.bC2x = function() { this.bH2x() };
    b1x.ls5x = function(d1x) {
        this.z1x("onselect", d1x);
        console.log("select", d1x)
    };
    b1x.sg8Y = function(d1x) {
        this.z1x("onprogress", d1x);
        console.log("progress", d1x)
    };
    b1x.tk8c = function(d1x) {
        if (d1x.code == 200) { this.z1x("oncomplete", d1x) } else { this.ek3x(d1x) }
        console.log("complete", d1x)
    };
    b1x.ek3x = function(d1x) {
        this.z1x("onerror", d1x);
        console.log("error", d1x)
    };
    b1x.gb3x = bm1x;
    b1x.bUx6r = bm1x
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        bI2x = c1x("nej.ui"),
        l1x = c1x("nm.x"),
        L1x = c1x("nm.w"),
        ga3x = c1x("cb"),
        b1x, K1x;
    L1x.bjj9a = NEJ.C();
    b1x = L1x.bjj9a.O1x(L1x.XX7Q);
    K1x = L1x.bjj9a.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        var J1x = k1x.nb6V(8),
            jh5m = "onselect" + J1x,
            js5x = "onprogress" + J1x,
            bEb3x = "oncomplete" + J1x,
            bQ2x = "onerror" + J1x;
        ga3x[jh5m] = this.ls5x.g1x(this);
        ga3x[js5x] = this.sg8Y.g1x(this);
        ga3x[bEb3x] = this.tk8c.g1x(this);
        ga3x[bQ2x] = this.ek3x.g1x(this);
        var bUt6n = "/style/swf/MusicUpload.swf?v=20150202",
            bv2x = { music: "音频(*.mp3,*.m4a,*.x-m4a)", image: "*.jpg;*.jpeg;*.png;*.gif;" },
            lJ5O = { url: e1x.api, token: e1x.token, filter: bv2x[e1x.accept] || e1x.accept || e1x.flashAccept || "", multiple: e1x.multiple, error: "cb." + bQ2x, select: "cb." + jh5m, progress: "cb." + js5x, complete: "cb." + bEb3x };
        this.oq6k = a0x.qE7x({ src: bUt6n, hidden: false, parent: this.o1x, onready: this.Ng4k.g1x(this), width: e1x.box.width, height: e1x.box.height, params: { flashvars: k1x.tW8O(lJ5O, "&", false), allowscriptaccess: "always", wmode: "transparent" } })
    };
    b1x.bC2x = function() {
        this.bH2x();
        this.o1x.innerHTML = ""
    };
    b1x.Ng4k = function(hg4k) { this.oq6k = hg4k };
    b1x.gb3x = function(iB5G) { this.oq6k.upload(iB5G) };
    b1x.bUx6r = function() { this.oq6k.cancle() };
    b1x.qn7g = function(Bi0x) { this.oq6k.disable(Bi0x) }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        dP3x = c1x("nej.g"),
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        bI2x = c1x("nej.ui"),
        l1x = c1x("nm.x"),
        L1x = c1x("nm.w"),
        b1x, K1x;
    var hQ4U = a0x.rD8v(".#<uispace>{position:absolute;z-index:100;overflow:hidden;cursor:pointer;}.#<uispace> .hfile{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;opacity:0;filter:Alpha(opacity=0);font-size:12px;font-size:16px;*font-size:15px;}");
    var gd3x = a0x.hO4S('<div class="' + hQ4U + '"><form><input multiple="multiple" type="file" name="uploadfile" class="hfile" size="70"></form></div>');
    L1x.bju9l = NEJ.C();
    b1x = L1x.bju9l.O1x(L1x.XX7Q);
    K1x = L1x.bju9l.cg2x;
    b1x.bZ2x = function() {
        this.kM5R = hQ4U;
        this.ca2x = gd3x
    };
    b1x.bR2x = function() {
        this.cb2x();
        var bn2x = a0x.cQ2x(this.o1x);
        this.bw2x = bn2x[0];
        h1x.q1x(this.bw2x.uploadfile, "change", this.qm7f.g1x(this))
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.bUs6m = e1x.api || "";
        this.XZ7S = e1x.multiple;
        this.bw2x.multiple = this.XZ7S ? "coverImgUrl" : "";
        this.bw2x.reset();
        this.Yc7V = [];
        this.Ye7X = {};
        var bv2x = { music: "audio/mp3,audio/x-m4a,audio/m4a", image: "image/*" };
        if (e1x.accept || e1x.htmlAccept) { this.bw2x.uploadfile.accept = bv2x[e1x.accept] || e1x.accept || e1x.htmlAccept }
        if (e1x.tipTitle) { this.bw2x.uploadfile.title = e1x.tipTitle }
    };
    b1x.bC2x = function() {
        this.bH2x();
        this.bjJ0x();
        this.bw2x.reset();
        delete this.Yc7V;
        delete this.Ye7X;
        this.bw2x.uploadfile.accept = "*"
    };
    b1x.qm7f = function(d1x) {
        var bEa3x = this.bw2x.uploadfile.files,
            bDZ3x = [];
        if (!this.XZ7S) {
            this.Yc7V = [];
            this.Ye7X = {}
        }
        for (var i = 0, ii = bEa3x.length; i < ii; i++) {
            var Yl7e = this.bUg6a(bEa3x[i]);
            this.Yc7V.push(Yl7e);
            this.Ye7X[Yl7e.uuid] = Yl7e;
            bDZ3x.push(Yl7e);
            if (!this.XZ7S) break
        }
        this.ls5x(bDZ3x);
        this.bw2x.reset()
    };
    b1x.bjJ0x = function() {
        if (this.bDV3x) {
            this.bDM3x = true;
            v1x.jl5q(this.Fz1x);
            this.bDM3x = false;
            delete this.bDV3x;
            delete this.Fz1x
        }
    };
    b1x.bUg6a = function(dx3x) {
        return { uuid: "file-" + +(new Date) + k1x.nb6V(5), name: dx3x.name, size: dx3x.size, refernce: dx3x }
    };
    b1x.gb3x = function(iB5G) {
        this.bjJ0x();
        var dx3x = this.XZ7S ? this.Ye7X[iB5G] : this.Yc7V[0],
            j1x = new FormData,
            nA6u = {};
        if (dx3x) {
            nA6u[dP3x.xG9x] = dP3x.DL1x;
            j1x.append("fileupload", dx3x.refernce);
            this.bDV3x = dx3x;
            this.Fz1x = v1x.br2x(this.bUs6m, { type: "json", method: "post", headers: nA6u, data: j1x, timeout: 0, onload: this.xV9M.g1x(this, iB5G), onerror: this.xV9M.g1x(this, iB5G), onuploading: this.bTR6L.g1x(this, iB5G) })
        }
    };
    b1x.xV9M = function(iB5G, d1x) {
        d1x.uuid = iB5G;
        if (d1x.code == 200) { this.tk8c(d1x) } else {
            if (!this.bDM3x) { this.ek3x(d1x) }
        }
    };
    b1x.bTR6L = function(iB5G, d1x) {
        d1x.uuid = iB5G;
        this.sg8Y(d1x)
    };
    b1x.bTO6I = function() { this.bjJ0x() };
    b1x.qn7g = function(Bi0x) {
        if (Bi0x) { this.bp2x() } else { this.M1x() }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        L1x = c1x("nm.w"),
        bTM6G = typeof FormData != "undefined";
    L1x.By0x = NEJ.C();
    L1x.By0x.O1x(bTM6G ? L1x.bju9l : L1x.bjj9a)
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        dP3x = c1x("nej.g"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        fh3x = c1x("nej.n"),
        H1x = c1x("nej.ut"),
        bd1x = c1x("nej.ui"),
        D1x = c1x("nm.w"),
        n1x = c1x("nm.l"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        L1x = c1x("nm.x.f"),
        b1x, K1x, bjY0x = { 0: "", "-1": "不能添加重复图片", "-10": "最多只能添加9张", "-3": "请选择不超过5M的图片" },
        bkf0x = 5 * 1024 * 1024,
        cvn2x = 80,
        bTB6v = /\.(bmp|jpg|jpeg|png|gif)$/i;
    D1x.bDC3x = NEJ.C();
    b1x = D1x.bDC3x.O1x(H1x.wI9z);
    b1x.bag7Z = function() {
        return { x: this.Az0x.clientWidth - this.o1x.offsetWidth, y: this.Az0x.clientHeight - this.o1x.offsetHeight }
    };
    D1x.bkm0x = NEJ.C();
    b1x = D1x.bkm0x.O1x(bd1x.er3x);
    b1x.bZ2x = function() { this.ca2x = "m-xwgt-share-upload" };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.Ym7f = i1x.shift();
        this.BC0x = i1x.shift();
        this.Mk3x = i1x.shift();
        this.bTz6t = { onselect: this.bDB3x.ed3x(this, 0), onerror: this.ek3x.g1x(this), oncomplete: this.tk8c.g1x(this), multiple: true, parent: this.BC0x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 60, height: 60, top: 0, left: 0 }, tipTitle: "上传图片" };
        this.bDz3x = { onselect: this.bDB3x.ed3x(this, 1), onerror: this.ek3x.g1x(this), oncomplete: this.tk8c.g1x(this), multiple: true, parent: this.BC0x, api: "/upload/event/img", htmlAccept: "image/bmp,image/jpg,image/jpeg,image/png,image/gif", flashAccept: "图片(*.bmp;*.jpg;*.jpeg;*.png;*.gif;)", box: { width: 20, height: 20, top: 0, left: 0 }, tipTitle: "上传图片" };
        this.bTs6m = D1x.By0x.B1x(this.bTz6t)
    };
    b1x.bC2x = function() {
        h1x.ip4t(this.rI8A, "click");
        if (!!this.fk3x) {
            for (var i = this.fk3x.length - 1; i >= 0; i--) {
                a0x.cH2x(this.fk3x[i].element, false);
                if (this.fk3x[i].dragger) this.fk3x[i].dragger.S1x()
            }
        }
        this.fk3x = [];
        this.Yx7q = {};
        if (this.yh9Y) { clearTimeout(this.yh9Y) }
        this.yh9Y = 0;
        this.Fr1x && this.Fr1x.S1x();
        delete this.Fr1x;
        this.bH2x()
    };
    b1x.bDB3x = function(i1x, s1x) {
        if (!i1x) return;
        for (var i = 0, len = i1x.length; i < len; i++) {
            if (!bTB6v.test(i1x[i].name)) { this.bkH0x({ path: i1x[i].name, index: s1x, uuid: i1x[i].uuid, status: -4, fail: "这不是<br>图片" }) } else if (i1x[i].size > bkf0x) {
                this.bkL0x(-3);
                this.bkH0x({ path: i1x[i].name, index: s1x, uuid: i1x[i].uuid, status: -3, fail: "上传<br>失败" })
            } else { this.bkH0x({ path: i1x[i].name, index: s1x, uuid: i1x[i].uuid, status: 0 }) }
        }
    };
    b1x.ek3x = function(d1x) {
        var dx3x = this.Yx7q[d1x.uuid];
        dx3x.status = -4;
        dx3x.fail = "上传<br>失败";
        this.bDy3x(dx3x);
        this.yk9b()
    };
    b1x.tk8c = function(d1x) {
        var dx3x = this.Yx7q[d1x.uuid];
        dx3x.status = 2;
        var bt2x = NEJ.X({}, d1x.picInfo);
        bt2x.originId = bt2x.originIdStr;
        bt2x.squareId = bt2x.squareIdStr;
        bt2x.rectangleId = bt2x.rectangleIdStr;
        bt2x.pcSquareId = bt2x.pcSquareIdStr;
        bt2x.pcRectangleId = bt2x.pcRectangleIdStr;
        bt2x.originJpgId = bt2x.originJpgIdStr || bt2x.originJpgId;
        dx3x.picInfo = bt2x;
        dx3x.picUrl = d1x.picInfo.pcSquareUrl;
        this.bDy3x(dx3x);
        this.yk9b()
    };
    b1x.bkH0x = function(dx3x) {
        if (this.fk3x.length >= 9) {
            this.bkL0x(-10, 3e3, this.bDx3x.g1x(this));
            return
        }
        this.bTo6i(dx3x);
        this.fk3x.push(dx3x);
        this.Yx7q[dx3x.uuid] = dx3x;
        if (!!this.fk3x.length) { this.o1x.style.display = "" }
        if (this.fk3x.length >= 9) { this.BC0x.style.display = "none" } else { this.BC0x.style.display = "" }
        this.yk9b()
    };
    b1x.yk9b = function() {
        var bkQ0x = -1,
            bDw3x = 0;
        for (var i = 0, l = this.fk3x.length; i < l; i++) {
            if (this.fk3x[i].status == 1) {
                return
            }
            if (this.fk3x[i].status == 0 && bkQ0x < 0) { bkQ0x = i }
            if (this.fk3x[i].status == 2 || this.fk3x[i].status < 0) { bDw3x++ }
        }
        var r1x = this.fk3x[bkQ0x];
        if (r1x) {
            (r1x.index == 0 ? this.bTs6m : this.Fr1x).gb3x(r1x.uuid);
            r1x.status = 1;
            this.z1x("onstartupload", {})
        } else if (bDw3x == this.fk3x.length) { this.z1x("onfinishupload", {}) }
    };
    b1x.bkL0x = function(s1x, jM5R, ga3x) {
        if (this.LI3x < s1x) {
            return
        }
        if (this.yh9Y) {
            clearTimeout(this.yh9Y);
            this.yh9Y = 0
        }
        if (jM5R) {
            this.Mk3x.innerText = bjY0x[s1x * 1];
            this.LI3x = s1x;
            this.yh9Y = setTimeout(this.Yz7s.g1x(this, s1x, ga3x), jM5R)
        } else {
            this.Mk3x.innerText = bjY0x[s1x];
            this.LI3x = s1x
        }
        this.Mk3x.style.display = ""
    };
    b1x.Yz7s = function(s1x, ga3x) {
        if (s1x && this.LI3x !== s1x) {
            return
        }
        this.LI3x = 0;
        this.Mk3x.innerText = bjY0x[0];
        this.Mk3x.style.display = "none";
        ga3x && ga3x()
    };
    b1x.bTo6i = function(dx3x) {
        var j1x = {};
        if (dx3x.fail) { j1x.fail = dx3x.fail }
        var dq3x = a0x.bP2x("m-xwgt-share-upload-preview", j1x);
        dx3x.element = a0x.mI6C(dq3x);
        h1x.q1x(a0x.I1x(dx3x.element, "del")[0], "mousedown", this.bTg6a.g1x(this, dx3x), false);
        this.Ym7f.insertBefore(dx3x.element, this.Ym7f.lastElementChild);
        dx3x.dragger = D1x.bDC3x.B1x({ view: this.Ym7f.parentNode, body: dx3x.element, overflow: false, direction: 0, isRelative: 1, ondragstart: this.Os4w.g1x(this, dx3x), onchange: this.bTf6Z.g1x(this, dx3x), ondragend: this.bqr1x.g1x(this, dx3x) })
    };
    b1x.bDy3x = function(dx3x) {
        if (!dx3x || !dx3x.element) {
            return false
        }
        var j1x = {};
        if (dx3x.fail) { j1x.fail = dx3x.fail } else { j1x.url = dx3x.picUrl }
        a0x.x1x(dx3x.element, "z-fail");
        dx3x.element.firstChild.outerHTML = a0x.bP2x("m-xwgt-share-upload-preview-img", j1x)
    };
    b1x.Os4w = function(r1x, jE5J) { a0x.x1x(r1x.element, "z-sel") };
    b1x.bTf6Z = function(r1x, jE5J) {
        var cvo2x, gv3x = this.fk3x.length - 1,
            oy6s;
        for (var i = gv3x; i >= 0; i--) {
            a0x.w1x(this.fk3x[i].element, "z-jump");
            if (this.fk3x[i] == r1x) { oy6s = i } else { a0x.fx3x(this.fk3x[i].element, { left: "", top: "" }) }
        }
        var Ls3x = { x: 46 + 92 * (oy6s % 5) + jE5J.left, y: 46 + 92 * (oy6s / 5 >> 0) + jE5J.top };
        var blb0x = Ls3x.x / 92 >> 0,
            blc0x = Ls3x.y / 92 >> 0,
            wR9I = Math.max(0, Math.min(gv3x, blc0x * 5 + blb0x));
        if (wR9I == oy6s) {
            return
        }
        var bTa6U = wR9I < oy6s;
        for (var i = Math.min(wR9I, oy6s); i <= Math.max(wR9I, oy6s); i++) {
            if (i !== oy6s) {
                var bDr3x = i % 5;
                if (bTa6U) {
                    if (bDr3x == 4) { a0x.fx3x(this.fk3x[i].element, { left: "-368px", top: "92px" }) } else { a0x.fx3x(this.fk3x[i].element, { left: "92px", top: "" }) }
                } else {
                    if (bDr3x == 0) { a0x.fx3x(this.fk3x[i].element, { left: "368px", top: "-92px" }) } else { a0x.fx3x(this.fk3x[i].element, { left: "-92px", top: "" }) }
                }
            }
        }
    };
    b1x.bqr1x = function(r1x, jE5J) {
        var cvp2x, gv3x = this.fk3x.length - 1,
            oy6s;
        for (var i = gv3x; i >= 0; i--) {
            a0x.fx3x(this.fk3x[i].element, { left: "", top: "" });
            if (this.fk3x[i] == r1x) { oy6s = i }
        }
        a0x.w1x(r1x.element, "z-sel");
        var Ls3x = { x: 46 + 92 * (oy6s % 5) + jE5J.left, y: 46 + 92 * (oy6s / 5 >> 0) + jE5J.top };
        var blb0x = Ls3x.x / 92 >> 0,
            blc0x = Ls3x.y / 92 >> 0,
            wR9I = Math.max(0, Math.min(gv3x, blc0x * 5 + blb0x));
        if (wR9I == oy6s) {
            return
        }
        this.Ym7f.insertBefore(r1x.element, (this.fk3x[wR9I + (wR9I > oy6s ? 1 : 0)] || {}).element || this.BC0x);
        this.fk3x.splice(oy6s, 1);
        this.fk3x.splice(wR9I, 0, r1x)
    };
    b1x.bTg6a = function(r1x, d1x) {
        a0x.cH2x(r1x.element, false);
        if (r1x.dragger) r1x.dragger.S1x();
        delete r1x.dragger;
        var s1x = -1;
        for (var i = this.fk3x.length - 1; i >= 0; i--) {
            if (this.fk3x[i] == r1x) {
                s1x = i;
                break
            }
        }
        this.fk3x.splice(s1x, s1x >= 0 ? 1 : 0);
        delete r1x;
        if (this.fk3x.length >= 9) { this.BC0x.style.display = "none" } else { this.BC0x.style.display = "" }
        if (!this.fk3x.length) {
            this.o1x.style.display = "none";
            this.Yz7s(0)
        } else { this.bDx3x() }
        this.yk9b()
    };
    b1x.bDx3x = function() {
        var bDo3x = false;
        for (var i = 0, len = this.fk3x.length; i < len; i++) {
            if (this.fk3x[i].status == -3) { bDo3x = true }
        }
        if (bDo3x) { this.bkL0x(-3) } else { this.Yz7s(-3) }
    };
    b1x.Li3x = function() {
        var ec3x = [];
        for (var i = this.fk3x.length - 1; i >= 0; i--) {
            if (this.fk3x[i].status == 2) { ec3x.unshift(this.fk3x[i].picInfo) }
        }
        return ec3x
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.bDz3x.parent = e1x.button;
        this.Fr1x && this.Fr1x.S1x();
        this.Fr1x = D1x.By0x.B1x(this.bDz3x);
        this.o1x.style.display = "none";
        if (!!this.fk3x) {
            for (var i = this.fk3x.length - 1; i >= 0; i--) {
                a0x.cH2x(this.fk3x[i].element, false);
                if (this.fk3x[i].dragger) this.fk3x[i].dragger.S1x()
            }
        }
        this.fk3x = [];
        this.Yx7q = {};
        if (this.yh9Y) { clearTimeout(this.yh9Y) }
        this.Yz7s(0);
        this.LI3x = 0
    };
    H1x.fs3x.B1x({ element: D1x.bkm0x, event: ["onstartupload", "onfinishupload"] })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        eX3x = NEJ.R,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        bd1x = c1x("nej.ui"),
        N1x = c1x("nej.ut"),
        b1x, K1x;
    if (!!N1x.ne6Y) return;
    N1x.ne6Y = NEJ.C();
    b1x = N1x.ne6Y.O1x(N1x.WQ6K);
    K1x = N1x.ne6Y.cg2x;
    b1x.bk1x = function(e1x) {
        this.bSQ6K(e1x.more);
        this.YG7z = a0x.y1x(e1x.sbody);
        this.bT2x([
            [this.YG7z, "scroll", this.bSN6H.g1x(this)]
        ]);
        var dh2x = e1x.delta;
        if (dh2x == null) dh2x = 30;
        this.Lc3x = Math.max(0, dh2x);
        var cv2x = parseInt(e1x.count) || 0;
        this.iK5P = Math.max(0, cv2x);
        var fn3x = parseInt(e1x.number) || 0;
        if (fn3x > 1 && fn3x <= cv2x) { this.zq0x = fn3x }
        this.bl1x(e1x)
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.yC9t;
        delete this.YG7z;
        delete this.rs7l;
        delete this.YH7A
    };
    b1x.yX0x = function(bj1x, bq2x) {
        var bE2x = this.vR9I + (this.iK5P - 1) * this.qC7v,
            fX3x = this.iK5P * this.qC7v;
        return K1x.yX0x.call(this, bE2x, bj1x, fX3x, bq2x)
    };
    b1x.bSQ6K = function(YN7G) {
        this.yC9t = a0x.y1x(YN7G);
        this.bT2x([
            [this.yC9t, "click", this.nL6F.g1x(this)]
        ])
    };
    b1x.blO0x = function(E1x) {
        E1x = E1x || {};
        if (this.rs7l || !E1x) return;
        if (!E1x.scrollHeight) E1x = a0x.om6g();
        var bj1x = a0x.hL4P(this.ic4g),
            dh2x = bj1x.y + this.ic4g.offsetHeight - E1x.scrollTop - E1x.clientHeight,
            blP0x = E1x.scrollHeight <= E1x.clientHeight;
        if (dh2x <= this.Lc3x || blP0x && !this.rs7l) { this.nL6F() }
    };
    b1x.bSN6H = function(d1x) {
        if (this.rs7l) return;
        this.blO0x(h1x.U1x(d1x))
    };
    b1x.yR0x = function(d1x) {
        K1x.yR0x.apply(this, arguments);
        if (!d1x.stopped) {
            this.JB3x();
            var bj1x = 0;
            if (d1x.index > 1) { bj1x = this.vR9I + ((d1x.index - 1) * this.iK5P - 1) * this.qC7v }
            this.hM4Q = bj1x;
            this.nL6F()
        }
    };
    b1x.bFb3x = function(e1x) {
        if (!!this.zq0x) {
            var dh2x = e1x.offset > 0 ? this.qC7v : this.vR9I,
                fX3x = dh2x + this.qC7v * (this.zq0x - 1);
            this.hM4Q = e1x.offset + fX3x;
            e1x.data.limit = fX3x;
            e1x.limit = fX3x;
            delete this.zq0x
        }
        return e1x
    };
    b1x.bem8e = function(e1x) {
        delete this.YH7A;
        K1x.bem8e.apply(this, arguments);
        this.brc1x()
    };
    b1x.beo8g = function(d1x) {
        if (d1x.key != this.iu5z.key) return;
        switch (d1x.action) {
            case "refresh":
            case "append":
                delete this.YH7A;
                break
        }
        K1x.beo8g.apply(this, arguments)
    };
    b1x.Ru5z = function() {
        this.vN9E("onbeforelistload", "列表加载中...");
        a0x.X1x(this.yC9t, "display", "none")
    };
    b1x.bfe9V = function(i1x, bj1x, fX3x) {
        var bq2x = i1x.length,
            blS0x = i1x.loaded ? bj1x + fX3x >= bq2x : bj1x + fX3x > bq2x;
        this.hM4Q = Math.min(this.hM4Q, bq2x);
        a0x.X1x(this.yC9t, "display", blS0x ? "none" : "");
        if (blS0x) this.rs7l = !0;
        if (this.iK5P > 0) {
            var bt2x = this.yX0x(bj1x, i1x.length);
            if (this.bFa3x(bt2x.index, bt2x.total)) return !0;
            var dh2x = this.vR9I - this.qC7v,
                fn3x = this.iK5P * this.qC7v;
            this.rs7l = (bj1x + fX3x - dh2x) % fn3x == 0 || blS0x;
            a0x.X1x(this.yC9t, "display", this.rs7l ? "none" : "");
            this.beM8E(this.rs7l && bt2x.total > 1 ? "" : "none")
        }
    };
    b1x.bfd9U = function() {
        this.hM4Q = 0;
        this.rs7l = !0;
        this.vN9E("onemptylist", "没有列表数据！")
    };
    b1x.Rl5q = function(dq3x, jE5J) { this.ic4g.insertAdjacentHTML(jE5J || "beforeEnd", dq3x) };
    b1x.Ri5n = function(gw3x) {
        this.fd3x = this.fd3x || [];
        if (k1x.em3x(gw3x)) { eX3x.push.apply(this.fd3x, gw3x) } else { this.fd3x.push(gw3x) }
    };
    b1x.WV6P = function(d1x) {
        a0x.mm6g(this.ci2x);
        this.QT5Y(d1x, "onafteradd");
        var ex3x = d1x.flag;
        if (d1x.stopped || !ex3x) return;
        if (this.iK5P > 0) {
            this.beO8G();
            return
        }
        this.hM4Q += 1;
        ex3x == -1 ? this.bfK9B(d1x.data) : this.bEZ3x(d1x.data)
    };
    b1x.WZ6T = function(d1x) {
        this.QT5Y(d1x, "onafterdelete");
        if (d1x.stopped) return;
        if (this.iK5P > 0) {
            this.beO8G();
            return
        }
        var C1x = d1x.data[this.eJ3x.pkey];
        if (!!this.fd3x) {
            var r1x = a0x.bLA5F(C1x),
                s1x = k1x.cV2x(this.fd3x, r1x);
            if (s1x >= 0) {
                this.fd3x.splice(s1x, 1);
                this.hM4Q -= 1
            }
            if (!!r1x) r1x.S1x()
        } else {
            var f1x = a0x.y1x(this.bFl4p(C1x));
            if (!!f1x) this.hM4Q -= 1;
            a0x.cH2x(f1x)
        }
        if (this.hM4Q <= 0) this.nL6F()
    };
    b1x.bfA9r = function(bj1x, fX3x) {
        if (bj1x != this.hM4Q) return;
        if (this.RG5L()) {
            this.rs7l = !1;
            this.brc1x()
        }
    };
    b1x.bfD9u = function(bj1x, fX3x) {
        if (bj1x != 0) return;
        var Hk2x = this.P1x.gR3x(this.iu5z.key);
        for (var i = fX3x - 1; i >= 0; i--) { this.bfK9B(Hk2x[i]) }
    };
    b1x.brc1x = function() {
        var E1x = this.YG7z;
        if (!E1x || this.rs7l) return;
        this.blO0x(this.YG7z)
    };
    b1x.gn3x = function() {
        delete this.rs7l;
        K1x.gn3x.apply(this, arguments)
    };
    b1x.nL6F = function() {
        if (!!this.YH7A) return;
        this.YH7A = !0;
        var bj1x = this.hM4Q;
        this.hM4Q += bj1x == 0 ? this.vR9I : this.qC7v;
        this.bFc3x(bj1x)
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        cN2x = c1x("nej.x"),
        N1x = c1x("nej.ut"),
        b1x;
    if (!!N1x.Cn0x) return;
    N1x.Cn0x = NEJ.C();
    b1x = N1x.Cn0x.O1x(N1x.cz2x);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.hW4a = e1x.event || "click";
        this.jK5P = e1x.selected || "js-selected";
        this.mH6B = e1x.disabled || "js-disabled";
        this.bDf3x = !!e1x.inverse;
        this.bSy6s(e1x.list);
        this.Fl1x(e1x.index || 0)
    };
    b1x.bC2x = function() {
        var bSx6r = function(f1x) { this.bmi0x(f1x, !1) };
        return function() {
            this.bH2x();
            k1x.be1x(this.bU2x, bSx6r, this);
            delete this.bU2x;
            delete this.hW4a;
            delete this.co2x;
            delete this.mH6B;
            delete this.jK5P;
            delete this.bDf3x
        }
    }();
    b1x.bSy6s = function() {
        var bcU8M = function(r1x) {
            if (!r1x) return;
            this.bU2x.push(r1x);
            var s1x = this.bU2x.length - 1,
                db2x = this.bmk0x[s1x];
            if (!db2x) {
                db2x = this.Fl1x.g1x(this, s1x);
                this.bmk0x[s1x] = db2x
            }
            this.bT2x([
                [r1x, this.hW4a, db2x]
            ])
        };
        return function(i1x) {
            this.bU2x = [];
            if (!this.bmk0x) this.bmk0x = [];
            k1x.be1x(i1x, bcU8M, this)
        }
    }();
    b1x.bmi0x = function(E1x, bSw6q) {!!bSw6q && !this.bDf3x ? a0x.x1x(E1x, this.jK5P) : a0x.w1x(E1x, this.jK5P) };
    b1x.Fl1x = function(s1x, KP3x, j1x) {
        var E1x = this.bU2x[s1x];
        if (KP3x != !0 && (s1x == this.co2x || !E1x || a0x.bz2x(E1x, this.mH6B))) {
            h1x.cd2x(arguments[1]);
            return this
        }
        var d1x = { index: s1x, last: this.co2x, list: this.nC6w(), data: j1x || a0x.u1x(E1x, "value") };
        this.co2x = s1x;
        E1x = this.bU2x[d1x.last];
        if (!!E1x) this.bmi0x(E1x, !1);
        E1x = this.bU2x[this.co2x];
        this.bmi0x(E1x, !0);
        this.z1x("onchange", d1x);
        if (!d1x.nostop) h1x.cd2x(arguments[1]);
        return this
    };
    b1x.rK8C = function() {
        return this.co2x
    };
    b1x.nC6w = function() {
        return this.bU2x
    };
    a0x.bSt6n = cN2x.bSt6n = function(bB2x, e1x) {
        var C1x = a0x.kB5G(bB2x);
        if (!C1x) return null;
        if (!N1x.Wu6o(C1x, N1x.Cn0x)) {
            e1x = e1x || {};
            e1x.list = !e1x.clazz ? a0x.cQ2x(C1x) : a0x.I1x(C1x, e1x.clazz);
            delete e1x.clazz
        }
        return N1x.Wu6o(C1x, N1x.Cn0x, e1x || Y1x)
    };
    cN2x.isChange = !0
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        l1x = c1x("nm.x");
    var SETTING_KEY = "player-setting";
    var lZ6T = { mode: 4, volume: .8, autoPlay: false, index: 0, lock: false };
    lZ6T = v1x.sw8o(SETTING_KEY) || lZ6T;
    l1x.bmr0x = function() {
        return lZ6T
    };
    l1x.Fk1x = function(Cu0x) {
        if (Cu0x) {
            lZ6T = Cu0x;
            v1x.uV8N(SETTING_KEY, Cu0x)
        }
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        l1x = c1x("nm.x"),
        p1x = c1x("nm.d"),
        gM3x = c1x("nm.w.player.log");
    var kI5N = p1x.hI4M.B1x();
    var LogLevel = { ERROR: 10, INFO: 6, DEBUG: 2 };
    var ml6f = function(t1x, bF2x, pb7U) {
        var da2x = l1x.eP3x("{0} {1} {2}", k1x.iU5Z(new Date, "yyyy-MM-dd HH:mm:ss"), t1x, bF2x);
        if (pb7U == LogLevel.ERROR) { kI5N.gm3x("playerror", { message: bF2x }) }
        if (pb7U >= LogLevel.INFO) { kI5N.ciF9w(da2x) }
        if (location.hostname.indexOf("igame.163.com") != -1) { console.log(da2x) }
    };
    gM3x.bX2x = function() { ml6f("PLAY_ERROR", l1x.eP3x.apply(null, arguments), LogLevel.ERROR) };
    gM3x.ok6e = function() { ml6f("PLAY_INFO", l1x.eP3x.apply(null, arguments), LogLevel.INFO) };
    gM3x.cvr2x = function() { ml6f("PLAY_DEBUG", l1x.eP3x.apply(null, arguments), LogLevel.DEBUG) }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        k1x = c1x("nej.u"),
        D1x = c1x("nm.w"),
        ga3x = c1x("flash.cb");
    var dG3x = ["loadedmetadata", "play", "pause", "ended", "waiting", "playing", "timeupdate", "progress", "stalled", "error"];
    var Cz0x, Zc7V, sZ8R;
    D1x.bSq6k = function(t1x, dt3x) {
        if (t1x != "flash") {
            if (!Cz0x) {
                Cz0x = a0x.cU2x("audio");
                k1x.be1x(dG3x, function(t1x) { h1x.q1x(Cz0x, t1x, onMediaCallBack) })
            }
            if (Cz0x && Cz0x.canPlayType && Cz0x.canPlayType("audio/mpeg")) {
                dt3x(new MediaWrap("audio"));
                return
            }
        }
        if (!Zc7V) {
            a0x.qE7x({
                src: "/style/swf/music/music.swf?v=20151204",
                hidden: true,
                params: { allowscriptaccess: "always" },
                onready: function(hg4k) {
                    Zc7V = hg4k;
                    k1x.be1x(dG3x, function(t1x) {
                        ga3x[t1x] = onMediaCallBack;
                        Zc7V.addCallback(t1x, "flash.cb." + t1x)
                    });
                    dt3x(new MediaWrap("flash"))
                }.g1x(this)
            })
        } else { dt3x(new MediaWrap("flash")) }
    };

    function MediaWrap(CD0x) {
        var lV6P;
        H1x.fs3x.B1x({ element: this, event: dG3x.concat(["interrupt", "recover"]) });
        lV6P = CD0x == "audio" ? Cz0x : Zc7V;
        this.type = CD0x;
        this.destroy = function() {};
        this.setSrc = function(V1x) {
            if (sZ8R != this) {
                var gv3x = sZ8R;
                if (gv3x) { gv3x.interrupt() }
                sZ8R = this
            }
            if (CD0x == "flash") { lV6P.setSrc(V1x) } else { lV6P.src = V1x }
        };
        this.play = function() {
            if (sZ8R != this) {
                var gv3x = sZ8R;
                if (gv3x) {
                    gv3x.interrupt();
                    sZ8R = this;
                    this.recover()
                } else { sZ8R = this }
            }
            if (CD0x == "flash") { lV6P.as_play() } else { lV6P.play() }
        };
        this.pause = function() {
            if (sZ8R != this) return;
            if (CD0x == "flash") { lV6P.as_pause() } else { lV6P.pause() }
        };
        this.load = function() {
            if (sZ8R != this) return;
            if (CD0x == "flash") { lV6P.as_load() } else { lV6P.load() }
        };
        this.interrupt = function() { onMediaCallBack({ type: "interrupt" }) };
        this.recover = function() { onMediaCallBack({ type: "recover" }) };
        this.getMedia = function() {
            return lV6P
        };
        var nh6b = ["Src", "Duration", "CurrentTime", "Paused", "Ended", "ReadyState", "Volume", "Error", "Buffered", "NetworkState"];
        k1x.be1x(nh6b, function(T1x) {
            var JZ3x = "get" + T1x,
                JY3x = "set" + T1x;
            if (CD0x == "flash") {
                if (!this[JZ3x]) {
                    this[JZ3x] = function() {
                        return lV6P[JZ3x]()
                    }
                }
                if (!this[JY3x]) { this[JY3x] = function(value) { lV6P[JY3x](value) } }
            } else {
                var bDd3x = T1x.slice(0, 1).toLowerCase() + T1x.slice(1);
                if (!this[JZ3x]) {
                    this[JZ3x] = function() {
                        return lV6P[bDd3x]
                    }
                }
                if (!this[JY3x]) { this[JY3x] = function(value) { lV6P[bDd3x] = value } }
            }
        }, this)
    }

    function onMediaCallBack(d1x) {
        if (sZ8R) { h1x.z1x(sZ8R, d1x.type, d1x) }
    }
})();
(function() {
    var c1x = NEJ.P,
        h1x = c1x("nej.v"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        cK2x = c1x("nej.p"),
        D1x = c1x("nm.w"),
        l1x = c1x("nm.x"),
        gM3x = c1x("nm.w.player.log"),
        b1x;
    var DEFAULT_BR = 128e3;
    var CDN_HOST_REG = /(m\d+\.music\.126\.net)/;
    var MAX_STALLED_RETRY = 2;
    var MediaError = { MEDIA_ERR_ABORTED: 1, MEDIA_ERR_NETWORK: 2, MEDIA_ERR_DECODE: 3, MEDIA_ERR_SRC_NOT_SUPPORTED: 4 };
    var ErrorType = { INFO_GET_ERR: 1, NET_ERR: 2, UNKNOWN_ERR: 10 };
    var LoadState = { LOAD_START: 1, LOADED_META: 2, IN_RELOAD: 3, IN_RE_GET_URL: 4, IN_SWITCH_CDN: 5, IN_SWITCH_MEDIA: 6 };
    var RetryLevel = { NONE: 0, GET_URL: 1, RELOAD: 2, SWITCH_CDN: 3 };
    var bDb3x = false;
    D1x.fm3x = NEJ.C();
    b1x = D1x.fm3x.O1x(H1x.cz2x);
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.ct2x = {};
        this.Zk7d(e1x.media);
        v1x.br2x("/api/cdns", {
            type: "json",
            onload: function(d1x) {
                if (d1x.code) { this.ps7l = d1x.data }
            }.g1x(this)
        })
    };
    b1x.bC2x = function() {
        this.bH2x();
        delete this.ct2x
    };
    b1x.Zl7e = function(bf1x) {
        if (!bf1x) return;
        var zc0x = this.ct2x.volume;
        if (this.dz3x) { this.dz3x.pause() }
        this.ct2x = { time: 0, id: bf1x.id, duration: bf1x.duration / 1e3, play: this.ct2x.play, stalledRetryCount: 0 };
        if (zc0x != null) { this.ct2x.volume = zc0x }
        this.ct2x.loadState = LoadState.LOAD_START;
        this.bCV3x(bf1x.id);
        gM3x.ok6e("play song id: {0}", bf1x.id)
    };
    b1x.eN3x = function() {
        if (this.ct2x.error) {
            this.ct2x.error = null;
            if (this.ct2x.error == ErrorType.INFO_GET_ERR || this.bCS3x()) { this.bCR3x() } else { this.Qo5t() }
        } else {
            if (this.dz3x) { this.dz3x.play() }
        }
        this.ct2x.play = true;
        this.oh6b("play")
    };
    b1x.fp3x = function() {
        if (this.dz3x) { this.dz3x.pause() }
        this.ct2x.play = false;
        this.oh6b("pause")
    };
    b1x.nS6M = function(bA2x) {
        if (this.dz3x) { this.dz3x.setCurrentTime(bA2x) }
        this.ct2x.time = bA2x;
        gM3x.ok6e("seek to: {0}", bA2x)
    };
    b1x.bnV0x = function() {
        return this.ct2x.duration || 0
    };
    b1x.uF8x = function() {
        return !!this.ct2x.play
    };
    b1x.lF5K = function(PR5W) {
        this.ct2x.volume = PR5W;
        if (this.dz3x) { this.dz3x.setVolume(PR5W) }
    };
    b1x.bnZ0x = function() {
        return this.ct2x.time
    };
    b1x.Zk7d = function(t1x) {
        D1x.bSq6k(t1x, function(lV6P) {
            this.dz3x = lV6P;
            gM3x.ok6e("media loaded: {0}", lV6P.type);
            this.bT2x([
                [this.dz3x, "loadedmetadata", this.bSb6V.g1x(this)],
                [this.dz3x, "ended", this.bSa6U.g1x(this)],
                [this.dz3x, "waiting", this.xI9z.g1x(this)],
                [this.dz3x, "play", this.tF8x.g1x(this)],
                [this.dz3x, "pause", this.boe0x.g1x(this)],
                [this.dz3x, "playing", this.NI4M.g1x(this)],
                [this.dz3x, "timeupdate", this.bRZ6T.g1x(this)],
                [this.dz3x, "progress", this.sg8Y.g1x(this)],
                [this.dz3x, "stalled", this.boj0x.g1x(this)],
                [this.dz3x, "interrupt", this.fp3x.g1x(this)],
                [this.dz3x, "recover", this.bRY6S.g1x(this)],
                [this.dz3x, "error", this.ek3x.g1x(this)]
            ]);
            if (this.ct2x) {
                if (this.ct2x.loadState == LoadState.LOAD_START || this.ct2x.loadState == LoadState.IN_SWITCH_MEDIA) {
                    this.bon0x();
                    if (this.ct2x.volume != null) { this.dz3x.setVolume(this.ct2x.volume) }
                }
            }
        }.g1x(this))
    };
    b1x.bRX6R = function(t1x) {
        this.Gn1x();
        this.dz3x.destroy();
        this.ct2x.loadState = LoadState.IN_SWITCH_MEDIA;
        this.xI9z();
        this.Zk7d(t1x);
        gM3x.ok6e("switch media")
    };
    b1x.cvs2x = function() {
        return this.dz3x
    };
    b1x.bCV3x = function() {
        this.xI9z();
        v1x.br2x("/api/song/enhance/player/url", { type: "json", query: { ids: JSON.stringify([this.ct2x.id]), br: DEFAULT_BR }, onload: this.bCP3x.g1x(this), onerror: this.bCP3x.g1x(this) })
    };
    b1x.bCP3x = function(d1x) {
        if (d1x.code == 200 && d1x.data && d1x.data.length) {
            var bt2x = d1x.data[0];
            if (!bt2x.url) {
                this.ct2x.error = ErrorType.INFO_GET_ERR;
                this.oh6b("error", { code: this.ct2x.error });
                return
            }
            this.ct2x.playUrl = bt2x.url;
            this.ct2x.expireTime = (new Date).getTime() + bt2x.expi * 1e3;
            this.bon0x()
        } else {
            this.ct2x.error = ErrorType.INFO_GET_ERR;
            this.oh6b("error", { code: this.ct2x.error });
            gM3x.bX2x("info load error")
        }
    };
    b1x.bon0x = function() {
        if (this.dz3x) {
            var V1x = this.ct2x.playUrl;
            if (this.ct2x.time > 0 && (this.ct2x.loadState == LoadState.IN_RE_GET_URL || this.ct2x.loadState == LoadState.IN_RE_GET_URL)) { V1x += "#t=" + this.ct2x.time }
            this.dz3x.setSrc(V1x);
            gM3x.ok6e("load mp3: {0},loadState: {1}.", V1x, this.ct2x.loadState)
        }
    };
    b1x.bCN3x = function() {
        if (/#t=(\d+)$/.test(this.dz3x.getSrc())) {
            return parseInt(RegExp.$1) || 0
        } else {
            return 0
        }
    };
    b1x.Qo5t = function() {
        var bA2x = parseInt(this.ct2x.time) || 0,
            bRR6L = this.bCN3x();
        if (bA2x === bRR6L) { this.dz3x.load() } else { this.dz3x.setSrc(this.ct2x.playUrl + "#t=" + bA2x) }
        this.ct2x.loadState = LoadState.IN_RELOAD;
        this.xI9z();
        gM3x.ok6e("reload from: {0}", bA2x)
    };
    b1x.bCR3x = function() {
        this.ct2x.loadState = LoadState.IN_RE_GET_URL;
        this.bCV3x()
    };
    b1x.bCK3x = function() {
        var ub8T = getHost(this.ct2x.playUrl);
        if (ub8T) {
            for (var i = 0; i < this.ps7l.length; i++) {
                var jN5S = this.ps7l[i] || [],
                    s1x = jN5S.indexOf(ub8T);
                if (s1x >= 0 && jN5S.length > 1) {
                    return jN5S[(s1x + 1) % jN5S.length]
                }
            }
        }

        function getHost(V1x) {
            if (CDN_HOST_REG.test(V1x)) return RegExp.$1
        }
    };
    b1x.bRN6H = function() {
        this.ct2x.playUrl = this.ct2x.playUrl.replace(CDN_HOST_REG, this.bCK3x());
        this.ct2x.loadState = LoadState.IN_SWITCH_CDN;
        this.bon0x();
        this.xI9z()
    };
    b1x.bSb6V = function() {
        if (this.ct2x.loadState == LoadState.LOAD_START) {
            this.ct2x.loadState = LoadState.LOADED_META;
            if (this.dz3x.type == "audio") { this.ct2x.duration = this.dz3x.getDuration() }
            this.oh6b("loadedmeta", { duration: this.ct2x.duration })
        } else { this.ct2x.loadState = LoadState.LOADED_META }
        if (this.ct2x.play) { this.dz3x.play() } else { this.dz3x.pause() }
        if (this.ct2x.time && parseInt(this.ct2x.time) != this.bCN3x()) { this.dz3x.setCurrentTime(this.ct2x.time) }
        this.EP1x();
        this.NI4M();
        bDb3x = true;
        gM3x.ok6e("loaded meta")
    };
    b1x.bSa6U = function() {
        this.ct2x.ended = true;
        this.oh6b("ended")
    };
    b1x.xI9z = function() {
        if (!this.ct2x.waiting) {
            this.ct2x.waiting = true;
            this.ct2x.waitTimestamp = +(new Date);
            this.oh6b("waiting")
        }
    };
    b1x.NI4M = function() {
        this.ct2x.waiting = false;
        this.ct2x.waitTimestamp = 0;
        this.oh6b("playing")
    };
    b1x.tF8x = function() { this.oh6b("play") };
    b1x.boe0x = function() { this.oh6b("pause") };
    b1x.bRZ6T = function() {
        if (this.ct2x.loadState != LoadState.LOADED_META) return;
        var bA2x = this.dz3x.getCurrentTime();
        if (this.ct2x.waiting && bA2x > this.ct2x.time) { this.NI4M() }
        this.ct2x.time = bA2x;
        this.oh6b("timeupdate", { time: this.ct2x.time, duration: this.ct2x.duration })
    };
    b1x.sg8Y = function(d1x) {
        if (this.ct2x.loadState != LoadState.LOADED_META) return;
        var m1x = {};
        if (d1x.data) {
            m1x.total = d1x.data.total;
            m1x.loaded = d1x.data.loaded
        } else {
            var wX9O = this.dz3x.getBuffered(),
                bA2x = this.dz3x.getCurrentTime(),
                nG6A = 0;
            for (var i = 0; i < wX9O.length; i++) {
                if (bA2x > wX9O.start(i) && bA2x < wX9O.end(i)) {
                    nG6A = wX9O.end(i);
                    break
                }
            }
            m1x.total = this.ct2x.duration;
            m1x.loaded = Math.min(nG6A, m1x.total)
        }
        this.oh6b("progress", m1x)
    };
    b1x.EP1x = function() {
        if (this.ct2x.retry) {
            clearTimeout(this.ct2x.retry.tid);
            this.ct2x.retry = null
        }
    };
    b1x.ek3x = function() {
        var bQ2x = this.dz3x.getError();
        gM3x.bX2x("media error code: {0}, netState: {1}", bQ2x.code, this.dz3x.getNetworkState());
        if (bQ2x.code == MediaError.MEDIA_ERR_NETWORK || bQ2x.code == MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED) {
            var Cu0x = l1x.bmr0x();
            if (!this.ct2x.retry) { this.ct2x.retry = { level: RetryLevel.NONE } } else { window.clearTimeout(this.ct2x.retry.tid) }
            if (this.ct2x.retry.level == RetryLevel.NONE) {
                if (this.bCS3x()) {
                    this.ct2x.retry.level = RetryLevel.GET_URL;
                    this.bCR3x();
                    gM3x.ok6e("Url expired, get url.")
                } else {
                    this.ct2x.retry.level = RetryLevel.RELOAD;
                    this.ct2x.retry.tid = setTimeout(this.Qo5t.g1x(this), 3e3);
                    gM3x.ok6e("Reload mp3 3s later.")
                }
            } else if (this.ct2x.retry.level == RetryLevel.GET_URL) {
                this.ct2x.retry.level = RetryLevel.RELOAD;
                this.ct2x.retry.tid = setTimeout(this.Qo5t.g1x(this), 3e3);
                gM3x.ok6e("Reload mp3 3s later.")
            } else if (this.ct2x.retry.level == RetryLevel.RELOAD) {
                this.ct2x.retry.level = RetryLevel.SWITCH_CDN;
                if (this.bCK3x()) {
                    this.ct2x.retry.tid = setTimeout(this.bRN6H.g1x(this), 5e3);
                    gM3x.ok6e("Switch CDN 5s later.")
                } else {
                    this.ct2x.retry.tid = setTimeout(this.Qo5t.g1x(this), 5e3);
                    gM3x.ok6e("Reload mp3 5s later.")
                }
            } else if (!bDb3x && this.dz3x.type == "audio" && !Cu0x.useFlash && !cK2x.Qy5D.mac && l1x.bbR8J().supported) {
                Cu0x.useFlash = true;
                l1x.Fk1x(Cu0x);
                this.bRX6R("flash")
            } else {
                this.EP1x();
                this.fp3x();
                this.ct2x.error = ErrorType.NET_ERR;
                this.oh6b("error", { code: this.ct2x.error });
                gM3x.bX2x("error can not retry.")
            }
        } else {
            this.EP1x();
            this.fp3x();
            this.ct2x.error = ErrorType.UNKNOWN_ERR;
            this.oh6b("error", { code: this.ct2x.error });
            gM3x.bX2x("error can not retry.")
        }
    };
    b1x.boj0x = function() {
        var gV4Z = 0,
            bCI3x = 5e3;
        return function() {
            this.xI9z();
            clearTimeout(gV4Z);
            setTimeout(function() {
                var fL3x = +(new Date);
                if (this.ct2x.waiting && fL3x - this.ct2x.waitTimestamp >= bCI3x && this.ct2x.stalledRetryCount < MAX_STALLED_RETRY) {
                    gM3x.ok6e("stalled too long retry.");
                    this.ct2x.stalledRetryCount++;
                    this.Qo5t()
                }
            }.g1x(this), bCI3x);
            gM3x.ok6e("stalled")
        }
    }();
    b1x.bCS3x = function() {
        var fL3x = +(new Date);
        return fL3x > this.ct2x.expireTime
    };
    b1x.bRY6S = function() {
        var bA2x = parseInt(this.ct2x.time) || 0;
        this.dz3x.setSrc(this.ct2x.playUrl + "#t=" + bA2x);
        this.ct2x.loadState = LoadState.IN_RELOAD;
        this.xI9z();
        gM3x.ok6e("recover from: {0}", bA2x)
    };
    b1x.oh6b = function(W1x, j1x) { h1x.z1x(D1x.fm3x, "playaction", { action: W1x, data: j1x || {} }) };
    H1x.fs3x.B1x({ element: D1x.fm3x, event: ["playaction"] })
})();
(function() {
    if (!(window == top)) {
        return
    }
    var c1x = NEJ.P,
        h1x = c1x("nej.v"),
        H1x = c1x("nej.ut"),
        D1x = c1x("nm.w"),
        b1x;
    D1x.Dr1x = NEJ.C();
    b1x = D1x.Dr1x.O1x(D1x.fm3x);
    K1x = D1x.Dr1x.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bRL6F = function(bK2x) {
        this.Zl7e(bK2x);
        this.eN3x()
    };
    b1x.boQ0x = function() { this.fp3x() };
    b1x.vh9Y = function(d1x) {
        if (d1x.action == "play") { this.fp3x() }
    };
    b1x.oh6b = function(W1x, j1x) { h1x.z1x(D1x.Dr1x, "tmpplayaction", { action: W1x, data: j1x || {}, tmp: true }) };
    b1x.rl7e = function() {
        return this.ct2x
    };
    H1x.fs3x.B1x({ element: D1x.Dr1x, event: ["tmpplayaction"] })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        fh3x = c1x("nej.n"),
        v1x = c1x("nej.j"),
        H1x = c1x("nej.ut"),
        bd1x = c1x("nej.ui"),
        D1x = c1x("nm.w"),
        n1x = c1x("nm.l"),
        jO5T = c1x("nm.c"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x, ZB7u = [{ item: "m-publish-search-single", type: 1 }, { item: "m-publish-search-artist", type: 100 }, { item: "m-publish-search-album", type: 10 }, { item: "m-publish-search-mv", type: 1004 }, { item: "m-publish-search-playlist", type: 1e3 }, { item: "m-publish-search-djRadio", type: 1009 }];
    var boW0x = { song: 0, artist: 1, album: 2, mv: 3, playlist: 4, djradio: 5 };
    D1x.boX0x = NEJ.C();
    b1x = D1x.boX0x.O1x(bd1x.er3x);
    b1x.cm2x = function(e1x) {
        this.cs2x(e1x);
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.cvt2x = i1x.shift();
        this.bRG6A = i1x.shift();
        this.EO1x = i1x.shift();
        this.bpd1x = i1x.shift();
        this.bpe1x = [i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift(), i1x.shift()];
        this.ZE7x = i1x.shift();
        this.bCC3x = i1x.shift();
        this.pU7N = { list: this.bpe1x, selected: "z-curr", onchange: this.bCB3x.g1x(this) };
        h1x.q1x(this.EO1x, "input", this.ZI7B.g1x(this));
        h1x.q1x(this.EO1x, "propertychange", this.ZI7B.g1x(this));
        h1x.q1x(this.EO1x, "keyup", this.ZI7B.g1x(this));
        h1x.q1x(this.bRG6A, "click", this.ZI7B.g1x(this));
        h1x.q1x(this.ZE7x, "click", this.cw2x.g1x(this));
        h1x.q1x(this.bCC3x, "click", function() { this.z1x("oncancel", {}) }.g1x(this));
        this.P1x = p1x.Cs0x.fU3x();
        this.KN3x = top.nm.w.Dr1x.fU3x();
        H1x.fs3x.B1x({ element: top.nm.w.Dr1x, event: ["tmpplayaction"] });
        this.qU7N = { limit: 100, offset: 0, parent: this.ZE7x, onbeforelistload: this.oQ7J.g1x(this) };
        p1x.sk = "fuck" + a0x.u1x(this.bpd1x, "xname") + "458";
        h1x.q1x(top.nm.w.Dr1x, "tmpplayaction", this.vh9Y.g1x(this))
    };
    b1x.bZ2x = function() { this.ca2x = "m-xwgt-publish-search" };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        if (!!this.zP0x) {
            this.zP0x.S1x();
            delete this.zP0x
        }
        this.pU7N.index = boW0x[e1x.type || "song"];
        this.zP0x = H1x.Cn0x.B1x(this.pU7N);
        this.EO1x.value = "";
        this.EO1x.focus();
        this.tw8o = "";
        this.cxP2x = 0;
        if (e1x.showMV == true) {
            this.bpe1x[boW0x["mv"]].parentNode.style.display = "";
            a0x.x1x(this.bpd1x, "srchtab-1")
        } else {
            this.bpe1x[boW0x["mv"]].parentNode.style.display = "none";
            a0x.w1x(this.bpd1x, "srchtab-1")
        }
        if (!!this.ds3x) { this.ds3x = this.ds3x.S1x() }
        if (e1x.hideBack) { a0x.x1x(this.bCC3x.parentNode, "f-hide") }
    };
    b1x.bC2x = function() {
        this.KN3x.boQ0x();
        this.bH2x()
    };
    b1x.ZI7B = function() {
        var value = this.EO1x.value.trim();
        if (value && value.length) {
            if (value != this.tw8o) {
                this.tw8o = value;
                this.bCB3x({ index: this.zP0x.rK8C() })
            }
        } else {
            if (this.ds3x) { this.ds3x = this.ds3x.S1x() }
        }
        this.tw8o = value
    };
    b1x.cw2x = function() {
        var bRy6s = function(E1x) {
                return a0x.bz2x(E1x, "sitm") || a0x.bz2x(E1x, "itm") || a0x.bz2x(E1x, "mv-item")
            },
            bRx6r = function(E1x) {
                return a0x.bz2x(E1x, "ply")
            },
            bCw3x = function() { n1x.Z1x.M1x({ type: 2, tip: "因合作方要求，该资源需付费使用" }) },
            bRs6m = function() { n1x.Z1x.M1x({ type: 2, tip: "因合作方要求，该资源需下载后播放" }) },
            bpJ1x = function(bf1x) {
                if (bf1x && bf1x.privilege && bf1x.privilege.toast) { v1x.br2x("/api/song/toast", { query: { id: bf1x.id }, type: "json", onload: QJ5O.g1x(this), onerror: QJ5O.g1x(this) }) } else { QP5U() }
            },
            QJ5O = function(Q1x) { QP5U((Q1x || Y1x).toast) },
            QP5U = function(bF2x) { n1x.Z1x.M1x({ type: 2, tip: bF2x || "因合作方要求，该资源暂时下架>_<" }) };
        return function(d1x) {
            var DM1x = h1x.U1x(d1x, bRx6r),
                i1x = h1x.U1x(d1x, bRy6s),
                dX3x = this.KN3x.rl7e();
            if (!!i1x) {
                h1x.bh1x(d1x);
                this.Ks3x = a0x.u1x(i1x, "id");
                this.Kh3x = a0x.u1x(i1x, "type");
                if (this.Kh3x == 18) {
                    var bK2x = this.P1x.eg3x(this.Ks3x),
                        pb7U = l1x.og6a(bK2x);
                    if (!DM1x) {
                        if (pb7U == 10) {
                            bCw3x();
                            return
                        } else if (pb7U == 100) {
                            bpJ1x(bK2x);
                            return
                        }
                    } else {
                        if (pb7U == 10) {
                            bCw3x();
                            return
                        } else if (pb7U == 100) {
                            bpJ1x(bK2x);
                            return
                        } else if (pb7U == 11) {
                            bRs6m();
                            return
                        } else {
                            a0x.w1x(this.zV0x, "z-pause z-loading");
                            if (DM1x == this.zV0x && dX3x.play && !dX3x.ended) { this.KN3x.boQ0x() } else {
                                this.zV0x = DM1x;
                                this.KN3x.bRL6F(bK2x)
                            }
                            return
                        }
                    }
                } else if (this.Kh3x == 70) {
                    if (a0x.bz2x(i1x, "z-noprogram")) {
                        n1x.Z1x.M1x({ type: 2, tip: "不能分享没有节目的电台" });
                        return
                    }
                }
                this.bRq6k()
            }
        }
    }();
    b1x.bRq6k = function() {
        var hp4t = this.P1x.eg3x(this.Ks3x),
            rt7m = l1x.bHr4v(this.Kh3x, hp4t);
        rt7m.title = rt7m.title || "";
        rt7m.author = rt7m.author || "";
        rt7m.picUrl = rt7m.picUrl || "";
        rt7m.authors = rt7m.authors || "";
        if (this.Kh3x == 70) { this.Ks3x = this.Ks3x.slice(0, -4) }
        this.z1x("onfinish", { id: this.Ks3x, type: this.Kh3x, data: rt7m })
    };
    b1x.vh9Y = function(d1x) {
        var j1x = d1x.data;
        if (!this.zV0x) {
            return
        }
        switch (d1x.action) {
            case "play":
                a0x.eu3x(this.zV0x, "z-pause z-play", "z-loading");
                break;
            case "pause":
            case "ended":
                a0x.w1x(this.zV0x, "z-pause z-loading");
                break;
            case "error":
                n1x.Z1x.M1x({ type: 2, tip: "试听遇到问题，播放失败" });
                a0x.w1x(this.zV0x, "z-pause z-loading");
                break;
            case "playing":
                a0x.eu3x(this.zV0x, "z-loading", "z-pause");
                break;
            case "waiting":
                a0x.eu3x(this.zV0x, "z-pause", "z-loading");
                break
        }
    };
    b1x.bRo6i = function(d1x) {
        if (d1x.result.code == 407) {
            this.ZE7x.innerHTML = '<div class="n-norlt s-fc1">根据相关法律法规和政策，搜索结果未予显示</div>';
            return
        }
        this.ZE7x.innerHTML = '<div class="n-norlt s-fc1">页面出错，请稍后再试！</div>'
    };
    b1x.bCB3x = function(d1x) {
        if (!this.tw8o || d1x.index < 0 || d1x.index > 5) {
            return
        }
        this.KN3x.boQ0x();
        var bc1x = ZB7u[d1x.index],
            e1x = NEJ.X({}, this.qU7N);
        e1x.cache = { klass: p1x.Cs0x, clear: true, onerror: this.bRo6i.g1x(this) };
        e1x.cache.lkey = "search-publish-" + bc1x.type + "-" + this.tw8o;
        e1x.item = { klass: bc1x.item, getRestrictLevel: l1x.og6a, dur2time: l1x.lH5M };
        if (!e1x.cache.data) { e1x.cache.data = {} }
        e1x.cache.data.s = this.tw8o;
        e1x.cache.data.type = bc1x.type;
        e1x.cache.data.isPub = true;
        if (bc1x.type == 1) {
            e1x.cache.data.hlpretag = '<span class="s-fc7">';
            e1x.cache.data.hlposttag = "</span>"
        }
        e1x.onemptylist = this.bRk6e.g1x(this, this.tw8o);
        if (!!this.DU1x) this.P1x.tD8v(this.DU1x);
        if (!!this.ds3x) { this.ds3x = this.ds3x.S1x() }
        this.ds3x = H1x.ne6Y.B1x(e1x);
        this.DU1x = e1x.cache.lkey
    };
    b1x.oQ7J = function(d1x) { d1x.value = a0x.hX4b("m-publish-search-loading") };
    b1x.bRk6e = function(J1x, d1x) {
        a0x.dT3x(d1x.parent, "m-publish-emtpy-message", { key: J1x });
        d1x.stopped = true
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        cK2x = c1x("nej.p"),
        v1x = c1x("nej.j"),
        ch2x = c1x("nej.ut"),
        bI2x = c1x("nej.ui"),
        D1x = c1x("nm.w"),
        b1x, K1x;
    var bRj6d = ".j-item.j-selected a{background:#eee;text-decoration:none;color:#333;}";
    D1x.DX1x = NEJ.C();
    b1x = D1x.DX1x.O1x(bI2x.er3x);
    var gd3x = a0x.en3x("m-wgt-receiverInput");
    var bRg6a = a0x.en3x("m-wgt-receiverList");
    var hQ4U = a0x.rD8v(bRj6d);
    var bRf6Z = a0x.en3x('<div data-id=${userId} class="blk s-fc3 j-receiver">${username}<a href="#" class="cls" title="删除">&times;</a></div>');
    b1x.cm2x = function(e1x) {
        this.bb1x = [];
        this.ui8a = e1x.receiver || null;
        this.bRe6Y = e1x.unique || false;
        this.mo6i = e1x.err;
        this.bCp3x(this.bCn3x, e1x.uid);
        this.cs2x(e1x)
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.PN5S();
        this.PD5I();
        this.ZR7K();
        if (e1x.receiver) this.bqQ1x(e1x.receiver.nickname, e1x.receiver.userId);
        a0x.X1x(this.zH0x, "display", "block");
        a0x.X1x(this.bqS1x, "cursor", "text");
        a0x.X1x(this.zH0x, "cursor", "text")
    };
    b1x.bZ2x = function() {
        var j1x = this.bCm3x();
        this.ca2x = a0x.hO4S(a0x.bP2x(gd3x, { receiver: this.ui8a, users: j1x }));
        this.kM5R = hQ4U
    };
    b1x.bR2x = function() {
        this.cb2x();
        var bx2x = a0x.I1x(this.o1x, "j-flag");
        var gw3x = a0x.I1x(this.o1x, "j-item");
        this.bqS1x = bx2x[0];
        this.bCl3x = bx2x[1];
        this.dF3x = bx2x[2];
        this.zH0x = bx2x[3];
        this.ZZ7S = bx2x[4];
        this.bai7b = bx2x[5];
        this.fd3x = gw3x;
        a0x.x1x(this.fd3x[0], "j-selected");
        h1x.q1x(this.dF3x, "keyup", this.baj7c.g1x(this));
        h1x.q1x(this.dF3x, "keydown", this.Mj3x.g1x(this));
        h1x.q1x(this.dF3x, "focus", this.jY5d.g1x(this));
        h1x.q1x(this.ZZ7S, "click", this.bQW6Q.g1x(this));
        h1x.q1x(this.bqS1x, "click", this.bQV6P.g1x(this));
        h1x.q1x(document.body, "click", this.nz6t.g1x(this));
        h1x.q1x(this.dF3x, "input", this.fi3x.g1x(this));
        h1x.q1x(this.dF3x, "blur", this.oD6x.g1x(this))
    };
    b1x.bC2x = function(e1x) {
        h1x.lW6Q(document.body, "click", this.nz6t.g1x(this));
        this.bH2x();
        this.ZR7K();
        this.bQU6O();
        this.nz6t()
    };
    b1x.baj7c = function(d1x) {
        h1x.bh1x(d1x);
        var iY5d = d1x.keyCode || d1x.which;
        var bi1x = this.dF3x.value;
        var bq2x = this.fd3x.length;
        var pS7L = a0x.I1x(this.o1x, "j-selected")[0];
        switch (iY5d) {
            case 13:
                var jW5b = a0x.gA3x(pS7L, "data-username");
                var hu4y = a0x.gA3x(pS7L, "data-userId");
                this.bqQ1x(jW5b, hu4y);
                this.nz6t();
                this.dF3x.value = "";
                break;
            case 38:
                var s1x = a0x.gA3x(pS7L, "data-index") - 1 < 0 ? bq2x - 1 : a0x.gA3x(pS7L, "data-index") - 1;
                a0x.w1x(pS7L, "j-selected");
                a0x.x1x(this.fd3x[s1x], "j-selected");
                break;
            case 40:
                var s1x = parseInt(a0x.gA3x(pS7L, "data-index")) + 1 >= bq2x ? 0 : parseInt(a0x.gA3x(pS7L, "data-index")) + 1;
                a0x.w1x(pS7L, "j-selected");
                a0x.x1x(this.fd3x[s1x], "j-selected");
                break;
            default:
                this.ua8S()
        }
    };
    b1x.Mj3x = function(d1x) {
        var iY5d = d1x.keyCode || d1x.which;
        var bi1x = this.dF3x.value;
        var s1x = a0x.I1x(this.o1x, "j-receiver").length - 1;
        if (iY5d === 8 && bi1x === "") this.bQT6N(s1x)
    };
    b1x.fi3x = function(d1x) {
        var bi1x = this.dF3x.value;
        if (bi1x.length > 10) {
            this.dF3x.value = bi1x.substring(0, 10);
            return
        }
        cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "7.0" ? setTimeout(this.baA7t.g1x(this), 0) : this.baA7t();
        this.PD5I()
    };
    b1x.jY5d = function() {
        if (this.bb1x[0]) this.ua8S();
        else this.bCp3x(this.bQS6M);
        a0x.X1x(this.zH0x, "display", "none")
    };
    b1x.oD6x = function() {
        var bq2x = a0x.I1x(this.o1x, "j-receiver").length;
        if (this.dF3x.value.trim() == "" && bq2x <= 0) a0x.X1x(this.zH0x, "display", "block")
    };
    b1x.bqQ1x = function(jW5b, hu4y) {
        var ED1x = this.Jq3x();
        if (ED1x.length >= 10) {
            this.dw3x();
            return
        }
        var bd1x;
        for (bd1x = 0; bd1x < ED1x.length; bd1x++) {
            if (ED1x[bd1x] == hu4y) {
                this.nz6t();
                return
            }
        }
        if (!jW5b || !hu4y) return;
        var f1x = a0x.dr3x(a0x.hO4S(a0x.bP2x(bRf6Z, { username: jW5b, userId: hu4y })));
        var bB2x = this.bCl3x.parentNode;
        if (this.bRe6Y) { this.ZR7K() }
        bB2x.insertBefore(f1x, this.bCl3x);
        this.dF3x.value = "";
        var bq2x = a0x.I1x(this.o1x, "j-receiver").length;
        if (bq2x > 1) a0x.X1x(this.zH0x, "display", "none");
        this.baA7t();
        this.PD5I()
    };
    b1x.ZR7K = function() {
        var Pb5g = a0x.I1x(this.o1x, "j-receiver");
        var bd1x;
        if (Pb5g.length > 0) {
            for (bd1x = 0; bd1x < Pb5g.length; bd1x++) { a0x.cH2x(Pb5g[bd1x], false) }
        }
    };
    b1x.bQU6O = function() { this.dF3x.value = "" };
    b1x.bQT6N = function(s1x) {
        this.dw3x(!0);
        var Pb5g = a0x.I1x(this.o1x, "j-receiver");
        a0x.cH2x(Pb5g[s1x], false);
        this.PD5I()
    };
    b1x.ua8S = function() {
        var bi1x = this.dF3x.value;
        var bD2x = bi1x.trim().toLowerCase();
        var j1x;
        bD2x = bD2x.replace(/\[/g, "\\[");
        bD2x = bD2x.replace(/\]/g, "\\]");
        j1x = this.bCm3x(bD2x);
        this.bQR6L(j1x)
    };
    b1x.nz6t = function(d1x) { a0x.X1x(this.ZZ7S, "display", "none") };
    b1x.dw3x = function(gy3x) {
        if (gy3x && this.mo6i) {
            a0x.X1x(this.mo6i, "display", "none");
            return
        }
        if (this.mo6i) a0x.X1x(this.mo6i, "display", "block")
    };
    b1x.bQW6Q = function(d1x) {
        h1x.cd2x(d1x);
        var dd2x = d1x.target || d1x.srcElement;
        if (a0x.bz2x(dd2x, "j-flag")) return;
        var bB2x = dd2x.nodeName.toLowerCase() == "a" ? dd2x.parentNode : dd2x.parentNode.parentNode;
        var jW5b = a0x.gA3x(bB2x, "data-username");
        var hu4y = a0x.gA3x(bB2x, "data-userId");
        this.bqQ1x(jW5b, hu4y);
        this.nz6t();
        a0x.X1x(this.zH0x, "display", "none")
    };
    b1x.bQV6P = function(d1x) {
        h1x.bh1x(d1x);
        var dd2x = d1x.target || d1x.srcElement;
        if (a0x.bz2x(dd2x.parentNode, "j-receiver")) {
            a0x.cH2x(dd2x.parentNode, false);
            this.dw3x(!0);
            this.PD5I()
        } else this.dF3x.focus()
    };
    b1x.baA7t = function() {
        this.bai7b.innerHTML = this.dF3x.value;
        var dk2x = this.bai7b.offsetWidth + 2;
        a0x.X1x(this.dF3x, "width", dk2x + "px")
    };
    b1x.PD5I = function() {
        var XE7x = a0x.hL4P(this.dF3x, this.o1x).y;
        var bCj3x = Math.floor((XE7x - 8) / 27);
        if (bCj3x < 0) return;
        a0x.X1x(this.bqS1x, "height", 19 + bCj3x * 29 + "px")
    };
    b1x.PN5S = function() {
        var pI7B = ["height", "paddingLeft", "paddingTop", "paddingRight", "paddingBottom", "fontSize", "fontFamily", "lineHeight"];
        for (var i = 0; i < pI7B.length; i++) { a0x.X1x(this.bai7b, pI7B[i], a0x.cZ2x(this.dF3x, pI7B[i])) }
    };
    b1x.bCp3x = function(dt3x, C1x) {
        var cT2x = C1x ? C1x : window.GUser.userId;
        var V1x = "/api/user/getfollows/" + cT2x;
        var fy3x = v1x.br2x(V1x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: dt3x.g1x(this), onerror: function(j1x) { this.bb1x = [] }, onbeforerequest: function(j1x) {} })
    };
    b1x.bCn3x = function(j1x) {
        this.bb1x = JSON.parse(j1x).follow || [];
        var C1x = GUser.userId;
        for (var i = 0; i < this.bb1x.length; i++) {
            if (this.bb1x[i].userId == C1x) {
                this.bb1x.splice(i, 1);
                continue
            }
            this.bb1x[i].avatarUrl = this.bb1x[i].avatarUrl + "?param=30y30"
        }
    };
    b1x.bQS6M = function(j1x) {
        if (this.bb1x[0]) return;
        this.bCn3x(j1x);
        this.ua8S()
    };
    b1x.bCm3x = function(bD2x) {
        var bD2x = bD2x ? bD2x : "";
        this.bb1x = this.bb1x[0] ? this.bb1x : [];
        var bq2x = this.bb1x.length;
        var Lr3x = this.Jq3x();
        var qY7R = [];
        var Mb3x, NY4c, baQ7J;
        if (!this.bb1x[0]) return qY7R;
        for (var bd1x = 0; bd1x < bq2x; bd1x++) {
            baQ7J = false;
            for (var v1x = 0; v1x < Lr3x.length; v1x++) {
                if (this.bb1x[bd1x].userId == Lr3x[v1x]) {
                    baQ7J = true;
                    break
                }
            }
            if (baQ7J) continue;
            Mb3x = this.bb1x[bd1x].nickname.toLowerCase().search(bD2x);
            NY4c = this.bb1x[bd1x].py ? this.bb1x[bd1x].py.toLowerCase().search(bD2x) : -1;
            if (Mb3x !== -1 || NY4c != -1) qY7R.push(this.bb1x[bd1x])
        }
        return qY7R
    };
    b1x.bQR6L = function(j1x) {
        a0x.dT3x(this.ZZ7S, bRg6a, { users: j1x });
        a0x.x1x(a0x.I1x(this.o1x, "j-item")[0], "j-selected");
        this.fd3x = a0x.I1x(this.o1x, "j-item");
        a0x.X1x(this.ZZ7S, "display", "block")
    };
    b1x.Jq3x = function() {
        var qY7R = a0x.I1x(this.o1x, "j-receiver") || [];
        var hu4y = [];
        for (var i = 0; i < qY7R.length; i++) { hu4y.push(a0x.gA3x(qY7R[i], "data-id")) }
        return hu4y
    };
    b1x.cvw2x = function() {
        var hu4y = this.Jq3x();
        var qY7R = [];
        for (var i = 0; i < hu4y.length; i++) {
            for (var j = 0; j < this.bb1x.length; j++) {
                if (hu4y[i] == this.bb1x[j].userId) qY7R.push(this.bb1x[j])
            }
        }
        return qY7R
    };
    b1x.bQM6G = function() { this.ZR7K() };
    D1x.DX1x.M1x = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            n1x.nr6l.M1x({ title: "登录" });
            return
        }
        e1x = e1x || {};
        if (e1x.parent === undefined) e1x.parent = document.body;
        !!this.eK3x && this.eK3x.S1x();
        this.eK3x = this.B1x(e1x)
    };
    D1x.DX1x.bp2x = function() {!!this.eK3x && this.eK3x.S1x() };
    D1x.DX1x.GS2x = function() {
        return this.nz6t()
    };
    D1x.DX1x.cvx2x = function() {
        return this.ua8S()
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        k1x = c1x("nej.u"),
        h1x = c1x("nej.v"),
        l1x = c1x("nm.x"),
        n1x = c1x("nm.l"),
        b1x, K1x;
    n1x.EC1x = NEJ.C();
    b1x = n1x.EC1x.O1x(n1x.blI0x);
    K1x = n1x.EC1x.cg2x;
    b1x.bk1x = function() {
        var Eu1x;
        var bQJ6D = function(A1x, J1x) {
            Eu1x = Eu1x || [];
            if (J1x != "18") Eu1x.push({ key: J1x, value: A1x })
        };
        return function(e1x) {
            this.bl1x(e1x);
            if (e1x.upwards) { a0x.x1x(this.o1x, "m-emts-up") } else { a0x.w1x(this.o1x, "m-emts-up") }
            if (!Eu1x) {
                var bv2x = l1x.cdU8M();
                k1x.dZ3x(bv2x, bQJ6D)
            }
            var bq2x = Eu1x.length;
            Eu1x.splice(bq2x - 2, 0, { key: "18", value: "186" });
            this.bab7U = Eu1x
        }
    }();
    b1x.bZ2x = function() { this.ca2x = "ntp-portrait" };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        this.bG2x = i1x[0];
        this.bQH6B = i1x[1];
        this.bQG6A = i1x[2];
        this.bQF6z = i1x[3];
        h1x.q1x(this.bG2x, "click", this.wF9w.g1x(this));
        h1x.q1x(this.bQH6B, "click", this.Ej1x.g1x(this, 1));
        h1x.q1x(this.bQF6z, "click", this.Ej1x.g1x(this, 2))
    };
    b1x.bbj7c = function(s1x) {
        this.ZW7P = s1x;
        var bj1x = (s1x - 1) * 50;
        var i1x = this.bab7U.slice(bj1x, Math.min(bj1x + 50, this.bab7U.length));
        this.bG2x.innerHTML = a0x.bP2x("jst-portrait", { plist: i1x }, { purl: l1x.bHT4X });
        this.bQG6A.innerText = s1x + "/" + Math.ceil(this.bab7U.length / 50)
    };
    b1x.Ej1x = function(s1x) {
        var bQE6y = Math.ceil(this.bab7U.length / 50);
        if (s1x == 1 && this.ZW7P == 1 || s1x == 2 && this.ZW7P == bQE6y) return;
        s1x == 1 ? this.bbj7c(this.ZW7P - 1) : this.bbj7c(this.ZW7P + 1)
    };
    b1x.wF9w = function(d1x) {
        var E1x = h1x.U1x(d1x, "d:text");
        if (!E1x) return;
        var d1x = { url: a0x.u1x(E1x, "url"), text: a0x.u1x(E1x, "text") };
        this.z1x("onselect", d1x);
        if (!d1x.stopped) this.bp2x()
    };
    b1x.M1x = function() {
        K1x.M1x.call(this);
        this.bbj7c(1)
    }
})();
(function() {
    var c1x = NEJ.P,
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        cK2x = c1x("nej.p"),
        ba1x = c1x("nej.h"),
        H1x = c1x("nej.ut"),
        jj5o = /^[#?]+/,
        Ex1x = /#(.*?)$/,
        vy9p = window,
        bbo7h = !history.pushState || cK2x.Qy5D.android || !history.auto;
    var ZU7N = function(V1x, bbr7k) { vy9p.history[!bbr7k ? "pushState" : "replaceState"](null, document.title, V1x) };
    var ZT7M = function() {
        return location.parse(vy9p.location.href)
    };
    ZU7N = ZU7N.ee3x(function(d1x) {
        if (!bbo7h) return;
        var bg1x = d1x.args;
        d1x.stopped = !0;
        V1x = bg1x[0].replace(jj5o, "");
        !bg1x[1] ? vy9p.location.hash = V1x : vy9p.location.replace("#" + V1x)
    });
    ZT7M = ZT7M.ee3x(function(d1x) {
        if (!bbo7h) return;
        d1x.stopped = !0;
        var dE3x = Ex1x.test(vy9p.location.href) ? RegExp.$1 : "";
        d1x.value = location.parse(dE3x.replace(jj5o, ""))
    });
    location.redirect = function(V1x, bbr7k) {
        ZU7N(V1x, bbr7k);
        return this
    };
    location.active = function() {
        var eV3x, V1x, iJ5O, cD2x, NO4S;
        var bbu7n = function(is5x) {
            if (!!cD2x) {
                cD2x = !1;
                return
            }
            var d1x = { oldValue: iJ5O, newValue: ZT7M() };
            if (!!location.ignored) { location.ignored = !1 } else {
                h1x.z1x(location, "beforeurlchange", d1x);
                if (d1x.stopped) {
                    if (!!iJ5O) {
                        cD2x = !0;
                        ZU7N(iJ5O.href, !0)
                    }
                    return
                }
            }
            V1x = vy9p.location.href;
            iJ5O = d1x.newValue;
            h1x.z1x(location, "urlchange", iJ5O);
            ba1x.bkY0x(iJ5O.href)
        };
        var bCg3x = function() {
            if (V1x != vy9p.location.href) bbu7n();
            eV3x = requestAnimationFrame(bCg3x)
        };
        return function(bL2x) {
            if (!!NO4S) return this;
            NO4S = !0;
            vy9p = bL2x || window;
            if (bbo7h && "onhashchange" in window && cK2x.mt6n.trident2) {
                h1x.q1x(vy9p, "hashchange", bbu7n);
                bbu7n()
            } else if (!eV3x) { eV3x = requestAnimationFrame(bCg3x) }
            return this
        }
    }();
    location.parse = function() {
        var fR3x = /^https?:\/\/.*?\//i,
            jj5o = /[?#]/;
        return function(V1x) {
            var m1x = { href: V1x };
            V1x = (V1x || "").replace(fR3x, "/").split(jj5o);
            var cv2x = 1;
            if (V1x[0] == "/" && (V1x[1] || "").indexOf("/") == 0) cv2x = 2;
            m1x.path = V1x.splice(0, cv2x).join("?");
            m1x.query = k1x.hl4p(V1x.join("&"));
            return m1x
        }
    }();
    location.same = function(V1x) {
        return ZT7M().href == V1x
    };
    H1x.fs3x.B1x({ element: location, event: ["beforeurlchange", "urlchange"] })
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        fK3x = c1x("nm.ut");
    fK3x.sr8j = function(ey3x) {
        var go3x = { text: "", start: 0, end: 0 };
        if (ey3x.setSelectionRange) {
            go3x.start = ey3x.selectionStart;
            go3x.end = ey3x.selectionEnd;
            go3x.text = go3x.start != go3x.end ? ey3x.value.substring(go3x.start, go3x.end) : ""
        } else if (document.selection) {
            var i, ZQ7J = document.selection.createRange(),
                vL9C = document.body.createTextRange();
            vL9C.moveToElementText(ey3x);
            go3x.text = ZQ7J.text;
            go3x.bookmark = ZQ7J.getBookmark();
            for (i = 0; vL9C.compareEndPoints("StartToStart", ZQ7J) < 0 && ZQ7J.moveStart("character", -1) !== 0; i++) {
                if (ey3x.value.charAt(i) == "\n") { i++ }
            }
            go3x.start = i;
            go3x.end = go3x.text.length + go3x.start
        }
        return go3x
    };
    fK3x.ZO7H = function(ey3x, go3x) {
        var vL9C;
        if (!go3x) { go3x = { text: "", start: 0, end: 0 } }
        ey3x.focus();
        if (ey3x.setSelectionRange) { ey3x.setSelectionRange(go3x.start, go3x.end) } else if (ey3x.createTextRange) {
            vL9C = ey3x.createTextRange();
            if (ey3x.value.length === go3x.start) {
                vL9C.collapse(false);
                vL9C.select()
            } else {
                vL9C.moveToBookmark(go3x.bookmark);
                vL9C.select()
            }
        }
    };
    fK3x.EH1x = function(ey3x, go3x, da2x) {
        var go3x = go3x || { text: "", start: 0, end: 0 };
        var bbE8w, bCf3x, vL9C, Jt3x, bCe3x, bCd3x, DN1x;
        this.ZO7H(ey3x, go3x);
        if (ey3x.setSelectionRange) {
            bbE8w = ey3x.value;
            bCf3x = bbE8w.substring(0, go3x.start) + da2x + bbE8w.substring(go3x.end);
            bCe3x = bCd3x = go3x.start + da2x.length;
            DN1x = ey3x.scrollTop;
            ey3x.value = bCf3x;
            if (ey3x.scrollTop != DN1x) { ey3x.scrollTop = DN1x }
            ey3x.setSelectionRange(bCe3x, bCd3x)
        } else if (ey3x.createTextRange) {
            Jt3x = document.selection.createRange();
            Jt3x.text = da2x;
            Jt3x.setEndPoint("StartToEnd", Jt3x);
            Jt3x.select()
        }
        h1x.z1x(ey3x, "keyup")
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        cK2x = c1x("nej.p"),
        k1x = c1x("nej.u"),
        ch2x = c1x("nej.ut"),
        D1x = c1x("nm.w"),
        fK3x = c1x("nm.ut"),
        b1x;
    D1x.bCc3x = NEJ.C();
    b1x = D1x.bCc3x.O1x(ch2x.cz2x);
    b1x.cm2x = function(e1x) { this.cs2x(e1x) };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.fH3x = e1x.txt;
        this.DE1x = e1x.sgtsContainer;
        this.bCb3x = e1x.sgtsList[0];
        this.ZG7z = e1x.sgtsItem;
        this.nQ6K = e1x.rangeData;
        this.EK1x = e1x.atIndex;
        a0x.x1x(this.ZG7z[0], "selected-item");
        this.Lt3x()
    };
    b1x.bC2x = function() {
        this.bH2x();
        h1x.lW6Q(document.body, "keyup", this.bCa3x.g1x(this));
        h1x.lW6Q(document.body, "click", this.bBX3x.g1x(this))
    };
    b1x.Lt3x = function() {
        this.bT2x([
            [document.body, "keyup", this.bCa3x.g1x(this)],
            [document.body, "click", this.bBX3x.g1x(this)],
            [this.fH3x, "keydown", this.bBW3x.g1x(this)],
            [this.fH3x, "keypress", this.bBW3x.g1x(this)],
            [this.bCb3x, "click", this.bBV3x.g1x(this)],
            [this.bCb3x, "mouseover", this.Dy1x.g1x(this)]
        ])
    };
    b1x.Dy1x = function(d1x) {
        var dd2x = h1x.U1x(d1x);
        var r1x = a0x.I1x(this.DE1x, "selected-item");
        if (a0x.bz2x(dd2x, "j-sgt")) {
            a0x.w1x(r1x[0], "selected-item");
            a0x.x1x(dd2x, "selected-item")
        }
    };
    b1x.bCa3x = function(d1x) {
        var r1x = a0x.I1x(this.DE1x, "selected-item");
        var bq2x = this.ZG7z.length;
        var iY5d = d1x.keyCode || d1x.which;
        var s1x, j1x;
        switch (iY5d) {
            case 38:
                s1x = a0x.gA3x(r1x[0], "data-index") - 1 < 0 ? bq2x - 1 : a0x.gA3x(r1x[0], "data-index") - 1;
                a0x.w1x(r1x[0], "selected-item");
                a0x.x1x(this.ZG7z[s1x], "selected-item");
                break;
            case 40:
                s1x = parseInt(a0x.gA3x(r1x[0], "data-index")) + 1 >= bq2x ? 0 : parseInt(a0x.gA3x(r1x[0], "data-index")) + 1;
                a0x.w1x(r1x[0], "selected-item");
                a0x.x1x(this.ZG7z[s1x], "selected-item");
                break;
            case 13:
                this.bBV3x(d1x);
                break;
            case 27:
                this.nz6t();
                break;
            case 32:
                var bi1x = this.fH3x.value;
                var s1x = fK3x.sr8j(this.fH3x);
                if (bi1x.charAt(s1x.start - 1) !== " ") return;
                this.nz6t();
                break
        }
    };
    b1x.bBW3x = function(d1x) {
        var iY5d = d1x.keyCode || d1x.which;
        if (iY5d === 13 || iY5d === 38 || iY5d === 40) {
            h1x.cd2x(d1x);
            d1x.keyCode = 0;
            d1x.which = 0;
            d1x.returnvalue = false
        }
    };
    b1x.bBX3x = function(d1x) {
        var dd2x = d1x.target || d1x.srcElement;
        if (dd2x === this.fH3x) return;
        this.nz6t()
    };
    b1x.bBV3x = function(d1x) {
        h1x.bh1x(d1x);
        var r1x = a0x.I1x(this.DE1x, "selected-item")[0];
        var pS7L = d1x.target || d1x.srcElement;
        var t1x = d1x.type;
        if (a0x.bz2x(pS7L, "lst")) return;
        if (t1x == "click") {
            a0x.w1x(r1x, "selected-item");
            a0x.x1x(pS7L, "selected-item")
        } else pS7L = r1x;
        var j1x = pS7L.innerHTML + " ";
        this.nz6t();
        var go3x = this.nQ6K;
        go3x.start = this.EK1x + 1;
        if (cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "9.0") {
            this.fH3x.value = this.fH3x.value.substring(0, go3x.start) + this.fH3x.value.substring(go3x.end, this.fH3x.value.length);
            go3x.end = go3x.start
        }
        fK3x.EH1x(this.fH3x, go3x, j1x);
        h1x.z1x(this.fH3x, "keyup")
    };
    b1x.nz6t = function(d1x) {
        if (!!this.DE1x) a0x.X1x(this.DE1x, "display", "none");
        this.S1x()
    };
    b1x.ua8S = function(d1x) {
        if (!!this.DE1x) a0x.X1x(this.DE1x, "display", "block")
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        D1x = c1x("nm.w"),
        ch2x = c1x("nej.ut"),
        bI2x = c1x("nej.ui"),
        b1x;
    var bQf6Z = ".u-atlist{position: absolute;z-index: 10000;}.f-thide.selected-item{background-color: #eee;}";
    var bQe6Y = a0x.en3x("m-wgt-atlist");
    var hQ4U = a0x.rD8v(bQf6Z);
    D1x.bBT3x = NEJ.C();
    b1x = D1x.bBT3x.O1x(bI2x.er3x);
    b1x.cm2x = function(e1x) {
        this.fw3x = {};
        this.cs2x()
    };
    b1x.bk1x = function(e1x) {
        this.fw3x.txt = a0x.y1x(e1x.target);
        this.fw3x.data = e1x.data;
        this.fw3x.offset = e1x.offset;
        this.fw3x.rangeData = e1x.rangeData;
        this.fw3x.atIndex = e1x.atIndex;
        this.bPZ6T(e1x);
        this.bl1x(e1x);
        this.fw3x.sgtsContainer = this.o1x;
        this.fw3x.sgtsList = a0x.I1x(this.o1x, "lst");
        this.fw3x.sgtsItem = a0x.I1x(this.o1x, "f-thide");
        this.Sv6p(e1x);
        this.bPR5W = D1x.bCc3x.B1x(this.fw3x)
    };
    b1x.bC2x = function(e1x) {
        this.bH2x();
        this.bPR5W.S1x()
    };
    b1x.bZ2x = function() { this.kM5R = hQ4U };
    b1x.bR2x = function() { this.cb2x() };
    b1x.bPZ6T = function(e1x) { this.o1x = a0x.dr3x(a0x.hO4S(a0x.bP2x(bQe6Y, e1x.data))) };
    b1x.Sv6p = function(e1x) {
        var bBN3x = a0x.I1x(this.o1x, "selected-item")[0];
        if (bBN3x) a0x.w1x(bBN3x, "selected-item");
        var cN2x = e1x.offset.x + "px";
        var gE3x = e1x.offset.y + "px";
        a0x.X1x(this.o1x, "left", cN2x);
        a0x.X1x(this.o1x, "top", gE3x)
    }
})();
(function() {
    var c1x = NEJ.P,
        v1x = c1x("nej.j"),
        fK3x = c1x("nm.ut");
    fK3x.bBL3x = function(bi1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var cM2x = /@([a-zA-Z0-9_\-\u4E00-\u9FA5]+)/g;
        var EQ1x = bi1x.match(cM2x) || [];
        for (var bd1x = 0; bd1x < EQ1x.length; bd1x++) { EQ1x[bd1x] = EQ1x[bd1x].split("@")[1] }
        EQ1x = EQ1x.reverse();
        var hu4y = GUser.userId;
        var bPF5K = v1x.sw8o("mentioners" + hu4y) || [];
        var ja5f = EQ1x.concat(bPF5K);
        if (ja5f.length > 10) ja5f = ja5f.slice(0, 10);
        v1x.uV8N("mentioners" + hu4y, ja5f)
    };
    fK3x.bPD5I = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) return;
        var hu4y = GUser.userId;
        return v1x.sw8o("mentioners" + hu4y) || []
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        cK2x = c1x("nej.p"),
        v1x = c1x("nej.j"),
        k1x = c1x("nej.u"),
        ch2x = c1x("nej.ut"),
        D1x = c1x("nm.w"),
        fK3x = c1x("nm.ut"),
        b1x;
    D1x.bBJ3x = NEJ.C();
    b1x = D1x.bBJ3x.O1x(ch2x.cz2x);
    b1x.cm2x = function(e1x) {
        this.cs2x(e1x);
        this.bBH3x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.fH3x = e1x.txt;
        this.o1x = e1x.body;
        this.bBG3x = e1x.before;
        this.Kb3x = e1x.flag;
        this.bPx5C = e1x.after;
        this.pc7V = [];
        if (cK2x.cR2x.browser != "ie") { setTimeout(function() { this.kN5S() }.g1x(this), 0) }
        this.Lt3x()
    };
    b1x.bC2x = function() {
        this.bH2x();
        if (this.tE8w) this.tE8w.S1x();
        delete this.tE8w
    };
    b1x.Lt3x = function() {
        this.bT2x([
            [this.fH3x, "keyup", this.bBF3x.g1x(this, this.fH3x)],
            [this.fH3x, "click", this.bBF3x.g1x(this, this.fH3x)],
            [this.fH3x, "focus", this.kN5S.g1x(this)]
        ])
    };
    b1x.kN5S = function(d1x) { this.nQ6K = fK3x.sr8j(this.fH3x) };
    b1x.bBH3x = function() {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            window.GFollowers = [];
            return
        }
        var cT2x = window.GUser.userId;
        var V1x = "/api/user/getfollows/" + cT2x;
        var fy3x = v1x.br2x(V1x, { sync: false, method: "get", query: "offset = 0&limit=1000&order=true", onload: function(j1x) { window.GFollowers = JSON.parse(j1x).follow }.g1x(this), onerror: function(j1x) {}, onbeforerequest: function(j1x) {} })
    };
    b1x.bBE3x = function(index) {
        var A1x = this.fH3x.value,
            bj1x, bcJ8B, bcK8C, Of4j;
        this.bBG3x.innerHTML = k1x.dJ3x(A1x.substr(0, index)).replace(/\n/g, "<br/>").replace(/\s/g, '<span class="j-test" style="display:inline-block;white-space: pre-wrap; font-family:Arial, Helvetica, sans-serif;"></span>');
        var ns6m = a0x.I1x(this.bBG3x, "j-test");
        for (var bd1x = 0; bd1x < ns6m.length; bd1x++) { ns6m[bd1x].innerText = " " }
        this.Kb3x.innerHTML = A1x.charAt(index);
        this.bPx5C.innerHTML = k1x.dJ3x(A1x.substr(index + 1, A1x.length));
        Of4j = parseInt(a0x.cZ2x(this.fH3x, "lineHeight"));
        a0x.X1x(this.o1x, "display", "block");
        bcJ8B = a0x.hL4P(this.Kb3x, this.o1x);
        bcK8C = a0x.hL4P(this.fH3x);
        a0x.X1x(this.o1x, "display", "none");
        var cN2x = bcJ8B.x + bcK8C.x;
        var gE3x = bcJ8B.y + bcK8C.y + Of4j;
        bj1x = { x: cN2x, y: gE3x };
        this.bPt5y(bj1x)
    };
    b1x.bBF3x = function(ey3x, d1x) {
        h1x.cd2x(d1x);
        var ey3x = ey3x;
        var A1x = ey3x.value;
        var bq2x = A1x.length;
        var s1x = fK3x.sr8j(ey3x).start;
        var bBC3x = 0;
        var iY5d = d1x.keyCode || d1x.which;
        var ja5f;
        this.nQ6K = fK3x.sr8j(ey3x);
        var bBB3x = false;
        for (var i = 1; i < 20; i++) {
            ja5f = s1x - i;
            if (A1x.charAt(ja5f) === " ") break;
            if (A1x.charAt(ja5f) === "@") {
                bBB3x = true;
                this.EK1x = bBC3x = ja5f;
                break
            }
        }
        if (bBB3x && d1x.shiftKey === false && iY5d !== 38 && iY5d !== 40) {
            if (iY5d !== 27 && iY5d !== 13) {
                this.tE8w ? this.tE8w.S1x() : null;
                this.bBE3x(bBC3x)
            }
        } else if (iY5d !== 38 && iY5d !== 40 && d1x.keyCode !== 32) { this.tE8w ? this.tE8w.S1x() : null }
    };
    b1x.bPt5y = function(bj1x) {
        var bj1x = bj1x;
        var j1x = this.EW1x();
        var e1x = { parent: document.body, offset: bj1x, data: j1x, target: this.fH3x, rangeData: this.nQ6K, atIndex: this.EK1x };
        this.tE8w ? this.tE8w.S1x() : null;
        this.tE8w = D1x.bBT3x.B1x(e1x)
    };
    b1x.EW1x = function() {
        var bPo5t = fK3x.sr8j(this.fH3x).start;
        var bPe5j = this.EK1x + 1;
        var bBx3x = fK3x.bPD5I() || [];
        var bBw3x = [];
        var bD2x = this.fH3x.value.substring(bPe5j, bPo5t).toLowerCase();
        bD2x = bD2x.replace(/\[/g, "\\[");
        bD2x = bD2x.replace(/\]/g, "\\]");
        if (window.GFollowers) { this.pc7V = window.GFollowers[0] ? window.GFollowers : [] } else this.pc7V = [];
        if (!this.pc7V[0]) this.bBH3x();
        for (var bd1x = 0; bd1x < bBx3x.length; bd1x++) {
            for (var v1x = 0; v1x < this.pc7V.length; v1x++) {
                if (this.pc7V[v1x].nickname == bBx3x[bd1x]) bBw3x.push(this.pc7V[v1x])
            }
        }
        this.pc7V = k1x.cko9f(this.pc7V, bBw3x, { union: true, begin: true });
        var bOZ5e = this.pc7V.length;
        var Zq7j = [];
        var Mb3x, NY4c;
        if (!this.pc7V[0]) return { suggests: Zq7j };
        for (var i = 0; i < bOZ5e; i++) {
            Mb3x = this.pc7V[i].nickname.toLowerCase().search(bD2x);
            NY4c = this.pc7V[i].py ? this.pc7V[i].py.toLowerCase().search(bD2x) : -1;
            if (Mb3x !== -1 || NY4c != -1) Zq7j.push(this.pc7V[i]);
            if (Zq7j.length === 10) break
        }
        return { suggests: Zq7j }
    };
    b1x.PQ5V = function() {
        var go3x = this.nQ6K || { text: "", start: 0, end: 0 };
        h1x.z1x(this.fH3x, "focus");
        fK3x.EH1x(this.fH3x, go3x, "@");
        this.nQ6K = fK3x.sr8j(this.fH3x);
        this.EK1x = go3x.start;
        this.bBE3x(this.EK1x)
    };
    b1x.GS2x = function() {
        if (this.tE8w) this.tE8w.S1x()
    }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        v1x = c1x("nej.j"),
        D1x = c1x("nm.w"),
        ch2x = c1x("nej.ut"),
        bI2x = c1x("nej.ui"),
        b1x;
    var bOW5b = "#shadow-box{position: absolute;display: block;left: 450px;top: 1020px;border: 1px solid black;word-wrap: break-word;display:none;opacity: 0;filter: Alpha(opacity=0);z-index: -1000;}";
    var bOU5Z = '<div id="shadow-box" style="word-wrap:break-word"><span  class="node-before"></span><span>@</span><span  class="node-after"></span></div>';
    var gd3x = a0x.hO4S(bOU5Z);
    var hQ4U = a0x.rD8v(bOW5b);
    D1x.PY5d = NEJ.C();
    b1x = D1x.PY5d.O1x(bI2x.er3x);
    b1x.cm2x = function(e1x) {
        this.fw3x = {};
        this.cs2x()
    };
    b1x.bk1x = function(e1x) {
        this.bl1x(e1x);
        this.fw3x.txt = a0x.y1x(e1x.target);
        this.PN5S();
        this.Qh5m = D1x.bBJ3x.B1x(this.fw3x)
    };
    b1x.bC2x = function(e1x) {
        this.bH2x();
        this.Qh5m.S1x()
    };
    b1x.bZ2x = function() {
        this.ca2x = gd3x;
        this.kM5R = hQ4U
    };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.cQ2x(a0x.y1x(this.o1x));
        this.fw3x.body = this.o1x;
        this.fw3x.before = i1x[0];
        this.fw3x.flag = i1x[1];
        this.fw3x.after = i1x[2]
    };
    b1x.PN5S = function() {
        var pI7B = ["width", "borderWidth", "border-style", "outline", "marginLeft", "marginTop", "marginRight", "marginBottom", "height", "paddingLeft", "paddingTop", "fontSize", "wordWrap", "fontFamily", "lineHeight", "overflowX", "overflowY"];
        for (var i = 0; i < pI7B.length; i++) {
            if (pI7B[i] === "width" && a0x.cZ2x(this.fw3x.txt, pI7B[i]) == "100%") {
                a0x.X1x(this.o1x, pI7B[i], this.fw3x.txt.offsetWidth + "px");
                continue
            }
            a0x.X1x(this.o1x, pI7B[i], a0x.cZ2x(this.fw3x.txt, pI7B[i]))
        }
    };
    b1x.PQ5V = function() { this.Qh5m.PQ5V() };
    b1x.GS2x = function() { this.Qh5m.GS2x() }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        eX3x = NEJ.R,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        jO5T = c1x("nm.c"),
        R1x = {},
        b1x;
    if (!!jO5T.bdj8b) return;
    jO5T.bdj8b = NEJ.C();
    b1x = jO5T.bdj8b.O1x(H1x.cz2x);
    b1x.cm2x = function() { this.cs2x() };
    b1x.bk1x = function(e1x) { this.bl1x(e1x) };
    b1x.bC2x = function() { this.bH2x() };
    b1x.EZ1x = function(eB3x, dt3x) {
        if (R1x[eB3x]) {
            this.hr4v("register commonJST[" + eB3x + "] duplicate");
            return
        }
        if (!k1x.gc3x(dt3x)) { dt3x = ctl.comJST.bON5S(eB3x, dt3x) }
        R1x[eB3x] = dt3x
    };
    b1x.bOK5P = function(Zo7h) {
        if (k1x.em3x(Zo7h)) { k1x.be1x(Zo7h, function(r1x) { ctl.comJST.EZ1x.apply(this, r1x) }, this) } else if (k1x.kg5l(Zo7h)) { k1x.dZ3x(Zo7h, function(eM3x, J1x) { ctl.comJST.EZ1x(J1x, eM3x) }) }
    };
    b1x.bON5S = function(eB3x, sH8z, bBp3x) {
        sH8z = sH8z || {};
        NEJ.X(sH8z, { comJST: this.pK7D });
        if (sH8z.resetDataName && !k1x.em3x(sH8z.resetDataName)) { sH8z.resetDataName = [sH8z.resetDataName] }
        return function() {
            var j1x = arguments[0],
                iX5c = arguments[1];
            if (sH8z.resetDataName) {
                var ja5f = {};
                for (var i = 0, ii = sH8z.resetDataName.length; i < ii; i++) { ja5f[sH8z.resetDataName[i]] = arguments[i] }
                j1x = ja5f;
                iX5c = arguments[ii]
            }
            NEJ.X(j1x, sH8z, dD3x);
            if (bBp3x) {
                iX5c = iX5c || {};
                NEJ.X(iX5c, bBp3x)
            }
            return a0x.bP2x(eB3x, j1x, iX5c)
        }
    };
    b1x.pK7D = function(eB3x) {
        if (!R1x[eB3x]) {
            this.hr4v("commonJST[" + eB3x + "] is unregister");
            return ""
        } else {
            return R1x[eB3x].apply(null, eX3x.slice.call(arguments, 1))
        }
    };
    b1x.dump = function() {
        return R1x
    };
    b1x.hr4v = function(bOF5K) {
        if (console && console.log) { console.log(bOF5K) }
    };
    var dD3x = function(eM3x, J1x) {
        return J1x == "resetDataName"
    };
    c1x("ctl").comJST = jO5T.bdj8b.fU3x()
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        bm1x = NEJ.F,
        eX3x = NEJ.R,
        a0x = c1x("nej.e"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        jO5T = c1x("nm.c"),
        R1x = {},
        b1x;
    if (!!jO5T.bdw8o) return;
    jO5T.bdw8o = NEJ.C();
    b1x = jO5T.bdw8o.O1x(H1x.cz2x);
    b1x.cm2x = function() {
        this.cs2x();
        var e1x = {
            "com-mv-artists": function(fj3x, dI3x, De1x, bdx8p) {
                return a0x.bP2x("com-mv-artists", {
                    artists: fj3x,
                    clazz: dI3x,
                    boxClazz: bdx8p,
                    mark: De1x || function(cO2x) {
                        return cO2x
                    },
                    escape: k1x.dJ3x,
                    comJST: ctl.comJST.pK7D
                })
            },
            "com-album-artists": function(fj3x, dI3x, De1x, bdx8p) {
                return a0x.bP2x("com-album-artists", {
                    artists: fj3x,
                    clazz: dI3x,
                    boxClazz: bdx8p,
                    mark: De1x || function(cO2x) {
                        return cO2x
                    },
                    escape: k1x.dJ3x,
                    comJST: ctl.comJST.pK7D
                })
            },
            "com-artists-title": { resetDataName: ["artists"], escape: k1x.dJ3x }
        };
        for (var C1x in e1x) { ctl.comJST.EZ1x(C1x, e1x[C1x]) }
    };
    b1x.bk1x = function(e1x) { this.bl1x(e1x) };
    b1x.bC2x = function() { this.bH2x() };
    c1x("ctl").comJSTUtil = jO5T.bdw8o.fU3x()
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        a0x = c1x("nej.e"),
        cK2x = c1x("nej.p"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        v1x = c1x("nej.j"),
        D1x = c1x("nm.w"),
        fK3x = c1x("nm.ut"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        n1x = c1x("nm.l"),
        Zg7Z = [2, 3],
        dC3x = ["sn", "db"],
        b1x, K1x, bOB5G = { 13: "playlist", 17: "djprogram", 18: "song", 19: "album", 20: "artist", 21: "mv", 24: "topic", 25: "activity", 70: "djradio", 38: "concert", 39: "video" },
        Zf7Y = { djprogram: "节目", album: "专辑", playlist: "歌单", song: "单曲", yunsong: "单曲", artist: "歌手", mv: "MV", topic: "音乐专栏", djradio: "电台", concert: "演出", video: "视频" },
        bBh3x = { djprogram: " - ", album: " - ", playlist: " by ", song: " - ", yunsong: " - ", artist: "", mv: " - ", djradio: " by " },
        bOs5x = { 0: 13, 1: 17, 3: 19, 4: 18, 5: 21, 6: 24, 14: 70, 17: 20 },
        CH1x = { pubEventWithPics: false, pubEventWithoutResource: false, pubEventWithPictureForbiddenNotice: "等级达到Lv.4，即可添加图片" };
    n1x.wa9R = NEJ.C();
    b1x = n1x.wa9R.O1x(n1x.dV3x);
    K1x = n1x.wa9R.cg2x;
    b1x.bk1x = function(e1x) {
        if (e1x.onclose === undefined) { e1x.onclose = this.bBa3x.g1x(this) }
        this.bl1x(e1x);
        this.yS0x = e1x.isPub;
        this.jJ5O = e1x.rid || -1;
        this.es3x = e1x.type || -1;
        this.bdL8D = e1x.purl;
        this.YZ7S = e1x.name || "";
        this.Kf3x = e1x.author || "";
        this.bdP8H = e1x.authors || "";
        this.YY7R = e1x.actId;
        this.YV7O = e1x.actName;
        this.bAZ3x = e1x.title;
        this.YT7M = {};
        this.bOg5l = e1x.mesg || "";
        this.bOf5k = e1x.placeholder || "说点什么吧";
        this.bdX8P = e1x.hideTip;
        var i1x, fL3x = +(new Date);
        try { i1x = top.localCache.y1x("user") || {} } catch (e) { i1x = {} }
        for (var i = 0, i1x = i1x.bindings || [], eq3x; i < i1x.length; ++i) {
            eq3x = !i1x[i].tokenJsonStr ? null : JSON.parse(i1x[i].tokenJsonStr);
            if (!eq3x || eq3x.expires_in === undefined) continue;
            var YR7K = parseInt(eq3x.expires_in),
                YQ7J = parseInt(i1x[i].refreshTime),
                bNZ5e = (YR7K + YQ7J) * 1e3 - 5 * 60 * 1e3;
            if (bNZ5e > fL3x) this.YT7M[i1x[i].type] = !0
        }
        this.ui8a = D1x.DX1x.B1x({ parent: this.YP7I, err: this.bAW3x });
        if (this.gX4b) { this.gX4b.S1x() }
        this.gX4b = D1x.PY5d.B1x({ parent: document.body, target: this.eQ3x });
        if (this.es3x == 24 || this.es3x == 21 || this.tp8h()) { this.wB9s.style.display = "none" } else {
            this.wB9s.style.display = "";
            this.nK6E = D1x.bkm0x.B1x({ parent: this.bel8d, button: this.wB9s, onstartupload: this.bAV3x.g1x(this, true), onfinishupload: this.bAV3x.g1x(this, false) })
        }
        if (this.tp8h()) {
            this.oM7F.innerText = "";
            a0x.x1x(this.oM7F, "info-video");
            this.Fm1x = D1x.bAU3x.B1x({ parent: this.oM7F, windowBody: this.o1x, onstepping: this.bNR5W.g1x(this), oncancel: function() { this.bp2x() }.g1x(this) });
            if (e1x.extError) { this.Fm1x.bet8l({ agent: e1x.videoUploadAgent, errorCode: -600 }) } else { this.Fm1x.Fl1x({ agent: e1x.videoUploadAgent, fileName: e1x.videoFileName }) }
            a0x.x1x(this.bev8n, "f-hide")
        } else { a0x.w1x(this.bev8n, "f-hide") }
    };
    b1x.bC2x = function() {
        this.bH2x();
        if (this.ui8a) {
            this.ui8a.S1x();
            delete this.ui8a
        }
        if (this.gX4b) {
            this.gX4b.S1x();
            delete this.gX4b
        }
        if (this.nK6E) {
            this.nK6E.S1x();
            delete this.nK6E
        }
        if (this.lS6M) {
            this.lS6M.S1x();
            delete this.lS6M
        }
    };
    b1x.bZ2x = function() { this.ca2x = "m-wgt-sharewin" };
    b1x.bR2x = function() {
        this.cb2x();
        this.bAO3x = a0x.cQ2x(this.o1x)[0];
        var bn2x = a0x.I1x(this.o1x, "j-flag");
        this.pf7Y = bn2x.shift();
        this.bAW3x = bn2x.shift();
        this.YP7I = bn2x.shift();
        this.eQ3x = bn2x.shift();
        this.oM7F = bn2x.shift();
        this.beC8u = bn2x.shift();
        this.bNL5Q = bn2x.shift();
        this.wB9s = bn2x.shift();
        this.ci2x = bn2x.shift();
        this.bel8d = bn2x.shift();
        this.yy9p = bn2x.shift();
        this.cvY2x = bn2x.shift();
        this.bev8n = bn2x.shift();
        this.dW3x = bn2x.shift();
        this.Fn1x = a0x.I1x(this.bev8n, "j-t");
        this.zP0x = H1x.Cn0x.B1x({ list: a0x.cQ2x(this.pf7Y), selected: "z-slt", onchange: this.beL8D.g1x(this) });
        if (cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "8.0") {
            a0x.X1x(this.YP7I, "position", "relative");
            a0x.X1x(this.YP7I, "zIndex", "10")
        }
        h1x.q1x(window, "snsbind", this.Lk3x.g1x(this));
        h1x.q1x(this.eQ3x, "input", this.fi3x.g1x(this));
        h1x.q1x(this.eQ3x, "keyup", this.tt8l.g1x(this));
        h1x.q1x(this.o1x, "click", this.cw2x.g1x(this));
        this.P1x = p1x.bhX9O.B1x();
        this.P1x.q1x("onshareall", this.YD7w.g1x(this, 0));
        this.P1x.q1x("onshareerror", this.hS4W.g1x(this));
        this.P1x.q1x("onshareprivate", this.YD7w.g1x(this, 1));
        this.YC7v = p1x.xX9O.B1x();
        this.hr4v = p1x.hI4M.B1x();
        try { this.Lp3x = top.api.sharePermission } catch (e) {}
        if (!this.Lp3x) {
            this.Lp3x = CH1x;
            v1x.br2x("/api/event/user/permission", {
                type: "json",
                onload: function(d1x) {
                    if (d1x.code == 200) { this.Lp3x = NEJ.EX(CH1x, d1x) }
                }.g1x(this)
            })
        }
    };
    b1x.beL8D = function(d1x) {
        d1x.index == 0 ? a0x.w1x(this.bAO3x, "m-plshare") : a0x.x1x(this.bAO3x, "m-plshare");
        this.YP7I.style.display = d1x.index == 0 ? "none" : "";
        this.bNL5Q.style.display = d1x.index == 0 ? "" : "none";
        this.wB9s.style.display = d1x.index == 0 ? "" : "none";
        if (this.es3x == 24 || this.es3x == 21) { this.wB9s.style.display = "none" }
        this.bAW3x.style.display = "none";
        this.eQ3x.value = "";
        this.bX2x();
        this.BZ0x();
        if (d1x.index == 0) {
            var dk2x = a0x.cZ2x(this.eQ3x, "width");
            if (dk2x == "auto" || !dk2x) {
                return
            } else {
                if (this.gX4b) { this.gX4b.S1x() }
                this.gX4b = D1x.PY5d.B1x({ parent: document.body, target: this.eQ3x })
            }
            this.bel8d.style.display = ""
        } else {
            if (this.gX4b) {
                this.gX4b.S1x();
                delete this.gX4b
            }
            this.bel8d.style.display = "none"
        }
    };
    b1x.cw2x = function(d1x) {
        var f1x = h1x.U1x(d1x, "d:action");
        if (!f1x) return;
        if (a0x.u1x(f1x, "action") == "search") {
            if (!this.tp8h()) { h1x.cd2x(d1x) }
        } else if (a0x.u1x(f1x, "default") === undefined) { h1x.cd2x(d1x) }
        switch (a0x.u1x(f1x, "action")) {
            case "txt":
                this.kN5S();
                break;
            case "search":
                if (this.tp8h()) {} else if (this.yS0x && this.es3x != 24) {
                    if (this.lS6M) { this.lS6M.S1x() }
                    this.lS6M = D1x.boX0x.B1x({ parent: this.o1x.parentNode, onfinish: this.beR8J.g1x(this), oncancel: this.bNJ5O.g1x(this) });
                    this.beT8L = true;
                    this.o1x.style.display = "none";
                    this.ys9j(this.jJ5O > 0 ? "更换音乐" : "添加音乐")
                }
                break;
            case "at":
                h1x.rj7c(d1x);
                !!this.gL3x && this.gL3x.bp2x();
                this.gX4b.PQ5V();
                this.fE3x();
                break;
            case "emot":
                h1x.rj7c(d1x);
                !!this.gX4b && this.gX4b.GS2x();
                if (!this.gL3x) {
                    this.gL3x = n1x.EC1x.B1x({ parent: this.beC8u });
                    this.gL3x.q1x("onselect", this.wF9w.g1x(this))
                }
                this.gL3x.M1x();
                break;
            case "upload":
                break;
            case "sns":
                h1x.bh1x(d1x);
                var bfb9S, bD2x, t1x = a0x.u1x(f1x, "type");
                if (!this.YT7M[t1x]) {
                    bfb9S = f1x.href.split("?");
                    bD2x = k1x.hl4p(bfb9S[1]);
                    bD2x["csrf_token"] = v1x.gD3x("__csrf");
                    top.open(bfb9S[0] + "?" + k1x.de2x(bD2x));
                    return
                }
                var bv2x = { 2: "sn", 3: "db", 4: "rr" };
                l1x.yB9s(f1x, "u-slg-" + bv2x[t1x] + "-gray");
                break;
            case "close":
                !!this.gL3x && this.gL3x.bp2x();
                this.bBa3x();
                break;
            case "share":
                h1x.bh1x(d1x);
                if (this.tp8h()) {
                    if (!a0x.bz2x(f1x, "u-btn2-2-dis")) { this.bNH5M() }
                } else if (a0x.bz2x(f1x, "u-btn2-2-dis")) {
                    if (!this.Lp3x.pubEventWithoutResource && !(this.jJ5O > 0)) { this.bNG5L() } else {}
                } else if (!(this.jJ5O > 0) && !this.eQ3x.value && this.nK6E && this.nK6E.Li3x().length == 0) { n1x.Z1x.M1x({ type: 2, tip: "请输入内容" }) } else { this.bNE5J() }
                break
        }
    };
    b1x.bNG5L = function() {
        var rG8y = 0,
            bfh9Y = function() {
                if (rG8y % 2) { a0x.w1x(this.oM7F, "z-show") } else { a0x.x1x(this.oM7F, "z-show") }
                rG8y++;
                if (rG8y > 5) { clearInterval(eV3x) }
            },
            eV3x;
        return function() {
            rG8y = 0;
            clearInterval(eV3x);
            eV3x = setInterval(bfh9Y.g1x(this), 200)
        }
    }();
    b1x.Lk3x = function(m1x) {
        m1x = m1x.result;
        this.YT7M[m1x.type] = !0;
        var s1x = k1x.cV2x(Zg7Z, m1x.type),
            cc2x = "u-slg-" + dC3x[s1x] + "-gray";
        a0x.w1x(this.Fn1x[s1x], cc2x)
    };
    b1x.beR8J = function(bt2x) {
        var j1x = bt2x.data;
        this.jJ5O = bt2x.id;
        this.es3x = bt2x.type;
        this.o1x.style.display = "";
        this.ys9j(this.bAZ3x);
        this.lS6M && this.lS6M.S1x();
        this.beT8L = false;
        this.bdL8D = j1x.picUrl;
        this.YZ7S = j1x.title || "";
        this.Kf3x = j1x.author || "";
        this.bdP8H = j1x.authors || "";
        this.bNA5F();
        this.LO3x()
    };
    b1x.bNR5W = function(e1x) {
        this.bdL8D = e1x.coverUrl;
        this.LQ3x = e1x;
        this.LO3x()
    };
    b1x.bNJ5O = function() {
        this.lS6M && this.lS6M.S1x();
        this.o1x.style.display = "";
        this.ys9j(this.bAZ3x);
        this.beT8L = false;
        this.LO3x()
    };
    b1x.wF9w = function(d1x) {
        var bi1x = "[" + d1x.text + "]";
        fK3x.EH1x(this.eQ3x, this.nQ6K, bi1x);
        this.fE3x()
    };
    b1x.fi3x = function(d1x) { cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "7.0" ? setTimeout(this.fE3x.g1x(this), 0) : this.fE3x() };
    b1x.tt8l = function(d1x) {
        this.kN5S();
        if (d1x.keyCode == 8) this.fE3x()
    };
    b1x.fE3x = function() {
        this.kN5S();
        this.BZ0x()
    };
    b1x.BZ0x = function() {
        var bq2x = Math.ceil(k1x.fB3x(this.eQ3x.value.trim()) / 2);
        this.ci2x.innerText = 140 - bq2x;
        bq2x > 140 ? a0x.eu3x(this.ci2x, "s-fc4", "s-fc6") : a0x.eu3x(this.ci2x, "s-fc6", "s-fc4")
    };
    b1x.bNE5J = function() {
        if (this.cu2x()) return;
        if (k1x.fB3x(this.eQ3x.value.trim()) > 280) {
            this.bX2x("字数超过140个字符");
            return
        }
        var t1x = this.zP0x.rK8C(),
            j1x;
        if (t1x == 0) {
            for (var i = 0, yl9c = []; i < this.Fn1x.length; ++i) {
                if (!a0x.bz2x(this.Fn1x[i], "u-slg-" + dC3x[i] + "-gray")) yl9c.push(Zg7Z[i])
            }
            this.cu2x(!0);
            j1x = { id: this.jJ5O, msg: this.eQ3x.value.trim(), type: this.Yy7r(this.es3x), picUrl: this.bdL8D, snsTypes: yl9c.join(","), isPub: this.yS0x };
            if (this.YY7R > 0) {
                j1x.actId = this.YY7R;
                if (this.YV7O) { j1x.msg = "#" + this.YV7O + "#" + j1x.msg }
            }
            var mL6F = this.nK6E && this.nK6E.Li3x();
            if (mL6F && mL6F.length) { j1x.pics = mL6F }
            this.P1x.bVk6e(j1x)
        } else {
            var qY7R = this.ui8a.Jq3x();
            if (qY7R.length <= 0) {
                this.bX2x("请至少选择一位好友");
                return
            }
            this.P1x.bVf6Z({ data: { id: this.jJ5O, msg: this.eQ3x.value.trim(), type: this.Yy7r(this.es3x), userIds: "[" + qY7R.join(",") + "]" } })
        }
    };
    b1x.bNH5M = function() {
        if (this.cu2x()) {
            return
        }
        this.hr4v.gm3x("click", { target: "share", targetid: "button", page: "sharevideo" });
        if (k1x.fB3x(this.eQ3x.value.trim()) > 280) {
            this.bX2x("字数超过140个字符");
            return
        }
        for (var i = 0, yl9c = []; i < this.Fn1x.length; ++i) {
            if (!a0x.bz2x(this.Fn1x[i], "u-slg-" + dC3x[i] + "-gray")) yl9c.push(Zg7Z[i])
        }
        this.cu2x(!0);
        var vf9W = this.LQ3x.fileInfo,
            j1x = { msg: this.eQ3x.value.trim(), type: "video" },
            bNy5D = { vid: vf9W.vid, coverId: this.LQ3x.coverId, nosKey: vf9W.objectKey, size: vf9W.size, duration: Math.floor(vf9W.duration / 1e3), width: vf9W.width, height: vf9W.height };
        if (this.YY7R > 0) {
            j1x.actId = this.YY7R;
            if (this.YV7O) { j1x.msg = "#" + this.YV7O + "#" + j1x.msg }
        }
        j1x.videoinfo = JSON.stringify(bNy5D);
        this.P1x.bVe6Y({ data: j1x, snsTypes: "" })
    };
    b1x.YD7w = function(t1x, m1x) {
        this.cu2x(!1);
        this.bp2x();
        if (!this.bdX8P) {
            if (this.tp8h()) { n1x.Z1x.M1x({ tip: "视频将在转码完成后自动发出", autoclose: true }) } else { n1x.Z1x.M1x({ tip: "分享成功" + (m1x.point > 0 ? ' 获得<em class="s-fc6">' + m1x.point + "积分</em>" : ""), autoclose: true }) }
        }
        h1x.z1x(n1x.wa9R, "sharesuccess", { isPrivate: t1x, rid: this.jJ5O, rtype: this.es3x, data: m1x.event });
        this.z1x("onshare")
    };
    b1x.hS4W = function(m1x) {
        this.cu2x(!1);
        var bF2x = "分享失败";
        if (m1x.code) {
            switch (m1x.code) {
                case 404:
                    bF2x = "分享的资源不存在";
                    break;
                case 407:
                    bF2x = "输入内容包含有关键字";
                    break;
                case 408:
                    bF2x = "分享太快了，过会再分享吧";
                    break;
                case 315:
                    bF2x = m1x.message || "根据对方设置，你没有该操作权限";
                    break;
                case 329:
                    return l1x.fb3x({ clazz: "m-layer-w2", btntxt: "知道了", message: "当前账号存在较多未完成发布的视频<br>请稍后再试" })
            }
        }
        this.bX2x(bF2x)
    };
    b1x.kN5S = function() { this.nQ6K = fK3x.sr8j(this.eQ3x) };
    b1x.bX2x = function(bF2x) { this.dw3x(this.dW3x, bF2x) };
    b1x.cu2x = function(cD2x) {
        return this.dK3x(this.yy9p, cD2x, "分享", "分享中...")
    };
    b1x.Yy7r = function(jf5k) {
        return bOB5G[jf5k] || ""
    };
    b1x.bNu5z = function() {
        var ey3x, st8l = this.Yy7r(this.es3x);
        this.oM7F.style.display = "";
        if (this.jJ5O <= 0) { this.oM7F.innerHTML = '<i class="highlight"></i><div class="text f-thide f-fl f-fs1"><i class="logo f-fl u-icn2 u-icn2-quaver"></i><span class="f-fs1 f-fl">给动态配上音乐</span></div><i class="f-fr icn u-icn2 u-icn2-plus"></i>' } else {
            if (!this.YZ7S) {
                this.oM7F.style.display = "none";
                return
            }
            var Yw7p = this.yS0x && this.es3x != 24;
            ey3x = (Zf7Y[st8l] ? Zf7Y[st8l] + "：" : "") + this.YZ7S + (bBh3x[st8l] || " ") + (st8l == "mv" || st8l == "album" ? this.bdP8H || this.Kf3x : this.Kf3x);
            a0x.dT3x(this.oM7F, "m-xwgt-share-infobar", { canChange: Yw7p, info: ey3x });
            if (Yw7p) { a0x.w1x(this.oM7F, "z-dis") } else { a0x.x1x(this.oM7F, "z-dis") }
        }
        a0x.w1x(this.oM7F, "info-video")
    };
    b1x.bNA5F = function() {
        var st8l = this.Yy7r(this.es3x),
            ey3x = (Zf7Y[st8l] ? Zf7Y[st8l] + "：" : "") + this.YZ7S + (bBh3x[st8l] || " ") + (st8l == "mv" || st8l == "album" ? this.bdP8H || this.Kf3x : this.Kf3x);
        Yw7p = this.yS0x && this.es3x != 24;
        if (this.tp8h()) { a0x.x1x(this.oM7F, "info-video") } else {
            a0x.w1x(this.oM7F, "info-video");
            a0x.dT3x(this.oM7F, "m-xwgt-share-infobar", { canChange: Yw7p, isPub: this.yS0x, info: ey3x })
        }
    };
    b1x.bAK3x = function() {
        var Ft1x = this.eQ3x.value;
        if (this.yS0x) {
            if (!!this.beT8L) {
                return !!Ft1x && !!Ft1x.length || !!this.nK6E && this.nK6E.Li3x().length > 0
            } else {
                return this.jJ5O > 0 || !!Ft1x && !!Ft1x.length || !!this.nK6E && this.nK6E.Li3x().length > 0
            }
        } else {
            return !!Ft1x && !!Ft1x.length || !!this.nK6E && this.nK6E.Li3x().length > 0
        }
    };
    b1x.LO3x = function() {
        var bfx9o = false;
        if (this.tp8h()) {
            if (this.LQ3x && this.LQ3x.fileInfo && this.LQ3x.coverId) { bfx9o = true }
        } else if (!this.yS0x || this.Lp3x.pubEventWithoutResource || this.jJ5O > 0) { bfx9o = true }
        if (bfx9o) { a0x.w1x(this.yy9p, "u-btn2-2-dis") } else { a0x.x1x(this.yy9p, "u-btn2-2-dis") }
    };
    b1x.bAV3x = function(bfy9p) {
        if (bfy9p) { a0x.x1x(this.yy9p, "u-btn2-2-dis") } else { this.LO3x() }
    };
    b1x.bBa3x = function(d1x) {
        if (d1x) { d1x.stopped = true }
        if (this.tp8h()) {
            this.hr4v.gm3x("click", { target: d1x ? "cross" : "cancel", targetid: "button", page: "sharevideo" });
            this.Fm1x.csN2x(this.bAK3x())
        } else if (this.bAK3x()) {
            l1x.gS3x({
                title: "提示",
                message: "是否退出本次编辑？",
                btnok: "退出",
                action: function(W1x) {
                    if (W1x == "ok") { this.bp2x() }
                }.g1x(this)
            })
        } else { this.bp2x() }
    };
    b1x.ys9j = function(eH3x, dq3x) { this.nI6C.Ae0x(eH3x, dq3x) };
    b1x.Yv7o = function(t1x) { this.hr4v.gm3x("page", { type: t1x }) };
    b1x.tp8h = function() {
        return this.es3x == 39
    };
    b1x.M1x = function() {
        var csL1x = function(r1x, s1x) {
            var cc2x = "u-slg-" + dC3x[s1x] + "-gray";
            !this.YT7M[Zg7Z[s1x]] ? a0x.x1x(r1x, cc2x) : a0x.w1x(r1x, cc2x)
        };
        return function() {
            if (this.tp8h()) { this.ys9j("添加视频") }
            K1x.M1x.call(this);
            this.o1x.style.display = "";
            this.bX2x();
            this.cu2x(!1);
            this.zP0x.Fl1x(0);
            this.eQ3x.focus();
            this.eQ3x.value = this.bOg5l || "";
            this.eQ3x.placeholder = this.bOf5k || "";
            if (!this.tp8h()) { this.bNu5z() }
            this.fE3x();
            this.ui8a.bQM6G();
            k1x.be1x(this.Fn1x, csL1x, this);
            this.kN5S();
            if (this.yS0x) { this.pf7Y.style.display = "none" } else { this.pf7Y.style.display = "" }
            this.LO3x()
        }
    }();
    b1x.bp2x = function(d1x) {
        K1x.bp2x.call(this);
        !!this.gL3x && this.gL3x.bp2x();
        if (this.ui8a) {
            this.ui8a.S1x();
            delete this.ui8a
        }
        if (this.gX4b) {
            this.gX4b.S1x();
            delete this.gX4b
        }
        if (this.nK6E) {
            this.nK6E.S1x();
            delete this.nK6E
        }
        if (this.Fm1x) { this.Fm1x = this.Fm1x.S1x() }
        if (this.lS6M) {
            this.lS6M.S1x();
            delete this.lS6M
        }
    };
    l1x.mp6j = function(e1x) {
        if (!GUser || !GUser.userId || GUser.userId <= 0) {
            top.login();
            return
        }
        if (e1x.title === undefined) { e1x.title = "分享" }
        if (e1x.actId) {
            var t1x = bOs5x[e1x.resourceType],
                dv3x = e1x.resourceJson,
                hp4t;
            if (k1x.ff3x(dv3x)) {
                try { dv3x = JSON.parse(dv3x) } catch (e) {}
            }
            if (t1x) {
                hp4t = l1x.bHr4v(t1x, dv3x);
                e1x.name = hp4t.title;
                e1x.author = hp4t.author;
                e1x.picUrl = hp4t.picUrl;
                e1x.type = t1x;
                e1x.rid = (dv3x || []).id
            }
        }
        n1x.wa9R.M1x(e1x)
    };
    H1x.fs3x.B1x({ element: n1x.wa9R, event: ["sharesuccess"] })
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        h1x = c1x("nej.v"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j"),
        n1x = c1x("nm.l"),
        D1x = c1x("nm.w"),
        bI2x = c1x("nej.ui"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x;
    n1x.Yr7k = NEJ.C();
    b1x = n1x.Yr7k.O1x(n1x.dV3x);
    K1x = n1x.Yr7k.cg2x;
    b1x.cm2x = function() { this.cs2x() };
    b1x.bR2x = function() {
        this.cb2x();
        var i1x = a0x.I1x(this.o1x, "j-flag");
        h1x.q1x(i1x[0], "click", this.AT0x.g1x(this))
    };
    b1x.bZ2x = function() { this.ca2x = "m-import-ok" };
    b1x.bk1x = function(e1x) {
        e1x.parent = e1x.parent || document.body;
        e1x.title = "歌曲同步完成";
        this.bl1x(e1x)
    };
    b1x.bC2x = function() { this.bH2x() };
    b1x.AT0x = function(d1x) {
        this.bp2x();
        if (location.pathname.indexOf("my") >= 0) { location.reload() } else { location.dispatch2("/my/") }
    };
    b1x.yK9B = function() { this.bp2x() };
    b1x.bEO3x = function(d1x) {
        if (d1x.keyCode == 13) this.DO1x()
    }
})();
(function() {
    var c1x = NEJ.P,
        Y1x = NEJ.O,
        h1x = c1x("nej.v"),
        a0x = c1x("nej.e"),
        v1x = c1x("nej.j"),
        N1x = c1x("nej.p"),
        k1x = c1x("nej.u"),
        n1x = c1x("nm.l"),
        D1x = c1x("nm.w"),
        bI2x = c1x("nej.ui"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        b1x, K1x;
    n1x.bAH3x = NEJ.C();
    b1x = n1x.bAH3x.O1x(n1x.dV3x);
    b1x.bZ2x = function() { this.ca2x = "m-programtips-layer" };
    b1x.bR2x = function() {
        this.cb2x();
        this.bU2x = a0x.I1x(this.o1x, "j-flag")
    };
    b1x.bk1x = function(e1x) {
        e1x.clazz = " m-layer-programtips";
        e1x.parent = e1x.parent || document.body;
        e1x.title = "付费内容提示";
        e1x.draggable = !0;
        e1x.destroyalbe = !0;
        e1x.mask = true;
        this.bl1x(e1x);
        this.gx3x = e1x.id;
        this.csD1x = e1x.radiotype;
        this.kH5M = location.protocol + "//" + (this.csC1x() || "music.163.com") + "/m/" + this.csD1x + "?id=" + this.gx3x;
        this.csb1x()
    };
    b1x.bC2x = function() { this.bH2x() };
    b1x.yK9B = function() { this.bp2x() };
    b1x.AT0x = function(d1x) {
        this.z1x("onok", A1x);
        this.bp2x()
    };
    l1x.bAB3x = function(e1x) { n1x.bAH3x.B1x(e1x).M1x() };
    b1x.csb1x = function() {
        v1x.br2x("/api/web/qrcode/get", {
            method: "POST",
            type: "json",
            data: k1x.de2x({ url: this.kH5M, size: 180 }),
            onload: function(j1x) {
                if (j1x.code == 200) { this.crP1x(j1x.qrcodeImageUrl) } else { alert("二维码获取失败") }
            }.g1x(this)
        })
    };
    b1x.csC1x = function() {
        var crD1x = location.host;
        if (crD1x.indexOf("music") >= 0) {
            return "music.163.com"
        } else {
            return "igame.163.com"
        }
    };
    b1x.crP1x = function(lf5k) { this.bU2x[0].style.backgroundImage = "url(" + lf5k + ")" }
})();
(function() {
    var c1x = NEJ.P,
        a0x = c1x("nej.e"),
        cK2x = c1x("nej.p"),
        h1x = c1x("nej.v"),
        k1x = c1x("nej.u"),
        H1x = c1x("nej.ut"),
        v1x = c1x("nej.j"),
        p1x = c1x("nm.d"),
        l1x = c1x("nm.x"),
        F1x = c1x("nm.m"),
        n1x = c1x("nm.l"),
        L1x = c1x("nm.m.f"),
        b1x, K1x;
    F1x.cP2x = NEJ.C();
    b1x = F1x.cP2x.O1x(H1x.dl2x);
    b1x.bJ2x = function() {
        var pr7k = !1;
        return function() {
            if (pr7k) return;
            pr7k = !0;
            this.bM2x();
            if (top == self) {
                return
            }
            this.rQ8I = a0x.y1x("g_backtop");
            if (window.GRef != "mail") {} else { this.bAz3x() }
            H1x.fs3x.B1x({ element: window, event: ["share", "playchange", "snsbind", "playstatechange"] });
            this.bT2x([
                [window, "scroll", this.xT9K.g1x(this)],
                [document, "keyup", this.crz1x.g1x(this)],
                [document.body, "click", this.rb7U.g1x(this)],
                [document, "mouseup", this.cry1x.g1x(this)],
                [this.rQ8I, "click", this.MC3x.g1x(this)],
                [p1x.rZ8R, "message", this.qT7M.g1x(this)]
            ]);
            l1x.bVx7q(document.body);
            this.xT9K();
            if (this.xS9J !== false && typeof GUser !== "undefined" && GUser.userId > 0) p1x.rZ8R.fU3x().uj8b();
            try {
                top.GUser = NEJ.X(top.GUser, GUser);
                top.api.refreshUserInfo();
                if (cK2x.cR2x.browser == "ie" && parseInt(cK2x.cR2x.version) < 9 && /#(.*?)$/.test(top.document.title)) { top.document.title = "网易云音乐" } else {
                    var gk3x = top.player.getPlaying();
                    if (gk3x && gk3x.track && gk3x.playing) { top.document.title = decodeURIComponent("%E2%96%B6%20") + gk3x.track.name } else { top.document.title = document.title }
                }
            } catch (e) {}
            window.share = this.xK9B.g1x(this);
            this.kh5m = p1x.hI4M.B1x();
            window.log = this.ml6f.g1x(this);
            var rq7j = location.search;
            if (rq7j) {
                var bD2x = rq7j.substr(rq7j.indexOf("?") + 1),
                    fZ3x = k1x.hl4p(bD2x);
                if (fZ3x && fZ3x["_hash"]) location.hash = fZ3x["_hash"]
            }
        }
    }();
    b1x.crz1x = function(d1x) {
        var f1x = h1x.U1x(d1x);
        try {
            if (d1x.keyCode == 80 && l1x.bHz4D() || ["textarea", "input"].indexOf(f1x.tagName.toLowerCase()) >= 0) return;
            h1x.z1x(top.document, "keyup", { ctrlKey: d1x.ctrlKey, keyCode: d1x.keyCode })
        } catch (e) {}
    };
    b1x.rb7U = function(d1x) {
        var f1x = h1x.U1x(d1x);
        if (f1x && f1x.tagName == "INPUT") return;
        var f1x = h1x.U1x(d1x, "d:pid");
        if (f1x) {
            h1x.cd2x(d1x);
            var oB6v = a0x.u1x(f1x, "pid"),
                zh0x = a0x.u1x(f1x, "ptype"),
                W1x = a0x.u1x(f1x, "action") || "play";
            switch (W1x) {
                case "subscribe":
                    l1x.lv5A({ tracks: [oB6v] });
                    break
            }
        }
        f1x = h1x.U1x(d1x, "d:resAction");
        if (f1x && f1x.className.indexOf("-dis") == -1) {
            var cE2x = a0x.u1x(f1x, "resId"),
                t1x = a0x.u1x(f1x, "resType"),
                bga9R = a0x.u1x(f1x, "resRadiotype"),
                bgb9S = a0x.u1x(f1x, "resRadioid"),
                dH3x = a0x.u1x(f1x, "resFrom"),
                j1x = a0x.u1x(f1x, "resData"),
                W1x = a0x.u1x(f1x, "resAction"),
                bpJ1x = a0x.u1x(f1x, "resCopyright"),
                Yj7c = a0x.u1x(f1x, "resAuditstatus");
            if (W1x != "log" && W1x != "bilog") h1x.cd2x(d1x);
            switch (W1x) {
                case "log":
                    j1x = (j1x || "").split("|");
                    if (!!j1x[0]) {
                        var bc1x = { id: cE2x, alg: j1x[2] || "itembased", scene: j1x[3], position: j1x[1] || 0 };
                        if (!!j1x[4]) bc1x.srcid = j1x[4];
                        window.log(j1x[0], bc1x)
                    }
                    break;
                case "bilog":
                    var crv1x = a0x.u1x(f1x, "logAction"),
                        crr1x = a0x.u1x(f1x, "logJson");
                    window.log(crv1x, crr1x);
                    break;
                case "share":
                    if (Yj7c && Yj7c == 1) { l1x.hV4Z("由于版权问题，该节目暂时无法分享。") } else { share(cE2x, t1x, a0x.u1x(f1x, "resPic"), a0x.u1x(f1x, "resName"), a0x.u1x(f1x, "resAuthor"), a0x.u1x(f1x, "resAuthors")) }
                    break;
                case "fav":
                case "subscribe":
                    if (t1x == 18) {
                        var pb7U = a0x.u1x(f1x, "resLevel"),
                            qf7Y = a0x.u1x(f1x, "resFee");
                        if (pb7U == 10) {
                            l1x.sR8J(qf7Y, cE2x, "song");
                            break
                        }
                        l1x.lv5A({ tracks: [cE2x] })
                    }
                    break;
                case "download":
                    l1x.RZ6T({ id: cE2x, type: t1x });
                    break;
                case "programtips":
                    if (Yj7c && Yj7c == 1) { l1x.hV4Z("由于版权问题，该节目暂时无法分享。") } else { l1x.bAB3x({ id: bgb9S, radiotype: bga9R }) }
                    break
            }
        }
        if (top == self) return;
        try { top.onIframeClick(d1x) } catch (e) {}
    };
    b1x.cry1x = function(d1x) {
        try { h1x.z1x(top.document, "mouseup") } catch (e) {}
    };
    b1x.xT9K = function() {
        var crl1x = function() {
            var cr2x = window.innerHeight;
            if (!k1x.uQ8I(cr2x)) cr2x = (document.documentElement || document.body).clientHeight;
            return cr2x
        };
        return function(d1x) {
            if (!this.rQ8I) return;
            var Yf7Y = crl1x(),
                fO3x = document.documentElement.scrollTop || document.body.scrollTop;
            a0x.X1x(this.rQ8I, "display", fO3x > 0 ? "" : "none");
            if (cK2x.cR2x.browser == "ie" && cK2x.cR2x.version < "7.0") {
                var gi3x = Math.min(document.body.clientHeight, Yf7Y + fO3x) - 204;
                a0x.X1x(this.rQ8I, "top", gi3x + "px")
            }
        }
    }();
    b1x.MC3x = function(d1x) {
        h1x.cd2x(d1x);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0
    };
    b1x.xK9B = function() {
        var bgk9b = function(d1x) { h1x.z1x(window, "share", d1x) };
        return function(cE2x, t1x, Bo0x, T1x, MW4a, MX4b) { l1x.mp6j({ rid: cE2x, type: t1x, purl: Bo0x, name: T1x, author: MW4a, authors: MX4b, onshare: bgk9b.g1x(this) }) }
    }();
    b1x.ml6f = function(W1x, bc1x) {
        try { top.log(W1x, bc1x) } catch (e) {
            switch (W1x) {
                case "play":
                    this.kh5m.eN3x(bc1x);
                    break;
                case "search":
                    this.kh5m.bJU4Y(bc1x);
                    break;
                default:
                    this.kh5m.gm3x(W1x, bc1x)
            }
        }
    };
    b1x.bAz3x = function() {
        var Yd7W, bgp9g = false,
            bs2x = [45, 60];
        var cre1x = function(bF2x) {
            if (bF2x.title != "MailBoxImport") return;
            var Q1x = JSON.parse(bF2x.content || "null") || Y1x;
            if (Q1x.status == 10) {
                n1x.Yr7k.B1x().M1x();
                window.clearTimeout(Yd7W)
            }
        };
        var tf8X = function(d1x) {
            if (d1x.code == 200) {
                if (d1x.status == 1) {
                    h1x.q1x(p1x.zT0x, "message", cre1x.g1x(this));
                    p1x.zT0x.B1x().bbk7d();
                    bgp9g = true
                } else {
                    if (bgp9g) {
                        if (d1x.status == 10) {
                            n1x.Yr7k.B1x().M1x();
                            h1x.ip4t(p1x.zT0x, "message");
                            window.clearTimeout(Yd7W);
                            bgp9g = false
                        }
                    } else { window.clearTimeout(Yd7W) }
                }
            }
        };
        return function() {
            var rY8Q = bs2x.shift() * 1e3;
            v1x.br2x("/api/musicbox/mail/status", { type: "json", method: "get", onload: tf8X.g1x(this) });
            if (rY8Q) { Yd7W = window.setTimeout(arguments.callee, rY8Q) }
        }
    }();
    b1x.qT7M = function(d1x) {
        try { top.polling(d1x) } catch (e) {}
    }
})()
