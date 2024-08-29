<script setup lang="ts">
const countryStore = useCountryStore()
const componentField = ref()
const countryChanged = ($event) => {
  countryStore.setActiveCountry($event.target.value)
}

</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <Select class="my-20" :modelValue="countryStore.activeCountry.code" v-bind="componentField">
      <SelectTrigger class="w-[180px]">
        <SelectValue placeholder="Select a country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Countries</SelectLabel>
          <SelectItem v-for="country in countryStore.countries" :key="country.code" :value="country.code">
            {{ country.name }}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select> -->
    <select @change="countryChanged" class="my-4">
      <option v-for="country in countryStore.countries" :key="country.code" :value="country.code" :selected="countryStore.activeCountry.code === country.code">
        {{ country.name }}
      </option>
    </select>
  </div>
</template>

<style scoped></style>
