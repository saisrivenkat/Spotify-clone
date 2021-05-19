import { useStateProviderValue } from '../../../StateProvider'
const Album = () => {
    const [{ play_list_id }, dispatch] = useStateProviderValue()
    return (
        <div>
            {play_list_id}
        </div>
    )
}
export default Album