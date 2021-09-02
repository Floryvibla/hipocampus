import React, { useState, useEffect } from 'react'

function Component(props) {

    const [mark, setMark] = useState("")
    const [time, setTime] = useState(0)
    

    useEffect(() => {

        let interval = setInterval(() => {
            setTime(prevTime => prevTime + 10)
            props.marcado(time)
        }, 10);


        return () => clearInterval(interval)
    })

    

    return (
        <div>
            <span>{("0" + Math.floor((time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 600) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 60)).slice(-2)}</span>
        </div>
    )
}

export default Component
