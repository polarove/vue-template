<template>
    <div class="cons">
        <slot name="header"></slot>
        <div class="fill">
            <slot></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.cons {
    display: flex;
    flex-flow: column;
    flex-direction: column;
    min-height: 100vh;
    .fill {
        flex: 1;
        height: auto;
        min-height: 70vh;
    }
}
</style>
