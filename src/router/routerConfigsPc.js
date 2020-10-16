import WebLayout from '@/views/pc/layout/index';
import loadable from '@loadable/component';

const Home = loadable(() =>
  import('@/views/pc/home/index')
);

const Product = loadable(() =>
  import('@/views/pc/product/index')
);

const About = loadable(() =>
  import('@/views/pc/about/index')
);

const RouteConfigsPc = [
  {
    //一级路由的重定向
    path: '/',
    exact: true,
    redirect: '/p/home/page'
  },
  {
    title: '首页',
    //路由地址
    path: '/p/home',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/p/home/page',
        component: Home
      }
    ]
  },
  {
    title: '产品',
    //路由地址
    path: '/p/product',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/p/product/page',
        component: Product
      }
    ]
  },
  {
    title: '关于我们',
    //路由地址
    path: '/p/about',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/p/about/page',
        component: About
      }
    ]
  },


];
export default RouteConfigsPc;