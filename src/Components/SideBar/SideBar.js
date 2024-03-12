import React, { Fragment, useState } from 'react'
import './SideBar.css'
import { LuArrowLeftFromLine, LuArrowDownUp } from "react-icons/lu";
import Custom from '../../Custom/Custom';
import { CiHeart } from "react-icons/ci";
import CHANNEL_ARRAYS from '../../JSON/Live.json'

//Render Channels List

const FollowChannels = CHANNEL_ARRAYS.FOLLOW_CHANNELS.map((channel) => {
    return (
        <Custom channel={channel} />
    )
})
const RECOMMENDEDCHANNELS = CHANNEL_ARRAYS.RECOMMENDEDCHANNELS.map((channel) => {
    return (
        <Custom channel={channel} />
    )
})

const SideBarContent = CHANNEL_ARRAYS.LIVE.map((channel) => {
    return (
        <img key={channel.id} src={channel.img} alt={channel.ChannelName}
            style={{ width: "30px", height: "30px", borderRadius: "100%" }}
        />
    )
})


const SideBar = () => {
    const [OpenDrawer, setOpenDrawer] = useState(true);
    return (
        <Fragment>
            <div className='hidden small-sidedrawer'
                onClick={() => {
                    setOpenDrawer(true);
                }}
            > <CiHeart className='icon' />
                {SideBarContent}
            </div>
            {!OpenDrawer && <div
                className='small-sidedrawer'
                onClick={() => {
                    setOpenDrawer(true);
                }}

            >
                <CiHeart className='icon' />
                <LuArrowLeftFromLine />

                {SideBarContent}
            </div>}
            <div className={` ${OpenDrawer ? "sidebar" : "animated-sidedrawer"}`}>
                <div className='side-first'>
                    <div style={{
                        fontWeight: "bold", fontSize: "18px",

                    }}> For You  </div><LuArrowLeftFromLine
                        onClick={() => {
                            setOpenDrawer(false)
                        }}
                    />
                </div>
                <div className='side-first'>
                    <div >FOLLOWED CHANNEL  </div><LuArrowDownUp />
                </div>

                {/* FOLLOWED CHANNELS */}
                {FollowChannels}

                <small>show more</small>
                {/* RECOMMENDED CHANNELS */}
                <div className='side-first'>
                    <div >RECOMMENDED CHANNELS </div>
                </div>{RECOMMENDEDCHANNELS}
                <small>show more</small>
            </div>
        </Fragment>
    )
}

export default SideBar