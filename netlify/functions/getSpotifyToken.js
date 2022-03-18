const fetch = require("node-fetch");
global.Buffer = global.Buffer || require('buffer').Buffer;

const API_ENDPOINT = 'https://accounts.spotify.com/api/token';

// Spotify API
// POST to get auth token
// https://stackoverflow.com/questions/23097928/node-js-throws-btoa-is-not-defined-error
const clientId = process.env.VUE_APP_spotifyClientId;
const clientSecret = process.env.VUE_APP_spotifyClientSecret;
const requestOptionsPost = {
  method: "POST",
  headers: { "Content-Type": "application/x-www-form-urlencoded", "Authorization": 'Basic ' + Buffer.from(clientId + ':' + clientSecret, 'binary').toString('base64') },
  body: "grant_type=client_credentials"
};

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT, requestOptionsPost);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
