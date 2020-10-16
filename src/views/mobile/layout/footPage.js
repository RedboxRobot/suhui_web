import React, { Component } from 'react';
import styles from './layout.module.scss';

class FootPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageList: [
        {
          title: '产品中心',
          children: [
            '产品中心',
            {key: 'pos机销售', value: ''},
            {key: '在线教育题库', value: ''},
            {key: '网站建设', value: ''},
            {key: '移动支付解决方案', value: ''}
          ]
        },
        {
          title: '关于我们',
          children: [
            '关于我们',
            {key: '速辉科技有限公司', value: ''}
          ]
        },
        {
          title: '友情链接',
          children: [
            '友情链接',
            {key: '久丰信息技术（武汉）有限公司', value: 'http://www.jofo.biz/'},
            {key: '苏州钱到到网络科技湖北分公司', value: 'http://www.caimomo.com/'},
            {key: '武汉资呗科技有限公司', value: ''}
          ]
        },
        {
          title: '联系方式',
          children: [
            '联系方式',
            {key: '400-800-900', value: ''},
            {key: 'lmj@qq.com', value: ''}
          ]
        },
      ]
    };
  }

  render() {
    const { pageList } = this.state;

    return (
      <div className={styles.footer_container}>
        <div className={styles.footer_container_inner}>
          <div className={styles.footer_content + ' ' + styles.clearfix}>
          {
            pageList.map((item, outdex) => {
              return (
                <ul key={item.title + outdex}>
                  {item.children.map(
                    (inner, index)=>{
                      return (
                        <li key={inner.key + index} className={index === 0 ? styles.li_first : ''}>
                        {
                          index === 0 ?
                            inner :
                            <a
                            href={inner.value}
                            target={outdex === 2 ? '_blank' : ''}
                            rel={'noopener noreferrer'}>{inner.key}</a>
                        }
                        </li>
                      );
                    }
                  )}
                </ul>
                );
            })
          }
          </div>
          <div className={styles.copyrights}>
            <a
              href={'http://www.beian.miit.gov.cn/'}
              target="_blank" rel="noopener noreferrer"
              style={{marginRight: '5px', color: '#999'}}
            >
              鄂ICP备17027057号
            </a>
            Copyright ©2020 速辉科技有限公司 版权所有
          </div>
        </div>

      </div>
    );
  }
}

export default FootPage;