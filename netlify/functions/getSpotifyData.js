const fetch = require("node-fetch");
global.Buffer = global.Buffer || require('buffer').Buffer;

const API_ENDPOINT = 'https://api.spotify.com/v1/';

async function getData(itemFormat, itemId, itemToken) {
  let data;
  // Fetch data
  if (itemFormat == 'track') {
    try {
      let track = await getJson(itemFormat, itemId, itemToken);
      let album = await getAlbumForTrack(track, itemToken);
      data = album;
    } catch {
      return false;
    }
  } else if (itemFormat == 'album' || itemFormat == 'playlist') {
    try {
      data = await getJson(itemFormat, itemId, itemToken);
    } catch {
      return false;
    }
  }
  // Wrap all urls
  uw = urlWrapper(data);
  return uw;
}

async function getJson(itemFormat, itemId, itemToken) {
  let reqGET = {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + itemToken,
      'Content-Type': 'application/json'
    },
  };
  try {
    const rawhtml = await fetch(API_ENDPOINT+itemFormat+'s/'+itemId, reqGET);
    const data = await rawhtml.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getAlbumForTrack(getJsonResp, itemToken) {
  try {
    return await getJson('album',getJsonResp["album"]["id"],itemToken);
  } catch {
    return false;
  }
}

function urlWrapper(json) {
  let jsonStr = JSON.stringify(json);
  jsonStr = jsonStr.replace(/https:\/\/i\.scdn\.co\//g, '/i-scdn-co/');
  jsonStr = jsonStr.replace(/https:\/\/\mosaic\.scdn\.co\//g, '/mosaic-scdn-co/');
  jsonStr = jsonStr.replace(/https:\/\/p\.scdn\.co\//g, '/p-scdn-co/');
  return JSON.parse(jsonStr);
}

exports.handler = async (event, context) => {
  try {
    headers = await event.headers;
    data = await getData(headers.itemformat, headers.itemid, headers.itemtoken);
    if (data == false) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Data is invalid' }),
      };
    }
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
