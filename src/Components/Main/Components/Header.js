/* eslint-disable jsx-a11y/img-redundant-alt */
import { useStateProviderValue } from '../../../StateProvider'
const style = {
    width: "35px",
    height: "35px",
    borderRadius: "50px",
}
const Header = () => {
    const [{ user }, dispatch] = useStateProviderValue()
    return (
        <div className="d-flex justify-content-end " style={{ padding: "10px 25px 0 0" }}>
            <img style={style} src={user ? user.images[0].url : " https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg"} alt="photo" />
            <span className="d-flex justify-content-center align-item-center text-white" style={{ paddingLeft: "5px" }}>{user ? user.display_name : null}</span>
        </div>
    )
}
export default Header