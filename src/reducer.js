export const intialState = {
    user: null,
    u_token: null,
    playlists: [],
    playing: false,
    item: null,
    Recently_played: [],
    active: "Home",
    serach: [],
    play_list_id: ''
}
//BQChnWmJhXIWTVL6ieBQCXWlO7Sj6bF60sY67Y05QFph5U4Qx5cugW014NUgcPNoOv93tMhCAEU7Wjc6PNjgK2UT37V9tjgqs5iy_CJsto2_2w69zueOYLt1CHMbUV-Dha5i0uzMfWk2HJTw43yxvftqcGk1Pzw
const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_TOKEN":
            return {
                ...state,
                u_token: action.token
            }
        case "SET_SEARCH":
            return {
                ...state, search: action.search
            }
        case "SET_ACTIVE":
            return {
                ...state, active: action.active
            }
        case "SET_USER":
            return {
                ...state, user: action.user
            }
        case "PLAYLIST":
            return {
                ...state,
                playlists: action.playlists
            }
        case "RECENTLY_PLAYES":
            return {
                ...state, Recently_played: action.Recently_played
            }
        case "SET_PLAYLIST_ID":
            return {
                ...state, play_list_id: action.play_list_id
            }
        default:
            return state;
    }

}
export default reducer