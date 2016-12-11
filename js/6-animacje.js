
//animacje - za pomoca zdeginiowanych metod jQuery mozna tworzyc wlasne animacje
//sa predefiniowane metody hide() i show()
//ta funckja ma 2 parametr, i kazda anmacja moze miec taki parametr, ktora wywoluje funkcje zwrotna, czyli po zakończeniu jakiejś animacji zrób "coś"

$(function(){
	
	$("p").hide(3000).show(3000); //to samo co getElementById("first") i dodanie css .hide (slow/fast lub w milisekundach) - dodanie animacji ukrycia elementu .show - potem pokazania
	
//	function alarm(){
//		alert("koniec animacji");
//	}
//	
	$("h1").fadeOut(3000).fadeIn(3000);
	
	$("h2").slideUp(3000).slideDown(3000);
	
	$("h3").animate({"font-size": "3em", "margin-left": "100px"}, 2000); //nie ma funkcji zwrotnej
	
	function animacja() {
		$("h3").animate({"font-size": "1em", "margin-left": "0px"}, 2000); 
	}

	//wlasna animacja - wybieramy selektor, podajemy parametry - (wlasciwosci css, ktore bedziemy animowac), szybkość i funkcje zwrotno 
// $(selektor)
});

//jak zrobic wlasna animacje? 
//wyhbieramy selektor, podajemy parametry - (wlasciwosci css, ktore bedziemy animowac), szybkość i funkcje zwrotno 
// $(selektor)