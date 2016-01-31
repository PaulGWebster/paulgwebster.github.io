"use strict";

$(document).ready(function() {
	$("*").css("background-color", function(){ return $(this).data("color"); });
	$("*").css("color", function(){ return $(this).data("text"); });
	$("*").css("-webkit-animation-delay", function(){ return $(this).data("delay"); });
	$("main header .img").css("background-image", function(){ return "url(" + $(this).data("bg") + ")"; });

	/*$(".page-title").hover(function() {
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
	}, function() {
		$(".page-title svg").css("left", "0");
	});*/


	$("a").confirmMailto({
		message: "Are you cool enough to send an email to $to",
		to: "html", //html/href
		success: function(){
			$("a").css("color", "#3C3");
		},
		fail: function(){
			$("a").css("color", "#F66");
		},
		callback: function(result){
			if(result){
				alert("Thank you!");
			}else{
				alert("Boooo!");
			}
		}
	});

	$("nav aside a").click(function(){
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

	$(".children a").click(function(e) {
		var sidebarLength = $(".children ul").children().length;
		var target = $(e.target).parent();

		if ($(".children ul").hasClass("open") && target.hasClass("children")) {
			$(".children ul").css("height", 0).removeClass("open");
		} else {
			$(".children ul").css("height", sidebarLength * 33 + "px").addClass("open");
		}
	});

	$(".toggle-menu").click(function() {
		$(".overlay").css("display", "block");

		$("nav").addClass("menu-open");
		$(".overlay").click(function() {
			$("nav").removeClass("menu-open");

			setTimeout(function(){
				$(".overlay").css("display", "none");
			}, 300);
		});
	});
});

$("header svg #bar").click(function(){

});

$("header aside svg").click(function(){
	$(".subHeader .search").toggleClass("show");
});

!function(t){t.fn.confirmMailto=function(e){var n=t.extend({message:"Do you want to send an email to $to?",to:"href",callback:function(){},success:function(){},fail:function(){}},e),a=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,i=function(e){var i=n.message,c=n.to;if(c="href"==c?t(this).attr("href").match(a):"html"==c?t(this).html():c,i=i.replace("$to",c)==i?i+c:i.replace("$to",c),confirm(i)){n.success();var o=!0}else{e.preventDefault(),n.fail();var o=!1}return setTimeout(function(){n.callback(o)},1),o};return this.filter('[href^="mailto:"]').each(function(){t(this).bind("click",i)}),this}}($);