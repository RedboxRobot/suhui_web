import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Layout, Menu } from 'antd';
import { Switch, withRouter, Link, Redirect } from 'react-router-dom';
import { SubRoutes } from '@/router';

import styles from './layout.module.scss';
import FootPage from './footPage';

const { Header, Footer, Content } = Layout;

@inject('store')
@observer
class WebLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: [],
      currentSeleted: 'home',
      menus: [
        {
          value: 'home',
          path: '/p/home',
          label: '首页'
        },
        {
          value: 'product',
          path: '/p/product',
          label: '产品'
        },
        {
          value: 'about',
          path: '/p/about',
          label: '关于我们'
        },
        {
          value: 'customers',
          path: '/p/customers',
          label: '客户案例'
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

  handleClick = ({ key }) => {
    const { history } = this.props;
    if (history.location.pathname === key) return;
    history.push(key);
  };

  renderMeunItem = ({ path, label}) => {
    return (
      <Menu.Item className={styles.nav_menus_item} key={path} >
        {label}
      </Menu.Item>);
  }

  render() {
    const { routes } = this.props;
    const { menus } = this.state;
    const currentSeleted = this.getSelectedKey();

    return (
      <Layout className={styles.layout} style={{ minHeight: '100vh' }}>
        <Header className={styles.header}>
          <Link to="/">
            <div className={styles.nav_logo}>
              <img
                src={require('@/static/images/logo.png')}
                alt=""
                style={{ width: 64, height: 60 }}
                />
              {/*<span className={styles.nav_logo_title}>速辉科技</span>*/}
            </div>
          </Link>
          <Menu
            className={styles.nav_menus}
            onClick={this.handleClick}
            selectedKeys={[currentSeleted]}
            mode="horizontal"
            >
            { menus && menus.map((item) => {
                return this.renderMeunItem(item);
            })}
          </Menu>
        </Header>
        <Content className={styles.body}>
          <Switch>
            {
              routes.map((route, index) => (
                <SubRoutes key={index} {...route} />
              ))
            }
            <Redirect to={routes[0].path} />
          </Switch>
        </Content>
        <Footer>
            <FootPage />
        </Footer>
      </Layout>
    );
  }
}

export default withRouter(WebLayout);