<template>
  <div class="header-wrap">
    <div class="header fixed w-full flex bg-purple items-center p-1">
        <transition name="fade">
          <div v-if="$store.state.showSidebar" class="header-drawer">
              <Sidebar @closed="handleToggleSidebar"></Sidebar>
          </div>
        </transition>

      <div v-if="!isSearching" class="header-default flex items-center w-full text-white h-12">
        <BaseButton @click="handleToggleSidebar" class="hamburger text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </BaseButton>
        <div class="logo ml-5 -mt-px">
          <span class="logo-type text-xl"><b>PL</b>EN</span>
        </div>
        <BaseButton @click="handleSearchClick" class="btn-search text-white ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g>
              <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fill="currentColor" d="M15.5 14h-.8l-.3-.3A6.259 6.259 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16a6.259 6.259 0 0 0 4.2-1.6l.3.3v.8l5 5 1.5-1.5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.481 4.481 0 0 1 9.5 14z"/>
              </g>
            </g>
          </svg>
        </BaseButton>
      </div>

      <div v-else class="header-search flex items-center w-full bg-white h-12" >
        <BaseButton class="btn-back text-grey-darker" @click="handleBack">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M16 7H3.8l5.6-5.6L8 0 0 8l8 8 1.4-1.4L3.8 9H16z" fill="currentColor" />
          </svg>
        </BaseButton>
        <input ref="input" type="text" v-model="searchText" class="mx-1 text-grey-darkest h-full flex-1 focus:outline-none" placeholder="search...">
        <BaseButton class="btn-clear text-grey-darker px-3 rounded-none" @click="handleClearSearch">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14">
            <path fill="currentColor" d="M14 1.4L12.6 0 7 5.6 1.4 0 0 1.4 5.6 7 0 12.6 1.4 14 7 8.4l5.6 5.6 1.4-1.4L8.4 7z" opacity=".54"/>
          </svg>
        </BaseButton >
      </div>
    </div>
    <h3 class="header-title p-4 font-normal text-grey-darkest text-base">
      <span v-if="!isSearching && !searchText">All Sentences</span>
      <span v-else-if="isSearching && searchText ===''" class="text-grey-dark"><em>Type to search</em></span>
      <span class="flex justify-between" v-else>
        <span>Results for: <strong>{{searchText}}</strong></span>
        <span>{{this.$store.getters.totalSentencesCount}}</span>
      </span>
    </h3>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
  computed: {
    searchText: {
      get() {
        return this.$store.state.searchText;
      },
      set(val) {
        this.$store.commit("setSearchText", val);
      }
    },
    isSearching: {
      get() {
        return this.$store.state.isSearching;
      },
      set(val) {
        this.$store.commit("setIsSearching", val);
      }
    }
  },
  watch: {
    isSearching(val) {
      if (val) {
        this.focusInput();
      }
    },
    searchText(val) {
      if (val) {
        this.$store.dispatch("search", val);
      }
    }
  },
  methods: {
    focusInput() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleToggleSidebar() {
      this.$store.dispatch("toggleSidebar");
    },
    resetSentencesOptions() {
      this.$store.commit("setSentencesOptions", {
        start: 0,
        end: 50
      });
    },
    handleSearchClick() {
      this.$store.commit("setIsSearching", true);
      this.resetSentencesOptions();
      //dispatch search
    },
    handleClearSearch() {
      this.searchText = "";
      this.focusInput();
    },
    handleBack() {
      this.$store.commit("setIsSearching", false);
      this.$store.commit("setSearchText", "");
      this.resetSentencesOptions();
      this.$store.dispatch("check");
    }
  },
  components: {
    Sidebar
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
  z-index: 500;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.header {
  z-index: 1;
}
.header-title {
  padding-top: 4.5em;
}
</style>
