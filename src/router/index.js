import {createRouter, createWebHashHistory} from "vue-router"

// 2. 定义路由配置
const routes = [
  { 
    path: "/",
    name: 'home',
    component:()=> import('../view/home/index.vue'),
    meta:{
      title:'首页'
    }
  },
  { 
    path: "/about",
    name: 'about',
    component:()=> import('../view/about/index.vue'),
    meta:{
      title:'关于'
    }
  },
];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router