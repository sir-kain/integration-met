<script setup lang="ts">
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
</script>

<template>
  <Header>
    <NavigationMenuItem>
      <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
        French header
      </NavigationMenuLink>
    </NavigationMenuItem>
  </Header>
</template>