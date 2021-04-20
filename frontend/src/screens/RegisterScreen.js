
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterScreen(props) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

    const submitHandler= (e) => {
        e.preventDefault();
        // signin action
        
    }

    const signIn = (e) => {
        e.preventDefault()
        
    }

    return (
        <div>
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1>Crear cuenta</h1>
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              placeholder="Escribir nombre"
              required
              onChange={(e) => setNombre(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Escribir email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label htmlFor="password">Clave</label>
            <input
              type="password"
              id="password"
              placeholder="Escribir clave"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <label />
            <button className="primary" type="submit">
              Register
            </button>
          </div>
          <div>
            <label />
            <div>
              Ya tienes una cuenta?{' '}
              <Link to={`/signin?redirect=${redirect}`}>Iniciar sesión</Link>
            </div>
          </div>
        </form>
      </div>
    )
}
