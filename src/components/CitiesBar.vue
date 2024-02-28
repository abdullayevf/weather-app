<template>
  <select
    name="city"
    id="city"
    @change="locationStore.city = $event.target.value"
  >
    <option value="toshkent" selected>Tashkent</option>
    <option value="andijon">Andijon</option>
    <option value="namangan">Namangan</option>
    <option value="sirdaryo">Sirdaryo</option>
    <option value="surxondaryo">Surxondaryo</option>
    <option value="qashqadaryo">Qashqadaryo</option>
    <option value="urganch">Xorazm</option>
    <option value="navoiy">Navoiy</option>
    <option value="buxoro">Buxoro</option>
    <option value="nukus">Qoraqalpag'iston</option>
    <option value="fargona">Farg'ona</option>
  </select>
</template>

<script setup>
import { useLocationStore } from "../store/weatherStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const locationStore = useLocationStore();
const { city } = storeToRefs(locationStore);
</script>

<style scoped></style>
