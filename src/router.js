import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Default.vue'

Vue.use(Router)

const routerMapping = [
    {
        path: '/',
        component: Layout,
        name: 'index',
        meta: {
            title: '首页',
            icon: 'hosjoy_home',
            isMenu: true
        },
        children: [
            {
                path: '',
                meta: {},
                component: () => import('./views/index/index')
            }
        ]
    },
    {
        path: '/first',
        component: Layout,
        name: 'test',
        meta: {
            title: '顶级菜单',
            icon: 'hosjoy_home',
            isMenu: true
        },
        children: [
            {
                path: 'two',
                name: 'two',
                meta: {
                    isMenu: true,
                    title: '二级菜单'
                },
                component: () => import('./views/index/index')
            }
        ]
    }
]
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/login/login'),
            hidden: true
        },
        {
            path: '/403',
            name: '403',
            meta: {
                isMenu: false
            },
            component: () => import('./views/error/403'),
            hidden: true
        },
        ...routerMapping
    ]
})

router.beforeEach((to, from, next) => {
    // TODO 路由守卫
    const isLogin = to.name === 'login'
    let userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
    // 非/login下需要验证
    if (!isLogin) {
        // 非登录的情况下
        if (!userInfo) {
            return next({
                name: 'login'
            })
        }
    }
    next()
})

export default router
export {
    routerMapping
}
