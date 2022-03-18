# Soju for Spotify 🎶

Soju lets you explore music from Spotify on any device easily. Fetch a track's album, compare playlists, and sample different songs quickly and easily.

[![Visit Soju site](https://img.shields.io/badge/%20Soju%20for%20Spotify-▸-df0e14?style=for-the-badge&logoColor=white&logoWidth=25)](https://playsoju.netlify.app) [![Matrix Room: Support & Questions](https://img.shields.io/badge/Support%20&%20Questions-▸-0dbd8b?style=for-the-badge&logo=matrix&logoColor=white&logoWidth=25)](https://matrix.to/#/#coffeebank:matrix.org)

[<img src="/public/media/preview.png" width="75%" />](#instances)

## How to Use

**Simply [visit the website](#instances) and enter a Spotify link.**

To get a direct link, you can also add the url to a `?s=` query parameter like so:

```
https://playsoju.netlify.app/?s=SPOTIFYLINKHERE
```

Here's a list of query parameters. Many of these can be strung together using `?s=str&sm=str&method=str`.

|Query|Type|Description|
|:---|:---|:---|
|?s=|str|Jump straight to processing a Spotify url|
|?sa=|bool|Run all processing methods for an `?s=` url<br>*see `?method=` for more info*|
|?sm=|str|Processing method for an `?s=` url<br>*see `?method=` for more info*|
|?method=|str|Set default processing method for the browsing session<br><ul><li>**api** *(default)*: Uses Spotify media embed to retrieve media</li><li>**embed**: Loads the Spotify media embed directly (fallback)</li></ul>|

<br />

## Instances

Soju runs on Netlify Functions, which is ratelimited. If the main website isn't working, try another instance below:

|Site|Official|
|:---|:---|
|<https://playsoju.netlify.app>|✅|

<br />

## Notices

On page load, a Spotify access token is retrieved using your Spotify API Key via Netlify Functions and cached in the user device's Vuex store for the session. The Spotify access token expires after an hour, and Spotify ratelimits users using this access token. All data from the session, including the access token, is cleared when the user closes the tab.

Soju is a static site with no server backend. Soju relies heavily on Netlify's CDN and Netlify Functions to provide a fast and secure connection to the Spotify API.

Spotify License Limitations:
- Soju will only use "Audio Preview Clips", which are 30 second preview clips for public use. For the purposes of Spotify's licenses, Soju does not and will not do "Streaming", which is defined as streaming/making available the full song.
- Soju fetches the most up-to-date content from Spotify to display at the time of request by a user. No data is collected or stored after the user closes the tab. Soju cannot access any data Spotify removes from its API.
- Soju does not and will not bypass geo-restrictions. Songs that are geo-blocked or otherwise restricted by the API will not play and show a crossed-out music note icon.
- Soju provides a link back to all content fetched from Spotify.
- Soju may display an unaltered Spotify webpage in its original form (outside of the control of Soju) when the API fails. This webpage is maintained by Spotify, who may place cookies, use tracking technologies, and restrict access to Spotify content within that webpage.

Soju lets you explore music from Spotify on any device easily. Fetch a track's album, compare playlists, and sample different songs quickly and easily.

<br />

### Self-Host

Soju is free, open source, and self-hostable. However, this comes with some big caveats:

- Soju relies heavily on Netlify Functions, which effectively restricts you to only hosting on Netlify at the moment.
- Soju uses copyrighted data from Spotify, which means you must agree to the Spotify licenses by obtaining an API key, before you are safe to access and use the copyrighted data. Soju will not parse and does not endorse parsing the unauthenticated public Spotify Widget for any Spotify data.

Prerequisites:

- Netlify account (free)
- Spotify account + API key (free)
- A public electronic mail inbox or webpage with contact info, for DMCA and contact

Steps:

1. Click "Fork" on the top right corner
1. Add your info under `instanceInfo` in `src/main.js` (contact info goes under `hosterSite`)
1. Go to Netlify (create an account if you haven't) and deploy the site
1. Under Build settings > Environment variables, add the variables listed in `.env.example` (your Spotify API keys go here)
1. Re-deploy your site

<br />

### Development

Fork the project, then install all dependencies using `npm install`.

Run the development server using `netlify dev`. Due to a bug, this currently requires Node 14-16 (not 17) for the server to run properly.

<br />

## License

Soju is licensed under the GPLv3 License, which allows changes as long as your source remains open-source.

Soju is not endorsed by Spotify. Soju uses copyrighted data from Spotify, licensed through a Spotify Web API account.

Feel free to modify Soju for white-label purposes, but please keep all credits per `LICENSE`.

© 2021 - Present, by coffeebank.
