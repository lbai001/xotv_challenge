import React, { Component } from 'react';
import { Avatar, Divider, Row, Col } from 'antd';

class UserList extends Component {
    renderList = () => {
        const {data} = this.props;
        return data.results.map((v, k) => {
            return (
                <div key={k} onClick={() => this.props.getUserPhotos(v.username)}>
                <Row style={{padding: 20}}>
                    <Col span={6}>
                        <Avatar src={v.profile_image.small} />
                    </Col>
                    <Col span={18}>
                        <p>{v.name}</p>
                    </Col>
                </Row>
                <Divider />
                </div>
            )
        })
    }

    render () {
        const {data} = this.props;
        return data.results? this.renderList() : null;
    }
}

export default UserList;