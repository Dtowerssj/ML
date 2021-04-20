import { sign } from 'jsonwebtoken';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler= (e) => {
        e.preventDefault();
        // signin action
        
    }

    const signIn = (e) => {
        e.preventDefault()
        
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler  }>
                <div>
                    <h1>Inicio de sesión</h1>
                </div>
                <div>
                    <label htmlFor="email">Dirección de email</label>
                    <input type="email" id="email" value={email} placeholder="Escribe tu email" 
                    required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Clave</label>
                    <input type="password" id="password" value={password} placeholder="Escribe tu clave" 
                    required onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit" onClick={signIn}>Ingresar</button>
                </div>
                <div>
                    <label />
                    <div>
                        Nuevo usuario? {' '}
                        <Link to="/register">Crea tu cuenta</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
