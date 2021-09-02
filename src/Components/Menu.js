import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import {IoLogOut} from 'react-icons/io5'

import { 
    Menu, 
    Logo, 
    Content, 
    Logout, 
    Image, 
    ItemLogout,
    Modal
} from './Home/Styles'
import Item from './Home/Item'

function Page() {

    const [modal, setModal] = useState(true)
    const [user, setUser]= useState(2)

    const history= useHistory()



    return (
        <Menu>
            <Logo>
                <Image onClick={() => history.push('/home')}/>
            </Logo>

            <Content>
                <Item 
                    icon= 'AiOutlinePlus' 
                    title= 'Nova Video chamada' 
                    onClick= {() => history.push('/call')}
                />
                {user === 2 &&
                    <Item 
                        icon='GiVideoConference' 
                        title= 'Nova Simulações' 
                        onClick= {() => history.push('/nova')} 
                    />
                }

                <Item 
                    icon= 'BsFillCalendarFill' 
                    title= 'Calendário' 
                    onClick= {() => history.push('/calendar')} 
                />

                {user === 1 &&
                    <Item 
                        icon= 'AiFillProfile' 
                        title= 'Minhas simulações' 
                        onClick= {() => history.push('/home')}
                    />
                }
                {user === 2 &&
                    <Item 
                        icon= 'AiFillProfile' 
                        title= 'Simulações realizadas' 
                        onClick= {() => history.push('/home')}
                    />
                }

                {user === 1 &&
                    <Item 
                        icon= 'AiFillMedicineBox' 
                        title= 'Sou avaliador' 
                        onClick= {() => history.push('/avaliador')} 
                    />
                }
                {user === 2 &&
                    <Item 
                        icon= 'AiFillSave' 
                        title= 'Entregues' 
                        onClick= {() => history.push('/avaliador')} 
                    />
                }

                <Item 
                    icon= 'IoMdSchool' 
                    title= 'Ferramentos de estudos' 
                    onClick= {() => history.push('/calendar')}
                    // modal= {(e) => setModal(e)}
                >
                    {/* <Modal noActive={!modal}/> */}
                </Item>
                

            </Content>
            <Logout>
                <ItemLogout onClick= {() => history.push('/')}>
                    <IoLogOut color='#000' size={40} />
                </ItemLogout>
            </Logout>
        </Menu>
    )
}

export default Page