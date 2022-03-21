<template>
  <div class="about w-full px-t2 sm:px-t4 md:px-t8 py-t4 sm:py-t6">
    <h1 class="text-xl sm:text-3xl mb-t4 text-center">About &amp; Credits</h1>
    <p class="text-lg sm:text-xl text-center text-gray-300 mb-t4">Soju lets you explore music from Spotify on any device easily. Fetch a track's album, compare playlists, and sample different songs quickly and easily.</p>
    <div class="w-full sm:w-3/4 lg:w-1/2 mx-auto p-6 rounded shadow bg-222222">
      <p class="text-center mb-t2"><a :href="instanceInfo.hosterLicense" rel="noopener" target="_blank" class="text-center text-gray-400 hover:text-gray-500 transition">&copy;&ensp;{{ copyYear }}&ensp;&middot;&ensp;Soju, GPLv3 License</a></p>
      <p class="text-center text-gray-300 mb-t2">Soju is not endorsed by Spotify. All Spotify content is from the Spotify Web API, or unmodified public-facing websites.</p>
      <p class="text-center text-gray-300 mb-t2">Soju is open source software licenced under the GPLv3, and supported by maintainers who run Soju instances.</p>
      <div class="flex flex-wrap items-center justify-center text-center mt-t4 gap-4">

        <!-- NOTE: To add your info on the site, please update `main.js` -->
        
        <div class="inline-flex text-center items-center justify-center px-6 py-2 text-base font-medium leading-6 transition duration-300 border-323232 border-2 rounded-md cursor-default">Maintained by {{ instanceInfo.hosterName }}</div>
      </div>
      <div class="flex flex-wrap items-center justify-center text-center mt-t2 gap-4">
        <a :href="instanceInfo.hosterCode" rel="noopener" target="_blank">
          <div class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 transition duration-300 bg-2f2f2f hover:bg-282828 rounded-md cursor-pointer">Source Code</div>
        </a>
        <a href="#privacy">
          <div class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 transition duration-300 bg-2f2f2f hover:bg-282828 rounded-md cursor-pointer">Contact/DMCA</div>
        </a>
        <a :href="instanceInfo.hosterLicense" rel="noopener" target="_blank">
          <div class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 transition duration-300 bg-2f2f2f hover:bg-282828 rounded-md cursor-pointer">License</div>
        </a>
      </div>
    </div>

    <div class="text-center w-5/6 sm:w-3/4 mx-auto mb-t8">
      
    </div>

    <div class="bg-202020 shadow-lg rounded px-t2 sm:px-t4 py-0 mb-t2">
      <div id="terms" class="pt-t3"></div>
      <h1 class="text-lg sm:text-xl mb-t2">Terms of Use</h1>
      <p class="pb-t4 whitespace-pre-line text-gray-300">{{ termsOfUse }}</p>
    </div>

    <div class="bg-202020 shadow-lg rounded px-t2 sm:px-t4 py-0 mb-t2">
      <div id="privacy" class="pt-t3"></div>
      <h1 class="text-lg sm:text-xl mb-t2">Privacy Policy</h1>
      <p class="pb-t1 whitespace-pre-line text-gray-300">{{ privacyPolicy }}</p>
      <div id="contact"></div>
      <ul class="pb-t3 list-disc overflow-x-auto">
        <li class="pb-t1 pl-t1">Maintainer: {{ instanceInfo.hosterName }}</li>
        <li class="pb-t1 pl-t1">Source code: <a :href="instanceInfo.hosterCode" rel="noopener" target="_blank" class="text-gray-400 transition duration-150 hover:text-gray-500">{{ instanceInfo.hosterCode }}</a></li>
        <li class="pb-t1 pl-t1">Contact: <a v-if="instanceInfo.hosterContact.includes('https://')" :href="instanceInfo.hosterContact" rel="noopener" target="_blank" class="text-gray-400 transition duration-150 hover:text-gray-500">{{ instanceInfo.hosterContact }}</a><span v-else>{{ instanceInfo.hosterContact }}</span></li>
        <li class="pb-t1 pl-t1">License: <a :href="instanceInfo.hosterLicense" rel="noopener" target="_blank" class="text-gray-400 transition duration-150 hover:text-gray-500">{{ instanceInfo.hosterLicense }}</a></li>
      </ul>
    </div>

    <div class="bg-202020 shadow-lg rounded px-t2 sm:px-t4 py-0 mb-t2"
      v-for="(creditcat,index) in credits"
      :key="index"
    >
      <div :id="creditcat.title" class="pt-t3"></div>
      <h1 class="text-lg sm:text-xl mb-t2">{{ creditcat.title }}</h1>
      <ul class="pb-t3 list-disc overflow-x-auto">
        <li class="pb-t1 pl-t1"
          v-for="(sourcelist,index) in creditcat.sources"
          :key="sourcelist+index"
        >
          <a v-if="sourcelist.url" :href="sourcelist.url" rel="noopener noreferrer" target="_blank" class="truncate text-gray-400 hover:text-gray-500 transition duration-300">
            <span class="text-gray-300" v-html="sourcelist.title"></span> - <span>{{ sourcelist.url }}</span>
          </a>
          <a v-else :href="sourcelist" rel="noopener noreferrer" class="truncate text-cccccc hover:text-gray-400 transition duration-300" v-html="sourcelist"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        termsOfUse: `Soju uses copyrighted content from Spotify Web API. The Spotify API license limits your use and access of the Spotify API outside of what is provided by Soju, and lets Spotify enforce the Soju Terms of Use and Privacy Policy.
  
        THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

        IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`,
        privacyPolicy: `Soju does not collect analytics from your user session; does not collect IP addresses or any personally identifiable information; and does not place cookies. Soju does not collect, store, sell, or share any user data, so doesn't support DNT (Do Not Track). Netlify processes your requests, which may or may not be outside of the US and EU.

        Soju makes all requests to and returns all data from the Spotify API using Netlify Functions and Netlify CDN. Spotify API may track all requests sent to each API endpoint from Netlify. All content you are served from Spotify API is cleared after you close your tab.

        Spotify is a third party service integrated by Soju. When you choose to load any unmodified, public-facing webpages from Spotify through Soju, you consent to the following by Spotify: being tracked by analytics; having your IP address and/or personally identifiable information collected; and/or having cookies placed in your browser. Soju cannot control this because it is an unmodified, public-facing webpage by Spotify. For more details and to manage data Spotify collects, see Spotify's Privacy Policy at https://www.spotify.com/privacy.

        Contact Info:`,
        credits: [
          {
            title: 'Credits and Resources',
            sources: [
              { title: "© 2021–Present, Soju source code by coffeebank", url: "https://github.com/coffeebank/soju" },
              { title: "© Data from Spotify Web API", url: "https://developer.spotify.com/" },
              { title: "Vue 3 template starter by web2033", url: "https://github.com/web2033/vite-vue3-tailwind-starter" },
              { title: "Logo image by Timothy Dykes on Unsplash", url: "https://unsplash.com/photos/ekPfOrUhNgs"},
              { title: "Icons by Material Design Icons", url: "https://materialdesignicons.com/" },
              { title: "Font is \"Jost\" by Owen Earl, Open Font License", url: "https://fonts.google.com/specimen/Jost" },
              { title: "Background by Gradient Magic", url: "https://www.gradientmagic.com/" },
            ]
          },
        ],
      }
    },
    computed: {
      ...mapState(['instanceInfo', 'copyYear'])
    },
  }
</script>

<style scoped>

</style>
