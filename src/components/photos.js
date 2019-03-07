import React, { Component } from 'react';
import { Avatar, Divider, Row, Col} from 'antd';
import EmptyState from './emptyState';

class UserPhotos extends Component {
    renderPhotos = () => {
        const {data} = this.props;
        return data.map((v, k) => {
            return (
                <Col span={8} key={k}>
                    <a href={v.urls.raw}>
                        <img src={v.urls.thumb} alt={v.urls.small} />
                    </a>
                </Col>
            )
        })
    }

    render () {
        const {data} = this.props;
        return <Row>{this.renderPhotos()}</Row>
    }
}

export default UserPhotos;