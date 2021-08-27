<template>
    <div class="app-page">
        <van-nav-bar
            title="我的"
            fixed
            safe-area-inset-top
            />
        <!-- <div>{{num}}</div> -->
        <div class="page-content">
            <van-cell-group >
                <van-cell title="姓名" :value="user.name" />
                <van-cell title="性别" :value="user.sex" />
            </van-cell-group>
        </div>
    </div>
</template>
<script>
import { defineComponent,onMounted,reactive,toRefs} from 'vue';
import {useRouter} from 'vue-router';
import {login} from '../../api/api.js';
export default defineComponent({
    name:'about',
    setup() {
        const data = reactive({
            user:{}  
        });
        const router = useRouter();
        const pathGo = ()=>{
            router.push('/')
        };
        const  toLogin = async ()=>{
            try{
                const res =await login()
                data.user = res.data;
                // console.log(user)
            }catch(e){
                console.log(e)
            }
        }
        onMounted(()=>{
            toLogin()
        })
        return{
            ...toRefs(data),
            pathGo
        }
    }
})
</script>
<style lang="scss" scoped>

</style>