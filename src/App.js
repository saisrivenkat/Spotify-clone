import React from 'react';
import Login from './Components/Login/Login'
import { token } from './Components/Login/LoginEndPoint'
import SpotifyWebApi from 'spotify-web-api-js'
import Main from './Components/Main'
import { useStateProviderValue } from './StateProvider'

const spotifyApi = new SpotifyWebApi();

function App() {
  const [access_token, settoken] = React.useState(null)

  const [{ user, u_token }, dispatch] = useStateProviderValue();

  React.useEffect(() => {
    const access_tokens = token()
    window.location.hash = "";
    let tokens = access_tokens.access_token
    if (tokens) {
      dispatch({
        type: "SET_TOKEN",
        token: tokens
      })
      settoken(tokens)
      spotifyApi.setAccessToken(tokens);
      spotifyApi.getMe()
        .then(user => {
          dispatch(
            {
              type: "SET_USER",
              user: user
            }
          )
        })
      spotifyApi.getUserPlaylists()
        .then((playlist) => {
          dispatch({
            type: "PLAYLIST",
            playlists: playlist,
          });
        })
      fetch('https://api.spotify.com/v1/me/player/recently-played', {
        headers: {
          'Authorization': 'Bearer ' + tokens
        },
      }).then(res => res.json())
        .then(data => {
          dispatch({
            type: "RECENTLY_PLAYES",
            Recently_played: data.items
          })
        })

    }
  }, [])
  return (
    <div className="App">
      {u_token ?
        <Main spotifyApi={spotifyApi} /> :
        <Login />
      }
    </div>
  );
}

export default App;
//37i9dQZF1DWWwrjLPC16W7 - latest telugu - https://i.scdn.co/image/ab67706f00000002c5d2a7cd4c655e688f14d367
//37i9dQZF1DX3VuB7FVwxmc - latest dance telugu - https://i.scdn.co/image/ab67706f00000002cae9a9fade826daa61fa1f26
//37i9dQZF1DX66Vbiw2928b - valentine telugu -https://i.scdn.co/image/ab67706f000000025a8143b7d63ee3ba6bca294a
//37i9dQZF1DX3K5QRDLwfhd - sankranthi celebrations -https://i.scdn.co/image/ab67706f000000025a9b07d5512c073f44a4a4db