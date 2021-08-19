<template>
    <div class="route" @click="pathGo">首页</div>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router';
export default defineComponent({
    setup() {
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/')
        };
        return{
            pathGo
        }
    }
})
</script>
<style lang="scss" scoped>

</style>