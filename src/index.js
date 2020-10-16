import React from 'react';
import ReactDOM from 'react-dom';
import './utils/rem';
import './index.scss';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import { configure } from 'mobx';
import MediaQuery from 'react-responsive';
import zhCN from 'antd/es/locale/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';

import RouterContainer from './router/index';
import RouteConfigsPc from './router/routerConfigsPc';
import RouteConfigsMobile from './router/routerConfigsMobile';

import store from './store/index';

moment.locale('zh-CN');

// 开启严格模式
configure({
  enforceActions: 'observed',
});


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <MediaQuery query="(min-device-width:1224px)">
        <RouterContainer routeConfigs={RouteConfigsPc} />
      </MediaQuery>
      <MediaQuery query="(max-device-width:1224px)">
        <RouterContainer routeConfigs={RouteConfigsMobile} />
      </MediaQuery>
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);