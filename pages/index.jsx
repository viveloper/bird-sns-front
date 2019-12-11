import { Button, Card, Icon, Avatar } from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLoggedIn: true,
  mainPosts: [
    {
      User: {
        id: 1,
        nickname: 'casio'
      },
      content: 'first post',
      img: 'https://pbs.twimg.com/profile_images/875135141135302656/eiM2Wz66_400x400.jpg',
      createdAt: '2019-12-11'
    },
    {
      User: {
        id: 2,
        nickname: 'casio2'
      },
      content: 'second post',
      img: 'https://pbs.twimg.com/profile_images/875135141135302656/eiM2Wz66_400x400.jpg',
      createdAt: '2019-12-12'
    }
  ],
}

const Home = () => {
  return (
    <div>
      {dummy.isLoggedIn && <PostForm imagePaths={dummy.imagePaths} />}
      {dummy.mainPosts.map((post, index) => <PostCard key={post.createdAt} post={post} />)}
    </div>
  );
}

export default Home;