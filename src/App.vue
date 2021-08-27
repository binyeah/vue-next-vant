<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <van-tabbar route safe-area-inset-bottom v-if="isShowTabbar">
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="friends-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
  
  
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "App",
  setup() {
    const route = useRoute();
    const pathList = ["/", "/about"];
    let isShowTabbar = ref(true);
    const getRouteInfo = () => {
      // console.log(route.path)
      isShowTabbar.value = pathList.includes(route.path);
      // console.log(isShowTabbar)
    };
    watch(
      () => route.path,
      () => {
        // console.log('监听到变化')
        getRouteInfo();
      }
    );
    return {
      isShowTabbar,
    };
  },
});
</script>
