class Ajaxhivas{
constructor(){
//console.log("Töltés folyamatban...");
}

     getAjax(fajlnev, myCallback) {
        const termekek = [];       
        console.log(fajlnev);
        $.ajax({

          url: fajlnev,
          type: "GET",
          success: function (result) {
            result.forEach((element) => {
                termekek.push(element);
                
              
            });
            console.log(termekek);
            myCallback(termekek);
           
          },
        });
      }
      postAjax(fajlnev, adat) {
        const termekek = [];
        $.ajax({
          url: fajlnev,
          type: "POST",
          data: adat,
          success: function (result) {},
        });
      }
      putAjax(fajlnev, tomb, myCallback) {
        const termekek = [];
        $.ajax({
            
          url: fajlnev,
          type: "PUT",
          success: function (result) {
            result.termekek.forEach((element) => {
              
            });
            
          
          },
        });
      }
      deleteAjax(fajlnev, tomb, myCallback) {
        const termekek = [];
        $.ajax({
          url: fajlnev,
          type: "DELETE",
          success: function (result) {
            result.termekek.forEach((element) => {
             
            });
            
          },
        });
      }
    

}
