import styled from 'styled-components'

export const Area= styled.div`
    /* width: 100vw; */
    height: 100vh;
    display: flex;
    background-color: #dedede;
`
export const Menu= styled.div`
    width: 6%;
    height: 100%;
    background-color: #fefefe;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 1;
`
export const Logo= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`
export const Image= styled.div`
    width: 50px;
    height: 50px;
    background-image: url('https://hipocampus.com.br/wp-content/uploads/2021/05/cropped-Logo-300px.png');
    background-size: cover;
    filter: drop-shadow(5px 5px 5px #00000019);
    cursor: pointer;
    transition: filter 0.4s ease;

    &:hover{
        filter: drop-shadow(5px 5px 5px #00000039);
    }
    &:active{
        filter: drop-shadow(5px 5px 5px #00000019);
    }
` 
export const Content= styled.div`
    flex: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative
`
export const Item= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background-color: ${props => props.active ? '#fefefe5a' : '#03A9F4'};
    border-radius: 10px;
    box-shadow: 0 0 20px #0e0e0e13;
    margin-bottom: 20px;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: ${props => props.active ? '#fefefe5a' : '#03A9F4'};
        transition: all 0.5s ease;
        width: 430px;
        box-shadow: 0 0 5px #0e0e0e43;
    }
    &:active{
        background-color: #03A9F469;
        box-shadow: 0 0 20px #0e0e0e13;
    }
`
export const Text= styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    color: #fefefe;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    left: -5%;
    animation: run ease 0.6s;

    @keyframes run {
        0% { margin-left: -98%; opacity: 0}
        100%{ margin-left: 0%; opacity: 1}
    }
`

export const Logout= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ItemLogout= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background-color: #fefefe5a;
    border-radius: 50px;
    box-shadow: 0 0 20px #0e0e0e13;
    cursor: pointer;

    &:hover{
        background-color: #03A9F416;
        transition: all 0.5s ease;
        box-shadow: 0 0 5px #0e0e0e43;
    }
    &:active{
        background-color: #03A9F469;
        box-shadow: 0 0 20px #0e0e0e13;
    }
`

export const Container= styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Header= styled.header`
    display: flex;
    width: 98%;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    /* margin:10px 20% 10px 0%; */
`
export const Cours= styled.section`
    display: flex;
    flex-direction: column;
    width: 80%;
    flex-wrap: wrap;
    margin: 10px 0% 10% 0%;
`
export const Modal= styled.div`
    width: 300px;
    height: 350px;
    background-color: white;
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: ${({noActive}) => noActive ? 'none' : 'block'}
`