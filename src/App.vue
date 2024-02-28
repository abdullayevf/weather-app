<template>
  <main class="w-full min-h-screen font-mono bg-slate-100">
    <div class="container p-4 mx-auto">
      <div
        class="w-2/3 px-10 py-5 mx-auto space-y-8 bg-white border rounded-lg wrapper"
      >
        <CurrentWeather />
        <HourlyForecast />
        <DailyForecast />
      </div>
    </div>
  </main>
</template>

<script setup>
import CurrentWeather from "./components/CurrentWeather.vue";
import HourlyForecast from "./components/HourlyForecast.vue";
import DailyForecast from "./components/DailyForecast.vue";
import { onMounted, onUpdated } from "vue";
import { useLocationStore } from "./store/weatherStore.js";

const locationStore = useLocationStore();

onMounted(() => {
  locationStore.fetchLocation(locationStore.city);
});

</script>

<style scoped></style>
