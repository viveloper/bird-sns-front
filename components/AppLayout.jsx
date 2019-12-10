import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
      <Link href="/signup"><a><Button>SignUp</Button></a></Link>
      {children}
    </div>
  );
}

export default AppLayout;