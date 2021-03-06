export const intialState = {
    user: null,
    u_token: null,
    user_playlists: [],
    playing: false,
    item: null,
    Recently_played: [],
    active: "Home",
    serach: [],
    play_list_id: '',
    playlist: null,
    user_playlist_id: '',
    query:'',
    set_current_playing:{}
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
        case "SET_CURRENT_PLAYING":
            return{
                ...state,
                set_current_playing:action.set_current_playing
            }
        case "SET_QUERY":
            return{
                ...state,
                query:action.query
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
        case "USER_PLAYLIST":
            return {
                ...state,
                user_playlists: action.user_playlists
            }
        case "PLAYLIST":
            return {
                ...state, playlist: action.playlist
            }
        case "RECENTLY_PLAYES":
            return {
                ...state, Recently_played: action.Recently_played
            }
        case "USER_PLAYLIST_ID":
            return {
                ...state, user_playlist_id: action.user_playlist_id
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