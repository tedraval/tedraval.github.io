
var cont = 1;

function contador(){   
    if(cont == 5){
        window.open(
            '../src/pages/convite.html',
            '_blank' // <- This is what makes it open in a new window.
          );
    } else{
        cont ++;
    }
}


