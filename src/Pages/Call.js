import React from 'react'
import Webcam from 'react-webcam'

import Lesson from '../Components/Lesson/'
import Header from '../Components/Header'
import Menu from '../Components/Menu'

function Page() {
    return (
        <>
            <Menu/>
            <Header/>
            <Lesson title= "Video Chamada ">
                <Webcam/>
            </Lesson>
        </>
    )
}

export default Page
