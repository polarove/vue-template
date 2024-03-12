<template>
    <span class="text"> <slot> </slot> </span>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.text {
    position: relative;
    cursor: pointer;
    &:hover {
        color: var(--el-color-primary) !important;
    }
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        bottom: 0;
        width: 0px;
        height: 1px;
        background-color: var(--el-color-primary);
        transition: width 0.15s ease-in-out;
        border-radius: 5px;
    }
    &:hover::before {
        width: 100% !important;
    }
}
</style>
