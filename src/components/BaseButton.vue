<template>
  <button v-on="$listeners" v-bind="$attrs" class="btn-base sm:hover:bg-dark focus:outline-none px-3 u-align-center h-full">
    <slot></slot>
  </button>
</template>
<script>
export default {};
</script>
