const url = "https://accounts.spotify.com/authorize"
const redirection = 'http://localhost:3000/'
const client_id = '4ea348ebe4a440739184a892353c2153'
const scopes = [
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
export const token = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((intial, item) => {
            let parts = item.split('=');
            intial[parts[0]] = decodeURIComponent(parts[1]);
            return intial
        }, {})
    // var token = new URL(window.location).hash.split('&').filter(function (el) { if (el.match('access_token') !== null) return true; })[0].split('=')[1];
    // return token
}
//`${url}?client_id=${clientId}&redirect_uri=${redirection}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
export const login = `${url}?client_id=${client_id}&redirect_uri=${redirection}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;