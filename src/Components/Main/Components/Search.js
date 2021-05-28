import React, { useState, useEffect } from 'react'
import { useStateProviderValue } from '../../../StateProvider'
const Search = () => {

    const [{ u_token, search, query }, dispatch] = useStateProviderValue()
    useEffect(() => {
        search_fetch()
    }, [query])
    const search_fetch = () => {
        if (u_token) {
            fetch(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
                headers: {
                    'Authorization': 'Bearer ' + u_token
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.tracks) {
                        dispatch({
                            type: "SET_SEARCH",
                            search: data
                        })
                    }
                })
        }
    }
    const handlechange = (img, name, duration) => {
        const songobj = {
            img: img,
            title: name,
            duration: duration
        }
        dispatch({
            type:"SET_CURRENT_PLAYING",
            set_current_playing:songobj
        })
        console.log(songobj)
    }
    return (
        <div className="search">
            <div className="songs p-2" >

                {search ?
                    <div>
                        <h3>Songs</h3>
                        {search.tracks.items.map((item) => (
                            <div className="songs-render" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} >
                                <div className="song-item" style={{ display: "flex", padding: "10px", justifyContent: "space-between" }}
                                    onClick={() => handlechange(item.album.images[2], item.name, item.duration_ms)}
                                >
                                    <div style={{ display: "flex" }}>
                                        <img src={item.album.images[2].url} alt={item.name} />
                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            <span style={{ margin: "0 0 0 15px" }}>{item.name}</span>
                                            <span style={{ margin: "0 0 0 15px" }}>Sid Sri ram</span>
                                        </div>
                                    </div>
                                    <span className="">{((item.duration_ms / 60000).toFixed(2)).replace('.', ':')}</span>
                                </div>
                            </div>

                        ))} </div> : null}


            </div>

        </div>

    )
}
export default Search