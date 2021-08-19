<template>
    <div class="route" @click="pathGo">关于</div>
</template>
<script>
import { defineComponent } from 'vue';
import {useRouter} from 'vue-router';
export default defineComponent({
    setup() {
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/about')
        };
        return{
            pathGo
        }
    }
})
</script>
<style lang="scss" scoped>

</style>