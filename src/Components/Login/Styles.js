import styled from 'styled-components'

export const Area= styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('https://www.remktus.com.br/dbfimo/imagens/fundo_login_imo2.png');
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const GlassBack= styled.div`
    width: 25%;
    height: 65%;
    backdrop-filter: blur(5px);
    background-color: #03A9F411;
    border-radius: 20px;
    box-shadow: 0 0 50px 2px #00000019;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    @media(max-width: 800px){
        width: 70%;
    }
`
export const TextView= styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 24px;
    color: #E0E0E0;
    text-shadow: 0 0 4px #00000039;
`
export const Form= styled.form`
    display: flex;
    flex: 2;
    width: 70%;
    flex-direction: column;
`
export const Input= styled.input`
    width: 100%;
    height: 15%;
    background-color: #03A9F411;
    padding-left: 10px;
    font-size: 18px;
    color: #eee;
    border: none;
    border-bottom: 1px solid #ffffff79;

    &:focus{
        outline: none;
        border-bottom: 1px solid #fff;
    }
    &:focus::placeholder{
        color: #ffffff69;
    }
    &::placeholder{
        color: #00000059;
        font-size: 16px;
    }
`
export const Button= styled.input`
    backdrop-filter: blur(5px);
    width: 100%;
    height: 15%;
    border-radius: 20px;
    box-shadow: 0 0 0px 2px #ffffff79;
    background-color: #03A9F411;
    font-size: 18px;
    color: #eee;
    border: none;
    margin-top: 20%;

    &:hover{
        outline: none;
        box-shadow: 0 0 5px 2px #ffffff79;
    }
    &:active{
        box-shadow: 0 0 1px 2px #ffffff59;
    }
`