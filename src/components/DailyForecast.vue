<template>
  <div class="px-4 py-2 space-y-6 bg-slate-50">
    <h2 class="text-lg font-semibold ">Next week</h2>
    <div v-for="day in 7" class="flex items-center justify-between day">
      <p>Wednesday, 20</p>
      <div class="flex items-center space-x-2 temperature">
        <span>&#9729;</span>
        <p class="text-blue-500">-8°C</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
