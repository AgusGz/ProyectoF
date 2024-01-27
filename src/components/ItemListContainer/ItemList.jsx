import React from 'react'
import Item from './item'
const ItemList = ({productos}) => {
  return (
    <div>
        {
            productos.map((p) => {
                return (
                    <Item 
                        key={p.id}
                        titulo={p.titulo}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        />

                )
            })
        }

    </div>
  )
}

export default ItemList