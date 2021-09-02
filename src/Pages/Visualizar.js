import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import { BsFillBookmarkFill } from 'react-icons/bs'
import Webcam from 'react-webcam'


import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Player from '../Components/Player'

function Page() {

    const [state, setState] = useState(false)
    const [user, setUser]= useState(1)

    const history= useHistory()

    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "Cenário 2">
                <Area>
                    <div style={{color: '#358091', fontSize: 18}}>
                        Maria da Soliva
                    </div>
                    {user === 1 &&
                    <>
                        <div style={{fontWeight: 'bold', marginTop: 20, fontSize: 16}}>
                            Avaliadores
                        </div>
                        <div style={{display: 'flex', marginTop: 10}}>
                            <Bar onClick={() => setState(true)} >Débora</Bar>
                            <Bar>Maria da Soliva</Bar>
                        </div>
                    </>
                    }
                    
                    <Container>
                        <Mark>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    paddingTop: 10,
                                }}
                            >
                                <div
                                    style={{
                                        color: "#358091",
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginBottom: 10,
                                    }}
                                >
                                    <BsFillBookmarkFill size={20}/>
                                    Marcações
                                </div>
                                {user === 2 &&
                                    <>
                                        <Title>00:00:17</Title>
                                        <Title>00:00:50</Title>
                                        <Title>00:00:56</Title>
                                        <Title>00:01:47</Title>
                                    </>
                                }
                                {state &&
                                <>
                                    <Title>00:00:04</Title>
                                    <Title>00:00:11</Title>
                                </>
                                }
                            </div>
                        </Mark>

                        <PlayerArea>
                            {user === 1 &&
                                <Webcam />
                            }
                            {user === 2 &&
                                <Player />
                            }
                        </PlayerArea>

                        <Playlist>
                            <VideoList/>
                            <VideoList/>
                        </Playlist>
                        {user === 2 &&
                            <Button onClick={() => history.push('/home')}>FINALIZAR</Button>
                        }
                    </Container>
                </Area>
            </Lesson>
        </>
    )
}

const Area= styled.div`

`
const Bar= styled.div`
    width: 170px;
    height: 35px;
    background-color: #358091;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 18px;
    margin-left: 10px;
    cursor: pointer;
`
const Container= styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    margin: 20px 0px;
    position: relative
`
const Mark= styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    background-color: #cecece;
    height: 94%;
`
const Title= styled.div`
    font-Size: 14;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 5px;
`
const PlayerArea= styled.div`
    width: 60%;
    height: 95%;
    margin: 0px 20px;
    /* margin-bottom: 20%; */
`
const Playlist= styled.div`
    width: 250px;
    height: 94%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
`
const VideoList= styled.div`
    width: 200px;
    height: 100px;
    background-color: gray;
    margin-bottom: 20px;
`
const Button= styled.div`
    width: 150px;
    height: 50px;
    background-color: #03A9F4;
    position: absolute;
    bottom: 0;
    right: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
`

export default Page
