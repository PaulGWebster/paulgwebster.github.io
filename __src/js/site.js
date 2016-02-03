'use strict';

$(document).ready(function() {
	$("main article[data-category='" + window.location.hash + "']").show()
	if (!window.location.hash) {
		$("main article[data-category='#handbook']").show();
		window.location.hash = "#handbook";
	}

	$(".children").on("click tap touchstart", function(e) {
		var target = $(e.target).parent();

		if ($(this).children("ul").hasClass("open") && target.hasClass("children")) {
			$(this).children("ul").css("max-height", "0px").removeClass("open");
		} else {
			$(this).children("ul").css("max-height", "500px").addClass("open");
		}
	});

	/**
	 * Open the menu on [click, tap, touchstart]
	 * Add overlay over content, on close delay the overlay by 300ms
	 */
	$(".toggle-menu").on("click tap touchstart", function() {
		$(".overlay").show();
		$("nav").addClass("menu-open");

		$(".overlay").on("click tap touchstart", function() {
			$("nav").removeClass("menu-open");

			setTimeout(function(){
				$(".overlay").hide();
			}, 300);
		});
	});

	/**
	 * Detect if window is wider that 1480px, and if the overlay is active.
	 * Then remove overlay, and keep menu tray open
	 */
	$(window).resize(function() {
		var checkWidth = $(this).width();
		if ((checkWidth >= 1480) && ($(".overlay").css("display") === "block") && ($("nav").hasClass("menu-open"))) {
			$("nav").removeClass("menu-open");
			$(".overlay").hide();
		}
	});

	/**
	 * Detect link clicks, if target is category, or it's in the nav, load the section requested
	 */
	$("a").on("click", function(event) {
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
