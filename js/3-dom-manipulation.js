//za pomoca jQuery manipulujemy struktura DOM 

//$(selektor).text() - pobieram tekst
//$(selektor).text("dowolny tekst") - ustawiam tekst

$(function() {
	
	var tekstParagrafuPierwszego = $("#paragraf").text();
	console.log(tekstParagrafuPierwszego);
	
	$(".paragraf").text(tekstParagrafuPierwszego);  //do klasy paragraf dodaje tekst z paragrafu1
	
	$(".paragrafnext").html("To jest <strong>paragraf</strong> z dodanym <br> HTML ")
	$(".paragrafnext").append("treść  na koncu selektora");
	$(".paragrafnext").after("treść za selektorem ");
	
	$("strong").remove(); //usuwam element strong, czyli pogrubienie
						//remove() - usuwa nam cały ten znacnzik strony z treścią w środku
	$(".paragraf").empty();  //paragraf zostaje, ale usunieta zostala jego treść
	
	$(".paragrafnext").css("font-size", "3em");  //dwie alternatywne metody dodawania cssow
	
	$("#paragraf").css({"font-size": "3em", "color":"red"}); //lub
	
	$("h1").addClass("blue"); //dodajac klase nie podajemy kropki, bo wiemy ze dodajemy klase
});

//analogicznie dziala metoda html(), ustawia kod html -analogiczne do innerHTML

//metody pozwalajace dodawac nowa tresc w okreslonych miejscach 
//apend() -na koncu
//prepent() - na poczatku
//after() - po wybranym selektorze
//before() - przed wybranym selektorem
//mozemy usuwac elementy
//remove() - usuwa nam cały!! ten znacnzik strony z treścią w środku
//empty();  //paragraf zostaje, ale usunieta zostaje jego treść - mozna potem dynamicznie go uzupełniać

//metoda css(): - pozwala dynamicznie nadawać właściwości css poszczególnym selektorom
//często sier to wykorzystuje
//$("p").css("color"); - zwraca wartosc koloru
//$("p").css("color", "red"); - znadajewartosc koloru

//jeżeli chcemy dodać wiecej styli, tworzymy klamrowe nawiasy i cały obiekt który posiada wartosc tych styli 

//metoda val() - pobiera wartość pól formularza - analgoicznie do .value

//metoda find() - pozwala odnaleźć wszystkie selektory w danym dokumencie i zrobienie na nich jakichś operacji - dzialanie np na wszystkich elementach danego typu

//addClass() 