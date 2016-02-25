(function() {
    var $c = function(a) {
        this.w = a || []
    };
    $c.prototype.set = function(a) {
        this.w[a]=!0
    };
    $c.prototype.encode = function() {
        for (var a = [], b = 0; b < this.w.length; b++)
            this.w[b] && (a[Math.floor(b / 6)]^=1<<b%6);
        for (b = 0; b < a.length; b++)
            a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
        return a.join("") + "~"
    };
    var vd = new $c;
    function J(a) {
        vd.set(a)
    }
    var Nd = function(a, b) {
        var c = new $c(Dd(a));
        c.set(b);
        a.set(Gd, c.w)
    }, Td = function(a) {
        a = Dd(a);
        a = new $c(a);
        for (var b = vd.w.slice(), c = 0; c < a.w.length; c++)
            b[c] = b[c] || a.w[c];
        return (new $c(b)).encode()
    }, Dd = function(a) {
        a = a.get(Gd);
        ka(a) || (a = []);
        return a
    };
    var ea = function(a) {
        return "function" == typeof a
    }, ka = function(a) {
        return "[object Array]" == Object.prototype.toString.call(Object(a))
    }, qa = function(a) {
        return void 0 != a&&-1 < (a.constructor + "").indexOf("String")
    }, D = function(a, b) {
        return 0 == a.indexOf(b)
    }, sa = function(a) {
        return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }, ta = function(a) {
        var b = M.createElement("img");
        b.width = 1;
        b.height = 1;
        b.src = a;
        return b
    }, ua = function() {}, K = function(a) {
        if (encodeURIComponent instanceof Function)
            return encodeURIComponent(a);
        J(28);
        return a
    },
    L = function(a, b, c, d) {
        try {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        } catch (e) {
            J(27)
        }
    }, wa = function(a, b) {
        if (a) {
            var c = M.createElement("script");
            c.type = "text/javascript";
            c.async=!0;
            c.src = a;
            b && (c.id = b);
            var d = M.getElementsByTagName("script")[0];
            d.parentNode.insertBefore(c, d)
        }
    }, Ud = function() {
        return "https:" == M.location.protocol
    }, xa = function() {
        var a = "" + M.location.hostname;
        return 0 == a.indexOf("www.") ? a.substring(4) : a
    }, ya = function(a) {
        var b = M.referrer;
        if (/^https?:\/\//i.test(b)) {
            if (a)
                return b;
            a = "//" + M.location.hostname;
            var c = b.indexOf(a);
            if (5 == c || 6 == c)
                if (a = b.charAt(c + a.length), "/" == a || "?" == a || "" == a || ":" == a)
                    return;
            return b
        }
    }, za = function(a, b) {
        if (1 == b.length && null != b[0] && "object" === typeof b[0])
            return b[0];
        for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
            if ("object" === typeof b[e]) {
                for (var g in b[e])
                    b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
                    break
            } else
                e < a.length && (c[a[e]] = b[e]);
        return c
    };
    var ee = function() {
        this.keys = [];
        this.values = {};
        this.m = {}
    };
    ee.prototype.set = function(a, b, c) {
        this.keys.push(a);
        c ? this.m[":" + a] = b : this.values[":" + a] = b
    };
    ee.prototype.get = function(a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.values[":" + a]
    };
    ee.prototype.map = function(a) {
        for (var b = 0; b < this.keys.length; b++) {
            var c = this.keys[b], d = this.get(c);
            d && a(c, d)
        }
    };
    var O = window, M = document;
    var Aa = function(a) {
        var b = O._gaUserPrefs;
        if (b && b.ioo && b.ioo() || a&&!0 === O["ga-disable-" + a])
            return !0;
        try {
            var c = O.external;
            if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                return !0
        } catch (d) {}
        return !1
    };
    var Ca = function(a) {
        var b = [], c = M.cookie.split(";");
        a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
        for (var d = 0; d < c.length; d++) {
            var e = c[d].match(a);
            e && b.push(e[1])
        }
        return b
    }, zc = function(a, b, c, d, e, g) {
        e = Aa(e)?!1 : eb.test(M.location.hostname) || "/" == c && vc.test(d)?!1 : !0;
        if (!e)
            return !1;
        b && 1200 < b.length && (b = b.substring(0, 1200), J(24));
        c = a + "=" + b + "; path=" + c + "; ";
        g && (c += "expires=" + (new Date((new Date).getTime() + g)).toGMTString() + "; ");
        d && "none" != d && (c += "domain=" + d + ";");
        d = M.cookie;
        M.cookie = c;
        if (!(d = d != M.cookie))
            a: {
            a =
            Ca(a);
            for (d = 0; d < a.length; d++)
                if (b == a[d]) {
                    d=!0;
                    break a
                }
                d=!1
        }
        return d
    }, Cc = function(a) {
        return K(a).replace(/\(/g, "%28").replace(/\)/g, "%29")
    }, vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, eb = /(^|\.)doubleclick\.net$/i;
    var oc = function() {
        return (Ba || Ud() ? "https:" : "http:") + "//www.google-analytics.com"
    }, Da = function(a) {
        this.name = "len";
        this.message = a + "-8192"
    }, ba = function(a, b, c) {
        c = c || ua;
        if (2036 >= b.length)
            wc(a, b, c);
        else if (8192 >= b.length)
            x(a, b, c) || wd(a, b, c) || wc(a, b, c);
        else
            throw ge("len", b.length), new Da(b.length);
    }, wc = function(a, b, c) {
        var d = ta(a + "?" + b);
        d.onload = d.onerror = function() {
            d.onload = null;
            d.onerror = null;
            c()
        }
    }, wd = function(a, b, c) {
        var d = O.XMLHttpRequest;
        if (!d)
            return !1;
        var e = new d;
        if (!("withCredentials"in e))
            return !1;
        e.open("POST", a, !0);
        e.withCredentials=!0;
        e.setRequestHeader("Content-Type", "text/plain");
        e.onreadystatechange = function() {
            4 == e.readyState && (c(), e = null)
        };
        e.send(b);
        return !0
    }, x = function(a, b, c) {
        return O.navigator.sendBeacon ? O.navigator.sendBeacon(a, b) ? (c(), !0) : !1 : !1
    }, ge = function(a, b, c) {
        1 <= 100 * Math.random() || Aa("?") || (a = ["t=error", "_e=" + a, "_v=j41", "sr=1"], b && a.push("_f=" + b), c && a.push("_m=" + K(c.substring(0, 100))), a.push("aip=1"), a.push("z=" + hd()), wc(oc() + "/collect", a.join("&"), ua))
    };
    var Ha = function() {
        this.M = []
    };
    Ha.prototype.add = function(a) {
        this.M.push(a)
    };
    Ha.prototype.D = function(a) {
        try {
            for (var b = 0; b < this.M.length; b++) {
                var c = a.get(this.M[b]);
                c && ea(c) && c.call(O, a)
            }
        } catch (d) {}
        b = a.get(Ia);
        b != ua && ea(b) && (a.set(Ia, ua, !0), setTimeout(b, 10))
    };
    function Ja(a) {
        if (100 != a.get(Ka) && La(P(a, Q))%1E4 >= 100 * R(a, Ka))
            throw "abort";
    }
    function Ma(a) {
        if (Aa(P(a, Na)))
            throw "abort";
    }
    function Oa() {
        var a = M.location.protocol;
        if ("http:" != a && "https:" != a)
            throw "abort";
    }
    function Pa(a) {
        try {
            O.navigator.sendBeacon ? J(42) : O.XMLHttpRequest && "withCredentials"in new O.XMLHttpRequest && J(40)
        } catch (c) {}
        a.set(ld, Td(a), !0);
        a.set(Ac, R(a, Ac) + 1);
        var b = [];
        Qa.map(function(c, d) {
            if (d.F) {
                var e = a.get(c);
                void 0 != e && e != d.defaultValue && ("boolean" == typeof e && (e*=1), b.push(d.F + "=" + K("" + e)))
            }
        });
        b.push("z=" + Bd());
        a.set(Ra, b.join("&"), !0)
    }
    function Sa(a) {
        var b = P(a, gd) || oc() + "/collect", c = P(a, fa);
        !c && a.get(Vd) && (c = "beacon");
        if (c) {
            var d = P(a, Ra), e = a.get(Ia), e = e || ua;
            "image" == c ? wc(b, d, e) : "xhr" == c && wd(b, d, e) || "beacon" == c && x(b, d, e) || ba(b, d, e)
        } else
            ba(b, P(a, Ra), a.get(Ia));
        a.set(Ia, ua, !0)
    }
    function Hc(a) {
        var b = O.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
    }
    function cd() {
        if (O.navigator && "preview" == O.navigator.loadPurpose)
            throw "abort";
    }
    function yd(a) {
        var b = O.gaDevIds;
        ka(b) && 0 != b.length && a.set("&did", b.join(","), !0)
    }
    function vb(a) {
        if (!a.get(Na))
            throw "abort";
    };
    var hd = function() {
        return Math.round(2147483647 * Math.random())
    }, Bd = function() {
        try {
            var a = new Uint32Array(1);
            O.crypto.getRandomValues(a);
            return a[0] & 2147483647
        } catch (b) {
            return hd()
        }
    };
    function Ta(a) {
        var b = R(a, Ua);
        500 <= b && J(15);
        var c = P(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = R(a, Wa), d = (new Date).getTime(), e = R(a, Xa);
            0 == e && a.set(Xa, d);
            e = Math.round(2 * (d - e) / 1E3);
            0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
            if (0 >= c)
                throw "abort";
            a.set(Wa, --c)
        }
        a.set(Ua, ++b)
    };
    var Ya = function() {
        this.data = new ee
    }, Qa = new ee, Za = [];
    Ya.prototype.get = function(a) {
        var b = $a(a), c = this.data.get(a);
        b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
        return b && b.Z ? b.Z(this, a, c) : c
    };
    var P = function(a, b) {
        var c = a.get(b);
        return void 0 == c ? "" : "" + c
    }, R = function(a, b) {
        var c = a.get(b);
        return void 0 == c || "" === c ? 0 : 1 * c
    };
    Ya.prototype.set = function(a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a)
                    a.hasOwnProperty(d) && ab(this, d, a[d], c);
            else
                ab(this, a, b, c)
    };
    var ab = function(a, b, c, d) {
        if (void 0 != c)
            switch (b) {
            case Na:
                wb.test(c)
            }
        var e = $a(b);
        e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
    }, bb = function(a, b, c, d, e) {
        this.name = a;
        this.F = b;
        this.Z = d;
        this.o = e;
        this.defaultValue = c
    }, $a = function(a) {
        var b = Qa.get(a);
        if (!b)
            for (var c = 0; c < Za.length; c++) {
                var d = Za[c], e = d[0].exec(a);
                if (e) {
                    b = d[1](e);
                    Qa.set(b.name, b);
                    break
                }
            }
        return b
    }, yc = function(a) {
        var b;
        Qa.map(function(c, d) {
            d.F == a && (b = d)
        });
        return b && b.name
    }, S = function(a, b, c, d, e) {
        a = new bb(a, b, c, d, e);
        Qa.set(a.name, a);
        return a.name
    }, cb = function(a,
    b) {
        Za.push([new RegExp("^" + a + "$"), b])
    }, T = function(a, b, c) {
        return S(a, b, c, void 0, db)
    }, db = function() {};
    var gb = qa(window.GoogleAnalyticsObject) && sa(window.GoogleAnalyticsObject) || "ga", Ba=!1, he = S("_br"), hb = T("apiVersion", "v"), ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"), Va = S("hitType", "t"), Ia = S("hitCallback"), Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    S("dataSource", "ds");
    var Vd = S("useBeacon", void 0, !1), fa = S("transport");
    S("sessionControl", "sc", "");
    S("sessionGroup", "sg");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("screenName", "cd");
    var kb = S("location", "dl", ""), lb = S("referrer", "dr"), mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"), ob = S("encoding", "de");
    S("title", "dt", function() {
        return M.title || void 0
    });
    cb("contentGroup([0-9]+)", function(a) {
        return new bb(a[0], "cg" + a[1])
    });
    var pb = S("screenColors", "sd"), qb = S("screenResolution", "sr"), rb = S("viewportSize", "vp"), sb = S("javaEnabled", "je"), tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"), xb = S("eventAction", "ea"), yb = S("eventLabel", "el"), zb = S("eventValue", "ev"), Bb = S("socialNetwork", "sn"), Cb = S("socialAction", "sa"), Db = S("socialTarget", "st"), Eb = S("l1", "plt"), Fb = S("l2", "pdt"), Gb = S("l3", "dns"), Hb = S("l4", "rrt"), Ib = S("l5", "srt"), Jb = S("l6", "tcp"), Kb = S("l7", "dit"), Lb = S("l8", "clt"), Mb = S("timingCategory", "utc"), Nb = S("timingVar", "utv"), Ob = S("timingLabel", "utl"), Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"), Oc = S("expVar", "xvar"), Rc = S("_utma", "_utma"), Sc = S("_utmz", "_utmz"), Tc = S("_utmht", "_utmht"), Ua = S("_hc", void 0, 0), Xa = S("_ti", void 0, 0), Wa = S("_to", void 0, 20);
    cb("dimension([0-9]+)", function(a) {
        return new bb(a[0], "cd" + a[1])
    });
    cb("metric([0-9]+)", function(a) {
        return new bb(a[0], "cm" + a[1])
    });
    S("linkerParam", void 0, void 0, Bc, db);
    var ld = S("usage", "_u"), Gd = S("_um");
    S("forceSSL", void 0, void 0, function() {
        return Ba
    }, function(a, b, c) {
        J(34);
        Ba=!!c
    });
    var ed = S("_j1", "jid");
    cb("\\&(.*)", function(a) {
        var b = new bb(a[0], a[1]), c = yc(a[0].substring(1));
        c && (b.Z = function(a) {
            return a.get(c)
        }, b.o = function(a, b, g, ca) {
            a.set(c, g, ca)
        }, b.F = void 0);
        return b
    });
    var Qb = T("_oot"), dd = S("previewTask"), Rb = S("checkProtocolTask"), md = S("validationTask"), Sb = S("checkStorageTask"), Uc = S("historyImportTask"), Tb = S("samplerTask"), Vb = S("_rlt"), Wb = S("buildHitTask"), Xb = S("sendHitTask"), Vc = S("ceTask"), zd = S("devIdTask"), Cd = S("timingTask"), Ld = S("displayFeaturesTask"), V = T("name"), Q = T("clientId", "cid"), Ad = S("userId", "uid"), Na = T("trackingId", "tid"), U = T("cookieName", void 0, "_ga"), W = T("cookieDomain"), Yb = T("cookiePath", void 0, "/"), Zb = T("cookieExpires", void 0, 63072E3), $b = T("legacyCookieDomain"),
    Wc = T("legacyHistoryImport", void 0, !0), ac = T("storage", void 0, "cookie"), bc = T("allowLinker", void 0, !1), cc = T("allowAnchor", void 0, !0), Ka = T("sampleRate", "sf", 100), dc = T("siteSpeedSampleRate", void 0, 1), ec = T("alwaysSendReferrer", void 0, !1), gd = S("transportUrl"), Md = S("_r", "_r");
    function X(a, b, c, d) {
        b[a] = function() {
            try {
                return d && J(d), c.apply(this, arguments)
            } catch (b) {
                throw ge("exc", a, b && b.name), b;
            }
        }
    };
    var Od = function(a, b, c) {
        this.V = 1E4;
        this.fa = a;
        this.$=!1;
        this.B = b;
        this.ea = c || 1
    }, Ed = function(a, b) {
        var c;
        if (a.fa && a.$)
            return 0;
        a.$=!0;
        if (b) {
            if (a.B && R(b, a.B))
                return R(b, a.B);
            if (0 == b.get(dc))
                return 0
        }
        if (0 == a.V)
            return 0;
        void 0 === c && (c = Bd());
        return 0 == c%a.V ? Math.floor(c / a.V)%a.ea + 1 : 0
    };
    var ie = new Od(!0, he, 7), je = function(a) {
        if (!Ud()&&!Ba) {
            var b = Ed(ie, a);
            if (b&&!(!O.navigator.sendBeacon && 4 <= b && 6 >= b)) {
                var c = (new Date).getHours(), d = [Bd(), Bd(), Bd()].join(".");
                a = (3 == b || 5 == b ? "https:" : "http:") + "//www.google-analytics.com/collect?z=br.";
                a += [b, "A", c, d].join(".");
                var e = 1 != b%3 ? "https:": "http:", e = e + "//www.google-analytics.com/collect?z=br.", e = e + [b, "B", c, d].join(".");
                7 == b && (e = e.replace("//www.", "//ssl."));
                c = function() {
                    4 <= b && 6 >= b ? O.navigator.sendBeacon(e, "") : ta(e)
                };
                Bd()%2 ? (ta(a), c()) : (c(), ta(a))
            }
        }
    };
    function fc() {
        var a, b, c;
        if ((c = (c = O.navigator) ? c.plugins : null) && c.length)
            for (var d = 0; d < c.length&&!b; d++) {
                var e = c[d];
                - 1 < e.name.indexOf("Shockwave Flash") && (b = e.description)
            }
        if (!b)
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
        } catch (g) {}
        if (!b)
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
        } catch (g) {}
        if (!b)
            try {
                a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
        } catch (g) {}
        b &&
        (a = b.match(/[\d]+/g)) && 3 <= a.length && (b = a[0] + "." + a[1] + " r" + a[2]);
        return b || void 0
    };
    var gc = function(a, b) {
        var c = Math.min(R(a, dc), 100);
        if (!(La(P(a, Q))%100 >= c) && (c = {}, Ec(c) || Fc(c))) {
            var d = c[Eb];
            void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : L(O, "load", function() {
                gc(a, b)
            }, !1))
        }
    }, Ec = function(a) {
        var b = O.performance || O.webkitPerformance, b = b && b.timing;
        if (!b)
            return !1;
        var c = b.navigationStart;
        if (0 == c)
            return !1;
        a[Eb] = b.loadEventStart - c;
        a[Gb] = b.domainLookupEnd - b.domainLookupStart;
        a[Jb] = b.connectEnd - b.connectStart;
        a[Ib] = b.responseStart - b.requestStart;
        a[Fb] = b.responseEnd - b.responseStart;
        a[Hb] = b.fetchStart - c;
        a[Kb] = b.domInteractive - c;
        a[Lb] = b.domContentLoadedEventStart - c;
        return !0
    }, Fc = function(a) {
        if (O.top != O)
            return !1;
        var b = O.external, c = b && b.onloadT;
        b&&!b.isValidLoadTime && (c = void 0);
        2147483648 < c && (c = void 0);
        0 < c && b.setPageReadyTime();
        if (void 0 == c)
            return !1;
        a[Eb] = c;
        return !0
    }, Y = function(a, b) {
        var c = a[b];
        if (isNaN(c) || Infinity == c || 0 > c)
            a[b] = void 0
    }, Fd = function(a) {
        return function(b) {
            "pageview" != b.get(Va) || a.I || (a.I=!0, gc(b, function(b) {
                a.send("timing", b)
            }))
        }
    };
    var hc=!1, mc = function(a) {
        if ("cookie" == P(a, ac)) {
            var b = P(a, U), c = nd(a), d = kc(P(a, Yb)), e = lc(P(a, W)), g = 1E3 * R(a, Zb), ca = P(a, Na);
            if ("auto" != e)
                zc(b, c, d, e, ca, g) && (hc=!0);
            else {
                J(32);
                var l;
                a:
                {
                    c = [];
                    e = xa().split(".");
                    if (4 == e.length && (l = e[e.length - 1], parseInt(l, 10) == l)) {
                        l = ["none"];
                        break a
                    }
                    for (l = e.length - 2; 0 <= l; l--)
                        c.push(e.slice(l).join("."));
                    c.push("none");
                    l = c
                }
                for (var k = 0; k < l.length; k++)
                    if (e = l[k], a.data.set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
                        hc=!0;
                        return
                    }
                a.data.set(W, "auto")
            }
        }
    }, nc = function(a) {
        if ("cookie" == P(a, ac) &&
        !hc && (mc(a), !hc))
            throw "abort";
    }, Yc = function(a) {
        if (a.get(Wc)) {
            var b = P(a, W), c = P(a, $b) || xa(), d = Xc("__utma", c, b);
            d && (J(19), a.set(Tc, (new Date).getTime(), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R))
        }
    }, nd = function(a) {
        var b = Cc(P(a, Q)), c = ic(P(a, W));
        a = jc(P(a, Yb));
        1 < a && (c += "-" + a);
        return ["GA1", c, b].join(".")
    }, Gc = function(a, b, c) {
        for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
            var l = a[ca];
            l.H[c] == b ? d.push(l) : void 0 == g || l.H[c] < g ? (e = [l], g = l.H[c]) : l.H[c] == g && e.push(l)
        }
        return 0 < d.length ? d : e
    },
    lc = function(a) {
        return 0 == a.indexOf(".") ? a.substr(1) : a
    }, ic = function(a) {
        return lc(a).split(".").length
    }, kc = function(a) {
        if (!a)
            return "/";
