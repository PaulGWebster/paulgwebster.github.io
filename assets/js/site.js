'use strict';

$(document).ready(function () {
	//	$("main article[data-category='#handbook']").show();
	//	window.location.hash = "#handbook";

	$("main article[data-category='#preface']").show();
	window.location.hash = "#preface";

	$(".children").click(function (e) {
		var sidebarLength = $(this).children("ul").children().length;
		var target = $(e.target).parent();

		if ($(this).children("ul").hasClass("open") && target.hasClass("children")) {
			$(this).children("ul").css("max-height", "0px").removeClass("open");
		} else {
			$(this).children("ul").css("max-height", "500px").addClass("open");
		}
	});

	$(".toggle-menu").click(function () {
		$(".overlay").css("display", "block");
		$("nav").addClass("menu-open");

		$(".overlay").click(function () {
			$("nav").removeClass("menu-open");

			setTimeout(function () {
				$("body").removeClass("stop-scroll");
				$(".overlay").css("display", "none");
			}, 300);
		});
	});

	$("nav").click(function (event) {
		var target = $(event.target).attr("href");
		console.log(target + " ==? " + window.location.hash);
		if (window.location.hash === target || !target) {
			return false;
		} else {
			$("main article").hide("300");
			$("main article[data-category='" + target + "']").show("300");
			return true;
		}
	});
});
//# sourceMappingURL=site.js.map
