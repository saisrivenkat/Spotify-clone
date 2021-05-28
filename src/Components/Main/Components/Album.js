import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Table from './album components/SongsTable'
import { useStateProviderValue } from '../../../StateProvider'

const Album = () => {
    const [{ playlist, play_list_id, u_token }, dispatch] = useStateProviderValue()
    React.useEffect(() => {
        fetch_playlist()
    }, [play_list_id])
    const fetch_playlist = () => {
        if (play_list_id && u_token) {
            console.log(play_list_id)
            console.log(play_list_id)
            fetch(`https://api.spotify.com/v1/playlists/${play_list_id}`, {
                headers: {
                    'Authorization': 'Bearer ' + u_token
                },
            })
                .then(res => res.json())
                .then(data => (
                    dispatch({
                        type: "PLAYLIST",
                        playlist: data
                    })
                )
                )
                .catch(err => console.log(err))
        }
    }
    const handlechange = (img, name, duration) => {
        const obj = {
            img: img,
            title: name,
            duration: duration
        }
        dispatch({
            type: "SET_CURRENT_PLAYING",
            set_current_playing: obj
        })
    }
    return (
        <div>
            {playlist ?
                <div>
                    <div className="header-part d-flex">

                        <div className="img">
                            <img src={playlist.images[0].url} alt="song" width="300" height="300" />
                        </div>
                        <div className="playlist_content d-flex flex-column  justify-content-end" style={{ paddingLeft: "30px" }}>
                            <span><strong>Playlist</strong></span>
                            <h1 className="" style={{ fontWeight: "bolder", fontSize: "50px" }}>{playlist.name}</h1>
                            <p>{playlist.description}</p>
                            <p><strong>Spotify</strong>:-128000Likes .{playlist.tracks.items.length}Songs,5hr35min</p>
                        </div>
                    </div>
                    <div className="songs-table text-white" style={{ marginRight: "50px" }}>
                        <table className="table text-white table-borderless table-row" >
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" style={{ width: "150px" }}>TITLE</th>
                                    <th scope="col">ALBUM</th>
                                    <th scope="col">DURATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playlist ? playlist.tracks.items.map((item, index) => (
                                    <tr>
                                        <th scope="row" onClick={() => handlechange(item.track.album.images[2], item.track.name, item.track.duration_ms)}>
                                            <div className="num">
                                                {index + 1}
                                            </div>
                                            <div className="symbol">
                                                <PlayArrowIcon style={{ color: "white" }} />
                                            </div>
                                        </th>
                                        <td className="" style={{ width: "150px" }}>
                                            <div className="d-flex " onClick={() => handlechange(item.track.album.images[2], item.track.name, item.track.duration_ms)} >
                                                <div className="" style={{ margin: "0 25px 0 0" }}>
                                                    <img src={item.track.album.images[2].url} className="" alt="song" width="40" height="40" />
                                                </div>

                                                <span style={{
                                                    overflow: "hidden", whiteSpace: "nowrap",
                                                    textOverflow: "ellipsis"
                                                }}>{item.track.name}</span>

                                            </div>
                                        </td>
                                        <td>{item.track.album.name}</td>
                                        <td>{((item.track.duration_ms / 60000).toFixed(2)).replace('.', ':')}</td>
                                    </tr>
                                )) : null}

                            </tbody>
                        </table>
                    </div>
                </div>


                : null}


        </div>
    )
}
export default Album