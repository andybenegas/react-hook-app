import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(0);

  const incrementFather = useCallback(
    (value) => {
      //El setCounter puede llamarse asi:
      // setCounter( counter + 1 );
      //Otro uso es, mandándole un callback en el cual tenemos el valor actual del counter, que puedo tomarlo y sumarle 1.
      setCounter( (c) => c + value );
    },
    [],
  );

    //El método React.memo no sirve en este caso porque en JS, las funciones y/o objetos siempre apuntan a posiciones en memoria diferentes. Cada vez que el componente CallbackHook se vuelve a dibujar, la función incrementFather es diferente, está ubicada en una posición en memoria distinta. Por lo cual...
    // const incrementFather = () => {
    //   setCounter(counter + 1);
    // }

  return (
    <>
        <h1>useCallback Hook: { counter }</h1>
        <hr />
                          {/* Este objeto es diferente */}
        <ShowIncrement increment={ incrementFather } />
    </>
  )
}