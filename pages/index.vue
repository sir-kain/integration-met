<script setup lang="ts"></script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <Button>Page index</Button>
    <Alert variant="destructive">
    <!-- <ExclamationTriangleIcon class="w-4 h-4" /> -->
    <AlertTitle>Error</AlertTitle>
    <AlertDescription>
      Your session has expired. Please log in again.
    </AlertDescription>
  </Alert>
  </div>
</template>

<style scoped></style>
