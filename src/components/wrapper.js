import { Layout, Input, Typography } from 'antd';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { getUsers, getPhotos } from '../actions/ListUsers';
import UserList from './userList';
import UserPhotos from './photos';
import EmptyState from './emptyState';
import FooterContent from './footer';

const {
  Header, Footer, Sider, Content,
} = Layout;

const Search = Input.Search;

class Wrapper extends Component {
    handleOnSearch = (user) => {
        this.props.getUsers(user);
    }
    getUserPhotos = (userId) => {
        this.props.getPhotos(userId)
    }
    render () {
        const {users, photos, currentUser} = this.props.SimpleReducer;
        return (
            <Layout>
                <Layout>
                    <Sider theme="light" className="sidebar">
                        <div className="searchBar">
                            <Search
                                placeholder="search your user..."
                                onSearch={value => this.handleOnSearch(value)}
                                block
                            />
                        </div>
                        <div className="userList">
                            <UserList data={users} getUserPhotos={this.getUserPhotos}/>
                        </div>
                    </Sider>
                    <Content>
                        {photos.length? <UserPhotos data={photos}/> : <EmptyState message={currentUser ? "This user doesnt have any photos" : "Do a search"} />}
                    </Content>
                </Layout>
                <Footer><FooterContent /></Footer>

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