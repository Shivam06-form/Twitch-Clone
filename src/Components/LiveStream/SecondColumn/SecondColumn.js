//Custom Component

import React, { useState } from 'react'
import './SecondColumn.css'
import StreamsCustomCard from '../../../Custom/StreamsCustomCard/StreamsCustomCard'

const SecondColumn = ({ Live, Title, link, button, viewstype, time }) => {

    const [show, setShow] = useState(3);


    let ListOfObjects = Live.slice(0, show)


    // window.addEventListener("resize", () => {

    // if (window.innerWidth > 1200) {
    //     ListOfObjects = Live.slice(0, show - 1)
    // }

    if (window.innerWidth > 1600) {
        ListOfObjects = Live.slice(0, show + 1)
    }

    // })

    const renderLiveStreams = ListOfObjects.map((live) => {
        return (
            <StreamsCustomCard live={live} button={button} views viewstype={viewstype} time={time} />
        )

    })




    return (
        <div className='second'>
            <div className='title'><a href='*'>{link}</a> {Title}</div>
            <div className='live-stream-container'>
                {renderLiveStreams}
            </div>
            <small
                onClick={() => {
                    setShow(show + 3)
                }}
            >show more</small>
        </div>
    )
}

export default SecondColumn