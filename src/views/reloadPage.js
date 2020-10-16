import { Button } from 'antd';
import React, { Component } from 'react';
import { ReloadOutlined } from '@ant-design/icons';

class ReloadPage extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div>
        <Button icon={<ReloadOutlined />} type="default" size={'large'}></Button>
      </div>
    );
  }
}

export default ReloadPage;