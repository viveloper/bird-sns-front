import { Button, List, Card, Icon } from 'antd';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
  return (
    <div>
      <NicknameEditForm />      
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Following list</div>}
        loadMore={<Button style={{ width: '100%' }}>More</Button>}
        bordered
        dataSource={['data source one', ' data source two', 'data source three']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
      <List
        style={{ marginBottom: '20px' }}
        grid={{ gutter: 4, xs: 2, md: 3 }}
        size="small"
        header={<div>Follower list</div>}
        loadMore={<Button style={{ width: '100%' }}>More</Button>}
        bordered
        dataSource={['data source one', ' data source two', 'data source three']}
        renderItem={item => (
          <List.Item style={{ marginTop: '20px' }}>
            <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default Profile;