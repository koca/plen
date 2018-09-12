<template>
  <div class="sidebar">
    <div class="content bg-white fixed h-full pin-t pin-l p-4 flex flex-col justify-between">
      <div class="content-top">
        <h1 class="text-purple-dark">PLEN</h1>
        <p class="mt-6 leading-normal">
          An application to help you learn common phrases in Polish.
          <br>More than 30.000 sentences.
          <br>Ready to use offline!
        </p>

        <hr class="border my-8 ml-0 w-24">

        <div class="content-links">
          <BaseLink href="https://github.com/koca/plen" class="my-3" external="true">
            Send feedbacks & requests
          </BaseLink>
          <BaseLink href="https://github.com/koca/plen" class="my-3" external="true">View source code on Github</BaseLink>
          <BaseLink href="https://twitter.com/imesutkoca" class="my-3" external="true">Follow me on Twitter</BaseLink>
        </div>
      </div>
      <div class="content-botto">
        Made with ❤️ by <BaseLink href="https://mesutkoca.com">Mesut Koca</BaseLink>
      </div>
    </div>

    <div class="backdrop fixed cursor-pointer" @click="$emit('closed')">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.sidebar > * {
  -webkit-tap-highlight-color: transparent;
}
.content {
  width: 80%;
  max-width: 300px;
  z-index: 1000;
}
.backdrop {
  background: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
</style>
