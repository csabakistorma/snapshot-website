$(document).ready(function() {
	/*
	A gombok színezéséért felelős rész.
	Alapértelmezetten az All gomb háttérszíne más színű,
	majd mikor átkattintunk egy másik gombra annak a háttárszíne
	válltozik. Ehhez minden kattintáskor vissza állítjuk a háttérszínt
	az alap kékre az összes gombon, és csak annak az egynek adunk
	sötét hátteret amit épp kiválasztottunk.
	*/
	$("#all").css("background-color", "#22313F");
	
	$("#all").click(function(){
		$(".gallery-nav button").css("background-color", "#19B5FE");
  	$("#all").css("background-color", "#22313F");
  });
	
	$("#people").click(function(){
		$(".gallery-nav button").css("background-color", "#19B5FE");
  	$("#people").css("background-color", "#22313F");
  });
	
	$("#places").click(function(){
		$(".gallery-nav button").css("background-color", "#19B5FE");
  	$("#places").css("background-color", "#22313F");
  });
	
	$("#things").click(function(){
		$(".gallery-nav button").css("background-color", "#19B5FE");
  	$("#things").css("background-color", "#22313F");
  });
	
	
	/* 
	Megjelenítjük a képeket.
	Ha megnyomunk egy gombot először megjelenítjük az összeset,
	majd eltüntetjük azokat melyeket nem akarunk ott megjeleníteni.
	*/
	$("#all").click(function(){
    $("img").show();
	});
	
	$("#people").click(function(){
		$("img").show();
    $("#img-05").hide();
		$("#img-09").hide();
		$("#img-10").hide();
		$("#img-07").hide();
		$("#img-11").hide();
		$("#img-08").hide();
		$("#img-12").hide();
		$("#img-06").hide();
	});
	
	$("#places").click(function(){
		$("img").show();
    $("#img-01").hide();
		$("#img-02").hide();
		$("#img-03").hide();
		$("#img-04").hide();
		$("#img-09").hide();
		$("#img-10").hide();
		$("#img-11").hide();
		$("#img-12").hide();
	});
	
	$("#things").click(function(){
		$("img").show();
    $("#img-01").hide();
		$("#img-02").hide();
		$("#img-03").hide();
		$("#img-04").hide();
		$("#img-05").hide();
		$("#img-06").hide();
		$("#img-07").hide();
		$("#img-08").hide();
	});
});