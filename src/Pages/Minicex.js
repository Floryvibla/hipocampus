import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'

const Section= ({title}) => {
    return(
        <Select>
            <option value="0">{title}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </Select>
    )
}

function Page() {

    const history= useHistory()
    const arr= [
        '1. Habilidade de entrevista médica ',
        '2. Habilidades de exame físico e/ou técnica cirúrgica ',
        '3. Qualidades humanísticas / Profissionalismo   ',
        '4. Julgamento clínico   ',
        '5. Habilidades de aconselhamento   ',
        '6. Organização / Eficiência  ',
        '7. Competência clinica geral   '
    ]

    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "MINI EXERCÍCIO CLÍNICO AVALIATIVO (Mini-CEX)">
                <Area>
                    <Select>
                        <option value="0">Etapa</option>
                        <option value="1">1º</option>
                        <option value="2">2º</option>
                        <option value="3">3º</option>
                        <option value="4">4º</option>
                        <option value="5">5º</option>
                        <option value="6">6º</option>
                        <option value="7">7º</option>
                        <option value="8">8º</option>
                    </Select>
                    <div style={{marginBottom: 20}}>
                        <div>Docente / Facilitador(a)</div>
                        <Input type="text" width={100} />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <div>Paciente Simulado/ diagnóstico</div>
                        <Input type="text" width={100} />
                    </div>

                    <div>
                        <Input type="date" />
                    </div>

                    

                    <Select>
                        <option value="0">Cenário</option>
                        <option value="1">Ambulatório</option>
                        <option value="2">Enfermeria</option>
                        <option value="1">Pronto Socorro / UE</option>
                        <option value="2">Visita domiciliar</option>
                        <option value="2">Outro</option>
                    </Select>

                    <Select>
                        <option value="0">Complexidade</option>
                        <option value="1">Baixa</option>
                        <option value="2">Moderna</option>
                        <option value="1">Alta</option>
                    </Select>
                    <Select>
                        <option value="0">Foco</option>
                        <option value="1">Coleta de dados</option>
                        <option value="2">Exame fisico</option>
                        <option value="1">Diagnostico</option>
                        <option value="2">Tratamento</option>
                        <option value="2">Aconselhamento</option>
                    </Select>

                    <div
                        style={{
                            // display: 'flex',
                            // width: '80%',
                            // height: '100%',
                            marginBottom: 20,
                            marginTop: 20,
                        }}
                    >
                        <SubTitle>ITEM AVALIADO / CONCEITO</SubTitle>
                        {arr.map((item, index) => {
                            return(
                                <Section title={item} />
                            )
                        })}
                    </div>

                    <div style={{marginBottom: 10}}>
                        <div>Duração da observação(min)</div>
                        <Input type="text" width={100} />
                    </div>
                    <div style={{marginBottom: 20}}>
                        <div>Duração do feedback(min)</div>
                        <Input type="text" width={100} />
                    </div>
                    
                    <Select>
                        <option value="0">Satifação do avaliador</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>
                    <Select>
                        <option value="0">Satifação do aluno</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Select>

                    <div style={{marginBottom: 20}}>
                        <div>Comentarios</div>
                        <Input type="text" width={100} />
                    </div>
                    
                    <ButtonArea>
                        <Button onClick={() => history.push("/home")}>Salvar</Button>
                    </ButtonArea>
                    <Div>
                        
                    </Div>
                </Area>
            </Lesson>
        </>
    )
}

const Area= styled.div`
    width: 50%;
    height: 100%;
`
const SubTitle= styled.div`
    display: flex;
    align-items: center;
    font-size: 4vh;
    font-weight: bold;
    width: 100%;
    height: 70px;
    color: #358091;
    margin-left: 10px;
`

const Select= styled.select`
    width: 100%;
    height: 100%;
    margin: 20px 0px;
    font-size: 16px;
`
const Option= styled.option`
    width: 350px;
    height: 90px;
    font-size: 16px;
`
const Input= styled.input`
    width: ${({width}) => width ?? '50'}%;
    height: 100%;
    margin-right: 10px;
    font-size: 16px;
`
const Div= styled.div`
    width: 70%;
    height: 200px;
    margin-bottom: 20px;
`
const ButtonArea= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    /* background-color: #358091; */
    margin-top: 10%;
`
const Button= styled.div`
    width: 40%;
    height: 60px;
    background-color: #03A9F4;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0px 0px 10px #00000049;

    &:hover{
        background-color: #03A9F499;
    }
    &:active{
        background-color: #03A9F4;
    }
`

export default Page
