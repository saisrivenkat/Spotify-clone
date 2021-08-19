/* eslint-disable jsx-a11y/img-redundant-alt */
import { useStateProviderValue } from '../../../StateProvider'
const style = {
    width: "35px",
    height: "35px",
    borderRadius: "50px",
}

const Header = () => {
    const [{ user, active }, dispatch] = useStateProviderValue()
    return (
        <>
            {
                active === "Search" ?
                    <div className="d-flex justify-content-between " style={{ padding: "15px 36px" }}>
                        <div className="search-bar" >
                            <input className="search" style={{ padding: "10px", borderRadius: "25px", outline: "none", width: "250px" }} placeholder="Artists,songs(or)prodcasts" onChange={(e) => dispatch({
                                type: "SET_QUERY",
                                query: e.target.value
                            })} />
                        </div>
                        <div className="d-flex">
                            <img style={style} src={user ? user.images[0].url : " https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="photo" />
                            <span className="d-flex justify-content-center align-item-center text-white" style={{ paddingLeft: "5px" }}>{user ? user.display_name : null}</span>
                        </div>
                    </div>
                    :
                    <div className="d-flex justify-content-end " style={{ padding: "10px 25px 0 0" }}>
                        <div className="d-flex justify-content-end">
                            <img style={style} src={user ? user.images[0].url : "https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="photo" />
                            <span className="d-flex justify-content-center align-item-center text-white" style={{ paddingLeft: "5px" }}>{user ? user.display_name : null}</span>
                        </div>
                    </div>
            }
        </>
    )
}
export default Header
