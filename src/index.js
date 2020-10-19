import React from 'react';
import ReactDOM from 'react-dom';
import './utils/rem';
import './index.scss';
import { Provider } from 'mobx-react';
import { ConfigProvider } from 'antd';
import { configure } from 'mobx';
import zhCN from 'antd/es/locale/zh_CN';

import moment from 'moment';
import 'moment/locale/zh-cn';

import RouterContainer from './router/index';
import RouteConfigs from './router/routerConfigs';

import store from './store/index';

moment.locale('zh-CN');

// 开启严格模式
configure({
  enforceActions: 'observed',
});


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <RouterContainer routeConfigs={RouteConfigs} />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);