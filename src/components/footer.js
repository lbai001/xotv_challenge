import React, { Component } from 'react';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

class FooterContent extends Component {
    render () {
        return (
            <div className="icons-list">
            <div style={{fontSize: 30}}>
                <IconFont type="icon-facebook" />
            </div>
                Annie ©2019 Created by Xiaolu Bai
            </div>
        )
    }
}

export default FooterContent;