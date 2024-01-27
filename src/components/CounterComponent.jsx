import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterComponent = () => {



const {contador, suma, resta} = useCounter(0, 1)




    return (
    <div>
        <h2>Contador:{contador}</h2>
        <button onClick={resta}>restar</button>
        <button onClick={suma}>sumar</button>
    </div>
  )
}

export default CounterComponent