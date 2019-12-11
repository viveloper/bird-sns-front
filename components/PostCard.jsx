import { Card, Icon, Avatar, Button } from 'antd';

const PostCard = props => {
  const { post } = props;
  return (
    <Card
      cover={post.img && <img alt="example" src={post.img} />}
      actions={[
        <Icon type="retweet" key="retweet" />,
        <Icon type="heart" key="heart" />,
        <Icon type="message" key="message" />,
        <Icon type="ellipsis" key="ellipsis" />,
      ]}
      extra={<Button>Follow</Button>}
    >
      <Card.Meta
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
  );
}

export default PostCard;