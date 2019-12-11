import { Card, Avatar } from 'antd';

const dummy = {
  nickname: 'casio',
  Post: [],
  Followings: [],
  Followers: [],  
}

const UserProfile = () => {
  return (
    <Card
      actions={[
        <div key="twitter">twitter<br />{dummy.Post.length}</div>,
        <div key="following">followings<br />{dummy.Followings.length}</div>,
        <div key="follower">followers<br />{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname} />
    </Card>
  );
}

export default UserProfile;