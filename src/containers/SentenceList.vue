<template>
  <div class="sentence-list">
    <!-- loading state -->
    <div v-if="$store.state.isDownloaded === undefined">
    </div>

    <!-- the state where it asks for the downloading sentences -->
    <Download @download="download" v-if="$store.state.isDownloaded === null"></Download>


    <!-- Downloading state -->
    <Downloading v-if="$store.state.isDownloaded === true"></Downloading>

    <!-- Sentences view -->
    <div class="sentences-view" v-if="$store.state.isDownloaded === false">
      <SentenceItem :sentence="sentence" :id="id" :key="++id" v-for="(sentence,id) in currentSentences" />
      <div class="load-more-wrapper bg-purple-xlight text-center py-16">
        <button @click="loadMore" class="load-more px-4 py-2 bg-purple rounded text-white">Load More</button>
      </div>
    </div>
  </div>
</template>

<script>
import SentenceItem from "@/components/SentenceItem";
import Download from "@/components/Download";
import Downloading from "@/components/Downloading";
export default {
  computed: {
    currentSentences() {
      return this.$store.getters.currentSentences;
    }
  },
  components: {
    SentenceItem,
    Downloading,
    Download
  },
  created() {
    this.$store.dispatch("check");
  },
  methods: {
    async download() {
      this.$store.commit("setIsDownloaded", true);
      await this.$store.dispatch("fetchSentences");
      this.$store.commit("setIsDownloaded", false);
    },
    loadMore() {
      this.$store.state.sentencesOptions.start += 50;
      this.$store.dispatch("loadMore");
    }
  }
};
</script>

<style>
</style>
