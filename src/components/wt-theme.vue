<template>
    <div
        @click="toggleDark()"
        class="c-p"
        :class="isDark ? 'i-mdi:weather-night' : 'i-mdi:white-balance-sunny'"
    ></div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@composable/theme'
</script>
