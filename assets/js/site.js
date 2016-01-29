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
	$("nav aside a").attr("href").replace("home", "introduction");

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
});

$("header svg #bar").click(function () {});

$("header aside svg").click(function () {
	$(".subHeader .search").toggleClass("show");
});

$("nav").swipe({
	//	swipeRight:function() {
	//		$(".container").addClass("open");
	//		document.addEventListener( eventtype, bodyClickFn );
	//	},
	//	swipeLeft:function() {
	//		$(".container").removeClass("open");
	//	}
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
//# sourceMappingURL=site.js.map