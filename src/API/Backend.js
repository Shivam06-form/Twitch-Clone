import React, { useEffect, useRef, useState } from 'react'

export const Backend = () => {

    const [DATA, setDATA] = useState(null);
    useEffect(() => {
        fetch(`https://twitch-beckend.onrender.com/api/Twitch`).then(async (res) => {
            const response = await (res.json())
            setDATA(response)
        })
    }, []);
    return { Data: DATA }

}

