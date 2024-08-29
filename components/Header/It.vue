<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
</script>

<template>
  <Header>
    <NavigationMenuItem>
      <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
        Italia header
      </NavigationMenuLink>
    </NavigationMenuItem>
  </Header>
</template>