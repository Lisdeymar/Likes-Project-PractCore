function actualizalike( botonLike) {
    let divLike = botonLike.closest( '.prueba' ).querySelector( '.likes');
    let num = Number( divLike.innerText );
    num ++;
    divLike.innerText = num;
}