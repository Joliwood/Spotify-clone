
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "ff974dd48ead44a1868ad7e71c3ba575";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
} 

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// http://localhost:3000/#access_token=BQD4S_1Fecmmkhtbw0n8ww26HWmYQuRakoujGDkwM0j22-C6W3xNbivXiY-4Tbww108styxbV8pUsD5UgCWTWqYyU94kEij1pJ6rkEko_Kyi29bj7Jn3svio5EI-Do5AIdcj67U2Ey0g1sg0Eq_hOibLAdaDd0CGig&token_type=Bearer&expires_in=3600