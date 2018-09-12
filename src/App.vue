<template>
  <div class="h-screen max-h-screen font-sans flex flex-col">
    <TheHeader></TheHeader>
    <div class="px-4 flex-1">
      <SentenceList class="h-full w-full"></SentenceList>
    </div>
  </div>
</template>

<script>
import "./assets/styles.css";
import TheHeader from "./containers/TheHeader";
import SentenceList from "./containers/SentenceList";

export default {
  components: {
    TheHeader,
    SentenceList
  }
};
</script>

<style>
</style>
