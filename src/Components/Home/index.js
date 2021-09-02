import React from 'react'
import {useHistory} from 'react-router-dom'

import Card from './Card'
import Title from './Title'

import { 
    Area,
    Container,
    Cours,
} from './Styles'

function Home({children, text}) {

    const history= useHistory()

    return (
        <Area>

            <Container>
                <Cours>
                    <Title/>
                    <div
                        style={{
                            color: '#05A3F7',
                            fontWeight: 'bold',
                            fontSize: 18,
                        }}
                    >
                        {text}
                    </div>

                    {children ??
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexWrap: 'wrap'
                            }}
                        >
                            <Card position= {1} onClick={() => history.push("/visualizar")}/>
                            <Card position= {1} onClick={() => history.push("/visualizar")}/>
                            <Card position= {1} onClick={() => history.push("/visualizar")}/>
                            <Card position= {1} onClick={() => history.push("/visualizar")}/>
                            <Card position= {1} onClick={() => history.push("/visualizar")}/>
                        </div>
                    }
                </Cours>
            </Container>
        </Area>
    )
}

export default Home
