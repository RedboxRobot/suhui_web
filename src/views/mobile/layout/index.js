import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Menu, NavBar, ActivityIndicator } from 'antd-mobile';
import { Switch, withRouter, Redirect } from 'react-router-dom';
import { SubRoutes } from '@/router';

import styles from './layout.module.scss';
import FootPage from './footPage';
import { MenuOutlined } from '@ant-design/icons';

@inject('store')
@observer
class WebLayoutMobile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      openKeys: [],
      currentSeleted: 'home',
      data: [
        {
          value: 'home',
          path: '/home',
          label: '首页'
        },
        {
          value: 'product',
          path: '/product',
          label: '产品'
        },
        {
          value: 'about',
          path: '/about',
          label: '关于我们'
        },
        {
          value: 'customers',
          path: '/customers',
          label: '客户案例',
          isLeaf: true,
        }
      ]
    };
  }

  getSelectedKey = () => {
    let currentSeleted = this.props.history.location.pathname
      .split('/')
      .slice(0, 3)
      .join('/');

    return currentSeleted;
  };

  handleClick = (e) => {
    e.preventDefault(); // Fix event propagation on Android
    this.setState({
      show: !this.state.show,
    });
  };

  onChange = (value) => {
    const { history } = this.props;
    if (history.location.pathname.indexOf(value[0]) !== 1) {
      this.state.data.forEach((dataItem) => {
        if (value[0] === dataItem.value) {
          history.push(dataItem.path);
          return;
        }
      });
    }
    this.setState({
      show: !this.state.show,
    });
  }

  renderMeunItem = ({ path, label}) => {
    return (
      <Menu.Item className={styles.nav_menus_item} key={path} >
        {label}
      </Menu.Item>);
  }

  render() {
    const { routes } = this.props;
    const { data, show } = this.state;
    const currentSeleted = this.getSelectedKey();
    const menuEl = (
      <Menu
        data={data}
        value={[currentSeleted]}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.2}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );

    return (
      <div className={styles.layout} style={{ minHeight: '100vh' }}>
        <section>
          <div>
            <div>
              <NavBar
                icon={<MenuOutlined />}
                mode="light"
                onLeftClick={this.handleClick}
              >
                速辉科技
              </NavBar>
            </div>
            {show ? data ? menuEl : loadingEl : null}
          </div>
        </section>
        <section className={styles.body}>
          <Switch>
            {
              routes.map((route, index) => (
                <SubRoutes key={index} {...route} />
              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </section>
        <section>
            <FootPage />
        </section>
      </div>
    );
  }
}

export default withRouter(WebLayoutMobile);