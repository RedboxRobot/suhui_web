import { RouterLayout, RouterHome, RouterProduct, RouterAbout } from './routerCom';

const RouteConfigs = [
  {
    //一级路由的重定向
    path: '/',
    exact: true,
    redirect: '/home/page'
  },
  {
    title: '首页',
    //路由地址
    path: '/home',
    //组件
    component: RouterLayout,
    children: [
      {
        path: '/home/page',
        component: RouterHome
      }
    ]
  },
  {
    title: '产品',
    //路由地址
    path: '/product',
    //组件
    component: RouterLayout,
    children: [
      {
        path: '/product/page',
        component: RouterProduct
      }
    ]
  },
  {
    title: '关于我们',
    //路由地址
    path: '/about',
    //组件
    component: RouterLayout,
    children: [
      {
        path: '/about/page',
        component: RouterAbout
      }
    ]
  },
];

export default RouteConfigs;