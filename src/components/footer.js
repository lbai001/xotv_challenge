import React, { Component } from 'react';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });

class FooterContent extends Component {
    render () {
        return (
            <div className="icons-list">
                <IconFont type="icon-tuichu" />
                <IconFont type="icon-facebook" />
                <IconFont type="icon-twitter" />
            </div>
        )
    }
}

export default FooterContent;