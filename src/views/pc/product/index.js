import React, { Component } from 'react';
import styles from './product.module.scss';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <section className={styles.section_content}>
          Post机销售
        </section>
        <section className={styles.section_content}>
          网站建设
        </section>
        <section className={styles.section_content}>
          在线教育题库
        </section>
        <section className={styles.section_content}>
          移动支付解决方案
        </section>
      </div>
    );
  }
}

export default Product;