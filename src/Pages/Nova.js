import React from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'

function Page() {

    const history= useHistory()

    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "Nova simulação ">
                <Area>
                    <Select>
                        <option value="0">Laboratorio</option>
                        <option value="1">Laboratorio 1</option>
                        <option value="2">Laboratorio 2</option>
                    </Select>
                    <Select>
                        <option value="0">Cenário</option>
                        <option value="1">Cenário 1</option>
                        <option value="2">Cenário 2</option>
                    </Select>
                    <div
                        style={{
                            display: 'flex',
                            width: '80%',
                            height: '100%',
                            marginBottom: 20,
                        }}
                    >
                        <Input type="date" />
                        <Input type="time" />
                    </div>
                    <Select>
                        <option value="0">Turma</option>
                        <option value="1">A</option>
                        <option value="2">B</option>
                    </Select>
                    <Select>
                        <option value="0">Aluno</option>
                        <option value="1">Maria da Silva</option>
                        <option value="2">Antonio da Silva</option>
                        <option value="3">Ana da Silva</option>
                    </Select>
                    <Div>
                        <div
                            style={{
                                color: "#358091",
                                fontWeight: 'bold',
                                marginBottom: 20,
                                fontSize: 20,
                            }}
                        >
                            Liberar marcações para alunos:
                            <div
                                style={{
                                    color: "#000",
                                    fontWeight: 'normal',
                                    fontSize: 16,
                                    marginTop: 20,
                                }}
                            >
                                <input type="checkbox" name="aluno1" value="Maria da Soliva" />
                                <label for="aluno1">
                                    <strong> 1º A</strong> - Maria da Soilva - Aluno
                                </label><br/>

                                <input type="checkbox" name="aluno2" value="Maria da Soliva" />
                                <label for="aluno2">
                                    <strong> 1º A</strong> - Antonio da Silva - Aluno
                                </label><br/>

                                <input type="checkbox" name="aluno2" value="Maria da Soliva" />
                                <label for="aluno2">
                                    <strong> 1º B</strong> - Ana da Silva - Aluno
                                </label><br/>
                            </div>
                        </div>
                        <div
                            style={{
                                color: "#358091",
                                fontWeight: 'bold',
                                fontSize: 20,
                            }}
                        >
                            Facilitadores:
                            <div
                                style={{
                                    color: "#000",
                                    fontWeight: 'normal',
                                    fontSize: 16,
                                    marginTop: 20,
                                }}
                            >
                                <input type="checkbox" name="aluno2" value="Maria da Soliva" />
                                <label for="aluno2">
                                    Alberto Silva
                                </label><br/>

                                <input type="checkbox" name="aluno2" value="Maria da Soliva" />
                                <label for="aluno2">
                                    Joana silva
                                </label><br/>
                            </div>
                        </div>
                    </Div>
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
const Select= styled.select`
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    font-size: 16px;
`
const Input= styled.input`
    width: 50%;
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
