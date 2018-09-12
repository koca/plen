<template>
  <a v-on="$listeners" v-bind="$attrs" class="external-link-btn inline-block no-underline text-grey-darkest">
    <span class="external-link-content flex items-center ">
      <svg v-if="external" class="mr-2" width="18" height="18"  xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
      </svg>
      <span class="text">
        <slot></slot>
      </span>
    </span>
  </a>
</template>
<script>
export default {
  props: {
    external: {
      default: false
    }
  }
};
</script>
