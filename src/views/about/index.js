import React, { Component } from 'react';
import { Image, Card } from 'antd';
import styles from './about.module.scss';
import { PhoneOutlined, MailOutlined} from '@ant-design/icons';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className={styles.about_content}>
        <div>
          <Image src={require('@/static/images/about_us.jpg')} height={430} width={1200}/>
        </div>
        <section className={styles.section_content}>
          <div className={styles.title}>愿景</div>
          <div className={styles.text_content} style={{textAlign: 'center'}}>我们致力于用科技让普通人和小企业，享受平等的生活服务。</div>
        </section>
        <section className={styles.section_content}>
          <div className={styles.title}>企业文化</div>
          <div className={styles.text_content}>武汉速辉科技有限公司是一家专注于餐饮、酒店、娱乐等行业软、硬件研发的科技公司，是业内领先的现代化ERP创新企业。专注于行业ERP系统的开发、运营、销售及相关咨询等综合服务，通过自主研发的软硬件为行业企业建立适应互联网需求的现代化信息管理体系。</div>
          <div className={styles.text_content}>公司以增强客户长期竞争优势、提高客户盈利能力、辅助客户成长壮大为宗旨，整合、优化了ERP、CRM、DRP、BI等先进管理思想，提供全面的分行业解决方案，支持企业发展各个阶段的业务流程和智能分析。依托准确的市场定位、全面的管理团队优势、高素质的人才队伍、成熟的产品、优秀的咨询顾问服务以及为客户创造价值的服务理念，久丰公司必将帮助客户面对国际、国内激烈的竞争，通过应用信息技术不断完善和提高企业管理水平，建立核心竞争力，创造卓越业绩！</div>
          <div className={styles.text_content}>公司尊崇“踏实、拼搏、责任”的企业精神，并以诚信、共赢、开创经营理念，创造良好的企业环境，以全新的管理模式，完善的技术，周到的服务，卓越的品质为生存根本，我们始终坚持用户至上 用心服务于客户，坚持用自己的服务去打动客户。</div>
        </section>
        <section className={styles.section_content}>
          <div className={styles.title}>联系方式</div>
          <div className={styles.contact_content}>
            <Card bordered={false} className={styles.card_content}>
              <div className={styles.card_content_wraper}>
                <PhoneOutlined style={{fontSize: '50px', color: '#40D88E', margin: '10px'}}/>
                <div style={{marginLeft: '10px'}}>
                  <p style={{color: '#40D88E', fontSize: '18px'}}>电话</p>
                  <p style={{color: '#757575', fontSize: '18px'}}>400-800-900</p>
                </div>
              </div>
            </Card>
            <Card bordered={false} className={styles.card_content}>
              <div className={styles.card_content_wraper}>
                <MailOutlined style={{fontSize: '50px', color: '#26B2F0', margin: '10px'}}/>
                <div className style={{marginLeft: '10px'}}>
                  <p style={{color: '#26B2F0', fontSize: '18px'}}>邮箱</p>
                  <p style={{color: '#757575', fontSize: '18px'}}>lmj@qq.com</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    );
  }
}

export default About;