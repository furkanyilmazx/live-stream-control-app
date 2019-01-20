import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

import { MENU, VIDEO_URL } from '../../constants';
import VideoPlayer from '../../components/VideoPlayer';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class DefaultLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}>
        <Sider
          trigger={
            <Icon
              className="default-layout-trigger"
              type={!this.state.collapsed ? 'left' : 'right'}
            />
          }
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            {MENU.map((menu, index) =>
              menu.childrens ? (
                <SubMenu
                  key={index}
                  title={
                    <span>
                      {' '}
                      <Icon type="user" /> <span> {menu.name} </span>
                    </span>
                  }>
                  {menu.childrens.map((sub_menu, sub_menu_index) => (
                    <Menu.Item key={`${index}_${sub_menu_index}`}>
                      <Icon type="pie-chart" />
                      <span>{sub_menu.name}</span>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={index}>
                  <Icon type="pie-chart" />
                  <span>{menu.name}</span>
                </Menu.Item>
              )
            )}
          </Menu>
        </Sider>
        <Layout>
          <Header className="default-layout-header">
            LSCI Live Stream Control Interface
          </Header>
          <Content
            style={{
              margin: '0 16px',
              height: '1200px',
            }}>
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                background: '#fff',
                minHeight: 360,
              }}>
              {VIDEO_URL.map((item, index) => (
                <VideoPlayer
                  key={index}
                  {...{
                    autoplay: true,
                    controls: true,
                    sources: [{ src: item.url }],
                  }}
                />
              ))}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

/**
 * Should be defined for each page
 */
DefaultLayout.propTypes = {};

/**
 * Example default prop definition
 */
DefaultLayout.defaultProps = {};

/**
 * Connect current page to redux store
 */
export default DefaultLayout;
