import React from 'react'
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
    return (
        <div>
            <div className="header-part d-flex">
                <div className="img">
                    <img src="https://i.scdn.co/image/ab67706f000000025a9b07d5512c073f44a4a4db" alt="song" />
                </div>
                <div className="playlist_content d-flex flex-column  justify-content-end" style={{ paddingLeft: "30px" }}>
                    <span><strong>Playlist</strong></span>
                    <h1 className="" style={{ fontWeight: "bolder", fontSize: "50px" }}>Sankranthi Celebration</h1>
                    <p>Celebrate the festibal of love</p>
                    <p><strong>Spotify</strong>:-128000Likes . 80Songs,5hr35min</p>
                </div>
            </div>
            <div className="songs-table text-white">
                <table className="table text-white table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">TITLE</th>
                            <th scope="col">ALBUM</th>
                            <th scope="col">DATE ADDED</th>
                            <th scope="col">DURATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playlist ? playlist.tracks.items.map((item, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td className="">
                                    <div className="d-flex " >
                                        <div className="" style={{ margin: "0 25px 0 0" }}>
                                            <img src={item.track.album.images[2].url} className="" alt="song" width="40" height="40" />
                                        </div>

                                        <span>{item.track.album.name}</span>

                                    </div>
                                </td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        )) : null}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Album