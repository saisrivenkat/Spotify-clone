import React, { useEffect } from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RepeatIcon from '@material-ui/icons/Repeat';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { useStateProviderValue } from '../../StateProvider'
const Footer = () => {
    const [{ set_current_playing }, dispatch] = useStateProviderValue()
    const [playing, setplaying] = React.useState({})
    useEffect(() => {
        const obj = {
            img: set_current_playing.img,
            name: set_current_playing.title,
            duration: set_current_playing.duration
        }
        console.log(obj)
        setplaying(obj)
    }, [set_current_playing])
    return (
        <>
            {playing.img ?
                <div className="footer d-flex" style={{
                    position: "fixed", height: "85px", width: "100%", backgroundColor: "#1A1A1A", bottom: "0", dispaly: "flex", justifyContent: "space-between",
                    padding: "15px"
                }}>
                    <div className="left d-flex" >
                        <img src={playing.img.url} alt="img" />
                        <div className="d-flex flex-column m-2" style={{ color: "#B3B3B3" }}>
                            <span style={{ color: "white" }}>{playing.name}</span>
                            <span style={{ fontSize: "10px" }}>Ram Miriyala</span>
                        </div>
                        <div className="icons d-flex justify-content-center align-items-center m-2" style={{ color: "#b3b3b3" }}>
                            <FavoriteBorderIcon stylr={{ color: "#B3B3B3" }} />
                        </div>
                    </div>
                    <div className="center d-flex justify-content-center align-items-center flex-column pt-3" style={{ color: "#b3b3b3" }}>
                        <div className="icon-set d-flex ">
                            <ShuffleIcon className="m-2" />
                            <SkipPreviousIcon className="m-2" />
                            <i class="fas fa-play-circle fa-2x" style={{ color: 'white' }}></i>
                            <SkipNextIcon className="m-2" />
                            <RepeatIcon className="m-2" />
                        </div>
                        <div className="d-flex">
                            <span style={{ margin: "3px 5px 0 0" }}>0.0</span><hr style={{ color: "#b3b3b3", padding: "2px", width: "500px" }} /><span style={{ margin: "3px 0 0 5px" }}>{((playing.duration / 60000).toFixed(2)).replace('.', ':')}</span>
                        </div>
                    </div>
                    <div className="right d-flex " style={{ color: "#b3b3b3", alignItems: "center", marginRight: "40px" }}>
                        <div className="d-flex">
                            <VolumeDownIcon style={{ margin: "5px 0 " }} />
                            <hr style={{ padding: "2px", width: "50px" }} />
                        </div>

                    </div>
                </div>
                : <div className="footer d-flex" style={{
                    position: "fixed", height: "85px", width: "100%", backgroundColor: "#1A1A1A", bottom: "0", dispaly: "flex", justifyContent: "space-between",
                    padding: "15px"
                }}>
                    <div className="left d-flex" >
                        <img src="https://i.scdn.co/image/ab67616d000048512f3875547214915b3b53bff7" alt="img" />
                        <div className="d-flex flex-column m-2" style={{ color: "#B3B3B3" }}>
                            <span style={{ color: "white" }}>Select Song </span>
                            <span style={{ fontSize: "10px" }}>Ram Miriyala</span>
                        </div>
                        <div className="icons d-flex justify-content-center align-items-center m-2" style={{ color: "#b3b3b3" }}>
                            <FavoriteBorderIcon stylr={{ color: "#B3B3B3" }} />
                        </div>
                    </div>
                    <div className="center d-flex justify-content-center align-items-center flex-column pt-3" style={{ color: "#b3b3b3" }}>
                        <div className="icon-set d-flex ">
                            <ShuffleIcon className="m-2" />
                            <SkipPreviousIcon className="m-2" />
                            <i class="fas fa-play-circle fa-2x" style={{ color: 'white' }}></i>
                            <SkipNextIcon className="m-2" />
                            <RepeatIcon className="m-2" />
                        </div>
                        <div className="d-flex">
                            <span style={{ margin: "3px 5px 0 0" }}>0.0</span><hr style={{ color: "#b3b3b3", padding: "2px", width: "500px" }} /><span style={{ margin: "3px 0 0 5px" }}>0.0</span>
                        </div>
                    </div>
                    <div className="right d-flex " style={{ color: "#b3b3b3", alignItems: "center", marginRight: "40px" }}>
                        <div className="d-flex">
                            <VolumeDownIcon style={{ margin: "5px 0 " }} />
                            <hr style={{ padding: "2px", width: "50px" }} />
                        </div>

                    </div>
                </div>}
        </>
    )
}
export default Footer