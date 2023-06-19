import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';

function Counter({isLoading}) {

    const [counter, setCounter] = useState(0)
    const prevCount = useRef()

    console.log(prevCount)

    //Incrementa o contador
    const updateCounter = num => {
        setCounter(counter + num)
    }

    //Zera o contador
    const eraseCounter = num => {
        setCounter(num)
    }

    //Renderização condicionada a props
    if(isLoading){
        return <p>Carregando...</p>
    }

    //Genérico
    useEffect(() => {
        console.log("Genérico")
        prevCount.current = counter
    });

    //Fases 2
    useEffect(() => {
        console.log("Montagem")
        
    }, []);

    //Fase 3
    useEffect(() => {
        console.log(counter)
    }, [counter]);

    //Fase 4
    useEffect(() => {
        return () => console.log("Desmontagem")
    }, []);

    return (  
        <div className="contador border border-dark p-3 text-center">
            <h2>Você clicou {counter} vezes</h2>

            <Button texto="Contador" numero="2" contador={updateCounter}/>
            <Button texto="Limpar" numero="3" contador={eraseCounter}/>
        </div>
    );
}

export default Counter;