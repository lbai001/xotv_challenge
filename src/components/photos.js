import React, { Component } from 'react';
import { Card } from 'antd';
import EmptyState from './emptyState';

class UserPhotos extends Component {


    render () {
        const { data } = this.props;
        return (
          <Card loading={!data.length} title="Photos">
            {data.map((v,k) => (
              <Card.Grid style={{ width: 'auto'}}>
                <img src={v.urls.thumb} alt={v.urls.small} />
              </Card.Grid>
            ))}
          </Card>
        )
    }
}

export default UserPhotos;
