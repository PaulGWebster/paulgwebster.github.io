'use strict';

$(document).ready(function () {
	$("main article[data-category='" + window.location.hash + "']").show();
	if (!window.location.hash) {
		//		$("main article[data-category='#handbook']").show();
		//		window.location.hash = "#handbook";

		$("main article[data-category='#preface']").show();
		window.location.hash = "#preface";
	}

	$(".children").on("click tap touchstart", function (e) {
		var sidebarLength = $(this).children("ul").children().length;
		var target = $(e.target).parent();

		if ($(this).children("ul").hasClass("open") && target.hasClass("children")) {
			$(this).children("ul").css("max-height", "0px").removeClass("open");
		} else {
			$(this).children("ul").css("max-height", "500px").addClass("open");
		}
	});

	$(".toggle-menu").on("click tap touchstart", function () {
		$(".overlay").css("display", "block");
		$("nav").addClass("menu-open");

		$(".overlay").on("click tap touchstart", function () {
			$("nav").removeClass("menu-open");

			setTimeout(function () {
				$("body").removeClass("stop-scroll");
				$(".overlay").css("display", "none");
			}, 300);
		});
	});

	$("a").on("click", function (event) {
		if ($(this).data("target") === "category" || $(this).parent("nav")) {
			console.log("Target is a category");
			var target = $(event.target).attr("href");
			console.log(target + " ==? " + window.location.hash);
			if (window.location.hash === target || !target) {
				return true;
			} else {
				$("main article").hide("300");
				$("main article[data-category='" + target + "']").show("300");
				return true;
			}
		}
	});
});
//# sourceMappingURL=site.js.map
