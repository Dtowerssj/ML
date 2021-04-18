import React from 'react';

export default function Producto(props) {
    const {producto} = props;
    return(
            <div key={producto._id} className="card">
                <a href={`/producto/${producto._id}`}>
                    <img className="medium" src={producto.imagen} alt={producto.nombre}/>
                </a>
                <div className="card-body">
                    <a href={`/producto/${producto._id}`}>
                        <h2>{producto.nombre}</h2>
                    </a>
                </div>
                <div className="price">
                    ${producto.precio}
                </div>
            </div>
    )
}
