import React, { useState } from 'react'
import './StreamsCustomCard.css'

const StreamsCustomCard = ({ live, button, viewstype, time }) => {

    // const RandomColor = (Math.random(2) * 12).toPrecision(2) * 10

    return (
        <div
            key={live.id}
            className='live-stream'
        >
            <img src={live.img} alt={live.ChannelName}

            />
            {button && <div className='live-button'>LIVE</div>}
            {viewstype && <div className='live-button'
                style={{ backgroundColor: "GrayText" }}
            >{time}</div>}
            <div className='live-stream-2'>

                <div className='views-count'>
                    {(Math.random() * 8).toFixed(2)}k {viewstype}
                </div>
                <img src={live.steamerImg} alt={live.ChannelName} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>{live.Game}</div>
                    <summery>{live.ChannelName}</summery>
                    <summery>TITLE{live.ChannelName} </summery>
                </div>
            </div>
            <div className='tags'>{live.tags.map((tag) => {
                return (
                    <div className='tags-list' key={tag}>{tag}</div>
                )
            })}</div>
        </div>
    )
}

export default StreamsCustomCard