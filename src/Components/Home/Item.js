import React, {useState} from 'react'
import { GiVideoConference } from 'react-icons/gi'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFillCalendarFill } from 'react-icons/bs'
import { AiFillProfile } from 'react-icons/ai'
import { AiFillMedicineBox } from 'react-icons/ai'
import { IoMdSchool } from 'react-icons/io'
import { AiFillSave } from 'react-icons/ai'


import {Item, Text, Modal} from './Styles'


function Itens(props) {

    const [color, setColor] = useState('#03A9F4')
    const [active, setActive] = useState(false)
    

    const handleColor= (result)=> {
        setActive(result)
        if(!active){
            setColor('#fefefe')
            // props.modal(!active)
        } 
        if(active){
            setColor('#03A9F4')
            // props.modal(!active)
        } 
    }
    
    return (
        <Item 
            active={!active} 
            onMouseEnter={() => handleColor(true)} 
            onMouseLeave={() => handleColor(false)}
            onClick= {props.onClick}
        >
            {active &&
                <Text active={!active}>
                    {props.title}
                </Text>
            }
            {props.icon === 'AiOutlinePlus' &&
                <AiOutlinePlus color={color} size={20} />
            }
            {props.icon === 'GiVideoConference' &&
                <GiVideoConference color={color} size={20} />
            }
            {props.icon === 'BsFillCalendarFill' &&
                <BsFillCalendarFill color={color} size={20} />
            }
            {props.icon === 'AiFillProfile' &&
                <AiFillProfile color={color} size={20} />
            }
            {props.icon === 'IoMdSchool' &&
                <IoMdSchool color={color} size={20} />
            }
            {props.icon === 'AiFillMedicineBox' &&
                <AiFillMedicineBox color={color} size={20} />
            }
            {props.icon === 'AiFillSave' &&
                <AiFillSave color={color} size={20} />
            }
            {props.children}
        </Item>
    )
}

export default Itens
