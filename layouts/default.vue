<script setup lang="ts">
const countryStore = useCountryStore()

const components: Record<string, unknown> = {
  HeaderIt: resolveComponent('HeaderIt'),
  HeaderFr: resolveComponent('HeaderFr'),
};
</script>

<template>
  <component :is="components[countryStore.headerComponentName]"></component>
  <slot />
</template>

<style scoped></style>
