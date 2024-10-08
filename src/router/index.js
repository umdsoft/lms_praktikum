import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      // meta: { requiresAuth: true },
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@/pages/home.vue')
        },
        {
          path: '/my-course',
          name: 'my-course',
          component: () => import('@/pages/my-course/course.vue')
        },
        {
          path: '/vacancy',
          name: 'vacancy',
          component: () => import('@/pages/vacancy/Vacancy.vue')
        },
      ]

    },
    // {
    //   path: '/manager',
    //   component: () => import('@/layouts/default.vue'),
    //   meta: { requiresAuth: true },
    //   children:[
    //     {
    //       path: '/',
    //       name: 'manager',
    //       component: () => import('@/pages/manager/home.vue')
    //     },
    //   ]
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/auth/login.vue')
    }

  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (userStore.tokens.accessToken) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
})

export default router