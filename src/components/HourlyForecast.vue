<template>
    <div class="flex w-full px-4 py-2 space-x-2 overflow-x-scroll border rounded-lg bg-slate-100">
        <div class="px-4 py-2 bg-white border rounded-lg hour" v-for="hour in 24">
        <p class="hour">18:00</p>
        <p class="temperature">-1°C</p>
        <span>&#9729;</span>
        </div>
    </div>
</template>

<script setup></script>

<style scoped></style>
