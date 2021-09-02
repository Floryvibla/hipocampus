import React from 'react'

import Search from './Home/Search'
import User from './Home/User'
import {  Header } from './Home/Styles'

function Page() {
    return (
        <Header>
            <Search/>
            <User/>
        </Header>
    )
}

export default Page