import Spotify from "../components/Spotify";

const SaveToSpotify = {
    savePlaylistName(name, trackURI) {
        if (!name || !trackURI) {
        return;
        }
        let accessToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${accessToken}` }
        let userID = '';
        return fetch('https://api.spotify.com/v1/me', {headers: header}).then(res => res.json()).then(jsonResponse => {
        userID = jsonResponse.id;
        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({name: name})
        }).then(res => res.json()).then(jsonResponse => {
            const playlistID = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`, {
            headers: header,
            method: 'POST',
            body: JSON.stringify({uris: trackURI})
            })
        })
        })
    }
}

export default SaveToSpotify;