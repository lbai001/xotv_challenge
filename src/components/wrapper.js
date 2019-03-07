import { Layout, Input, Empty } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getUsers, getPhotos } from '../actions/ListUsers';
import UserList from './userList';
import UserPhotos from './photos';
import EmptyState from './emptyState';
import FooterContent from './footer';

const {
 Footer, Sider, Content,
} = Layout;

const Search = Input.Search;

class Wrapper extends Component {
  state = {
    query: ''
  }
  inputChange = e => {
    this.setState({
      query: e.target.value
    })
  }
  handleOnSearch = (user) => {
      this.props.getUsers(user);
  }
  getUserPhotos = (userId) => {
      this.props.getPhotos(userId)
  }
  render () {
    const {users, photos, currentUser, searching } = this.props.SimpleReducer;
    const { query } = this.state
    return (
      <Layout>
        <Sider theme="light" className="sidebar">
          <div className="searchBar">
            <Search
              enterButton
              placeholder="search users..."
              onSearch={value => this.handleOnSearch(value)}
              onChange={this.inputChange}
            />
          </div>
          <div className="userList">
            {(searching && query) || (users && users.results)
              ? <UserList searching={searching} data={users} getUserPhotos={this.getUserPhotos}/>
              : <Empty className="emptyUserList" description={"Search for users to discover photos..."} />
            }
          </div>
        </Sider>
        <Layout>
          <Content>
              {photos.length? <UserPhotos data={photos}/> : <EmptyState message={currentUser ? "This user doesnt have any photos" : "Search for users first"} />}
          </Content>
          <Footer style={{textAlign: 'center'}}>
            <FooterContent />
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
const mapStateToProps = state => ({
    ...state
})
const mapDispatchToProps = dispatch => ({
    getUsers : (user) => dispatch(getUsers(user)),
    getPhotos: (userId) => dispatch(getPhotos(userId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);
