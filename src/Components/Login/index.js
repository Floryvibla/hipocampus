import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import { Area, GlassBack, TextView, Form, Input, Button } from './Styles'

function Login() {

    const [user, setUser] = useState('')
    const [name, setName] = useState('')
    

    const history= useHistory()

    const handleSubmit= e => {
        e.preventDefault()
        if(name == 'maria'){
            setUser(1)
            history.push('/home')
            alert(user)
        }
        if(name == 'debora'){
            setUser(2)
            history.push('/home')
        }
        
    }

    useEffect(() => {
        const inicialuser= JSON.parse(localStorage.getItem('user'))
        if(inicialuser){
            setUser(inicialuser)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    },[user])

    return (
        <Area>
            <GlassBack>
                <TextView>
                    Olá, seja bem-vindo!
                </TextView>
                <Form onSubmit={(e) => handleSubmit(e)} >
                    <Input
                         type='text' name='email' placeholder='Email'
                         onChange={(e) => setName(e.target.value)}
                         value={name}
                    />
                    <br/>
                    <Input
                        type='password' name='password' placeholder='Senha'
                    />
                    <br/>
                    <Button
                        type='submit' value='ENTRAR'
                    />
                </Form>
            </GlassBack>
        </Area>
    )
}

export default Login
