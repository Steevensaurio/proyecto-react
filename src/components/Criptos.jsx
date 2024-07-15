import {useEffect, useState } from "react"
import axios from "axios"
import "./Criptos.css/"

const Criptos = () => {

    const [criptos, setCriptos] = useState()
    const API_URL = import.meta.env.VITE_API_URL

    useEffect(() => {
        axios.get(`${API_URL}assets`)
          .then((data) =>{
            console.log(data);
            setCriptos(data.data.data)
          })
          .catch(() =>{
            console.error("Petición fallida");
          })
      }, [])

    if(!criptos) return <span>Cargando ...</span>

    return (
        <>
            <div className="div-criptos">
                <ol>
                    { 
                        criptos.map(({id,name, priceUsd}) => (
                            <li key={id}>Nombre: {name} Precio: {priceUsd}</li>   
                        ))
                        
                    }
                </ol> 
            </div>        
            
        </>
    )
}

export default Criptos
