<template>
  <div class="about w-full text-center">
    <router-link to="/">
      <div class="pageheader grid grid-cols-a1f p-4 pt-8 sm:p-12 sm:pb-4 md:pb-6 gap-4 sm:gap-8 items-end">
        <img class="w-20 h-20 xs:w-28 xs:h-28 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full shadow-2xl filter contrast-125 select-none object-cover pointer-events-none" src="/media/android-chrome-512x512.png" alt="Soju for Spotify" />
        <div class="text-left hidden xs:block">
          <h1 class="font-bold text-gray-200 text-xs md:text-sm uppercase my-2">Music Enthusiast</h1>
          <h1 class="font-bold text-gray-100 my-2 text-4xl sm:text-5xl md:text-6xl lg:text-5r leading-none">Soju for Spotify</h1>
          <h1 class="text-gray-400 text-sm sm:text-sm tracking-wide my-2">Explore music from Spotify on any device easily</h1>
        </div>
        <div class="text-left xs:hidden">
          <h1 class="font-bold text-gray-100 my-2 text-4xl sm:text-5xl md:text-6xl lg:text-5r leading-none">Soju</h1>
          <h1 class="text-gray-400 text-sm sm:text-sm tracking-wide my-2">Listen to music samples</h1>
        </div>
      </div>
    </router-link>

    <div class="bg-161616 text-eeeeee px-t2 sm:px-6 md:px-12 py-t2 md:py-6 text-left min-h-screen">

      <div class="bg-transparent grid grid-cols-2 gap-1 py-t1 sm:py-0 sm:px-t4 md:px-t8 sm:flex sm:flex-no-wrap sm:items-center sm:justify-center">
        <router-link
          v-for="navlink in navitems"
          :key="navlink.title"
          :to="navlink.url"
          class="inline-flex items-center justify-center px-4 py-3 sm:m-1 text-base font-medium leading-6 transition-colors duration-300 hover:bg-282828 rounded-md cursor-pointer"
          active-class="bg-222222 shadow"
          >{{ navlink.title }}</router-link
        >
      </div>

      <div id="content"></div>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      <div class="text-center pt-24 pb-2">
        <div class="text-center pb-2 text-gray-600 text-sm">
          &copy; Data from Spotify licensed using Spotify Web API
        </div>
        <div class="text-center pb-2 text-gray-600">
          &#x2002;&#x4D;&#x61;&#x69;&#x6E;&#x74;&#x61;&#x69;&#x6E;&#x65;&#x64;&#x20;&#x62;&#x79;&#x20;{{ this.$store.state.instanceInfo.hosterName }}&#x2002;&copy;&#x2002;Soju, GPLv3 License
        </div>
        <div class="text-center pb-2">
          <router-link to="/about" class="text-gray-500 transition duration-300 hover:text-gray-400">See About/Terms/Privacy</router-link>
        </div>
      </div>

     

    </div>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        navitems: [
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
        ],
      }
    },
    async created() {
      let copyYear = 2021;
      let currentYear = new Date().getFullYear();
      if ( currentYear > copyYear) {
        this.$store.commit('copyYear', copyYear + "–" + currentYear)
      } else {
        this.$store.commit('copyYear', copyYear)
      }
    },
    methods: {
      beforeLeave(element) {
        this.prevHeight = getComputedStyle(element).height;
      },
      enter(element) {
        window.scrollTo({top: 180, behavior: 'smooth'});
        const { height } = getComputedStyle(element);

        element.style.height = this.prevHeight;

        setTimeout(() => {
          element.style.height = height;
        });
      },
      afterEnter(element) {
        element.style.height = 'auto';
      },
      scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
    },
  }
</script>

<style>
html, body {
  font-family: Jost, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  scroll-behavior: smooth;
}
.pageheader {
  /* height: 20vh; */
  background-image: linear-gradient(135deg, rgba(238, 238, 238, 0.1),rgba(16, 16, 16, 0.1)),linear-gradient(183deg, rgb(223,14,20),rgb(25,20,20));
  background-size: cover;
  background-position: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
