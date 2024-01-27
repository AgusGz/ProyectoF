import { useState } from 'react'
import { Button} from'@chakra-ui/react'

const ItemCount = () => {
  
  const [contador, setContador] = useState(0)

  const mostrarMensaje = () => {
    alert(`Agregado al carrito ${contador} unidades`)
  }

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  const decrementarContador = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }


  return (
    <div>
      <Button colorScheme= 'teal' size='xs' onClick={incrementarContador}>
         +
      </Button>
      <Button onClick={mostrarMensaje}>
        Agregar al carrito {contador}
      </Button>
      <Button colorScheme= 'teal' size='xs' onClick={decrementarContador}>
        -
      </Button>
    </div>
  )
}

export default ItemCount