import React, { useState, useEffect } from 'react'

function Tracks() {
    const [tracks, settracks] = useState(null)

    useEffect(() => {
        fetch("http://localhost:8080/tracks")
            .then(response => response.json())
            .then(json => settracks(json));
    }, [])
    return (
        //tracks === null ? "chargement..." : console.log(tracks.data[0].cover),
        <div className="container">
            {tracks === null ? "chargement..." :
                tracks.data.map(track => <div className="track">
                    <div className="title">{track.name}</div>
                    {<div className="Cover"><img alt="cover" src={track.cover}></img></div>}
                    <figure><figcaption className="sizesong">{track.tracknames}</figcaption>
                        <audio
                            controls
                            src={track.mp3}>
                        </audio>
                    </figure>
                </div>
                )}
        </div>
    )
}

export default Tracks
