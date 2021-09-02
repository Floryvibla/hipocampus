import React, {useState} from 'react'
import styled from 'styled-components'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import { AiTwotoneSound } from 'react-icons/ai'
import { RiFullscreenLine } from 'react-icons/ri'

import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Player from '../Components/Player'
import Timer from '../Components/Time'

function Page() {

    const [state, setState] = useState(false)
    const [marcado, setMarcado] = useState('')
    const [data, setData] = useState([""])

    const handleClick = () => {
        let newList= [...data]
        data.push(marcado)
        setState(true)
        console.log(data);
    }

    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "Cenário 2">
                <Area>
                    <div style={{color: '#358091', fontSize: 18}}>
                        Maria da Soliva
                    </div>
                    
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
                                {state &&
                                    data.map((i, index) => {
                                        return(
                                            <Title key={index}>
                                                {("0" + Math.floor((i / 6000) % 60)).slice(-2)}:
                                                {("0" + ((i / 10) % 60)).slice(-2)}:
                                                {("0" + Math.floor((i / 600) % 60)).slice(-2)}
                                            </Title>
                                        )
                                    })
                                }
                            </div>
                        </Mark>

                        <PlayerArea>
                            <Player />
                        </PlayerArea>

                        <Playlist>
                            <VideoList color="black">
                                <div
                                    style={{
                                        width: '100%',
                                        height: 30,
                                        color: "#fff",
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Camera 2
                                </div>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 50,
                                        color: "#fff",
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 24,
                                    }}
                                >
                                    <FaPlay/>
                                    <AiTwotoneSound/>
                                    <RiFullscreenLine/>
                                </div>
                            </VideoList>
                            <VideoList/>
                            <VideoList/>
                            <VideoList/>
                        </Playlist>
                    </Container>
                    <TimeArea>
                        <Timer
                            marcado= {(e) => setMarcado(e)}
                        />
                    </TimeArea>
                    <ButtonArea>
                        <Button onClick={() => handleClick()}>
                            MARCAR
                        </Button>
                    </ButtonArea>
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
    height: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    align-items: center;
`
const VideoList= styled.div`
    width: 200px;
    height: 110px;
    background-color: ${props => props.color ?? "#cecece"};
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const TimeArea= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2%;
`
const ButtonArea= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #358091; */
    margin-bottom: 10%;
`
const Button= styled.div`
    width: 40%;
    height: 80px;
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
