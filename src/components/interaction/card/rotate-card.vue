<template>
    <div class="rotate-card" @mouseleave="reset" @mousemove="rotate($event)">
        <div class="rotate-card-item" ref="target">
            <slot> </slot>
        </div>
    </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { useElementTransform } from '@vueuse/motion'
const props = defineProps({
    // ...
    scale: {
        type: Number,
        default: 15,
    },
})

const target = ref<HTMLElement | null>(null)
const { width, height } = useElementBounding(target)
const { transform } = useElementTransform(target)

const rotate = (event: any) => {
    let X = event.offsetX / width.value
    let Y = event.offsetY / height.value
    let rX = (X - 0.5) * props.scale
    let rY = -(Y - 0.5) * props.scale

    transform.rotateX = rY
    transform.rotateY = rX
}

const init = () => {
    transform.rotateX = 0
    transform.rotateY = 0
    transform.rotateZ = 0
}
init()

const reset = () => {
    transform.rotateX = 0
    transform.rotateY = 0
}

// 移动设备用户根据重力感应旋转卡片
// const { acceleration, accelerationIncludingGravity, interval, rotationRate } =
//   useDeviceMotion()
</script>

<style scoped lang="scss">
.rotate-card {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    perspective: 700px;
    user-select: none;

    .rotate-card-item {
        width: 100%;
        height: 100%;
        transition: transform 0.25s ease-out;
    }
}
</style>
