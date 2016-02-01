"use strict";

$(document).ready(function() {
	$(".children").click(function(e) {
		var sidebarLength = $(this).children("ul").children().length;
		var target = $(e.target).parent();

		if ($(this).children("ul").hasClass("open") && target.hasClass("children")) {
			$(this).children("ul").css("max-height", "0px").removeClass("open");
		} else {
			$(this).children("ul").css("max-height", "500px").addClass("open");
		}
	});

	$(".toggle-menu").click(function() {
		$(".overlay").css("display", "block");
		$("nav").addClass("menu-open");

		$(".overlay").click(function() {
			$("nav").removeClass("menu-open");

			setTimeout(function(){
				$("body").removeClass("stop-scroll");
				$(".overlay").css("display", "none");
			}, 300);
		});
	});
});