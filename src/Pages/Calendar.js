import React from 'react'

import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import Calendar from '../Components/Calendar'

function Page() {
    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "">
                <Calendar />
            </Lesson>
        </>
    )
}

export default Page
