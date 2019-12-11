import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar } from 'antd';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';

const dummy = {
  isLoggedIn: false
}

const AppLayout = props => {
  const { children } = props;
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>Bird</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {dummy.isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <Link href="/"><a target="_blank">Made by viveloper</a></Link>
        </Col>
      </Row>
    </div>
  );
}

export default AppLayout;