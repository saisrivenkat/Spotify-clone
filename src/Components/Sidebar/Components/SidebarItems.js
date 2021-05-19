import '../sidebar.css'
import { useStateProviderValue } from '../../../StateProvider'
const Items = ({ id, name, icon }) => {
    const [{active}, dispatch ] = useStateProviderValue();
    return (
        <div
         className={"item mb-1" + (name === active ? " active" : null)} key={id}
         onClick={() => dispatch({
            type:"SET_ACTIVE",
            active:name
        }
        )}>
            {icon} <span className="text">{name}</span>
        </div>
    );
}
export default Items