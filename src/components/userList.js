import React, { Component } from 'react';
import { Avatar, Empty, List } from 'antd';

class UserList extends Component {
    render () {
        const {data, searching} = this.props;
        if (data && data.results && data.results.length || searching) {
          return (
            <List
              loading={searching}
              dataSource={data.results}
              renderItem={item => (
                <List.Item onClick={() => this.props.getUserPhotos(item.username)} style={{cursor: 'pointer'}}>
                  <List.Item.Meta
                    avatar={<Avatar src={item.profile_image.small} />}
                    title={item.name}
                   />
                </List.Item>
                )}
              />
            )
        } else {
          return (
            <Empty className="emptyUserList" description={"No user results found."} />
          )
        }
    }
}

export default UserList;
