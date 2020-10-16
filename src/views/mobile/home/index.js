import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Carousel, Grid } from 'antd-mobile';

import styles from './home.module.scss';

@inject('store')
@observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {text: 'Post机销售'},
        {text: '在线收银系统解决方案'},
        {text: '在线教育题库'},
        {text: '网站建设'}
      ]
    };
  }

  render() {
    return (
      <div>
        <Carousel autoplay infinite className={styles.banner}>
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
          <div className={styles.product_info_wraper}>
            <Grid data={this.state.data} columnNum={2} hasLine={false}/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;