//zdarzenia -tak jak w js, 
//click()
//dbclick()
//mouseenter()

//zdarzenia mozemy wywolywac po odwolaniu sie do danego selektora analogicznie jak w js
$(function() {
	$("p").click(function() {
		$(this).css("color", "orange");
		
	});
	$("h1").on({
		"click":function(){
		$(this).css("color", "orange");
	}, 									//przecinek, bo robie kilka przypadków - co sie ma zdarzyć "on"click
		"mouseleave":function() {		//a potem "on"mouseleave
			$(this).css("color", "inherit");
		}
	});
});

//mozna równiez podpiąc kilka zdarzeń nie :d

//animacje - za pomoca zdeginiowanych metod jQuery mozna tworzyc wlasne animacje
//sa predefiniowane metody hide() i show()