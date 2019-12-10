import { Menu, Input } from 'antd';

const AppLayout = props => {
  const { children } = props;
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">Bird</Menu.Item>
        <Menu.Item key="profile">Profile</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{verticalAlign: 'middle'}} />
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
}

export default AppLayout;