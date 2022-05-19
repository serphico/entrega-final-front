
import React from 'react'
import Item from './item/Item'

export default function Productos() {
  
    const [data, setData]= React.useState(null);
    React.useEffect(()=>{
      fetch("/api")
      .then((res)=> res.json())
      .then((data) => {
        setData(data.productos)})
    }, [])

    return(
        <>
        {
            !data ? <>...loading</> : data.map( (prod) =>{
                return(
                    <Item key={prod._id} idProduct={prod._id} title={prod.title} photo={prod.photo} price={prod.price} description={prod.description} category={prod.category}/>
                )
            })
        }
        </>
    )
    
}