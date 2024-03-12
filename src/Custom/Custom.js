import React from 'react'
import './Custom.css'

const Custom = ({channel}) => {
    return (
        <div key={channel.id} className='channel-list'>
            <img src={channel.img} alt={channel.ChannelName} />
            <div className='channel-list-inside'>
                <div>
                    <div>{channel.ChannelName}</div>
                    {channel.status === "Online" && <summery>{channel.Game}</summery>}
                </div>
                {channel.status === "Online" && <div className='channel-list-2'>
                    <div className='live-dot'></div>
                    <div style={{
                        margin: "auto 0 auto 0"
                    }}>{Math.round(Math.random(3) * 1000)}</div>
                </div>}
                {channel.status === "Offline" && <div style={{ fontWeight: "lighter" }}>Offline</div>}
            </div>
        </div>
    )
}

export default Custom