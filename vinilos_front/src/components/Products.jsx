import React, {useState, useEffect} from 'react'

const Products = () => {
    const [products, setProducts] = useState([])

    const apiInfo = () => {
      fetch('http://localhost:3000/products/list')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => console.error(error))
    }

  
    return (
      <>
      <button onClick={apiInfo}>trae la info mierda</button>
      <div>Hola</div>
      </>
    )
}

export default Products
