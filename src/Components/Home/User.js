import React from 'react'
import styled from 'styled-components'
import {RiMessage2Fill} from 'react-icons/ri'
import {IoMdNotifications} from 'react-icons/io'

function Page() {

    return (
        <Area>
            <Container>
                <Point right= '0%' top='5%'/>
                <RiMessage2Fill size={25} />
            </Container>
            <Container>
                <Point right= '20%' top='8%'/>
                <IoMdNotifications size={25} />
            </Container>
            <Container>
                <Image/>
            </Container>
        </Area>
    )
}

const Area= styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* margin-right: 5%; */
`
const Container= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-left: 10px;
`
const Point= styled.div`
    width: 7px;
    height: 7px;
    background-color: #e24646;
    border-radius: 50px;
    position: absolute;
    top: ${props => props.top ?? '30%'};
    right: ${props => props.right ?? '24%'};
`
const Image= styled.div`
    width: 40px;
    height: 40px;
    background-image: url('https://image.freepik.com/free-photo/african-american-black-doctor-man-with-stethoscope-isolated-white-background_231208-2222.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0px -5px;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #00000014;

    &:hover{
        transition: all 0.5s ease;
        box-shadow: 0px 0px 20px #00000029;
    }
    &:active{
        box-shadow: 0px 0px 20px #00000014;
    }
`

export default Page
