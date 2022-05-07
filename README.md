# Soju for Spotify 🎶

Soju lets you explore music from Spotify on any device easily. Fetch a track's album, compare playlists, and sample different songs quickly and easily.

[![Visit Soju site](https://img.shields.io/badge/%20Soju%20for%20Spotify-▸-df0e14?style=for-the-badge&logoColor=white&logoWidth=25)](https://playsoju.netlify.app) [![Matrix Room: Support & Questions](https://img.shields.io/badge/Support%20&%20Questions-▸-0dbd8b?style=for-the-badge&logo=matrix&logoColor=white&logoWidth=25)](https://matrix.to/#/#coffeebank:matrix.org)

[<img src="/public/media/preview.png" width="75%" />](#instances)

## How to Use

<div id="instances"></div>

**Simply visit any Soju website and enter a Spotify link.**

Some Soju sites may be ratelimited. If the main website isn't working, try another instance below:

|Site|Official|
|:---|:---|
|<https://playsoju.netlify.app>|✅|

<br />

### Advanced

To get a direct link, you can also add the url to a `?s=` query parameter like so:

```
https://soju.▉▉▉▉▉.▉▉/?s=SPOTIFYLINKHERE
```

Here's a list of query parameters. Many of these can be strung together using `?s=str&sm=str&method=str`.

|Query|Type|Description|
|:---|:---|:---|
|?s=|str|Jump straight to processing a Spotify url|
|?sa=|bool|Run all processing methods for an `?s=` url<br>*see `?method=` for more info*|
|?sm=|str|Processing method for an `?s=` url<br>*see `?method=` for more info*|
|?method=|str|Set default processing method for the browsing session<br><ul><li>**api** *(default)*: Uses Spotify Web API to fetch data</li><li>**embed**: Loads a Spotify webpage directly (fallback)</li></ul>|

<br />

## Notices

Soju lets you explore music from Spotify on any device, fetch a Spotify track's album, compare Spotify playlists, and sample different songs on Spotify quickly and easily.
- Soju is NOT a replacement for Spotify Web Player, Soju is a companion service that lets you preview Spotify music for adding into Spotify
- Soju is NOT designed to pull music from other sources, all music samples are from Spotify only
- Soju is NOT designed to stream/download full music tracks

Soju is a static site with no server backend. To provide a secure connection to the Spotify API, Soju fetches and delivers all Spotify data from the API through Netlify Functions and Netlify CDN.

Spotify License Limitations:
- Soju will only use "Audio Preview Clips", which are 30 second preview clips for public use. For the purposes of Spotify's licenses, Soju does not and will not do "Streaming", which is defined as streaming/making available the full song.
- Soju fetches the most up-to-date content from Spotify to display at the time of request by a user. No data is collected or stored after the user closes the tab. Soju cannot access any data Spotify removes from its API.
- Soju does not and will not bypass geo-restrictions. Songs that are geo-blocked or otherwise restricted by the API will not play and show a crossed-out music note icon.
- Soju provides a link back to all content fetched from Spotify.
- Soju may display an unmodified Spotify webpage in its original form (outside of the control of Soju) when the API fails. This webpage is maintained by Spotify, who may place cookies, use tracking technologies, and restrict access to Spotify content within that webpage.

On page load, a Spotify access token is retrieved using the website host's Spotify API Key via Netlify Functions and cached in the site visitor's Vuex store for use during the session. The Spotify access token expires after an hour, and Spotify ratelimits users using this access token. All data from the session, including the access token, is cleared when the user closes the tab.

<br />

### Self-Host

Soju is free, open source, and self-hostable. However, this comes with some big caveats:

- Soju was designed for Netlify, which effectively restricts you to only hosting on Netlify at the moment.
- Soju uses copyrighted content from Spotify, which means you must obtain a Spotify API key to use the data. Soju will not parse and does not endorse parsing any public Spotify webpages for any licensed Spotify content.

Prerequisites:

- Netlify account (free)
- Spotify account + API key
- A public electronic mail inbox or webpage with contact info, for DMCA and contact

Steps:

1. Click "Fork" on the top right corner
1. Add your info under `instanceInfo` in `src/main.js`
1. Go to Netlify (create an account if you haven't) and deploy the site
1. Under Build settings > Environment variables, add the variables listed in `.env.example` (your Spotify API keys go here)
1. Under Top Bar > Deploys > Trigger deploy > click "Clear cache and deploy site" to re-deploy the site

<br />

### Development

Fork the project, then install all dependencies using `npm install`.

Copy the `.env.example` file to `.env` and fill in the values.

Run the development server using `netlify dev`. Due to a bug, this currently requires Node 14-16 (not 17) for the server to run properly.

<br />

## License

Soju is licensed under the GPLv3 License, which allows changes as long as your code remains open-source.

Soju is not endorsed by Spotify. Soju uses copyrighted content from the Spotify Web API under license.

Feel free to modify Soju for white-label purposes, but please keep all credits per `LICENSE`.

This was an educational project exploring Vue/Vite, Nodejs, and the Spotify Web API. All code has been open-sourced in the hopes that this software can be useful to someone. If there are any legal questions (DMCA, license, white-label, etc.) please send them to **sojumail [@] catdev.anonaddy.com**.

© 2021–Present, by coffeebank.
