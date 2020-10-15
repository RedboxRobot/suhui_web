import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Carousel } from 'antd';

import styles from './home.module.scss';

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Carousel autoplay className={styles.banner} dotPosition={'bottom'}>
          <div>
            <h3 className={styles.banner_content}>1</h3>
          </div>
          <div>
            <h3 className={styles.banner_content}>2</h3>
          </div>
          <div>
            <h3 className={styles.banner_content}>3</h3>
          </div>
          <div>
            <h3 className={styles.banner_content}>4</h3>
          </div>
        </Carousel>
        <section className={styles.product_info}>
          <div className={styles.product_info_wraper + ' ' + styles.clearfix}>
            <ul>
              <li>Post机销售</li>
              <li>在线收银系统解决方案</li>
            </ul>
            <ul>
              <li>在线教育题库</li>
              <li>网站建设</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;