! function (e) {
    var t = {};

    function i(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = e, i.c = t, i.d = function (e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "", i(i.s = 0)
}([function (e, t, i) {
    e.exports = i(1)
}, function (e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    i(2);
    var n = i(3),
        r = (i.n(n), i(4)),
        a = (i.n(r), i(5));
    i.n(a);
    $(document).ready(function () {
        $(".checkbox").change(function () {
            this.checked ? $(this).parents(".change-checked").find(".input-change").removeClass("input-checked") : $(this).parents(".change-checked").find(".input-change").addClass("input-checked")
        });
        const e = $("#phone");
        e.length && e.mask("+9 (999) 999-9999");
        var t = !1;
        $(".card-link").length;
        "ar" === $("html").attr("lang") && (t = !0), $(".slider-for").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: !0,
            fade: !0,
            asNavFor: ".slider-nav",
            centerMode: !0,
            autoplaySpeed: 2e3,
            rtl: t
        }), $(".slider-nav").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: ".slider-for",
            vertical: !0,
            arrows: !0
        }), $(".slider-nav .slick-slide").click(function (e) {
            e.preventDefault();
            var t = $(this).data("slick-index");
            $(".slider-nav").slick("slickGoTo", t - 1)
        }), $("#imageUpload").change(function () {
            ! function (e) {
                if (e.files && e.files[0]) {
                    var t = new FileReader;
                    t.onload = function (e) {
                        $("#imagePreview").css("background-image", "url(" + e.target.result + ")"), $("#imagePreview").hide(), $("#imagePreview").fadeIn(650)
                    }, t.readAsDataURL(e.files[0])
                }
            }(this)
        }), $(".mobile-btn").on("click", function () {
            $(".mobile-btn").toggleClass("open"), $("header").toggleClass("open"), $("header").removeClass("position"), $("body").toggleClass("position")
        }), $(".button-add-item").on("click", function () {
            $(".popup-wr").addClass("open"), i.addClass("is-fixed")
        });
        let i = $("body");
        $(".rate-button").on("click", function () {
            $(".popup-wr").addClass("open"), i.addClass("is-fixed")
        }), $(".button-counter-offer").on("click", function () {
            $(".popup-counter-wr").addClass("open"), i.addClass("is-fixed")
        }), $(".button-offer").on("click", function () {
            $(".notification-popup").addClass("open"), i.addClass("is-fixed")
        }), $(".button-approve").on("click", function () {
            $(".popup-approve-wr").addClass("open"), i.addClass("is-fixed")
        }), $(".offer-sent-button").on("click", function () {
            $(".popup-offer-sent").addClass("open"), $(".notification-popup").removeClass("open")
        }), $(".popup-wr .overlay, .popup-wr .close").on("click", function () {
            $(".popup-wr").removeClass("open"), i.removeClass("is-fixed")
        }), $("ul.tabs li").on("click", function () {
            var e = $(this).attr("data-tab");
            $("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + e).addClass("current")
            }), $('select:not(.ignore)').niceSelect(), $(".dz-error-mark").html("<a class='dz-remove'>Remove file</a>"), $(".dz-default.dz-message").html("<span><pre>Drag an image here or browse <br> for an image to upload.</pre></span>"), "rtl" == $("html").attr("dir") && ($(".dz-error-mark").html("<a class='dz-remove'>Remove file</a>"), $(".dz-default.dz-message").html("<span><pre>أن تعرضت لانتقادات ف<br>أن تعرضت لانتقادات ف.</pre></span>")), $("#dropzone").dropzone({
            url: "/file/post"
        }), $(".header-search").on("click", function () {
            $(".header-search__input-container").addClass("active").show
        }), $(".search-closer").on("click", function () {
            $("#search-form input").val(""), $(".header-search-results").slideUp(300), setTimeout(function () {
                $(".header-search__input-container").removeClass("active")
            }, 400)
        }), $("#search-form input").on("input", function () {
            $("#search-form input").val().length > 0 ? ($(".header-search-results").fadeIn(600), $(".header-search-results").addClass("active")) : ($(".header-search-results").fadeOut(400), $(".header-search-results").removeClass("active"))
        }), $("#search-form-1 input").on("input", function () {
            $("#search-form-1 input").val().length > 0 ? ($(".header-search-results").fadeIn(600), $(".header-search-results").addClass("active")) : ($(".header-search-results").fadeOut(400), $(".header-search-results").removeClass("active"))
        }), $(".faq-i").on("click", function () {
            $(this).toggleClass("open"), $(this).find(".faq-head").toggleClass("open"), $(this).find(".faq-description").toggleClass("open")
        }), $(".section-head").on("click", function () {
            $(this).toggleClass("open"), $(this).parents(".filter-section").find(".section-description").toggleClass("open")
        }), $(".filter-dropdown .section-head").on("click", function () {
            $(".filter-box").slideToggle(500), $(".filter-box").toggleClass("open")
        })
    }),
        //$(function () {
        //let e, t, i, n, r;
        //"en" == $("html").attr("lang") ? (e = window.location.pathname, t = window.location.origin, "/" === e && (e = "/index.html"), i = e.split(".")[0] + "-ar.html", $(".language").not(".active").attr("href", i)) : (e = window.location.pathname, t = window.location.origin, n = (r = (i = e.split(".")[0]).split("/")[2]).split("-")[0] + ".html", $(".language").not(".active").attr("href", "/up-rootsa-saveroom/" + n))
        //}),
        $("#slider-range").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [50, 250],
        slide: function (e, t) {
            $(".ui-slider-handle:eq(0) .price-range-min").html("$" + t.values[0]), $(".ui-slider-handle:eq(1) .price-range-max").html("$" + t.values[1]), $(".price-range-both").html("<i>$" + t.values[0] + " - </i>$" + t.values[1]), t.values[0] == t.values[1] ? $(".price-range-both i").css("display", "none") : $(".price-range-both i").css("display", "inline"), 1 == function (e, t) {
                var i = e.offset().left,
                    n = i + 40,
                    r = t.offset().left;
                return !(n < r || i > r + 40)
            }($(".price-range-min"), $(".price-range-max")) ? ($(".price-range-min, .price-range-max").css("opacity", "0"), $(".price-range-both").css("display", "block")) : ($(".price-range-min, .price-range-max").css("opacity", "1"), $(".price-range-both").css("display", "none"))
        }
    }), $(".ui-slider-range").append('<span class="price-range-both value"><i>$' + $("#slider-range").slider("values", 0) + " - </i>" + $("#slider").slider("values", 1) + "</span>"), $(".ui-slider-handle:eq(0)").append('<span class="price-range-min value">$' + $("#slider-range").slider("values", 0) + "</span>"), $(".ui-slider-handle:eq(1)").append('<span class="price-range-max value">$' + $("#slider-range").slider("values", 1) + "</span>"), $(window).width() <= 600 && ($(".section-head").removeClass("open"), $(".section-head").parents(".filter-section").find(".section-description").removeClass("open"))
}, function (e, t, i) {
    "use strict";
    ({
        render: function () { },
        init: function () {
            this.render()
        }
    }).init()
}, function (e, t) {
    ! function (e) {
        var t, i = function () {
            var e = document.createElement("input"),
                t = "onpaste";
            return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
        }() + ".mask",
            n = navigator.userAgent,
            r = /iphone/i.test(n),
            a = /android/i.test(n);
        e.mask = {
            definitions: {
                9: "[0-9]",
                a: "[A-Za-z]",
                "*": "[A-Za-z0-9]"
            },
            dataName: "rawMaskFn",
            placeholder: "_"
        }, e.fn.extend({
            caret: function (e, t) {
                var i;
                if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                    this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", e), i.select())
                })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), e = 0 - i.duplicate().moveStart("character", -1e5), t = e + i.text.length), {
                    begin: e,
                    end: t
                })
            },
            unmask: function () {
                return this.trigger("unmask")
            },
            mask: function (n, s) {
                var o, l, u, c, d;
                return !n && this.length > 0 ? e(this[0]).data(e.mask.dataName)() : (s = e.extend({
                    placeholder: e.mask.placeholder,
                    completed: null
                }, s), o = e.mask.definitions, l = [], u = d = n.length, c = null, e.each(n.split(""), function (e, t) {
                    "?" == t ? (d-- , u = e) : o[t] ? (l.push(RegExp(o[t])), null === c && (c = l.length - 1)) : l.push(null)
                }), this.trigger("unmask").each(function () {
                    function p(e) {
                        for (; d > ++e && !l[e];);
                        return e
                    }

                    function h(e, t) {
                        var i, n;
                        if (!(0 > e)) {
                            for (i = e, n = p(t); d > i; i++)
                                if (l[i]) {
                                    if (!(d > n && l[i].test(k[n]))) break;
                                    k[i] = k[n], k[n] = s.placeholder, n = p(n)
                                } m(), g.caret(Math.max(c, e))
                        }
                    }

                    function f(e, t) {
                        var i;
                        for (i = e; t > i && d > i; i++) l[i] && (k[i] = s.placeholder)
                    }

                    function m() {
                        g.val(k.join(""))
                    }

                    function v(e) {
                        var t, i, n = g.val(),
                            r = -1;
                        for (t = 0, pos = 0; d > t; t++)
                            if (l[t]) {
                                for (k[t] = s.placeholder; pos++ < n.length;)
                                    if (i = n.charAt(pos - 1), l[t].test(i)) {
                                        k[t] = i, r = t;
                                        break
                                    } if (pos > n.length) break
                            } else k[t] === n.charAt(pos) && t !== u && (pos++ , r = t);
                        return e ? m() : u > r + 1 ? (g.val(""), f(0, d)) : (m(), g.val(g.val().substring(0, r + 1))), u ? t : c
                    }
                    var g = e(this),
                        k = e.map(n.split(""), function (e) {
                            return "?" != e ? o[e] ? s.placeholder : e : void 0
                        }),
                        b = g.val();
                    g.data(e.mask.dataName, function () {
                        return e.map(k, function (e, t) {
                            return l[t] && e != s.placeholder ? e : null
                        }).join("")
                    }), g.attr("readonly") || g.one("unmask", function () {
                        g.unbind(".mask").removeData(e.mask.dataName)
                    }).bind("focus.mask", function () {
                        var e;
                        clearTimeout(t), b = g.val(), e = v(), t = setTimeout(function () {
                            m(), e == n.length ? g.caret(0, e) : g.caret(e)
                        }, 10)
                    }).bind("blur.mask", function () {
                        v(), g.val() != b && g.change()
                    }).bind("keydown.mask", function (e) {
                        var t, i, n, a = e.which;
                        8 === a || 46 === a || r && 127 === a ? (i = (t = g.caret()).begin, 0 == (n = t.end) - i && (i = 46 !== a ? function (e) {
                            for (; --e >= 0 && !l[e];);
                            return e
                        }(i) : n = p(i - 1), n = 46 === a ? p(n) : n), f(i, n), h(i, n - 1), e.preventDefault()) : 27 == a && (g.val(b), g.caret(0, v()), e.preventDefault())
                    }).bind("keypress.mask", function (t) {
                        var i, n, r, o = t.which,
                            u = g.caret();
                        t.ctrlKey || t.altKey || t.metaKey || 32 > o || o && (0 != u.end - u.begin && (f(u.begin, u.end), h(u.begin, u.end - 1)), i = p(u.begin - 1), d > i && (n = String.fromCharCode(o), l[i].test(n) && (function (e) {
                            var t, i, n, r;
                            for (t = e, i = s.placeholder; d > t; t++)
                                if (l[t]) {
                                    if (n = p(t), r = k[t], k[t] = i, !(d > n && l[n].test(r))) break;
                                    i = r
                                }
                        }(i), k[i] = n, m(), r = p(i), a ? setTimeout(e.proxy(e.fn.caret, g, r), 0) : g.caret(r), s.completed && r >= d && s.completed.call(g))), t.preventDefault())
                    }).bind(i, function () {
                        setTimeout(function () {
                            var e = v(!0);
                            g.caret(e), s.completed && e == g.val().length && s.completed.call(g)
                        }, 0)
                    }), v()
                }))
            }
        })
    }(jQuery)
}, function (e, t) {
    ! function (e) {
        e.fn.niceSelect = function (t) {
            if ("string" == typeof t) return "update" == t ? this.each(function () {
                var t = e(this),
                    n = e(this).next(".nice-select"),
                    r = n.hasClass("open");
                n.length && (n.remove(), i(t), r && t.next().trigger("click"))
            }) : "destroy" == t ? (this.each(function () {
                var t = e(this),
                    i = e(this).next(".nice-select");
                i.length && (i.remove(), t.css("display", ""))
            }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;

            function i(t) {
                t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class") || "").addClass(t.attr("disabled") ? "disabled" : "").attr("tabindex", t.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
                var i = t.next(),
                    n = t.find("option"),
                    r = t.find("option:selected");
                i.find(".current").html(r.data("display") || r.text()), n.each(function (t) {
                    var n = e(this),
                        r = n.data("display");
                    i.find("ul").append(e("<li></li>").attr("data-value", n.val()).attr("data-display", r || null).addClass("option" + (n.is(":selected") ? " selected" : "") + (n.is(":disabled") ? " disabled" : "")).html(n.text()))
                })
            }
            this.hide(), this.each(function () {
                var t = e(this);
                t.next().hasClass("nice-select") || i(t)
            }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function (t) {
                var i = e(this);
                e(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
            }), e(document).on("click.nice_select", function (t) {
                0 === e(t.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option")
            }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (t) {
                var i = e(this),
                    n = i.closest(".nice-select");
                n.find(".selected").removeClass("selected"), i.addClass("selected");
                var r = i.data("display") || i.text();
                n.find(".current").text(r), n.prev("select").val(i.data("value")).trigger("change")
            }), e(document).on("keydown.nice_select", ".nice-select", function (t) {
                var i = e(this),
                    n = e(i.find(".focus") || i.find(".list .option.selected"));
                if (32 == t.keyCode || 13 == t.keyCode) return i.hasClass("open") ? n.trigger("click") : i.trigger("click"), !1;
                if (40 == t.keyCode) {
                    if (i.hasClass("open")) {
                        var r = n.nextAll(".option:not(.disabled)").first();
                        r.length > 0 && (i.find(".focus").removeClass("focus"), r.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (38 == t.keyCode) {
                    if (i.hasClass("open")) {
                        var a = n.prevAll(".option:not(.disabled)").first();
                        a.length > 0 && (i.find(".focus").removeClass("focus"), a.addClass("focus"))
                    } else i.trigger("click");
                    return !1
                }
                if (27 == t.keyCode) i.hasClass("open") && i.trigger("click");
                else if (9 == t.keyCode && i.hasClass("open")) return !1
            });
            var n = document.createElement("a").style;
            return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this
        }
    }(jQuery)
}, function (e, t, i) {
    "use strict";
    (function (e) {
        var t = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }();

        function i(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        var r = function () {
            function e() {
                n(this, e)
            }
            return t(e, [{
                key: "on",
                value: function (e, t) {
                    return this._callbacks = this._callbacks || {}, this._callbacks[e] || (this._callbacks[e] = []), this._callbacks[e].push(t), this
                }
            }, {
                key: "emit",
                value: function (e) {
                    this._callbacks = this._callbacks || {};
                    var t = this._callbacks[e];
                    if (t) {
                        for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                        for (var a = 0, s = s = t; ;) {
                            if (a >= s.length) break;
                            s[a++].apply(this, n)
                        }
                    }
                    return this
                }
            }, {
                key: "off",
                value: function (e, t) {
                    if (!this._callbacks || 0 === arguments.length) return this._callbacks = {}, this;
                    var i = this._callbacks[e];
                    if (!i) return this;
                    if (1 === arguments.length) return delete this._callbacks[e], this;
                    for (var n = 0; n < i.length; n++) {
                        if (i[n] === t) {
                            i.splice(n, 1);
                            break
                        }
                    }
                    return this
                }
            }]), e
        }(),
            a = function (e) {
                function a(e, t) {
                    n(this, a);
                    var r, s = i(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this)),
                        o = void 0;
                    if (s.element = e, s.version = a.version, s.defaultOptions.previewTemplate = s.defaultOptions.previewTemplate.replace(/\n*/g, ""), s.clickableElements = [], s.listeners = [], s.files = [], "string" == typeof s.element && (s.element = document.querySelector(s.element)), !s.element || null == s.element.nodeType) throw new Error("Invalid dropzone element.");
                    if (s.element.dropzone) throw new Error("Dropzone already attached.");
                    a.instances.push(s), s.element.dropzone = s;
                    var l, u = null != (r = a.optionsForElement(s.element)) ? r : {};
                    if (s.options = a.extend({}, s.defaultOptions, u, null != t ? t : {}), s.options.forceFallback || !a.isBrowserSupported()) return l = s.options.fallback.call(s), i(s, l);
                    if (null == s.options.url && (s.options.url = s.element.getAttribute("action")), !s.options.url) throw new Error("No URL provided.");
                    if (s.options.acceptedFiles && s.options.acceptedMimeTypes) throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");
                    if (s.options.uploadMultiple && s.options.chunking) throw new Error("You cannot set both: uploadMultiple and chunking.");
                    return s.options.acceptedMimeTypes && (s.options.acceptedFiles = s.options.acceptedMimeTypes, delete s.options.acceptedMimeTypes), null != s.options.renameFilename && (s.options.renameFile = function (e) {
                        return s.options.renameFilename.call(s, e.name, e)
                    }), s.options.method = s.options.method.toUpperCase(), (o = s.getExistingFallback()) && o.parentNode && o.parentNode.removeChild(o), !1 !== s.options.previewsContainer && (s.options.previewsContainer ? s.previewsContainer = a.getElement(s.options.previewsContainer, "previewsContainer") : s.previewsContainer = s.element), s.options.clickable && (!0 === s.options.clickable ? s.clickableElements = [s.element] : s.clickableElements = a.getElements(s.options.clickable, "clickable")), s.init(), s
                }
                return function (e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(a, r), t(a, null, [{
                    key: "initClass",
                    value: function () {
                        this.prototype.Emitter = r, this.prototype.events = ["drop", "dragstart", "dragend", "dragenter", "dragover", "dragleave", "addedfile", "addedfiles", "removedfile", "thumbnail", "error", "errormultiple", "processing", "processingmultiple", "uploadprogress", "totaluploadprogress", "sending", "sendingmultiple", "success", "successmultiple", "canceled", "canceledmultiple", "complete", "completemultiple", "reset", "maxfilesexceeded", "maxfilesreached", "queuecomplete"], this.prototype.defaultOptions = {
                            url: null,
                            method: "post",
                            withCredentials: !1,
                            timeout: 3e4,
                            parallelUploads: 2,
                            uploadMultiple: !1,
                            chunking: !1,
                            forceChunking: !1,
                            chunkSize: 2e6,
                            parallelChunkUploads: !1,
                            retryChunks: !1,
                            retryChunksLimit: 3,
                            maxFilesize: 256,
                            paramName: "file",
                            createImageThumbnails: !0,
                            maxThumbnailFilesize: 10,
                            thumbnailWidth: 120,
                            thumbnailHeight: 120,
                            thumbnailMethod: "crop",
                            resizeWidth: null,
                            resizeHeight: null,
                            resizeMimeType: null,
                            resizeQuality: .8,
                            resizeMethod: "contain",
                            filesizeBase: 1e3,
                            maxFiles: null,
                            headers: null,
                            clickable: !0,
                            ignoreHiddenFiles: !0,
                            acceptedFiles: null,
                            acceptedMimeTypes: null,
                            autoProcessQueue: !0,
                            autoQueue: !0,
                            addRemoveLinks: !1,
                            previewsContainer: null,
                            hiddenInputContainer: "body",
                            capture: null,
                            renameFilename: null,
                            renameFile: null,
                            forceFallback: !1,
                            dictDefaultMessage: "Drop files here to upload",
                            dictFallbackMessage: "Your browser does not support drag'n'drop file uploads.",
                            dictFallbackText: "Please use the fallback form below to upload your files like in the olden days.",
                            dictFileTooBig: "File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",
                            dictInvalidFileType: "You can't upload files of this type.",
                            dictResponseError: "Server responded with {{statusCode}} code.",
                            dictCancelUpload: "Cancel upload",
                            dictUploadCanceled: "Upload canceled.",
                            dictCancelUploadConfirmation: "Are you sure you want to cancel this upload?",
                            dictRemoveFile: "Remove file",
                            dictRemoveFileConfirmation: null,
                            dictMaxFilesExceeded: "You can not upload any more files.",
                            dictFileSizeUnits: {
                                tb: "TB",
                                gb: "GB",
                                mb: "MB",
                                kb: "KB",
                                b: "b"
                            },
                            init: function () { },
                            params: function (e, t, i) {
                                if (i) return {
                                    dzuuid: i.file.upload.uuid,
                                    dzchunkindex: i.index,
                                    dztotalfilesize: i.file.size,
                                    dzchunksize: this.options.chunkSize,
                                    dztotalchunkcount: i.file.upload.totalChunkCount,
                                    dzchunkbyteoffset: i.index * this.options.chunkSize
                                }
                            },
                            accept: function (e, t) {
                                return t()
                            },
                            chunksUploaded: function (e, t) {
                                t()
                            },
                            fallback: function () {
                                var e = void 0;
                                this.element.className = this.element.className + " dz-browser-not-supported";
                                for (var t = 0, i = i = this.element.getElementsByTagName("div"); ;) {
                                    if (t >= i.length) break;
                                    var n = i[t++];
                                    if (/(^| )dz-message($| )/.test(n.className)) {
                                        e = n, n.className = "dz-message";
                                        break
                                    }
                                }
                                e || (e = a.createElement('<div class="dz-message"><span></span></div>'), this.element.appendChild(e));
                                var r = e.getElementsByTagName("span")[0];
                                return r && (null != r.textContent ? r.textContent = this.options.dictFallbackMessage : null != r.innerText && (r.innerText = this.options.dictFallbackMessage)), this.element.appendChild(this.getFallbackForm())
                            },
                            resize: function (e, t, i, n) {
                                var r = {
                                    srcX: 0,
                                    srcY: 0,
                                    srcWidth: e.width,
                                    srcHeight: e.height
                                },
                                    a = e.width / e.height;
                                null == t && null == i ? (t = r.srcWidth, i = r.srcHeight) : null == t ? t = i * a : null == i && (i = t / a);
                                var s = (t = Math.min(t, r.srcWidth)) / (i = Math.min(i, r.srcHeight));
                                if (r.srcWidth > t || r.srcHeight > i)
                                    if ("crop" === n) a > s ? (r.srcHeight = e.height, r.srcWidth = r.srcHeight * s) : (r.srcWidth = e.width, r.srcHeight = r.srcWidth / s);
                                    else {
                                        if ("contain" !== n) throw new Error("Unknown resizeMethod '" + n + "'");
                                        a > s ? i = t / a : t = i * a
                                    } return r.srcX = (e.width - r.srcWidth) / 2, r.srcY = (e.height - r.srcHeight) / 2, r.trgWidth = t, r.trgHeight = i, r
                            },
                            transformFile: function (e, t) {
                                return (this.options.resizeWidth || this.options.resizeHeight) && e.type.match(/image.*/) ? this.resizeImage(e, this.options.resizeWidth, this.options.resizeHeight, this.options.resizeMethod, t) : t(e)
                            },
                            previewTemplate: '<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>',
                            drop: function (e) {
                                return this.element.classList.remove("dz-drag-hover")
                            },
                            dragstart: function (e) { },
                            dragend: function (e) {
                                return this.element.classList.remove("dz-drag-hover")
                            },
                            dragenter: function (e) {
                                return this.element.classList.add("dz-drag-hover")
                            },
                            dragover: function (e) {
                                return this.element.classList.add("dz-drag-hover")
                            },
                            dragleave: function (e) {
                                return this.element.classList.remove("dz-drag-hover")
                            },
                            paste: function (e) { },
                            reset: function () {
                                return this.element.classList.remove("dz-started")
                            },
                            addedfile: function (e) {
                                var t = this;
                                if (this.element === this.previewsContainer && this.element.classList.add("dz-started"), this.previewsContainer) {
                                    e.previewElement = a.createElement(this.options.previewTemplate.trim()), e.previewTemplate = e.previewElement, this.previewsContainer.appendChild(e.previewElement);
                                    for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-name]"); ;) {
                                        if (i >= n.length) break;
                                        var r = n[i++];
                                        r.textContent = e.name
                                    }
                                    for (var s = 0, o = o = e.previewElement.querySelectorAll("[data-dz-size]"); !(s >= o.length);)(r = o[s++]).innerHTML = this.filesize(e.size);
                                    this.options.addRemoveLinks && (e._removeLink = a.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>' + this.options.dictRemoveFile + "</a>"), e.previewElement.appendChild(e._removeLink));
                                    for (var l = function (i) {
                                        return i.preventDefault(), i.stopPropagation(), e.status === a.UPLOADING ? a.confirm(t.options.dictCancelUploadConfirmation, function () {
                                            return t.removeFile(e)
                                        }) : t.options.dictRemoveFileConfirmation ? a.confirm(t.options.dictRemoveFileConfirmation, function () {
                                            return t.removeFile(e)
                                        }) : t.removeFile(e)
                                    }, u = 0, c = c = e.previewElement.querySelectorAll("[data-dz-remove]"); ;) {
                                        if (u >= c.length) break;
                                        c[u++].addEventListener("click", l)
                                    }
                                }
                            },
                            removedfile: function (e) {
                                return null != e.previewElement && null != e.previewElement.parentNode && e.previewElement.parentNode.removeChild(e.previewElement), this._updateMaxFilesReachedClass()
                            },
                            thumbnail: function (e, t) {
                                if (e.previewElement) {
                                    e.previewElement.classList.remove("dz-file-preview");
                                    for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-thumbnail]"); ;) {
                                        if (i >= n.length) break;
                                        var r = n[i++];
                                        r.alt = e.name, r.src = t
                                    }
                                    return setTimeout(function () {
                                        return e.previewElement.classList.add("dz-image-preview")
                                    }, 1)
                                }
                            },
                            error: function (e, t) {
                                if (e.previewElement) {
                                    e.previewElement.classList.add("dz-error"), "String" != typeof t && t.error && (t = t.error);
                                    for (var i = 0, n = n = e.previewElement.querySelectorAll("[data-dz-errormessage]"); ;) {
                                        if (i >= n.length) break;
                                        n[i++].textContent = t
                                    }
                                }
                            },
                            errormultiple: function () { },
                            processing: function (e) {
                                if (e.previewElement && (e.previewElement.classList.add("dz-processing"), e._removeLink)) return e._removeLink.innerHTML = this.options.dictCancelUpload
                            },
                            processingmultiple: function () { },
                            uploadprogress: function (e, t, i) {
                                if (e.previewElement)
                                    for (var n = 0, r = r = e.previewElement.querySelectorAll("[data-dz-uploadprogress]"); ;) {
                                        if (n >= r.length) break;
                                        var a = r[n++];
                                        "PROGRESS" === a.nodeName ? a.value = t : a.style.width = t + "%"
                                    }
                            },
                            totaluploadprogress: function () { },
                            sending: function () { },
                            sendingmultiple: function () { },
                            success: function (e) {
                                if (e.previewElement) return e.previewElement.classList.add("dz-success")
                            },
                            successmultiple: function () { },
                            canceled: function (e) {
                                return this.emit("error", e, this.options.dictUploadCanceled)
                            },
                            canceledmultiple: function () { },
                            complete: function (e) {
                                if (e._removeLink && (e._removeLink.innerHTML = this.options.dictRemoveFile), e.previewElement) return e.previewElement.classList.add("dz-complete")
                            },
                            completemultiple: function () { },
                            maxfilesexceeded: function () { },
                            maxfilesreached: function () { },
                            queuecomplete: function () { },
                            addedfiles: function () { }
                        }, this.prototype._thumbnailQueue = [], this.prototype._processingThumbnail = !1
                    }
                }, {
                    key: "extend",
                    value: function (e) {
                        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                        for (var r = 0, a = a = i; ;) {
                            if (r >= a.length) break;
                            var s = a[r++];
                            for (var o in s) {
                                var l = s[o];
                                e[o] = l
                            }
                        }
                        return e
                    }
                }]), t(a, [{
                    key: "getAcceptedFiles",
                    value: function () {
                        return this.files.filter(function (e) {
                            return e.accepted
                        }).map(function (e) {
                            return e
                        })
                    }
                }, {
                    key: "getRejectedFiles",
                    value: function () {
                        return this.files.filter(function (e) {
                            return !e.accepted
                        }).map(function (e) {
                            return e
                        })
                    }
                }, {
                    key: "getFilesWithStatus",
                    value: function (e) {
                        return this.files.filter(function (t) {
                            return t.status === e
                        }).map(function (e) {
                            return e
                        })
                    }
                }, {
                    key: "getQueuedFiles",
                    value: function () {
                        return this.getFilesWithStatus(a.QUEUED)
                    }
                }, {
                    key: "getUploadingFiles",
                    value: function () {
                        return this.getFilesWithStatus(a.UPLOADING)
                    }
                }, {
                    key: "getAddedFiles",
                    value: function () {
                        return this.getFilesWithStatus(a.ADDED)
                    }
                }, {
                    key: "getActiveFiles",
                    value: function () {
                        return this.files.filter(function (e) {
                            return e.status === a.UPLOADING || e.status === a.QUEUED
                        }).map(function (e) {
                            return e
                        })
                    }
                }, {
                    key: "init",
                    value: function () {
                        var e = this;
                        if ("form" === this.element.tagName && this.element.setAttribute("enctype", "multipart/form-data"), this.element.classList.contains("dropzone") && !this.element.querySelector(".dz-message") && this.element.appendChild(a.createElement('<div class="dz-default dz-message"><span>' + this.options.dictDefaultMessage + "</span></div>")), this.clickableElements.length) {
                            ! function t() {
                                return e.hiddenFileInput && e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput), e.hiddenFileInput = document.createElement("input"), e.hiddenFileInput.setAttribute("type", "file"), (null === e.options.maxFiles || e.options.maxFiles > 1) && e.hiddenFileInput.setAttribute("multiple", "multiple"), e.hiddenFileInput.className = "dz-hidden-input", null !== e.options.acceptedFiles && e.hiddenFileInput.setAttribute("accept", e.options.acceptedFiles), null !== e.options.capture && e.hiddenFileInput.setAttribute("capture", e.options.capture), e.hiddenFileInput.style.visibility = "hidden", e.hiddenFileInput.style.position = "absolute", e.hiddenFileInput.style.top = "0", e.hiddenFileInput.style.left = "0", e.hiddenFileInput.style.height = "0", e.hiddenFileInput.style.width = "0", a.getElement(e.options.hiddenInputContainer, "hiddenInputContainer").appendChild(e.hiddenFileInput), e.hiddenFileInput.addEventListener("change", function () {
                                    var i = e.hiddenFileInput.files;
                                    if (i.length)
                                        for (var n = 0, r = r = i; !(n >= r.length);) {
                                            var a = r[n++];
                                            e.addFile(a)
                                        }
                                    return e.emit("addedfiles", i), t()
                                })
                            }()
                        }
                        this.URL = null !== window.URL ? window.URL : window.webkitURL;
                        for (var t = 0, i = i = this.events; ;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            this.on(n, this.options[n])
                        }
                        this.on("uploadprogress", function () {
                            return e.updateTotalUploadProgress()
                        }), this.on("removedfile", function () {
                            return e.updateTotalUploadProgress()
                        }), this.on("canceled", function (t) {
                            return e.emit("complete", t)
                        }), this.on("complete", function (t) {
                            if (0 === e.getAddedFiles().length && 0 === e.getUploadingFiles().length && 0 === e.getQueuedFiles().length) return setTimeout(function () {
                                return e.emit("queuecomplete")
                            }, 0)
                        });
                        var r = function (e) {
                            return e.stopPropagation(), e.preventDefault ? e.preventDefault() : e.returnValue = !1
                        };
                        return this.listeners = [{
                            element: this.element,
                            events: {
                                dragstart: function (t) {
                                    return e.emit("dragstart", t)
                                },
                                dragenter: function (t) {
                                    return r(t), e.emit("dragenter", t)
                                },
                                dragover: function (t) {
                                    var i = void 0;
                                    try {
                                        i = t.dataTransfer.effectAllowed
                                    } catch (e) { }
                                    return t.dataTransfer.dropEffect = "move" === i || "linkMove" === i ? "move" : "copy", r(t), e.emit("dragover", t)
                                },
                                dragleave: function (t) {
                                    return e.emit("dragleave", t)
                                },
                                drop: function (t) {
                                    return r(t), e.drop(t)
                                },
                                dragend: function (t) {
                                    return e.emit("dragend", t)
                                }
                            }
                        }], this.clickableElements.forEach(function (t) {
                            return e.listeners.push({
                                element: t,
                                events: {
                                    click: function (i) {
                                        return (t !== e.element || i.target === e.element || a.elementInside(i.target, e.element.querySelector(".dz-message"))) && e.hiddenFileInput.click(), !0
                                    }
                                }
                            })
                        }), this.enable(), this.options.init.call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return this.disable(), this.removeAllFiles(!0), (null != this.hiddenFileInput ? this.hiddenFileInput.parentNode : void 0) && (this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput), this.hiddenFileInput = null), delete this.element.dropzone, a.instances.splice(a.instances.indexOf(this), 1)
                    }
                }, {
                    key: "updateTotalUploadProgress",
                    value: function () {
                        var e = void 0,
                            t = 0,
                            i = 0;
                        if (this.getActiveFiles().length) {
                            for (var n = 0, r = r = this.getActiveFiles(); ;) {
                                if (n >= r.length) break;
                                var a = r[n++];
                                t += a.upload.bytesSent, i += a.upload.total
                            }
                            e = 100 * t / i
                        } else e = 100;
                        return this.emit("totaluploadprogress", e, i, t)
                    }
                }, {
                    key: "_getParamName",
                    value: function (e) {
                        return "function" == typeof this.options.paramName ? this.options.paramName(e) : this.options.paramName + (this.options.uploadMultiple ? "[" + e + "]" : "")
                    }
                }, {
                    key: "_renameFile",
                    value: function (e) {
                        return "function" != typeof this.options.renameFile ? e.name : this.options.renameFile(e)
                    }
                }, {
                    key: "getFallbackForm",
                    value: function () {
                        var e, t = void 0;
                        if (e = this.getExistingFallback()) return e;
                        var i = '<div class="dz-fallback">';
                        this.options.dictFallbackText && (i += "<p>" + this.options.dictFallbackText + "</p>"), i += '<input type="file" name="' + this._getParamName(0) + '" ' + (this.options.uploadMultiple ? 'multiple="multiple"' : void 0) + ' /><input type="submit" value="Upload!"></div>';
                        var n = a.createElement(i);
                        return "FORM" !== this.element.tagName ? (t = a.createElement('<form action="' + this.options.url + '" enctype="multipart/form-data" method="' + this.options.method + '"></form>')).appendChild(n) : (this.element.setAttribute("enctype", "multipart/form-data"), this.element.setAttribute("method", this.options.method)), null != t ? t : n
                    }
                }, {
                    key: "getExistingFallback",
                    value: function () {
                        for (var e = function (e) {
                            for (var t = 0, i = i = e; ;) {
                                if (t >= i.length) break;
                                var n = i[t++];
                                if (/(^| )fallback($| )/.test(n.className)) return n
                            }
                        }, t = ["div", "form"], i = 0; i < t.length; i++) {
                            var n, r = t[i];
                            if (n = e(this.element.getElementsByTagName(r))) return n
                        }
                    }
                }, {
                    key: "setupEventListeners",
                    value: function () {
                        return this.listeners.map(function (e) {
                            return function () {
                                var t = [];
                                for (var i in e.events) {
                                    var n = e.events[i];
                                    t.push(e.element.addEventListener(i, n, !1))
                                }
                                return t
                            }()
                        })
                    }
                }, {
                    key: "removeEventListeners",
                    value: function () {
                        return this.listeners.map(function (e) {
                            return function () {
                                var t = [];
                                for (var i in e.events) {
                                    var n = e.events[i];
                                    t.push(e.element.removeEventListener(i, n, !1))
                                }
                                return t
                            }()
                        })
                    }
                }, {
                    key: "disable",
                    value: function () {
                        var e = this;
                        return this.clickableElements.forEach(function (e) {
                            return e.classList.remove("dz-clickable")
                        }), this.removeEventListeners(), this.disabled = !0, this.files.map(function (t) {
                            return e.cancelUpload(t)
                        })
                    }
                }, {
                    key: "enable",
                    value: function () {
                        return delete this.disabled, this.clickableElements.forEach(function (e) {
                            return e.classList.add("dz-clickable")
                        }), this.setupEventListeners()
                    }
                }, {
                    key: "filesize",
                    value: function (e) {
                        var t = 0,
                            i = "b";
                        if (e > 0) {
                            for (var n = ["tb", "gb", "mb", "kb", "b"], r = 0; r < n.length; r++) {
                                var a = n[r];
                                if (e >= Math.pow(this.options.filesizeBase, 4 - r) / 10) {
                                    t = e / Math.pow(this.options.filesizeBase, 4 - r), i = a;
                                    break
                                }
                            }
                            t = Math.round(10 * t) / 10
                        }
                        return "<strong>" + t + "</strong> " + this.options.dictFileSizeUnits[i]
                    }
                }, {
                    key: "_updateMaxFilesReachedClass",
                    value: function () {
                        return null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (this.getAcceptedFiles().length === this.options.maxFiles && this.emit("maxfilesreached", this.files), this.element.classList.add("dz-max-files-reached")) : this.element.classList.remove("dz-max-files-reached")
                    }
                }, {
                    key: "drop",
                    value: function (e) {
                        if (e.dataTransfer) {
                            this.emit("drop", e);
                            for (var t = [], i = 0; i < e.dataTransfer.files.length; i++) t[i] = e.dataTransfer.files[i];
                            if (this.emit("addedfiles", t), t.length) {
                                var n = e.dataTransfer.items;
                                n && n.length && null != n[0].webkitGetAsEntry ? this._addFilesFromItems(n) : this.handleFiles(t)
                            }
                        }
                    }
                }, {
                    key: "paste",
                    value: function (e) {
                        if (null != function (e, t) {
                            return void 0 !== e && null !== e ? t(e) : void 0
                        }(null != e ? e.clipboardData : void 0, function (e) {
                            return e.items
                        })) {
                            this.emit("paste", e);
                            var t = e.clipboardData.items;
                            return t.length ? this._addFilesFromItems(t) : void 0
                        }
                    }
                }, {
                    key: "handleFiles",
                    value: function (e) {
                        for (var t = 0, i = i = e; ;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            this.addFile(n)
                        }
                    }
                }, {
                    key: "_addFilesFromItems",
                    value: function (e) {
                        var t = this;
                        return function () {
                            for (var i = [], n = 0, r = r = e; ;) {
                                if (n >= r.length) break;
                                var a, s = r[n++];
                                null != s.webkitGetAsEntry && (a = s.webkitGetAsEntry()) ? a.isFile ? i.push(t.addFile(s.getAsFile())) : a.isDirectory ? i.push(t._addFilesFromDirectory(a, a.name)) : i.push(void 0) : null != s.getAsFile && (null == s.kind || "file" === s.kind) ? i.push(t.addFile(s.getAsFile())) : i.push(void 0)
                            }
                            return i
                        }()
                    }
                }, {
                    key: "_addFilesFromDirectory",
                    value: function (e, t) {
                        var i = this,
                            n = e.createReader(),
                            r = function (e) {
                                return function (e, t, i) {
                                    return void 0 !== e && null !== e && "function" == typeof e[t] ? i(e, t) : void 0
                                }(console, "log", function (t) {
                                    return t.log(e)
                                })
                            };
                        return function e() {
                            return n.readEntries(function (n) {
                                if (n.length > 0) {
                                    for (var r = 0, a = a = n; !(r >= a.length);) {
                                        var s = a[r++];
                                        s.isFile ? s.file(function (e) {
                                            if (!i.options.ignoreHiddenFiles || "." !== e.name.substring(0, 1)) return e.fullPath = t + "/" + e.name, i.addFile(e)
                                        }) : s.isDirectory && i._addFilesFromDirectory(s, t + "/" + s.name)
                                    }
                                    e()
                                }
                                return null
                            }, r)
                        }()
                    }
                }, {
                    key: "accept",
                    value: function (e, t) {
                        return this.options.maxFilesize && e.size > 1024 * this.options.maxFilesize * 1024 ? t(this.options.dictFileTooBig.replace("{{filesize}}", Math.round(e.size / 1024 / 10.24) / 100).replace("{{maxFilesize}}", this.options.maxFilesize)) : a.isValidFile(e, this.options.acceptedFiles) ? null != this.options.maxFiles && this.getAcceptedFiles().length >= this.options.maxFiles ? (t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}", this.options.maxFiles)), this.emit("maxfilesexceeded", e)) : this.options.accept.call(this, e, t) : t(this.options.dictInvalidFileType)
                    }
                }, {
                    key: "addFile",
                    value: function (e) {
                        var t = this;
                        return e.upload = {
                            uuid: a.uuidv4(),
                            progress: 0,
                            total: e.size,
                            bytesSent: 0,
                            filename: this._renameFile(e),
                            chunked: this.options.chunking && (this.options.forceChunking || e.size > this.options.chunkSize),
                            totalChunkCount: Math.ceil(e.size / this.options.chunkSize)
                        }, this.files.push(e), e.status = a.ADDED, this.emit("addedfile", e), this._enqueueThumbnail(e), this.accept(e, function (i) {
                            return i ? (e.accepted = !1, t._errorProcessing([e], i)) : (e.accepted = !0, t.options.autoQueue && t.enqueueFile(e)), t._updateMaxFilesReachedClass()
                        })
                    }
                }, {
                    key: "enqueueFiles",
                    value: function (e) {
                        for (var t = 0, i = i = e; ;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            this.enqueueFile(n)
                        }
                        return null
                    }
                }, {
                    key: "enqueueFile",
                    value: function (e) {
                        var t = this;
                        if (e.status !== a.ADDED || !0 !== e.accepted) throw new Error("This file can't be queued because it has already been processed or was rejected.");
                        if (e.status = a.QUEUED, this.options.autoProcessQueue) return setTimeout(function () {
                            return t.processQueue()
                        }, 0)
                    }
                }, {
                    key: "_enqueueThumbnail",
                    value: function (e) {
                        var t = this;
                        if (this.options.createImageThumbnails && e.type.match(/image.*/) && e.size <= 1024 * this.options.maxThumbnailFilesize * 1024) return this._thumbnailQueue.push(e), setTimeout(function () {
                            return t._processThumbnailQueue()
                        }, 0)
                    }
                }, {
                    key: "_processThumbnailQueue",
                    value: function () {
                        var e = this;
                        if (!this._processingThumbnail && 0 !== this._thumbnailQueue.length) {
                            this._processingThumbnail = !0;
                            var t = this._thumbnailQueue.shift();
                            return this.createThumbnail(t, this.options.thumbnailWidth, this.options.thumbnailHeight, this.options.thumbnailMethod, !0, function (i) {
                                return e.emit("thumbnail", t, i), e._processingThumbnail = !1, e._processThumbnailQueue()
                            })
                        }
                    }
                }, {
                    key: "removeFile",
                    value: function (e) {
                        if (e.status === a.UPLOADING && this.cancelUpload(e), this.files = s(this.files, e), this.emit("removedfile", e), 0 === this.files.length) return this.emit("reset")
                    }
                }, {
                    key: "removeAllFiles",
                    value: function (e) {
                        null == e && (e = !1);
                        for (var t = 0, i = i = this.files.slice(); ;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            (n.status !== a.UPLOADING || e) && this.removeFile(n)
                        }
                        return null
                    }
                }, {
                    key: "resizeImage",
                    value: function (e, t, i, n, r) {
                        var s = this;
                        return this.createThumbnail(e, t, i, n, !0, function (t, i) {
                            if (null == i) return r(e);
                            var n = s.options.resizeMimeType;
                            null == n && (n = e.type);
                            var o = i.toDataURL(n, s.options.resizeQuality);
                            return "image/jpeg" !== n && "image/jpg" !== n || (o = u.restore(e.dataURL, o)), r(a.dataURItoBlob(o))
                        })
                    }
                }, {
                    key: "createThumbnail",
                    value: function (e, t, i, n, r, a) {
                        var s = this,
                            o = new FileReader;
                        return o.onload = function () {
                            if (e.dataURL = o.result, "image/svg+xml" !== e.type) return s.createThumbnailFromUrl(e, t, i, n, r, a);
                            null != a && a(o.result)
                        }, o.readAsDataURL(e)
                    }
                }, {
                    key: "createThumbnailFromUrl",
                    value: function (e, t, i, n, r, a, s) {
                        var o = this,
                            u = document.createElement("img");
                        return s && (u.crossOrigin = s), u.onload = function () {
                            var s = function (e) {
                                return e(1)
                            };
                            return "undefined" != typeof EXIF && null !== EXIF && r && (s = function (e) {
                                return EXIF.getData(u, function () {
                                    return e(EXIF.getTag(this, "Orientation"))
                                })
                            }), s(function (r) {
                                e.width = u.width, e.height = u.height;
                                var s = o.options.resize.call(o, e, t, i, n),
                                    c = document.createElement("canvas"),
                                    d = c.getContext("2d");
                                switch (c.width = s.trgWidth, c.height = s.trgHeight, r > 4 && (c.width = s.trgHeight, c.height = s.trgWidth), r) {
                                    case 2:
                                        d.translate(c.width, 0), d.scale(-1, 1);
                                        break;
                                    case 3:
                                        d.translate(c.width, c.height), d.rotate(Math.PI);
                                        break;
                                    case 4:
                                        d.translate(0, c.height), d.scale(1, -1);
                                        break;
                                    case 5:
                                        d.rotate(.5 * Math.PI), d.scale(1, -1);
                                        break;
                                    case 6:
                                        d.rotate(.5 * Math.PI), d.translate(0, -c.width);
                                        break;
                                    case 7:
                                        d.rotate(.5 * Math.PI), d.translate(c.height, -c.width), d.scale(-1, 1);
                                        break;
                                    case 8:
                                        d.rotate(-.5 * Math.PI), d.translate(-c.height, 0)
                                }
                                l(d, u, null != s.srcX ? s.srcX : 0, null != s.srcY ? s.srcY : 0, s.srcWidth, s.srcHeight, null != s.trgX ? s.trgX : 0, null != s.trgY ? s.trgY : 0, s.trgWidth, s.trgHeight);
                                var p = c.toDataURL("image/png");
                                if (null != a) return a(p, c)
                            })
                        }, null != a && (u.onerror = a), u.src = e.dataURL
                    }
                }, {
                    key: "processQueue",
                    value: function () {
                        var e = this.options.parallelUploads,
                            t = this.getUploadingFiles().length,
                            i = t;
                        if (!(t >= e)) {
                            var n = this.getQueuedFiles();
                            if (n.length > 0) {
                                if (this.options.uploadMultiple) return this.processFiles(n.slice(0, e - t));
                                for (; i < e;) {
                                    if (!n.length) return;
                                    this.processFile(n.shift()), i++
                                }
                            }
                        }
                    }
                }, {
                    key: "processFile",
                    value: function (e) {
                        return this.processFiles([e])
                    }
                }, {
                    key: "processFiles",
                    value: function (e) {
                        for (var t = 0, i = i = e; ;) {
                            if (t >= i.length) break;
                            var n = i[t++];
                            n.processing = !0, n.status = a.UPLOADING, this.emit("processing", n)
                        }
                        return this.options.uploadMultiple && this.emit("processingmultiple", e), this.uploadFiles(e)
                    }
                }, {
                    key: "_getFilesWithXhr",
                    value: function (e) {
                        return this.files.filter(function (t) {
                            return t.xhr === e
                        }).map(function (e) {
                            return e
                        })
                    }
                }, {
                    key: "cancelUpload",
                    value: function (e) {
                        if (e.status === a.UPLOADING) {
                            for (var t = this._getFilesWithXhr(e.xhr), i = 0, n = n = t; ;) {
                                if (i >= n.length) break;
                                n[i++].status = a.CANCELED
                            }
                            void 0 !== e.xhr && e.xhr.abort();
                            for (var r = 0, s = s = t; ;) {
                                if (r >= s.length) break;
                                var o = s[r++];
                                this.emit("canceled", o)
                            }
                            this.options.uploadMultiple && this.emit("canceledmultiple", t)
                        } else e.status !== a.ADDED && e.status !== a.QUEUED || (e.status = a.CANCELED, this.emit("canceled", e), this.options.uploadMultiple && this.emit("canceledmultiple", [e]));
                        if (this.options.autoProcessQueue) return this.processQueue()
                    }
                }, {
                    key: "resolveOption",
                    value: function (e) {
                        if ("function" == typeof e) {
                            for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
                            return e.apply(this, i)
                        }
                        return e
                    }
                }, {
                    key: "uploadFile",
                    value: function (e) {
                        return this.uploadFiles([e])
                    }
                }, {
                    key: "uploadFiles",
                    value: function (e) {
                        var t = this;
                        this._transformFiles(e, function (i) {
                            if (e[0].upload.chunked) {
                                var n = e[0],
                                    r = i[0];
                                n.upload.chunks = [];
                                var s = function () {
                                    for (var i = 0; void 0 !== n.upload.chunks[i];) i++;
                                    if (!(i >= n.upload.totalChunkCount)) {
                                        0;
                                        var s = i * t.options.chunkSize,
                                            o = Math.min(s + t.options.chunkSize, n.size),
                                            l = {
                                                name: t._getParamName(0),
                                                data: r.webkitSlice ? r.webkitSlice(s, o) : r.slice(s, o),
                                                filename: n.upload.filename,
                                                chunkIndex: i
                                            };
                                        n.upload.chunks[i] = {
                                            file: n,
                                            index: i,
                                            dataBlock: l,
                                            status: a.UPLOADING,
                                            progress: 0,
                                            retries: 0
                                        }, t._uploadData(e, [l])
                                    }
                                };
                                if (n.upload.finishedChunkUpload = function (i) {
                                    var r = !0;
                                    i.status = a.SUCCESS, i.dataBlock = null, i.xhr = null;
                                    for (var o = 0; o < n.upload.totalChunkCount; o++) {
                                        if (void 0 === n.upload.chunks[o]) return s();
                                        n.upload.chunks[o].status !== a.SUCCESS && (r = !1)
                                    }
                                    r && t.options.chunksUploaded(n, function () {
                                        t._finished(e, "", null)
                                    })
                                }, t.options.parallelChunkUploads)
                                    for (var o = 0; o < n.upload.totalChunkCount; o++) s();
                                else s()
                            } else {
                                for (var l = [], u = 0; u < e.length; u++) l[u] = {
                                    name: t._getParamName(u),
                                    data: i[u],
                                    filename: e[u].upload.filename
                                };
                                t._uploadData(e, l)
                            }
                        })
                    }
                }, {
                    key: "_getChunk",
                    value: function (e, t) {
                        for (var i = 0; i < e.upload.totalChunkCount; i++)
                            if (void 0 !== e.upload.chunks[i] && e.upload.chunks[i].xhr === t) return e.upload.chunks[i]
                    }
                }, {
                    key: "_uploadData",
                    value: function (e, t) {
                        for (var i = this, n = new XMLHttpRequest, r = 0, s = s = e; ;) {
                            if (r >= s.length) break;
                            s[r++].xhr = n
                        }
                        e[0].upload.chunked && (e[0].upload.chunks[t[0].chunkIndex].xhr = n);
                        var o = this.resolveOption(this.options.method, e),
                            l = this.resolveOption(this.options.url, e);
                        n.open(o, l, !0), n.timeout = this.resolveOption(this.options.timeout, e), n.withCredentials = !!this.options.withCredentials, n.onload = function (t) {
                            i._finishedUploading(e, n, t)
                        }, n.onerror = function () {
                            i._handleUploadError(e, n)
                        }, (null != n.upload ? n.upload : n).onprogress = function (t) {
                            return i._updateFilesUploadProgress(e, n, t)
                        };
                        var u = {
                            Accept: "application/json",
                            "Cache-Control": "no-cache",
                            "X-Requested-With": "XMLHttpRequest"
                        };
                        for (var c in this.options.headers && a.extend(u, this.options.headers), u) {
                            var d = u[c];
                            d && n.setRequestHeader(c, d)
                        }
                        var p = new FormData;
                        if (this.options.params) {
                            var h = this.options.params;
                            for (var f in "function" == typeof h && (h = h.call(this, e, n, e[0].upload.chunked ? this._getChunk(e[0], n) : null)), h) {
                                var m = h[f];
                                p.append(f, m)
                            }
                        }
                        for (var v = 0, g = g = e; ;) {
                            if (v >= g.length) break;
                            var k = g[v++];
                            this.emit("sending", k, n, p)
                        }
                        this.options.uploadMultiple && this.emit("sendingmultiple", e, n, p), this._addFormElementData(p);
                        for (var b = 0; b < t.length; b++) {
                            var y = t[b];
                            p.append(y.name, y.data, y.filename)
                        }
                        this.submitRequest(n, p, e)
                    }
                }, {
                    key: "_transformFiles",
                    value: function (e, t) {
                        for (var i = this, n = [], r = 0, a = function (a) {
                            i.options.transformFile.call(i, e[a], function (i) {
                                n[a] = i, ++r === e.length && t(n)
                            })
                        }, s = 0; s < e.length; s++) a(s)
                    }
                }, {
                    key: "_addFormElementData",
                    value: function (e) {
                        if ("FORM" === this.element.tagName)
                            for (var t = 0, i = i = this.element.querySelectorAll("input, textarea, select, button"); ;) {
                                if (t >= i.length) break;
                                var n = i[t++],
                                    r = n.getAttribute("name"),
                                    a = n.getAttribute("type");
                                if (a && (a = a.toLowerCase()), void 0 !== r && null !== r)
                                    if ("SELECT" === n.tagName && n.hasAttribute("multiple"))
                                        for (var s = 0, o = o = n.options; ;) {
                                            if (s >= o.length) break;
                                            var l = o[s++];
                                            l.selected && e.append(r, l.value)
                                        } else (!a || "checkbox" !== a && "radio" !== a || n.checked) && e.append(r, n.value)
                            }
                    }
                }, {
                    key: "_updateFilesUploadProgress",
                    value: function (e, t, i) {
                        var n = void 0;
                        if (void 0 !== i) {
                            if (n = 100 * i.loaded / i.total, e[0].upload.chunked) {
                                var r = e[0],
                                    a = this._getChunk(r, t);
                                a.progress = n, a.total = i.total, a.bytesSent = i.loaded;
                                r.upload.progress = 0, r.upload.total = 0, r.upload.bytesSent = 0;
                                for (var s = 0; s < r.upload.totalChunkCount; s++) void 0 !== r.upload.chunks[s] && void 0 !== r.upload.chunks[s].progress && (r.upload.progress += r.upload.chunks[s].progress, r.upload.total += r.upload.chunks[s].total, r.upload.bytesSent += r.upload.chunks[s].bytesSent);
                                r.upload.progress = r.upload.progress / r.upload.totalChunkCount
                            } else
                                for (var o = 0, l = l = e; ;) {
                                    if (o >= l.length) break;
                                    var u = l[o++];
                                    u.upload.progress = n, u.upload.total = i.total, u.upload.bytesSent = i.loaded
                                }
                            for (var c = 0, d = d = e; ;) {
                                if (c >= d.length) break;
                                var p = d[c++];
                                this.emit("uploadprogress", p, p.upload.progress, p.upload.bytesSent)
                            }
                        } else {
                            var h = !0;
                            n = 100;
                            for (var f = 0, m = m = e; ;) {
                                if (f >= m.length) break;
                                var v = m[f++];
                                100 === v.upload.progress && v.upload.bytesSent === v.upload.total || (h = !1), v.upload.progress = n, v.upload.bytesSent = v.upload.total
                            }
                            if (h) return;
                            for (var g = 0, k = k = e; ;) {
                                if (g >= k.length) break;
                                var b = k[g++];
                                this.emit("uploadprogress", b, n, b.upload.bytesSent)
                            }
                        }
                    }
                }, {
                    key: "_finishedUploading",
                    value: function (e, t, i) {
                        var n = void 0;
                        if (e[0].status !== a.CANCELED && 4 === t.readyState) {
                            if ("arraybuffer" !== t.responseType && "blob" !== t.responseType && (n = t.responseText, t.getResponseHeader("content-type") && ~t.getResponseHeader("content-type").indexOf("application/json"))) try {
                                n = JSON.parse(n)
                            } catch (e) {
                                i = e, n = "Invalid JSON response from server."
                            }
                            this._updateFilesUploadProgress(e), 200 <= t.status && t.status < 300 ? e[0].upload.chunked ? e[0].upload.finishedChunkUpload(this._getChunk(e[0], t)) : this._finished(e, n, i) : this._handleUploadError(e, t, n)
                        }
                    }
                }, {
                    key: "_handleUploadError",
                    value: function (e, t, i) {
                        if (e[0].status !== a.CANCELED) {
                            if (e[0].upload.chunked && this.options.retryChunks) {
                                var n = this._getChunk(e[0], t);
                                if (n.retries++ < this.options.retryChunksLimit) return void this._uploadData(e, [n.dataBlock]);
                                console.warn("Retried this chunk too often. Giving up.")
                            }
                            for (var r = 0, s = s = e; ;) {
                                if (r >= s.length) break;
                                s[r++];
                                this._errorProcessing(e, i || this.options.dictResponseError.replace("{{statusCode}}", t.status), t)
                            }
                        }
                    }
                }, {
                    key: "submitRequest",
                    value: function (e, t, i) {
                        e.send(t)
                    }
                }, {
                    key: "_finished",
                    value: function (e, t, i) {
                        for (var n = 0, r = r = e; ;) {
                            if (n >= r.length) break;
                            var s = r[n++];
                            s.status = a.SUCCESS, this.emit("success", s, t, i), this.emit("complete", s)
                        }
                        if (this.options.uploadMultiple && (this.emit("successmultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                    }
                }, {
                    key: "_errorProcessing",
                    value: function (e, t, i) {
                        for (var n = 0, r = r = e; ;) {
                            if (n >= r.length) break;
                            var s = r[n++];
                            s.status = a.ERROR, this.emit("error", s, t, i), this.emit("complete", s)
                        }
                        if (this.options.uploadMultiple && (this.emit("errormultiple", e, t, i), this.emit("completemultiple", e)), this.options.autoProcessQueue) return this.processQueue()
                    }
                }], [{
                    key: "uuidv4",
                    value: function () {
                        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                            var t = 16 * Math.random() | 0;
                            return ("x" === e ? t : 3 & t | 8).toString(16)
                        })
                    }
                }]), a
            }();
        a.initClass(), a.version = "5.5.0", a.options = {}, a.optionsForElement = function (e) {
            return e.getAttribute("id") ? a.options[o(e.getAttribute("id"))] : void 0
        }, a.instances = [], a.forElement = function (e) {
            if ("string" == typeof e && (e = document.querySelector(e)), null == (null != e ? e.dropzone : void 0)) throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");
            return e.dropzone
        }, a.autoDiscover = !0, a.discover = function () {
            var e = void 0;
            if (document.querySelectorAll) e = document.querySelectorAll(".dropzone");
            else {
                e = [];
                var t = function (t) {
                    return function () {
                        for (var i = [], n = 0, r = r = t; ;) {
                            if (n >= r.length) break;
                            var a = r[n++];
                            /(^| )dropzone($| )/.test(a.className) ? i.push(e.push(a)) : i.push(void 0)
                        }
                        return i
                    }()
                };
                t(document.getElementsByTagName("div")), t(document.getElementsByTagName("form"))
            }
            return function () {
                for (var t = [], i = 0, n = n = e; ;) {
                    if (i >= n.length) break;
                    var r = n[i++];
                    !1 !== a.optionsForElement(r) ? t.push(new a(r)) : t.push(void 0)
                }
                return t
            }()
        }, a.blacklistedBrowsers = [/opera.*(Macintosh|Windows Phone).*version\/12/i], a.isBrowserSupported = function () {
            var e = !0;
            if (window.File && window.FileReader && window.FileList && window.Blob && window.FormData && document.querySelector)
                if ("classList" in document.createElement("a"))
                    for (var t = 0, i = i = a.blacklistedBrowsers; ;) {
                        if (t >= i.length) break;
                        i[t++].test(navigator.userAgent) && (e = !1)
                    } else e = !1;
            else e = !1;
            return e
        }, a.dataURItoBlob = function (e) {
            for (var t = atob(e.split(",")[1]), i = e.split(",")[0].split(":")[1].split(";")[0], n = new ArrayBuffer(t.length), r = new Uint8Array(n), a = 0, s = t.length, o = 0 <= s; o ? a <= s : a >= s; o ? a++ : a--) r[a] = t.charCodeAt(a);
            return new Blob([n], {
                type: i
            })
        };
        var s = function (e, t) {
            return e.filter(function (e) {
                return e !== t
            }).map(function (e) {
                return e
            })
        },
            o = function (e) {
                return e.replace(/[\-_](\w)/g, function (e) {
                    return e.charAt(1).toUpperCase()
                })
            };
        a.createElement = function (e) {
            var t = document.createElement("div");
            return t.innerHTML = e, t.childNodes[0]
        }, a.elementInside = function (e, t) {
            if (e === t) return !0;
            for (; e = e.parentNode;)
                if (e === t) return !0;
            return !1
        }, a.getElement = function (e, t) {
            var i = void 0;
            if ("string" == typeof e ? i = document.querySelector(e) : null != e.nodeType && (i = e), null == i) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector or a plain HTML element.");
            return i
        }, a.getElements = function (e, t) {
            var i = void 0,
                n = void 0;
            if (e instanceof Array) {
                n = [];
                try {
                    for (var r = 0, a = a = e; !(r >= a.length);) i = a[r++], n.push(this.getElement(i, t))
                } catch (e) {
                    n = null
                }
            } else if ("string" == typeof e) {
                n = [];
                for (var s = 0, o = o = document.querySelectorAll(e); !(s >= o.length);) i = o[s++], n.push(i)
            } else null != e.nodeType && (n = [e]);
            if (null == n || !n.length) throw new Error("Invalid `" + t + "` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");
            return n
        }, a.confirm = function (e, t, i) {
            return window.confirm(e) ? t() : null != i ? i() : void 0
        }, a.isValidFile = function (e, t) {
            if (!t) return !0;
            t = t.split(",");
            for (var i = e.type, n = i.replace(/\/.*$/, ""), r = 0, a = a = t; ;) {
                if (r >= a.length) break;
                var s = a[r++];
                if ("." === (s = s.trim()).charAt(0)) {
                    if (-1 !== e.name.toLowerCase().indexOf(s.toLowerCase(), e.name.length - s.length)) return !0
                } else if (/\/\*$/.test(s)) {
                    if (n === s.replace(/\/.*$/, "")) return !0
                } else if (i === s) return !0
            }
            return !1
        }, "undefined" != typeof jQuery && null !== jQuery && (jQuery.fn.dropzone = function (e) {
            return this.each(function () {
                return new a(this, e)
            })
        }), void 0 !== e && null !== e ? e.exports = a : window.Dropzone = a, a.ADDED = "added", a.QUEUED = "queued", a.ACCEPTED = a.QUEUED, a.UPLOADING = "uploading", a.PROCESSING = a.UPLOADING, a.CANCELED = "canceled", a.ERROR = "error", a.SUCCESS = "success";
        var l = function (e, t, i, n, r, a, s, o, l, u) {
            var c = function (e) {
                e.naturalWidth;
                var t = e.naturalHeight,
                    i = document.createElement("canvas");
                i.width = 1, i.height = t;
                var n = i.getContext("2d");
                n.drawImage(e, 0, 0);
                for (var r = n.getImageData(1, 0, 1, t).data, a = 0, s = t, o = t; o > a;) 0 === r[4 * (o - 1) + 3] ? s = o : a = o, o = s + a >> 1;
                var l = o / t;
                return 0 === l ? 1 : l
            }(t);
            return e.drawImage(t, i, n, r, a, s, o, l, u / c)
        },
            u = function () {
                function e() {
                    n(this, e)
                }
                return t(e, null, [{
                    key: "initClass",
                    value: function () {
                        this.KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
                    }
                }, {
                    key: "encode64",
                    value: function (e) {
                        for (var t = "", i = void 0, n = void 0, r = "", a = void 0, s = void 0, o = void 0, l = "", u = 0; a = (i = e[u++]) >> 2, s = (3 & i) << 4 | (n = e[u++]) >> 4, o = (15 & n) << 2 | (r = e[u++]) >> 6, l = 63 & r, isNaN(n) ? o = l = 64 : isNaN(r) && (l = 64), t = t + this.KEY_STR.charAt(a) + this.KEY_STR.charAt(s) + this.KEY_STR.charAt(o) + this.KEY_STR.charAt(l), i = n = r = "", a = s = o = l = "", u < e.length;);
                        return t
                    }
                }, {
                    key: "restore",
                    value: function (e, t) {
                        if (!e.match("data:image/jpeg;base64,")) return t;
                        var i = this.decode64(e.replace("data:image/jpeg;base64,", "")),
                            n = this.slice2Segments(i),
                            r = this.exifManipulation(t, n);
                        return "data:image/jpeg;base64," + this.encode64(r)
                    }
                }, {
                    key: "exifManipulation",
                    value: function (e, t) {
                        var i = this.getExifArray(t),
                            n = this.insertExif(e, i);
                        return new Uint8Array(n)
                    }
                }, {
                    key: "getExifArray",
                    value: function (e) {
                        for (var t = void 0, i = 0; i < e.length;) {
                            if (255 === (t = e[i])[0] & 225 === t[1]) return t;
                            i++
                        }
                        return []
                    }
                }, {
                    key: "insertExif",
                    value: function (e, t) {
                        var i = e.replace("data:image/jpeg;base64,", ""),
                            n = this.decode64(i),
                            r = n.indexOf(255, 3),
                            a = n.slice(0, r),
                            s = n.slice(r),
                            o = a;
                        return o = (o = o.concat(t)).concat(s)
                    }
                }, {
                    key: "slice2Segments",
                    value: function (e) {
                        for (var t = 0, i = []; ;) {
                            if (255 === e[t] & 218 === e[t + 1]) break;
                            if (255 === e[t] & 216 === e[t + 1]) t += 2;
                            else {
                                var n = t + (256 * e[t + 2] + e[t + 3]) + 2,
                                    r = e.slice(t, n);
                                i.push(r), t = n
                            }
                            if (t > e.length) break
                        }
                        return i
                    }
                }, {
                    key: "decode64",
                    value: function (e) {
                        var t = void 0,
                            i = void 0,
                            n = "",
                            r = void 0,
                            a = void 0,
                            s = "",
                            o = 0,
                            l = [];
                        for (/[^A-Za-z0-9\+\/\=]/g.exec(e) && console.warn("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."), e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); t = this.KEY_STR.indexOf(e.charAt(o++)) << 2 | (r = this.KEY_STR.indexOf(e.charAt(o++))) >> 4, i = (15 & r) << 4 | (a = this.KEY_STR.indexOf(e.charAt(o++))) >> 2, n = (3 & a) << 6 | (s = this.KEY_STR.indexOf(e.charAt(o++))), l.push(t), 64 !== a && l.push(i), 64 !== s && l.push(n), t = i = n = "", r = a = s = "", o < e.length;);
                        return l
                    }
                }]), e
            }();
        u.initClass();
        a._autoDiscoverFunction = function () {
            if (a.autoDiscover) return a.discover()
        },
            function (e, t) {
                var i = !1,
                    n = !0,
                    r = e.document,
                    a = r.documentElement,
                    s = r.addEventListener ? "addEventListener" : "attachEvent",
                    o = r.addEventListener ? "removeEventListener" : "detachEvent",
                    l = r.addEventListener ? "" : "on",
                    u = function n(a) {
                        if ("readystatechange" !== a.type || "complete" === r.readyState) return ("load" === a.type ? e : r)[o](l + a.type, n, !1), !i && (i = !0) ? t.call(e, a.type || a) : void 0
                    };
                if ("complete" !== r.readyState) {
                    if (r.createEventObject && a.doScroll) {
                        try {
                            n = !e.frameElement
                        } catch (e) { }
                        n && function e() {
                            try {
                                a.doScroll("left")
                            } catch (t) {
                                return void setTimeout(e, 50)
                            }
                            return u("poll")
                        }()
                    }
                    r[s](l + "DOMContentLoaded", u, !1), r[s](l + "readystatechange", u, !1), e[s](l + "load", u, !1)
                }
            }(window, a._autoDiscoverFunction)
    }).call(t, i(6)(e))
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () { }, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}]);