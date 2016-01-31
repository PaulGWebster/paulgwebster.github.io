"use strict";

$(document).ready(function () {
	$("*").css("background-color", function () {
		return $(this).data("color");
	});
	$("*").css("color", function () {
		return $(this).data("text");
	});
	$("*").css("-webkit-animation-delay", function () {
		return $(this).data("delay");
	});
	$("main header .img").css("background-image", function () {
		return "url(" + $(this).data("bg") + ")";
	});

	$(".page-title").hover(function () {
		if ($(".page-title").hasClass("right")) {
			$(this).addClass("left").removeClass("right");
			$(".page-title svg").css({
				left: "-100px",
				transform: "rotate(0)"
			});
			console.log("Right");
		} else {
			$(this).addClass("right").removeClass("left");
			$(".page-title svg").css({
				left: "100px",
				transform: "rotate(360deg)"
			});
			console.log("Left");
		}
	}, function () {
		$(".page-title svg").css("left", "0");
	});

	$("a").confirmMailto({
		message: "Are you cool enough to send an email to $to",
		to: "html", //html/href
		success: function () {
			$("a").css("color", "#3C3");
		},
		fail: function () {
			$("a").css("color", "#F66");
		},
		callback: function (result) {
			if (result) {
				alert("Thank you!");
			} else {
				alert("Boooo!");
			}
		}
	});

	$("nav aside a").click(function () {
		var t = $(this).attr("href").replace("#", "");
		console.log(t);
		$("html, body").animate({
			scrollTop: $("." + t).offset().top - 78
		}, 1000);
	});

	//	$(".flexslider").flexslider();
	var stickyNavTop = $("nav").offset().top;

	var stickyNav = function () {
		var scrollTop = $(window).scrollTop();

		if (scrollTop > stickyNavTop) {
			$("nav").addClass("fixed");
			$(".prenav").css({
				display: "block",
				width: "100vw",
				height: "75px"
			});
		} else {
			$("nav").removeClass("fixed");
			$(".prenav").css("display", "none");
		}
	};

	stickyNav();
	$(window).scroll(function () {
		stickyNav();
	});

	$(".children a").click(function (e) {
		var sidebarLength = $(".children ul").children().length;
		var target = $(e.target).parent();

		if ($(".children ul").hasClass("open") && target.hasClass("children")) {
			$(".children ul").css("height", 0).removeClass("open");
		} else {
			$(".children ul").css("height", sidebarLength * 33 + "px").addClass("open");
		}
	});
});

$("header svg #bar").click(function () {});

$("header aside svg").click(function () {
	$(".subHeader .search").toggleClass("show");
});

!function (t) {
	t.fn.confirmMailto = function (e) {
		var n = t.extend({ message: "Do you want to send an email to $to?", to: "href", callback: function () {}, success: function () {}, fail: function () {} }, e),
		    a = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,
		    i = function (e) {
			var i = n.message,
			    c = n.to;if (c = "href" == c ? t(this).attr("href").match(a) : "html" == c ? t(this).html() : c, i = i.replace("$to", c) == i ? i + c : i.replace("$to", c), confirm(i)) {
				n.success();var o = !0;
			} else {
				e.preventDefault(), n.fail();var o = !1;
			}return setTimeout(function () {
				n.callback(o);
			}, 1), o;
		};return this.filter('[href^="mailto:"]').each(function () {
			t(this).bind("click", i);
		}), this;
	};
}($);
!function (e, t) {
	function n(t, n) {
		n = n || {};var i = this,
		    o = n.query || "> :even";e.extend(i, { $el: t, options: n, sections: [], isAccordion: n.accordion || !1, db: n.persist ? jQueryCollapseStorage(t.get(0).id) : !1 }), i.states = i.db ? i.db.read() : [], i.$el.find(o).each(function () {
			new jQueryCollapseSection(e(this), i);
		}), function (t) {
			i.$el.on("click", "[data-collapse-summary] " + (t.options.clickQuery || ""), e.proxy(i.handleClick, t)), i.$el.bind("toggle close open", e.proxy(i.handleEvent, t));
		}(i);
	}function i(t, n) {
		n.options.clickQuery || t.wrapInner('<a href="#"/>'), e.extend(this, { isOpen: !1, $summary: t.attr("data-collapse-summary", ""), $details: t.next(), options: n.options, parent: n }), n.sections.push(this);var i = n.states[this._index()];0 === i ? this.close(!0) : this.$summary.is(".open") || 1 === i ? this.open(!0) : this.close(!0);
	}n.prototype = { handleClick: function (t, n) {
			t.preventDefault(), n = n || "toggle";for (var i = this.sections, o = i.length; o--;) if (e.contains(i[o].$summary[0], t.target)) {
				i[o][n]();break;
			}
		}, handleEvent: function (e) {
			return e.target == this.$el.get(0) ? this[e.type]() : void this.handleClick(e, e.type);
		}, open: function (e) {
			this._change("open", e);
		}, close: function (e) {
			this._change("close", e);
		}, toggle: function (e) {
			this._change("toggle", e);
		}, _change: function (t, n) {
			return isFinite(n) ? this.sections[n][t]() : void e.each(this.sections, function (e, n) {
				n[t]();
			});
		} }, i.prototype = { toggle: function () {
			this.isOpen ? this.close() : this.open();
		}, close: function (e) {
			this._changeState("close", e);
		}, open: function (t) {
			var n = this;n.options.accordion && !t && e.each(n.parent.sections, function (e, t) {
				t.close();
			}), n._changeState("open", t);
		}, _index: function () {
			return e.inArray(this, this.parent.sections);
		}, _changeState: function (t, n) {
			var i = this;i.isOpen = "open" == t, e.isFunction(i.options[t]) && !n ? i.options[t].apply(i.$details) : i.$details[i.isOpen ? "show" : "hide"](), i.$summary.toggleClass("open", "close" !== t), i.$details.attr("aria-hidden", "close" === t), i.$summary.attr("aria-expanded", "open" === t), i.$summary.trigger("open" === t ? "opened" : "closed", i), i.parent.db && i.parent.db.write(i._index(), i.isOpen);
		} }, e.fn.extend({ collapse: function (t, i) {
			var o = i ? e("body").find("[data-collapse]") : e(this);return o.each(function () {
				var o = i ? {} : t,
				    s = e(this).attr("data-collapse") || "";e.each(s.split(" "), function (e, t) {
					t && (o[t] = !0);
				}), new n(e(this), o);
			});
		} }), t.jQueryCollapse = n, t.jQueryCollapseSection = i, e(function () {
		e.fn.collapse(!1, !0);
	});
}(window.jQuery, window);
//# sourceMappingURL=site.js.map
