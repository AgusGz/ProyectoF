import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const productos = [
        {id: 1, titulo: 'Producto 1', descripcion: "descripcion del producto 1", precio: 1000},
        {id: 2, titulo: 'Producto 2', descripcion: "descripcion del producto 2", precio: 2000},
        {id: 3, titulo: 'Producto 3', descripcion: "descripcion del producto 3", precio: 3000}
]


const mostrarProductos = new Promise((resolve, reject) => {

    if (productos.length > 0) {
      setTimeout (() => {
        resolve(productos)
      }, 3000)
      } else {
        reject("No se obtuvieron productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })


    return (
      <div>
        {
            productos.map((p) => {
            return ( 
                <ItemDetail
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
export default ItemDetailContainer