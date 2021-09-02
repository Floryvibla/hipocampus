import React from 'react'
import styled from 'styled-components'
import {GoSearch} from 'react-icons/go'

function Page() {
    return (
        <Search>
            <Input
                type= 'text'
                placeholder='Procurar...'
            />
            <Bar>
                <GoSearch color='#fefefe' size={20} />
            </Bar>
        </Search>
    )
}

const Search= styled.div`
    flex: 1;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-left: 8%;
    position: relative;
`
const Input= styled.input`
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 14px;
    }
`
const Bar= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 41px;
    border-radius: 10px;
    background-color: #03A9F4;
    position: absolute;
    left: 32%;
    cursor: pointer;

    &:hover{
        transition: all 0.5s ease;
        /* box-shadow: 0 0 5px #0e0e0e43; */
        background-color: #03A9e2;
    }
    &:active{
        background-color: #03A9F4;
        box-shadow: 0 0 20px #0e0e0e13;
    }
`

export default Page
