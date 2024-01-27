import React from 'react'
import {useState} from 'react'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const [data, setData] = useState("Soy data")
  console.log(data)
  const [data2, setData2] = useState("Soy Data2")
  console.log(data2)


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
        <ItemList productos={productos} />
      </div>
    )

    return (
      <div>
        {
            productos.map((p) => {
            return ( 
                <ItemList
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
export default ItemListContainer