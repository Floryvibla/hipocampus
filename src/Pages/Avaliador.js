import React from 'react'
import {useHistory} from 'react-router-dom'

import Home from '../Components/Home/'
import Card from '../Components/Home/Card'
import Header from '../Components/Header'
import Menu from '../Components/Menu'


function Page() {

    const history= useHistory()

    return (
        <>
            <Menu/>
            <Header/>
            <Home text= "Apontamentos solicitados:">
                <Card
                    title= "Iniciar simulação"
                    onClick= {() => history.push("/gravar")}
                    position= {2}
                />
            </Home>
        </>
    )
}

export default Page
