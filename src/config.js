export const CLIENT_ID = "a8f0bd6bcf8b44fa9736810f3b9020f2";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const REDIRECT_URI = "http://localhost:3000/";

export const SCOPE = [
    "user-read-currently-playing",
    "user-read-playback-state",
    "playlist-modify-public",
    "playlist-modify-private",
    "user-top-read"
];
export const SCOPES_URL_PARAM = SCOPE.join("%20");
export const RESPONSE_TYPE = "token";
