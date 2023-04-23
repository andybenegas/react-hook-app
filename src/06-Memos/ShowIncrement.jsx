import React from 'react';

export const ShowIncrement = React.memo(({ increment }) => {

  //No se debe colocar nada en la ejecución directa de su Functional Component. Usualmente van a tener aqui funciones, hooks que van a realizar el proceso, ese sería el mecanismo... Pero digamos que realmente tenemos que ser muy eficientes y que esto no vuelva a redibujarse. Para ello se utiliza el useCallback.

  console.log('Me volví a generar :(')

  return (
    <button 
        className="btn btn-primary"
        onClick={ () => {
            increment( 1 );
        } }
    >
        Incrementar
    </button>
  )
});
