import WebLayout from '@/views/mobile/layout/index';
import loadable from '@loadable/component';

const Home = loadable(() =>
  import('@/views/mobile/home/index')
);

const Product = loadable(() =>
  import('@/views/mobile/product/index')
);

const About = loadable(() =>
  import('@/views/mobile/about/index')
);

const RouteConfigsMobile = [
  {
    //一级路由的重定向
    path: '/',
    exact: true,
    redirect: '/m/home/page'
  },
  {
    title: '首页',
    //路由地址
    path: '/m/home',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/m/home/page',
        component: Home
      }
    ]
  },
  {
    title: '产品',
    //路由地址
    path: '/m/product',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/m/product/page',
        component: Product
      }
    ]
  },
  {
    title: '关于我们',
    //路由地址
    path: '/m/about',
    //组件
    component: WebLayout,
    children: [
      {
        path: '/m/about/page',
        component: About
      }
    ]
  },


];
export default RouteConfigsMobile;