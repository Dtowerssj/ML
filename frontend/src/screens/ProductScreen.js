import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function ProductScreen(props) {

    const productId = props.match.params.id;
    console.log(productId);
    const producto = {};
    
    try {
        const { data } = axios.get(`/api/productos/${productId}`);
    console.log('data: ' + data)
    } catch (error) {
        console.log('error: '+error)
    }
  /*  const { data } = axios.get(`/api/productos/${productId}`);
    console.log('data: ' + data)*/
           

   // useEffect(() => {
        const fecthData = async (producto={}) => {
          
            const { data } = await axios.get(`/api/productos/${productId}`);
            // eslint-disable-next-line no-const-assign
            producto= data;
        }
        
      //fecthData();
  //    }, []);

    return (
        <div>
            <Link to="/">Volver a los resultados</Link>
            <hr></hr>
            <div className="row top">
                <div className="col-2">
                     <img className="large" src={producto.imagen} alt={producto.nombre}/>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{producto.nombre}</h1>
                        </li>
                        <li>Precio: ${producto.precio}</li>
                        <li>
                            Descripción:
                            <p>{producto.descripcion}</p>
                        </li>
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-bodyy">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Precio</div>
                                    <div className="price">${producto.precio}</div>
                                </div>
                            </li>   
                            <li>
                                <Link to="BuyScreen">
                                    <button className="primary block">Comprar</button>
                                </Link>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    );
}
