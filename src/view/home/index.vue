<template>
    <div class="app-page">
        <van-nav-bar
        title="首页"
        fixed
        safe-area-inset-top
        />
        <!-- <div>{{num}}</div> -->
        <div class="page-content route" @click="pathGo">列表</div>
    </div>
    
</template>
<script>
import { defineComponent,onMounted,computed } from 'vue';
import {useRouter} from 'vue-router';
import { useStore } from 'vuex'
import {login} from '../../api/api.js';
export default defineComponent({
    name:'home',
    setup() {
        const store = useStore()
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/list')
        };
        const  toLogin = async ()=>{
            let data = {
                name:"11",
                age:'12'
            }
            // console.log(data)
            try{
                let res =await login(data)
                console.log(res)
            }catch(e){
                console.log(e)
            }
        }
        const num = computed(() => store.getters.getChangedNum);
        onMounted(()=>{
            toLogin()
        })
        return{
            num,
            pathGo,
        }
    }
})
</script>
<style lang="scss" scoped>

</style>