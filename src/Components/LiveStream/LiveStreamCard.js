import React from 'react'

const LiveStreamCard = ({ live, isNext }) => {

    return (<div className='media' >
        <div className='player'>
            <iframe style={{ width: "100%", height: "100%" }} src={live.link} title={live.Channel_Name} allowfullscreen></iframe>                    </div>
        <div>
            <div className='player-info'>
                <img
                    src={live.steamImg}
                    alt='Wolf Alpha'
                />
                <div className='player-info-inside'>
                    <div style={{ color: "purple" }}> {live.Channel_Name}</div>
                    <div style={{ color: "purple" }}>{live.Title}</div>
                    <div>2.5k views</div>
                </div>
            </div>
            <div style={{ fontSize: "small", fontWeight: "lighter", marginTop: "8%" }}>{`${`Check out this stream from ${live.Channel_Name}!`}`}</div>
        </div>
    </div>
    )
}

export default LiveStreamCard



