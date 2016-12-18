$(function(){
	$.backstretch([
      "images/12_1.jpg",
      "images/12_2.jpg",
      "images/12_3.jpg",
      "images/12_4.jpg"
  ], {duration: 5000, fade: 750});
});
document.addEventListener("DOMContentLoaded", function(event){
	var last_scrollY;
	var width, height;
	width = $(window).width();
	height = $(window).height();
	window.addEventListener('scroll', function(event){
		last_scrollY = window.scrollY;
		if(width > 736 && height < 1920){
			if(last_scrollY > 73 && last_scrollY<90 || last_scrollY < 73){
			document.querySelector("#para1").className += " divopacity";
			$("#para2").removeClass("divopacity");
			$("#para3").removeClass("divopacity");
			$("#para4").removeClass("divopacity");
		}
		else if(last_scrollY > 255 && last_scrollY < 285 || last_scrollY > 485){
			document.querySelector("#para2").className += " divopacity";
			$("#para1").removeClass("divopacity");
			document.querySelector("#para3").className += " divopacity";
			document.querySelector("#para4").className += " divopacity";
		}
		// else if(last_scrollY > 860 && last_scrollY < 889){
		// 	document.querySelector("#para3").className += " divopacity";
		// 	$("#para2").removeClass("divopacity");
		// }
		// else if(last_scrollY > 1060 && last_scrollY < 1085){
		// 	document.querySelector("#para4").className += " divopacity";
		// 	$("#para3").removeClass("divopacity");
		// }
		}
		else{
		if(last_scrollY > 73 && last_scrollY<90 || last_scrollY < 73){
			document.querySelector("#para1").className += " divopacity";
			$("#para2").removeClass("divopacity");
			$("#para3").removeClass("divopacity");
			$("#para4").removeClass("divopacity");
		}
		else if(last_scrollY > 255 && last_scrollY < 285){
			document.querySelector("#para2").className += " divopacity";
			$("#para1").removeClass("divopacity");
		}
			else if(last_scrollY > 860 && last_scrollY < 889){
			document.querySelector("#para3").className += " divopacity";
			$("#para2").removeClass("divopacity");
		}
		else if(last_scrollY > 1060 && last_scrollY < 1085){
			document.querySelector("#para4").className += " divopacity";
			$("#para3").removeClass("divopacity");
		}
	}

	});
})
