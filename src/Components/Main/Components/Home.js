import { useStateProviderValue } from '../../../StateProvider'
const playlists = [
    {
        id: "37i9dQZF1DWWwrjLPC16W7",
        name: "Latest Telugu",
        img: "https://i.scdn.co/image/ab67706f00000002c5d2a7cd4c655e688f14d367"
    },
    {
        id: "37i9dQZF1DX3VuB7FVwxmc",
        name: "Latest Dance",
        img: "https://i.scdn.co/image/ab67706f00000002cae9a9fade826daa61fa1f26"
    },
    {
        id: "37i9dQZF1DX66Vbiw2928b",
        name: "Valentine's songs ",
        img: "https://i.scdn.co/image/ab67706f000000025a8143b7d63ee3ba6bca294a"
    },
    {
        id: "37i9dQZF1DX3K5QRDLwfhd",
        name: "Sankranthi celebration",
        img: "https://i.scdn.co/image/ab67706f000000025a9b07d5512c073f44a4a4db"
    }
]
const Home = () => {
    const [{ Recently_played, user, active }, dispatch] = useStateProviderValue()
    return (
        <div className="recently_played">
            <div className="recently_played_items">
                <h3 className="text-white">Recently Played</h3>
                <div className="Recently_played d-flex  mt-4">
                    {Recently_played ?
                        Recently_played.map((item) => (
                            <div className="card  " style={{ width: "13rem", backgroundColor: "#181818", marginLeft: "15px" }}>
                                <img className="p-3" src={item.track.album.images[1].url} alt="" />
                                <div class="card-body">
                                    <h5 class="card-title text-white">{item.track.name}</h5>
                                </div>
                            </div>
                        ))
                        : <h1 className="text-white">no data</h1>}
                </div>
            </div>
            <div className="playlists">
                <h2 className="mb-3 mt-3">Playlist</h2>
                <div className="playlist d-flex">

                    {playlists.map((item) => (
                        <div className="card  " style={{ width: "13rem", backgroundColor: "#181818", marginLeft: "15px" }} onClick={() => {
                            dispatch({
                                type: "SET_PLAYLIST_ID",
                                play_list_id: item.id
                            });
                            dispatch({
                                type: "SET_ACTIVE",
                                active: "album"
                            })
                        }}>
                            <img className="p-3" src={item.img} alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-white">{item.name}</h5>
                            </div>
                        </div>
                    ))}
                </div>


            </div>

        </div>
    )
}
export default Home