<template>
    <div class="app-page">
        <van-nav-bar
        title="列表"
        fixed
        left-arrow
        @click-left="onClickLeft"
        safe-area-inset-top
        />
    </div>
    
    <!-- <div>{{num}}</div>
    <div class="route" @click="pathGo">关于</div> -->
</template>
<script>
import { defineComponent,onMounted,computed, ref  } from 'vue';
import {useRouter} from 'vue-router';
import { useStore } from 'vuex'
export default defineComponent({
    name:'list',
    setup() {
        const store = useStore()
        const router = useRouter();
        const onClickLeft = ()=>{
            router.go(-1)
        };
       
        const num = computed(() => store.getters.getChangedNum);
        return{
            num,
            onClickLeft,
        }
    }
})
</script>
<style lang="scss" scoped>

</style>