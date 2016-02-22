"use strict";

var Log = function Log(message) {
	var status = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	if (status === 0) {
		console.log("Message: " + message);
	} else if (status === 1) {
		console.log("Error: " + message);
	} else {
		console.log("Unknwon: " + message);
	}
};

function showMenu() {
	$(".overlay").show();
	$("nav").addClass("menu-open");
}

function hideMenu() {
	$("nav").removeAttr("class");

	setTimeout(function () {
		$(".overlay").removeAttr("style");
	}, 300);
}

//$("main article").load("https://bsddoc.dev/pages/00-handbook/handbook");
$(document).ready(function () {
	Log("Document ready and loaded", 0);

	$("main article[data-category='" + window.location.hash + "']").show();
	if (!window.location.hash) {
		$("main article[data-category='#handbook-intro']").show();
		window.location.hash = "#handbook-intro";
	}

	/*$("header span").click(function() {
 	var chapter = $(this).data("chapter"),
 		chapterTitle = $(this).data("chapter-title"),
 		chapterPage = $(this).data("chapter-page");
 		if (!chapterPage) {
 		$("main article").load("https://bsddoc.dev/pages/" + chapter + "-" + chapterTitle + "/");
 	} else {
 		$("main article").load("https://bsddoc.dev/pages/" + chapter + "-" + chapterTitle + "/" + chapterPage);
 	}
 });*/

	$(".children").on("click tap touchstart", function (e) {
		var target = $(e.target).parent();

		if ($(this).children("ul").hasClass("open") && target.hasClass("children")) {
			$(this).children("ul").removeAttr("style").removeAttr("class");
		} else {
			$(this).children("ul").css("max-height", "500px").addClass("open");
		}
	});

	/**
  * Open the menu on [click, tap, touchstart]
  * Add overlay over content, on close delay the overlay by 300ms
  */
	$(".toggle-menu").on("click tap touchstart", function () {
		showMenu();
	});

	$(".overlay").on("click tap touchstart", function () {
		hideMenu();
	});

	$(window).on("keydown", function (event) {
		if (event.keyCode === 27) {
			$(".overlay").css("display") === "block" ? hideMenu() : showMenu();
		}
	});

	/**
  * Detect if window is wider that 1480px, and if the overlay is active.
  * Then remove overlay, and keep menu tray open
  */
	$(window).resize(function () {
		var checkWidth = $(this).width();
		if (checkWidth >= 1480 && $(".overlay").css("display") === "block" && $("nav").hasClass("menu-open")) {
			hideMenu();
		}
	});

	/**
  * Detect link clicks, if target is category, or it's in the nav, load the section requested
  */
	$("a").on("click", function (event) {
		if ($(this).data("target") === "category" || $(this).parent("nav")) {
			console.log("Target is a category");
			var target = $(event.target).attr("href");
			console.log(target + " ==? " + window.location.hash);
			if (window.location.hash === target || !target) {
				return true;
			} else {
				if ($(".overlay").css("display") === "block" && $("nav").hasClass("menu-open")) {
					hideMenu();
				}

				$("main article").hide("300");
				$("main article[data-category='" + target + "']").show("300");
				return true;
			}
		}
	});
});
//# sourceMappingURL=site.js.map
