import WebLayout from '@/views/layout/index';
import loadable from '@loadable/component';

const Home = loadable(() =>
  import('@/views/home/index')
);

const Product = loadable(() =>
  import('@/views/product/index')
);

const About = loadable(() =>
  import('@/views/about/index')
);

const RouteConfig = [
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
    component: WebLayout,
    children: [
      {
        path: '/home/page',
        component: Home
      }
    ]
  },
  {
    title: '产品',
    //路由地址
    path: '/product',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/product/page',
        component: Product
      }
    ]
  },
  {
    title: '关于我们',
    //路由地址
    path: '/about',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/about/page',
        component: About
      }
    ]
  },


];
export default RouteConfig;