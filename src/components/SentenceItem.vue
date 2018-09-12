<template>
  <div class="sentence">
    <div class="mb-4 p-4 relative shadow bg-white">
      <span class="absolute pin-r pin-t text-grey p-4">{{id}}</span>
      <span v-text="sentence.en || sentence.obj.en" highlight="hi" />
      <div class="my-2 border-b-2 w-4"></div>
      <span :bold="true" v-text="sentence.pl || sentence.obj.pl" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sentence: {
      type: [Object, Array],
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    }
  }
};
</script>

<style>
</style>
