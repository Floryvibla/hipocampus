import React from 'react'
import styled from 'styled-components'

function Page() {
    return (
        <Area>
            <Text>
                Minhas simulações
            </Text>
            <Filter>
                <Selecter>
                    <option>Todos</option>
                    <option>Novos</option>
                    <option>Marcados</option>
                    <option>Apontados</option>
                    <option>Concludos</option>
                </Selecter>
            </Filter>
        </Area>
    )
}

const Area= styled.div`
    width: 90%;
    height: 100px;
    margin: 10px;
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Text= styled.div`
    flex: 1;
    color: #161616ec;
    font-size: 35px;
    font-weight: bold;
`
const Filter= styled.div`
    flex: 1;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
`
const Selecter= styled.select`
    margin-right: 5%;
    width: 240px;
    height: 50px;
    background-color: #03A9F416;
    border: none;
    font-size: 16px;
    padding-left: 10px;

    &:focus{
        outline: none;
    }
`


export default Page
