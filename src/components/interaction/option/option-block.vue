<template>
    <div class="option">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.option {
    cursor: pointer;
    &:hover {
        color: var(--el-color-primary);
    }
}
</style>
