import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function Card(props) {

    const [open, setOpen] = useState(false)
    const [user, setUser]= useState(1)

    const history= useHistory()

    const handlerOpen= () => {

    }

    return (
        <Area>
            <Image onClick={() => history.push('/lesson')}>
                
            </Image>

            <Text>
                <Title>
                    Operação cardíaca
                </Title>
                <SubTitle>
                    Cenário 1
                </SubTitle>
                <Data>
                    10/12/2021 - 09:20
                </Data>
                <Content>
                    <div style= {{color: 'grey'}}>Maria da Silva</div>
                    <div style= {{color: 'grey'}}>Medicina</div>
                    <div style= {{color: 'grey'}}>Ano A</div>
                </Content>
            </Text>
            <Start open= {!open} >
                {props.position === 1 &&
                    <Span  onClick={() => setOpen(!open)}>
                        Opções
                    </Span>
                }
                {props.position === 2 &&
                    <Span  onClick={props.onClick}>
                        {props.title ?? "Opções"}
                    </Span>
                }
                {open &&
                    <Option>
                    {/* <Span 
                        font="12"
                        margin="20px"
                    >
                        Apontamento do professor
                    </Span>
                    <Span 
                        font="12"
                        margin="10px 0px 0px 20px"
                    >   
                        Apontamento do Juiz
                    </Span> */}
                    {user === 1 &&
                        <>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={props.onClick} 
                            >
                                Apontamento do professor
                            </div>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={props.onClick} 
                            >
                                Apontamento do Juiz
                            </div>
                        </>
                    }
                    {user === 2 &&
                        <>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={props.onClick} 
                            >
                                Meus Apontamentos
                            </div>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={() => history.push('avaliador')}
                            >
                                Apontamento Gerais
                            </div>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={() => history.push('/minicex')} 
                            >
                                Mini-CEX
                            </div>
                            <div 
                                style={{color: "#fefefe", fontSize: 15, marginTop: '10px', fontWeight: "bold"}}
                                onClick={() => alert('Simulação liberada')}
                            >
                                Liberar para aluno
                            </div>
                        </>
                    }
                </Option>
                }
            </Start>
        </Area>
    )
}

const Area= styled.div`
    width: 250px;
    height: 400px;
    background-color: honeydew;
    margin: 10px;
    display: flex;
    flex-direction: column;

    &:hover{
        transition: all 0.5s ease;
        box-shadow: 0px 0px 50px #fefefe69;
    }
    
`
const Image= styled.div`
    width: 100%;
    height: 60%;
    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PHOTOS_INSIDE_THE_CLASSROOM_UPDATED014.jpg/500px-PHOTOS_INSIDE_THE_CLASSROOM_UPDATED014.jpg');
    background-size: cover;
    cursor: pointer;
    position: relative;

    &:hover{
        transition: all 0.5s ease;
        box-shadow: inset 0px 0px 50px #00000019;
    }
    &:active{
        transition: all 0.5s ease;
        box-shadow: 0px 0px 50px #fefefe69;
    }
`
const Start= styled.div`
    width: 100%;
    height: ${props => props.open ? 50 : 250}px;
    background-color: #03A9F4;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding-left: 20px; */
    margin-top: 10px;
    cursor: pointer;

    &:hover{
        transition: all 0.5s ease;
        background-color: #03b9e3;
    }
    &:active{
        background-color: #03A9F4;
    }
`
const Span= styled.span`
    color: #fefefe;
    font-size: ${props => props.font ?? 16}px;
    font-weight: bold;
    /* margin: ${props => props.margin ?? "0px 0px 10px 30px"}; */
    padding-left: 20px;
    width: 90%;
    height: 40px;
`
const Option= styled.div`
    width: 80%;
    /* height: 80px; */
    background-color: rgb(53, 128, 145);
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    padding-left: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`

const Text= styled.div`
    max-width: 100%;
    height: 80%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    /* background-color: #000; */
`

const Title= styled.div`
    flex: 1;
    width: 100%;
    color: #0e0e0e;
    font-size: 18px;
    font-weight: bold;
    /* text-shadow: 0px 0px 10px #0e0e0e39; */
    display: flex;
    align-items: center;
`
const SubTitle= styled.div`
    flex: 1;
    width: 100%;
    color: #0e0e0e79;
    font-size: 17px;
`
const Data= styled.div`
    color: grey;
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
`
const Content= styled.div`
    /* background-color: red; */
`

export default Card
