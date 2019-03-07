import React, { Component } from 'react';
import { Empty } from 'antd';

class EmptyState extends Component {
    render () {
        return (
            <Empty
                image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
                description={
                <span style={{fontWeight: 'bold'}}>
                    {this.props.message}
                </span>
                }
            >
          </Empty>
        )
    }
}

export default EmptyState;