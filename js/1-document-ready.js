// jquery - biblioteka ułatwiajaca korzystanie z js, krótsza forma
//żeby korzystac z jquery nalezy podpiac biblioteke jquery i podpiac ja lokalnie
//jest to manipulacjana strukturze DOM
//posiada wbudowana strukture document.ready(), ktora sprawdza, czy caly dokument sie otworzył
//$(function () {
//});
//całosc dokumentu otwiera sie wewnatrz document.ready 


//funkcja document.ready() - wersja skrócona
$(function () {
//	alert("test");
	$("#first").css({color: "red"}).hide("slow").show(3000); //to samo co getElementById("first") i dodanie css .hide (slow/fast lub w milisekundach) - dodanie animacji ukrycia elementu .show - potem pokazania
});

//konstruckja skryptów - składnia łańcuchowa - łączy się kolejne metody za pomocą znaku kropki. każde metody rozpoczynamy znakiem $ - jest to referencja do funkcji jQuery
//selektory jquery sluza dowskazania pojedynczego elementu, mozna to zrobic po nazwie, ID, klasie, typie atrybutow, wartosci atrybutow etc.