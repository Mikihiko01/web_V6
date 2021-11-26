$(function () {
  //adatok beolvas
  let apiurl= "http://localhost:3000/termekek";
  const ajax2 = new Ajaxhivas();
  const kosar = new Kosar();
  console.log(apiurl);
  ajax2.getAjax(apiurl, kiir);


  //feliratkozun a kosar eseményre
  $(window).on("kosarba", (event) => {
    //itt a kosarba teszem event.detail
    kosar.setKosar(event.detail);
  });

  
  function kiir(tomb) {
    const szuloelem = $(".termekek");
    const sablonelem = $(".termek");
   
    

    tomb.forEach(function (tombelem) {
      let ujelem = sablonelem.clone().appendTo(szuloelem);
      let ujobj = new TermekVasarlo(ujelem, tombelem);
  
    });
    sablonelem.remove();
  }
  
});
