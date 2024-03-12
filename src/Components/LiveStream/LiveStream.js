import React, { useEffect, useState } from 'react'
import './LiveStream.css'
// import { Media, Player, controls } from 'react-media-player'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SecondColumn from './SecondColumn/SecondColumn';
import Categories from './Categories/Categories';
import LiveStreamCard from './LiveStreamCard';
import Live from '../../JSON/Live.json';
import { Backend } from '../../API/Backend';


const LiveStream = () => {
    const [isNext, setIsNext] = useState(0);
    const { Data } = Backend()
    const DATA = (Data ? (Data) : [] )


    return (
        <div className='Container'>
            <div className='livestream-container'>
                <IoIosArrowBack className='icon'
                    onClick={() => {
                        setIsNext(isNext + 100)
                        if (-isNext === 0) {
                            setIsNext(-(((DATA.LIVESTREAMS || [])).length - 1) * 100)
                        }
                    }}
                />
                <div className='live-scroll'>
                    {(DATA.LIVESTREAMS || []).map((live) =>
                        <div key={live.id}>
                            <div style={{ transform: `translateX(${isNext}%)`, transition: "all 600ms" }}>
                                <LiveStreamCard live={live} setIsNext={setIsNext} isNext={isNext} />
                            </div>
                        </div>
                    )}</div>
                <IoIosArrowForward className='icon' onClick={() => {
                    setIsNext(isNext - 100)
                    if (-isNext === ((DATA.LIVESTREAMS || []).length - 1) * 100) {
                        setIsNext(0)
                    }
                }} />
            </div >
            <SecondColumn Live={(DATA.LIVE || [])} Title={"we think you’ll like"} link={"Live Channels"} button={true}
                viewstype={"viewers"}
            />
            <Categories catogries={DATA || []} />
            <SecondColumn Live={(DATA.FEATURES || [])} Title={"Featured Clips We Think You'll Like"} viewstype={'views'}
                time={`1:${(Math.random(40)).toFixed(1) * 20}`} />

        </div>
    )
}

export default LiveStream

