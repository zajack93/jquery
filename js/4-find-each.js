//metoda find() - pozwala odnaleźć wszystkie selektory w danym dokumencie i zrobienie na nich jakichś operacji - dzialanie np na wszystkich elementach danego typu

//metoda each() - pozwala nam wywołać dla wszystkich elementów, które są przypisane pod dany seleketor pewna funkcje - metoda ma być uruchamiana dla danych elementow - alternatywa dla pętli for

$(function(){
		  
	$("body").find("p").css({"color":"green"});  //szukamy wszystkie elementy p, które sa elementami potomnymi dla body i nadajemy im kolor green
	
	$("body").find("p").eq(0).css({"color":"blue"});  // metoda eq(0) - dla 1 elementu potomnego w kolekcji wszystkich elementow p - odwoluje sie jak do tablicy:) ..szukamy wszystkie elementy p, które sa elementami potomnymi dla body i nadajemy im kolor green  
	
	$("p").each(function(index){      //dla kazdego paragrafu wykonaj funkcje, ktora zwroci ten paragraf
		//console.log(index);
		$(this).addClass("paragraf-" + index);  //mozemy kazdemu elementowi nadac klase //this - podaje seleektor, w którym aktualnie sie znajduje podczas wykonywania petli for -bo each to alt dla for
	});
	
});

//zdarzenia -tak jak w js, 
//click()
//dbclick()
//mouseenter()
