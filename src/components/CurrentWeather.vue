<template>
  <div
    class="flex items-center justify-between info"
    v-if="weatherStore.weather.current"
  >
    <div class="flex">
      <div class="pr-6 border-r-2">
        <CitiesBar class="text-xl font-semibold text-slate-900" />
        <p class="text-sm text-slate-700">
          {{ currentWeekday }},
          {{ new Date(weatherStore.weather.current.dt * 1000).getDate() }} -
          {{ currentMonth }}
        </p>
      </div>

      <span class="px-2 ml-6 text-4xl bg-blue-200 rounded-lg"
        ><img :src="iconHref" alt=""
      /></span>
    </div>
    <div class="text-3xl">
      <p class="text-blue-400">
        {{ Math.round(weatherStore.weather.current.temp) }}°C
      </p>
    </div>
  </div>
  <div v-else>Lodaing weather...</div>
</template>

<script setup>
import CitiesBar from "./CitiesBar.vue";
import { useWeatherStore } from "../store/weatherStore";
import { computed } from "vue";

const weatherStore = useWeatherStore();

const currentWeekday = computed(() => {
  if (weatherStore.weather == {}) {
    return null;
  } else {
    const date = new Date(weatherStore.weather.current.dt * 1000);
    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return weekdayNames[date.getDay()];
  }
});

const currentMonth = computed(() => {
  if (weatherStore.weather == {}) {
    return null;
  } else {
    const date = new Date(weatherStore.weather.current.dt * 1000);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[date.getMonth()];
  }
});

const iconHref = computed(() => {
  if (weatherStore.weather == {}) {
    return null;
  } else {
    return ` https://openweathermap.org/img/wn/${weatherStore.weather.current.weather[0].icon}@2x.png`;
  }
});
</script>

<style scoped></style>
