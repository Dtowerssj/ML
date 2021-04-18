import React, { useEffect, useState } from 'react';
import Producto from '../components/Producto';
import axios from 'axios';

 
export default function HomeScreen() {

    const [productos, setProducts] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
          
            const { data } = await axios.get('/api/productos');
            setProducts(data);
          
          }
        
        fecthData();
      }, []);

    return (
        <div>
            <div>
                <h2 className="titulo">Últimos productos publicados</h2>
                <hr></hr>
            </div>
            <div className="row center">
              {productos.map((producto) => (
                <Producto key={producto._id} producto={producto}></Producto>
              ))}
            </div>
                
        </div>   
    );
}
